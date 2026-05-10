var CHAPTERS = [
    {
        "title": "導論",
        "sub": "Introduction · pp. 1–35",
        "sections": [
            {
                "title": "PA 導論 — Introduction",
                "html": `<div class="callout co-note"><div class="cot">NOTE</div><p>原書 pp. 1–35（35 頁）</p></div>
<p>---</p>`
            },
            {
                "title": "一、每根 K 線都是一場賭注",
                "html": `<p>每一根 K 線的形成，代表所有市場參與者在這段時間內的集體決策結果：</p>
<ul>
<li class="ind0"><strong>買方</strong>：認為此刻入場，下一根棒收盤後可以獲利</li>
<li class="ind0"><strong>賣方</strong>：認為此刻放空，下一根棒收盤後可以獲利</li>
<li class="ind0"><strong>出場者</strong>：認為此刻平倉是最優決策——這也是一種市場行為</li>
<li class="ind0"><strong>觀望者</strong>：認為此刻沒有足夠優勢進場——這個「不進場」同樣影響市場深度</li>
</ul>
<p>K 線的開高低收，已完整反映所有參與者的集體裁決。這就是為何 Al Brooks 認為指標是多餘的——<strong>指標只是對同一組價格資料的二次計算</strong>，無法提供 K 線本身沒有的資訊。</p>
<p>---</p>`
            },
            {
                "title": "二、Always In（永遠在場心態）",
                "html": `<p>Always In 不是持倉策略，而是一種<strong>強制性的思維框架</strong>：</p>
<div class="callout co-note"><div class="cot">NOTE</div><p>「如果我現在必須選擇一個方向並持有，我選多還是空？」</p></div>
<ul>
<li class="ind0"><strong>Always In Long（AI Long）</strong>：當前結構傾向上行，被迫入場則做多</li>
<li class="ind0"><strong>Always In Short（AI Short）</strong>：當前結構傾向下行，被迫入場則做空</li>
<li class="ind0"><strong>在交易區間中</strong>：AI 方向頻繁切換，這本身就是「高度不確定性」的量化表示</li>
</ul>
<h3>為何 Always In 重要？</h3>
<ul>
<li class="ind0">強迫你<strong>持續評估</strong>市場，而非被動等待</li>
<li class="ind0">若你無法清晰說出 AI 方向，代表<strong>你對市場的理解不夠清晰</strong>，此時觀望是正確選擇</li>
<li class="ind0">AI 方向的轉換點，通常就是最佳的交易方向切換點</li>
</ul>
<div class="callout co-tip"><div class="cot">實戰應用</div><p>每開啟一張圖，先問自己：「此刻 AI 是多還是空？」若無法清晰回答，不進場。</p></div>
<p>---</p>`
            },
            {
                "title": "三、多空雙方同時存在",
                "html": `<p>這是 Al Brooks 最重要的哲學基礎之一：</p>
<ul>
<li class="ind0"><strong>任何時刻</strong>市場上都同時有聰明的多頭和聰明的空頭</li>
<li class="ind0">不存在「只有一方才能解釋這根 K 線」的情況</li>
<li class="ind0"><strong>每根 K 線都有多空兩種合理解讀</strong>，兩者都正確</li>
</ul>
<h3>例子：一根大陽線</h3>
<ul>
<li class="ind0">多頭解讀：「突破確認，趨勢延續，繼續做多」</li>
<li class="ind0">空頭解讀：「過熱高潮，能量耗盡，準備做空」</li>
<li class="ind0"><strong>兩者都合理</strong>，關鍵是判斷哪一方的論點在當前背景下更有優勢</li>
</ul>
<h3>實戰含義</h3>
<ul>
<li class="ind0">不要試圖找「唯一正確的解讀」，而是問「哪一方此刻佔優勢？」</li>
<li class="ind0">每次進場，都要先想「另一方的論點是什麼？」</li>
<li class="ind0">若對方的論點比你的更有說服力，<strong>不要進場</strong></li>
</ul>
<p>---</p>`
            },
            {
                "title": "四、機率思維與不確定性",
                "html": `<p>PA 分析的本質是機率評估，不是預測：</p>
<ul>
<li class="ind0">任何形態的正確率不是 100%，也不是 0%</li>
<li class="ind0">正確的框架：「這個形態在歷史上有 X% 的機率往 Y 方向發展，因此我願意以 Z 的風險去博」</li>
<li class="ind0"><strong>嚴禁使用確定性語言</strong>：「一定會漲」「肯定要跌」這類想法是虧損的根源</li>
</ul>
<h3>機率分佈的現實</h3>
<ul>
<li class="ind0">大多數 PA 信號的勝率在 <strong>50%~65%</strong> 之間</li>
<li class="ind0">高品質信號（如強趨勢中的 H2）可達 60%~70%</li>
<li class="ind0">沒有任何信號能持續達到 80%+ 的勝率</li>
<li class="ind0"><strong>長期獲利的關鍵</strong>：確保勝率 × 平均盈利 > 敗率 × 平均虧損</li>
</ul>
<h3>每次進場都是獨立事件</h3>
<ul>
<li class="ind0">上一筆虧損不代表下一筆一定獲利</li>
<li class="ind0">上一筆獲利不代表下一筆一定虧損</li>
<li class="ind0">必須在<strong>每筆交易前</strong>預設可能虧損，設好止損，接受結果</li>
</ul>
<div class="callout co-warning"><div class="cot">最常見的心理陷阱</div><p>連續虧損後「報復性加大倉位」，認為「下一筆一定會贏回來」——這是賭徒謬誤，不是機率思維。</p></div>
<p>---</p>`
            },
            {
                "title": "五、時間框架的選擇",
                "html": `<h3>本書的主要範例</h3>
<ul>
<li class="ind0">Al Brooks 以 <strong>5 分鐘 E-mini S&P 500（ES）期貨</strong>為主要教學圖表</li>
<li class="ind0">選擇 5 分鐘圖的原因：每天有足夠的棒數（約 80~100 根），形態完整，信號頻率適中</li>
</ul>
<h3>所有原則適用於任何時間框架</h3>
<ul>
<li class="ind0">在 1 分鐘圖看到的 H2，和在日線圖看到的 H2，邏輯完全相同</li>
<li class="ind0">更大時間框架的形態，在更小時間框架中已提前完整呈現</li>
<li class="ind0"><strong>多時間框架一致性</strong>：小框架信號若與大框架方向一致，有效性更高</li>
</ul>
<h3>時間框架關係原則</h3>
<ul>
<li class="ind0">在任何時間框架分析時，同時考慮<strong>上一個時間框架的背景</strong>（Background）</li>
<li class="ind0">例：5 分鐘圖的 H2 信號，若在 60 分鐘圖的趨勢支撐位出現，有效性大幅提升</li>
<li class="ind0">「大框架定方向，小框架找進場」是最基本的多框架應用原則</li>
</ul>
<p>---</p>`
            },
            {
                "title": "六、當沖 vs. 波段（Scalp vs. Swing）",
                "html": `<h3>當沖（Scalping）</h3>
<ul>
<li class="ind0">目標：小獲利（1~4 個 tick，或約 1 個 ATR 的一半）</li>
<li class="ind0">特點：勝率高（>55%），每筆利潤小，交易頻率高</li>
<li class="ind0">適合：需要精確讀圖，對每根棒的博弈有清晰判斷</li>
<li class="ind0">風險：手續費累積影響明顯，需要極強的執行紀律</li>
</ul>
<h3>波段（Swing）</h3>
<ul>
<li class="ind0">目標：大波動（整個通道、整個趨勢段，或等距幅度）</li>
<li class="ind0">特點：勝率略低（50%~60%），但每筆利潤大</li>
<li class="ind0">適合：有耐心持倉，不被短期波動影響</li>
</ul>
<h3>Al Brooks 的建議：部分倉位策略（Partial Position）</h3>
<ul>
<li class="ind0"><strong>同時兼顧兩者</strong>：進場後先以當沖目標平半倉（鎖定確定利潤）</li>
<li class="ind0">剩餘半倉追求波段目標（成本已降低，可承受更大波動）</li>
<li class="ind0">這是 PA 體系最核心的倉位管理策略之一</li>
</ul>
<p>---</p>`
            },
            {
                "title": "七、上下文（Context）的絕對重要性",
                "html": `<div class="callout co-important"><div class="cot">Context 是 PA 最重要的概念</div><p>任何 K 線形態的意義，**完全取決於它出現的背景**。脫離背景的形態分析毫無意義。</p></div>
<h3>需要考慮的背景因素</h3>
<li class="numbered"><strong>最近 20 根棒</strong>：代表當前市場的「近期記憶」，這些棒的結構決定了信號的有效性</li>
<li class="numbered"><strong>當前市場狀態</strong>：趨勢中？交易區間中？高潮後？突破前？</li>
<li class="numbered"><strong>在更大時間框架的位置</strong>：是否接近日線重要支撐/阻力？</li>
<li class="numbered"><strong>時間因素</strong>：是否在重要時間窗口（如開盤、新聞發布前後）？</li>
<li class="numbered"><strong>前期形態的狀態</strong>：當前走勢是否是對前期形態的延續？</li>
<h3>實戰應用：讀圖的順序</h3>
<li class="numbered">先看<strong>最近 20~50 根棒</strong>，判斷市場狀態（趨勢/區間）</li>
<li class="numbered">確認<strong>最小阻力方向</strong>（Direction of Least Resistance）</li>
<li class="numbered">找<strong>關鍵水平位</strong>（前高、前低、均線、趨勢線）</li>
<li class="numbered">才開始尋找<strong>進場信號</strong></li>
<p>---</p>`
            },
            {
                "title": "八、被套者的力量（Trapped Traders）",
                "html": `<p>這是 PA 解釋很多現象的核心機制：</p>
<ul>
<li class="ind0"><strong>被套多頭（Trapped Longs）</strong>：在不佳位置做多，現在被套，隨時準備認損出場</li>
</ul>
<p>  - 他們的「停損出場」= 賣出 = 推低價格</p>
<ul>
<li class="ind0"><strong>被套空頭（Trapped Shorts）</strong>：在不佳位置做空，現在被套，隨時準備認損出場</li>
</ul>
<p>  - 他們的「停損出場」= 買回 = 推高價格</p>
<h3>被套者如何製造行情</h3>
<ul>
<li class="ind0">假突破（Failed Breakout）後，被套在突破方向的人大量認損出場</li>
<li class="ind0">這些停損訂單成為推動反向行情的燃料</li>
<li class="ind0">例：突破前高後立即回頭 → 追高多頭被套 → 集體停損賣出 → 行情快速下跌</li>
</ul>
<div class="callout co-example"><div class="cot">應用</div><p>當你看到假突破，想的不只是「方向錯了」，而是「此刻有多少人被套了？他們的停損在哪裡？那裡就是接下來的目標位。」</p></div>
<p>---</p>`
            },
            {
                "title": "九、止損推動行情",
                "html": `<p>每一個止損訂單被觸發，都是一筆真實的市場成交：</p>
<ul>
<li class="ind0">多頭的停損 = 市價賣單 = 推低價格</li>
<li class="ind0">空頭的停損 = 市價買單 = 推高價格</li>
</ul>
<p>這就是為何：</p>
<ul>
<li class="ind0"><strong>整數關口上方聚集著空頭止損</strong>（多頭突破後，空頭大量平倉 → 進一步推高）</li>
<li class="ind0"><strong>前低下方聚集著多頭止損</strong>（空頭突破後，多頭大量平倉 → 進一步推低）</li>
<li class="ind0">機構了解這個機制，因此主動「獵殺止損」（Stop Hunt）再反向操作</li>
</ul>
<p>---</p>`
            },
            {
                "title": "十、本書的使用方式",
                "html": `<p>Al Brooks 在前言明確說明：</p>
<ul>
<li class="ind0"><strong>本書不是步驟說明書</strong>，而是一本需要反覆閱讀的參考書</li>
<li class="ind0">第一次閱讀目的：建立整體框架，了解體系的輪廓</li>
<li class="ind0">後續閱讀：每次因為交易經驗增加，會從同一段文字中讀出不同的深度</li>
<li class="ind0"><strong>形態名稱只是溝通標籤</strong>，重要的是背後的多空力量博弈邏輯</li>
<li class="ind0">不要死記形態，要理解「為什麼這個形態有效」</li>
</ul>
<div class="callout co-quote"><div class="cot">Al Brooks 的核心建議</div><p>「每根 K 線都在問你一個問題，而下一根 K 線給出答案。分析永遠是即時進行的。」</p></div>
<p>---</p>`
            },
            {
                "title": "導論關鍵概念清單",
                "html": `<ul>
<li class="ind0">[ ] Always In 心態（任何時刻都能說出 AI 方向）</li>
<li class="ind0">[ ] 多空雙方同時存在（任何棒都有合理的兩種解讀）</li>
<li class="ind0">[ ] 機率思維框架（勝率 × 平均盈 > 敗率 × 平均虧）</li>
<li class="ind0">[ ] Context 優先（背景決定信號意義）</li>
<li class="ind0">[ ] Trapped Traders 機制（被套者的止損推動行情）</li>
<li class="ind0">[ ] 部分倉位策略（半倉當沖 + 半倉波段）</li>
</ul>`
            }
        ],
        "id": "intro"
    },
    {
        "title": "Part I Ch.01–04",
        "sub": "K線基礎 · pp. 55–88",
        "sections": [
            {
                "title": "連續光譜（The Spectrum）",
                "html": `<p>市場狀態不是「趨勢」或「區間」的二元選擇，而是一個<strong>連續光譜</strong>，從極端強趨勢到極端交易區間：</p>
<pre><code>極端強趨勢 ←————————————————————→ 極端交易區間
  連續大趨勢棒          鐵絲網（Barb Wire）
  幾乎無回調            大量重疊十字星
  均線從未被觸碰        均線完全糾纏</code></pre>
<h3>各點的詳細特徵</h3>
<h4>極端強趨勢（Strong Trend）</h4>
<ul>
<li class="ind0">連續 10 根以上不重疊趨勢棒，幾乎無逆勢棒</li>
<li class="ind0">均線從未被任何 K 線實體觸碰（即使影線也很少觸碰）</li>
<li class="ind0">每次回調只有 1 根棒，立即恢復推進</li>
<li class="ind0">回調深度 < 前段推進的 25%</li>
<li class="ind0"><strong>操作原則</strong>：只做順勢，不嘗試逆勢，不等回調（可能來不及等）</li>
</ul>
<h4>健康趨勢（Healthy Trend）</h4>
<ul>
<li class="ind0">有回調，但回調乾淨（1~3 根棒），幅度 < 前段 33%~50%</li>
<li class="ind0">每次回調後都在更高/更低位止穩</li>
<li class="ind0">均線有時被影線觸碰，但實體未越過</li>
<li class="ind0">形成明顯的「Higher Highs + Higher Lows」或「Lower Lows + Lower Highs」</li>
<li class="ind0"><strong>操作原則</strong>：等 H2/L2 回調進場，順勢為主</li>
</ul>
<h4>弱趨勢（Weak Trend / Broad Channel）</h4>
<ul>
<li class="ind0">有方向性，但回調深度 > 前段 50%</li>
<li class="ind0">均線被實體觸碰，甚至短暫穿越</li>
<li class="ind0">逆勢棒開始出現且實體較大</li>
<li class="ind0">突破前高/低後常有停頓甚至回測失敗</li>
<li class="ind0"><strong>操作原則</strong>：謹慎做順勢，止損設寬；也可等更強確認</li>
</ul>
<h4>傾斜交易區間（Tilted Trading Range / Channel）</h4>
<ul>
<li class="ind0">有方向性，但上下沿均有明顯反彈</li>
<li class="ind0">多空雙方都積極參與，突破任一沿都困難</li>
<li class="ind0">本質上是「斜向的交易區間」</li>
<li class="ind0"><strong>操作原則</strong>：在下沿做多 + 上沿做空（區間思維）；或等真正突破</li>
</ul>
<h4>交易區間（Trading Range）</h4>
<ul>
<li class="ind0">橫向震盪，假突破頻繁</li>
<li class="ind0">均線完全糾纏</li>
<li class="ind0">多空力量相對平衡，突破機率 ≈ 50:50</li>
<li class="ind0"><strong>操作原則</strong>：邊界反轉或等突破確認</li>
</ul>
<h4>極端交易區間（鐵絲網 Barb Wire）</h4>
<ul>
<li class="ind0">連續 3 根以上 K 線大量重疊，至少含一根十字星</li>
<li class="ind0">任何方向的信號都不可靠</li>
<li class="ind0">唯一正確的操作：<strong>觀望</strong>，等待鐵絲網結束</li>
<li class="ind0">若已持倉而行情進入鐵絲網：考慮減倉或出場</li>
</ul>
<p>---</p>`
            },
            {
                "title": "判斷市場狀態的工具",
                "html": `<h3>工具一：均線組</h3>
<ul>
<li class="ind0"><strong>20 EMA</strong>：反映最近 20 根棒的平均成本，是短期動態 S/R</li>
<li class="ind0"><strong>50 EMA</strong> / <strong>200 EMA</strong>：中長期趨勢方向的參考</li>
<li class="ind0">均線高度發散（短均線遠離長均線）= 強趨勢</li>
<li class="ind0">均線糾纏（短均線反覆穿越長均線）= 交易區間</li>
</ul>
<h3>工具二：K 線重疊程度</h3>
<ul>
<li class="ind0">連續棒的實體是否互相包含或大量重疊？</li>
<li class="ind0">重疊多（> 50% 的棒與前棒重疊）= 趨於區間</li>
<li class="ind0">幾乎不重疊（每棒都突破前棒範圍）= 趨於趨勢</li>
</ul>
<h3>工具三：回調深度</h3>
<ul>
<li class="ind0">< 前段 33%：強趨勢</li>
<li class="ind0">33%~50%：普通趨勢</li>
<li class="ind0">> 50%：趨勢減弱，可能進入區間</li>
</ul>
<h3>工具四：最近突破嘗試</h3>
<ul>
<li class="ind0">反覆突破前高/低但都失敗（影線觸及但不收在外）= 區間</li>
<li class="ind0">突破後有跟進棒，且不回頭 = 趨勢</li>
</ul>
<div class="callout co-warning"><div class="cot">最常見的錯誤</div><p>在交易區間中用趨勢策略，或在強趨勢中用區間策略——這是大多數虧損的根源。判斷市場狀態是所有分析的**第一步**，必須先完成才能進入後續分析。</p></div>
<p>---</p>`
            },
            {
                "title": "趨勢棒（Trend Bar）",
                "html": `<h3>定義與特徵</h3>
<ul>
<li class="ind0">實體佔整根棒的比例大（理想 > 60%，強勢時 > 80%）</li>
<li class="ind0">影線短（理想 < 實體的 1/3）</li>
<li class="ind0">方向清晰：多頭趨勢棒收盤 ≈ 最高點；空頭趨勢棒收盤 ≈ 最低點</li>
</ul>
<h3>趨勢棒的力道等級（由強至弱）</h3>
<li class="numbered"><strong>去掉影線（Shaved Bar）</strong>：上下均無影線的純趨勢棒，代表最強單向共識（如大缺口棒）</li>
<li class="numbered"><strong>去掉一端影線</strong>：一側無影線，多空有一方完全控制</li>
<li class="numbered"><strong>大實體小影線</strong>：實體 > 整棒 70%，影線 < 15%</li>
<li class="numbered"><strong>中等實體</strong>：實體 50%~70%，有明顯影線</li>
<li class="numbered"><strong>小實體大影線</strong>：實體 < 50%，接近十字星</li>
<h3>趨勢棒在不同位置的含義</h3>
<ul>
<li class="ind0"><strong>趨勢中段</strong>：動能確認，順勢信號</li>
<li class="ind0"><strong>趨勢末端（通道線附近）</strong>：高潮警示，可能是反轉前的最後加速</li>
<li class="ind0"><strong>突破後</strong>：確認突破有效性（若後面的棒也是趨勢棒）</li>
<li class="ind0"><strong>回調中出現逆勢趨勢棒</strong>：回調可能比預期更深</li>
</ul>
<p>---</p>`
            },
            {
                "title": "十字星（Doji）",
                "html": `<h3>定義</h3>
<ul>
<li class="ind0">開盤與收盤相近（理想情況下幾乎相同）</li>
<li class="ind0">影線佔整棒比例大，多空均有掙扎</li>
</ul>
<h3>十字星的種類（PA 角度）</h3>
<table>
<thead><tr><th>形態</th><th>特徵</th><th>含義</th></tr></thead><tbody>
<tr><td>標準十字星</td><td>上下影線均等</td><td>完全平衡，等待方向</td></tr>
<tr><td>射擊之星</td><td>長上影線，無下影線</td><td>多頭被擊退，空頭佔優</td></tr>
<tr><td>錘子</td><td>長下影線，無上影線</td><td>空頭被擊退，多頭佔優</td></tr>
<tr><td>長腳十字星</td><td>上下影線均長</td><td>激烈博弈，最終平手</td></tr>
<tr><td>紡錘頂/底</td><td>上下影線均長，有小實體</td><td>類似十字星，猶豫信號</td></tr>
</tbody></table>
<h3>十字星的位置決定意義</h3>
<ul>
<li class="ind0"><strong>趨勢中段的十字星</strong>：短暫休息，通常只是 H1，不代表趨勢結束</li>
<li class="ind0"><strong>趨勢末端的十字星（在高潮後）</strong>：潛在的反轉信號，需等確認棒</li>
<li class="ind0"><strong>關鍵 S/R 位的十字星</strong>：確認該位置的重要性，等方向確認</li>
<li class="ind0"><strong>連續 3 根以上十字星</strong>：進入鐵絲網，不操作</li>
<li class="ind0"><strong>孤立在趨勢中的十字星</strong>：意義有限，不要單獨作為信號</li>
</ul>
<p>---</p>`
            },
            {
                "title": "高潮（Climax）",
                "html": `<h3>定義</h3>
<p>趨勢末期的最後加速推進，特徵：</p>
<ul>
<li class="ind0">由 <strong>1~5 根連續大趨勢棒</strong>構成</li>
<li class="ind0">斜率急劇增加（與之前趨勢相比）</li>
<li class="ind0">通常突破趨勢通道線（過衝 Overshoot / Throw-over）</li>
</ul>
<h3>買入高潮（Buying Climax）</h3>
<ul>
<li class="ind0">上漲趨勢末端的急速加速上衝</li>
<li class="ind0">散戶因害怕錯過而追高</li>
<li class="ind0">機構趁機大量獲利了結，甚至反手做空</li>
<li class="ind0">識別：急速大陽線突破通道線 + 後續出現 2 根以上逆勢棒</li>
</ul>
<h3>賣出高潮（Selling Climax）</h3>
<ul>
<li class="ind0">下跌趨勢末端的急速加速下衝</li>
<li class="ind0">散戶因恐慌而追殺</li>
<li class="ind0">機構趁機大量低吸，甚至反手做多</li>
<li class="ind0">識別：急速大陰線突破通道線 + 後續出現 2 根以上逆勢棒</li>
</ul>
<h3>高潮後的三種演變</h3>
<li class="numbered"><strong>進入交易區間</strong>（最常見，約 60%）：高潮後深幅震盪，主趨勢動能衰竭</li>
<li class="numbered"><strong>直接反轉（MTR）</strong>（約 30%）：高潮後二次測試前高/低失敗，形成雙頂/底</li>
<li class="numbered"><strong>末端旗形後繼續</strong>（約 10%）：高潮後短暫整理，再度突破（最後一段）</li>
<h3>高潮後的第一次回調（First Pullback after Climax）</h3>
<ul>
<li class="ind0">高潮結束後的第一次回調，是<strong>低風險的逆勢入場機會</strong></li>
<li class="ind0">止損設在高潮極值</li>
<li class="ind0">目標：至少等距（回調 = 高潮幅度的 50%~100%）</li>
</ul>
<div class="callout co-tip"><div class="cot">辨識高潮的實戰技巧</div><p>問自己：「這段推進是否比之前更快、更陡、更多連續棒？」如果是，就是高潮的候選。不要在高潮中追高，要等回調確認。</p></div>
<p>---</p>`
            },
            {
                "title": "突破（Breakout）",
                "html": `<h3>有效突破的 6 個特徵</h3>
<li class="numbered">突破前有<strong>壓力蓄積</strong>（小幅橫向整理 3~10 根棒），而非急速直衝</li>
<li class="numbered">突破棒本身<strong>實體大、影線小</strong>（最好是去掉影線的剃頭/剃尾棒）</li>
<li class="numbered">突破棒<strong>收盤在突破方向的遠端</strong>（如向上突破，收盤在接近最高點）</li>
<li class="numbered">突破後<strong>下一根棒繼續跟進</strong>（不立即反向或形成長影線）</li>
<li class="numbered">突破後的第一次<strong>回測在突破位上方獲得支撐</strong>（S/R Flip）</li>
<li class="numbered">相關市場同步確認（如同類資產也有類似突破）</li>
<h3>假突破（Failed Breakout / Fakeout）的特徵</h3>
<ul>
<li class="ind0">突破後 <strong>1~2 根棒內收回到突破位另一側</strong></li>
<li class="ind0">突破棒留有<strong>長影線</strong>，收盤靠近突破位或已越過到對面</li>
<li class="ind0">後續無任何跟進棒</li>
<li class="ind0">突破時<strong>成交量異常低</strong>（價格孤立向前，無人跟進）</li>
</ul>
<h3>假突破的交易價值</h3>
<ul>
<li class="ind0">假突破後的<strong>反向</strong>動能通常很強</li>
<li class="ind0">被套在突破方向的人集體認損 → 推動反向行情</li>
<li class="ind0">假突破 = <strong>被套者的止損 = 反向行情的燃料</strong></li>
<li class="ind0">做法：等假突破確認後（突破棒收回後的下一棒進場），逆向進場，止損設在假突破的極值</li>
</ul>
<p>---</p>`
            },
            {
                "title": "交易區間（Trading Range）",
                "html": `<h3>形成邏輯</h3>
<ul>
<li class="ind0">趨勢推進後，多空力量趨於平衡</li>
<li class="ind0">多頭傾向在區間底部買入，頂部平倉；空頭則反之</li>
<li class="ind0">這種「來回」行為本身維持了區間的存在</li>
</ul>
<h3>識別四步驟</h3>
<li class="numbered"><strong>深幅回調</strong>：趨勢出現比以往更深的回調（> 前段 50%）</li>
<li class="numbered"><strong>順勢突破失敗</strong>：回調後嘗試恢復趨勢，但失敗（未能創新高/低）</li>
<li class="numbered"><strong>波段點支撐/阻力驗證</strong>：在前期波段點附近出現反應</li>
<li class="numbered"><strong>等高等低點確認</strong>：出現兩個不斷高點與兩個不斷低點，區間被確認</li>
<h3>交易區間的核心特性</h3>
<ul>
<li class="ind0"><strong>慣性</strong>：區間一旦形成，傾向持續（突破失敗的機率 > 突破成功）</li>
<li class="ind0"><strong>假突破頻繁</strong>：大多數突破嘗試（約 70%）最終回到區間內</li>
<li class="ind0"><strong>突破方向機率</strong>：上下各約 50%，向前趨勢方向略有優勢（約 55:45）</li>
<li class="ind0"><strong>中部是危險地帶</strong>：區間中部多空概率最接近 50:50，任何信號都不可靠</li>
</ul>
<h3>交易區間的兩種操作策略</h3>
<h4>策略一：邊界反轉</h4>
<ul>
<li class="ind0">在下邊界做多（等 H2 信號）</li>
<li class="ind0">在上邊界做空（等 L2 信號）</li>
<li class="ind0"><strong>中部平半倉</strong>（優勢消失的位置）</li>
<li class="ind0">適合：清晰的橫向交易區間</li>
</ul>
<h4>策略二：等待突破</h4>
<ul>
<li class="ind0">不在區間內交易，等待明確的突破信號</li>
<li class="ind0">突破確認後：等第一次回測突破位再進場</li>
<li class="ind0">止損設在突破位另一側</li>
<li class="ind0">適合：不確定區間真假時</li>
</ul>
<div class="callout co-warning"><div class="cot">區間操作的核心禁忌</div><p>**永遠不在區間中部操作。** 中部是最容易虧損的位置——行情可能雙向被打損。</p></div>
<p>---</p>`
            },
            {
                "title": "測試（Test）",
                "html": `<h3>測試的類型</h3>
<ul>
<li class="ind0"><strong>測試前高/低</strong>：確認該位置是否仍有有效的支撐/阻力</li>
<li class="ind0"><strong>測試均線</strong>：確認均線是否仍作為動態 S/R</li>
<li class="ind0"><strong>測試趨勢線</strong>：確認趨勢線是否仍然有效</li>
<li class="ind0"><strong>測試突破位</strong>（S/R Flip 測試）：確認突破是否真實有效</li>
</ul>
<h3>測試的結果解讀</h3>
<ul>
<li class="ind0"><strong>成功測試</strong>：價格觸及關鍵位後出現明顯影線或強反轉棒，並迅速離開 → 位置有效</li>
<li class="ind0"><strong>失敗測試（False Test）</strong>：價格輕易穿越關鍵位且沒有明顯反應 → 位置失效</li>
<li class="ind0"><strong>第二次測試</strong>比第一次更可靠（更多市場記憶被激活）</li>
</ul>
<h3>測試與進場的結合</h3>
<ul>
<li class="ind0">第一次測試某關鍵位時：觀察，等待確認信號</li>
<li class="ind0">確認信號出現後（如強反轉棒 + H2）：進場</li>
<li class="ind0">止損：設在測試位的另一端（若測試失效，整個邏輯失效）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "反轉（Reversal）",
                "html": `<h3>反轉的必要條件（四個，缺一不可）</h3>
<li class="numbered"><strong>前期有明確趨勢存在</strong></li>
<li class="numbered"><strong>強勢逆勢運動</strong>：出現足以突破重要趨勢線或均線的逆勢推進</li>
<li class="numbered"><strong>對趨勢極值的測試</strong>：市場回測前高/低（可形成更高高點、等高點、或較低高點）</li>
<li class="numbered"><strong>強力逆勢突破</strong>：突破前一個回調的關鍵結構位（最終確認）</li>
<h3>反轉的現實統計</h3>
<ul>
<li class="ind0">約 <strong>80% 的反轉嘗試最終失敗</strong>（演變為交易區間或末端旗形）</li>
<li class="ind0">即使是「教科書完美的反轉形態」也有 35%~40% 的失敗率</li>
<li class="ind0">這就是為何 Al Brooks 建議初學者不要追逐反轉，等待趨勢確立後再順勢操作</li>
</ul>
<h3>如何區分「深度回調」和「真正反轉」</h3>
<table>
<thead><tr><th>深度回調</th><th>真正反轉</th></tr></thead><tbody>
<tr><td>逆勢推進後沉寂</td><td>逆勢推進持續加強</td></tr>
<tr><td>測試前極值後強力反彈</td><td>測試前極值後反彈弱</td></tr>
<tr><td>均線被穿越但後來回到同側</td><td>均線被穿越且後來站穩另一側</td></tr>
<tr><td>H2/L2 後迅速恢復主趨勢</td><td>H2/L2 後再度逆勢推進</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "三種 K 線角色定義",
                "html": `<div class="callout co-abstract"><div class="cot">核心定義</div><p>- **信號棒（Signal Bar）**：觸發進場的**前一根** K 線，定義進場條件 - **進場棒（Entry Bar）**：實際突破信號棒的那根 K 線，訂單在此成交 - **形態（Setup）**：由單根或多根 K 線構成的進場觸發條件組合</p></div>
<h3>信號棒的作用</h3>
<ul>
<li class="ind0">定義進場條件：做多信號棒 → 進場棒突破信號棒<strong>高點</strong>時買入</li>
<li class="ind0">定義止損位置：止損設在信號棒<strong>低點下方</strong> 1 tick</li>
<li class="ind0">評估信號質量：信號棒的形態（實體大小、影線位置、收盤位置）決定信號強弱</li>
</ul>
<h3>進場棒的作用</h3>
<ul>
<li class="ind0">確認信號有效性（若進場棒也是強趨勢棒，信號更強）</li>
<li class="ind0">進場棒收盤位置影響是否需要追加確認</li>
</ul>
<h3>形態（Setup）的層次</h3>
<ul>
<li class="ind0"><strong>單棒形態</strong>：H1/L1（單一突破信號棒）</li>
<li class="ind0"><strong>雙棒形態</strong>：H2/L2、雙棒反轉（Two-Bar Reversal）</li>
<li class="ind0"><strong>多棒形態</strong>：楔形、雙底/頂、頭肩等</li>
</ul>
<p>---</p>`
            },
            {
                "title": "進場確認的黃金法則 ^進場確認的黃金法則",
                "html": `<div class="callout co-danger"><div class="cot">永遠等進場棒突破後再下單</div><p>不要在信號棒收盤時進場。信號棒只是告訴你「若突破我的高/低點，則是進場信號」，而不是「現在就進場」。</p></div>
<h3>為何要等進場棒？</h3>
<ul>
<li class="ind0">信號棒收盤後，行情可能直接反向（沒有觸發進場棒）</li>
<li class="ind0">若直接在信號棒收盤進場，你可能在沒有確認的情況下被套</li>
<li class="ind0">等進場棒突破，是讓市場「告訴你方向已確認」</li>
</ul>
<h3>止損設置原則</h3>
<ul>
<li class="ind0">做多：止損設在信號棒低點下方 <strong>1 tick</strong></li>
<li class="ind0">做空：止損設在信號棒高點上方 <strong>1 tick</strong></li>
<li class="ind0">若信號棒太長（止損空間 > 1 ATR）：考慮放棄，或切換至更小時間框架尋找更精確的進場點</li>
</ul>
<h3>進場棒的質量評估</h3>
<ul>
<li class="ind0"><strong>理想的進場棒</strong>：強趨勢棒，收盤在遠端，幾乎無逆向影線</li>
<li class="ind0"><strong>一般的進場棒</strong>：中等實體，有一定影線</li>
<li class="ind0"><strong>弱進場棒</strong>：收盤回到中位，有長逆向影線 → 考慮是否要追加一根確認棒</li>
</ul>
<p>---</p>`
            },
            {
                "title": "蠟燭形態的 PA 解讀",
                "html": `<p>PA 不使用傳統日本蠟燭圖的名稱（如「吞噬」「錘子」「早晨之星」）。</p>
<p>所有蠟燭形態在 PA 中都被還原為：<strong>「這根棒的多空力量分佈是什麼？」</strong></p>
<h3>收盤位置的三分法</h3>
<table>
<thead><tr><th>位置</th><th>含義</th><th>後續傾向</th></tr></thead><tbody>
<tr><td>上 1/3</td><td>多頭強勢控盤</td><td>下一棒高機率上行</td></tr>
<tr><td>中間 1/3</td><td>雙方平衡</td><td>下一棒方向不確定</td></tr>
<tr><td>下 1/3</td><td>空頭強勢控盤</td><td>下一棒高機率下行</td></tr>
</tbody></table>
<h3>影線的含義</h3>
<ul>
<li class="ind0"><strong>長上影線</strong>：多頭試圖推高但被空頭擊退，空頭佔優</li>
<li class="ind0"><strong>長下影線</strong>：空頭試圖壓低但被多頭擊退，多頭佔優</li>
<li class="ind0"><strong>雙向長影線</strong>（十字星）：雙方均被擊退，方向不確定</li>
<li class="ind0"><strong>關鍵原則</strong>：影線的<strong>位置（在哪個方向被擊退）</strong> 比影線的<strong>長度</strong>更重要</li>
</ul>
<h3>棒與前棒的關係</h3>
<ul>
<li class="ind0">收盤高於前棒收盤：多頭強於前棒</li>
<li class="ind0">收盤低於前棒開盤（吞噬）：空頭控制整段時間的博弈</li>
<li class="ind0">收盤在前棒影線範圍內但在實體外：多空分歧加劇</li>
</ul>`
            }
        ],
        "id": "ch01"
    },
    {
        "title": "Part I Ch.05–06",
        "sub": "信號棒完整體系 · pp. 89–167",
        "sections": [
            {
                "title": "多頭反轉棒（Bullish Reversal Bar）",
                "html": `<h3>完整識別標準</h3>
<li class="numbered">實體為多頭色（陽線），或至少收盤高於開盤</li>
<li class="numbered">下影線長（代表空頭試圖壓低但被擊退）</li>
<li class="numbered">上影線短或無（多頭控制了收盤，沒有被空頭反擊）</li>
<li class="numbered">收盤高於當根開盤</li>
<li class="numbered">（最佳）收盤高於前一根棒的收盤</li>
<li class="numbered">（最佳）實體佔整棒 > 50%</li>
<h3>力道評分（★ 越多越強）</h3>
<table>
<thead><tr><th>等級</th><th>條件</th></tr></thead><tbody>
<tr><td>★★★</td><td>無上影線、收盤在最高點、前棒為大空頭趨勢棒、較前棒大</td></tr>
<tr><td>★★☆</td><td>有小上影線、收盤在上半部、有明顯下影線</td></tr>
<tr><td>★☆☆</td><td>收盤略高於開盤、仍有明顯上影線（多頭未完全控制）</td></tr>
<tr><td>☆☆☆</td><td>收盤接近中位、上下影線均長（不建議作為信號）</td></tr>
</tbody></table>
<h3>有效性的位置條件</h3>
<p>反轉棒只有在<strong>正確位置</strong>出現才具備統計意義：</p>
<ul>
<li class="ind0">趨勢末端（最近一段明顯推進之後）</li>
<li class="ind0">重要 S/R 位附近（前高/低、均線、整數關口）</li>
<li class="ind0">高潮棒之後（趨勢加速後）</li>
<li class="ind0">趨勢通道線觸碰之後</li>
<li class="ind0">楔形或三推形態的最後一推之後</li>
</ul>
<div class="callout co-warning"><div class="cot">孤立的反轉棒無意義</div><p>在趨勢中段、K 線重疊區間中、或遠離任何關鍵位的反轉棒，不能作為進場信號。</p></div>
<p>---</p>`
            },
            {
                "title": "空頭反轉棒（Bearish Reversal Bar）",
                "html": `<p>完全對稱的空頭版本：</p>
<li class="numbered">實體為空頭色（陰線）</li>
<li class="numbered">上影線長（多頭試圖推高但被擊退）</li>
<li class="numbered">下影線短或無</li>
<li class="numbered">收盤低於前棒收盤（最佳）</li>
<p>---</p>`
            },
            {
                "title": "反轉棒的本質理解",
                "html": `<p>反轉棒的核心機制：<strong>先有一次順勢的高潮運動（影線），緊接著一次逆勢的突破（實體）</strong></p>
<ul>
<li class="ind0">長下影線 = 空頭高潮（空頭試圖做到低點，但失敗）</li>
<li class="ind0">多頭實體 = 多頭逆勢突破（多頭完成反攻）</li>
<li class="ind0">因此：<mark>反轉棒 = 高潮失敗的直接證據</mark></li>
</ul>
<p>---</p>`
            },
            {
                "title": "Ch.06 信號棒：其他所有類型（共 52 頁）",
                "html": `<div class="callout co-abstract"><div class="cot">本章重要性</div><p>原書中篇幅最長的章節（頁 101–153）。涵蓋 PA 體系中所有非「標準反轉棒」的進場信號類型。掌握本章是從理解 PA「原理」到真正能「看圖操盤」的關鍵。</p></div>
<p>---</p>`
            },
            {
                "title": "H1/H2/H3/H4 與 L1/L2/L3/L4（數 K 線） ^H2 L2 數 K 線",
                "html": `<h3>核心定義</h3>
<h4>高點系列（用於多頭環境）</h4>
<ul>
<li class="ind0"><strong>H1（高一）</strong>：回調開始後，出現的<strong>第一根</strong>高點高於前一根棒的棒</li>
</ul>
<p>  - 代表：一段回調後的第一次向上突破嘗試</p>
<p>  - 風險：常被主力的假動作觸發</p>
<ul>
<li class="ind0"><strong>H2（高二）</strong>：在 H1 之後，高點再次下降，然後出現的<strong>第二次</strong>向上突破</li>
</ul>
<p>  - 代表：多頭的「二次確認」，空頭做了兩次嘗試都未能繼續壓低</p>
<p>  - <strong>這是 PA 體系中最可靠的進場信號</strong></p>
<ul>
<li class="ind0"><strong>H3</strong>：第三次向上突破，通常在小周期對應「楔形的最後一推」</li>
</ul>
<p>  - 警示：在強趨勢中偶爾直接 H3 進場；但在弱趨勢中，H3 常是趨勢即將失效的信號</p>
<ul>
<li class="ind0"><strong>H4</strong>：第四次突破，代表市場已進入通道模式；若 H4 後趨勢仍不延續，原趨勢可能已失效</li>
</ul>
<h4>低點系列（用於空頭環境）</h4>
<ul>
<li class="ind0"><strong>L1（低一）</strong>：反彈後的第一次向下突破</li>
<li class="ind0"><strong>L2（低二）</strong>：空頭的二次確認，是做空的最可靠信號</li>
<li class="ind0"><strong>L3</strong>：第三次向下突破（楔形最後一推的空頭版本）</li>
<li class="ind0"><strong>L4</strong>：市場進入下行通道模式</li>
</ul>
<h3>H2 的微觀結構</h3>
<p>H2 在更小的時間框架中，對應的是一個<strong>雙底（Double Bottom）</strong>結構：</p>
<ul>
<li class="ind0">第一腿（H1 出現後的再度下跌）= 雙底的第一底</li>
<li class="ind0">第二腿（H2 出現的那次回試）= 雙底的第二底</li>
<li class="ind0">H2 的突破 = 雙底的頸線突破</li>
</ul>
<p>這就是為何 H2 可靠：它在微觀上已完成了「多頭做了兩次嘗試都守住了」的確認。</p>
<h3>H2 的操作細節</h3>
<ul>
<li class="ind0"><strong>進場</strong>：等 H2 信號棒之後的棒突破其高點時買入（限價或市價均可）</li>
<li class="ind0"><strong>止損</strong>：H2 信號棒的低點下方 1 tick</li>
<li class="ind0"><strong>目標</strong>：至少等距（前段推進幅度），或前高，或通道線</li>
<li class="ind0"><strong>失敗的 H2 變成 L1</strong>：若 H2 信號棒被打損（跌破低點），本身就是強力的做空信號</li>
</ul>
<h3>數 K 線的起始點</h3>
<ul>
<li class="ind0">從<strong>波段高/低點</strong>開始數，不是從任意一棒開始</li>
<li class="ind0">若市場橫向重疊（交易區間），數出來的 H/L 可靠性大幅下降，盡量避免</li>
</ul>
<p>---</p>`
            },
            {
                "title": "內包棒（Inside Bar）",
                "html": `<h3>定義</h3>
<p>當根棒的高點 ≤ 前棒高點，且低點 ≥ 前棒低點（完全被包含在前棒範圍內）</p>
<h3>含義</h3>
<ul>
<li class="ind0">市場猶豫，多空均在等待突破方向確認</li>
<li class="ind0">代表「暫停」，不代表「反轉」</li>
</ul>
<h3>操作方式</h3>
<ul>
<li class="ind0">突破內包棒高點做多（H1 等效）</li>
<li class="ind0">跌破內包棒低點做空（L1 等效）</li>
<li class="ind0">需配合背景趨勢方向決定操作哪一邊</li>
</ul>
<h3>影響內包棒信號強度的因素</h3>
<ul>
<li class="ind0"><strong>前棒性質</strong>：前棒是強趨勢棒 → 內包棒更有可能是短暫停頓而非反轉</li>
<li class="ind0"><strong>內包棒大小</strong>：越小的內包棒（相對前棒），壓力蓄積越充分</li>
<li class="ind0"><strong>位置</strong>：在關鍵 S/R 位的內包棒，突破時信號更強</li>
<li class="ind0"><strong>持續時間</strong>：多根連續內包棒（ii 型、iii 型）信號更強</li>
</ul>
<p>---</p>`
            },
            {
                "title": "連續內包棒（ii 型、iii 型）",
                "html": `<h3>ii 型（兩根連續內包棒）</h3>
<ul>
<li class="ind0">第二根被第一根包含，第三根突破時進場</li>
<li class="ind0">比單根內包棒更強，因為壓力蓄積時間更長</li>
<li class="ind0">止損：整個 ii 結構的另一端 + 1 tick（範圍更大，需確認盈虧比）</li>
</ul>
<h3>iii 型（三根連續內包棒）</h3>
<ul>
<li class="ind0">罕見，但突破時動能通常很強</li>
<li class="ind0">識別：連續三根棒的高低點逐漸收縮</li>
</ul>
<div class="callout co-example"><div class="cot">實戰應用</div><p>ii 型和 iii 型在加密貨幣的 4H 圖上非常常見，尤其在重要支撐/阻力位附近的盤整。突破時往往是大行情的起點。</p></div>
<p>---</p>`
            },
            {
                "title": "外包棒（Outside Bar / Engulfing Bar） ^外包棒",
                "html": `<h3>定義</h3>
<p>當根棒的高點 > 前棒高點，<strong>且</strong>低點 < 前棒低點（完全包含前棒）</p>
<h3>本質</h3>
<p>外包棒是 H2/L2 的<strong>壓縮版</strong>——在單根棒內同時完成了：</p>
<ul>
<li class="ind0">先向下突破前棒低點（= L1）</li>
<li class="ind0">再向上突破前棒高點（= H2）（若最終收盤在上半部）</li>
</ul>
<h3>四種外包棒的解讀</h3>
<table>
<thead><tr><th>收盤位置</th><th>含義</th><th>信號</th></tr></thead><tbody>
<tr><td>上半部（> 中位）</td><td>多頭最終控盤</td><td>做多信號</td></tr>
<tr><td>下半部（< 中位）</td><td>空頭最終控盤</td><td>做空信號</td></tr>
<tr><td>在前棒高點附近</td><td>多頭突破確認</td><td>強做多信號</td></tr>
<tr><td>在前棒低點附近</td><td>空頭突破確認</td><td>強做空信號</td></tr>
</tbody></table>
<h3>外包棒的操作</h3>
<ul>
<li class="ind0">做多：等收盤後確認收在上半部，次棒突破外包棒高點進場</li>
<li class="ind0">做空：等收盤後確認收在下半部，次棒跌破外包棒低點進場</li>
<li class="ind0">止損：整根外包棒的另一端 + 1 tick</li>
</ul>
<h3>外包棒的風險提示</h3>
<ul>
<li class="ind0">外包棒天然止損空間大（涵蓋兩根棒的範圍）</li>
<li class="ind0">盈虧比必須仔細確認（目標至少為止損的 2 倍）</li>
<li class="ind0">在區間中間出現的外包棒通常只是噪音，不建議操作</li>
</ul>
<p>---</p>`
            },
            {
                "title": "剃頭棒（Shaved Bars）",
                "html": `<h3>定義與分類</h3>
<ul>
<li class="ind0"><strong>剃頭（Shaved Top）</strong>：無上影線，代表多頭自開盤後一路控盤至收盤，沒有給空頭任何機會</li>
<li class="ind0"><strong>剃尾（Shaved Bottom）</strong>：無下影線，代表空頭完全主導</li>
<li class="ind0"><strong>雙向去影線（Shaved Both Ends）</strong>：無任何影線，最強的趨勢棒，多空完全沒有掙扎</li>
</ul>
<h3>交易含義</h3>
<ul>
<li class="ind0">剃頭棒後，下一根棒繼續突破其高點 = 強烈的趨勢延續信號</li>
<li class="ind0">在趨勢中出現剃頭棒 → 不要逆勢，順勢追高</li>
<li class="ind0">在回調末端出現剃頭棒 → H1 信號（第一次突破信號）</li>
</ul>
<h3>剃頭棒的警示用法</h3>
<ul>
<li class="ind0">在高潮末端出現異常大的剃頭棒 → 動能過熱，可能即將反轉</li>
<li class="ind0">連續多根剃頭棒後 → 回調將比正常更深（積累了更多未回撤的多頭）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "雙棒反轉（Two-Bar Reversal） ^雙棒反轉",
                "html": `<h3>定義</h3>
<p>兩根方向相反、大小相近（實體互相抵消）的連續趨勢棒：</p>
<ul>
<li class="ind0">第一根：強烈的順勢趨勢棒（代表最後的高潮推進）</li>
<li class="ind0">第二根：強烈的逆勢趨勢棒（代表反方向的全面接管）</li>
</ul>
<h3>理想形態</h3>
<ul>
<li class="ind0">兩根棒大小基本相同（第二根 ≈ 第一根的 80%~120%）</li>
<li class="ind0">第一根：收盤接近最高/低點</li>
<li class="ind0">第二根：收盤接近最低/高點</li>
<li class="ind0">兩根棒之間沒有缺口（緊密相連）</li>
</ul>
<h3>操作方式</h3>
<ul>
<li class="ind0">做多（多頭雙棒反轉）：在第二根棒（多頭棒）收盤後，等下一棒突破雙棒結構的<strong>最高點</strong>時買入</li>
<li class="ind0">做空（空頭雙棒反轉）：在第二根棒（空頭棒）收盤後，等下一棒跌破雙棒結構的<strong>最低點</strong>時賣出</li>
<li class="ind0">止損：雙棒結構的另一端 + 1 tick</li>
</ul>
<h3>最佳出現位置</h3>
<li class="numbered">關鍵 S/R 位（前高/低、整數關口）</li>
<li class="numbered">趨勢末端的高潮之後</li>
<li class="numbered">通道線觸碰之後</li>
<li class="numbered">楔形最後一推之後</li>
<h3>雙棒反轉失敗的含義</h3>
<p>若雙棒反轉信號被打損（對方突破整個雙棒結構）→ 強烈的原方向延續信號</p>
<p>---</p>`
            },
            {
                "title": "三棒反轉（Three-Bar Reversal）",
                "html": `<h3>定義</h3>
<p>三根 K 線中，第一根與第三根構成雙棒反轉，中間棒通常是十字星或小實體棒：</p>
<ul>
<li class="ind0">第一根：強順勢推進</li>
<li class="ind0">第二根：短暫猶豫（十字星或小棒）</li>
<li class="ind0">第三根：強逆勢推進（方向與第一根相反，大小相近）</li>
</ul>
<h3>與雙棒反轉的區別</h3>
<ul>
<li class="ind0">三棒反轉多了一次「短暫猶豫後確認」的過程</li>
<li class="ind0">勝率略高於雙棒反轉（有更多的市場確認）</li>
<li class="ind0">但出現頻率較低</li>
</ul>
<h3>進場方式</h3>
<ul>
<li class="ind0">等第三根棒確認收盤後，次棒突破第三根棒的高/低點進場</li>
<li class="ind0">或在三棒結構確認後直接進場（激進）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "小實體棒（Small Bar）",
                "html": `<h3>何時可以用小實體棒作為信號？</h3>
<h4>有效的情況</h4>
<ul>
<li class="ind0">出現在關鍵 S/R 位（小棒代表攻方能量耗盡於關鍵位）</li>
<li class="ind0">連續多根小棒在同一區域（積累的壓力等待釋放）</li>
<li class="ind0">小棒緊接大趨勢棒後（大棒後的暫停）</li>
<li class="ind0">在均線處出現的小棒（動態 S/R 確認）</li>
</ul>
<h4>無效的情況</h4>
<ul>
<li class="ind0">在趨勢中段孤立出現的小棒</li>
<li class="ind0">在大量重疊區域（鐵絲網）中的小棒</li>
<li class="ind0">小棒太小（止損空間太小，容易被噪音打損）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "缺口棒（Gap Bar）",
                "html": `<h3>定義</h3>
<p>K 線的開盤完全高於（或低於）前一根棒的高點（或低點），形成真實的價格缺口</p>
<h3>多頭缺口棒（Bullish Gap Bar）</h3>
<ul>
<li class="ind0">開盤完全高於前棒最高點</li>
<li class="ind0">代表：多頭在休市後強力反應，直接跳空開盤</li>
<li class="ind0">信號：若後續棒繼續跟進 → 強烈上行信號</li>
<li class="ind0">失敗：缺口後立即回填 → 假突破，強烈做空信號</li>
</ul>
<h3>空頭缺口棒（Bearish Gap Bar）</h3>
<ul>
<li class="ind0">開盤完全低於前棒最低點</li>
<li class="ind0">代表：空頭在休市後強力反應，直接跳空低開</li>
<li class="ind0">完全對稱的空頭邏輯</li>
</ul>
<h3>缺口的類型（PA 視角）</h3>
<ul>
<li class="ind0"><strong>突破缺口</strong>：突破重要 S/R 後的缺口，通常不回填（最可靠）</li>
<li class="ind0"><strong>持續缺口</strong>：趨勢中段的加速缺口，確認趨勢動能強</li>
<li class="ind0"><strong>衰竭缺口</strong>：趨勢末端的最後加速，通常隨後回填（高潮的一種）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "均線缺口棒（Moving Average Gap Bar）",
                "html": `<h3>定義</h3>
<p>整根棒（包括影線）完全在均線（通常是 20 EMA）的一側，<strong>未觸碰均線</strong></p>
<h3>含義</h3>
<ul>
<li class="ind0">均線是一種「磁鐵」——價格長期遠離均線後，有回歸均線的傾向</li>
<li class="ind0">均線缺口棒的出現，代表<strong>當前與均線距離過大</strong>，均線回歸壓力增加</li>
<li class="ind0">在趨勢中：均線缺口棒是高潮警示（過度延伸）</li>
<li class="ind0">在回調中：均線缺口棒出現在均線另一側 → 回調可能更深</li>
</ul>
<h3>實戰應用</h3>
<ul>
<li class="ind0">若出現均線缺口棒，不要追高/追低</li>
<li class="ind0">等待回調至均線附近的 H2/L2 信號</li>
<li class="ind0">均線缺口棒後的第一個觸碰均線的棒，通常是很好的進場機會</li>
</ul>
<p>---</p>`
            },
            {
                "title": "有明顯影線的棒（Prominent Tails）",
                "html": `<h3>影線的方向性解讀</h3>
<h4>長上影線</h4>
<ul>
<li class="ind0">多頭試圖推高但被空頭強力擊退</li>
<li class="ind0">上影線越長 → 空頭反擊力度越大</li>
<li class="ind0">在上升趨勢中出現長上影線 → 空頭開始積極進入</li>
<li class="ind0">在阻力位出現長上影線 → 阻力有效確認，潛在的做空位置</li>
</ul>
<h4>長下影線</h4>
<ul>
<li class="ind0">空頭試圖壓低但被多頭強力擊退</li>
<li class="ind0">下影線越長 → 多頭反擊力度越大</li>
<li class="ind0">在支撐位出現長下影線 → 支撐有效確認，潛在的做多位置</li>
</ul>
<h4>雙向長影線（十字星）</h4>
<ul>
<li class="ind0">多空雙方均被擊退，方向不確定</li>
<li class="ind0">需要後續棒確認方向</li>
</ul>
<h3>影線作為信號的應用</h3>
<ul>
<li class="ind0">在關鍵位出現長影線 → 下一棒突破影線「被擊退那一端」的相反方向進場</li>
<li class="ind0">例：在支撐位出現長下影線 → 下一棒突破該長影線棒的高點時做多（等於 H1/H2 確認）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "旗形（Bull Flag / Bear Flag）",
                "html": `<h3>多頭旗形（Bull Flag）</h3>
<ul>
<li class="ind0">形成：強力上漲（旗桿）後，橫向或微幅下行的整理（旗子）</li>
<li class="ind0">識別：整理期間 K 線重疊，成交量萎縮，無新低（或新低極小）</li>
<li class="ind0">進場：旗頂突破（旗子的最高點被突破 + 跟進棒確認）</li>
<li class="ind0">止損：旗底（整理期間的最低點）下方 1 tick</li>
<li class="ind0">目標：等距測量（旗桿高度 = 突破後的預期推進）</li>
</ul>
<h3>空頭旗形（Bear Flag）</h3>
<ul>
<li class="ind0">完全對稱的空頭版本</li>
<li class="ind0">下跌後橫向或微幅上行整理，旗底突破做空</li>
</ul>
<h3>旗形的變體</h3>
<ul>
<li class="ind0"><strong>緊密旗形（Tight Flag）</strong>：整理期間 K 線非常緊密，只有 3~5 根棒，代表趨勢非常強</li>
<li class="ind0"><strong>寬幅旗形（Broad Flag）</strong>：整理期間較長（10~20 根棒），趨勢動能稍弱但仍有效</li>
<li class="ind0"><strong>傾斜旗形</strong>：旗子本身有輕微逆勢斜率（最常見的旗形）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "楔形作為信號棒背景（Three-Push as Signal Context）",
                "html": `<h3>三推楔形的識別</h3>
<ul>
<li class="ind0">三次向同一方向的推進，每次力度遞減（斜率越來越平）</li>
<li class="ind0">每次推進的幅度小於前次（可量化：第三推 < 第二推 < 第一推）</li>
<li class="ind0">上下沿逐漸收斂（楔形形狀）</li>
</ul>
<h3>在趨勢末端的三推楔形</h3>
<ul>
<li class="ind0">代表主趨勢動能衰竭</li>
<li class="ind0">第三推完成後出現反轉棒 → 逆勢進場</li>
<li class="ind0">止損：第三推的極值 + 1 tick</li>
<li class="ind0">目標：至少等距（三推的起點附近）</li>
</ul>
<h3>在回調中的三推楔形</h3>
<ul>
<li class="ind0">代表回調動能衰竭（逆著主趨勢的三推楔形）</li>
<li class="ind0">第三推完成後的反轉棒 = 順著主趨勢的 H2/L2</li>
<li class="ind0">這是風報比最好的進場形態之一</li>
</ul>
<p>---</p>`
            },
            {
                "title": "均線測試棒（Moving Average Test Bar）",
                "html": `<h3>條件</h3>
<ul>
<li class="ind0">趨勢中出現回調</li>
<li class="ind0">回調觸碰 20 EMA（動態 S/R）</li>
<li class="ind0">在觸碰均線的位置出現強反轉棒</li>
<li class="ind0">反轉棒後的 H2 信號</li>
</ul>
<h3>三重確認進場</h3>
<p>這是 PA 中最可靠的進場形態之一，同時具備：</p>
<li class="numbered">主趨勢背景（方向確認）</li>
<li class="numbered">均線動態 S/R（位置確認）</li>
<li class="numbered">H2 信號（時機確認）</li>
<h3>均線測試失敗的含義</h3>
<ul>
<li class="ind0">回調深穿均線且在另一側收盤 → 趨勢減弱</li>
<li class="ind0">多次測試均線且均未能強力反彈 → 均線從支撐轉為阻力（趨勢可能反轉）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "趨勢線測試棒",
                "html": `<h3>原則</h3>
<ul>
<li class="ind0">回調觸碰趨勢線時出現的反轉棒 → 趨勢線作為動態支撐/阻力的進場機會</li>
<li class="ind0">第一次測試趨勢線最可靠（市場第一次「記得」這條線）</li>
<li class="ind0">第二、三次測試：逐漸降低可靠性（每次測試都在消耗該趨勢線的支撐力）</li>
</ul>
<h3>進場要求</h3>
<ul>
<li class="ind0">觸碰趨勢線的那根棒出現強反轉棒</li>
<li class="ind0">後續棒突破反轉棒高/低點</li>
<li class="ind0">最好同時配合 H2/L2 的計數（更強的多重確認）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "信號棒的通用評估清單",
                "html": `<p>在決定是否進場前，對每個信號棒進行以下 7 項評估：</p>
<table>
<thead><tr><th>評估項目</th><th>強信號</th><th>弱信號</th></tr></thead><tbody>
<tr><td>1. 位置</td><td>關鍵 S/R、均線、趨勢線</td><td>無特殊位置</td></tr>
<tr><td>2. 收盤</td><td>在信號方向的遠端</td><td>在中位</td></tr>
<tr><td>3. 影線</td><td>逆方向影線長（表示對方已被擊退）</td><td>信號方向留有長影線</td></tr>
<tr><td>4. 實體</td><td>佔整棒 > 60%</td><td>佔整棒 < 40%</td></tr>
<tr><td>5. 前棒</td><td>強順趨勢方向棒（被逆轉的那方）</td><td>方向不明的十字星</td></tr>
<tr><td>6. 背景</td><td>主趨勢一致，H2/L2 位置</td><td>交易區間中段</td></tr>
<tr><td>7. 止損</td><td>合理（< 1 ATR）</td><td>過大（> 1.5 ATR）</td></tr>
</tbody></table>
<p><strong>5 項以上為強 = 進場；3 項以下為強 = 放棄</strong></p>
<div class="callout co-tip"><div class="cot">實戰心訣</div><p>最好的信號棒，看起來「像是說反了」——在下跌中突然出現一根強陽線、在支撐位出現帶長下影線的棒。這些「反直覺」的棒往往是最好的進場信號。</p></div>`
            }
        ],
        "id": "ch05"
    },
    {
        "title": "Part I Ch.07–12",
        "sub": "外包棒到形態演變 · pp. 155–189",
        "sections": [
            {
                "title": "外包棒的六種情境分析",
                "html": `<h3>情境一：強趨勢中的順勢外包棒</h3>
<ul>
<li class="ind0">趨勢推進中，外包棒突破前棒兩端後收盤在趨勢方向</li>
<li class="ind0">意義：加速信號，趨勢動能增強</li>
<li class="ind0">操作：順勢進場或持倉不動</li>
</ul>
<h3>情境二：回調末端的多頭外包棒</h3>
<ul>
<li class="ind0">多頭趨勢回調後，外包棒收盤在上半部</li>
<li class="ind0">意義：H2 的等效信號，是最可靠的做多信號之一</li>
<li class="ind0">操作：次棒突破外包棒高點後做多</li>
</ul>
<h3>情境三：回調末端的空頭外包棒</h3>
<ul>
<li class="ind0">空頭趨勢反彈後，外包棒收盤在下半部</li>
<li class="ind0">意義：L2 的等效信號</li>
<li class="ind0">操作：次棒跌破外包棒低點後做空</li>
</ul>
<h3>情境四：關鍵 S/R 位的假突破確認</h3>
<ul>
<li class="ind0">價格突破某關鍵位後，外包棒收盤回到突破位的另一側</li>
<li class="ind0">意義：假突破的強力確認，被套者將大量認損</li>
<li class="ind0">操作：外包棒收盤確認後，次棒進場逆向操作，止損設在外包棒極值</li>
</ul>
<h3>情境五：高潮後的第一個反向外包棒</h3>
<ul>
<li class="ind0">趨勢加速（高潮）後出現的第一根外包棒</li>
<li class="ind0">若外包棒收盤在逆趨勢方向 → 反轉的早期確認</li>
<li class="ind0">操作：視背景決定是否逆勢進場，至少應開始考慮平倉或止盈</li>
</ul>
<h3>情境六：交易區間中段的外包棒</h3>
<ul>
<li class="ind0">在多空力量均衡的區間中段出現</li>
<li class="ind0">意義：通常只是噪音，多空雙方均未確認優勢</li>
<li class="ind0">操作：<strong>不操作</strong>，觀望</li>
</ul>
<p>---</p>`
            },
            {
                "title": "外包棒的特殊變體",
                "html": `<h3>「孕線後外包」組合</h3>
<ul>
<li class="ind0">先出現一根內包棒（孕線），然後出現外包棒</li>
<li class="ind0">代表：先壓縮（等待），後爆發（確認方向）</li>
<li class="ind0">若外包棒收盤在強方向 → 信號質量高於單獨外包棒</li>
</ul>
<h3>連續兩根外包棒</h3>
<ul>
<li class="ind0">罕見但意義特殊</li>
<li class="ind0">代表市場極度混亂，多空反覆爭奪</li>
<li class="ind0">通常最終的方向是第二根外包棒的收盤方向</li>
<li class="ind0">操作難度高，建議等待更明確的後續確認棒</li>
</ul>
<p>---</p>`
            },
            {
                "title": "外包棒的風險管理要點",
                "html": `<p>外包棒是 PA 體系中<strong>止損空間最大</strong>的信號類型，因為它涵蓋了兩根棒的整個範圍：</p>
<ul>
<li class="ind0">做多外包棒的止損 = 外包棒低點下方 1 tick</li>
<li class="ind0">止損空間通常是一般信號棒的 1.5~2 倍</li>
</ul>
<h3>必須確認的盈虧比計算</h3>
<pre><code>止損空間 = 外包棒高點 - 外包棒低點 + 1 tick
目標最低要求 = 止損空間 × 2
若最近的合理目標位 < 止損空間 × 2 → 放棄這筆交易</code></pre>
<div class="callout co-danger"><div class="cot">外包棒的最大陷阱</div><p>外包棒看起來「很清楚、很強」，容易讓人衝動進場。但如果它出現在區間中段，或者目標位太近，就是虧損的根源。永遠先算盈虧比，再決定是否進場。</p></div>
<p>---</p>`
            },
            {
                "title": "為何收盤位置是最重要的數據",
                "html": `<p>一根 K 線的全部博弈，最終以<strong>收盤價</strong>決勝負：</p>
<ul>
<li class="ind0">不管這根棒中間如何波動，收盤代表「這段時間後，市場的最終共識是什麼」</li>
<li class="ind0">多頭在這段時間中是否取得了最終控制？ → 看收盤是否在上半部</li>
</ul>
<p>---</p>`
            },
            {
                "title": "收盤位置的精細解讀",
                "html": `<h3>五分法（更精細的分析）</h3>
<table>
<thead><tr><th>位置</th><th>意義</th></tr></thead><tbody>
<tr><td>最高點（無上影線）</td><td>多頭完全控制，強烈順勢信號</td></tr>
<tr><td>上 20%（接近最高）</td><td>多頭強勢，下棒高機率繼續上行</td></tr>
<tr><td>上半部（40%~60%）</td><td>多頭輕微優勢，需配合背景判斷</td></tr>
<tr><td>下半部（40%~60%）</td><td>空頭輕微優勢</td></tr>
<tr><td>下 20%（接近最低）</td><td>空頭強勢，下棒高機率繼續下行</td></tr>
<tr><td>最低點（無下影線）</td><td>空頭完全控制，強烈順勢信號</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "特殊情境解讀",
                "html": `<h3>高潮棒的收盤位置</h3>
<ul>
<li class="ind0">急速大陽線後，若收盤在中位或下半部 → 多頭在最後時刻失去控制，高潮反轉風險高</li>
<li class="ind0">急速大陰線後，若收盤在中位或上半部 → 空頭在最後時刻失去控制，反彈可能已開始</li>
</ul>
<h3>突破棒的收盤位置</h3>
<ul>
<li class="ind0">向上突破棒收盤在上半部 → 突破有效，多頭控盤</li>
<li class="ind0">向上突破棒收盤回到突破位下方（長上影線）→ 假突破確認，做空信號</li>
</ul>
<h3>反轉信號棒的收盤位置</h3>
<ul>
<li class="ind0">多頭反轉棒收盤越靠近最高點 → 信號越強</li>
<li class="ind0">若多頭反轉棒收盤在中位 → 多頭未完全控制，信號偏弱，等待更多確認</li>
</ul>
<h3>回調棒的收盤位置</h3>
<ul>
<li class="ind0">回調棒（逆勢棒）收盤在上半部（做多背景）→ 空頭沒有控制住，回調可能已結束</li>
<li class="ind0">回調棒收盤在下半部（做多背景）→ 空頭仍在控制，回調可能繼續</li>
</ul>
<p>---</p>`
            },
            {
                "title": "收盤位置與進場決策的整合",
                "html": `<p>在決定是否進場時，同時評估：</p>
<li class="numbered"><strong>信號棒的收盤</strong>：在正確方向的遠端？</li>
<li class="numbered"><strong>進場棒的收盤</strong>：確認了信號棒的方向？</li>
<li class="numbered"><strong>最近 3~5 根棒的收盤趨勢</strong>：是否呈現一致的方向性？</li>
<p>若三者一致 → 高信心進場</p>
<p>若有一項不一致 → 降低倉位或等待更多確認</p>
<p>---</p>`
            },
            {
                "title": "反向圖表（Inverse Charts）的用途",
                "html": `<h3>心理框架統一</h3>
<ul>
<li class="ind0">人類的思維天然偏向「多頭視角」，看到上漲圖形比看到下跌圖形更容易做決策</li>
<li class="ind0">反向圖表：將做空品種（或空方行情）的 K 線圖「翻轉」，讓所有分析都在多頭框架下進行</li>
<li class="ind0">好處：消除「逆勢做空」的心理障礙，用一套一致的思維框架處理所有方向</li>
</ul>
<h3>在加密市場的應用</h3>
<ul>
<li class="ind0">分析做空 BTC 時：觀察 BTC 的反向圖（或空頭 ETF）</li>
<li class="ind0">USDT.D（USDT 佔比）：與 BTC 呈負相關，上升 = BTC 下跌；可用做空 BTC 的替代分析工具</li>
</ul>
<p>---</p>`
            },
            {
                "title": "相關市場分析（Correlated Markets）",
                "html": `<h3>強正相關資產</h3>
<ul>
<li class="ind0">BTC / ETH：高度相關，一個突破通常預示另一個即將跟進</li>
<li class="ind0">大盤指數（S&P 500 / NASDAQ）/ 科技股：高度相關</li>
<li class="ind0">同類資產的互相驗證：若 ETH 先突破，BTC 尚未突破 → BTC 突破的機率更高</li>
</ul>
<h3>負相關資產</h3>
<ul>
<li class="ind0">BTC / USDT.D：USDT 佔比上升 = 資金流出風險資產 = BTC 下跌</li>
<li class="ind0">股票 / 黃金：避險情緒上升時黃金漲、股票跌</li>
</ul>
<h3>跨市場共振進場</h3>
<p>當多個相關品種同時出現相同方向的信號（如都出現 H2），進場信號的有效性大幅提升。</p>
<div class="callout co-tip"><div class="cot">實戰應用</div><p>在 BTC 分析中，若 ETH 已率先突破某關鍵位，且 USDT.D 同時下跌確認，這是非常強力的多重確認。</p></div>
<p>---</p>`
            },
            {
                "title": "為何第二次進場比第一次可靠",
                "html": `<h3>主力的「假動作機制」</h3>
<p>市場中存在大量尋找 H1/L1 機會的交易者。主力了解這一點，因此會：</p>
<li class="numbered">讓 H1 信號出現，吸引追隨者進場</li>
<li class="numbered">立即反向，讓 H1 進場者被套</li>
<li class="numbered">被套者認損出場 → 這些出場訂單成為主力接下來推進的燃料</li>
<li class="numbered">現在價格回到更有利的位置，主力才真正大量進場（= H2 出現）</li>
<p>因此 H2 代表：</p>
<ul>
<li class="ind0">空頭做了兩次嘗試都沒有能力繼續壓低 → 空頭確實沒有後勁</li>
<li class="ind0">大量做空者在這兩次嘗試中已被清洗掉</li>
<li class="ind0">主力真正入場的時機</li>
</ul>
<p>---</p>`
            },
            {
                "title": "H2/L2 的詳細操作規則",
                "html": `<h3>計數規則</h3>
<ul>
<li class="ind0">從最近的明顯波段高/低點開始計數</li>
<li class="ind0">H1 = 回調中的第一次向上突破（不管高點在哪）</li>
<li class="ind0">H2 = H1 之後再度回調，然後出現的第二次向上突破</li>
</ul>
<h3>進場細節</h3>
<ul>
<li class="ind0"><strong>激進進場</strong>：H2 信號棒收盤時直接入場（不等進場棒突破）</li>
</ul>
<p>  - 優點：進場價格更好</p>
<p>  - 缺點：可能在真正突破前入場，若後續棒反向則被套</p>
<ul>
<li class="ind0"><strong>保守進場</strong>：H2 信號棒確認後，等下一棒突破信號棒高點再入場</li>
</ul>
<p>  - 優點：確認了突破意圖</p>
<p>  - 缺點：進場價格差，止損距離相同但入場位更高</p>
<h3>止損設置</h3>
<ul>
<li class="ind0">止損：H2 信號棒的低點下方 1 tick</li>
<li class="ind0">若 H2 信號棒太長 → 考慮使用 H2 之前的那個低點（即回調低點）作為止損</li>
</ul>
<h3>H2 的等效形態</h3>
<ul>
<li class="ind0"><strong>外包棒（收盤在上半部）</strong>：壓縮版 H2</li>
<li class="ind0"><strong>箱體突破（多根小棒後的突破）</strong>：延伸版 H2</li>
</ul>
<p>---</p>`
            },
            {
                "title": "失敗的 H2 = 強力的 L1",
                "html": `<p>當 H2 信號棒被打損（跌破其低點）：</p>
<ul>
<li class="ind0">代表：「多頭做了兩次嘗試都失敗了」</li>
<li class="ind0">這本身就是強力的空頭信號（L1 的強化版）</li>
<li class="ind0">許多被套的多頭者此時認損出場 → 推動行情下跌</li>
</ul>
<div class="callout co-example"><div class="cot">這個反向應用非常重要</div><p>若你在 H2 進場做多被打損，不要沮喪。這個失敗信號本身就是做空的機會。立即分析是否要反手做空（當然要重新評估整體背景）。</p></div>
<p>---</p>`
            },
            {
                "title": "在交易區間中的 H2/L2",
                "html": `<h3>區間頂部的 L2（最強做空信號）</h3>
<ul>
<li class="ind0">交易區間上邊界 + L2 出現 = 兩個因素疊加</li>
<li class="ind0">區間慣性（大多數突破失敗）+ L2 的二次確認 = 高概率的做空機會</li>
</ul>
<h3>區間底部的 H2（最強做多信號）</h3>
<ul>
<li class="ind0">交易區間下邊界 + H2 出現 = 最強的做多信號之一</li>
<li class="ind0">目標：至少到區間中部（此處平半倉）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "錯過進場的四種情況",
                "html": `<li class="numbered"><strong>信號棒出現時你不在電腦前</strong> → 等待下一個機會，不要追</li>
<li class="numbered"><strong>信號棒已收盤，行情已移動</strong> → 評估是否還能用限價回測進場</li>
<li class="numbered"><strong>進場棒已是強趨勢棒，止損太遠</strong> → 切換小框架找新的信號棒</li>
<li class="numbered"><strong>猶豫不決，錯過進場棒</strong> → 接受錯過，等下一個機會</li>
<p>---</p>`
            },
            {
                "title": "四種延遲進場的解決方案",
                "html": `<h3>方案一：限價掛單（Limit Order Entry）</h3>
<ul>
<li class="ind0">預先在預期的支撐/阻力位置掛限價單</li>
<li class="ind0">當行情回到掛單位置時自動成交</li>
<li class="ind0">優點：進場價格好，止損距離小</li>
<li class="ind0">缺點：可能被「吃掉後繼續反向」——掛單被成交，然後繼續往相反方向移動</li>
<li class="ind0">適合：在明確的 S/R 位掛單，而非任意位置</li>
</ul>
<h3>方案二：突破後等回測（Pullback Entry）</h3>
<ul>
<li class="ind0">行情突破後不追，等第一次回調（回測突破位）再進場</li>
<li class="ind0">優點：止損更小（比追高入場止損距離更短），心理更穩</li>
<li class="ind0">缺點：強趨勢中可能沒有回調，完全錯過</li>
<li class="ind0">適合：突破動能中等、行情有一定波動性的情況</li>
</ul>
<h3>方案三：縮小時間框架（Zoom In）</h3>
<ul>
<li class="ind0">切換至更小的時間框架（如 4H → 1H，或 1H → 15m）</li>
<li class="ind0">在小框架上找新的 H2/L2 進場點</li>
<li class="ind0">優點：止損更精確，盈虧比更好</li>
<li class="ind0">缺點：小框架噪音更多，需要更高的判斷力</li>
</ul>
<h3>方案四：接受不參與</h3>
<ul>
<li class="ind0">有些機會就是太晚了，強行入場只會帶來不必要的風險</li>
<li class="ind0">「不虧錢本身就是成功」</li>
<li class="ind0">市場永遠有下一個機會，永遠不會是「最後一次」</li>
</ul>
<p>---</p>`
            },
            {
                "title": "追高/追低的心理陷阱",
                "html": `<h3>常見心理過程</h3>
<li class="numbered">看到行情急速上漲 → 「不追的話來不及了」</li>
<li class="numbered">追高買入 → 行情小回調 → 止損被觸發</li>
<li class="numbered">止損後行情繼續上漲 → 懊悔 → 再次追高</li>
<li class="numbered">這次真的在高點進場 → 更大的虧損</li>
<h3>正確心態</h3>
<ul>
<li class="ind0">任何行情都只是整個趨勢中的一小段</li>
<li class="ind0">強趨勢不會「一去不回」，一定有回調的機會</li>
<li class="ind0">若真的一去不回（沒有任何回調），那是少見的極端行情，此時不參與反而是對的</li>
</ul>
<div class="callout co-quote"><div class="cot">QUOTE</div><p>「等待最保守的時機。不虧錢本身就是一種成功。」—— Al Brooks</p></div>
<p>---</p>`
            },
            {
                "title": "形態的動態性——最核心的概念",
                "html": `<p>市場是<strong>動態的</strong>，沒有任何形態是靜態的：</p>
<ul>
<li class="ind0">你看到的「當前形態」，可能在下一根棒後就變成了完全不同的形態</li>
<li class="ind0">這不是分析錯誤，而是市場的本質</li>
<li class="ind0">成功的交易者不是「預測對了形態」，而是「在形態演變時能快速調整判斷」</li>
</ul>
<p>---</p>`
            },
            {
                "title": "形態演變的主要路徑",
                "html": `<h3>簡單回調 → 失敗 → 演變</h3>
<pre><code>簡單回調（H2 出現但被打損）
    ↓
複雜回調（楔形、三推、旗形）
    ↓ （若繼續失敗）
交易區間（趨勢動能完全消耗）
    或
末端旗形 → 最後一段順勢推進後反轉</code></pre>
<h3>反轉形態 → 失敗 → 演變</h3>
<pre><code>反轉形態（如雙頂出現）
    ↓ （若突破失敗）
交易區間（多空力量均衡）
    或
趨勢延續（「假反轉」確認後末端旗形加速）</code></pre>
<h3>突破 → 失敗 → 演變</h3>
<pre><code>突破（如向上突破區間頂部）
    ↓ （若回收回區間）
假突破 → 強烈的反向信號
    ↓ （若假突破後行情沒有繼續走）
重新擴大交易區間（上邊界提高）</code></pre>
<p>---</p>`
            },
            {
                "title": "多解性（Ambiguity）的實戰處理",
                "html": `<h3>接受多解性</h3>
<ul>
<li class="ind0">同一張圖，永遠可以找到支持多頭和支持空頭的論點</li>
<li class="ind0">這不是弱點，而是市場的本質</li>
<li class="ind0">強迫自己選擇「唯一正確的解讀」反而會增加心理壓力</li>
</ul>
<h3>多解性的三種應對策略</h3>
<h4>策略一：概率主義</h4>
<ul>
<li class="ind0">描述「可能性 A（X% 機率）vs. 可能性 B（Y% 機率）」</li>
<li class="ind0">在更高機率的方向進場，同時設好「若 B 實現的止損位」</li>
</ul>
<h4>策略二：等待關鍵確認棒</h4>
<ul>
<li class="ind0">識別「若出現這種 K 線形態，則確認 A 方向」</li>
<li class="ind0">等待這根確認棒出現後再進場</li>
<li class="ind0">錯過前段行情，但進場時不確定性大幅降低</li>
</ul>
<h4>策略三：分批進場</h4>
<ul>
<li class="ind0">在初始信號出現時進半倉</li>
<li class="ind0">等確認信號出現後再加另外半倉</li>
<li class="ind0">若初始信號被打損，損失只有預設風險的一半</li>
</ul>
<p>---</p>`
            },
            {
                "title": "失效條件（What Would Invalidate This Setup?）",
                "html": `<p>在每次進場前，必須明確：</p>
<ul>
<li class="ind0"><strong>這個進場的邏輯依賴什麼假設？</strong></li>
<li class="ind0"><strong>如果這個假設被否定（出現什麼 K 線形態），我應該立刻離場？</strong></li>
</ul>
<h3>例子：在 H2 進場做多</h3>
<ul>
<li class="ind0">邏輯假設：「趨勢仍然有效，多頭力量仍然強勢」</li>
<li class="ind0">失效條件：「若 H2 信號棒的低點被跌破 → 假設失效，立刻止損」</li>
</ul>
<h3>為何失效條件比目標更重要</h3>
<ul>
<li class="ind0">目標是「希望發生的事」，你無法控制</li>
<li class="ind0">失效條件是「需要保護的事」，你可以控制（設好止損就自動執行）</li>
<li class="ind0">先想失效條件，後想目標 = 先保護本金，後追求獲利</li>
</ul>
<div class="callout co-important"><div class="cot">每次進場前必問</div><p>「什麼情況會讓我的判斷是錯的？」只有能清晰回答這個問題，才算完成了進場前的評估。</p></div>`
            }
        ],
        "id": "ch07"
    },
    {
        "title": "Part II Ch.13–17",
        "sub": "趨勢線與通道 · pp. 195–274",
        "sections": [
            {
                "title": "有效趨勢線的畫法原則",
                "html": `<h3>基礎畫法</h3>
<ul>
<li class="ind0"><strong>上升趨勢線</strong>：連接最近兩個或以上的顯著<strong>波段低點（Swing Low）</strong></li>
<li class="ind0"><strong>下降趨勢線</strong>：連接最近兩個或以上的顯著<strong>波段高點（Swing High）</strong></li>
<li class="ind0">「顯著」的定義：在你選擇的時間框架下，圖表上明確可見的轉折點</li>
</ul>
<h3>影線 vs. 實體</h3>
<ul>
<li class="ind0"><strong>最佳畫法（Brooks 偏好）</strong>：盡量切過最多棒的<strong>收盤/開盤（實體端點）</strong></li>
<li class="ind0"><strong>替代畫法</strong>：連接影線的極值</li>
<li class="ind0"><strong>核心原則</strong>：選擇讓<strong>最多棒都接觸（或接近）這條線</strong>的畫法</li>
<li class="ind0">允許少數 K 線的影線輕微穿越趨勢線（< 3 根），但不允許<strong>實體</strong>突破</li>
</ul>
<h3>兩種趨勢線並存</h3>
<p>同一段趨勢，通常可以畫出兩條有效的趨勢線：</p>
<li class="numbered"><strong>陡峭趨勢線</strong>：連接最近的兩個低點，斜率較陡</li>
<li class="numbered"><strong>平緩趨勢線</strong>：連接時間跨度更長的低點，斜率較緩</li>
<p>兩條線都有效，都要標記。<strong>陡峭趨勢線先被突破</strong>（代表趨勢開始減速），<strong>平緩趨勢線被突破</strong>（代表趨勢可能反轉）。</p>
<p>---</p>`
            },
            {
                "title": "趨勢線的功能",
                "html": `<h3>功能一：動態支撐/阻力</h3>
<ul>
<li class="ind0">回調觸碰趨勢線附近，配合強反轉棒 → 順勢進場機會</li>
<li class="ind0">反彈觸碰下降趨勢線附近 → 做空機會</li>
</ul>
<h3>功能二：趨勢強度指標</h3>
<ul>
<li class="ind0">斜率越陡 → 趨勢越強</li>
<li class="ind0">斜率逐漸變緩（連續畫出的趨勢線越來越平）→ 趨勢動能衰退的早期信號</li>
<li class="ind0">斜率突然加速（過陡）→ 高潮警示，準備迎接更深回調</li>
</ul>
<h3>功能三：目標預測</h3>
<ul>
<li class="ind0">趨勢通道線（下一章）與趨勢線的對稱關係，可預測回調的下一個支撐位</li>
</ul>
<p>---</p>`
            },
            {
                "title": "趨勢線突破的解讀",
                "html": `<h3>第一次突破（輕微突破）</h3>
<ul>
<li class="ind0">只有影線越過趨勢線</li>
<li class="ind0">含義：測試趨勢線的有效性，通常會回彈</li>
<li class="ind0">操作：在趨勢線附近出現強反轉棒後繼續順勢操作</li>
</ul>
<h3>第二次突破（警示）</h3>
<ul>
<li class="ind0">棒的實體突破趨勢線，但後續棒拉回到線的另一側</li>
<li class="ind0">含義：趨勢線受到壓力，開始考慮趨勢可能減弱</li>
<li class="ind0">操作：提高警覺，止損收緊，考慮部分獲利</li>
</ul>
<h3>確認突破（趨勢線失效）</h3>
<ul>
<li class="ind0">實體突破 + 後續 2 根以上棒繼續在突破方向</li>
<li class="ind0">含義：趨勢線正式失效，趨勢可能進入交易區間或反轉</li>
<li class="ind0">操作：不再以該趨勢線為支撐/阻力進行操作</li>
</ul>
<h3>突破後的回測（Throwback / Pullback to Trend Line）</h3>
<ul>
<li class="ind0">突破趨勢線後，行情拉回到原趨勢線附近（S/R Flip 測試）</li>
<li class="ind0">這次<strong>趨勢線從支撐變成阻力（或相反）</strong></li>
<li class="ind0">回測確認後 → 進場做突破方向，止損設在趨勢線另一側</li>
</ul>
<p>---</p>`
            },
            {
                "title": "趨勢線的強度評估系統",
                "html": `<table>
<thead><tr><th>評分因素</th><th>高分</th><th>低分</th></tr></thead><tbody>
<tr><td>觸碰次數</td><td>3 次以上</td><td>只有 2 次</td></tr>
<tr><td>時間跨度</td><td>橫跨整個趨勢</td><td>只是近期幾根棒</td></tr>
<tr><td>觸碰時的反應</td><td>每次觸碰後強力反彈，留有長影線</td><td>輕微觸碰，無明顯反應</td></tr>
<tr><td>時間框架</td><td>日線或週線</td><td>5 分鐘圖</td></tr>
<tr><td>是否與水平 S/R 重合</td><td>是（雙重確認）</td><td>否（只有趨勢線本身）</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "趨勢通道的構成",
                "html": `<pre><code>上升通道：
    ┌─────────────── 趨勢通道線（上方）= 壓力 ───────────────┐
    │    價格在通道內震盪上行                                   │
    └─────────────── 趨勢線（下方）= 支撐 ────────────────────┘</code></pre>
<h3>畫法</h3>
<li class="numbered">先畫完趨勢線（連接低點）</li>
<li class="numbered">從對面（高點）畫一條<strong>平行線</strong></li>
<li class="numbered">這條平行線就是趨勢通道線</li>
<li class="numbered">目標：這條平行線應盡量切過最多的<strong>波段高點</strong></li>
<p>---</p>`
            },
            {
                "title": "趨勢通道線的功能",
                "html": `<h3>功能一：短線獲利目標</h3>
<ul>
<li class="ind0">在趨勢線附近做多後，趨勢通道線是第一個止盈目標</li>
<li class="ind0">在趨勢通道線附近出現弱棒 → 考慮減倉或觀望</li>
</ul>
<h3>功能二：高潮警示</h3>
<ul>
<li class="ind0">價格<strong>突破趨勢通道線</strong>（過衝 Overshoot / Throw-over）</li>
<li class="ind0">代表：當前推進動能過熱，即將出現較大回調</li>
<li class="ind0"><strong>不等於立即反轉</strong>，但代表不宜繼續追高/追低</li>
</ul>
<h3>功能三：衡量趨勢力道</h3>
<ul>
<li class="ind0">價格到達通道線後<strong>強力反彈回趨勢線</strong> → 趨勢健康</li>
<li class="ind0">價格到達通道線後<strong>軟弱反應，直接跌穿</strong> → 趨勢可能已失效</li>
</ul>
<p>---</p>`
            },
            {
                "title": "過衝（Overshoot）的交易機會",
                "html": `<h3>過衝的識別</h3>
<ul>
<li class="ind0">1~3 根大趨勢棒突破通道線</li>
<li class="ind0">通常伴隨成交量明顯放大</li>
<li class="ind0">棒的影線或收盤超出通道線</li>
</ul>
<h3>過衝後的操作</h3>
<li class="numbered"><strong>等待</strong>：過衝後通常出現 1~3 根逆勢棒（高潮後的快速回調）</li>
<li class="numbered"><strong>確認</strong>：若這次回調的力度強（強反轉棒），可以逆勢進場</li>
<li class="numbered"><strong>止損</strong>：過衝的極值 + 1 tick</li>
<li class="numbered"><strong>目標</strong>：至少回到趨勢線（約等於整個通道寬度）</li>
<div class="callout co-warning"><div class="cot">過衝 ≠ 立即反轉</div><p>高潮後市場最常見的反應是進入交易區間，而非立即反轉。不要在過衝後立即市價進場逆勢，要等待確認信號。</p></div>
<p>---</p>`
            },
            {
                "title": "通道的分類",
                "html": `<h3>按方向</h3>
<ul>
<li class="ind0"><strong>上升通道（Bullish Channel）</strong>：傾斜向上的交易區間</li>
<li class="ind0"><strong>下降通道（Bearish Channel）</strong>：傾斜向下的交易區間</li>
<li class="ind0"><strong>水平通道</strong>：橫向的交易區間（標準交易區間）</li>
</ul>
<h3>按形狀</h3>
<table>
<thead><tr><th>類型</th><th>特徵</th><th>含義</th></tr></thead><tbody>
<tr><td>平行通道</td><td>上下沿平行</td><td>穩定的趨勢或區間</td></tr>
<tr><td>收斂通道（楔形）</td><td>上下沿逐漸靠攏</td><td>能量遞減，即將突破</td></tr>
<tr><td>擴張通道（Broadening Top）</td><td>上下沿逐漸分開</td><td>波動性增加，市場混亂</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "通道的操作策略",
                "html": `<h3>策略一：通道邊界反轉（適合明確通道）</h3>
<ul>
<li class="ind0">在通道下沿（支撐線）等 H2 做多</li>
<li class="ind0">在通道上沿（壓力線）等 L2 做空</li>
<li class="ind0"><strong>在通道中部平半倉</strong>（此處優勢消失）</li>
<li class="ind0">止損設在通道另一邊 + 1 tick</li>
</ul>
<h3>策略二：通道突破（適合突破後）</h3>
<ul>
<li class="ind0">不在通道內進場，等待明確的突破信號</li>
<li class="ind0">突破確認後（突破棒 + 後續跟進棒）</li>
<li class="ind0">等第一次回測突破位再進場（更安全）</li>
<li class="ind0">目標：等距測量（通道寬度 = 突破後的推進幅度）</li>
</ul>
<h3>哪種策略在什麼時候使用？</h3>
<ul>
<li class="ind0">通道<strong>明確且維持一段時間</strong> → 邊界反轉策略勝率更高</li>
<li class="ind0">通道<strong>頻繁假突破後的真突破</strong> → 突破策略</li>
<li class="ind0">通道<strong>已出現多次邊界反彈</strong> → 下一次反彈力度可能減弱，考慮切換到突破等待</li>
</ul>
<p>---</p>`
            },
            {
                "title": "收斂通道（楔形）的特殊處理",
                "html": `<p>楔形是通道的收斂版本，也是「三推楔形」的幾何表現：</p>
<ul>
<li class="ind0">上升楔形：三次創新高，但幅度遞減，斜率趨緩 → 多頭動能衰竭</li>
<li class="ind0">下降楔形：三次創新低，但幅度遞減 → 空頭動能衰竭</li>
</ul>
<h3>楔形的進場策略</h3>
<ul>
<li class="ind0"><strong>激進</strong>：在第三推到達通道線位置提前掛限價單進場</li>
<li class="ind0"><strong>保守</strong>：等楔形趨勢線被突破後（確認）再進場</li>
<li class="ind0"><strong>最保守</strong>：等突破後的回測再進場</li>
</ul>
<p>---</p>`
            },
            {
                "title": "通道失效條件",
                "html": `<p>通道宣告失效的標誌：</p>
<li class="numbered">連續兩根棒的實體突破通道邊界線</li>
<li class="numbered">回測通道線後<strong>無法回到通道內</strong></li>
<li class="numbered">通道線被突破後，後續 3 根以上棒都在突破方向</li>
<p>---</p>`
            },
            {
                "title": "定義與識別",
                "html": `<ul>
<li class="ind0">由 <strong>2~10 根連續 K 線</strong>構成</li>
<li class="ind0">每根棒的<strong>低點（上升）</strong>或<strong>高點（下降）</strong>緊密遞進</li>
<li class="ind0">視覺上像一條斜線，幾乎沒有逆勢空間</li>
<li class="ind0">每根棒的實體或影線都不與前棒重疊（或重疊極少）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "微型通道的市場含義",
                "html": `<ul>
<li class="ind0">代表<strong>短期極強的單向動能</strong>，市場參與者高度共識</li>
<li class="ind0">在趨勢中段出現 → 動能加速，順勢信號</li>
<li class="ind0">在趨勢末端出現 → 可能是最後的加速（高潮前的征兆）</li>
<li class="ind0">在突破位出現 → 確認突破有效性最強的信號之一</li>
</ul>
<p>---</p>`
            },
            {
                "title": "三種交易應用",
                "html": `<h3>應用一：微型通道的第一次回調（最常見）</h3>
<ul>
<li class="ind0">微型通道後，第一根逆勢棒出現 → 觀察</li>
<li class="ind0">若第一根逆勢棒確認（H1/L1），可進場做微型通道方向</li>
<li class="ind0">這是極強的順勢信號，因為：連續多根棒一致的方向 + 第一次停頓 = 回調可能非常短暫</li>
</ul>
<h3>應用二：微型通道突破</h3>
<ul>
<li class="ind0">若微型通道本身突破了更大結構（如區間頂部），突破的有效性極高</li>
<li class="ind0">不等回調，直接順勢進場</li>
</ul>
<h3>應用三：微型通道結束後的 H2/L2</h3>
<ul>
<li class="ind0">微型通道後若出現較深的回調，等 H2/L2 確認趨勢恢復</li>
</ul>
<p>---</p>`
            },
            {
                "title": "微型通道的注意事項",
                "html": `<ul>
<li class="ind0"><strong>在微型通道內不要逆勢進場</strong>：動能過強，止損空間無法設置</li>
<li class="ind0">第一根逆勢棒出現後先觀察，不要立即逆勢</li>
<li class="ind0">若微型通道出現在關鍵 S/R 位附近，搭配 H2/L2 效果最佳</li>
</ul>
<p>---</p>`
            },
            {
                "title": "波段高低點（Swing Points）",
                "html": `<h3>波段高點（Swing High）的定義與識別</h3>
<ul>
<li class="ind0">至少前後各一根棒的高點低於此棒（三根棒中最高）</li>
<li class="ind0">更寬鬆的定義：在你的時間框架上明顯可見的「山頂」</li>
</ul>
<h3>波段低點（Swing Low）</h3>
<ul>
<li class="ind0">至少前後各一根棒的低點高於此棒（三根棒中最低）</li>
</ul>
<h3>S/R Flip（角色互換）</h3>
<ul>
<li class="ind0"><strong>前阻力（波段高點）突破後 → 變為支撐</strong></li>
</ul>
<p>  - 做法：突破前高後，等回調至前高附近，出現 H2 做多</p>
<ul>
<li class="ind0"><strong>前支撐（波段低點）跌破後 → 變為阻力</strong></li>
</ul>
<p>  - 做法：跌破前低後，等反彈至前低附近，出現 L2 做空</p>
<p>---</p>`
            },
            {
                "title": "等高點與等低點（Equal Highs / Equal Lows）",
                "html": `<h3>等高點（EH）</h3>
<ul>
<li class="ind0">兩個（或以上）相近的波段高點</li>
<li class="ind0">代表：多頭曾多次試圖突破此位置但失敗</li>
<li class="ind0">這個位置上方聚集著：</li>
</ul>
<p>  - 賣出方的止損（空頭的買回止損）</p>
<p>  - 突破做多者的入場訂單</p>
<ul>
<li class="ind0">機構常在此設置止損獵殺：先假突破，清洗多頭，再回頭下跌</li>
</ul>
<h3>等低點（EL）</h3>
<ul>
<li class="ind0">兩個（或以上）相近的波段低點</li>
<li class="ind0">對稱的空頭版本</li>
<li class="ind0">多頭止損 + 假突破做空者的聚集地</li>
</ul>
<h3>等高/低點的交易應用</h3>
<li class="numbered"><strong>識別流動性位置</strong>：等高/低點 = 高流動性聚集地</li>
<li class="numbered"><strong>預判假突破</strong>：等高/低點被突破後立即回頭 → 假突破確認，強力逆向信號</li>
<li class="numbered"><strong>預判真突破</strong>：若等高/低點被突破後站穩（不立即回頭）→ 真突破，追進場</li>
<p>---</p>`
            },
            {
                "title": "關鍵水平位分類",
                "html": `<h3>歷史最高/最低（ATH / ATL）</h3>
<ul>
<li class="ind0">心理上最強的位置</li>
<li class="ind0">大量限價單和止損單聚集</li>
<li class="ind0">突破後可能急速推進（大量止損被觸發）</li>
</ul>
<h3>整數關口</h3>
<ul>
<li class="ind0">如 BTC 的 $10,000、$50,000、$100,000</li>
<li class="ind0">人類心理上自然產生的「整數效應」</li>
<li class="ind0">大量止損和目標設置在整數附近</li>
</ul>
<h3>前期整理區間的頂/底</h3>
<ul>
<li class="ind0">大量籌碼在此換手，形成強烈的集體記憶</li>
<li class="ind0">突破後通常有一定的回測（S/R Flip 確認）</li>
</ul>
<h3>高成交量節點（High Volume Node）</h3>
<ul>
<li class="ind0">成交量剖面分析中成交密集的位置</li>
<li class="ind0">大量買賣雙方均有未平倉部位</li>
<li class="ind0">價格在此附近容易停頓</li>
</ul>
<p>---</p>`
            },
            {
                "title": "水平位強度評分",
                "html": `<table>
<thead><tr><th>因素</th><th>高強度</th><th>低強度</th></tr></thead><tbody>
<tr><td>觸碰次數</td><td>≥ 3 次</td><td>只有 2 次</td></tr>
<tr><td>觸碰時的反應</td><td>明顯強力影線 + 趨勢棒</td><td>輕微觸碰</td></tr>
<tr><td>時間跨度</td><td>橫跨數月甚至數年</td><td>只是近期幾天</td></tr>
<tr><td>時間框架</td><td>週線/日線確認</td><td>只在 5 分鐘圖可見</td></tr>
<tr><td>與其他工具重合</td><td>同時是趨勢線、均線、整數關口</td><td>只有水平位本身</td></tr>
</tbody></table>
<div class="callout co-tip"><div class="cot">多重確認原則</div><p>一個水平位同時是：① 前波段高點 ② 前整理區間底部 ③ 整數關口 ④ 日線均線位置 → 這四重確認的水平位，其支撐/阻力作用比單一因素強 3~4 倍。</p></div>`
            }
        ],
        "id": "ch13"
    },
    {
        "title": "Part III Ch.18–20",
        "sub": "趨勢交易實戰 · pp. 289–321",
        "sections": [
            {
                "title": "最小阻力方向（Direction of Least Resistance）",
                "html": `<p>這是趨勢交易的核心概念：</p>
<ul>
<li class="ind0">市場在任何時刻都有一個「阻力最小」的方向</li>
<li class="ind0">這個方向 = 均線組發散的方向</li>
<li class="ind0">在這個方向進場，統計上成功率最高</li>
<li class="ind0"><strong>初學者規則</strong>：只做均線發散方向的交易，其他方向的機會一律放棄</li>
</ul>
<h3>如何確認最小阻力方向</h3>
<li class="numbered">20 EMA 的斜率（向上 = 多頭方向，向下 = 空頭方向）</li>
<li class="numbered">20 EMA 與 50 EMA 的相對位置（20 EMA > 50 EMA = 多頭方向）</li>
<li class="numbered">最近 20 根棒的整體傾向（高點不斷抬高 = 多頭）</li>
<p>---</p>`
            },
            {
                "title": "趨勢交易三步驟 SOP",
                "html": `<h3>Step 1：大框架定方向（日線 / 4H）</h3>
<ul>
<li class="ind0">主趨勢方向是多頭還是空頭？</li>
<li class="ind0">目前在哪個結構階段？（趨勢中段？回調後恢復？接近末端？）</li>
<li class="ind0">最近的重要 S/R 位在哪裡？</li>
</ul>
<h3>Step 2：中框架識別回調形態（1H / 30m）</h3>
<ul>
<li class="ind0">正在回調中？回調是簡單的還是複雜的？</li>
<li class="ind0">回調動能是否在衰竭？（每一腿的力度是否遞減？）</li>
<li class="ind0">是否已出現 H2/L2 的雛形？</li>
</ul>
<h3>Step 3：小框架找精確進場（15m / 5m）</h3>
<ul>
<li class="ind0">H2/L2 是否已出現強信號棒？</li>
<li class="ind0">止損空間是否合理（< 1 ATR）？</li>
<li class="ind0">盈虧比是否 ≥ 2:1？</li>
</ul>
<p>---</p>`
            },
            {
                "title": "訂單管理的標準流程 ^訂單管理",
                "html": `<h3>進場後的五個決策點</h3>
<h4>決策點一：進場後的第一根棒</h4>
<ul>
<li class="ind0">若進場棒是強趨勢棒（確認方向）→ 持倉不動</li>
<li class="ind0">若進場棒是弱棒或逆向棒 → 準備在信號棒低點（做多）被觸及時認損</li>
</ul>
<h4>決策點二：到達 TP1（第一目標）</h4>
<ul>
<li class="ind0">TP1 通常是：前波段高/低點、或等距目標（= 前段推進幅度）</li>
<li class="ind0"><strong>平半倉</strong>：鎖定確定利潤，讓剩餘半倉「免費」持有</li>
</ul>
<h4>決策點三：達到 TP1 後的止損管理</h4>
<ul>
<li class="ind0">將剩餘半倉的止損移至<strong>成本位</strong>（零成本倉位）</li>
<li class="ind0">此後即使行情反向，最壞情況是平手，不再有虧損風險</li>
</ul>
<h4>決策點四：剩餘半倉的追蹤</h4>
<ul>
<li class="ind0">方法一：追蹤止損（以每根棒的低點為止損）</li>
<li class="ind0">方法二：等待高潮信號再平倉</li>
<li class="ind0">方法三：等 ATR 的 1.5~2 倍止損自然被觸及</li>
</ul>
<h4>決策點五：失效條件觸發</h4>
<ul>
<li class="ind0">若出現明確的反向信號（如強力反轉棒 + 進場棒突破）→ 立刻全部出場</li>
<li class="ind0">不要「等等看」，不要「希望它回來」</li>
</ul>
<p>---</p>`
            },
            {
                "title": "趨勢交易的常見失誤",
                "html": `<h3>失誤一：在交易區間中用趨勢策略</h3>
<ul>
<li class="ind0">症狀：連續被 H2 信號打損</li>
<li class="ind0">原因：市場是區間，不是趨勢</li>
<li class="ind0">修正：先判斷市場狀態，確認是趨勢再找 H2</li>
</ul>
<h3>失誤二：等待完美信號而錯過進場</h3>
<ul>
<li class="ind0">症狀：看到行情動了，才想進場，然後追高被打損</li>
<li class="ind0">修正：接受「夠好的信號」，不需要完美信號</li>
</ul>
<h3>失誤三：止損設得太緊</h3>
<ul>
<li class="ind0">症狀：方向正確，但被正常波動震出，然後看著行情飛</li>
<li class="ind0">修正：止損必須設在結構的邏輯失效點，而非隨意距離</li>
</ul>
<h3>失誤四：在 TP1 不平倉</h3>
<ul>
<li class="ind0">症狀：見到利潤後貪心持倉，最後行情反轉，利潤全部回吐</li>
<li class="ind0">修正：嚴格執行「到達 TP1 平半倉」的規則</li>
</ul>
<p>---</p>`
            },
            {
                "title": "強趨勢的七個特徵 ^趨勢強度的七個特徵",
                "html": `<li class="numbered"><strong>連續趨勢棒，逆勢棒極少或極小</strong></li>
<p>   - 理想：連續 5 根以上不重疊趨勢棒</p>
<p>   - 逆勢棒出現時，其實體應 < 前趨勢棒的 50%</p>
<li class="numbered"><strong>回調幅度小（< 前段 33%），根數少（1~3 根）</strong></li>
<p>   - 回調棒的實體小、影線短</p>
<p>   - 回調後立即恢復推進</p>
<li class="numbered"><strong>20 EMA 幾乎從未被任何棒的實體觸碰</strong></li>
<p>   - 在極強趨勢中，甚至影線也很少觸碰均線</p>
<p>   - 均線的斜率穩定且陡峭</p>
<li class="numbered"><strong>每次突破前高/低後立即繼續推進，無停頓</strong></li>
<p>   - 突破前高後，下一棒繼續是強趨勢棒</p>
<p>   - 沒有「突破後立即反轉回測」的情況</p>
<li class="numbered"><strong>出現微型通道（連續 3~5 根緊密遞進棒）</strong></li>
<p>   - 代表市場進入加速狀態</p>
<p>   - 是近期最強動能的直接證明</p>
<li class="numbered"><strong>關鍵 S/R 位只出現小幅停頓，未見大型反轉棒</strong></li>
<p>   - 即使遇到阻力，反彈/回調也非常短暫</p>
<p>   - 沒有出現強力的反方向趨勢棒</p>
<li class="numbered"><strong>均線組高度發散</strong></li>
<p>   - 短期均線遠離長期均線（20 EMA 遠高/低於 50 EMA）</p>
<p>   - 代表「均值回歸」的壓力積累，但在強趨勢中可以長時間維持</p>
<p>---</p>`
            },
            {
                "title": "趨勢減弱的早期預警",
                "html": `<p>這些信號出現時，<strong>不一定要立刻離場，但需要提高警覺</strong>：</p>
<li class="numbered"><strong>趨勢線斜率由陡變緩</strong></li>
<p>   - 畫連接新的低點的趨勢線，比之前更平</p>
<p>   - 代表每次推進的速度在慢下來</p>
<li class="numbered"><strong>逆勢棒開始變大</strong></li>
<p>   - 回調棒的實體越來越大，影線越來越長</p>
<p>   - 空頭（或逆勢方）越來越積極進入</p>
<li class="numbered"><strong>回調根數增加</strong></li>
<p>   - 原本 1~2 根的回調，開始需要 4~6 根</p>
<p>   - 代表多頭接力的意願降低</p>
<li class="numbered"><strong>均線首次被實體觸碰</strong></li>
<p>   - 20 EMA 被棒的實體觸碰（而非只是影線）</p>
<p>   - 這在強趨勢中是第一個警告信號</p>
<li class="numbered"><strong>出現第一個較大的逆勢棒</strong></li>
<p>   - 逆勢棒的實體 ≥ 前一根趨勢棒的 75%</p>
<p>   - 代表對方力量顯著增加</p>
<p>---</p>`
            },
            {
                "title": "趨勢終結的確認信號",
                "html": `<p>這些信號出現時，可以考慮出場或逆勢：</p>
<li class="numbered"><strong>高潮 + 強反轉棒</strong>：最直接的終結信號</li>
<li class="numbered"><strong>趨勢線被實體突破 + 後續棒繼續推進</strong>：趨勢線正式失效</li>
<li class="numbered"><strong>均線組從發散轉為糾纏</strong>：趨勢動能消失</li>
<li class="numbered"><strong>BOS（結構突破）</strong>：前一個重要回調的低點（多頭趨勢）被突破</li>
<li class="numbered"><strong>等高點 / 等低點的失敗突破</strong>：多次嘗試突破關鍵位均失敗</li>
<p>---</p>`
            },
            {
                "title": "定義與結構",
                "html": `<p><strong>多頭趨勢的兩腿回調：</strong></p>
<pre><code>趨勢高點
    ↓ (第一腿下跌)
第一個局部低點 (H1 出現)
    ↑ (短暫反彈 1~3 根棒)
第二次向下測試 (第二腿)
    ↓
第二個局部低點 (≈ 第一腿低點 or 略低) ← H2 出現 ← 進場點
    ↑ (趨勢恢復)</code></pre>
<p><strong>空頭趨勢的兩腿反彈：</strong> 完全對稱，L2 出現在第二腿高點。</p>
<p>---</p>`
            },
            {
                "title": "兩腿為何是最可靠的回調形態",
                "html": `<h3>從被套者角度理解</h3>
<p>第一腿下跌：</p>
<ul>
<li class="ind0">空頭第一次嘗試推低</li>
<li class="ind0">部分多頭認損出場（第一批被套多頭）</li>
<li class="ind0">價格在某位置止穩 → H1 出現</li>
</ul>
<p>短暫反彈：</p>
<ul>
<li class="ind0">「抄底者」進場，推動短暫反彈</li>
<li class="ind0">但反彈力度不夠（空頭仍然積極）</li>
</ul>
<p>第二腿下跌：</p>
<ul>
<li class="ind0">空頭第二次嘗試推低</li>
<li class="ind0">第一輪抄底者被套，認損出場</li>
<li class="ind0">這些認損訂單推動第二腿</li>
<li class="ind0">但空頭仍無法突破第一腿低點（或突破後迅速拉回）→ H2 出現</li>
</ul>
<p><strong>結論</strong>：空頭做了兩次努力，都沒有能力徹底壓垮多頭 → 空頭確實沒有後勁 → 主趨勢恢復</p>
<p>---</p>`
            },
            {
                "title": "兩腿回調的進場細節",
                "html": `<h3>最佳進場組合（三重確認）</h3>
<li class="numbered"><strong>位置</strong>：第二腿在重要支撐位（前高的 S/R Flip、均線、趨勢線）附近止穩</li>
<li class="numbered"><strong>形態</strong>：H2 出現（計數確認）</li>
<li class="numbered"><strong>信號棒</strong>：強多頭反轉棒（長下影線、大實體、收盤在上半部）</li>
<h3>止損設置</h3>
<ul>
<li class="ind0"><strong>標準止損</strong>：H2 信號棒低點下方 1 tick</li>
<li class="ind0"><strong>寬鬆止損</strong>：第二腿的最低點下方 1 tick（若怕被震出）</li>
<li class="ind0">選擇原則：確保盈虧比 ≥ 2:1</li>
</ul>
<h3>常見的兩腿結構變體</h3>
<table>
<thead><tr><th>變體</th><th>特徵</th></tr></thead><tbody>
<tr><td>標準兩腿</td><td>第二腿 ≈ 第一腿深度</td></tr>
<tr><td>更低第二腿</td><td>第二腿創新低但快速拉回（假突破 + H2）</td></tr>
<tr><td>等低點兩腿</td><td>兩腿完全等低，雙底形態</td></tr>
<tr><td>ABC 型</td><td>A=第一腿，B=反彈，C=第二腿，是最常見的變體</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "兩腿成功 vs. 失敗的辨別",
                "html": `<h3>兩腿成功（趨勢繼續）的信號</h3>
<ul>
<li class="ind0">第二腿不創新低（或創了新低但立即強力拉回）</li>
<li class="ind0">H2 信號棒是強多頭反轉棒</li>
<li class="ind0">H2 進場棒也是強趨勢棒</li>
</ul>
<h3>兩腿失敗（可能更深回調或反轉）的信號</h3>
<ul>
<li class="ind0">第二腿持續延伸，無明顯支撐</li>
<li class="ind0">H2 信號棒是弱棒（小實體、長逆向影線）</li>
<li class="ind0">後續繼續出現 H3、H4 → 進入複雜回調或交易區間</li>
</ul>`
            }
        ],
        "id": "ch18"
    },
    {
        "title": "Part IV Ch.21–26",
        "sub": "常見趨勢形態 · pp. 325–436",
        "sections": [
            {
                "title": "形態結構與識別",
                "html": `<h3>Spike（極速段）</h3>
<ul>
<li class="ind0">由 <strong>1~5 根連續大趨勢棒</strong>構成的快速推進</li>
<li class="ind0">特徵：</li>
</ul>
<p>  - 幾乎無回調（或回調 < 1 根棒）</p>
<p>  - 棒的實體大，影線小（強烈共識）</p>
<p>  - 在突破重要 S/R 位後出現（如突破區間頂部、突破下降趨勢線）</p>
<ul>
<li class="ind0">意義：市場上某一方（如被套空頭集體認損）的止損訂單集中觸發</li>
</ul>
<h3>Channel（通道段）</h3>
<ul>
<li class="ind0">Spike 後進入斜率較緩的通道運動</li>
<li class="ind0">特徵：</li>
</ul>
<p>  - 有小幅回調，但每次回調後仍繼續推進</p>
<p>  - 回調幅度通常 < 前段推進的 33%~50%</p>
<p>  - 通道線與趨勢線平行，形成清晰的通道結構</p>
<ul>
<li class="ind0">意義：「普通交易者」在 Spike 後跟進，但動能已不如最初</li>
</ul>
<p>---</p>`
            },
            {
                "title": "Spike 後的四個選擇（進場時機）",
                "html": `<h3>選擇一：Spike 後第一根回調棒（H1）</h3>
<ul>
<li class="ind0">最激進，止損最小，但信號可靠性最低</li>
<li class="ind0">適合：Spike 非常強勁（連續 3 根以上大趨勢棒），第一根回調棒是強信號棒</li>
<li class="ind0">止損：回調棒低點下方 1 tick</li>
</ul>
<h3>選擇二：進入通道後的第一個 H2</h3>
<ul>
<li class="ind0">最平衡的選擇，兼顧可靠性和入場價格</li>
<li class="ind0">等 Spike 結束進入通道，等第一個 H2 確認趨勢方向</li>
<li class="ind0">止損：H2 信號棒低點下方 1 tick</li>
</ul>
<h3>選擇三：通道底部的每個 H2</h3>
<ul>
<li class="ind0">標準的通道交易策略</li>
<li class="ind0">每次回調至通道支撐線附近的 H2 都是進場點</li>
<li class="ind0">止損：通道下沿 + 1 tick</li>
</ul>
<h3>選擇四：錯過就放棄</h3>
<ul>
<li class="ind0">若 Spike 發生時你不在場，而行情已走了很遠</li>
<li class="ind0">等待這段趨勢結束，找下一個獨立的進場機會</li>
</ul>
<p>---</p>`
            },
            {
                "title": "Channel 各階段的信號與操作",
                "html": `<h3>早期通道（剛進入通道）</h3>
<ul>
<li class="ind0">每次回調通常只有 1~2 根棒</li>
<li class="ind0">20 EMA 仍未被觸碰或只是影線觸碰</li>
<li class="ind0">操作：積極做多，止損較小</li>
</ul>
<h3>中期通道（通道確立）</h3>
<ul>
<li class="ind0">回調開始有 3~5 根棒，均線開始被觸碰</li>
<li class="ind0">操作：標準 H2 進場，止損較中</li>
</ul>
<h3>晚期通道（動能衰竭跡象）</h3>
<ul>
<li class="ind0">回調越來越深，均線多次被實體穿越</li>
<li class="ind0">每次推進的幅度越來越小（三推楔形形成）</li>
<li class="ind0">操作：謹慎，只做最強的 H2；開始考慮通道即將結束</li>
</ul>
<p>---</p>`
            },
            {
                "title": "通道結束後的三種情境（重要）",
                "html": `<h3>情境 A：第一次深幅回調後趨勢繼續</h3>
<ul>
<li class="ind0">通道後出現較深回調，但最終找到支撐</li>
<li class="ind0">趨勢恢復，進入下一個通道（或直接繼續推進）</li>
<li class="ind0">操作：在回調的 H2 進場</li>
</ul>
<h3>情境 B：通道後進入交易區間</h3>
<ul>
<li class="ind0">通道後深幅回調，然後又反彈，進入橫向震盪</li>
<li class="ind0">代表多空力量趨於平衡</li>
<li class="ind0">操作：切換為交易區間策略</li>
</ul>
<h3>情境 C：通道後直接反轉（MTR）</h3>
<ul>
<li class="ind0">通道末端出現高潮 → 強力反轉 → 不再恢復</li>
<li class="ind0">代表趨勢真正結束</li>
<li class="ind0">操作：等確認後可逆勢操作（參考補充章節的 MTR）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "Spike & Channel 的失效條件",
                "html": `<li class="numbered"><strong>Spike 後回調超過 Spike 幅度的 50%</strong>：起始動能不夠強，後續通道可能很淺</li>
<li class="numbered"><strong>通道線被實體突破且無法回到通道內</strong>：通道結束</li>
<li class="numbered"><strong>通道支撐線被強力跌破</strong>：做多邏輯完全失效</li>
<p>---</p>`
            },
            {
                "title": "形態定義",
                "html": `<ul>
<li class="ind0">整體方向向上/下，但以「一個接一個的小交易區間」方式推進</li>
<li class="ind0">每個小區間突破後，進入新的小區間</li>
<li class="ind0">視覺上呈「階梯狀」</li>
<li class="ind0">與 Spike & Channel 的區別：沒有明顯的 Spike，每段推進後都有明顯的橫向整理（5~20 根棒）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "識別要點",
                "html": `<ul>
<li class="ind0">每個「台階」中，K 線大量重疊（典型的交易區間特徵）</li>
<li class="ind0">台階之間的突破棒相對清晰</li>
<li class="ind0">台階的底部通常是前台階的頂部（階梯上升時）</li>
<li class="ind0">整體看，每個新台階都比前一個更高（上升趨勢型）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "操作策略",
                "html": `<h3>策略一：台階底部做多</h3>
<ul>
<li class="ind0">在每個小台階的底部支撐附近等 H2 做多</li>
<li class="ind0">止損設在台階底部下方</li>
<li class="ind0">目標：台階頂部附近（平半倉），或突破確認後再追加</li>
</ul>
<h3>策略二：台階突破後跟進</h3>
<ul>
<li class="ind0">等台階頂部被突破（突破棒 + 後續跟進棒）</li>
<li class="ind0">等第一次回測台階頂部（S/R Flip）再進場</li>
<li class="ind0">止損：台階頂部下方</li>
</ul>
<h3>策略三：等距測量目標</h3>
<ul>
<li class="ind0">每個台階的高度通常相近</li>
<li class="ind0">前台階高度 = 下一台階的預期推進幅度</li>
</ul>
<p>---</p>`
            },
            {
                "title": "風險管理",
                "html": `<ul>
<li class="ind0">若某台階的底部被跌破（跌穿整個台階）→ 整體趨勢可能轉弱，離場等待</li>
<li class="ind0">台階整理時間越來越長 → 趨勢動能遞減的信號</li>
<li class="ind0">連續兩個台階突破均失敗 → 可能已進入更大範圍的交易區間</li>
</ul>
<p>---</p>`
            },
            {
                "title": "開盤即趨勢（Trend from the Open）",
                "html": `<h3>識別特徵</h3>
<ul>
<li class="ind0">開盤後前 5~10 根棒已清晰建立方向</li>
<li class="ind0">連續朝同一方向，幾乎無逆勢棒</li>
<li class="ind0">均線迅速發散，從未被觸碰</li>
<li class="ind0">通常在重大新聞或數據後出現</li>
</ul>
<h3>操作細節</h3>
<h4>激進進場</h4>
<ul>
<li class="ind0">在開盤後的第二或第三根棒（若是強趨勢棒）的突破位進場</li>
<li class="ind0">風險：可能是假動作，真正的方向還沒確認</li>
</ul>
<h4>標準進場</h4>
<ul>
<li class="ind0">等待均線的首次觸碰（第一次回調到均線附近的 H2）</li>
<li class="ind0">止損：均線下方（做多）或上方（做空）</li>
<li class="ind0">這通常是這種形態中最佳的首次進場點</li>
</ul>
<h4>保守進場</h4>
<ul>
<li class="ind0">等行情出現第一次「稍微大一點的回調」後的 H2</li>
<li class="ind0">通常發生在 10~20 根棒後</li>
<li class="ind0">止損較為寬鬆，但確認度更高</li>
</ul>
<p>---</p>`
            },
            {
                "title": "小幅回調趨勢（Small Pullback Trend）",
                "html": `<h3>識別特徵</h3>
<ul>
<li class="ind0">趨勢推進中，每次回調只有 1~2 根逆勢棒，立即恢復</li>
<li class="ind0">20 EMA 僅被影線輕觸，從未被實體穿越</li>
<li class="ind0">這是最強的趨勢類型之一</li>
</ul>
<h3>操作挑戰</h3>
<ul>
<li class="ind0">進場點極少（幾乎沒有回調）</li>
<li class="ind0">追進場的止損空間大</li>
<li class="ind0">容易在高點追高後被小回調打損</li>
</ul>
<h3>最佳操作方式</h3>
<li class="numbered">等待前高/低點的 H2（不要等均線）</li>
<li class="numbered">若錯過所有 H2，等待第一次<strong>較大回調</strong>（5 根以上）後的 H2</li>
<li class="numbered">在強趨勢中放棄精確入場，改為更大止損 + 更小倉位</li>
<p>---</p>`
            },
            {
                "title": "連續突破新高（Consecutive Breakouts）",
                "html": `<ul>
<li class="ind0">連續 5 根以上不重疊趨勢棒 → 近似微型通道的強勢狀態</li>
<li class="ind0">此時任何「感覺漲太多了」的主觀判斷都需要壓制</li>
<li class="ind0">操作：等第一根確認回調棒的 H1/H2 進場，不要逆勢</li>
</ul>
<p>---</p>`
            },
            {
                "title": "反轉日的四個必要條件（全部需滿足）",
                "html": `<li class="numbered"><strong>前期有明確的趨勢</strong>（當天或前幾天的持續趨勢）</li>
<li class="numbered"><strong>觸及關鍵位</strong>（前高/低、重要 S/R、通道線）</li>
<li class="numbered"><strong>高潮 + 強力反轉棒</strong>（在關鍵位出現高潮，隨後強力逆向棒）</li>
<li class="numbered"><strong>後續持續推進</strong>（反轉後的行情超過高潮幅度的 100%）</li>
<p>---</p>`
            },
            {
                "title": "反轉日的進場時機",
                "html": `<h3>時機一：高潮棒後的第一根強逆向棒</h3>
<ul>
<li class="ind0">激進進場，最佳入場價格</li>
<li class="ind0">止損：高潮極值 + 1 tick</li>
<li class="ind0">風險：可能只是短暫回調，非真正反轉</li>
</ul>
<h3>時機二：三重確認進場</h3>
<p>高潮棒 <strong>+</strong> 至少一根確認反轉棒 <strong>+</strong> H2（或突破回調結構）</p>
<ul>
<li class="ind0">保守但可靠</li>
<li class="ind0">止損仍設在高潮極值</li>
</ul>
<h3>時機三：突破前一個回調結構</h3>
<ul>
<li class="ind0">若已有明顯的逆向推進，等突破「前一個回調的低點」（做空方向）</li>
<li class="ind0">此時反轉已獲得更高程度確認</li>
<li class="ind0">止損可以相對較小</li>
</ul>
<p>---</p>`
            },
            {
                "title": "反轉日的三種失敗模式",
                "html": `<table>
<thead><tr><th>失敗模式</th><th>特徵</th><th>含義</th></tr></thead><tbody>
<tr><td>回調不足 50%</td><td>逆向幅度 < 高潮幅度的 50%</td><td>只是普通回調，原趨勢恢復</td></tr>
<tr><td>強力反彈後再突破</td><td>反轉後的逆向行情被完全收復</td><td>末端旗形，最後一段推進</td></tr>
<tr><td>直接進入交易區間</td><td>反轉後無方向，高低點縮小</td><td>趨勢暫時結束，等待新方向</td></tr>
</tbody></table>
<div class="callout co-warning"><div class="cot">反轉日的現實</div><p>Al Brooks 統計：反轉日交易的成功率約 40%，低於趨勢回調策略。只有在信號極其清晰（強高潮 + 完美反轉棒 + 關鍵位）時才考慮進場。</p></div>
<p>---</p>`
            },
            {
                "title": "定義",
                "html": `<p>在一段較大的修正（複雜回調或交易區間，通常 2~10 天）之後，原主趨勢再次確認並延續。</p>
<p><strong>典型節奏</strong>：</p>
<pre><code>主趨勢推進 → 2~10 天複雜回調/震盪 → 回調結束確認 → 趨勢恢復推進</code></pre>
<p>---</p>`
            },
            {
                "title": "識別趨勢恢復的信號",
                "html": `<h3>信號一：回調末端的兩腿結構</h3>
<ul>
<li class="ind0">複雜回調最後形成標準的「兩腿 + H2」</li>
<li class="ind0">H2 出現在重要支撐位（如趨勢線、前期 S/R Flip）</li>
</ul>
<h3>信號二：突破整個回調結構（BOS）</h3>
<ul>
<li class="ind0">價格突破了整個回調期間的最高點（多頭趨勢中）</li>
<li class="ind0">代表：空頭在整個回調期間積累的勢力被一次性清除</li>
</ul>
<h3>信號三：均線組重新發散</h3>
<ul>
<li class="ind0">在回調期間均線組糾纏，恢復後短均線再次突破長均線</li>
<li class="ind0">方向與原主趨勢一致</li>
</ul>
<p>---</p>`
            },
            {
                "title": "操作策略",
                "html": `<h3>進場點一：回調末端的 H2</h3>
<ul>
<li class="ind0">在複雜回調的最後一腿，等 H2 + 強信號棒</li>
<li class="ind0">止損：回調的最低點（做多方向）</li>
<li class="ind0">目標：等距測量 ≥ 前段主趨勢推進幅度</li>
</ul>
<h3>進場點二：突破回調結構後的第一次回測</h3>
<ul>
<li class="ind0">等待突破整個回調的最高點後，行情回測該突破位（S/R Flip）</li>
<li class="ind0">在回測位的 H2 進場</li>
<li class="ind0">止損：回測位下方</li>
</ul>
<p>---</p>`
            },
            {
                "title": "趨勢恢復日 vs. 新趨勢開始的區別",
                "html": `<table>
<thead><tr><th>特徵</th><th>趨勢恢復</th><th>新趨勢</th></tr></thead><tbody>
<tr><td>回調結構</td><td>複雜但有序</td><td>可能非常混亂</td></tr>
<tr><td>回調幅度</td><td>通常 < 主趨勢 50%</td><td>可能 > 50%</td></tr>
<tr><td>方向</td><td>恢復原趨勢方向</td><td>可能是新方向</td></tr>
<tr><td>確認信號</td><td>清晰的 H2 + 均線重新發散</td><td>需要更多確認</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "形態定義",
                "html": `<ul>
<li class="ind0">價格以「台階狀」向上/下推進</li>
<li class="ind0">每段推進（腿）後有橫向整理（台階）</li>
<li class="ind0">再度突破台階，進入下一個台階</li>
<li class="ind0"><strong>Stairs = 「放大版的趨勢型交易區間日」</strong></li>
</ul>
<p>---</p>`
            },
            {
                "title": "與其他形態的區別",
                "html": `<table>
<thead><tr><th>形態</th><th>推進速度</th><th>整理時間</th><th>通道寬度</th></tr></thead><tbody>
<tr><td>Spike & Channel</td><td>很快</td><td>很短</td><td>較窄</td></tr>
<tr><td>趨勢型交易區間日</td><td>中等</td><td>中等</td><td>中等</td></tr>
<tr><td>Stairs（寬幅通道）</td><td>較慢</td><td>較長</td><td>較寬</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "操作策略",
                "html": `<h3>策略一：台階底部等 H2 做多</h3>
<ul>
<li class="ind0">在每個台階（橫向整理）的底部支撐等 H2</li>
<li class="ind0">止損：台階底部下方 1 tick</li>
<li class="ind0">目標：台階頂部（先平半倉）+ 突破後追加</li>
</ul>
<h3>策略二：突破台階後等回測</h3>
<ul>
<li class="ind0">等台階頂部被突破</li>
<li class="ind0">等第一次回測台階頂部（S/R Flip）</li>
<li class="ind0">在回測的 H2 進場</li>
</ul>
<h3>止盈目標（等距測量）</h3>
<ul>
<li class="ind0">每個台階的整理範圍（高度）通常相近</li>
<li class="ind0">整理高度 × 1 = 下一段推進的預期幅度</li>
</ul>
<p>---</p>`
            },
            {
                "title": "Stairs 的失效條件",
                "html": `<li class="numbered"><strong>台階底部被跌破（做多方向）</strong>：整個台階失效，立刻離場</li>
<li class="numbered"><strong>跌穿前一個台階的底部</strong>：更大範圍的趨勢可能反轉</li>
<li class="numbered"><strong>台階整理時間越來越長</strong>：趨勢動能持續衰退</li>
<li class="numbered"><strong>每個台階的高度越來越小</strong>：趨勢即將進入真正的交易區間</li>`
            }
        ],
        "id": "ch21"
    },
    {
        "title": "補充：進階反轉形態",
        "sub": "MTR · 三推楔形 · 高潮反轉",
        "sections": [
            {
                "title": "補充——進階反轉形態",
                "html": `<p>---</p>`
            },
            {
                "title": "定義",
                "html": `<p>MTR 是 PA 體系中<strong>最大幅度的反轉形態</strong>，代表一段主要趨勢的真正結束。</p>
<p>---</p>`
            },
            {
                "title": "四個必要條件（缺一不可）",
                "html": `<li class="numbered"><strong>前期有明確的主趨勢</strong>（不是區間，不是微弱趨勢）</li>
<li class="numbered"><strong>出現強勢逆勢運動</strong>：足以突破重要趨勢線或 20/50 EMA 的逆向推進（通常需要 3~5 根以上的連續逆向棒）</li>
<li class="numbered"><strong>對趨勢極值的測試</strong>：市場重新接近前高/低，形成以下三種結果之一：</li>
<p>   - 更高高點（Higher High）</p>
<p>   - 等高點（Double Top）</p>
<p>   - 較低高點（Lower High / 頭肩頂右肩）</p>
<li class="numbered"><strong>強力逆勢突破</strong>：突破前一個回調的關鍵位（頸線），最終確認反轉</li>
<p>---</p>`
            },
            {
                "title": "三種測試結果與成功機率",
                "html": `<h3>更高高點（Higher High）</h3>
<ul>
<li class="ind0">價格突破了前高，但無後續跟進 → 高潮結束</li>
<li class="ind0">MTR 成功機率：約 35%（相對最低）</li>
<li class="ind0">原因：多頭仍然有能力突破前高，只是動能不足</li>
</ul>
<h3>等高點（Double Top）</h3>
<ul>
<li class="ind0">價格測試前高但未突破，形成雙頂</li>
<li class="ind0">MTR 成功機率：約 50%（最常見的有效 MTR 形態）</li>
<li class="ind0">視覺清晰，市場記憶强</li>
</ul>
<h3>較低高點（Lower High / 右肩）</h3>
<ul>
<li class="ind0">價格連前高都無法測試，力量已明顯衰竭</li>
<li class="ind0">MTR 成功機率：約 60%（最高）</li>
<li class="ind0">結合趨勢線突破 + 右肩 = 標準頭肩頂形態</li>
</ul>
<p>---</p>`
            },
            {
                "title": "MTR 的兩種進場策略",
                "html": `<h3>左側進場（激進）</h3>
<ul>
<li class="ind0"><strong>時機</strong>：在測試前高時出現強反轉棒即進場</li>
<li class="ind0"><strong>優點</strong>：入場價格最好，盈虧比最高（可達 5:1 以上）</li>
<li class="ind0"><strong>缺點</strong>：可能只是普通回調，並非真正反轉（勝率約 35%~40%）</li>
<li class="ind0"><strong>止損</strong>：設在前高 + 1 tick（若是更高高點）或測試位的影線極值</li>
</ul>
<h3>右側進場（保守）</h3>
<ul>
<li class="ind0"><strong>時機</strong>：等突破前一個重要回調低點（頸線位置）後進場</li>
<li class="ind0"><strong>優點</strong>：勝率更高（約 55%~60%），確認度高</li>
<li class="ind0"><strong>缺點</strong>：入場價格差，盈虧比降低</li>
<li class="ind0"><strong>止損</strong>：突破位下方</li>
</ul>
<h3>最佳組合策略</h3>
<ul>
<li class="ind0"><strong>左側進半倉</strong>：利用高盈虧比，先建立小倉位</li>
<li class="ind0"><strong>突破頸線後加另外半倉</strong>：確認後再加大</li>
<li class="ind0"><strong>整體止損</strong>：統一設在邏輯失效點（前高 + 1 tick）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "MTR 的失效條件",
                "html": `<ul>
<li class="ind0">測試後行情<strong>繼續突破新高且後續有跟進</strong> → MTR 失效，恢復做多</li>
<li class="ind0">所謂的「右肩」反而成為新高點 → 強烈的末端旗形或趨勢加速信號</li>
<li class="ind0"><strong>失效後的含義</strong>：MTR 失效 = 強烈的順勢信號（被套的逆勢交易者大量認損，推動趨勢加速）</li>
</ul>
<p>---</p>`
            },
            {
                "title": "MTR 的現實統計",
                "html": `<ul>
<li class="ind0">成功率：約 40%（按照 Al Brooks 的估計）</li>
<li class="ind0">但成功時盈虧比通常 > 3:1，甚至 5:1 以上</li>
<li class="ind0">長期期望值計算：40% × 3R - 60% × 1R = 1.2R - 0.6R = <strong>0.6R（正期望值）</strong></li>
</ul>
<p>---</p>`
            },
            {
                "title": "形態識別",
                "html": `<h3>標準三推楔形的 5 個特徵</h3>
<li class="numbered"><strong>三次同方向推進</strong>（可以是連續的，也可以穿插回調）</li>
<li class="numbered"><strong>每次推進力度遞減</strong>（斜率越來越平，幅度越來越小）</li>
<li class="numbered"><strong>具體量化</strong>：第三推的幅度 < 第二推 < 第一推（可用等距測量確認）</li>
<li class="numbered"><strong>上下沿收斂</strong>（形成明顯的楔形輪廓）</li>
<li class="numbered"><strong>第三推後出現強反轉棒</strong>（高潮棒後的反向棒）</li>
<h3>識別時的常見錯誤</h3>
<ul>
<li class="ind0">三段推進力度相近（各約等大）→ 可能只是平行通道，不是楔形，不要逆勢</li>
<li class="ind0">第三推反而是最強的 → 可能是加速，不是衰竭，謹慎逆勢</li>
<li class="ind0">在趨勢初段（Spike 之後）就出現 → 太早，通常是回調，而非反轉</li>
</ul>
<p>---</p>`
            },
            {
                "title": "三種進場方式詳解",
                "html": `<h3>方式一：通道線掛單（激進，左側交易）</h3>
<p><strong>操作步驟</strong>：</p>
<li class="numbered">畫出楔形的上下兩條邊線</li>
<li class="numbered">預測第三推到達上/下邊線的目標位置</li>
<li class="numbered">在目標位置預先掛限價單</li>
<p><strong>優點</strong>：</p>
<ul>
<li class="ind0">入場價格最優</li>
<li class="ind0">盈虧比可達 4:1 以上</li>
<li class="ind0">若判斷正確，利潤最大</li>
</ul>
<p><strong>缺點</strong>：</p>
<ul>
<li class="ind0">形態未確認，可能第三推繼續延伸</li>
<li class="ind0">需要較高的主觀判斷能力</li>
</ul>
<p><strong>建議</strong>：配合 ATR 設定停損（如通道線外側 1~1.5 × ATR）</p>
<p>---</p>
<h3>方式二：突破趨勢線後進場（標準）</h3>
<p><strong>操作步驟</strong>：</p>
<li class="numbered">等第三推完成，出現強反轉棒</li>
<li class="numbered">等行情突破楔形的<strong>近側趨勢線</strong>（非原主趨勢方向那條）</li>
<li class="numbered">在突破後的回測進場（最常用）或直接突破進場</li>
<p><strong>優點</strong>：</p>
<ul>
<li class="ind0">有趨勢線突破作為確認</li>
<li class="ind0">止損位置明確（前極值）</li>
</ul>
<p><strong>缺點</strong>：</p>
<ul>
<li class="ind0">比通道線進場晚，盈虧比略低</li>
<li class="ind0">可能在突破後的回測中等待時間較長</li>
</ul>
<p>---</p>
<h3>方式三：突破回測前極值（保守，右側交易）</h3>
<p><strong>操作步驟</strong>：</p>
<li class="numbered">趨勢線已被突破</li>
<li class="numbered">行情回到前極值（楔形的第三推高點，做空方向）進行測試</li>
<li class="numbered">在前極值出現強反轉棒後進場</li>
<p><strong>優點</strong>：</p>
<ul>
<li class="ind0">最強的確認，勝率最高</li>
<li class="ind0">止損可以相對較小（只需設在前極值 + 1 tick）</li>
</ul>
<p><strong>缺點</strong>：</p>
<ul>
<li class="ind0">可能沒有回測（直接下跌），完全錯過</li>
<li class="ind0">入場價格最差，盈虧比最低</li>
</ul>
<p>---</p>`
            },
            {
                "title": "獲利目標設置",
                "html": `<table>
<thead><tr><th>目標</th><th>位置</th><th>建議操作</th></tr></thead><tbody>
<tr><td>第一目標</td><td>楔形第二推的起點（或略低）</td><td>平半倉</td></tr>
<tr><td>第二目標</td><td>楔形第一推的起點（整個楔形的底部）</td><td>追蹤剩餘</td></tr>
<tr><td>極端目標</td><td>主趨勢的更大結構目標</td><td>若反轉確認，持倉</td></tr>
</tbody></table>
<p>---</p>`
            },
            {
                "title": "三推楔形在不同背景下的應用",
                "html": `<h3>在大趨勢的回調末端（最可靠的用法）</h3>
<ul>
<li class="ind0">主趨勢向上，出現向下的三推楔形（回調）</li>
<li class="ind0">第三推結束 = 回調動能耗盡</li>
<li class="ind0">進場做多 = <strong>順大勢，逆小勢</strong>，這是最高概率的用法</li>
<li class="ind0">例：BTC 4H 多頭趨勢中，1H 圖出現向下三推楔形 → 1H 的 H2 做多</li>
</ul>
<h3>在趨勢末端（逆勢用法）</h3>
<ul>
<li class="ind0">主趨勢本身的三推楔形，代表主趨勢即將結束</li>
<li class="ind0">進場逆趨勢 = 風報比高但勝率較低（約 40%）</li>
<li class="ind0">需要配合更多確認信號</li>
</ul>
<h3>失效條件</h3>
<ul>
<li class="ind0">若形態完成後市場進入橫向收斂區間 → 形態失效，離場</li>
<li class="ind0">若第三推後沒有強反轉棒，只有弱十字星 → 等待更多確認，不要急進</li>
</ul>
<p>---</p>`
            },
            {
                "title": "識別標準",
                "html": `<h3>視覺特徵</h3>
<ul>
<li class="ind0">趨勢通道線的斜率<strong>急劇增加</strong>（加速）</li>
<li class="ind0">出現連續的<strong>大趨勢棒</strong>，實體越來越大</li>
<li class="ind0">通常<strong>突破趨勢通道線</strong>（過衝 Overshoot）</li>
<li class="ind0">成交量明顯放大（若可查）</li>
</ul>
<h3>博弈邏輯</h3>
<ul>
<li class="ind0"><strong>弱勢散戶</strong>：因害怕錯過行情而追高（買入高潮的例子），情緒主導</li>
<li class="ind0"><strong>強勢機構</strong>：趁散戶瘋狂入場時大量獲利了結，甚至反手</li>
<li class="ind0">當「最後一批逆勢者」（如空頭）的止損被觸發，市場失去了繼續推進的燃料</li>
</ul>
<p>---</p>`
            },
            {
                "title": "高潮後的三種演變",
                "html": `<h3>演變一：二次測試後反轉（MTR）</h3>
<pre><code>高潮 → 第一次回調 → 反彈測試前高（等高點或更低高點）→ MTR 確認 → 持續下跌</code></pre>
<ul>
<li class="ind0">最完整的反轉形態</li>
<li class="ind0">操作：在第二次測試時進場逆勢，止損設在前高 + 1 tick</li>
</ul>
<h3>演變二：直接進入交易區間</h3>
<pre><code>高潮 → 深幅回調 → 橫向震盪 → 多空方向不明確</code></pre>
<ul>
<li class="ind0">約 50%~60% 的高潮後情況</li>
<li class="ind0">操作：切換為交易區間策略</li>
</ul>
<h3>演變三：末端旗形（Final Flag）</h3>
<pre><code>高潮 → 短暫整理（旗形）→ 向原方向突破（但力度不足）→ 迅速反轉</code></pre>
<ul>
<li class="ind0">最陷阱的情況：看起來像趨勢繼續，但很快失敗</li>
<li class="ind0">操作：若突破後 1~3 根棒出現強反向棒 → 末端旗形確認，逆勢進場</li>
</ul>
<p>---</p>`
            },
            {
                "title": "高潮後操作策略",
                "html": `<h3>立即操作（激進）</h3>
<ul>
<li class="ind0">高潮棒後出現第一根強逆向棒 → 立即進場</li>
<li class="ind0">止損：高潮極值</li>
<li class="ind0">風險：可能只是短暫整理後繼續</li>
</ul>
<h3>等待二次測試（標準）</h3>
<ul>
<li class="ind0">等高潮後的第一次回調，再等反彈測試前高</li>
<li class="ind0">在前高附近出現弱棒或強反向棒時進場</li>
<li class="ind0">這是最平衡的選擇</li>
</ul>
<h3>等待末端旗形確認（保守）</h3>
<ul>
<li class="ind0">若出現整理形態，等整理突破失敗後進場</li>
<li class="ind0">確認度最高，但可能錯過最佳入場位</li>
</ul>
<p>---</p>`
            },
            {
                "title": "定義",
                "html": `<p>末端旗形是趨勢最後階段的整理形態，突破後的推進動能不足，很快反轉。</p>
<p><strong>結構</strong>：</p>
<pre><code>旗桿（強力推進）→ 旗子（短暫整理）→ 突破旗頂/底（假突破）→ 快速反轉</code></pre>
<p>---</p>`
            },
            {
                "title": "識別技巧",
                "html": `<li class="numbered"><strong>整理之前的旗桿動能不足</strong>：與前期 Spike 相比，這次旗桿明顯較弱</li>
<li class="numbered"><strong>旗子整理時間較短</strong>（2~5 根棒），且 K 線緊密重疊</li>
<li class="numbered"><strong>突破旗頂後，1~3 根棒內出現強反向棒</strong> → 假突破確認</li>
<li class="numbered"><strong>突破後沒有跟進棒</strong> → 多頭/空頭已無力繼續</li>
<p>---</p>`
            },
            {
                "title": "末端旗形的交易",
                "html": `<h3>進場時機</h3>
<ul>
<li class="ind0">等假突破確認（突破後 1~3 根棒內收回）</li>
<li class="ind0">收回後的 H2/L2（做反方向）</li>
<li class="ind0">或收回後的第一根強反向棒進場</li>
</ul>
<h3>止損</h3>
<ul>
<li class="ind0">假突破的極值 + 1 tick</li>
</ul>
<h3>目標</h3>
<ul>
<li class="ind0">第一目標：旗桿起點（整個旗形的底部）</li>
<li class="ind0">第二目標：更大結構的 S/R 位（若反轉確認）</li>
</ul>
<p>---</p>
<div class="callout co-warning"><div class="cot">末端旗形是最危險的陷阱之一</div><p>它看起來完全像正常的趨勢繼續（旗形整理後突破），因此大量交易者會在假突破時追進。但這些追進者立刻成為了「被套者」，他們的止損推動了反向行情。  識別末端旗形需要結合：前期高潮信號 + 動能遞減 + 假突破的快速確認。</p></div>
<p>---</p>`
            },
            {
                "title": "附錄：PA 術語表",
                "html": `<table>
<thead><tr><th>術語</th><th>全稱/含義</th></tr></thead><tbody>
<tr><td>AI</td><td>Always In — 永遠在場心態</td></tr>
<tr><td>ATR</td><td>Average True Range — 平均真實波幅，衡量近期波動性</td></tr>
<tr><td>Barb Wire</td><td>鐵絲網 — 連續重疊的 K 線 + 十字星，極度不確定</td></tr>
<tr><td>BOS</td><td>Break of Structure — 市場結構突破</td></tr>
<tr><td>Climax</td><td>高潮 — 趨勢末端的加速過熱推進</td></tr>
<tr><td>DLR</td><td>Direction of Least Resistance — 最小阻力方向</td></tr>
<tr><td>EH / EL</td><td>Equal Highs / Equal Lows — 等高/低點，流動性聚集位</td></tr>
<tr><td>Final Flag</td><td>末端旗形 — 趨勢最後的整理，突破後反轉</td></tr>
<tr><td>H1/H2/H3/H4</td><td>數 K 線高點系列，牛市回調中的第 1~4 次向上突破</td></tr>
<tr><td>L1/L2/L3/L4</td><td>數 K 線低點系列，熊市反彈中的第 1~4 次向下跌破</td></tr>
<tr><td>ii / iii</td><td>連續兩/三根內包棒的形態</td></tr>
<tr><td>MTR</td><td>Major Trend Reversal — 主要趨勢反轉</td></tr>
<tr><td>OB</td><td>Outside Bar — 外包棒（也可指 Order Block，注意區分）</td></tr>
<tr><td>Overshoot</td><td>過衝 — 突破趨勢通道線，高潮警示</td></tr>
<tr><td>PA</td><td>Price Action — 價格行為</td></tr>
<tr><td>PB</td><td>Pullback — 回調</td></tr>
<tr><td>S/R</td><td>Support / Resistance — 支撐/阻力</td></tr>
<tr><td>S/R Flip</td><td>支撐/阻力角色互換</td></tr>
<tr><td>Shaved Bar</td><td>去影線棒 — 無上/下影線的純趨勢棒</td></tr>
<tr><td>Setup</td><td>形態/進場條件組合</td></tr>
<tr><td>Signal Bar</td><td>信號棒 — 觸發進場的前一根棒</td></tr>
<tr><td>Entry Bar</td><td>進場棒 — 實際突破信號棒的那根棒</td></tr>
<tr><td>Spike</td><td>極速段 — 1~5 根連續大趨勢棒的快速推進</td></tr>
<tr><td>Spike & Channel</td><td>極速—通道趨勢，健康強趨勢的典型結構</td></tr>
<tr><td>Stop Hunt</td><td>止損獵殺 — 機構製造假突破，清洗散戶止損</td></tr>
<tr><td>Swing High / Low</td><td>波段高點/低點</td></tr>
<tr><td>TR</td><td>Trading Range — 交易區間</td></tr>
<tr><td>Trapped Traders</td><td>被套者 — 在不佳位置進場被套，其認損推動行情</td></tr>
<tr><td>Two-Bar Reversal</td><td>雙棒反轉</td></tr>
<tr><td>Two-Legged PB</td><td>兩腿回調 — H2/L2 的母結構</td></tr>
<tr><td>Vacuum</td><td>買/賣壓真空 — 主力暫時缺席造成快速移動</td></tr>
<tr><td>Wedge</td><td>楔形 — 三推收斂，能量遞減</td></tr>
</tbody></table>`
            }
        ],
        "id": "supp"
    }
];