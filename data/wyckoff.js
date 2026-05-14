/**
 * Wyckoff Methodology Curriculum Data
 * Consolidated from individual chapter files in research note/wyckoff_notes/
 * Date: 2026-05-11
 */

var CHAPTERS = [
  {
    "title": "理論基礎",
    "sub": "Three Laws & Composite Man · pp. 1–10",
    "id": "foundations",
    "sections": [
      {
        "title": "Wyckoff 方法論簡介",
        "html": `<p>Richard Wyckoff 是 20 世紀初技術分析的先驅之一。他的核心信念是：<strong>價格波動本質上不是隨機的</strong>。這場遊戲中，<strong>大資金（機構、專業交易員）永遠比散戶更早洞察市場先機</strong>。</p>
<p>Wyckoff 認為，要從市場中獲利，交易者必須學會「閱讀市場語言」——即透過價格（Price）與成交量（Volume）的互動，判斷背後主導力量的意圖。他不看任何外部資訊（情緒、新聞、謠言），主張只相信圖表本身的語言。</p>
<div class="callout co-quote">
  <div class="cot">核心觀點</div>
  <p>市場不是雜亂無章的混沌系統，而是由大資金主導、跡可循的結構。理解這些結構與三大法則，是讀懂市場的根本。</p>
</div>
<h3>Wyckoff 理論的三大核心支柱</h3>
<ul>
  <li class="ind0"><strong>價格與成交量分析</strong>：拒絕外部資訊，只相信圖表本身的語言。</li>
  <li class="ind0"><strong>市場週期思維</strong>：市場都在吸籌 → 上漲 → 派發 → 下跌這四個階段中循環。</li>
  <li class="ind0"><strong>三大法則框架</strong>：供需法則、因果法則、努力與結果法則構成完整的市場解讀體系。</li>
</ul>
<div class="callout co-tip">
  <div class="cot">實戰應用</div>
  <p>分析任何圖表前先問自己：「我現在身處市場哪個週期的階段？大資金正在做什麼？」這是 Wyckoff 思維的出發點。</p>
</div>
<p>---</p>`
      },
      {
        "title": "三大法則 ① 供需法則（Law of Supply & Demand）",
        "html": `<p>供需法則（Law of Supply & Demand）是 Wyckoff 理論的基石。Wyckoff 將經濟學的基本原理直接應用於交易，提出了以下核心命題：需求大於供給 → 價格上漲；供給大於需求 → 價格下跌；兩者平衡 → 橫盤。</p>
<div class="callout co-warning">
  <div class="cot">常見誤解警告</div>
  <p>「買方多於賣方導致上漲」是錯誤說法。交易中永遠存在對等的買家與賣家，每一筆成交都必然由一名買方與一名賣方相互撮合。價格移動的原因在於<strong>主動性力量（市價單）與被動性力量（限價單）之間的比例失衡</strong>。</p>
</div>
<h3>主動 vs 被動力量</h3>
<table>
  <thead>
    <tr><th>訂單類型</th><th>行為</th><th>對價格影響</th></tr>
  </thead>
  <tbody>
    <tr><td>主動買單（買入市價單）</td><td>主動吃掉賣方掛單</td><td>直接推升價格</td></tr>
    <tr><td>主動賣單（賣出市價單）</td><td>主動吃掉買方掛單</td><td>直接壓低價格</td></tr>
    <tr><td>被動掛單（限價單）</td><td>等待對手盤成交</td><td>只能緩衝，無法主導移動價格</td></tr>
  </tbody>
</table>
<h3>缺乏興趣（Lack of Interest）現象</h3>
<p>價格移動不一定需要強大的主動力量。<strong>只要其中一方的興趣缺席，價格就能移動</strong>。若賣盤枯竭（Lack of Supply），少量買盤即可快速推升價格，反之亦然。</p>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>真正的 Wyckoff 測試（Test）事件的邏輯：以小量的試探性動作來驗證對方力量是否已真正退場。若進入關鍵成交區成交量極小，說明對方已不在，路徑阻力最小。</p>
</div>
<p>---</p>`
      },
      {
        "title": "三大法則 ② 因果法則（Law of Cause & Effect）",
        "html": `<p>因果法則告訴我們：<strong>任何大幅度的趨勢運動（Effect），必然源於一段時間的橫盤積累過程（Cause）</strong>。橫盤時間愈長、計數愈大，隨後的趨勢就愈大。</p>
<div class="callout co-important">
  <div class="cot">關鍵點</div>
  <p>趨勢不是憑空出現的，而是由橫盤期間大資金的吸籌或派發行為「建立」出來的。這是 Wyckoff 理論能預測交易目標位元的基本依據。</p>
</div>
<h3>市場各階段中的因與果</h3>
<table>
  <thead>
    <tr><th>市場階段</th><th>角色</th><th>說明</th></tr>
  </thead>
  <tbody>
    <tr><td>吸籌（Accumulation）</td><td>建立原因</td><td>大資金在低價區緩慢收集籌碼，構建足夠大的多頭部位</td></tr>
    <tr><td>上漲趨勢（Markup）</td><td>實現結果</td><td>吸籌完成後推升價格，其上漲幅度與吸籌規模成正比</td></tr>
    <tr><td>派發（Distribution）</td><td>建立原因</td><td>大資金在高價區緩慢拋出籌碼，構建足夠大的空頭部位</td></tr>
    <tr><td>下跌趨勢（Markdown）</td><td>實現結果</td><td>派發完成後推低價格，其下跌幅度與派發規模成正比</td></tr>
  </tbody>
</table>
<h3>Point and Figure 點數圖應用</h3>
<p>Wyckoff 使用點數圖（P&F Chart）對橫盤期間進行水平計數，估算後續趨勢的目標位。基本邏輯如下：</p>
<ul>
  <li class="ind0"><strong>吸籌結構</strong>：從 LPS（Last Point of Support）回溯至 PS 或 SC，計數上漲目標位。</li>
  <li class="ind0"><strong>派發結構</strong>：從 LPSY（Last Point of Supply）回溯至 PSY 或 BC，計數下跌目標位。</li>
  <li class="ind0"><strong>再吸籌 / 再派發</strong>：計數起點改為 AR（Automatic Rally / Reaction），衡量二次建倉的規模。</li>
</ul>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>在現代圖表中，因果法則的另一種體現是：橫盤區間的寬度（時間）決定了突破後趨勢的長度。如果沒有經歷足夠長的吸籌過程，上漲通常只是短命的反彈。</p>
</div>
<p>---</p>`
      },
      {
        "title": "三大法則 ③ 努力與結果法則（Law of Effort vs Result）",
        "html": `<p>努力與結果法則是判斷趨勢是否健康、是否即將反轉的核心工具。<strong>成交量代表努力（Effort），價格移動的距離代表結果（Result）</strong>。</p>
<h3>和諧（Harmony） vs 背離（Divergence）</h3>
<table>
  <thead>
    <tr><th>狀態</th><th>量價關係</th><th>解讀</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>和諧</strong></td><td>大量帶動大振幅 K 線</td><td>努力與結果成正比，趨勢健康，可能延續</td></tr>
    <tr><td><strong>背離</strong></td><td>大量卻只有小振幅 K 線</td><td>努力無結果（Effort without Result），代表反向力量正在吸收動能，反轉預警</td></tr>
    <tr><td><strong>背離</strong></td><td>小量卻有大振幅 K 線</td><td>缺乏對手力量（Vacuum），價格雖然在走，但缺乏實質支撐，需謹慎</td></tr>
  </tbody>
</table>
<div class="callout co-important">
  <div class="cot">背離的深度意義</div>
  <p>最關鍵的背離發生在市場趨勢末端：當價格嘗試創新高（或新低）時，成交量顯著放大，但價格推進距離卻顯著縮短。這代表複合人正在此積極吸收對方的訂單，是趨勢終結的最強信號。</p>
</div>
<p>---</p>`
      },
      {
        "title": "複合人（Composite Man）思維模型",
        "html": `<p>為了理解市場，Wyckoff 建議交易者假想市場背後是由一個單一的強大個體在主導，他稱之為<strong>「複合人（Composite Man）」</strong>。這不是陰謀論，而是一個幫助解讀集體大資金行為的簡化模型。</p>
<h3>複合人的運作邏輯</h3>
<ul>
  <li class="ind0"><strong>它是無情的</strong>：它的目的是獲利，這意味著它必須在低位向散戶買入，在高位賣給散戶。</li>
  <li class="ind0"><strong>它是耐心的</strong>：它的部位巨大，不能一次性買入或賣出，否則會讓價格快速失控。因此它必須發動橫盤結構（吸籌 / 派發）來隱藏意圖。</li>
  <li class="ind0"><strong>它是狡猾的</strong>：在趨勢啟動前，它會發動最後的假動作（Spring / UTAD）來清洗散戶，吸納最後的流動性。</li>
</ul>
<div class="callout co-quote">
  <div class="cot">核心名言</div>
  <p>「你要觀察所有出現在圖表上的行為，就像它是單一一個人的行為一樣——研究他的動機，分析他的意圖。」</p>
</div>
<h3>散戶的生存之道</h3>
<p>散戶交易者的唯一獲利路徑：<strong>識別複合人的足跡（Footprints），並在趨勢啟動初期（Phase D/E）加入他的方向，而非與他對抗</strong>。</p>
<p>---</p>`
      },
      {
        "title": "市場週期的四個階段",
        "html": `<p>Wyckoff 將市場定義為一個不斷循環的四階段框架。理解當前身處哪個階段，決定了你的交易方向偏向。</p>
<table>
  <thead>
    <tr><th>階段</th><th>環境</th><th>行為特徵</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1. 吸籌（Accumulation）</strong></td><td>底部橫盤</td><td>價格不再創新低，成交量逐漸萎縮，顯示賣壓耗盡</td></tr>
    <tr><td><strong>2. 推升（Markup）</strong></td><td>上漲趨勢</td><td>價格有效突破區間，回調縮量，上漲放量，持續創新高</td></tr>
    <tr><td><strong>3. 派發（Distribution）</strong></td><td>頂部橫盤</td><td>價格不再創新高，成交量在區間內變得不穩定，顯示需求衰竭</td></tr>
    <tr><td><strong>4. 打壓（Markdown）</strong></td><td>下跌趨勢</td><td>價格有效跌破區間，反彈無力，持續創新低</td></tr>
  </tbody>
</table>
<div class="callout co-tip">
  <div class="cot">實戰建議</div>
  <p>新手最常犯的錯誤是在「吸籌 Phase B」或「派發 Phase B」中反覆被雙洗。專業交易者會耐心等待 Phase C 的假突破發生後，在 Phase D 的突破確認位置進場。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念自查清單",
        "html": `<h3>第一章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能解釋為什麼「買方多於賣方」是錯誤的邏輯。</li>
  <li class="ind0">[ ] 我理解主動性力量（市價單）與被動性力量（限價單）的區別。</li>
  <li class="ind0">[ ] 我理解「因果法則」中，橫盤期間與趨勢幅度的正比關係。</li>
  <li class="ind0">[ ] 我能識別量價分析中的「和諧」與「背離」，並知道背離代表反轉預警。</li>
  <li class="ind0">[ ] 我理解「複合人」思維模型，以及為何大資金必須進行橫盤積累。</li>
  <li class="ind0">[ ] 我能清晰描述市場週期的四個階段。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要提醒</div>
  <p>Wyckoff 的方法論不是一套死板的公式，而是一套觀察市場「動機」與「力量消長」的思維架構。接下來的章節將深入探討吸籌與派發的具體解剖學結構。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "吸籌結構解剖學",
    "id": "accumulation",
    "sub": "Accumulation Schematic · Phase A–E",
    "sections": [
      {
        "title": "吸籌結構的定義與核心目的",
        "html": `<p>吸籌（Accumulation）是一段出現在下跌趨勢之後的橫盤整理過程。在此期間，複合人（大資金）從散戶（弱手）手中接過籌碼。它的核心目的是：<strong>以儘量低的成本，完成大規模的多頭建倉，且不引發價格過早地上漲。</strong></p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>吸籌結構的完成，標誌著市場籌碼已從散戶手中轉移到大資金手中。唯有當市場中大部分的可拋售籌碼（Supply）被吸收殆盡後，價格才能展開持久的上漲趨勢。</p>
</div>
<h3>吸籌的三個關鍵前提</h3>
<ul>
  <li class="ind0"><strong>前置背景</strong>：必須出現在一段明確的下跌趨勢之後。</li>
  <li class="ind0"><strong>供需轉換</strong>：供給逐漸減少，需求逐漸增加，直到供需平衡。</li>
  <li class="ind0"><strong>量價確認</strong>：價格下跌時成交量萎縮（賣壓耗盡），上漲時成交量增加（需求進入）。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "吸籌結構的五個階段 (Phase A–E)",
        "html": `<p>Wyckoff 將吸籌結構細分為五個具邏輯先後順序的階段。識別當前身處哪個階段，是決定交易策略的核心。</p>
<h3>Phase A：停止前趨勢</h3>
<p>此階段的任務是終結之前的下跌趨勢，讓市場進入橫盤整理。主要事件包含：</p>
<ul>
  <li class="ind0"><strong>PS (Preliminary Support)</strong>：初步支撐。下跌中第一次出現買盤嘗試，但未能阻止下跌。</li>
  <li class="ind0"><strong>SC (Selling Climax)</strong>：賣出高潮。放量的大幅下跌，散戶在恐慌中割肉，大資金全數接盤。</li>
  <li class="ind0"><strong>AR (Automatic Rally)</strong>：自動反彈。賣壓耗盡後的自然回升，確立結構的上緣阻力。</li>
  <li class="ind0"><strong>ST (Secondary Test)</strong>：二次測試。回測 SC 低點，驗證賣壓是否真的減少。成交量應顯著萎縮。</li>
</ul>
<h3>Phase B：建立原因 (Cause)</h3>
<p>這是持續時間最長的階段。複合人在區間內反覆震盪，目的是：</p>
<ul>
  <li class="ind0">磨掉散戶耐心，誘使他們在橫盤中反覆割肉。</li>
  <li class="ind0">測試區間上緣（Creek）與下緣（Ice）的力道消長。</li>
  <li class="ind0">此階段成交量通常較混亂，但整體應呈現逐漸萎縮的趨勢。</li>
</ul>
<h3>Phase C：測試 (The Test)</h3>
<p>這是整個結構中最關鍵的時刻。大資金會發動一次「假突破」來進行最後的清洗：</p>
<ul>
  <li class="ind0"><strong>Spring</strong>：價格跌破 Phase A/B 的低點，清洗所有做多止損，隨後快速拉回區間。這是一個「空頭陷阱」。</li>
  <li class="ind0">Spring 的作用：① 測試下方是否還有剩餘賣壓。② 獲取最後的廉價籌碼。</li>
</ul>
<h3>Phase D：區間內趨勢</h3>
<p>若測試成功（Spring 縮量且價格回升），市場進入強勢階段：</p>
<ul>
  <li class="ind0"><strong>SOS (Sign of Strength)</strong>：強勢信號。價格帶量突破區間上緣。</li>
  <li class="ind0"><strong>LPS / BUEC</strong>：最後支撐點 / 回踩。突破後的縮量回調，確認支撐有效。這是最佳的進場點。</li>
</ul>
<h3>Phase E：脫離區間</h3>
<p>吸籌正式完成，市場展開主升浪（Markup）。此時應順勢做多，持有部位直到派發訊號出現。</p>
<p>---</p>`
      },
      {
        "title": "吸籌結構圖解事件速查表",
        "html": `<table>
  <thead>
    <tr><th>事件縮寫</th><th>全稱</th><th>功能與意義</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>PS</strong></td><td>Preliminary Support</td><td>初步支撐，預示趨勢可能反轉的第一個訊號。</td></tr>
    <tr><td><strong>SC</strong></td><td>Selling Climax</td><td>賣出高潮，確立結構的支撐下緣。</td></tr>
    <tr><td><strong>AR</strong></td><td>Automatic Rally</td><td>自動反彈，確立結構的阻力上緣。</td></tr>
    <tr><td><strong>ST</strong></td><td>Secondary Test</td><td>驗證賣壓，Phase A 結束的標誌。</td></tr>
    <tr><td><strong>UA</strong></td><td>Upthrust Action</td><td>Phase B 中對上緣的暫時性突破（若在吸籌中則稱為 UA）。</td></tr>
    <tr><td><strong>Spring</strong></td><td>Spring</td><td>Phase C 的靈魂。向下假突破，最強的進場信號背景。</td></tr>
    <tr><td><strong>SOS</strong></td><td>Sign of Strength</td><td>需求完全掌控市場的證據，突破區間。</td></tr>
    <tr><td><strong>BUEC</strong></td><td>Back Up to Edge of Creek</td><td>「跳過小溪後的回踩」，確認趨勢啟動的最後機會。</td></tr>
  </tbody>
</table>
<div class="callout co-tip">
  <div class="cot">進場邏輯</div>
  <p>最理想的進場點位於 Phase C 的 Spring Test，或 Phase D 的 BUEC 回踩。千萬不要在 Phase A 或 Phase B 的中段盲目猜底。</p>
</div>
<p>---</p>`
      },
      {
        "title": "三種不同類型的 Spring",
        "html": `<p>並非所有的 Spring 長得都一樣。根據成交量的不同，Spring 分為三種類型，其應對策略也完全不同。</p>
<h3>1. Spring #1 (Terminal Shakeout)</h3>
<p><strong>特徵</strong>：放量突破支撐，幅度很深。代表市場中仍有大量賣壓被觸發。<br><strong>應對</strong>：不要急著進場。必須等待價格重新回到區間內，並經歷一次顯著縮量的二次測試（Test）後再考慮。</p>
<h3>2. Spring #2</h3>
<p><strong>特徵</strong>：中等成交量，小幅跌破前低。代表賣壓已被部分吸收。<br><strong>應對</strong>：等待一個縮量的回測（Test）作為確認訊號。這是最常見的類型。</p>
<h3>3. Spring #3 (The Best Spring)</h3>
<p><strong>特徵</strong>：極小成交量跌破前低，甚至沒跌破就直接拉起。<br><strong>應對</strong>：這代表賣方已經完全退場（No Supply）。這是最強的看漲信號，可以直接在拉回時進場。</p>
<div class="callout co-important">
  <div class="cot">關鍵細節</div>
  <p>判斷 Spring 是否有效的核心在於「反應（Reaction）」。如果跌破後價格遲遲無法回到區間，則吸籌假設失效，它可能只是下跌趨勢的延續（再派發）。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念自查清單",
        "html": `<h3>第二章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能按順序說出吸籌結構的五個階段 (Phase A–E)。</li>
  <li class="ind0">[ ] 我能解釋 SC、AR、ST 在 Phase A 中各自扮演的角色。</li>
  <li class="ind0">[ ] 我理解為什麼 Phase B 是持續時間最長的階段。</li>
  <li class="ind0">[ ] 我能定義 Spring 的核心目的（測試賣壓 + 獲取流動性）。</li>
  <li class="ind0">[ ] 我能區分三種 Spring 的量價特徵與應對策略。</li>
  <li class="ind0">[ ] 我知道 SOS 與 BUEC 出現在哪個階段，以及它們對趨勢的確認意義。</li>
</ul>
<div class="callout co-important">
  <div class="cot">實戰思考</div>
  <p>吸籌結構是交易者的「獵場」。在觀察時，永遠要問自己：「那個關鍵的假動作（Spring）發生了嗎？」如果沒有，那你可能還身處於混亂的 Phase B 之中。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "派發結構解剖學",
    "id": "distribution",
    "sub": "Distribution Schematic · Phase A–E",
    "sections": [
      {
        "title": "派發結構的定義與核心目的",
        "html": `<p>派發（Distribution）是一段出現在上漲趨勢之後的橫盤整理過程。在此期間，複合人（大資金）將手中的獲利部位轉移給散戶（弱手）。它的核心目的是：<strong>以儘量高的價格，完成大規模的多頭平倉與空頭建倉，且不引發價格過早地下跌。</strong></p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>派發結構的完成，標誌著市場籌碼已從大資金手中轉移回散戶手中。當市場中缺乏大資金的撐盤，且充滿了持倉成本極高的散戶時，價格只要稍有賣壓就會崩潰，從而展開下跌趨勢（Markdown）。</p>
</div>
<h3>派發的三個關鍵前提</h3>
<ul>
  <li class="ind0"><strong>前置背景</strong>：必須出現在一段明確的上漲趨勢之後（通常伴隨著過度的市場樂觀情緒）。</li>
  <li class="ind0"><strong>供需轉換</strong>：需求逐漸耗盡，供給逐漸增加，直到供給壓倒需求。</li>
  <li class="ind0"><strong>量價確認</strong>：價格上漲時成交量萎縮（需求衰竭），下跌時成交量增加（賣方積極介入）。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "派發結構的五個階段 (Phase A–E)",
        "html": `<p>派發結構的邏輯是吸籌結構的鏡像。識別派發的早期訊號，是保護多頭獲利並抓住空頭趨勢的關鍵。</p>
<h3>Phase A：停止前趨勢</h3>
<p>終結上漲趨勢，進入橫盤環境。主要事件包含：</p>
<ul>
  <li class="ind0"><strong>PSY (Preliminary Supply)</strong>：初步供給。上漲中第一次出現明顯賣盤，雖然價格仍創新高，但漲勢已不如前。</li>
  <li class="ind0"><strong>BC (Buying Climax)</strong>：買入高潮。放量的大幅上漲，散戶在貪婪中進場，大資金將籌碼分批拋出。確立結構的上緣阻力。</li>
  <li class="ind0"><strong>AR (Automatic Reaction)</strong>：自動反應。買壓枯竭後的自然回落，確立結構的下緣支撐。</li>
  <li class="ind0"><strong>ST (Secondary Test)</strong>：二次測試。回測 BC 高點，驗證買方動能是否消散。成交量應顯著萎縮。</li>
</ul>
<h3>Phase B：建立原因 (Cause)</h3>
<p>持續時間較長的震盪期。複合人在區間內：</p>
<ul>
  <li class="ind0">利用反覆震盪維持市場熱度，讓散戶誤以為橫盤後會繼續上漲。</li>
  <li class="ind0">測試區間下緣（Ice / 冰層）的支撐力道。</li>
  <li class="ind0">此階段成交量常出現不規則放量，代表賣方正在積極主導市場。</li>
</ul>
<h3>Phase C：測試 (The Test)</h3>
<p>派發中最致命的清洗動作：</p>
<ul>
  <li class="ind0"><strong>UTAD (Upthrust After Distribution)</strong>：價格突破 Phase A/B 的高點，創下「新高」，清洗所有空頭止損並誘使最後的散戶進場做多。</li>
  <li class="ind0">UTAD 的作用：① 測試上方是否還有剩餘需求。② 獲取最後的高價賣出機會。</li>
</ul>
<h3>Phase D：區間內趨勢</h3>
<p>若測試成功（UTAD 後價格快速返回區間並放量下跌），市場進入弱勢階段：</p>
<ul>
  <li class="ind0"><strong>SOW (Sign of Weakness)</strong>：弱勢信號。價格帶量跌破區間下緣（Ice）。</li>
  <li class="ind0"><strong>LPSY / FTI</strong>：最後供給點 / 穿越冰層。跌破後的縮量反彈回測，確認支撐已轉為阻力。這是最佳的做空點。</li>
</ul>
<h3>Phase E：脫離區間</h3>
<p>派發正式完成，市場展開主跌浪（Markdown）。</p>
<p>---</p>`
      },
      {
        "title": "派發結構圖解事件速查表",
        "html": `<table>
  <thead>
    <tr><th>事件縮寫</th><th>全稱</th><th>功能與意義</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>PSY</strong></td><td>Preliminary Supply</td><td>初步供給，上漲趨勢即將終結的黃色警告。</td></tr>
    <tr><td><strong>BC</strong></td><td>Buying Climax</td><td>買入高潮，確立結構的阻力上緣。</td></tr>
    <tr><td><strong>AR</strong></td><td>Automatic Reaction</td><td>自動反應，確立結構的支撐下緣。</td></tr>
    <tr><td><strong>ST</strong></td><td>Secondary Test</td><td>驗證需求，若 ST 伴隨放量，則仍有續漲可能。</td></tr>
    <tr><td><strong>UT</strong></td><td>Upthrust</td><td>向上突刺。Phase B 中對上緣的短暫假突破。</td></tr>
    <tr><td><strong>UTAD</strong></td><td>Upthrust After Distribution</td><td>Phase C 的靈魂。向上假突破，最強的做空信號背景。</td></tr>
    <tr><td><strong>SOW</strong></td><td>Sign of Weakness</td><td>供給完全掌控市場的證據，跌破支撐。</td></tr>
    <tr><td><strong>LPSY</strong></td><td>Last Point of Supply</td><td>最後供給點，反彈無力回測冰層的做空機會。</td></tr>
  </tbody>
</table>
<div class="callout co-warning">
  <div class="cot">進場邏輯</div>
  <p>派發結構比吸籌結構更具欺騙性。新手常在 UTAD 創下新高時追多，結果被套在最高點。永遠等待 Phase C 的假突破發生，並在 Phase D 的 SOW 出現後尋找反彈做空機會。</p>
</div>
<p>---</p>`
      },
      {
        "title": "如何區分「再吸籌」與「派發頂部」",
        "html": `<p>這是 Wyckoff 方法論中最難的課題。價格在上漲後橫盤，到底是要繼續漲（再吸籌），還是要反轉跌（派發）？</p>
<h3>區分關鍵：Phase B 的表現</h3>
<table>
  <thead>
    <tr><th>特徵</th><th>再吸籌 (Reaccumulation)</th><th>派發頂部 (Distribution)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>成交量趨勢</strong></td><td>區間內成交量逐漸萎縮，顯示賣壓減少</td><td>區間內成交量不穩定或偏高，顯示賣盤強烈</td></tr>
    <tr><td><strong>下緣測試 (Ice)</strong></td><td>回測下緣時縮量，且低點逐漸抬高</td><td>回測下緣時放量，且低點逐漸平齊或降低</td></tr>
    <tr><td><strong>Phase C 震盪</strong></td><td>向下假突破 (Spring) 較常見</td><td>向上假突破 (UTAD) 較常見</td></tr>
    <tr><td><strong>K 線品質</strong></td><td>上漲 K 線通常比下跌 K 線更流暢、更放量</td><td>下跌 K 線通常比上漲 K 線更寬幅、更放量</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>最保險的做法是：不要在 Phase B 裡猜方向。等待 Phase C 的假突破方向給出線索，並在 Phase D 突破區間後的回測位置（BUEC 或 LPSY）再進場，雖然犧牲了一點點點位，但大大提高了勝率。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念自查清單",
        "html": `<h3>第三章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能按順序說出派發結構的五個階段 (Phase A–E)。</li>
  <li class="ind0">[ ] 我能解釋 BC、AR、ST 在 Phase A 中各自扮演的角色。</li>
  <li class="ind0">[ ] 我能定義 UTAD 的核心目的（測試需求 + 獲取空頭流動性）。</li>
  <li class="ind0">[ ] 我知道 SOW 與 LPSY 出現在哪個階段，以及它們對下跌趨勢的確認意義。</li>
  <li class="ind0">[ ] 我能列舉出區分「再吸籌」與「派發」的三個關鍵量價特徵。</li>
</ul>
<div class="callout co-important">
  <div class="cot">實戰思考</div>
  <p>在高位橫盤中，散戶最容易被情緒左右。當你看到媒體瘋狂報導、身邊人都在討論某個資產時，請冷靜觀察圖表：是否已經出現了 PSY 與 BC？Phase B 的下跌是否開始帶量？如果是，請管住你的手，派發可能正在發生。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "再吸籌 / 再派發",
    "sub": "Reaccumulation & Redistribution",
    "id": "reaccumulation",
    "sections": [
      {
        "title": "再吸籌的定義與背景邏輯",
        "html": `<p>再吸籌（Reaccumulation）是一段出現在<strong>上漲趨勢途中</strong>的橫盤整理結構。它的發展過程與主吸籌（Primary Accumulation）在結構上完全相同——唯一的根本差異，在於起始背景：主吸籌出現在下跌趨勢之後，再吸籌出現在上漲趨勢的暫時停頓後。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>再吸籌的本質是「趨勢途中的換手鞏固」。隨著上漲趨勢推進，籌碼會逐漸從強手（大資金）流向弱手（跟隨散戶）。當弱手佔比過高，大資金需要再度啟動一輪吸籌過程，將籌碼從弱手手中奪回，才能繼續推動下一輪上漲。</p>
</div>
<h3>籌碼流向的動態邏輯</h3>
<p>一輪完整的上漲趨勢，其籌碼流向可以描述如下：</p>
<ul>
  <li class="ind0"><strong>趨勢初期</strong>：價值由強手主導（機構、大資金），籌碼集中在強手手中。</li>
  <li class="ind0"><strong>趨勢發展中</strong>：隨著上漲，散戶（弱手）陸續追高進場，籌碼逐漸分散至弱手手中。此時「需求品質下降（Poor Quality Demand）」——推升力道變得不穩定。</li>
  <li class="ind0"><strong>再吸籌觸發點</strong>：當弱手持倉比例過高，市場無法繼續自我維持上漲動能，複合人再度介入，發動一輪橫盤結構，清洗弱手、重新集中籌碼。</li>
  <li class="ind0"><strong>再吸籌完成後</strong>：籌碼重新回到強手控制，下一輪上漲得以更有力地推進。</li>
</ul>
<h3>再吸籌結構的持續時間決定因素</h3>
<p>再吸籌結構的橫盤時長，取決於觸發時市場中強弱手籌碼的比例：</p>
<ul>
  <li class="ind0"><strong>強手仍佔多數</strong>：結構持續時間較短，因為需要重新吸納的籌碼數量較少。</li>
  <li class="ind0"><strong>弱手已佔多數</strong>：結構持續時間較長，因為需要從大量弱手手中逐步奪回籌碼，過程更費時。</li>
</ul>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>再吸籌不代表主趨勢目標已達成。它只是上漲過程中的「中途補給站」——主吸籌所設定的長期目標尚未完成，複合人在此添加新的需求力量，準備繼續向目標推進。</p>
</div>
<p>---</p>`
      },
      {
        "title": "再派發的定義與背景邏輯",
        "html": `<p>再派發（Redistribution）是一段出現在<strong>下跌趨勢途中</strong>的橫盤整理結構。它的發展過程與主派發（Primary Distribution）在結構上完全相同——唯一的根本差異，同樣在於起始背景：主派發出現在上漲趨勢之後，再派發出現在下跌趨勢的暫時停頓後。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>再派發的本質是「下跌趨勢途中的空頭加倉」。在熊市過程中，籌碼逐漸從強手空頭流向接盤的弱手多頭。當複合人想繼續往下推，需要再度積累足夠的空頭部位，發動新一輪派發橫盤，才能取得足夠流動性繼續打壓。</p>
</div>
<h3>再派發中的複合人行為</h3>
<p>在再派發期間，已持有空頭部位的大資金，會在結構內做出以下操作：</p>
<ul>
  <li class="ind0"><strong>在結構上緣繼續放空</strong>：利用反彈至高位的機會，繼續加碼空頭倉位。</li>
  <li class="ind0"><strong>在結構下緣部分回補</strong>：在低位回補（平空）部分倉位，以製造人為支撐，避免價格過早下跌——目的是維持橫盤夠長的時間，讓自己完成足夠大的新空頭建倉。</li>
  <li class="ind0"><strong>橫盤末期波動加大</strong>：與主派發相同，再派發在末期往往出現更大的波動，這是複合人最後清洗多頭止損、確認下行阻力清除的動作。</li>
</ul>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>再派發同樣不代表主趨勢目標已達成。主派發所設定的長期下跌目標尚未完成，複合人在此積累新的供給力量，準備繼續向下推進。一輪大熊市中可能出現多次再派發橫盤結構。</p>
</div>
<p>---</p>`
      },
      {
        "title": "視覺特徵差異對照表",
        "html": `<p>再吸籌與主派發頂部具有完全相同的起始形態（都在前期上漲後出現橫盤），是 Wyckoff 方法論中最困難的判斷之一。再派發與主吸籌底部同樣面臨相同的困境（都在前期下跌後出現橫盤）。以下對照表整理了辨別各類結構的關鍵線索。</p>
<h3>再吸籌 vs 派發頂部 對照表</h3>
<table>
  <thead>
    <tr><th>特徵維度</th><th>再吸籌（趨勢中途整理）</th><th>派發頂部（趨勢反轉）</th></tr>
  </thead>
  <tbody>
    <tr><td>前置背景</td><td>前期明確的上漲趨勢，整理幅度相對較小</td><td>前期明確的上漲趨勢，結構規模通常較大</td></tr>
    <tr><td>成交量趨勢</td><td>逐漸萎縮，顯示賣方失去興趣</td><td>偏高且不穩定，多空雙方持續博弈</td></tr>
    <tr><td>上漲波段特徵</td><td>寬振幅、流暢，K 線品質優於下跌波段</td><td>逐漸縮短，振幅縮小，量價背離</td></tr>
    <tr><td>下跌波段特徵</td><td>縮量、窄幅，顯示賣方不積極</td><td>寬振幅、流暢，K 線品質優於上漲波段</td></tr>
    <tr><td>區間高點測試</td><td>測試上緣縮量（無賣方）</td><td>測試上緣放量（有賣方積極介入）</td></tr>
    <tr><td>區間低點測試</td><td>測試下緣縮量（無買方放棄）</td><td>測試下緣縮量（買方不在意）</td></tr>
    <tr><td>Phase C 震盪方向</td><td>向下（Ordinary Shakeout），清洗多頭止損</td><td>向上（UTAD），清洗空頭止損</td></tr>
    <tr><td>震盪後反應</td><td>快速收復失地，向上展開 SOS</td><td>快速返回區間，向下展開 SOW</td></tr>
    <tr><td>AR 反應幅度</td><td>AR 下跌幅度較小，快速止跌</td><td>AR 下跌幅度顯著，顯示真實賣壓</td></tr>
    <tr><td>結構整體趨勢傾斜</td><td>後期出現 Higher Lows（上升低點）</td><td>後期出現 Lower Highs（下降高點）</td></tr>
  </tbody>
</table>
<h3>再派發 vs 吸籌底部 對照表</h3>
<table>
  <thead>
    <tr><th>特徵維度</th><th>再派發（下跌趨勢中途整理）</th><th>吸籌底部（趨勢反轉）</th></tr>
  </thead>
  <tbody>
    <tr><td>前置背景</td><td>前期明確的下跌趨勢，整理幅度相對較小</td><td>前期明確的下跌趨勢，結構規模通常較大</td></tr>
    <tr><td>成交量趨勢</td><td>偏高且不穩定，多空博弈持續</td><td>逐漸萎縮，買方承接力量增強</td></tr>
    <tr><td>上漲波段特徵</td><td>縮量、窄幅，反彈缺乏動能</td><td>寬振幅、流暢，K 線品質優於下跌波段</td></tr>
    <tr><td>下跌波段特徵</td><td>寬振幅、流暢，K 線品質優於上漲波段</td><td>縮量、窄幅，賣方力量逐漸耗盡</td></tr>
    <tr><td>Phase C 震盪方向</td><td>向上（Ordinary Upthrust），清洗空頭止損</td><td>向下（Spring），清洗多頭止損</td></tr>
    <tr><td>震盪後反應</td><td>快速返回區間，向下展開 SOW</td><td>快速收復失地，向上展開 SOS</td></tr>
    <tr><td>AR 反應幅度</td><td>AR 上漲幅度較小，快速止漲</td><td>AR 上漲幅度顯著，顯示真實買盤</td></tr>
    <tr><td>結構整體趨勢傾斜</td><td>後期出現 Lower Highs（下降高點）</td><td>後期出現 Higher Lows（上升低點）</td></tr>
  </tbody>
</table>
<div class="callout co-warning">
  <div class="cot">警告 / 陷阱</div>
  <p>沒有任何單一特徵能夠單獨確認結構屬性。所有線索都只是提高概率，而非保證。實戰中應累積線索：符合某方向的特徵愈多，判斷的信心愈高；一旦出現明顯矛盾的強烈反向信號，必須重新評估原有假設。</p>
</div>
<p>---</p>`
      },
      {
        "title": "「這是整理還是反轉？」的判斷 SOP",
        "html": `<p>這是 Wyckoff 交易者在實盤中面臨最頻繁的決策問題。以下提供一個系統化的判斷流程，幫助在模糊情境下做出更有根據的決策。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>核心原則：<strong>在結構方向確認前，永遠保持雙情境假設</strong>。在上漲後的橫盤結構中，同時準備再吸籌（繼續上漲）與派發（反轉下跌）兩個情境，用後續事件的量價線索逐步提高或降低各情境的概率，不提前押注。</p>
</div>
<h3>完整判斷 SOP</h3>
<ul>
  <li class="ind0"><strong>步驟一：確認前置趨勢背景</strong>
    <p>上漲後的橫盤 → 同時評估再吸籌與派發。下跌後的橫盤 → 同時評估吸籌與再派發。前置趨勢的強弱（是否健康放量、是否有過度延伸）會影響初始概率判斷。</p>
  </li>
  <li class="ind0"><strong>步驟二：評估 AR（Automatic Rally / Reaction）的幅度與量能</strong>
    <p>AR 幅度大且量能充足 → 反向力量較強，反轉概率提高。AR 幅度小且縮量 → 反向力量薄弱，整理繼續概率提高。</p>
  </li>
  <li class="ind0"><strong>步驟三：觀察 Phase B 的量價優勢在哪一側</strong>
    <p>上漲波段寬幅流暢、下跌波段縮量窄幅 → 買方佔優，傾向再吸籌。下跌波段寬幅流暢、上漲波段縮量窄幅 → 賣方佔優，傾向派發。</p>
  </li>
  <li class="ind0"><strong>步驟四：觀察 Phase B 的 ST（Secondary Test）位置</strong>
    <p>ST 停於結構上半段（高） → 買方仍有主導力，傾向再吸籌。ST 跌至結構下半段（低）甚至略破前低 → 賣方壓力較重，傾向派發。</p>
  </li>
  <li class="ind0"><strong>步驟五：觀察 Phase C 的震盪方向與後續反應</strong>
    <p>向下假突破（Ordinary Shakeout）後快速強力反彈 → 強烈支持再吸籌。向上假突破（Ordinary Upthrust / UTAD）後快速返回且無力 → 強烈支持派發。若無明顯震盪 → 需依賴後續突破方向確認。</p>
  </li>
  <li class="ind0"><strong>步驟六：等待 Phase D 的突破方向，作為最終確認</strong>
    <p>有效向上突破 Creek（SOS + BUEC 縮量回測成功）→ 確認再吸籌，可進場做多。有效向下突破 ICE（SOW + LPSY 縮量回測成功）→ 確認派發 / 再派發，可進場做空。突破後若快速返回區間 → 突破失敗，重新進入「整理 vs 反轉」評估流程。</p>
  </li>
</ul>
<div class="callout co-example">
  <div class="cot">應用案例</div>
  <p>BTC 2021 年 5 月至 7 月的橫盤整理：前置背景為大幅上漲後的高位整理，Phase B 中下跌波段明顯優於上漲波段，上緣測試帶量且未能維持（UT 特徵），Phase C 出現了向上的假突破但隨即被壓制，最終 ICE 有效向下突破並以 SOW + LPSY 確認。事後回溯判定為主派發頂部，而非再吸籌。</p>
</div>
<p>---</p>`
      },
      {
        "title": "四種結構的完整定位框架",
        "html": `<p>將主吸籌、再吸籌、主派發、再派發四種結構整合到市場週期框架中，可以更清晰地理解每種結構在大趨勢中的角色與位置。</p>
<h3>四種結構在市場週期中的定位</h3>
<table>
  <thead>
    <tr><th>結構類型</th><th>出現位置</th><th>前置狀態</th><th>後續狀態</th><th>複合人目的</th></tr>
  </thead>
  <tbody>
    <tr><td>主吸籌（Accumulation）</td><td>大趨勢底部</td><td>長期下跌趨勢</td><td>Markup 上漲趨勢啟動</td><td>以低成本完成初始多頭建倉</td></tr>
    <tr><td>再吸籌（Reaccumulation）</td><td>上漲趨勢途中</td><td>前段上漲（趨勢延伸）</td><td>Markup 繼續上漲</td><td>清洗弱手、重新集中籌碼、添加新多頭倉位</td></tr>
    <tr><td>主派發（Distribution）</td><td>大趨勢頂部</td><td>長期上漲趨勢</td><td>Markdown 下跌趨勢啟動</td><td>以高成本完成初始空頭建倉 / 全面出清多頭</td></tr>
    <tr><td>再派發（Redistribution）</td><td>下跌趨勢途中</td><td>前段下跌（趨勢延伸）</td><td>Markdown 繼續下跌</td><td>清洗弱手空頭、添加新空頭倉位、繼續推低</td></tr>
  </tbody>
</table>
<h3>同一個結構的多時間框架解讀</h3>
<p>一個重要的高階概念是：<strong>同一段橫盤結構，在不同時間框架上可以同時扮演不同角色</strong>。</p>
<ul>
  <li class="ind0">在日線上看到的「主派發頂部」，放到週線上可能只是更大主吸籌結構中的一段「Phase B 震盪」。</li>
  <li class="ind0">在 4H 上看到的「再吸籌結構」，放到日線上可能是更大主吸籌的 Phase C 前的 LPS 位置。</li>
  <li class="ind0"><strong>原則：永遠以更高時間框架的結構屬性作為方向偏向（Directional Bias）</strong>，在更低時間框架中尋找對應方向的進場機會。</li>
</ul>
<div class="callout co-tip">
  <div class="cot">實戰應用</div>
  <p>當你在 1H 看到一個疑似「派發頂部」，但日線結構顯示仍處於吸籌後的 Markup 趨勢中，正確的做法是以日線方向（做多偏向）為主，在 1H 的「派發結構」中尋找 LPSY 後的 SOW 確認，再決定是否要逆 HTF 結構操作——而非盲目做空。多時間框架的方向一致性，是所有 Wyckoff 進場的先決條件。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念清單",
        "html": `<h3>第四章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能說明再吸籌與主吸籌在結構上完全相同，唯一差異是起始背景（下跌後 vs 上漲後）。</li>
  <li class="ind0">[ ] 我理解籌碼流向的動態邏輯：強手 → 弱手 → 再吸籌 → 強手，這個循環解釋了為何趨勢中需要整理。</li>
  <li class="ind0">[ ] 我能說明再派發期間複合人在結構上緣放空、下緣部分回補的操作邏輯。</li>
  <li class="ind0">[ ] 我能從對照表中列舉至少四個區分「再吸籌 vs 派發頂部」的關鍵特徵差異。</li>
  <li class="ind0">[ ] 我能從對照表中列舉至少四個區分「再派發 vs 吸籌底部」的關鍵特徵差異。</li>
  <li class="ind0">[ ] 我能完整說出「整理 vs 反轉」的六步驟判斷 SOP，並理解每一步的邏輯依據。</li>
  <li class="ind0">[ ] 我理解在結構確認前應同時維持雙情境假設，而非提前選邊站。</li>
  <li class="ind0">[ ] 我能說明四種結構（主吸籌、再吸籌、主派發、再派發）在市場週期中各自的定位。</li>
  <li class="ind0">[ ] 我理解多時間框架的結構層疊概念，以及「永遠以更高時間框架的結構屬性為方向偏向」的原則。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>再吸籌與再派發的判斷是 Wyckoff 方法論中公認最難的技能，沒有捷徑。訓練方法只有一個：大量回溯已確認的歷史結構，建立對「量價優勢方向」的直覺感知。線索的積累速度慢，但每一個成功識別的結構都在加強你的模式辨識能力。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "量價分析",
    "sub": "Effort vs Result · VSA",
    "id": "volume",
    "sections": [
      {
        "title": "量價分析的核心地位",
        "html": `<p>在 Wyckoff 方法論中，<strong>價格（Price）與成交量（Volume）是理解市場的兩個根本工具</strong>。價格是可見的結果，成交量是背後的意圖——兩者結合，才能解讀複合人的真實行為。</p>
<p>成交量本身有一個關鍵定義：它識別了在某一段時間內，有多少股份（或合約、單位）易手。<strong>當大資金對某個標的感興趣時，這種興趣必然會反映在成交量上</strong>。反之，成交量萎縮，代表大資金不在場，或已從某個方向退出。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>成交量的「字符（Character）」比絕對數值更重要。同樣是「大量」，在上漲中出現與在跌破支撐後立刻縮量，代表截然不同的市場訊息。分析量價必須永遠結合背景（Context）。</p>
</div>
<h3>量價分析的兩個核心問題</h3>
<ul>
  <li class="ind0"><strong>這筆量能，目的是推進還是吸收？</strong>：放量上漲可能是真實的需求推升（和諧），也可能是複合人在高位吸收散戶的追多單（BC 訊號）。</li>
  <li class="ind0"><strong>這個結果，與這筆努力相符嗎？</strong>：大量帶來大幅移動（和諧）；大量帶來微小移動（背離）——背離才是最有價值的交易訊號。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "努力與結果法則的量化應用",
        "html": `<p>努力與結果法則（Law of Effort vs Result）是量價分析的核心框架。在金融市場中，<strong>成交量 = 努力，價格移動 = 結果</strong>。我們的任務是持續評估這兩者之間的關係：和諧（Harmony）還是背離（Divergence）？</p>
<h3>和諧（Harmony）的含義</h3>
<p>和諧代表努力與結果相互匹配——大的努力產生大的結果，小的努力產生小的結果。和諧是趨勢健康、可能延續的訊號。</p>
<ul>
  <li class="ind0">大量 + 大幅推進 → 強勢趨勢延續訊號。</li>
  <li class="ind0">小量 + 小幅回調 → 正常整理，趨勢無礙訊號。</li>
</ul>
<h3>背離（Divergence）的含義</h3>
<p>背離代表努力與結果不匹配——大的努力卻只產生小的結果（或相反）。背離是趨勢即將衰竭或反轉的預警訊號。</p>
<ul>
  <li class="ind0">大量 + 微小移動 → 努力無結果（Effort without Result）：市場中有強大的反向力量正在吸收所有動能，是最重要的反轉預警。</li>
  <li class="ind0">小量 + 大幅移動 → 流動性真空（Vacuum / Lack of Interest）：缺乏對面力量，路徑無阻力，但可信度存疑。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>背離的程度與後續結果的程度成正比。小幅背離傾向產生小幅反轉；大幅背離傾向產生大幅反轉。這個比例關係幫助我們評估訊號的「分量」。</p>
</div>
<p>---</p>`
      },
      {
        "title": "成交量分析的五個評估維度",
        "html": `<h3>維度一：單根 K 線分析</h3>
<p>最基礎的量價評估單位。核心原則是：<strong>K 線振幅（Range）應與成交量（Volume）相匹配</strong>。</p>
<table>
  <thead>
    <tr><th>K 線特徵</th><th>成交量</th><th>解讀</th><th>訊號意義</th></tr>
  </thead>
  <tbody>
    <tr><td>大振幅推進</td><td>大量</td><td>和諧——強勢確認</td><td>趨勢延續，機構主動入場</td></tr>
    <tr><td>小振幅推進</td><td>大量</td><td>背離——努力無結果</td><td>反轉預警，反向力量正在吸收</td></tr>
    <tr><td>小振幅回調</td><td>小量</td><td>和諧——正常整理</td><td>趨勢無礙，弱手退場縮量</td></tr>
    <tr><td>大振幅推進</td><td>小量</td><td>流動性真空（對面缺席）</td><td>需謹慎驗證，缺乏實質支撐</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>小量大幅移動（流動性真空）有兩種解讀：其一是對面力量真的缺席（最小阻力路徑），其二是市場流動性不足、容易被操縱。需要結合背景判斷。在吸籌末期的 Spring #3 後見到縮量大幅反彈，通常是前者；在薄市或假突破中見到，則需警惕。</p>
</div>
<h3>維度二：下一根 K 線延伸</h3>
<p>單根 K 線的量價訊號，必須由下一根 K 線的後續行為來確認。若大量推進後，下一根 K 線繼續在同方向延伸 → 和諧確認；若下一根 K 線逆向收回 → 當前 K 線的量可能是吸收性質，而非推進。</p>
<h3>維度三：完整波動（Movements）分析</h3>
<p>觀察完整的上漲或下跌波段，而非個別 K 線。健康趨勢的量價特徵如下：</p>
<ul>
  <li class="ind0"><strong>健康上漲趨勢</strong>：上漲波段伴隨放量（主動性買盤），回調波段伴隨縮量（賣方退場）。</li>
  <li class="ind0"><strong>健康下跌趨勢</strong>：下跌波段伴隨放量（主動性賣盤），反彈波段伴隨縮量（買方退場）。</li>
  <li class="ind0"><strong>趨勢衰竭訊號</strong>：新高點由縮量帶出（買方動能下降）；回調波段放量（賣方開始積極介入）。</li>
</ul>
<h3>維度四：Weis 波浪（Wave Volume）</h3>
<p>Weis 波浪由 David Weis 創建，是量價分析中最強大的工具之一。它將每個完整的上漲或下跌波浪（Wave）的累計成交量加總，讓我們能比較不同波段之間的力道消長。</p>
<table>
  <thead>
    <tr><th>Weis 波浪比較</th><th>解讀</th><th>訊號</th></tr>
  </thead>
  <tbody>
    <tr><td>上漲波浪量 > 下跌波浪量，且持續</td><td>買方力道持續優於賣方</td><td>上漲趨勢健康，可延續</td></tr>
    <tr><td>上漲波浪量逐波遞減</td><td>買方動能逐漸衰竭</td><td>上漲趨勢即將結束，注意反轉</td></tr>
    <tr><td>下跌波浪量 > 上漲波浪量，且持續</td><td>賣方力道持續優於買方</td><td>下跌趨勢健康，可延續</td></tr>
    <tr><td>下跌波浪量逐波遞減</td><td>賣方動能逐漸衰竭</td><td>下跌趨勢即將結束，注意反轉</td></tr>
    <tr><td>回調波浪量 > 前波上漲量</td><td>賣方開始主導，趨勢可能反轉</td><td>做多部位考慮減倉或離場</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>分析 Weis 波浪時，要記住一個關鍵事實：<strong>上漲波浪的成交量並非全部都是買單，下跌波浪的成交量也並非全部都是賣單</strong>。每筆成交都有買方和賣方，重要的是哪一方是「主動方（市價單）」。這需要結合 K 線特徵（收盤位置、振幅）來判斷主動力量的方向。</p>
</div>
<h3>維度五：關鍵位突破分析</h3>
<p>突破水平支撐或阻力時的量價關係，是驗證突破有效性的核心工具。</p>
<ul>
  <li class="ind0"><strong>放量有效突破</strong>：大量推進穿越關鍵位，且後續縮量回測維持在突破位之外 → 和諧，突破可信。</li>
  <li class="ind0"><strong>放量假突破</strong>：大量穿越關鍵位，但隨即被強力推回 → 背離，是 Shake（Spring / UTAD）的特徵，訊號意義極強。</li>
  <li class="ind0"><strong>縮量突破</strong>：小量穿越關鍵位，需謹慎驗證——可能是流動性真空（賣方缺席）推動的有效突破，也可能是假動作。後續 K 線行為決定真偽。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "吸籌各事件的成交量特徵",
        "html": `<p>每一個 Wyckoff 結構事件都有其特定的「期望量能特徵」。若某事件的量能與期望不符，這本身就是一個重要的分析線索，需要修正假設。</p>
<h3>吸籌結構各事件量能對照表</h3>
<table>
  <thead>
    <tr><th>事件</th><th>期望量能特徵</th><th>量能不符時的含義</th></tr>
  </thead>
  <tbody>
    <tr><td>PS（Preliminary Support）</td><td>相對前期放量，第一次明顯高量</td><td>若無放量，可能不是真正的 PS，繼續等待</td></tr>
    <tr><td>SC（Selling Climax）</td><td>顯著放大，超高量（或縮量型的 Selling Exhaustion）</td><td>若量能中等，可能只是普通下跌，需等更明確的 AR</td></tr>
    <tr><td>AR（Automatic Rally）</td><td>初期較大量，隨反彈延伸逐漸萎縮</td><td>若 AR 全程縮量，買方力量薄弱，可能是再派發</td></tr>
    <tr><td>ST（Secondary Test）</td><td>顯著小於 SC 的成交量（最關鍵）</td><td>若量能不縮，賣壓未消散，低點仍有再測試風險</td></tr>
    <tr><td>Phase B 上緣測試（UA）</td><td>相對縮量，顯示推進乏力</td><td>若放量且維持上方，可能是有效突破而非 UA</td></tr>
    <tr><td>Spring #1（Terminal Shakeout）</td><td>急速放大的超高量</td><td>標準型態，需等待縮量 Test 才進場</td></tr>
    <tr><td>Spring #2</td><td>適度放大</td><td>需等待一或多次縮量 Test</td></tr>
    <tr><td>Spring #3</td><td>顯著萎縮（最強的 Spring）</td><td>縮量即代表賣方耗盡，可直接進場</td></tr>
    <tr><td>Spring Test</td><td>必須顯著小於 Spring 本身的量能</td><td>若放量，測試無效，繼續等待後續縮量 Test</td></tr>
    <tr><td>SOS（Sign of Strength）</td><td>明顯放量，和諧推進，K 線寬幅收高</td><td>若縮量，SOS 的可信度低，後續 Phase D 需更謹慎</td></tr>
    <tr><td>LPS / BUEC</td><td>顯著小於 SOS 的成交量，縮幅窄幅</td><td>若放量，可能是突破失敗的 UT，謹慎做多</td></tr>
  </tbody>
</table>
<div class="callout co-warning">
  <div class="cot">警告 / 陷阱</div>
  <p>Spring 後的 Test 是否縮量，是進場做多前最不能妥約的驗證條件。若 Spring 放了大量，而後續 Test 仍然放量，代表市場中仍有大量賣方力量，此時進場極易再度被突破低點所洗出。耐心等待真正的縮量 Test，是保護資金安全的核心紀律。</p>
</div>
<p>---</p>`
      },
      {
        "title": "派發各事件的成交量特徵",
        "html": `<h3>派發結構各事件量能對照表</h3>
<table>
  <thead>
    <tr><th>事件</th><th>期望量能特徵</th><th>量能不符時的含義</th></tr>
  </thead>
  <tbody>
    <tr><td>PSY（Preliminary Supply）</td><td>相對前期放量，第一次明顯的賣壓出現</td><td>若無放量，可能不是真正的 PSY，繼續等待</td></tr>
    <tr><td>BC（Buying Climax）</td><td>顯著放大，超高量（或縮量型的 Buying Exhaustion）</td><td>若量能中等，可能只是普通上漲，需等更明確的 AR</td></tr>
    <tr><td>AR（Automatic Reaction）</td><td>初期較大量，隨下跌延伸逐漸萎縮</td><td>若 AR 全程縮量，賣方力量薄弱，可能是再吸籌</td></tr>
    <tr><td>ST（Secondary Test）</td><td>顯著小於 BC 的成交量（最關鍵）</td><td>若量能不縮，買壓未消散，高點仍有再測試風險</td></tr>
    <tr><td>Phase B 上緣測試（UT）</td><td>相對縮量或中量，推進後快速返回</td><td>若放量且維持上方，可能是有效突破（再吸籌 JAC）</td></tr>
    <tr><td>UTAD</td><td>明顯放量（大量空頭止損 + 散戶追多）</td><td>若縮量假突破，力度較弱，但仍可能有效</td></tr>
    <tr><td>UTAD Test</td><td>必須顯著小於 UTAD 本身的量能</td><td>若放量或創新高，UTAD 假設失效，需重新評估</td></tr>
    <tr><td>SOW（Sign of Weakness）</td><td>明顯放量，和諧推低，K 線寬幅收低</td><td>若縮量，SOW 的可信度低，後續 Phase D 需更謹慎</td></tr>
    <tr><td>LPSY / FTI 回測</td><td>顯著小於 SOW 的成交量，縮幅窄幅</td><td>若放量，可能是跌破失敗的 Spring，謹慎做空</td></tr>
  </tbody>
</table>
<div class="callout co-tip">
  <div class="cot">實戰應用</div>
  <p>派發結構中，Phase B 的上緣測試（UT）是最容易引發誤判的位置。觀察 UT 後的成交量特徵：若突破後量能快速萎縮且價格返回 → 確認 UT（派發）；若突破後量能持續放大且維持上方 → 需改變假設為再吸籌（JAC），暫停放空計畫。</p>
</div>
<p>---</p>`
      },
      {
        "title": "No Supply 與 No Demand 的識別",
        "html": `<p>No Supply（無供給）與 No Demand（無需求）是源自 VSA（Volume Spread Analysis）的兩個具體量價形態，對應 Wyckoff 方法論中「測試（Test）」事件的視覺表現。</p>
<h3>No Supply（無供給）</h3>
<ul>
  <li class="ind0"><strong>形態定義</strong>：一根向下的 K 線（陰線），其成交量<strong>低於前兩根 K 線</strong>的成交量。</li>
  <li class="ind0"><strong>代表含義</strong>：賣方（供給方）在此缺乏真實動能，沒有積極的賣壓介入。</li>
  <li class="ind0"><strong>最佳出現位置</strong>：Spring 後的 Test、BUEC 回測時、上漲趨勢中的正常回調。</li>
  <li class="ind0"><strong>交易意義</strong>：若在強勢背景下（前方有 Spring + SOS）見到 No Supply，是高可信度的做多觸發信號。</li>
</ul>
<h3>No Demand（無需求）</h3>
<ul>
  <li class="ind0"><strong>形態定義</strong>：一根向上的 K 線（陽線），其成交量<strong>低於前兩根 K 線</strong>的成交量。</li>
  <li class="ind0"><strong>代表含義</strong>：買方（需求方）在此缺乏真實動能，沒有積極的買盤介入。</li>
  <li class="ind0"><strong>最佳出現位置</strong>：UTAD 後的 Test、LPSY 回測時、下跌趨勢中的正常反彈。</li>
  <li class="ind0"><strong>交易意義</strong>：若在弱勢背景下（前方有 UTAD + SOW）見到 No Demand，是高可信度的做空觸發信號。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>No Supply 與 No Demand 必須結合背景（Context）使用——孤立的 No Supply 不代表任何意義，只有在正確的結構位置（Phase C 測試後、Phase D 確認回測）才具有可操作性。訊號本身是工具，背景才是武器。</p>
</div>
<h3>成交量分析的「缺乏興趣（Lack of Interest）」現象</h3>
<p>趨勢反轉不一定源於強力的反向量能，也可以源於一方力量的完全缺席。</p>
<ul>
  <li class="ind0"><strong>市場底部的 Lack of Supply</strong>：若價格在低位出現一系列縮量窄幅 K 線，代表賣方已失去繼續推低的興趣。此時僅需少量買盤即可引發反轉。</li>
  <li class="ind0"><strong>市場頂部的 Lack of Demand</strong>：若價格在高位出現一系列縮量窄幅 K 線，代表買方已失去繼續推高的興趣。此時僅需少量賣壓即可引發下跌。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念清單",
        "html": `<h3>第五章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我理解成交量識別大資金參與程度，而「量能字符」比絕對數值更重要。</li>
  <li class="ind0">[ ] 我能清楚定義和諧（Harmony）與背離（Divergence）的含義，以及各自的後市預期。</li>
  <li class="ind0">[ ] 我能說明量價分析的五個評估維度：單 K、下一 K 延伸、完整波動、Weis 波浪、關鍵位突破。</li>
  <li class="ind0">[ ] 我能填寫吸籌結構各事件的「期望量能特徵」，並知道量能不符時代表什麼。</li>
  <li class="ind0">[ ] 我能填寫派發結構各事件的「期望量能特徵」，並知道量能不符時代表什麼。</li>
  <li class="ind0">[ ] 我理解 Spring Test 必須縮量才算有效，這是進場前最不能妥約的驗證條件。</li>
  <li class="ind0">[ ] 我能識別 No Supply 與 No Demand 的形態定義，以及各自的最佳出現位置與交易意義。</li>
  <li class="ind0">[ ] 我理解 Weis 波浪分析的核心邏輯：比較上漲波浪量與下跌波浪量的消長，評估趨勢健康度。</li>
  <li class="ind0">[ ] 我理解 Weis 波浪並非全部都是單向訂單，需結合 K 線特徵判斷主動力量方向。</li>
  <li class="ind0">[ ] 我理解「缺乏興趣（Lack of Interest）」現象：趨勢反轉可以由一方力量的缺席引發，而非必然需要強力的反向量能。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>量價分析沒有放之四海皆準的機械規則。「大量 = 機構進場」這個命題在吸籌 SC 中是正確的，但在派發 BC 中同樣也是正確的——兩者都是大量，但意義截然相反。訓練量價分析能力的核心，是不斷強化「背景優先（Context First）」的思維習慣。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "交易 SOP",
    "sub": "Phase Reading → POI → Entry",
    "id": "sop",
    "sections": [
      {
        "title": "交易決策的三個核心支柱",
        "html": `<p>Wyckoff 的完整交易決策，建立在三個依序評估的核心支柱上。這個順序不可顛倒——沒有背景，結構毫無意義；沒有結構，進場區域無從定位。</p>
<table>
  <thead>
    <tr><th>優先順序</th><th>支柱</th><th>核心問題</th><th>評估工具</th></tr>
  </thead>
  <tbody>
    <tr><td>① 第一位</td><td>背景（Context）</td><td>我現在身處哪個週期階段？方向偏向是什麼？</td><td>HTF 結構分析、市場週期判斷</td></tr>
    <tr><td>② 第二位</td><td>結構（Structures）</td><td>當前結構中誰在獲得控制權？處於哪個 Phase？</td><td>Phase A–E 分析、量價事件識別</td></tr>
    <tr><td>③ 第三位</td><td>進場區域（Trading Areas）</td><td>在哪個具體位置進場，風報比最佳？</td><td>Phase C/D/E 進場點、流動性區域</td></tr>
  </tbody>
</table>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>永遠順從更大結構的方向交易（Trade in favor of the larger structure）。若 HTF 結構指向上漲（吸籌後的 Markup），即使 LTF 出現一個疑似派發的形態，也應優先考慮做多機會，而非逆 HTF 方向做空。不能贏，至少不輸在錯誤方向。</p>
</div>
<p>---</p>`
      },
      {
        "title": "完整交易流程 SOP",
        "html": `<h3>多頭交易 SOP（吸籌結構）</h3>
<ul>
  <li class="ind0 numbered"><strong>步驟一：HTF 定向（週線 / 日線）</strong><p>確認當前市場處於哪個週期階段。若識別到吸籌結構完成後的 Markup 環境，或正處於吸籌結構的 Phase C / D 窗口，則建立多頭方向偏向。在此之前，不評估任何做多機會。</p></li>
  <li class="ind0 numbered"><strong>步驟二：MTF 定位（4H / 1H）</strong><p>在 HTF 確立方向後，降低時間框架識別具體的吸籌 / 再吸籌結構。確認當前 Phase（A / B / C / D / E），理解已發生了哪些事件，以及下一個預期事件是什麼。</p></li>
  <li class="ind0 numbered"><strong>步驟三：確認最佳進場窗口</strong><p>Phase C（Spring / Spring Test）和 Phase D（LPS / BUEC）是最佳進場窗口。Phase E 中的 Ordinary Shakeout 或次級再吸籌結構，是趨勢中的加倉機會。Phase A / B 不進場，等待。</p></li>
  <li class="ind0 numbered"><strong>步驟四：等待觸發事件（Trigger Event）</strong><p>不主動追價，等待以下任一觸發事件在正確位置出現：Spring #3 形成（縮量）、Spring Test 縮量維持在低點上方、BUEC 縮量回踩 Creek 後出現 SOS Bar、Ordinary Shakeout 後的縮量 Test。</p></li>
  <li class="ind0 numbered"><strong>步驟五：驗證成交量支持</strong><p>觸發事件必須通過量價驗證：觸發 K 線是否符合 SOS Bar 的特徵（寬幅、放量、收盤在上半段、突破前期小阻力）？若量價不支持，不進場，繼續等待。</p></li>
  <li class="ind0 numbered"><strong>步驟六：執行進場，同時設置 SL 與 TP</strong><p>三單同時下達（進場 + 止損 + 目標），消除情緒干擾。根據進場位置計算風報比，確認不低於 1:2 再執行。</p></li>
</ul>
<h3>空頭交易 SOP（派發結構）</h3>
<ul>
  <li class="ind0 numbered"><strong>步驟一：HTF 定向</strong><p>確認當前處於派發結構完成後的 Markdown 環境，或正處於派發結構的 Phase C / D 窗口，建立空頭方向偏向。</p></li>
  <li class="ind0 numbered"><strong>步驟二：MTF 定位</strong><p>降低時間框架識別具體的派發 / 再派發結構，確認當前 Phase 與已發生的事件。</p></li>
  <li class="ind0 numbered"><strong>步驟三：確認最佳進場窗口</strong><p>Phase C（UTAD / UTAD Test）和 Phase D（LPSY / FTI 回測）是最佳進場窗口。Phase E 中的 Ordinary Upthrust 或次級再派發結構，是趨勢中的加空機會。</p></li>
  <li class="ind0 numbered"><strong>步驟四：等待觸發事件</strong><p>等待以下任一觸發事件：UTAD 縮量 Test 形成（維持在 UTAD 高點下方）、LPSY 縮量反彈後出現 SOW Bar、Ordinary Upthrust 後的縮量 Test。</p></li>
  <li class="ind0 numbered"><strong>步驟五：驗證成交量支持</strong><p>觸發 K 線是否符合 SOW Bar 特徵（寬幅、放量、收盤在下半段、跌破前期小支撐）？</p></li>
  <li class="ind0 numbered"><strong>步驟六：執行進場，同時設置 SL 與 TP</strong><p>三單同時下達，確認風報比不低於 1:2。</p></li>
</ul>
<p>---</p>`
      },
      {
        "title": "進場條件 Checklist",
        "html": `<h3>進場前強制確認清單（多頭版）</h3>
<ul>
  <li class="ind0">[ ] HTF（週線 / 日線）結構確認為吸籌完成後的 Markup，或吸籌 Phase C / D 窗口。</li>
  <li class="ind0">[ ] MTF 識別到具體的吸籌 / 再吸籌結構，當前 Phase 已確認為 C 或 D。</li>
  <li class="ind0">[ ] Phase C 的 Spring / Spring Test 已出現，或 Phase D 的 SOS + BUEC 已形成。</li>
  <li class="ind0">[ ] 觸發事件（Spring Test / BUEC / LPS）出現縮量特徵，成交量顯著小於前方 Spring / SOS。</li>
  <li class="ind0">[ ] 觸發位置的 K 線出現 SOS Bar 特徵：振幅寬、收盤在上半段、突破前期小阻力。</li>
  <li class="ind0">[ ] 止損位置已確認（Spring 低點下方 / SOS Bar 低點下方 / Creek 下方）。</li>
  <li class="ind0">[ ] 已計算風報比，不低於 1:2，否則放棄本次交易機會。</li>
  <li class="ind0">[ ] 三單（進場 + 止損 + 目標）已準備好，可同時下達。</li>
</ul>
<h3>進場前強制確認清單（空頭版）</h3>
<ul>
  <li class="ind0">[ ] HTF 結構確認為派發完成後的 Markdown，或派發 Phase C / D 窗口。</li>
  <li class="ind0">[ ] MTF 識別到具體的派發 / 再派發結構，當前 Phase 已確認為 C 或 D。</li>
  <li class="ind0">[ ] Phase C 的 UTAD / UTAD Test 已出現，或 Phase D 的 SOW + LPSY 已形成。</li>
  <li class="ind0">[ ] 觸發事件（UTAD Test / LPSY / FTI 回測）出現縮量特徵，成交量顯著小於前方 UTAD / SOW。</li>
  <li class="ind0">[ ] 觸發位置的 K 線出現 SOW Bar 特徵：振幅寬、收盤在下半段、跌破前期小支撐。</li>
  <li class="ind0">[ ] 止損位置已確認（UTAD 高點上方 / SOW Bar 高點上方 / ICE 上方）。</li>
  <li class="ind0">[ ] 已計算風報比，不低於 1:2，否則放棄本次交易機會。</li>
  <li class="ind0">[ ] 三單（進場 + 止損 + 目標）已準備好，可同時下達。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>進場 Checklist 的設計目的是強制在行動前完成所有邏輯驗證，消除「感覺對了就進場」的情緒化決策。若 Checklist 中任一項無法確認，本次交易機會直接放棄，等待下一個。市場永遠有下一個機會，但資金損失不一定能彌補。</p>
</div>
<p>---</p>`
      },
      {
        "title": "止損設置邏輯",
        "html": `<p>止損的核心原則只有一個：<strong>止損位置應設在「若價格到達此處，原始分析假設即告失效」的位置</strong>。止損不是資金管理工具，而是假設失效的邊界。</p>
<h3>各進場類型的止損位置</h3>
<table>
  <thead>
    <tr><th>進場類型</th><th>做多止損位置</th><th>做空止損位置</th></tr>
  </thead>
  <tbody>
    <tr><td>直接在 Shake 進場</td><td>Spring 最低點下方（稍留緩衝）</td><td>UTAD 最高點上方（稍留緩衝）</td></tr>
    <tr><td>在 Shake Test 進場</td><td>SOS Bar 低點下方，或 Spring 低點下方（取較保守者）</td><td>SOW Bar 高點上方，或 UTAD 高點上方（取較保守者）</td></tr>
    <tr><td>在 BUEC / LPS 進場（Phase D）</td><td>SOS Bar 低點下方 + 已突破的 Creek 下方</td><td>SOW Bar 高點上方 + 已跌破的 ICE 上方</td></tr>
    <tr><td>在次級結構進場（Phase D / E）</td><td>次級再吸籌結構的最低點下方</td><td>次級再派發結構的最高點上方</td></tr>
    <tr><td>在 Phase E 趨勢中進場</td><td>Ordinary Shakeout 的低點下方</td><td>Ordinary Upthrust 的高點上方</td></tr>
  </tbody>
</table>
<h3>Spring 假設失效的條件</h3>
<p>以下任一情況出現，代表 Spring 假設已失效，持有多頭部位應立即出場：</p>
<ul>
  <li class="ind0"><strong>Spring Test 創新低</strong>：回測低點跌破 Spring 低點，代表賣方仍有主導力，吸籌結構可能轉為有效跌破。</li>
  <li class="ind0"><strong>Spring Test 放量未縮</strong>：持續出現大量測試但無法拉升，代表複合人仍在消化賣壓，時機尚未成熟。</li>
  <li class="ind0"><strong>SOS 後 BUEC 回踩放量跌破 Creek</strong>：突破確認後的回踩反而帶量跌穿 Creek，代表突破失敗，可能轉向 UTAD 形態。</li>
  <li class="ind0"><strong>Phase D 形成更低低點</strong>：在本應上漲的 Phase D 階段出現新低，整個吸籌假設需全面重新評估。</li>
</ul>
<div class="callout co-warning">
  <div class="cot">警告 / 陷阱</div>
  <p>移動止損（Trailing Stop）雖然在理論上能鎖定獲利，但由於其本質上不給價格留有足夠的喘息空間，容易在正常回調中被提前觸發，使本應盈利的交易提前結束。作者建議以結構事件（Phase A 訊號、下一個 SOS Bar 的出現）作為離場依據，而非機械性的追蹤止損。</p>
</div>
<p>---</p>`
      },
      {
        "title": "目標位設定邏輯",
        "html": `<p>Wyckoff 原生的目標位推算工具是點數圖（P&F Chart），但在現代交易中，更常用的是以下幾種方法。多個目標位的設定，允許交易者分批出場，在保留部分獲利空間的同時逐步鎖定利潤。</p>
<h3>目標位設定方法</h3>
<table>
  <thead>
    <tr><th>方法</th><th>說明</th><th>適用情境</th></tr>
  </thead>
  <tbody>
    <tr><td>結構內 TP1</td><td>交易區間上緣（AR 高點 / Creek）</td><td>保守目標，適用於 Phase C 進場的首批獲利了結</td></tr>
    <tr><td>前期流動性區域</td><td>前期重要高點（Equal Highs）、前次派發高點、BC 高點</td><td>主要目標，流動性池是複合人必然訪問的價格磁鐵</td></tr>
    <tr><td>區間垂直投影</td><td>以結構高度（BC 至 SC / AR 至 AR）向上投影</td><td>中等目標，簡單粗暴但實用</td></tr>
    <tr><td>Fibonacci 延伸</td><td>以吸籌結構的 SC 至 AR 為基準，延伸 1.272 / 1.618 / 2.618</td><td>精確目標，適合與流動性區域結合使用</td></tr>
    <tr><td>HTF 流動性區域</td><td>更高時間框架的關鍵高低點、VPOC、Naked VWAP</td><td>終極目標，最重要的大結構目標位</td></tr>
    <tr><td>Phase A 訊號</td><td>出現 PSY + BC + AR + ST 四個 Phase A 事件組合</td><td>趨勢結束訊號，無條件全數出場</td></tr>
  </tbody>
</table>
<h3>分批出場策略建議</h3>
<ul>
  <li class="ind0"><strong>TP1（保守，約 30–40% 倉位）</strong>：結構上緣 Creek 阻力，或前期小流動性區域。觸及後將部分倉位止損移至成本以上，保護剩餘部位。</li>
  <li class="ind0"><strong>TP2（主要，約 40–50% 倉位）</strong>：前期重要流動性高點，或 HTF 結構中的關鍵阻力位。</li>
  <li class="ind0"><strong>TP3（極端，剩餘 10–20% 倉位）</strong>：出現明確的 Phase A 停止訊號前不動，讓複合人帶著部位走，直至趨勢反轉訊號出現才全數出清。</li>
</ul>
<div class="callout co-tip">
  <div class="cot">實戰應用</div>
  <p>在設定 TP 目標位時，永遠優先尋找「大資金必須訪問的流動性區域」——前期重要高低點、HTF 結構的邊界、Naked VPOC——這些是市場在結構邏輯下最有可能到達的位置，比純粹的技術延伸目標更有依據。</p>
</div>
<p>---</p>`
      },
      {
        "title": "進場區域完整彙整表",
        "html": `<p>以下整合各 Phase 的進場機會、風報比評估、可信度，以及對應的優缺點，作為實戰決策的快速參考。</p>
<h3>Wyckoff 各進場點完整對照表</h3>
<table>
  <thead>
    <tr><th>Phase</th><th>進場點</th><th>觸發條件</th><th>止損位</th><th>RR 潛力</th><th>可信度</th></tr>
  </thead>
  <tbody>
    <tr><td>Phase C</td><td>直接在 Spring 進場</td><td>Spring #3（縮量）形成</td><td>Spring 低點下方</td><td>最高</td><td>較低——結構尚未充分發展</td></tr>
    <tr><td>Phase C</td><td>Spring Test 進場</td><td>縮量縮幅 Test，維持在 Spring 低點上方</td><td>Spring 低點下方 / SOS Bar 下方</td><td>高</td><td>中高——每位 Wyckoff 交易者的最愛</td></tr>
    <tr><td>Phase D</td><td>SOS Bar 進場（趨勢中）</td><td>出現寬幅放量的 SOS Bar，突破前期小阻力</td><td>SOS Bar 低點下方</td><td>中</td><td>中——需要背景支撐</td></tr>
    <tr><td>Phase D</td><td>次級結構進場</td><td>降 TF 找到再吸籌小結構，SOS + BUEC 確認</td><td>次級結構低點下方</td><td>中高</td><td>高——精確位置，止損窄</td></tr>
    <tr><td>Phase D</td><td>BUEC / LPS 進場（突破確認）</td><td>SOS 後回踩 Creek，縮量 No Supply 出現</td><td>Creek 下方 + SOS Bar 低點下方</td><td>中</td><td>最高——Wyckoff 本人最偏好的進場點</td></tr>
    <tr><td>Phase E</td><td>Ordinary Shakeout 進場</td><td>趨勢中的向下假突破後快速反彈</td><td>Shakeout 低點下方</td><td>中</td><td>高——趨勢順勢操作</td></tr>
    <tr><td>Phase E</td><td>次級再吸籌結構進場</td><td>降 TF 在趨勢中找到小型再吸籌，確認後進場</td><td>次級結構低點下方</td><td>中</td><td>高——位置精確，與趨勢一致</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE — RR 與可信度的取捨</div>
  <p>Phase C 的 Spring Test 提供最高 RR（距離止損近，目標遠），但代價是結構發展較少，可信度相對低。Phase D 的 BUEC 可信度最高（圖表左側有完整的吸籌過程作為支持），但代價是已走了一段路程，RR 相對縮小。沒有完美的進場點——選擇最符合自己風險偏好與性格的那一個，並嚴格執行。</p>
</div>
<p>---</p>`
      },
      {
        "title": "顯著 K 線（Significant Bar）的識別與應用",
        "html": `<p>顯著 K 線（Significant Bar，又稱 SOS Bar / SOW Bar）是 Wyckoff 交易中最重要的短期進場觸發工具。它代表機構力量在短期內明顯介入，是「大資金正在此處行動」的視覺確認。</p>
<h3>顯著 K 線的四個判斷標準</h3>
<ul>
  <li class="ind0"><strong>振幅（Range）</strong>：相較於前幾根 K 線，此 K 線的振幅明顯更寬，顯示強烈的價格動能。</li>
  <li class="ind0"><strong>成交量（Volume）</strong>：成交量與振幅配合——大幅度 K 線對應大成交量（和諧）。</li>
  <li class="ind0"><strong>收盤位置（Close）</strong>：做多觸發：收盤在 K 線總振幅的上半段。做空觸發：收盤在 K 線總振幅的下半段。</li>
  <li class="ind0"><strong>突破前期關鍵位（Commitment）</strong>：做多觸發：收盤必須突破（高於）前期小阻力位。做空觸發：收盤必須跌破（低於）前期小支撐位。</li>
</ul>
<div class="callout co-tip">
  <div class="cot">實戰應用</div>
  <p>若市場未能出現清晰的單根顯著 K 線，可以將連續兩根普通 K 線合併，以這兩根 K 線的整體振幅、成交量與收盤位置，套用同樣的四個判斷標準。若合併後符合顯著 K 線的條件，同樣可作為進場觸發。</p>
</div>
<h3>動作反轉（Reversal of Movement）的識別</h3>
<p>確認一波動作結束、新方向開始的方法：識別前方動作的最後一根顯著 K 線，以其高低點為邊界。若後續出現一根反向的顯著 K 線，其收盤突破了前方顯著 K 線的對應極端點，則可判定動作反轉：</p>
<ul>
  <li class="ind0"><strong>上漲動作終結</strong>：出現一根反向顯著陰線，其收盤跌破了前方主導陽線（最後一根顯著多頭 K 線）的低點。</li>
  <li class="ind0"><strong>下跌動作終結</strong>：出現一根反向顯著陽線，其收盤突破了前方主導陰線（最後一根顯著空頭 K 線）的高點。</li>
</ul>
<p>---</p>`
      },
      {
        "title": "風險管理與倉位計算",
        "html": `<p>Wyckoff 方法論對進場的邏輯非常清晰，但若缺乏嚴格的風險管理配合，再好的分析也無法持續獲利。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>強烈建議在進場的同時，立即同步下達止損單與目標單（三單同下）。只下進場單而不同時設置止損，是最常見的情緒管理失敗——當價格逆向移動時，人的大腦會不斷為「再等一下」提供合理化藉口，導致最終的損失遠超預期。</p>
</div>
<h3>固定比例風險管理法（Fixed Fractional Risk）</h3>
<ul>
  <li class="ind0"><strong>核心原則</strong>：每一筆交易，只承擔帳戶總資金的固定百分比風險（建議不超過 1%）。</li>
  <li class="ind0"><strong>計算流程</strong>：首先確認進場價與止損價之間的距離（點數 / %），再以此計算可承受的最大損失金額，最後反推出應該開倉的手數或合約數量。</li>
  <li class="ind0"><strong>舉例</strong>：帳戶 $5,000，風險 1% = $50。若進場至止損距離為 $200，則最大倉位 = $50 ÷ $200 = 0.25 個單位。</li>
</ul>
<h3>各進場點的風報比評估標準</h3>
<table>
  <thead>
    <tr><th>原則</th><th>說明</th></tr>
  </thead>
  <tbody>
    <tr><td>最低可接受 RR</td><td>1:2（風險 1 份，潛在收益 2 份）——低於此 RR 的交易不執行</td></tr>
    <tr><td>Phase C 進場 RR 目標</td><td>通常可達 1:3 至 1:5，因止損緊（Shake 低點）、目標遠（HTF 流動性）</td></tr>
    <tr><td>Phase D BUEC 進場 RR</td><td>通常在 1:2 至 1:3，止損相對寬（Creek 下方），但可信度最高</td></tr>
    <tr><td>Phase E 趨勢中進場 RR</td><td>1:1.5 至 1:2，潛在路程較短，適合以小博小的加倉策略</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE</div>
  <p>RR 的計算必須以<strong>合理止損位</strong>為基礎，而非人為壓縮止損距離來提高 RR 數字。將止損設得比結構要求的更近，只是在增加被正常波動掃掉止損的概率，並不真正提高風報比的有效性。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念清單",
        "html": `<h3>第六章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能說出交易決策的三個核心支柱（背景 → 結構 → 進場區域）及其優先順序。</li>
  <li class="ind0">[ ] 我能完整背出多頭交易的六步驟 SOP，並說明每一步的核心任務。</li>
  <li class="ind0">[ ] 我能完整背出空頭交易的六步驟 SOP。</li>
  <li class="ind0">[ ] 我能回答：「Wyckoff 方法論中，哪三個 Phase 有進場機會，哪兩個 Phase 不應進場？」</li>
  <li class="ind0">[ ] 我能說出 Spring Test 進場的完整條件（縮量、縮幅、不破低），以及為何這是 Wyckoff 交易者最偏愛的進場點。</li>
  <li class="ind0">[ ] 我理解 BUEC / LPS 進場是 Richard Wyckoff 本人偏好的進場點，原因是圖表左側有完整支撐背景。</li>
  <li class="ind0">[ ] 我能列舉四個「Spring 假設失效」的條件，以及失效後應如何應對。</li>
  <li class="ind0">[ ] 我能說出顯著 K 線（SOS Bar / SOW Bar）的四個判斷標準。</li>
  <li class="ind0">[ ] 我理解「三單同下」（進場 + 止損 + 目標）的重要性，以及只下進場單的情緒風險。</li>
  <li class="ind0">[ ] 我能計算固定比例風險管理法的倉位大小，並知道建議風險比例不超過帳戶的 1%。</li>
  <li class="ind0">[ ] 我能說明各 Phase 進場點的 RR 特徵：Phase C 最高 RR，Phase D BUEC 最高可信度，Phase E 最安全但路程最短。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>Wyckoff 方法論的核心優勢在於：在採取行動前，圖表左側已能提供大量的背景線索，讓我們以更高的概率和更好的風報比做出決策。但概率再高，也不等於保證——嚴格執行止損，才是在長期交易中生存下去的根本。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "Wyckoff ↔ SMC/ICT 對照表",
    "sub": "Concept Mapping",
    "id": "mapping",
    "sections": [
      {
        "title": "對照框架說明",
        "html": `<p>Wyckoff 方法論誕生於 20 世紀初，SMC（Smart Money Concepts）與 ICT（Inner Circle Trader）體系則是近 20 年發展起來的現代框架。兩者表面上使用截然不同的術語，但其核心邏輯——<strong>追蹤大資金（智能資金）的行為軌跡，以利用市場中的資訊不對稱獲利</strong>——完全一致。</p>
<p>理解兩者的對應關係，能讓你在閱讀不同流派的分析時不再困惑，並能將 Wyckoff 的結構嚴謹性與 SMC/ICT 的精確進場技術融合應用。</p>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>對照表中的「相似點」代表兩個概念在功能或邏輯上高度重疊；「關鍵差異」則代表兩者的側重點或定義邊界存在本質差別。相似不等於相同——誤將對應概念完全等同，會導致分析上的混淆。</p>
</div>
<p>---</p>`
      },
      {
        "title": "核心事件對照",
        "html": `<h3>震盪 / 假突破類事件</h3>
<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Spring</strong><br>（吸籌結構的向下假突破）</td>
      <td>Stop Hunt / Liquidity Sweep（向下掃描流動性）<br>Judas Swing（向下誘空）</td>
      <td>兩者都描述：對支撐低點的假突破，清洗多頭止損後快速反彈，為上漲蓄力。核心邏輯完全相同。</td>
      <td>Wyckoff 的 Spring 強調量價特徵（Spring #1/#2/#3 的分類）；SMC/ICT 更強調「流動性池的位置」與「時間窗口（Killzone）」，較少量化量能。</td>
    </tr>
    <tr>
      <td><strong>UTAD</strong><br>（派發結構的向上假突破）</td>
      <td>Stop Hunt / Liquidity Grab（向上掃描流動性）<br>Inducement（IDM）</td>
      <td>兩者都描述：對阻力高點的假突破，清洗空頭止損後快速下跌。核心邏輯完全相同。</td>
      <td>Wyckoff 的 UTAD 隸屬於完整派發結構的 Phase C；ICT 的 Inducement 更廣義，可發生在任何時間框架，不一定在大結構的末期。</td>
    </tr>
    <tr>
      <td><strong>Ordinary Shakeout</strong><br>（趨勢途中的向下震盪）</td>
      <td>Mitigation（緩解）/ Retracement to OB<br>或小型 Liquidity Sweep</td>
      <td>兩者都描述：趨勢中途的向下假突破或回調至關鍵支撐，清洗弱手後繼續上漲。</td>
      <td>Wyckoff 更強調結構背景（再吸籌環境）；SMC 更強調回撤到特定的 OB（Order Block）或 FVG 區域。</td>
    </tr>
  </tbody>
</table>
<h3>趨勢訊號類事件</h3>
<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>SOS（Sign of Strength）</strong><br>有效突破阻力的上漲波段</td>
      <td>BOS（Break of Structure）<br>或 CISD（Change in State of Delivery）</td>
      <td>兩者都描述：價格以強勁的動能突破前期結構高點（Creek），確認多方取得主導地位。</td>
      <td>Wyckoff 的 SOS 必須起源於 Phase C 低點，並突破 Creek；SMC 的 BOS 可以發生在任何 Higher High 的形成，不一定有完整的吸籌背景。</td>
    </tr>
    <tr>
      <td><strong>SOW（Sign of Weakness）</strong><br>有效突破支撐的下跌波段</td>
      <td>BOS（Break of Structure，向下）<br>或 CISD</td>
      <td>兩者都描述：價格以強勁動能突破前期結構低點（ICE），確認空方取得主導地位。</td>
      <td>同上，Wyckoff 的 SOW 有完整的派發背景要求；SMC 的向下 BOS 更靈活，可識別任何時間框架的下跌趨勢確認。</td>
    </tr>
    <tr>
      <td><strong>CHoCH（Change of Character）</strong><br>市場環境的轉換訊號</td>
      <td>CHoCH（Change of Character）<br>SMC 直接沿用此術語</td>
      <td>術語完全相同，概念高度一致——都描述市場從趨勢狀態轉為橫盤（或反向），是重要的環境轉換訊號。</td>
      <td>Wyckoff 定義了兩個特定的 CHoCH（Phase A 的 AR，以及 Phase C→D 的轉換）；SMC 的 CHoCH 更廣泛，可指任何時間框架的首次結構轉向。</td>
    </tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "回踩確認類事件對照",
        "html": `<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LPS（Last Point of Support）/ BUEC</strong><br>SOS 後的縮量回踩確認</td>
      <td>OTE（Optimal Trade Entry）<br>或 Mitigation to Bullish OB / FVG</td>
      <td>兩者都描述：在有效突破後，價格回踩已突破的關鍵位（Creek / OB / FVG），是最佳的進場機會。</td>
      <td>Wyckoff 的 LPS 強調縮量縮幅的量價特徵作為確認；ICT 的 OTE 更強調 Fibonacci 回撤位（61.8%–79%）的精確入場，不強調量能。</td>
    </tr>
    <tr>
      <td><strong>LPSY（Last Point of Supply）/ FTI 回測</strong><br>SOW 後的縮量反彈確認</td>
      <td>OTE（空頭方向）<br>或 Mitigation to Bearish OB / FVG</td>
      <td>兩者都描述：在有效跌破後，價格反彈回踩已跌破的關鍵位（ICE / OB / FVG），是最佳的做空機會。</td>
      <td>同上，Wyckoff 看量價；ICT 看 Fibonacci 水準與時間窗口。</td>
    </tr>
    <tr>
      <td><strong>Spring Test（縮量回測 Spring 低點）</strong></td>
      <td>Mitigation（緩解回測 Demand Zone）<br>或 Bullish OB 的首次回踩</td>
      <td>兩者都描述：在假突破後，以縮量方式再度測試那個假突破低點區域，確認賣方已退場。</td>
      <td>Wyckoff 要求量能萎縮是核心驗證標準；SMC 的 Mitigation 更注重價格是否回到特定 OB 的蠟燭體範圍內，量能驗證較少強調。</td>
    </tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "大結構 / 市場環境對照",
        "html": `<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>複合人（Composite Man / Operator）</strong><br>假想中的單一大資金主導者</td>
      <td>Composite Operator / IPDA<br>（Interbank Price Delivery Algorithm）</td>
      <td>兩者都是思維模型：將市場背後的主導力量擬人化，幫助交易者從「大資金視角」解讀市場行為。</td>
      <td>Wyckoff 的複合人是人工/組織行為的概念模型；ICT 的 IPDA 更強調演算法程序的自動化價格傳遞邏輯，帶有更強的機械性解釋框架。</td>
    </tr>
    <tr>
      <td><strong>吸籌 Phase B</strong><br>橫盤建立原因、大量震盪測試</td>
      <td>AMD 模型的 Accumulation 階段<br>（Accumulation → Manipulation → Distribution）</td>
      <td>兩者都描述：在趨勢啟動前的橫盤整理期，大資金在此積累倉位、清洗弱手、製造假動作。功能完全相同。</td>
      <td>Wyckoff 的 Phase B 有完整的事件序列（UA / ST as SOW 等）；ICT 的 AMD 更精簡，主要強調時間（亞洲盤 → 倫敦 → 紐約）對應三段，不細分個別事件。</td>
    </tr>
    <tr>
      <td><strong>Markup（推升趨勢）</strong><br>吸籌完成後的上漲趨勢</td>
      <td>AMD 模型的 Distribution 階段<br>（ICT 的 Distribution 指散發/釋放趨勢，非派發出貨）</td>
      <td>兩者都描述趨勢運動的執行階段，大資金主導價格向目標方向移動。</td>
      <td>注意術語歧義：ICT 的「Distribution」在 AMD 框架中指「釋出趨勢動能」，等同於 Wyckoff 的 Markup；而 Wyckoff 的 Distribution 指高位出貨，兩者含義相反，切勿混淆。</td>
    </tr>
    <tr>
      <td><strong>SC（Selling Climax）</strong><br>下跌末期的高潮賣出事件</td>
      <td>Bearish Order Block 被吸收<br>（Bullish OB 的形成）</td>
      <td>兩者都描述：在重要低點附近，大資金以大量承接賣壓（SC = 大量吸收賣單）。SMC 將這個位置定義為 Bullish OB（看漲訂單塊），是未來回踩的重要支撐位。</td>
      <td>Wyckoff 的 SC 是動態事件（某一根或某段 K 線的行為）；SMC 的 OB 是靜態價格區域（特定 K 線的高低點所定義的矩形區域），是進場精準位置的標記工具。</td>
    </tr>
    <tr>
      <td><strong>BC（Buying Climax）</strong><br>上漲末期的高潮買入事件</td>
      <td>Bearish OB（看跌訂單塊）的形成<br>（高位的賣方介入標記）</td>
      <td>兩者都描述：在重要高點附近，大資金以大量出售（BC = 大量吸收買單）。SMC 將這個位置定義為 Bearish OB，是未來反彈回踩的重要阻力。</td>
      <td>同上，Wyckoff 是動態事件，SMC 是靜態區域標記。</td>
    </tr>
  </tbody>
</table>
<div class="callout co-warning">
  <div class="cot">警告 — AMD 術語歧義</div>
  <p>ICT 的 AMD（Accumulation → Manipulation → Distribution）中，「Distribution」一詞描述的是「大資金將倉位分配（釋放）給市場、推動趨勢」的過程，本質上等同於 Wyckoff 的 Markup（推升）。這與 Wyckoff 的「Distribution（派發出貨）」含義完全相反。在同時學習兩套框架時，務必根據語境辨別這個詞的含義。</p>
</div>
<p>---</p>`
      },
      {
        "title": "流動性與關鍵位概念對照",
        "html": `<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Phase C — UTAD / Spring</strong><br>結構末期對流動性池的掃描</td>
      <td>Liquidity Grab / Liquidity Sweep<br>Inducement（IDM）</td>
      <td>兩者都描述：在趨勢啟動前，對聚集著大量止損單的區域（前期高低點、Equal Highs/Lows）發動的掃描動作，以清洗弱手、吸納流動性。</td>
      <td>Wyckoff 的 Spring/UTAD 是完整吸籌 / 派發結構 Phase C 的組成部分；SMC 的 Liquidity Grab 更廣義，可發生在任何時間框架的任何流動性聚集位置。</td>
    </tr>
    <tr>
      <td><strong>Equal Highs / Equal Lows（等高點 / 等低點）</strong><br>在 Wyckoff 中作為 Phase B 震盪的邊界</td>
      <td>Buy-side Liquidity（SSL）/ Sell-side Liquidity（BSL）<br>Equal Highs / Equal Lows（SMC 直接沿用術語）</td>
      <td>術語高度重疊。兩者都認識到等高點 / 等低點上方 / 下方聚集著大量止損單，是大資金掃描的優先目標。</td>
      <td>Wyckoff 在識別等高低點時，更關注它們在結構 Phase 中的位置意義；SMC 則更系統化地將所有流動性聚集點分類為 BSL / SSL，並建立了獵殺流動性的完整預測模型。</td>
    </tr>
    <tr>
      <td><strong>Creek（上緣阻力）/ ICE（下緣支撐）</strong></td>
      <td>Premium Zone / Discount Zone 的邊界<br>或 Range High / Range Low</td>
      <td>兩者都用水平邊界定義交易區間的上下限，並以此判斷當前價格的相對位置（偏貴或偏便宜）。</td>
      <td>Wyckoff 的 Creek / ICE 更具體，由特定事件（AR 高點 / 低點）定義；SMC 的 Premium / Discount 更廣泛使用 Fibonacci 50% 中線作為劃分依據。</td>
    </tr>
    <tr>
      <td><strong>FVG（Fair Value Gap）</strong><br>（Wyckoff 未使用此概念，但結構上等同）</td>
      <td>FVG / IFVG（Imbalance / Inversion FVG）</td>
      <td>FVG 對應的是 Wyckoff SOS / SOW 快速推進時留下的「跳空缺口」或「價格失衡區域」——強力推進時跳過的價格帶，未來有較高概率被回補。</td>
      <td>Wyckoff 方法論原生不使用 FVG 概念，但其 BUEC / LPSY 回踩邏輯，事實上覆蓋了對這些失衡區域的回補行為。SMC 更系統化地定義、標記和使用 FVG 作為精確進場工具。</td>
    </tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "時間與進場工具對照",
        "html": `<table>
  <thead>
    <tr><th>Wyckoff 概念</th><th>SMC/ICT 對應概念</th><th>相似點</th><th>關鍵差異</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LPS / BUEC 進場</strong><br>突破確認後的回踩進場</td>
      <td>ICT Killzone 進場<br>（London Open / New York Open）</td>
      <td>兩者都在尋找「突破確認後的回踩」作為最佳進場機會，而非在突破瞬間追價。</td>
      <td>Wyckoff 的 LPS/BUEC 是結構性工具，關注的是「事件是否發生」；ICT Killzone 是時間性工具，強調在特定時間窗口（倫敦開盤 02:00–05:00 EST、紐約開盤 08:30–11:00 EST）進場的概率更高，兩者可以疊加使用。</td>
    </tr>
    <tr>
      <td><strong>Spring Test 進場</strong><br>Phase C 震盪後的縮量測試</td>
      <td>Silver Bullet（ICT）<br>或 London / NY 開盤 FVG 進場</td>
      <td>兩者都是在清洗流動性後，等待確認訊號再進場，而非直接在掃描的瞬間盲目進場。</td>
      <td>Wyckoff 的 Spring Test 以量價行為確認；ICT Silver Bullet 以特定時間窗口（10:00–11:00 EST / 14:00–15:00 EST）的 FVG 作為進場觸發，更具時間依賴性。</td>
    </tr>
    <tr>
      <td><strong>SOS Bar / SOW Bar</strong><br>進場觸發的顯著 K 線</td>
      <td>MSS（Market Structure Shift）<br>或 Displacement Candle</td>
      <td>兩者都在尋找一根（或一組）具有強力動能、代表機構介入的 K 線，作為進場的最終觸發訊號。</td>
      <td>Wyckoff 的 SOS Bar 強調四個特徵（振幅、量能、收盤位置、突破關鍵位）；SMC 的 Displacement 更強調 K 線本身是否造成了 FVG（即三根 K 線的失衡結構），不強調量能。</td>
    </tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "整合應用：兩套框架如何協同工作",
        "html": `<p>理解了兩套框架的對應關係後，最有價值的應用不是「選擇其中一套使用」，而是<strong>讓兩套框架互相強化，彌補各自的弱點</strong>。</p>
<h3>Wyckoff 的優勢與 SMC/ICT 的補充</h3>
<table>
  <thead>
    <tr><th>維度</th><th>Wyckoff 的強項</th><th>SMC/ICT 的強項</th></tr>
  </thead>
  <tbody>
    <tr><td>大結構判斷</td><td>Phase A–E 完整事件序列，背景脈絡最清晰</td><td>HTF 流動性地圖、Premium / Discount 劃分</td></tr>
    <tr><td>趨勢方向確認</td><td>量價和諧 / 背離分析，客觀可量化</td><td>MSS / BOS / CHoCH 的快速識別</td></tr>
    <tr><td>精確進場定位</td><td>SOS Bar / LPS 概念清晰，但進場位置較主觀</td><td>OB / FVG / OTE Fibonacci 提供精確進場區間</td></tr>
    <tr><td>時間窗口</td><td>不強調時間，以結構事件驅動</td><td>Killzone 提供明確的高概率時間窗口</td></tr>
    <tr><td>止損邏輯</td><td>以結構失效條件定義止損，非常合理</td><td>OB 邊界 / FVG 邊界提供精確的止損參考位</td></tr>
  </tbody>
</table>
<h3>建議整合方式：HTF Wyckoff → LTF SMC</h3>
<ul>
  <li class="ind0"><strong>第一層（週線 / 日線）：Wyckoff 結構判斷</strong><p>用 Phase A–E 事件識別大結構的當前階段，確認方向偏向（多 / 空 / 觀望）。這一層給出「為何要進場」的背景理由。</p></li>
  <li class="ind0"><strong>第二層（4H / 1H）：SMC/ICT 結構輔助</strong><p>用 BOS / CHoCH 確認 MTF 的趨勢方向，識別 OB 與 FVG 作為 POI（Point of Interest）。這一層給出「在哪個區域附近等待」的更精確定位。</p></li>
  <li class="ind0"><strong>第三層（15M / 5M）：ICT 精確進場觸發</strong><p>在 Killzone 時間窗口內，等待 LTF 的 MSS / Displacement / FVG 進場訊號. 結合 Wyckoff 的 SOS Bar / SOW Bar 概念作為雙重確認。這一層給出「在哪個具體價格與時間進場」的執行細節。</p></li>
</ul>
<div class="callout co-example">
  <div class="cot">整合應用案例</div>
  <p>BTC USDT 日線顯示吸籌 Phase D（SOS 已出現，BUEC 回踩中）→ 1H 顯示在 Creek 附近形成 Bullish OB，同時有未填補的 Bullish FVG → 等待倫敦開盤時間窗口（02:00–05:00 EST），在 15M 圖上見到 MSS（低時框架結構轉向），且回踩進入 OB / FVG 範圍 → 以 OB 低點下方設置止損，以 HTF 前次高點 / Naked VPOC 設置目標位，執行進場。這個流程同時滿足 Wyckoff 的結構背景要求，與 ICT 的精確進場條件。</p>
</div>
<p>---</p>`
      },
      {
        "title": "章節關鍵概念清單",
        "html": `<h3>第七章核心概念自查清單</h3>
<ul>
  <li class="ind0">[ ] 我能說明 Spring 與 SMC Stop Hunt / Liquidity Sweep 的相似邏輯，以及兩者在量價側重上的差異。</li>
  <li class="ind0">[ ] 我能說明 UTAD 與 SMC Inducement / Liquidity Grab 的對應關係。</li>
  <li class="ind0">[ ] 我理解 Wyckoff 的 SOS 與 SMC 的 BOS 都描述有效突破，但 SOS 有完整結構背景要求，BOS 更靈活。</li>
  <li class="ind0">[ ] 我能說明 SC / BC 與 SMC 的 Bullish / Bearish OB 形成的對應關係（動態事件 vs 靜態區域標記）。</li>
  <li class="ind0">[ ] 我能解釋 ICT AMD 模型中「Distribution」一詞與 Wyckoff「Distribution（派發）」的含義差異，避免混淆。</li>
  <li class="ind0">[ ] 我理解 Wyckoff 的 LPS / BUEC 與 ICT 的 OTE / OB 回踩都描述突破後的最佳進場回踩，但前者看量價，後者看 Fibonacci 與 OB 邊界。</li>
  <li class="ind0">[ ] 我理解 FVG 在 Wyckoff 框架中對應 SOS / SOW 快速推進時的失衡區，BUEC 回踩事實上覆蓋了 FVG 回補邏輯。</li>
  <li class="ind0">[ ] 我能說明 ICT Killzone 與 Wyckoff 結構進場的整合方式：結構觸發時間 + Killzone 窗口 = 更高概率進場組合。</li>
  <li class="ind0">[ ] 我能描述「HTF Wyckoff → MTF SMC → LTF ICT」三層整合框架的具體操作流程。</li>
</ul>
<div class="callout co-important">
  <div class="cot">重要原則</div>
  <p>學習對照表的最終目的，不是要你同時使用所有工具，而是理解這些工具的底層邏輯是相通的。從一套框架開始，把它學透、用熟；然後再逐步引入另一套框架的精確工具作為補充。試圖同時精通所有概念，往往導致分析時陷入「哪個優先？」的混亂，反而降低決策品質。</p>
</div>
<p>---</p>`
      }
    ]
  },
  {
    "title": "術語表",
    "sub": "Wyckoff Glossary",
    "id": "glossary",
    "sections": [
      {
        "title": "吸籌結構事件縮寫表",
        "html": `<table>
  <thead>
    <tr><th>縮寫</th><th>英文全稱</th><th>中文解釋</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>PS</strong></td><td>Preliminary Support</td><td>初步支撐。下跌趨勢中第一次出現買方承接的嘗試，但終告失敗。預示下跌趨勢可能接近尾聲。</td></tr>
    <tr><td><strong>SC</strong></td><td>Selling Climax</td><td>賣出高潮。高潮式的大幅下跌動作，大量賣單被複合人全數吸納。確立結構支撐下緣。</td></tr>
    <tr><td><strong>AR</strong></td><td>Automatic Rally</td><td>自動反彈。SC 後出現的第一波大幅反彈，由賣方耗盡、空頭回補與新買方共同推動。確立結構阻力上緣（Creek 初始定義）。</td></tr>
    <tr><td><strong>ST</strong></td><td>Secondary Test</td><td>二次測試。對 SC 區域的回測，用以驗證賣方力道是否消散。成交量必須顯著萎縮。Phase A 的終點。</td></tr>
    <tr><td><strong>UA</strong></td><td>Upthrust Action</td><td>向上試探動作。Phase B 中對 Creek（AR 高點）的短暫假突破後回落。在吸籌結構中標記為 UA，暗示後市傾向 Spring。</td></tr>
    <tr><td><strong>ST as SOW</strong></td><td>Secondary Test as Sign of Weakness</td><td>作為弱勢信號的二次測試。Phase B 中短暫跌破支撐後迅速返回。暗示後市可能需要 Spring 測試低點。</td></tr>
    <tr><td><strong>Spring</strong></td><td>Spring（源自 Springboard）</td><td>彈簧。Phase C 中對前期支撐低點的向下假突破，目的是清洗多頭止損、吸納最後籌碼。分三種類型（#1 高量、#2 中量、#3 縮量）。</td></tr>
    <tr><td><strong>TSO</strong></td><td>Terminal Shakeout</td><td>終極搖晃。等同於 Spring #1，突破幅度深、成交量極大的高潮式假突破。</td></tr>
    <tr><td><strong>Shakeout</strong></td><td>Shakeout</td><td>搖晃出場。Spring 的廣義稱呼，包含所有向下假突破清洗弱手的行為。</td></tr>
    <tr><td><strong>Spring Test</strong></td><td>Test of the Spring</td><td>Spring 後的測試。驗證賣方是否真正退場：縮量、縮幅、不破 Spring 低點為有效測試。</td></tr>
    <tr><td><strong>LPS</strong></td><td>Last Point of Support</td><td>最後支撐點。① Phase C 形態二：未到達結構低點的弱勢 Phase C，直接以此支撐為基礎發動 SOS。② Phase D：SOS 後的回調低點，是標準進場位（BUEC 的別名）。</td></tr>
    <tr><td><strong>SOS</strong></td><td>Sign of Strength</td><td>強勢信號。由 Phase C 低點出發，有效突破 Creek（AR 高點）的上漲波段。又稱 JAC。</td></tr>
    <tr><td><strong>JAC</strong></td><td>Jump Across the Creek</td><td>跨越小溪。SOS 的別稱，強調價格跳過 Creek 阻力區的突破動作。</td></tr>
    <tr><td><strong>BUEC</strong></td><td>Back Up to the Edge of the Creek</td><td>回踩小溪邊緣。SOS 後的縮量回測動作，確認 Creek 已轉為支撐。Richard Wyckoff 本人最偏愛的進場點。等同於 Phase D 的 LPS。</td></tr>
    <tr><td><strong>BU</strong></td><td>Back Up</td><td>回踩。BUEC 的簡稱，指 SOS 後回踩已突破的 Creek 區域。</td></tr>
    <tr><td><strong>Ordinary Shakeout</strong></td><td>Ordinary Shakeout</td><td>普通搖晃。上漲趨勢途中（Phase E / 再吸籌環境）的向下假突破，而非結構末端的 Phase C Spring。位置是與 Spring 的主要區別。</td></tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "派發結構事件縮寫表",
        "html": `<table>
  <thead>
    <tr><th>縮寫</th><th>英文全稱</th><th>中文解釋</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>PSY</strong></td><td>Preliminary Supply</td><td>初步供給。上漲趨勢中第一次出現賣方介入的嘗試，但終告失敗。預示上漲趨勢可能接近尾聲。</td></tr>
    <tr><td><strong>BC</strong></td><td>Buying Climax</td><td>買入高潮。高潮式的大幅上漲動作，大量買單被複合人的賣單全數吸收。確立結構阻力上緣。</td></tr>
    <tr><td><strong>AR</strong></td><td>Automatic Reaction</td><td>自動反應。BC 後出現的第一波大幅下跌，由買方耗盡、多頭獲利了結與新賣方共同推動。確立結構支撐下緣（ICE 初始定義）。</td></tr>
    <tr><td><strong>ST</strong></td><td>Secondary Test</td><td>二次測試。對 BC 高點區域的回測，用以驗證買方力道是否消散。成交量必須顯著萎縮。</td></tr>
    <tr><td><strong>UT</strong></td><td>Upthrust</td><td>向上突刺。Phase B 中對 BC 高點（阻力區）的短暫假突破後回落。在派發結構中標記為 UT，功能等同吸籌的 UA，但出現在派發背景。</td></tr>
    <tr><td><strong>mSOW</strong></td><td>minor Sign of Weakness</td><td>次級弱勢信號。Phase B 中短暫跌破 ICE 後迅速返回。功能等同吸籌的 ST as SOW，但出現在派發背景。</td></tr>
    <tr><td><strong>UTAD</strong></td><td>Upthrust After Distribution</td><td>派發後的向上突刺。Phase C 中對前期阻力高點的向上假突破，目的是清洗空頭止損、誘引散戶做多，為下跌清除最後阻力。Spring 的對稱鏡像。</td></tr>
    <tr><td><strong>UTAD Test</strong></td><td>Test of the UTAD</td><td>UTAD 後的測試。驗證買方是否真正退場：回測高點必須低於 UTAD 高點、縮量、縮幅為有效測試。</td></tr>
    <tr><td><strong>LPSY</strong></td><td>Last Point of Supply</td><td>最後供給點。① Phase C 形態二：未到達結構高點的弱勢 Phase C。② Phase D：SOW 後的反彈高點，確認做空的標準進場位（FTI 回測的別名）。</td></tr>
    <tr><td><strong>SOW / MSOW</strong></td><td>Sign of Weakness / Major Sign of Weakness</td><td>弱勢信號 / 主要弱勢信號。由 Phase C 高點出發，有效突破 ICE（AR 低點）的下跌波段。又稱 FTI。</td></tr>
    <tr><td><strong>FTI</strong></td><td>Fall Through the Ice</td><td>穿越冰層。SOW 的別稱，強調價格跌穿 ICE 支撐區的突破動作。等同 JAC 的反向版本。</td></tr>
    <tr><td><strong>Ordinary Upthrust</strong></td><td>Ordinary Upthrust</td><td>普通向上突刺。下跌趨勢途中（Phase E / 再派發環境）的向上假突破，是加空的機會。位置是與 UTAD 的主要區別。</td></tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "結構與階段術語表",
        "html": `<table>
  <thead>
    <tr><th>縮寫 / 術語</th><th>英文全稱</th><th>中文解釋</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>TR</strong></td><td>Trading Range</td><td>交易區間。吸籌、派發、再吸籌或再派發結構所形成的橫盤整理區域。</td></tr>
    <tr><td><strong>Creek</strong></td><td>Creek（小溪）</td><td>吸籌 / 再吸籌結構的上緣阻力水平位，由 AR 高點定義，向上突破（JAC）代表多方勝出。</td></tr>
    <tr><td><strong>ICE</strong></td><td>Ice（冰層）</td><td>派發 / 再派發結構的下緣支撐水平位，由 AR 低點定義，向下跌穿（FTI）代表空方勝出。</td></tr>
    <tr><td><strong>CHoCH</strong></td><td>Change of Character</td><td>性格改變。市場環境的轉換訊號。第一個 CHoCH（Phase A 的 AR）標誌從趨勢到橫盤；第二個 CHoCH（Phase C → D 的 SOS/SOW）標誌從橫盤到新趨勢。</td></tr>
    <tr><td><strong>Phase A</strong></td><td>Phase A: Stopping the Previous Trend</td><td>停止前趨勢。包含四個事件：PS/PSY → SC/BC → AR → ST。功能是讓前趨勢停下來，市場進入橫盤環境。</td></tr>
    <tr><td><strong>Phase B</strong></td><td>Phase B: Building the Cause</td><td>建立原因。複合人在此吸納或出清大部分籌碼，同時透過 UA/UT 與 ST as SOW/mSOW 測試市場強弱。通常是持續時間最長的 Phase。</td></tr>
    <tr><td><strong>Phase C</strong></td><td>Phase C: Test</td><td>測試。複合人發動最後的欺騙性動作（Spring 或 UTAD），驗證上行 / 下行的阻力已清除。是整個結構中最關鍵的 Phase。</td></tr>
    <tr><td><strong>Phase D</strong></td><td>Phase D: Trend Within the Range</td><td>區間內趨勢。包含突破事件（SOS/SOW）與確認事件（LPS/LPSY）。CHoCH 在此完成，市場開始向外突破。</td></tr>
    <tr><td><strong>Phase E</strong></td><td>Phase E: Trend Out of the Range</td><td>脫離區間的趨勢。結構正式完成，新趨勢（Markup / Markdown）展開。由 SOS + LPS（或 SOW + LPSY）的交替動態構成。</td></tr>
    <tr><td><strong>Accumulation</strong></td><td>Accumulation</td><td>吸籌。下跌趨勢後的底部橫盤結構，複合人在此以最低成本建立多頭倉位。</td></tr>
    <tr><td><strong>Reaccumulation</strong></td><td>Reaccumulation</td><td>再吸籌。上漲趨勢途中的橫盤整理結構，用於清洗弱手、重新集中籌碼，之後繼續上漲。</td></tr>
    <tr><td><strong>Distribution</strong></td><td>Distribution</td><td>派發。上漲趨勢後的頂部橫盤結構，複合人在此以最高價格出清多頭倉位、建立空頭倉位。</td></tr>
    <tr><td><strong>Redistribution</strong></td><td>Redistribution</td><td>再派發。下跌趨勢途中的橫盤整理結構，用於清洗弱手空頭、添加新空頭倉位，之後繼續下跌。</td></tr>
    <tr><td><strong>Markup</strong></td><td>Markup</td><td>推升。吸籌完成後的上漲趨勢階段。</td></tr>
    <tr><td><strong>Markdown</strong></td><td>Markdown</td><td>打壓。派發完成後的下跌趨勢階段。</td></tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "市場行為與量價術語表",
        "html": `<table>
  <thead>
    <tr><th>縮寫 / 術語</th><th>英文全稱</th><th>中文解釋</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Composite Man</strong></td><td>Composite Man / Composite Operator</td><td>複合人。Wyckoff 的核心思維模型，將所有大資金的集體行為擬想為單一假想主導者，其目的是吸籌→推升→派發→打壓的循環操作。</td></tr>
    <tr><td><strong>Harmony</strong></td><td>Harmony（努力與結果的和諧）</td><td>和諧。成交量（努力）與價格移動（結果）相互匹配——大量帶大幅移動，小量帶小幅移動。是趨勢健康延續的訊號。</td></tr>
    <tr><td><strong>Divergence</strong></td><td>Divergence（努力與結果的背離）</td><td>背離。成交量與價格移動不匹配——大量帶微小移動（最重要的反轉預警）或小量帶大幅移動（流動性真空）。</td></tr>
    <tr><td><strong>No Supply</strong></td><td>No Supply</td><td>無供給。一根成交量低於前兩根 K 線的陰線，代表賣方缺乏動能。在強勢背景下出現，是做多觸發信號。</td></tr>
    <tr><td><strong>No Demand</strong></td><td>No Demand</td><td>無需求。一根成交量低於前兩根 K 線的陽線，代表買方缺乏動能。在弱勢背景下出現，是做空觸發信號。</td></tr>
    <tr><td><strong>Lack of Interest</strong></td><td>Lack of Interest</td><td>缺乏興趣。一方力量的缺席（而非強力的反向力量）導致價格轉向。縮量窄幅 K 線群在低位（底部）或高位（頂部）出現，是趨勢反轉的早期訊號。</td></tr>
    <tr><td><strong>SOS Bar</strong></td><td>Sign of Strength Bar</td><td>強勢訊號 K 線。振幅寬、放量、收盤在上半段、突破前期小阻力的陽線。是機構多頭介入的視覺確認，做多的進場觸發工具。</td></tr>
    <tr><td><strong>SOW Bar</strong></td><td>Sign of Weakness Bar</td><td>弱勢訊號 K 線。振幅寬、放量、收盤在下半段、跌破前期小支撐的陰線。是機構空頭介入的視覺確認，做空的進場觸發工具。</td></tr>
    <tr><td><strong>Significant Bar</strong></td><td>Significant Bar</td><td>顯著 K 線。SOS Bar 與 SOW Bar 的統稱，代表機構力量在短期內明顯介入的視覺確認。判斷標準：振幅寬、量能配合、收盤位置正確、突破前期關鍵位。</td></tr>
    <tr><td><strong>Reversal Bar</strong></td><td>Reversal of Movement Bar</td><td>動作反轉 K 線。收盤突破前方主導顯著 K 線的極端點，確認前方動作已結束、新方向開始。</td></tr>
    <tr><td><strong>Weis Wave</strong></td><td>Weis Wave（David Weis 創建）</td><td>Weis 波浪。將每個完整上漲 / 下跌波段的累計成交量加總，用於比較不同波段的力道消長，是量價分析的進階工具。</td></tr>
    <tr><td><strong>VSA</strong></td><td>Volume Spread Analysis</td><td>量價分析法。由 Tom Williams 基於 Wyckoff 方法論發展而來的量價分析體系，強調 K 線振幅（Spread）與成交量的組合解讀。</td></tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "三大法則與進場管理術語表",
        "html": `<table>
  <thead>
    <tr><th>縮寫 / 術語</th><th>英文全稱</th><th>中文解釋</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Law of S&D</strong></td><td>Law of Supply and Demand</td><td>供需法則。需求大於供給 → 價格上漲；供給大於需求 → 價格下跌；兩者平衡 → 橫盤。Wyckoff 方法論的基石。</td></tr>
    <tr><td><strong>Law of C&E</strong></td><td>Law of Cause and Effect</td><td>因果法則。橫盤整理期建立「原因（吸籌 / 派發）」，趨勢運動實現「效果（Markup / Markdown）」。效果與原因成正比。</td></tr>
    <tr><td><strong>Law of E&R</strong></td><td>Law of Effort and Result</td><td>努力與結果法則。成交量 = 努力，價格移動 = 結果。兩者和諧代表趨勢健康；兩者背離代表趨勢即將衰竭或反轉。</td></tr>
    <tr><td><strong>P&F</strong></td><td>Point and Figure Chart</td><td>點數圖。Wyckoff 原生的目標位推算工具，以橫向計數估算趨勢可能的移動距離。現代交易者更傾向使用 Fibonacci 延伸替代。</td></tr>
    <tr><td><strong>RR / R:R</strong></td><td>Risk to Reward Ratio</td><td>風報比。止損距離（風險）與目標距離（潛在報酬）的比例。Wyckoff 建議最低不低於 1:2。</td></tr>
    <tr><td><strong>SL</strong></td><td>Stop Loss</td><td>止損。設定在「若價格到達此處，原始分析假設即告失效」的位置，而非純粹的資金管理工具。</td></tr>
    <tr><td><strong>TP</strong></td><td>Take Profit</td><td>止盈目標。建議以流動性區域（前期高低點、HTF 結構邊界、Naked VPOC）設定，而非固定點數。</td></tr>
    <tr><td><strong>VPOC</strong></td><td>Volume Point of Control</td><td>成交量控制點。Volume Profile 中成交量最大的價格水平，代表買賣雙方最認可的公平價值，具有強烈的磁吸效應。</td></tr>
    <tr><td><strong>Naked VPOC</strong></td><td>Naked / Unvisited VPOC</td><td>未被回測的 VPOC。前期 VPOC 在形成後從未被再次訪問，具有強力的未來磁吸效應，是優先考慮的止盈目標。</td></tr>
    <tr><td><strong>VWAP</strong></td><td>Volume Weighted Average Price</td><td>成交量加權平均價。機構交易員廣泛使用的參考基準，大量待成交訂單聚集於此，具有強烈的磁吸效應與支撐 / 阻力功能。</td></tr>
    <tr><td><strong>VAH / VAL</strong></td><td>Value Area High / Value Area Low</td><td>價值區高點 / 低點。Volume Profile 中佔總成交量 70% 的區間的上下邊界，是機構交易員的重要參考水平。</td></tr>
    <tr><td><strong>POI</strong></td><td>Point of Interest</td><td>關注點。交易者預計價格將在此產生明顯反應的特定價格區域，通常是 OB、FVG、Creek、ICE、流動性池的位置。</td></tr>
    <tr><td><strong>HTF</strong></td><td>Higher Time Frame</td><td>高時間框架。週線、日線等較大的時間框架，用於確認市場方向偏向與大結構背景。</td></tr>
    <tr><td><strong>MTF</strong></td><td>Middle Time Frame</td><td>中時間框架。4H、1H 等中等時間框架，用於識別具體結構 Phase 與進場區域。</td></tr>
    <tr><td><strong>LTF</strong></td><td>Lower Time Frame</td><td>低時間框架。15M、5M 等較小的時間框架，用於精確進場觸發與止損設置。</td></tr>
  </tbody>
</table>
<p>---</p>`
      },
      {
        "title": "SMC / ICT 對照術語速查表",
        "html": `<p>以下為 Wyckoff 核心術語與 SMC / ICT 對應概念的快速查閱對照，供跨框架溝通時使用。</p>
<table>
  <thead>
    <tr><th>Wyckoff 術語</th><th>最接近的 SMC/ICT 對應</th></tr>
  </thead>
  <tbody>
    <tr><td>Spring（向下假突破）</td><td>Stop Hunt / Liquidity Sweep（向下）/ Judas Swing</td></tr>
    <tr><td>UTAD（向上假突破）</td><td>Stop Hunt / Liquidity Grab（向上）/ Inducement（IDM）</td></tr>
    <tr><td>SOS（有效向上突破）</td><td>BOS（Break of Structure，向上）</td></tr>
    <tr><td>SOW（有效向下突破）</td><td>BOS（Break of Structure，向下）</td></tr>
    <tr><td>CHoCH</td><td>CHoCH（SMC 直接沿用此術語）</td></tr>
    <tr><td>LPS / BUEC（突破後回踩）</td><td>OTE / Mitigation to Bullish OB 或 FVG</td></tr>
    <tr><td>LPSY / FTI 回測</td><td>OTE / Mitigation to Bearish OB 或 FVG</td></tr>
    <tr><td>SC（賣出高潮）</td><td>Bullish OB 的形成位置</td></tr>
    <tr><td>BC（買入高潮）</td><td>Bearish OB 的形成位置</td></tr>
    <tr><td>Composite Man</td><td>IPDA / Composite Operator（ICT）</td></tr>
    <tr><td>Creek（上緣阻力）</td><td>Range High / Resistance Level</td></tr>
    <tr><td>ICE（下緣支撐）</td><td>Range Low / Support Level</td></tr>
    <tr><td>Equal Highs / Lows</td><td>Buy-side Liquidity / Sell-side Liquidity（BSL / SSL）</td></tr>
    <tr><td>Phase B 吸籌</td><td>AMD 的 Accumulation 階段</td></tr>
    <tr><td>Markup（推升趨勢）</td><td>AMD 的 Distribution 階段（注意：ICT 用語與 Wyckoff 相反）</td></tr>
    <tr><td>SOS Bar / SOW Bar</td><td>Displacement Candle / MSS（Market Structure Shift）</td></tr>
    <tr><td>Weis Wave</td><td>無直接對應（SMC 較少使用成交量波浪分析）</td></tr>
    <tr><td>No Supply / No Demand</td><td>無直接對應（SMC 框架較少使用 VSA 量價形態）</td></tr>
  </tbody>
</table>
<div class="callout co-note">
  <div class="cot">NOTE — AMD 術語歧義提醒</div>
  <p>ICT 的 AMD（Accumulation → Manipulation → Distribution）中，「Distribution」一詞指「大資金將倉位分配（釋放）至趨勢」，等同於 Wyckoff 的 Markup（推升上漲）。這與 Wyckoff 的「Distribution（高位派發出貨）」含義完全相反。跨框架溝通時務必根據語境確認該詞的含義，避免混淆。</p>
</div>
<p>---</p>`
      }
    ]
  }
];
