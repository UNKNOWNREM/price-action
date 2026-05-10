# TRADING NOTES — 全方位交易與量化知識庫

> 從主觀價格行為 (Price Action) 到高階量化演算法 (Quantitative Models) 的模組化學習系統。
---

## 專案簡介

**TRADING NOTES** 是一個**涵蓋 8 大專業領域**的綜合型交易知識庫。系統採用現代化的單頁應用程式 (SPA) 架構，並導入了深具質感的 **Glassmorphism (玻璃磨砂)** 視覺風格。

本專案無需任何複雜的建置環境，純粹使用 Vanilla JavaScript、HTML5 與 CSS3 開發，並透過瀏覽器的 LocalStorage 實現資料持久化（進度追蹤與學習筆記）。

---

## 核心功能

- **模組化儀表板 (Dashboard)**：首頁展示 8 大專業領域，透過視覺化卡片引導進入個別科目。
- **現代化 UI/UX**：支援深/淺色模式 (Dark/Light Mode)、全站無段字體縮放 (A- / 16 / A+)、平滑過渡動畫與響應式設計 (RWD)。
- **學習進度追蹤**：精確計算各科目的已讀小節與總體進度百分比。
- **個人筆記系統**：為每個獨立章節提供筆記空間，自動存檔防遺失。
- **Markdown 渲染**：支援結構化的內容展示與程式碼區塊高亮。

---

## 知識圖譜分類

本系統的科目已透過 `subjects.js` 進行系統化註冊，涵蓋以下 8 大專業領域：

1. **價格行為與結構 (Price Action & Structure)**
   - 價格行為 (PA)、道氏理論 (Dow Theory)、支撐阻力 (SNR)、多時間框架斐波那契
2. **傳統技術指標 (Technical Indicators)**
   - EMA/SMA、布林帶 (BB)、RSI、MACD、KD、ATR、TSI、Vegas 通道
3. **機構交易體系 (Institutional Trading)**
   - SMC/ICT (聰明錢概念)、Wyckoff (威科夫理論)
4. **市場微結構與流動性 (Microstructure & Liquidity)**
   - 訂單流 (Order Flow)、成交量分佈 (VP)、市場輪廓 (TPO)、LOB 深度與流動性工程
5. **波動幾何與時間週期 (Wave & Geometric Theory)**
   - 纏論、NeoWave、江恩理論、分形市場假說 (FMH)
6. **量化模型與演算法 (Quant Models & Algorithms)**
   - VWAP、隱馬爾可夫模型 (HMM)、DSP 頻譜分析、極值理論 (EVT)、統計套利、替代數據分析
7. **衍生品與風險管理 (Derivatives & Risk Management)**
   - 期權定價與波動率 (Greeks)、倉位數學 (凱利公式)、風險平價與動態配置
8. **宏觀經濟與行為金融 (Macro & Behavioral Finance)**
   - 宏觀經濟週期 (美林時鐘)、反射性理論、前景理論

*(註：目前核心模組已有完整內容，其餘進階模組架構已建置完畢，將陸續更新實裝。)*

---

## 檔案架構

```text
price-action/
├── index.html          # HTML 主框架與 Dashboard 結構
├── style.css           # 樣式表 (Glassmorphism, 響應式, CSS 變數)
├── app.js              # 全域 SPA 路由控制器與狀態管理 (字體、主題、進度統計)
├── subjects.js         # 全站科目註冊表與分類邏輯
├── script.js           # 科目內容渲染邏輯 (Markdown 解析、筆記保存、章節導航)
└── chapters_data.js    # 科目內容模組的資料庫
```

---

## 本地開發與使用指南

本專案追求極致的輕量化，**不需要**安裝 Node.js、npm 或任何打包工具 (Webpack/Vite)。

1. 將專案 `clone` 或下載至本地。
2. 直接點擊 `index.html` 透過瀏覽器開啟，即可獲得完整的應用體驗。
3. 若需新增科目資料，只需參考 `chapters_data.js` 的格式建立新的資料檔，並在 `subjects.js` 啟用對應路由即可。

---

## License

MIT License
