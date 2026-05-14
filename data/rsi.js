var CHAPTERS = [
  {
    "title": "相對強弱指數 RSI",
    "sub": "Relative Strength Index · Complete Reference",
    "id": "rsi_complete",
    "sections": [
      {
        "title": "起源與問題背景",
        "html": `
<p>相對強弱指數（Relative Strength Index, RSI）由機械工程師出身的技術分析先驅 J. Welles Wilder Jr. 於 1978 年 6 月在《Commodities》（現為《Futures》）雜誌首次發表，隨後完整收錄於同年著作《New Concepts in Technical Trading Systems》。</p>
<p>Wilder 在 1970 年代的商品期貨市場中面臨兩個根本性的數學難題：</p>
<ul>
  <li class="ind0"><strong>掉期效應（Drop-off Effect）：</strong>傳統動能指標（Momentum、ROC）在極端歷史數據掉出計算窗口時，會產生無意義的劇烈突變。</li>
  <li class="ind0"><strong>跨市場比較困難：</strong>不同商品的絕對價格與波動幅度差異巨大，缺乏統一的標準化邊界進行橫向動能極值比較。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>RSI 的提出，正是為了解決「價格雜訊平滑化」與「動能數值歸一化」這兩個核心統計問題，提供一個能在 0 到 100 之間封閉震盪的動量測量工具。</p>
</div>
<p>---</p>
`
      },
      {
        "title": "核心數學公式完整推導",
        "html": `
<p>RSI 的底層邏輯是將一定週期內的「絕對上漲動能」與「絕對下跌動能」進行非線性的比例轉換。</p>
<h3>步驟一：定義單期價格變化</h3>
<p>給定收盤價序列，計算每期絕對變動量並分離正負方向：</p>
<ul>
  <li class="ind0">ΔPt = Pt − Pt−1</li>
  <li class="ind0">Ut = max(ΔPt, 0)　— 僅保留上漲點數，下跌或平盤為 0</li>
  <li class="ind0">Dt = max(−ΔPt, 0)　— 僅保留下跌點數的絕對值，上漲或平盤為 0</li>
</ul>
<h3>步驟二：Wilder 平滑移動平均（WWS）</h3>
<p>Wilder 自創了平滑係數 α = 1/n 的改良 EMA，避免 SMA 的等權重缺陷與掉期效應：</p>
<ul>
  <li class="ind0">WWS(U)t = [ WWS(U)t−1 × (n−1) + Ut ] / n</li>
  <li class="ind0">WWS(D)t = [ WWS(D)t−1 × (n−1) + Dt ] / n</li>
</ul>
<h3>步驟三：相對強度 RS</h3>
<p>RS = WWS(U) / WWS(D)　— 衡量買方平均推升力量 vs 賣方平均打壓力量之比值</p>
<h3>步驟四：非線性歸一化</h3>
<p>RSI = 100 − 100 / (1 + RS)</p>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>當 D → 0（全週期上漲）時，RS → ∞，RSI → 100（漸近線）。當 U → 0（全週期下跌）時，RSI → 0。此轉換函數本質上是一條 S 型曲線（Sigmoid-like function）。</p>
</div>
<h3>非線性阻尼特性（背離的數學根源）</h3>
<p>當 RSI 處於 80 以上時，價格必須出現指數級的加速上漲，RSI 數值才能繼續線性增加。一旦上漲速率僅僅維持恆定甚至微幅放緩，RSI 便因阻尼效應開始下彎。這種設計正是「背離（Divergence）」現象發生的底層數學根源——指標比價格更早感知到動能的邊際衰竭。</p>
<p>---</p>
`
      },
      {
        "title": "數學上捕捉的市場統計特性",
        "html": `
<h3>序列自相關性（Serial Autocorrelation）</h3>
<p>RSI 實質上在測量金融時間序列的序列自相關強度。當市場處於強勢動能時，前一根 K 線的收盤上漲顯著預示下一根將繼續上漲，這種正自相關性推動 RSI 分子快速膨脹突破 70。在 Breusch-Godfrey 序列相關性測試中，RSI 高值區域往往對應動能的顯著正相關期。</p>
<h3>厚尾分佈（Fat Tail / Leptokurtic Distribution）</h3>
<p>在標準常態分佈假設下，RSI 應極難突破 85 或低於 15。但真實金融市場的黑天鵝事件與流動性枯竭頻發，使 RSI 可長期處於邊界區。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>RSI 的非線性阻尼設計，是對厚尾極端值的數學「懲罰機制」——無限大的極端波動被壓縮在 0–100 的有限容器內。這解釋了為何極端崩盤時，資產價格可能下跌 30%，但 RSI 卻僅從 25 緩慢鈍化至 18。理解此特性，是避免在單邊趨勢中因指標顯示「極度超賣」而過早逆勢接刀的理論基礎。</p>
</div>
<p>---</p>
`
      },
      {
        "title": "現代改良版本演化",
        "html": `
<p>傳統 RSI(14) 在強趨勢中容易過早鈍化，在震盪市中反應滯後。以下四個變體各自針對不同缺陷進行了數學層面的改良：</p>
<h3>1. Stochastic RSI（Chande & Kroll, 1994）</h3>
<ul>
  <li class="ind0"><strong>改了什麼：</strong>將 Stochastic Oscillator 的歸一化公式套用於 RSI 數值本身，而非原始價格。StochRSI = (RSIt − min(RSI,n)) / (max(RSI,n) − min(RSI,n))</li>
  <li class="ind0"><strong>為什麼改：</strong>傳統 RSI 在低波動震盪市中徘徊在 40–60，無法觸及極值，導致信號匱乏。</li>
  <li class="ind0"><strong>解決了什麼：</strong>捕捉「動能的動能（Meta-momentum）」，將微小的動量變化放大至全刻度，適用於短線波段交易。</li>
</ul>
<h3>2. Connors RSI（Larry Connors）</h3>
<ul>
  <li class="ind0"><strong>改了什麼：</strong>三個獨立組件的算術平均：CRSI(3,2,100) = [RSI(3) + RSI(Streak,2) + ROC(100)] / 3</li>
  <li class="ind0"><strong>為什麼改：</strong>原始 RSI 無法量化連續漲跌天數（Streak），也無法反映動能在長期歷史分佈中的百分位排名。</li>
  <li class="ind0"><strong>解決了什麼：</strong>資產連續數日下跌且動能徹底枯竭時，CRSI 給出低於 10 甚至逼近 0 的精確值，專攻高勝率均值反彈策略。</li>
</ul>
<h3>3. Laguerre RSI（John Ehlers）</h3>
<ul>
  <li class="ind0"><strong>改了什麼：</strong>以數位訊號處理的拉蓋爾變換（Laguerre Transform）替換 WWS 平滑，引入 γ（Gamma）參數的四階濾波器。</li>
  <li class="ind0"><strong>為什麼改：</strong>增加計算週期以消除雜訊會導致信號嚴重滯後，傳統方法難以兼顧平滑度與響應速度。</li>
  <li class="ind0"><strong>解決了什麼：</strong>在消除微觀雜訊的同時，對真實趨勢轉折的反應速度比傳統 14 週期 RSI 提升至少 3–5 根 K 線。</li>
</ul>
<h3>4. RSX（Jurik Research）</h3>
<ul>
  <li class="ind0"><strong>改了什麼：</strong>利用 Jurik 自適應移動平均演算法（JMA）進行深度降噪處理。</li>
  <li class="ind0"><strong>為什麼改：</strong>原始 RSI 在震盪區間頻繁交叉 50 中軸，產生鋸齒狀偽信號，對量化演算法是致命干擾。</li>
  <li class="ind0"><strong>解決了什麼：</strong>消除階躍響應中的相位超前與滯後，曲線極度平滑且無額外延遲，適合整合進全自動演算法交易模組。</li>
</ul>
<p>---</p>
`
      },
      {
        "title": "市場博弈機制：訂單流視角",
        "html": `
<h3>RSI 背離的微觀結構真相</h3>
<p>當 RSI 出現頂背離或觸及超買區時，限價指令簿（LOB）層面正在發生的是：主動市價買單（Aggressive Market Buys）正在被被動限價賣單（Passive Limit Sells）大量吸收（Absorption）。</p>
<p>機構資金利用散戶在價格突破前高時的 FOMO 情緒，在關鍵阻力位上方佈置海量隱藏限價賣單（冰山訂單 Iceberg Orders）。散戶的市價買單雖名義上推高了價格（創出 Higher High），但遭遇限價阻力牆後，每單位市價單能推動的價格距離（Ticks）大幅縮減，導致公式中的 Average Gain 增量低於前期，Average Loss 開始膨脹，計算得出較低的 RSI 值（Lower High）。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>RSI 背離有效的根本微觀機制：指標的動能枯竭，本質上是主動買盤的流動性被被動賣盤吸收殆盡的結果，而非單純的「指標到頂」。</p>
</div>
<h3>散戶 vs 機構的認知不對稱</h3>
<ul>
  <li class="ind0"><strong>散戶的線性思維：</strong>將 RSI > 70 視為直接的方向性逆轉觸發器，忽略厚尾特徵，不知道強趨勢中資產可數週甚至數月處於極端超買狀態。</li>
  <li class="ind0"><strong>機構的流動性視角：</strong>將指標極值視為「流動性池熱度分佈圖」。RSI 長期超買意味著下方積累了龐大的多頭追漲止損單（Sell Stops）。機構不在 RSI 剛觸及 70 時做空，而是等待價格進行最後一次流動性清掃（Liquidity Sweep），刺穿前高誘多，吸收散戶最後的市價買盤完成空頭建倉，再撤銷下方買盤支撐引爆止損。</li>
</ul>
<p>---</p>
`
      },
      {
        "title": "歷史案例：指標有效",
        "html": `
<div class="callout co-example">
  <div class="cot">案例一 ｜ 可信度：高</div>
  <p><strong>2020 年 3 月 BTC 312 崩盤事件 — 週線底部共振</strong><br>
  受全球疫情恐慌影響，BTC/USD 週線 RSI 跌至 25.6 的歷史極端超賣值，價格跌至 $3,800–$4,000 區間。LOB 賣盤完全真空，極低 RSI 精準標記了恐慌拋售耗盡後的絕對反轉點。隨後 BTC 展開長達一年半的多頭市場，從 $3,800 飆升至 $64,000，漲幅 1,580%。</p>
</div>
<div class="callout co-example">
  <div class="cot">案例二 ｜ 可信度：中</div>
  <p><strong>2022 年 6 月 BTC 熊市觸底 — RSI Failure Swing</strong><br>
  Terra/Luna 崩盤與 3AC 破產引發連環清算，BTC 週線 RSI 跌至 25.74，價格在 $17,500 附近震盪。RSI 二次下探未跌破前低，形成底部失效擺動（Failure Swing）。RSI 隨後突破 40，確認空頭動能長期衰竭，次年開啟翻倍行情。</p>
</div>
<div class="callout co-example">
  <div class="cot">案例三 ｜ 可信度：高</div>
  <p><strong>2024 年 8 月 XAU/USD 4H 頂背離與流動性清掃</strong><br>
  黃金突破 $2,470 後於 4H 創出 $2,483 新高，但 4H RSI 從 74 顯著降至 62，形成標準頂部背離，同時價格向上假突破清掃前高 Buy Stops 流動性池。機構空頭強勢介入，金價兩週內回落至 $2,370，跌幅達 110 美元。</p>
</div>
<p>---</p>
`
      },
      {
        "title": "歷史案例：指標失效",
        "html": `
<div class="callout co-warning">
  <div class="cot">失效案例一 ｜ 可信度：高</div>
  <p><strong>2020–2021 年 BTC 牛市 — 日線 RSI 鈍化陷阱</strong><br>
  BTC 日線 RSI 長期維持在 75–88 之間數週，期間多次出現頂部背離卻無效。<br>
  數學層面：Average Loss 趨近於 0，分母被極度壓縮，RSI 進入 S 型曲線的平緩頂部，完全失去分辨率。<br>
  結構層面：機構現貨買盤（MicroStrategy 等）單向淨流入打破雙向流動性博弈，「超買」成為趨勢強勁的延續特徵而非反轉信號。</p>
</div>
<div class="callout co-warning">
  <div class="cot">失效案例二 ｜ 可信度：高</div>
  <p><strong>2021 年 1 月 GME 散戶軋空 — 短線指標被徹底摧毀</strong><br>
  GME 股價 $40 時 RSI 已達 90，隨後卡在 95 的物理邊界，但價格飆升至 $400 以上。<br>
  數學層面：K 線收益率呈極端肥尾爆炸分佈，超出 Wilder 平滑區間設計的動能容忍極限。<br>
  結構層面：選擇權 Gamma Squeeze 加上散戶海量市價單湧入，造市商被迫在任何價位被動對沖，LOB 的阻力吸收與均值回歸機制徹底失效。</p>
</div>
<div class="callout co-warning">
  <div class="cot">失效案例三 ｜ 可信度：中</div>
  <p><strong>2017 年 SPX 全年低波動強趨勢 — 常態性過熱失效</strong><br>
  SPX 日線 RSI 全年超過 20 次觸及 70 以上，但依賴超買做空的勝率逼近 0%。<br>
  數學層面：歷史波動率極低，分母波動基數微小，微幅上漲即可輕易推高 RS。<br>
  結構層面：全球央行 QE 實質壓制波動率，VIX 長期低於 12，從根本上扼殺了均值回歸策略的存活土壤。</p>
</div>
<p>---</p>
`
      },
      {
        "title": "參數空間分析與動態調整",
        "html": `
<h3>標準參數 14 的統計依據</h3>
<p>Wilder 設定 14 並非隨機選擇，而是基於當時商品期貨市場廣泛觀察到的 28 天太陰週期（Lunar Cycle）。一個完整的價格動能與情緒循環約等同一個太陰月，14 天為其半衰期。在日線圖表上，14 天涵蓋約 2.5–3 個交易週，在過濾短線雜訊與保持中短期波段敏感度之間取得數學平衡。</p>
<h3>市場環境參數動態調整邏輯</h3>
<table>
  <thead>
    <tr>
      <th>市場環境</th>
      <th>識別條件</th>
      <th>建議參數</th>
      <th>底層邏輯</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>高波動期</td>
      <td>VIX &gt; 30 或 BTC 30d 波動率 &gt; 80%</td>
      <td>RSI(7) 或 RSI(5)，邊界維持 70/30</td>
      <td>趨勢轉換極快，縮短週期降低時間權重延遲，精準捕捉 V 型或倒 V 型反轉</td>
    </tr>
    <tr>
      <td>低波動震盪期</td>
      <td>14 週期 ATR 萎縮至過去 6 個月 20 百分位以下</td>
      <td>RSI(21)，邊界內縮至 60/40</td>
      <td>拉長週期提升統計顯著性，內縮邊界確保在小振幅下仍有合理信號觸發頻率</td>
    </tr>
    <tr>
      <td>強趨勢行情</td>
      <td>50 EMA 與 200 EMA 同向發散且斜率大於 30 度</td>
      <td>RSI(3)，邊界設為極端 80/20</td>
      <td>不找逆勢反轉，而是抓順勢回調。RSI(3) 瞬間暴跌至 20 以下通常是次級 Stop Hunt 完成的標誌</td>
    </tr>
  </tbody>
</table>
<p>---</p>
`
      },
      {
        "title": "防止過度優化（Over-fitting）的三道防線",
        "html": `
<div class="callout co-warning">
  <div class="cot">警告</div>
  <p>任何針對 RSI 數值的回測與最佳化，若未通過以下三個統計檢驗，都將淪為無效的曲線擬合（Curve-fitting）。</p>
</div>
<h3>防線一：相鄰參數衰減率測試（Parameter Sensitivity Test）</h3>
<ul>
  <li class="numbered">1. 找出回測中夏普比率最高的參數（例如 RSI(9) Sharpe = 1.5）</li>
  <li class="numbered">2. 強制測試相鄰參數 RSI(8) 與 RSI(10) 的績效</li>
  <li class="numbered">3. 判斷標準：若相鄰參數的夏普比率或總淨利急劇下降超過 15%，視為曲線擬合。健康的參數在相鄰值域中應呈現「高原（Plateau）」分佈，而非孤立的「尖峰（Peak）」。</li>
</ul>
<h3>防線二：Walk-Forward 驗證（向前步進測試）</h3>
<ul>
  <li class="numbered">1. 分割比例：70% 樣本內（In-sample）訓練，30% 樣本外（Out-of-sample）盲測</li>
  <li class="numbered">2. 例：用 2018–2020 年數據尋找最佳參數，套用於 2021 年盲測，隨後整體窗口向前滾動一年</li>
  <li class="numbered">3. 判斷標準：樣本外淨利潤折損率不得超過樣本內最優結果的 30%。若樣本內年化 20%，樣本外僅剩 5% 甚至虧損，堅決拒絕此參數組合。</li>
</ul>
<h3>防線三：Monte Carlo 模擬（蒙地卡羅測試）</h3>
<ul>
  <li class="numbered">1. 對 Walk-Forward 產生的交易序列進行至少 1,000 次隨機洗牌重抽樣（Bootstrapping）</li>
  <li class="numbered">2. 生成 1,000 條可能的資金增長曲線</li>
  <li class="numbered">3. 判斷標準：若 95 百分位的最大回撤超過總資金 25%，或突破交易員的絕對風險容忍底線，則此參數策略的存活高度依賴歷史中特定的行情好運排序（Sequence Risk），不具實戰強健性。</li>
</ul>
<p>---</p>
`
      },

      {
        "title": "失效場景完整地圖",
        "html": `
<h3>場景一：黑天鵝事件（流動性真空）</h3>
<p>突發宏觀黑天鵝（如 FTX 崩盤、疫情熔斷）導致做市商撤走限價單，價格自由落體。</p>
<ul>
  <li class="ind0">識別特徵 1：K 線連續出現幾乎無下影線的大實體陰線（Marubozu），下方毫無被動買盤吸收力。</li>
  <li class="ind0">識別特徵 2：價格在極短時間內無阻礙跌破多個 HTF（如週線級別）結構支撐位。</li>
  <li class="ind0">識別特徵 3：RSI 在 1H 內垂直崩潰進入 15 以下，且完全沒有反彈勾頭的跡象。</li>
</ul>
<div class="callout co-warning">
  <div class="cot">警告</div>
  <p>嚴禁任何基於「RSI 極度超賣」理由的左側接刀。必須等待日線出現跌幅縮小、歷史天量（Volume Spike）且 RSI 出現明確 W 底失效擺動後，才考慮右側試探。</p>
</div>
<h3>場景二：極低波動死水期</h3>
<p>歐美重大節假日或重要數據發佈前夕，大資金離場，流動性枯竭，價格隨機漫步。</p>
<ul>
  <li class="ind0">識別特徵 1：ATR(14) 跌至過去 6 個月歷史分佈的 20 百分位以下。</li>
  <li class="ind0">識別特徵 2：布林帶極度收口（Squeeze），上下軌間距創近期新低。</li>
  <li class="ind0">識別特徵 3：RSI(14) 在 45–55 之間密集、短促來回震盪，頻繁穿越 50 中軸但毫無趨勢延續性。</li>
</ul>
<p>應對：暫停所有波段策略。等待價格以大實體 K 線強勢突破布林帶上下軌，並伴隨 CVD 懸殊失衡，方可重啟交易。</p>
<h3>場景三：強趨勢末段的背離陷阱（Trend Exhaustion Trap）</h3>
<p>強勢主升浪中 RSI 提早出現頂背離，誘導做空，結果價格橫盤修復指標後繼續暴力拉升，軋空所有逆勢者。</p>
<ul>
  <li class="ind0">識別特徵 1：RSI 雖創出 Lower High 形成頂背離，但絕對數值在回調過程中始終堅守在 50 中軸之上（多頭動能仍具統治力）。</li>
  <li class="ind0">識別特徵 2：背離發生時，ADX(14) &gt; 40，顯示趨勢力量處於巔峰。</li>
  <li class="ind0">識別特徵 3：RSI 從 70+ 回落至 55 附近時立刻獲得支撐並快速上拐。</li>
</ul>
<p>應對：只要 RSI 回調時不跌破 50，所有頂背離皆視為趨勢中繼洗盤。應反向操作——利用背離帶來的小幅回撤，結合 20 EMA 或 1H FVG，作為順勢做多的高勝率買點。</p>
<h3>場景四：指標間的「偽共振」</h3>
<p>RSI、MACD、Stochastic 同時發出底部超賣金叉，誤認為完美共振而重倉，實為數學同源的假信號。</p>
<ul>
  <li class="ind0">識別特徵 1：三個指標底層計算變數全部為「收盤價（Close）」，同源必然同向。</li>
  <li class="ind0">識別特徵 2：同向僅代表收盤價推進速度在減緩，是數學必然，而非不同市場維度的相互驗證。</li>
  <li class="ind0">識別特徵 3：缺乏成交量或訂單簿流動性工具的參與。</li>
</ul>
<p>應對：將 MACD 和 Stochastic 等同質性指標從工作區移除，強制替換為 CVD 或 Volume Profile 等非價格動量工具進行真實的跨維度交叉驗證。</p>
<h3>場景五：高頻操縱環境（Wash Trading）</h3>
<p>小市值山寨幣或低流動性資產中，莊家透過對倒刷量製造虛假突破與動量。</p>
<ul>
  <li class="ind0">識別特徵 1：K 線頻繁出現極長的上/下影線但實體極小。</li>
  <li class="ind0">識別特徵 2：RSI 在同一根 K 線週期內從 30 瞬間飆升至 70 再回落。</li>
  <li class="ind0">識別特徵 3：成交量柱狀圖異常均勻，缺乏真實市場博弈常見的聚集與正態分佈特徵。</li>
</ul>
<p>應對：嚴格迴避市值低於 1 億美元或 24H 真實交易量低於 1,000 萬美元的標的。若無可避免，一律切換至 4H 以上級別，僅依賴「實體收盤價」分析，徹底過濾影線造成的 RSI 假性尖峰雜訊。</p>
<p>---</p>
`
      },

      {
        "title": "進階研究索引",
        "html": `
<h3>學術論文</h3>
<ul>
  <li class="ind0"><strong>Rak, R. (2026). arXiv:2605.01300</strong> [預印本，未經同行評審]<br>
  提出 VGRSI（Visibility Graphs RSI），透過時間序列幾何可視性圖形關係重構 RSI。在 DJI30 與 XAUUSD 自動化策略盲測中達到夏普比率 2.55–3.6。為 RSI 引入非線性幾何拓撲學視角，證明除改變平滑均線外，重構空間幾何關聯同樣能有效突破傳統指標的滯後困境。</li>
  <li class="ind0"><strong>Panigrahi, A. K., Vachhani, K., & Chaudhury, S. K. (2021). SSRN: 3986000</strong><br>
  針對印度 NIFTY 50 實證對比 RSI 50-50 策略與 60-40 策略績效。發現 50-50 在長線具備優勢，而邊界內縮至 60-40 在短期波動預測中表現卓越。直接支持了本文第三章中低波動環境將邊界動態調整為 60/40 的必要性。</li>
  <li class="ind0"><strong>Thang, N. V. (2022). arXiv:2206.12282</strong><br>
  證明單純 MACD 策略在美股三大指數中勝率普遍低於 50%。但將 MACD 與 RSI 融合，並加入成交量與價格日波動率重構為 VPVMA 指標後，風險調整後收益顯著提升。呼應共振矩陣的核心觀點：RSI 必須與非同源跨維度數據共振，才能打破單一指標的勝率瓶頸。</li>
</ul>
<h3>推薦書籍</h3>
<ul>
  <li class="ind0"><strong>《New Concepts in Technical Trading Systems》— J. Welles Wilder Jr. (1978, ISBN: 978-0894590276)</strong><br>
  直接翻至 RSI 與 Directional Movement 的原始手稿章節。只有閱讀 Wilder 親筆的原始推導過程，才能真正理解平滑係數的設計哲學，並明白「14 天」是基於對自然法則的深刻觀察，而非資料探勘的過度擬合產物。</li>
  <li class="ind0"><strong>《The New Technical Trader》— Tushar Chande & Stanley Kroll (1994, ISBN: 978-0471597803)</strong><br>
  重點閱讀動能振盪器與 Stochastic RSI 的發明章節。作者精闢剖析傳統 RSI 在狹窄震盪市中如何喪失分辨力，並給出將隨機極值公式疊加於 RSI 之上的完整代數推演，對自行開發 Pine Script 短線系統的交易員具備極高啟發價值。</li>
</ul>
<h3>社群資源</h3>
<ul>
  <li class="ind0"><strong>TradingView：Connors RSI (CRSI)</strong><br>
  完美整合短期動能 RSI(3)、連漲/跌計數 Streak(2) 與 ROC(100)。注意事項：極度靈敏，嚴格限制在日線或 4H 使用；實戰必須配合 200 SMA 確認大趨勢，嚴禁在熊市中逆大勢使用其超賣抄底信號。</li>
  <li class="ind0"><strong>GitHub：Machine Learning XAUUSD SMC（by Jonus Nattapong Tapachom）</strong><br>
  結合 XGBoost 分類器與 SMC 概念（FVG、OB），以 RSI 與 ATR 作為輸入特徵，在 2015–2020 年黃金回測中預測 5 天後方向勝率達 85.4%。注意事項：模型高度擬合，遭遇未見過的極端市場結構變化時表現顯著落差，部署時需具備定期重訓（Online Learning）的能力。</li>
</ul>
<p>---</p>
`
      }
    ]
  }
]
