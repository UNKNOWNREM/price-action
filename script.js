/**
 * Price Action 科目模組 (script.js)
 *
 * 由 Router (app.js) 呼叫 App.initSubject() 啟動，不直接自啟動。
 *
 * 功能：
 * 1. 科目首頁（PA 章節卡片總覽）
 * 2. 章節小節內容渲染
 * 3. 學習進度追蹤 (localStorage)
 * 4. 搜尋功能（PA 內部）
 * 5. 個人筆記
 */

const App = {
    CHAPTERS: [], // 課程資料儲存區
    currentChapter: null,
    currentSection: null,
    doneSections: JSON.parse(localStorage.getItem('doneSections') || '[]'),
    notes: {}, 
    expandedChapters: [],
    _searchBound: false,

    /* 由 Router 呼叫：進入科目 */
    initSubject() {
        const subjectId = Router.currentSubjectId || 'pa';
        this.notes = JSON.parse(localStorage.getItem(`${subjectId}_notes`) || '{}');
        
        // 確保 App.CHAPTERS 是最新的
        if (Router.loadedSubjects[subjectId]) {
            App.CHAPTERS = Router.loadedSubjects[subjectId];
        }
        
        this.renderSidebar();
        if (!this._searchBound) {
            const input = document.getElementById('search-input');
            if (input) {
                input.oninput = (e) => this.handleSearch(e.target.value);
                this._searchBound = true;
            }
        }
    },

    /* 簡易 Markdown 解析 */
    parseContent(html) {
        if (!html) return '';
        return html
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    },

    /* 科目首頁（章節卡片總覽）*/
    showSubjectHome() {
        const subjectId = Router.currentSubjectId || 'pa';
        const subject = SUBJECTS.find(s => s.id === subjectId);
        
        this.currentChapter = null;
        this.currentSection = null;
        history.replaceState(null, null, `#${subjectId}`);

        Router.updateBreadcrumb([
            { label: subject ? subject.title : '科目', onclick: "App.showSubjectHome()" }
        ]);

        let total = 0;
        (App.CHAPTERS || []).forEach(c => total += c.sections.length);
        const doneCount = this.doneSections.length;
        const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;

        const getIcon = (title) => {
            if (title.includes('基礎') || title.includes('K線')) return 'fa-seedling';
            if (title.includes('趨勢') || title.includes('高潮')) return 'fa-chart-line';
            if (title.includes('突破')) return 'fa-bolt';
            if (title.includes('交易區間')) return 'fa-square-full';
            if (title.includes('反轉')) return 'fa-rotate';
            if (title.includes('進場')) return 'fa-sign-in-alt';
            return subject ? subject.icon : 'fa-book-open';
        };

        document.getElementById('content').innerHTML = `
            <div class="dashboard fade-in">
                <section class="welcome-hero glass" style="background: linear-gradient(135deg, var(--glass-bg), ${subject ? subject.color + '22' : 'rgba(59, 130, 246, 0.15)'})">
                    <div class="hero-content">
                        <div class="badge" style="background:${subject ? subject.color : 'var(--primary)'}">${subject ? subject.title : 'Trading'} 學院</div>
                        <h1>歡迎回來，<span>交易者</span></h1>
                        <p>${subject ? subject.desc : '系統化學習交易知識。今天也是進步的一天。'}</p>
                        <div class="hero-stats">
                            <div class="h-stat">
                                <span class="num">${doneCount}</span>
                                <span class="lab">已讀小節</span>
                            </div>
                            <div class="h-stat">
                                <span class="num">${percent}%</span>
                                <span class="lab">學習進度</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-visual" style="color:${subject ? subject.color : 'var(--primary)'}"><i class="fas ${subject ? subject.icon : 'fa-chart-pie'}"></i></div>
                </section>
                <div class="dashboard-grid">
                    <h2 class="section-label"><i class="fas fa-layer-group"></i> 核心課程章節</h2>
                    <div class="chapters-grid">
                        ${(App.CHAPTERS || []).map(chap => {
                            const doneInChap = chap.sections.filter(s =>
                                this.doneSections.includes(`${chap.id}:${s.title}`)
                            ).length;
                            const pct = Math.round((doneInChap / chap.sections.length) * 100);
                            return `
                                <div class="chapter-card glass" onclick="App.quickStart('${chap.id}')">
                                    <div class="card-icon" style="color:${subject ? subject.color : 'var(--primary)'}">
                                        <i class="fas ${getIcon(chap.title)}"></i>
                                    </div>
                                    <div class="card-info">
                                        <h3>${this.formatTitle(chap.title)}</h3>
                                        <div class="card-meta">
                                            <div class="p-bar-bg">
                                                <div class="p-bar-fill" style="width:${pct}%; background:${subject ? subject.color : 'var(--primary)'}"></div>
                                            </div>
                                            <span class="p-text">${doneInChap}/${chap.sections.length}</span>
                                        </div>
                                    </div>
                                    <div class="card-arrow"><i class="fas fa-chevron-right"></i></div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

        this.renderSidebar();
        this.updateSidebarActive();
        if (window.innerWidth <= 1024) Router.closeSidebar();
    },

    quickStart(chapId) {
        const chap = App.CHAPTERS.find(c => c.id === chapId);
        if (chap) this.loadSection(chapId, chap.sections[0].title);
    },

    /* 載入小節 */
    loadSection(chapId, secTitle) {
        const chapter = App.CHAPTERS.find(c => c.id === chapId);
        if (!chapter) return;
        const section = chapter.sections.find(s => s.title === secTitle);
        if (!section) return;

        const subjectId = Router.currentSubjectId || 'pa';
        const subject = SUBJECTS.find(s => s.id === subjectId);
        
        this.currentChapter = chapter;
        this.currentSection = section;
        window.location.hash = `${subjectId}/${chapId}/${encodeURIComponent(secTitle)}`;

        if (!this.expandedChapters.includes(chapId)) {
            this.expandedChapters.push(chapId);
        }

        Router.updateBreadcrumb([
            { label: subject ? subject.title : '科目', onclick: "App.showSubjectHome()" },
            { label: this.formatTitle(chapter.title), onclick: `App.expandChapter('${chapter.id}')` },
            { label: secTitle }
        ]);

        const isDone = this.doneSections.includes(`${chapId}:${secTitle}`);
        const safeId = secTitle.replace(/[^a-zA-Z0-9]/g, '_');
        const safeTitle = secTitle.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

        document.getElementById('content').innerHTML = `
            <div class="section-container fade-in">
                <div class="section-block glass">
                    <div class="section-header">
                        <h1>${section.title}</h1>
                        <button class="btn-done ${isDone ? 'active' : ''}"
                                onclick="App.toggleDone('${chapId}', '${safeTitle}')">
                            <i class="fas ${isDone ? 'fa-check-circle' : 'fa-circle'}"></i>
                            ${isDone ? '已完成' : '標記為完成'}
                        </button>
                    </div>
                    <div class="section-content">
                        ${this.parseContent(section.html)}
                    </div>
                    <div class="note-area">
                        <div class="note-header" onclick="App.toggleNote('${chapId}', '${safeTitle}')">
                            <i class="fas fa-pencil-alt"></i>
                            <span>我的筆記</span>
                            <i class="fas fa-chevron-down note-arrow"></i>
                        </div>
                        <div class="note-body" id="note-body-${chapId}-${safeId}">
                            <textarea
                                placeholder="在此記錄你的想法、疑問或延伸觀察..."
                                oninput="App.saveNote('${chapId}', '${safeTitle}', this.value)"
                            >${this.notes[chapId + ':' + secTitle] || ''}</textarea>
                        </div>
                    </div>
                </div>
                <div class="section-nav">
                    ${this.getPrevNextHtml(chapter, section)}
                </div>
            </div>
        `;

        this.renderSidebar();
        this.updateSidebarActive();
        window.scrollTo(0, 0);
        if (window.innerWidth <= 768) Router.closeSidebar();

        // 觸發 MathJax 重新渲染數學公式
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(function (err) {
                console.log('MathJax rendering error:', err);
            });
        }
    },

    getPrevNextHtml(chap, sec) {
        const idx = chap.sections.indexOf(sec);
        const prev = chap.sections[idx - 1];
        const next = chap.sections[idx + 1];
        
        // 取得當前科目 ID
        const subjectId = Router.currentSubjectId || 'pa';

        return `
            ${prev
                ? `<button class="nav-btn glass prev" onclick="location.hash='#${subjectId}/${chap.id}/${encodeURIComponent(prev.title)}'">
                       <i class="fas fa-chevron-left"></i> 上一節
                   </button>`
                : '<div></div>'}
            ${next
                ? `<button class="nav-btn glass next" onclick="location.hash='#${subjectId}/${chap.id}/${encodeURIComponent(next.title)}'">
                       下一節 <i class="fas fa-chevron-right"></i>
                   </button>`
                : '<div></div>'}
        `;
    },

    /* 筆記 */
    saveNote(chapId, secTitle, value) {
        const key = `${chapId}:${secTitle}`;
        const subjectId = Router.currentSubjectId;
        if (value.trim()) {
            this.notes[key] = value;
        } else {
            delete this.notes[key];
        }
        localStorage.setItem(`${subjectId}_notes`, JSON.stringify(this.notes));
    },

    toggleNote(chapId, secTitle) {
        const safeId = secTitle.replace(/[^a-zA-Z0-9]/g, '_');
        const body = document.getElementById(`note-body-${chapId}-${safeId}`);
        if (!body) return;
        body.classList.toggle('open');
        const arrow = body.previousElementSibling?.querySelector('.note-arrow');
        if (arrow) arrow.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
    },

    /* 進度追蹤 */
    toggleDone(chapId, secTitle) {
        const key = `${chapId}:${secTitle}`;
        const idx = this.doneSections.indexOf(key);
        if (idx > -1) {
            this.doneSections.splice(idx, 1);
        } else {
            this.doneSections.push(key);
        }
        localStorage.setItem('doneSections', JSON.stringify(this.doneSections));
        this.loadSection(chapId, secTitle);
        this.renderSidebar();
    },

    /* Sidebar（PA 章節列表）*/
    toggleChapter(chapId) {
        const idx = this.expandedChapters.indexOf(chapId);
        if (idx > -1) {
            this.expandedChapters.splice(idx, 1);
        } else {
            this.expandedChapters.push(chapId);
        }
        this.renderSidebar();
    },

    renderSidebar() {
        const menu = document.getElementById('sidebar-chapter-menu') || document.getElementById('sidebar-menu');
        if (!menu) return;
        
        const subjectId = Router.currentSubjectId || 'pa';
        menu.innerHTML = (App.CHAPTERS || []).map(chap => {
            const isExpanded = this.expandedChapters.includes(chap.id);
            return `
                <div class="sidebar-chapter ${isExpanded ? 'expanded' : ''}">
                    <div class="chapter-title" onclick="App.toggleChapter('${chap.id}')">
                        <span>${this.formatTitle(chap.title)}</span>
                        <i class="fas fa-chevron-right arrow"></i>
                    </div>
                    <div class="section-list">
                        ${chap.sections.map(sec => {
                            const isDone = this.doneSections.includes(`${chap.id}:${sec.title}`);
                            const safe = sec.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
                            return `
                                <div class="section-item"
                                     data-id="${chap.id}:${sec.title}"
                                     onclick="location.hash='#${subjectId}/${chap.id}/${encodeURIComponent(sec.title)}'">
                                    <i class="fas ${isDone ? 'fa-check-circle done-icon' : 'fa-circle-notch'}"></i>
                                    <span>${sec.title}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');
    },

    updateSidebarActive() {
        const currentId = this.currentChapter
            ? `${this.currentChapter.id}:${this.currentSection.title}`
            : null;
        document.querySelectorAll('.section-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === currentId);
        });
    },

    /* 搜尋 */
    handleSearch(query) {
        if (!query) {
            this.renderSidebar();
            return;
        }
        const q = query.toLowerCase();
        const results = [];
        (App.CHAPTERS || []).forEach(chap => {
            chap.sections.forEach(sec => {
                if (sec.title.toLowerCase().includes(q) || sec.html.toLowerCase().includes(q)) {
                    results.push({ chap, sec });
                }
            });
        });

        const menu = document.getElementById('sidebar-menu');
        if (!results.length) {
            menu.innerHTML = '<div style="padding:20px;color:var(--text-muted)">找不到相關內容</div>';
        } else {
            const safe = (t) => t.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            menu.innerHTML = `
                <div class="search-results-label">搜尋結果 (${results.length})</div>
                <div class="section-list">
                    ${results.map(r => `
                        <div class="section-item"
                             onclick="App.loadSection('${r.chap.id}', '${safe(r.sec.title)}')">
                            <i class="fas fa-search"></i>
                            <span>${r.sec.title}</span>
                            <small style="display:block;font-size:0.7em;opacity:0.7">${r.chap.title}</small>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    },

    // ── 工具 ──────────────────────────────────────────────
    formatTitle(title) {
        return title.replace(/^Part\s+[IVXLC]+\s+/i, '');
    }
};
