/**
 * TRADING NOTES — 科目註冊表
 */

const SUBJECTS = [
    {
        id: 'pa',
        title: 'Price Action',
        subtitle: 'Al Brooks — Reading Price Charts Bar by Bar',
        desc: '逐根 K 線解讀市場博弈本質，涵蓋趨勢、區間、信號棒完整體系',
        tags: ['趨勢', '形態', 'K線'],
        color: '#A88B6A',
        icon: 'fa-chart-line',
        getData: () => (typeof Router !== 'undefined' && Router.loadedSubjects['pa']) ? Router.loadedSubjects['pa'] : [],
        status: 'active',
        category: '價格行為與結構'
    },
    {
        id: 'chan',
        title: '纏論',
        subtitle: '纏中說禪技術理論',
        desc: '筆、線段、中樞、趨勢的完整分析框架，走勢唯一性原理',
        tags: ['走勢分類', '中樞', '買賣點'],
        color: '#5D8A85',
        icon: 'fa-yin-yang',
        status: 'coming',
        category: '波動幾何與時間週期'
    },
    {
        id: 'wyckoff',
        title: 'Wyckoff',
        subtitle: 'Wyckoff Method',
        desc: '吸籌/派發結構、彈簧/推升、複合人操盤邏輯與成交量分析',
        tags: ['籌碼分析', '量價', '吸籌派發'],
        color: '#748D92',
        icon: 'fa-scale-balanced',
        getData: () => (typeof Router !== 'undefined' && Router.loadedSubjects['wyckoff']) ? Router.loadedSubjects['wyckoff'] : [],
        status: 'active',
        category: '機構交易體系'
    },
    {
        id: 'smc-ict-core',
        title: 'SMC / ICT 核心體系',
        subtitle: 'Smart Money Concepts & ICT Foundations',
        desc: 'ICT 原型概念完整體系：AMD 三階段模型、PD Arrays（OB/FVG/Breaker）、流動性掃除邏輯、BOS/MSS 市場結構，以及 SMC 對 ICT 概念的簡化詮釋與差異對照',
        tags: ['機構交易', '流動性', 'AMD模型', 'PD Arrays'],
        color: '#4a9eff',
        icon: 'fa-building-columns',
        status: 'coming',
        category: '機構交易體系'
    },
    {
        id: 'ict-time-model',
        title: 'ICT 時間模型',
        subtitle: 'Killzone / AMD / CRT / Silver Bullet',
        desc: 'ICT 最獨特的時間維度交易體系：四大 Killzone 時間窗口、Power of Three 日內結構、CRT（K棒範圍理論）掃除模型、Silver Bullet 精準進場策略，以及 IPDA 演算法價格遞送邏輯',
        tags: ['Killzone', 'CRT', 'Silver Bullet', '時間窗口'],
        color: '#60a5fa',
        icon: 'fa-hourglass-half',
        status: 'coming',
        category: '機構交易體系'
    },
    {
        id: 'mmxm',
        title: 'MMXM',
        subtitle: 'Market Maker Model (ICT)',
        desc: '解析造市商模型（MMXM）的完整路徑，它是 AMD 模型在做市商視角下的延伸應用，涵蓋流動性循環與行情遞送邏輯。',
        tags: ['流動性循環', '假突破', 'ICT'],
        color: '#3b82f6',
        icon: 'fa-diagram-successor',
        status: 'coming',
        category: '機構交易體系'
    },
    {
        id: 'vegas',
        title: 'Vegas Channel',
        subtitle: 'Vegas Tunnel Method',
        desc: 'EMA 144/169 短期通道與 EMA 576/676 長期通道構成的趨勢追蹤系統，判斷多空偏向與動能進場',
        tags: ['EMA通道', '趨勢追蹤', '動能'],
        color: '#a855f7',
        icon: 'fa-wave-square',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'vp',
        title: 'Volume Profile',
        subtitle: '成交量剖面分析',
        desc: 'POC、VAH/VAL、TPO 圖、成交量分佈在關鍵價位的應用',
        tags: ['成交量', 'POC', 'Value Area'],
        color: '#f43f5e',
        icon: 'fa-chart-bar',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    {
        id: 'orderflow',
        title: 'Order Flow',
        subtitle: 'CVD / Delta Analysis',
        desc: '買賣單流分析、Delta 背離、CVD 指標與訂單簿解讀，偵測主力意圖',
        tags: ['Delta', 'CVD', '訂單簿'],
        color: '#fb923c',
        icon: 'fa-arrows-up-down',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    {
        id: 'vwap',
        title: 'VWAP',
        subtitle: 'Volume Weighted Average Price',
        desc: '機構成本線、VWAP 偏離交易、錨點 VWAP、標準差帶應用',
        tags: ['機構成本', '錨點', '偏離'],
        color: '#22d3ee',
        icon: 'fa-water',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    /* 技術指標 */
    {
        id: 'ema-sma',
        title: 'EMA / SMA',
        subtitle: '指數移動平均 & 簡單移動平均',
        desc: 'EMA 與 SMA 的計算原理、黃金/死亡交叉、多均線排列判斷趨勢強度與方向',
        tags: ['均線', '趨勢', '交叉'],
        color: '#06b6d4',
        icon: 'fa-chart-line',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'bb',
        title: '布林帶 (BB)',
        subtitle: 'Bollinger Bands',
        desc: '中軌 SMA ± 2σ 標準差帶，偵測波動收縮（擠壓）與擴張突破，判斷超買超賣',
        tags: ['波動率', '標準差', '超買超賣'],
        color: '#5E8C7A',
        icon: 'fa-circle-nodes',
        getData: () => (typeof Router !== 'undefined' && Router.loadedSubjects['bb']) ? Router.loadedSubjects['bb'] : [],
        status: 'active',
        category: '傳統技術指標'
    },
    {
        id: 'rsi',
        title: 'RSI',
        subtitle: 'Relative Strength Index',
        desc: '相對強弱指標，14 期 RSI 衡量漲跌幅比率，辨別超買（>70）、超賣（<30）與背離訊號',
        tags: ['動量', '背離', '超買超賣'],
        color: '#D4A373',
        icon: 'fa-gauge-high',
        getData: () => (typeof Router !== 'undefined' && Router.loadedSubjects['rsi']) ? Router.loadedSubjects['rsi'] : [],
        status: 'active',
        category: '傳統技術指標'
    },
    {
        id: 'macd',
        title: 'MACD',
        subtitle: 'Moving Average Convergence Divergence',
        desc: 'MACD 線、訊號線、Histogram 三元結構，捕捉趨勢動能轉折與背離',
        tags: ['趨勢', '動量', '背離'],
        color: '#6366f1',
        icon: 'fa-wave-square',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'kd',
        title: 'KD 隨機指標',
        subtitle: 'Stochastic Oscillator',
        desc: '%K 與 %D 線交叉、超買超賣區間判讀、高低鈍化與背離應用',
        tags: ['震盪', '交叉', '鈍化'],
        color: '#ec4899',
        icon: 'fa-rotate',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'dmi',
        title: '動向指標 (DMI)',
        subtitle: 'Directional Movement Index',
        desc: '由 +DI、-DI 組成，用於辨別趨勢的移動方向，是判斷多空趨勢轉換的核心工具。',
        tags: ['趨勢', '多空力道', '動量'],
        color: '#8b5cf6',
        icon: 'fa-arrows-left-right-to-line',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'adx',
        title: '平均趨勢指數 (ADX)',
        subtitle: 'Average Directional Index',
        desc: '衡量趨勢的「強度」而非方向。ADX 上升代表趨勢強勁，ADX 下降代表進入震盪市。',
        tags: ['趨勢強度', '震盪', '波動'],
        color: '#f43f5e',
        icon: 'fa-chart-simple',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'bias',
        title: '乖離率 (BIAS)',
        subtitle: 'Bias Ratio',
        desc: '衡量價格與移動平均線（MA）的偏離程度，判斷價格是否過度拉升或超跌，尋求均值回歸機會。',
        tags: ['均值回歸', '乖離', '反轉'],
        color: '#d946ef',
        icon: 'fa-magnifying-glass-chart',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'atr',
        title: 'ATR',
        subtitle: 'Average True Range',
        desc: '平均真實波幅量化市場波動度，用於動態止損設置、倉位計算與突破過濾',
        tags: ['波動率', '止損', '倉位'],
        color: '#ef4444',
        icon: 'fa-ruler-combined',
        status: 'coming',
        category: '傳統技術指標'
    },
    {
        id: 'tsi',
        title: 'TSI',
        subtitle: 'True Strength Index',
        desc: '雙重平滑動量指標，抑制雜訊、辨別趨勢方向、超買超賣與背離',
        tags: ['動量', '雙重平滑', '背離'],
        color: '#8b5cf6',
        icon: 'fa-sliders',
        status: 'coming',
        category: '傳統技術指標'
    },
    /* 價格結構 */
    {
        id: 'snr',
        title: 'SNR',
        subtitle: 'Support & Resistance',
        desc: '水平支撐阻力的辨識、強度評估、角色互換（S/R Flip），以及多時間框架 SNR 分析',
        tags: ['支撐', '阻力', '角色互換'],
        color: '#14b8a6',
        icon: 'fa-layer-group',
        status: 'coming',
        category: '價格行為與結構'
    },
    {
        id: 'fib-mtf',
        title: '斐波那契',
        subtitle: 'Multi-Timeframe Fibonacci',
        desc: '從大週期拉 Fib 定關鍵回調區（0.382 / 0.5 / 0.618 / 0.786），結合小週期確認進場，構建高勝率匯聚區',
        tags: ['回調區', '多時間框架', '匯聚'],
        color: '#f97316',
        icon: 'fa-compass-drafting',
        status: 'coming',
        category: '價格行為與結構'
    },
    /* 深度理論與市場微結構 */
    {
        id: 'amt',
        title: 'Auction Market Theory',
        subtitle: '拍賣市場理論 (AMT)',
        desc: '將市場視為雙向拍賣機制，以「尋找公允價值」為核心。探討初始平衡 (IB)、價值區域 (VA) 與價格在時間維度上的常態分佈博弈。',
        tags: ['拍賣機制', '價值區域', '公允價值'],
        color: '#d946ef',
        icon: 'fa-gavel',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    {
        id: 'lob',
        title: 'Limit Order Book',
        subtitle: '限價訂單簿與微觀動力學',
        desc: '深入交易所底層數據，解析限價單與市價單的撮合機制、造市商 (Market Maker) 行為、冰山訂單與流動性真空區的精準觸發邏輯。',
        tags: ['LOB', '造市商', '深度數據'],
        color: '#3b82f6',
        icon: 'fa-book-open-reader',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    /* 波動理論與時間序列 */
    {
        id: 'neowave',
        title: 'NeoWave',
        subtitle: '新波浪理論',
        desc: 'Glenn Neely 對傳統艾略特波浪的量化升級。加入嚴格的時間週期、價格比例與邏輯法則，建構具備「唯一解」的市場幾何結構體系。',
        tags: ['客觀波浪', '時間週期', '幾何結構'],
        color: '#0ea5e9',
        icon: 'fa-water',
        status: 'coming',
        category: '波動幾何與時間週期'
    },
    {
        id: 'stat-arb',
        title: 'Statistical Arbitrage',
        subtitle: '統計套利與量化模型',
        desc: '跳脫單一方向性預測，基於時間序列分析、共整合檢定 (Cointegration) 與均值回歸理論，建構跨資產或期現貨的數理交易框架。',
        tags: ['共整合', '均值回歸', '時間序列'],
        color: '#64748b',
        icon: 'fa-diagram-project',
        status: 'coming',
        category: '量化模型與演算法'
    },
    /* 經典市場哲學與幾何 */
    {
        id: 'dow',
        title: 'Dow Theory',
        subtitle: '道氏理論',
        desc: '技術分析的絕對基石。探討市場的三種趨勢級別（主要、次要、日常波動）、成交量驗證機制，以及指數相互確認原則。',
        tags: ['市場週期', '基礎結構', '相互確認'],
        color: '#94a3b8',
        icon: 'fa-landmark',
        status: 'coming',
        category: '價格行為與結構'
    },
    {
        id: 'gann',
        title: 'Gann Theory',
        subtitle: '江恩理論',
        desc: '將市場視為時間與價格的完美幾何對稱。透過江恩角度線（Gann Fan）、九方圖推算時間週期與空間共振的絕對法則。',
        tags: ['時間週期', '幾何對稱', '空間共振'],
        color: '#eab308',
        icon: 'fa-pen-ruler',
        status: 'coming',
        category: '波動幾何與時間週期'
    },
    /* 非線性與進階量化體系 */
    {
        id: 'fmh',
        title: 'FMH',
        subtitle: '分形市場假說 (Fractal Market Hypothesis)',
        desc: '挑戰傳統效率市場假說 (EMH)，基於非線性動力學與混沌理論。將市場結構視為自我相似的碎形，探討不同時間框架投資人的流動性交互作用。',
        tags: ['混沌理論', '碎形幾何', '非線性動力學'],
        color: '#8b5cf6',
        icon: 'fa-hurricane',
        status: 'coming',
        category: '波動幾何與時間週期'
    },
    {
        id: 'fuzzy-logic',
        title: 'Fuzzy Logic & Quant',
        subtitle: '模糊邏輯與量化模型',
        desc: '運用複雜模糊集合（Complex Cubic Fuzzy Sets）等數學模型處理市場邊界的模糊性與雜訊。適合對接單一交易所的純淨數據，捨棄滯後的濾網，構建精確觸發的左側抄底演算法。',
        tags: ['模糊數學', '非線性建模', '底層捕捉'],
        color: '#10b981',
        icon: 'fa-brain',
        status: 'coming',
        category: '量化模型與演算法'
    },
    /* 宏觀與行為金融 */
    {
        id: 'reflexivity',
        title: 'Reflexivity',
        subtitle: '反射性理論',
        desc: '喬治·索羅斯的核心哲學。市場價格不僅反映基本面，更會反過來改變基本面，形成正回饋的暴漲暴跌螺旋。',
        tags: ['行為金融', '正回饋', '索羅斯'],
        color: '#ef4444',
        icon: 'fa-arrow-right-arrow-left',
        status: 'coming',
        category: '宏觀經濟與行為金融'
    },
    /* 時間機會與市場微結構 */
    {
        id: 'mp',
        title: 'Market Profile',
        subtitle: '市場輪廓 (TPO)',
        desc: '以「時間」換取價格的機會（Time Price Opportunity）。精確描繪市場的價值鐘形曲線，彌補 Volume Profile 忽略時間停留權重的盲點。',
        tags: ['TPO', '鐘形曲線', '時間權重'],
        color: '#c084fc',
        icon: 'fa-hourglass-half',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    /* 衍生品定價與非方向性交易 */
    {
        id: 'options-vol',
        title: 'Volatility & Options',
        subtitle: '期權定價與波動率表面',
        desc: 'BSM 模型與希臘字母（Greeks）分析。從二維的價格方向猜測，升維至探討時間衰減（Theta）與隱含波動率（Vega）的立體防禦與套利策略。',
        tags: ['隱含波動率', '希臘字母', '非方向性'],
        color: '#f472b6',
        icon: 'fa-chart-pie',
        status: 'coming',
        category: '衍生品與風險管理'
    },
    /* 高階量化與狀態識別 */
    {
        id: 'hmm-regime',
        title: 'Regime Switching',
        subtitle: '市場狀態轉換與 HMM',
        desc: '運用隱馬爾可夫模型 (Hidden Markov Model) 識別市場處於「趨勢」、「震盪」或「高波動」的隱藏狀態，作為量化腳本動態切換底層邏輯的核心依據。',
        tags: ['隱馬爾可夫', '狀態切換', '統計模型'],
        color: '#2dd4bf',
        icon: 'fa-network-wired',
        status: 'coming',
        category: '量化模型與演算法'
    },
    /* 資金管理與破產數學 */
    {
        id: 'kelly',
        title: 'Position Sizing Math',
        subtitle: '倉位數學與最佳化',
        desc: '跳脫勝率迷思，探討賠率、破產風險（Risk of Ruin）、凱利公式（Kelly Criterion）與最佳 f 值（Optimal f），建構期望值為正的數學優勢。',
        tags: ['凱利公式', '破產風險', '期望值'],
        color: '#fbbf24',
        icon: 'fa-calculator',
        status: 'coming',
        category: '衍生品與風險管理'
    },
    /* 行為金融與散戶博弈 */
    {
        id: 'prospect',
        title: 'Prospect Theory',
        subtitle: '前景理論與行為金融',
        desc: '諾貝爾獎核心理論。解釋人類面對獲利時的「風險厭惡」與面對虧損時的「風險追求」，從根本上剖析群眾心理與流動性陷阱的底層邏輯。',
        tags: ['行為金融', '損失厭惡', '群眾心理'],
        color: '#f87171',
        icon: 'fa-users-viewfinder',
        status: 'coming',
        category: '宏觀經濟與行為金融' 
    },
    /* 高階量化與訊號處理 */
    {
        id: 'dsp-cycles',
        title: 'DSP 頻譜與週期分析',
        subtitle: 'Digital Signal Processing in Trading',
        desc: '揚棄傳統平滑濾網的滯後性。應用傅立葉變換 (FFT)、希爾伯特轉換 (Hilbert Transform) 與 MESA 測量市場的主導週期，直接在頻域中萃取無延遲的波段訊號。',
        tags: ['訊號處理', '頻譜分析', '週期萃取'],
        color: '#60a5fa',
        icon: 'fa-wave-square',
        status: 'coming',
        category: '量化模型與演算法'
    },
    {
        id: 'evt',
        title: '極值理論 (EVT)',
        subtitle: 'Extreme Value Theory',
        desc: '專注於金融時間序列的肥尾效應 (Fat Tails)。超越常態分佈假設，利用廣義極值分佈精確量化黑天鵝事件、極端回撤與市場崩盤的尾部風險機率。',
        tags: ['肥尾效應', '尾部風險', '黑天鵝'],
        color: '#dc2626',
        icon: 'fa-chart-area',
        status: 'coming',
        category: '量化模型與演算法'
    },
    /* 微觀流動性與操盤機制 */
    {
        id: 'liquidity-eng',
        title: '流動性工程與微觀操控',
        subtitle: 'Liquidity Engineering',
        desc: '探討高頻演算法如何製造流動性真空與誘發止損盤 (Stop Hunts)。結合單一交易所的純淨深度數據，捨棄複雜聚合報價，實現極致精確的左側觸發與抄底邏輯。',
        tags: ['流動性狙擊', '微觀操控', '單一深度'],
        color: '#34d399',
        icon: 'fa-crosshairs',
        status: 'coming',
        category: '市場微結構與流動性'
    },
    /* 替代數據與非價格 Alpha */
    {
        id: 'alt-data',
        title: '替代數據與情緒量化',
        subtitle: 'Alternative Data & NLP',
        desc: '跳脫純價量框架。透過自動化系統採集新聞脈絡、產經資訊與社群情緒，結合 NLP (自然語言處理) 技術提取非價格驅動的 Alpha 因子，並結構化匯入知識庫。',
        tags: ['替代數據', '新聞採集', 'NLP情緒'],
        color: '#a78bfa',
        icon: 'fa-database',
        status: 'coming',
        category: '量化模型與演算法'
    },
    /* 宏觀組合與資產配置 */
    {
        id: 'risk-parity',
        title: '風險平價與動態配置',
        subtitle: 'Risk Parity & Asset Allocation',
        desc: '基於波動率與資產相關性矩陣的權重分配邏輯。建構穩健的核心-衛星 (Core-Satellite) 策略，在 AI 基建、半導體與傳統資產間進行風險中性平衡，鎖定中長期絕對報酬。',
        tags: ['核心衛星', '風險平價', '資產配置'],
        color: '#fb923c',
        icon: 'fa-chart-pie',
        status: 'coming',
        category: '衍生品與風險管理'
    },
    {
        id: 'macro-cycles',
        title: '宏觀經濟週期',
        subtitle: 'Macroeconomic Cycles',
        desc: '美林時鐘 (Merrill Lynch Clock)、康波週期與央行流動性模型。從利率決策、通膨數據與貨幣乘數的底層傳導機制，判斷大資金在不同經濟象限的跨資產流動方向。',
        tags: ['美林時鐘', '貨幣政策', '經濟週期'],
        color: '#9ca3af',
        icon: 'fa-globe',
        status: 'coming',
        category: '宏觀經濟與行為金融'
    },
    /* 加密貨幣特有結構 */
    {
        id: 'funding-rate',
        title: '資金費率與期貨數據',
        subtitle: 'Funding Rate & Open Interest',
        desc: '解讀永續合約資金費率週期、未平倉量 (OI) 與價格行為的背離關係，判斷市場多空擠壓的可能性。',
        tags: ['資金費率', '未平倉量', '多空擠壓'],
        color: '#f7931a',
        icon: 'fa-hand-holding-dollar',
        status: 'coming',
        category: '加密貨幣市場特性'
    },
    {
        id: 'liquidation-map',
        title: '清算地圖',
        subtitle: 'Liquidation Heatmap',
        desc: '解讀 Coinglass 清算熱力圖，識別市場中高槓桿盤整區與機構目標獵殺位，利用強平流動性進行交易。',
        tags: ['清算地圖', '強平流動性', '獵殺區'],
        color: '#f97316',
        icon: 'fa-fire-flame-curved',
        status: 'coming',
        category: '加密貨幣市場特性'
    },
    {
        id: 'basis-spread',
        title: '期現溢價與 Basis',
        subtitle: 'Basis Trading & Arbitrage',
        desc: '現貨與永續合約之間的價差分析，判斷市場情緒過熱或過冷的絕對指標，以及無風險套利信號。',
        tags: ['期現價差', '情緒指標', '套利'],
        color: '#fbbf24',
        icon: 'fa-arrows-left-right-to-line',
        status: 'coming',
        category: '加密貨幣市場特性'
    },
    {
        id: 'onchain',
        title: '鏈上數據分析',
        subtitle: 'On-chain Data Analysis',
        desc: '解讀 SOPR、NUPL、交易所淨流量與大戶持倉變動，從鏈上流動性與持幣成本辨識大週期頂底部。',
        tags: ['SOPR', '交易所流量', '鯨魚追蹤'],
        color: '#0ea5e9',
        icon: 'fa-link',
        status: 'coming',
        category: '加密貨幣市場特性'
    },
    /* 策略整合與驗證 */
    {
        id: 'mtf-sop',
        title: '多框架整合 SOP',
        subtitle: 'Multi-Timeframe Integration',
        desc: '從大週期 (HTF) 定向，到中週期 (MTF) 尋找興趣點，最後在小週期 (LTF) 執行的完整標準作業程序。',
        tags: ['多週期', 'SOP', '執行流程'],
        color: '#8b5cf6',
        icon: 'fa-list-check',
        status: 'coming',
        category: '策略整合與驗證'
    },
    {
        id: 'backtest-method',
        title: '回測方法論',
        subtitle: 'Backtesting & Verification',
        desc: 'Walk-forward testing、蒙地卡羅模擬、過擬合識別。如何科學地驗證一個策略具備「真優勢」而非曲線擬合。',
        tags: ['回測', '蒙地卡羅', '統計驗證'],
        color: '#a855f7',
        icon: 'fa-vial-circle-check',
        status: 'coming',
        category: '策略整合與驗證'
    },
    {
        id: 'strategy-journal',
        title: '交易日誌與複盤系統',
        subtitle: 'Trading Journal & Review',
        desc: '建立有效的 Edge Tracking，從交易數據中提取可操作的改善點，將複盤轉化為實際的績效提升。',
        tags: ['複盤', '日誌', '績效優化'],
        color: '#d946ef',
        icon: 'fa-book-journal-whills',
        status: 'coming',
        category: '策略整合與驗證'
    },
    /* 交易心理與執行 */
    {
        id: 'trading-psychology',
        title: '交易執行心理學',
        subtitle: 'Execution Psychology',
        desc: '深入探討紀律、恐懼與貪婪的生理觸發機制，解決「看得懂卻做不到」的執行斷層問題。',
        tags: ['心理學', '執行力', '自律'],
        color: '#f43f5e',
        icon: 'fa-brain',
        status: 'coming',
        category: '交易心理與執行'
    },
    {
        id: 'cognitive-bias',
        title: '交易認知偏誤',
        subtitle: 'Cognitive Biases in Trading',
        desc: '識別錨定效應、確認偏誤、近因偏誤對決策的具體影響，建立一套防禦心理偏誤的思考清單。',
        tags: ['認知偏誤', '決策質量', '盲點識別'],
        color: '#fb7185',
        icon: 'fa-masks-theater',
        status: 'coming',
        category: '交易心理與執行'
    }
];


// 顯示順序
const SUBJECT_CATEGORIES = [
    '價格行為與結構',
    '傳統技術指標',
    '機構交易體系',
    '市場微結構與流動性',
    '波動幾何與時間週期',
    '加密貨幣市場特性',
    '量化模型與演算法',
    '策略整合與驗證',
    '衍生品與風險管理',
    '宏觀經濟與行為金融',
    '交易心理與執行'
];
