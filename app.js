/**
 * TRADING NOTES — 主路由控制器 (app.js)
 *
 * 路由規則：
 *   #              → 科目 Dashboard（所有科目卡片）
 *   #pa            → PA 科目首頁
 *   #pa/ch/secTitle → PA 章節小節
 *   #chan          → 纏論（Coming Soon Toast）
 */

const Router = {
    currentSubjectId: null,
    loadedSubjects: {}, // 紀錄已載入的科目資料
    theme: localStorage.getItem('theme') || 'dark',
    fontSize: parseInt(localStorage.getItem('fontSize') || '16'),

    init() {
        this.bindGlobalEvents(); // 優先綁定 UI 事件，確保基礎功能可用
        this.applyTheme();
        this.applyFontSize();
        this.renderSidebarSubjects();
        window.addEventListener('hashchange', () => this.route());
        this.route();
    },

    /* 路由解析 */
    route() {
        const raw = window.location.hash.substring(1);
        if (!raw) {
            this.showSubjectDashboard();
            return;
        }

        const parts = raw.split('/');
        const subjectId = parts[0];
        const subject = SUBJECTS.find(s => s.id === subjectId);

        if (!subject) {
            this.showSubjectDashboard();
            return;
        }

        if (subject.status === 'coming') {
            this.showToast(`${subject.title} 尚未開放，敬請期待！`, subject.color);
            history.replaceState(null, null, ' ');
            if (this.currentSubjectId === null) this.showSubjectDashboard();
            return;
        }

        // 進入科目
        this.enterSubject(subjectId).then(() => {
            if (parts.length >= 3) {
                const chapId = parts[1];
                let secTitle;
                try {
                    secTitle = decodeURIComponent(parts.slice(2).join('/'));
                } catch (e) {
                    // 如果 decodeURIComponent 失敗，直接使用原始字符串
                    secTitle = parts.slice(2).join('/');
                }
                if (typeof App !== 'undefined') {
                    App.loadSection(chapId, secTitle);
                }
            } else {
                if (typeof App !== 'undefined') {
                    App.showSubjectHome();
                }
            }
        });
    },

    /* 動態載入科目資料 */
    loadSubjectData(subjectId) {
        if (this.loadedSubjects[subjectId]) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `data/${subjectId}.js`;
            script.onload = () => {
                this.loadedSubjects[subjectId] = typeof CHAPTERS !== 'undefined' ? CHAPTERS : [];
                if (typeof window.CHAPTERS !== 'undefined') window.CHAPTERS = undefined;
                resolve();
            };
            script.onerror = () => {
                this.showToast(`載入 ${subjectId} 資料失敗`, '#ff4d4d');
                reject();
            };
            document.body.appendChild(script);
        });
    },

    /* 科目 Dashboard */
    showSubjectDashboard() {
        this.currentSubjectId = null;
        this.updateSidebarSubjectsActive(null);
        this.clearSubjectSidebar();
        this.hideSidebarSearch();
        this.updateBreadcrumb([]);

        const stats = this.getTotalStats();

        document.getElementById('content').innerHTML = `
            <div class="subject-dashboard fade-in">
                <section class="subject-hero glass">
                    <div class="hero-content">
                        <div class="hero-brand">TRADING NOTES</div>
                        <h1>知識就是<span>力量</span></h1>
                        <p>系統化學習交易知識，建立自己的市場認知框架</p>
                        <div class="hero-stats">
                            <div class="h-stat">
                                <span class="num">${stats.activeSubjects}</span>
                                <span class="lab">開放科目</span>
                            </div>
                            <div class="h-stat">
                                <span class="num">${stats.totalDone}</span>
                                <span class="lab">已讀小節</span>
                            </div>
                            <div class="h-stat">
                                <span class="num">${stats.overallPercent}%</span>
                                <span class="lab">總體進度</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <i class="fas fa-book-atlas"></i>
                    </div>
                </section>
                ${this.renderSubjectsByCategory()}
            </div>
        `;

        if (window.innerWidth <= 1024) this.closeSidebar();
    },

    getTotalStats() {
        const done = JSON.parse(localStorage.getItem('doneSections') || '[]');
        const active = SUBJECTS.filter(s => s.status === 'active');
        let total = 0;
        active.forEach(s => {
            try {
                const data = (s.getData && typeof s.getData === 'function') ? s.getData() : [];
                if (Array.isArray(data)) {
                    data.forEach(c => {
                        if (c.sections) total += c.sections.length;
                    });
                }
            } catch (e) {
                console.error('統計科目資料時出錯:', s.id, e);
            }
        });
        return {
            activeSubjects: active.length,
            totalDone: done.length,
            totalSections: total,
            overallPercent: total > 0 ? Math.round((done.length / total) * 100) : 0
        };
    },

    renderSubjectsByCategory() {
        return SUBJECT_CATEGORIES.map(cat => {
            const list = SUBJECTS.filter(s => s.category === cat);
            if (!list.length) return '';
            return `
                <div class="subjects-section">
                    <h2 class="subjects-section-label">
                        <span class="cat-accent"></span>${cat}
                    </h2>
                    <div class="subjects-grid">
                        ${list.map(s => this.renderSubjectCard(s)).join('')}
                    </div>
                </div>
            `;
        }).join('');
    },

    renderSubjectCard(subject) {
        const isComing = subject.status === 'coming';
        const prog = this.getSubjectProgress(subject);
        const tags = subject.tags.map(t => `<span class="subject-tag">${t}</span>`).join('');

        const progressHtml = !isComing
            ? `<div class="subject-progress">
                   <div class="subject-p-bar">
                       <div class="subject-p-fill" style="width:${prog.percent}%;background:${subject.color}"></div>
                   </div>
                   <span class="subject-p-text">${prog.done}/${prog.total}</span>
               </div>`
            : `<div class="coming-badge"><i class="fas fa-hourglass-half"></i> 即將推出</div>`;

        return `
            <div class="subject-card${isComing ? ' coming' : ''}"
                 style="--subject-color:${subject.color}"
                 onclick="Router.navigateTo('${subject.id}')">
                <div class="subject-card-accent"></div>
                <div class="subject-card-icon">
                    <i class="fas ${subject.icon}"></i>
                </div>
                <div class="subject-card-body">
                    <h3>${subject.title}</h3>
                    <p class="subject-subtitle">${subject.subtitle}</p>
                    <p class="subject-desc">${subject.desc}</p>
                    <div class="subject-tags">${tags}</div>
                    ${progressHtml}
                </div>
                ${!isComing ? '<div class="subject-card-arrow"><i class="fas fa-arrow-right"></i></div>' : ''}
            </div>
        `;
    },

    getSubjectProgress(subject) {
        if (!subject.getData) return { done: 0, total: 0, percent: 0 };
        const data = subject.getData();
        const doneSections = JSON.parse(localStorage.getItem('doneSections') || '[]');
        let total = 0;
        data.forEach(c => total += c.sections.length);
        const chapIds = new Set(data.map(c => c.id));
        const done = doneSections.filter(key => chapIds.has(key.split(':')[0])).length;
        return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
    },

    navigateTo(subjectId) {
        const subject = SUBJECTS.find(s => s.id === subjectId);
        if (!subject) return;
        if (subject.status === 'coming') {
            this.showToast(`${subject.title} 尚未開放，敬請期待！`, subject.color);
            return;
        }
        window.location.hash = subjectId;
    },

    /* 進入科目 */
    async enterSubject(subjectId) {
        if (this.currentSubjectId === subjectId) return;

        try {
            // 先設定當前 ID，確保後續 App.initSubject() 呼叫時能正確取得
            this.currentSubjectId = subjectId;
            
            await this.loadSubjectData(subjectId);
            
            // 更新 App 的資料來源並初始化
            if (typeof App !== 'undefined') {
                const chapters = this.loadedSubjects[subjectId] || [];
                
                // 全局自動注入免責聲明
                if (chapters.length > 0 && chapters[0].sections) {
                    const hasDisclaimer = chapters[0].sections.some(s => s.title && s.title.includes('免責聲明'));
                    if (!hasDisclaimer) {
                        chapters[0].sections.unshift({
                            "title": "⚠️ 免責聲明與風險警告",
                            "html": `
                                <div class="callout co-warning">
                                    <div class="cot">本知識庫內容不構成任何投資建議 (Not Financial Advice)</div>
                                    <p>本知識庫所探討之<strong>所有量化模型、交易策略與市場微觀結構分析</strong>，均為學術探討、個人筆記與歷史回測紀錄，<strong>絕不構成任何形式的財務、投資或交易建議</strong>。</p>
                                    <ul>
                                        <li class="ind0"><strong>內容準確性免責：</strong>筆記中提及的任何參數設定（如時間週期、標準差乘數）、計算公式或回測數據，<strong>均不保證其絕對正確性、即時性與適用性</strong>。市場結構隨時在變化，過去最佳化的參數可能在當前市場已經失效。</li>
                                        <li class="ind0"><strong>自負盈虧：</strong>金融市場（特別是加密貨幣與衍生性商品）具備極高風險與不可預測性。讀者應自行評估風險，對自身所有的交易決策與財務損失負起完全的責任。</li>
                                        <li class="ind0"><strong>模型失效風險：</strong>任何基於歷史數據的指標與常態分佈假設，在面臨真實市場的「黑天鵝」極端事件時皆可能完全失效，歷史績效絕不保證未來收益。</li>
                                    </ul>
                                </div>
                            `
                        });
                    }
                }
                
                App.CHAPTERS = chapters;
                if (App.initSubject) App.initSubject();
            }
        } catch (error) {
            console.error(`Failed to enter subject: ${subjectId}`, error);
            return;
        }

        this.updateSidebarSubjectsActive(subjectId);
        this.showSidebarSearch();
    },

    /* 處理側邊欄科目的點擊與展開/收合 */
    handleSubjectClick(id, element) {
        if (id === this.currentSubjectId && this.currentSubjectId !== null) {
            // 如果點擊的是當前已打開的科目，則進行展開/收合操作
            const menu = document.getElementById('sidebar-chapter-menu');
            const icon = element.querySelector('.subject-toggle-icon');
            if (menu) {
                const isCollapsed = menu.classList.toggle('collapsed');
                if (icon) {
                    icon.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            }
        } else {
            // 否則導航到該科目
            this.navigateTo(id);
        }
    },

    /* Sidebar 管理 */
    renderSidebarSubjects() {
        const activeSubjects = SUBJECTS.filter(s => s.status === 'active');
        const comingSubjects = SUBJECTS.filter(s => s.status === 'coming');
        const currentId = this.currentSubjectId;

        document.getElementById('sidebar-subjects').innerHTML = `
            <div class="sidebar-subjects-nav">
                <div class="sidebar-home-btn ${!currentId ? 'active' : ''}" onclick="Router.goHome()">
                    <i class="fas fa-house"></i>
                    <span>所有科目</span>
                </div>
                <div class="sidebar-divider"></div>
                
                <div class="sidebar-category">開放中</div>
                ${activeSubjects.map(s => {
                    const isActive = s.id === currentId;
                    return `
                        <div class="sidebar-subject-wrapper">
                            <div class="sidebar-subject-item ${isActive ? 'active' : ''}"
                                 data-subject="${s.id}"
                                 onclick="Router.handleSubjectClick('${s.id}', this)"
                                 title="${s.title}">
                                <i class="fas ${s.icon}" style="color:${s.color}"></i>
                                <span>${s.title}</span>
                                ${isActive ? `<i class="fas fa-chevron-down subject-toggle-icon" style="transform: rotate(180deg); margin-left: auto; font-size: 0.7rem; color: var(--text-muted); transition: transform 0.3s ease;"></i>` : ''}
                            </div>
                            ${isActive ? '<div id="sidebar-chapter-menu"></div>' : ''}
                        </div>
                    `;
                }).join('')}

                <details class="sidebar-coming-group">
                    <summary class="sidebar-category coming-summary">
                        <span>即將推出 (${comingSubjects.length})</span>
                        <i class="fas fa-chevron-down"></i>
                    </summary>
                    <div class="coming-list">
                        ${comingSubjects.map(s => `
                            <div class="sidebar-subject-item coming"
                                 data-subject="${s.id}"
                                 onclick="Router.navigateTo('${s.id}')"
                                 title="${s.title}">
                                <i class="fas ${s.icon}" style="color:var(--text-muted)"></i>
                                <span>${s.title}</span>
                                <i class="fas fa-lock sidebar-lock"></i>
                            </div>
                        `).join('')}
                    </div>
                </details>
            </div>
        `;
        
        if (typeof App !== 'undefined' && App.renderSidebar) {
            App.renderSidebar();
        }
    },

    updateSidebarSubjectsActive(activeId) {
        // 由於章節容器是動態插在科目下方的，當科目切換時必須重新渲染整個側邊欄結構
        this.renderSidebarSubjects();
    },

    clearSubjectSidebar() {
        const menu = document.getElementById('sidebar-menu');
        if (menu) menu.innerHTML = '';
    },

    showSidebarSearch() {
        const box = document.getElementById('sidebar-search-box');
        if (box) box.style.display = '';
    },

    hideSidebarSearch() {
        const box = document.getElementById('sidebar-search-box');
        if (box) box.style.display = 'none';
        const input = document.getElementById('search-input');
        if (input) input.value = '';
    },

    goHome() {
        if (window.location.hash === '' || window.location.hash === '#') {
            this.showSubjectDashboard();
        } else {
            window.location.hash = '';
        }
    },

    /* 麵包屑 */
    updateBreadcrumb(parts) {
        const el = document.getElementById('breadcrumb-display');
        if (!el) return;
        if (!parts.length) {
            el.innerHTML = '<span class="bc-home"><i class="fas fa-house"></i> TRADING NOTES</span>';
            return;
        }
        el.innerHTML = parts.map((p, i) =>
            i < parts.length - 1
                ? `<span class="bc-link" onclick="${p.onclick}">${p.label}</span><span class="bc-sep"> / </span>`
                : `<span class="bc-current">${p.label}</span>`
        ).join('');
    },

    /* Toast */
    showToast(message, color) {
        const old = document.getElementById('tn-toast');
        if (old) old.remove();
        const toast = document.createElement('div');
        toast.id = 'tn-toast';
        toast.className = 'tn-toast';
        toast.innerHTML = `<i class="fas fa-clock" style="color:${color || 'var(--primary)'}"></i><span>${message}</span>`;
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        });
    },

    /* 主題 & 字體 */
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const icon = document.querySelector('#theme-toggle i');
        if (icon) icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    },

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    },

    applyFontSize() {
        document.documentElement.style.setProperty('--base-font-size', `${this.fontSize}px`);
        localStorage.setItem('fontSize', this.fontSize);
        const display = document.getElementById('font-size-display');
        if (display) display.textContent = this.fontSize;
    },

    changeFontSize(delta) {
        this.fontSize = Math.min(24, Math.max(12, this.fontSize + delta));
        this.applyFontSize();
    },

    /* 事件綁定 */
    bindGlobalEvents() {
        document.getElementById('theme-toggle').onclick = () => this.toggleTheme();
        document.getElementById('font-up').onclick = () => this.changeFontSize(2);
        document.getElementById('font-down').onclick = () => this.changeFontSize(-2);
        document.getElementById('mobile-menu-toggle').onclick = () => this.toggleSidebar();
        document.getElementById('sidebar-overlay').onclick = () => this.closeSidebar();
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const isMobile = window.innerWidth <= 1024;
        if (isMobile) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            sidebar.classList.remove('collapsed');
        } else {
            sidebar.classList.toggle('collapsed');
            sidebar.classList.remove('open');
        }
    },

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Router.init());
