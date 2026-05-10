/**
 * Bollinger Bands (BB) 課程數據 - 深度量化與微觀結構分析版
 * 基於最新市場微觀結構理論與量化金融前沿研究的全面重構
 */

var CHAPTERS = [
    {
        "title": "布林通道：量化金融的統計邊界理論",
        "sub": "從包絡線演進到現代市場微觀結構分析",
        "sections": [
            {
                "title": "統計學革命：從固定百分比到動態標準差",
                "html": `
                    <p>布林通道的誕生標誌著技術分析從經驗主義向統計學的重大轉型。John Bollinger 於 1980 年代初期的創新在於引入了動態波動率調整機制，徹底解決了固定百分比通道無法適應市場異質波動的根本缺陷。</p>

                    <div class="callout co-important">
                        <div class="cot">數學基礎與分佈假設</div>
                        <p>布林通道建立在常態分佈統計學基礎上：中軌為 n 期移動平均，上下軌分別為中軌 ± k 倍標準差。在嚴格常態分佈假設下，±2σ 理論上應涵蓋 95.4% 的價格分佈，但金融市場的「尖峰胖尾」特徵使實際極端事件頻率遠超理論預測。</p>
                    </div>

                    <p><strong>核心計算公式：</strong></p>
                    <ul>
                        <li><strong>中軸 (Middle Band):</strong> $$MA(n) = \\frac{1}{n}\\sum_{i=1}^{n} \\text{Price}_{i}$$</li>
                        <li><strong>標準差:</strong> $$\\sigma = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}(\\text{Price}_{i} - MA)^2}$$</li>
                        <li><strong>上軌 (Upper Band):</strong> $UB = MA(n) + k \\times \\sigma$</li>
                        <li><strong>下軌 (Lower Band):</strong> $LB = MA(n) - k \\times \\sigma$</li>
                    </ul>

                    <p>其中預設參數 (20, 2) 的選擇並非任意，而是基於 Bollinger 對大量歷史數據的回測優化，在捕獲波動與減少假信號之間達到最佳平衡。</p>
                `
            },
            {
                "title": "時間序列與計量經濟學等效性證明",
                "html": `
                    <p>現代學術研究證實，布林通道在數學上完全等價於「僅含截距的滾動迴歸時間序列模型」。這一發現將技術指標提升至嚴格的統計學高度。</p>

                    <div class="callout co-note">
                        <div class="cot">滾動迴歸模型等效性</div>
                        <p>在滾動窗口迴歸模型 $Y_{t} = \\alpha + \\varepsilon_{t}$ 中：<br>
                        • 截距項 α 的最小平方估計值等於移動平均線<br>
                        • 殘差標準差 $\\sigma_{\\varepsilon}$ 等於布林通道的標準差計算<br>
                        • 上下軌構成了一步前瞻預測區間的近似值</p>
                    </div>

                    <p><strong>低通濾波器特性：</strong>從信號處理角度，布林通道中軌實質上是一個低通濾波器，能有效濾除市場的高頻隨機噪音，揭示潛在的趨勢方向。進階研究引入小波分析進行預處理，可顯著改善風險調整後收益。</p>

                    <p><strong>動態參數優化準則：</strong>Bollinger 提出的動態調整法則具有深刻統計意義：</p>
                    <ul>
                        <li>n = 10 期時，建議 k = 1.9（短期高敏感）</li>
                        <li>n = 20 期時，標準 k = 2.0（中期平衡）</li>
                        <li>n = 50 期時，建議 k = 2.1（長期穩健）</li>
                    </ul>

                    <p>這種調整避免了曲線過度擬合，確保統計邊界的穩健性。</p>
                `
            },
            {
                "title": "現代市場微觀結構下的布林通道重新詮釋",
                "html": `
                    <p>傳統技術分析將布林通道視為簡單的超買超賣指標，但現代市場微觀結構理論揭示了其更深層的流動性映射功能。</p>

                    <div class="callout co-warning">
                        <div class="cot">流動性池與止損獵殺機制</div>
                        <p>布林通道 ±2σ 區域實際上是散戶止損單的天然聚集地。機構利用演算法精確計算這些流動性池的位置，通過短期推動價格至外軌觸發止損，再利用被動湧現的對手盤完成大宗交易。這解釋了為何價格經常在觸及外軌後出現帶長影線的反轉。</p>
                    </div>

                    <p><strong>高頻交易影響下的流動性真空效應：</strong></p>
                    <ul>
                        <li><strong>正常狀態：</strong>訂單簿兩側充滿做市商限價單</li>
                        <li><strong>突破時刻：</strong>HFT 演算法識別動能失衡，毫秒級撤銷流動性</li>
                        <li><strong>真空狀態：</strong>微小市價單在流動性真空中造成價格垂直移動</li>
                        <li><strong>回歸階段：</strong>缺乏真實支撐導致劇烈均值回歸</li>
                    </ul>

                    <p>現代交易員必須理解這種微觀結構動力學，才能正確解讀布林通道信號。</p>
                `
            },
            {
                "title": "暗池交易與延遲套利的隱藏博弈",
                "html": `
                    <p>隨著市場結構碎片化，約40%的機構訂單轉移至暗池執行。這創造了公開市場與暗池之間的複雜套利機會，布林通道成為關鍵的價格發現工具。</p>

                    <div class="callout co-tip">
                        <div class="cot">機構足跡識別技術</div>
                        <p>專業交易者通過以下技術識別機構活動：<br>
                        1. 監控布林外軌突破時的真實成交量（非價格）<br>
                        2. 觀察暗池指標（如 ATS 成交量）的異常<br>
                        3. 分析訂單流不平衡與價格動作的背離<br>
                        4. 檢測延遲套利者的特徵性足跡</p>
                    </div>

                    <p><strong>延遲套利的運作機制：</strong></p>
                    <ol>
                        <li><strong>資訊優勢階段：</strong>HFT 率先偵測到暗池大宗交易信息</li>
                        <li><strong>預positioned階段：</strong>在公開市場建立有利部位</li>
                        <li><strong>觸發階段：</strong>推動價格至布林外軌，觸發追隨性演算法</li>
                        <li><strong>套利階段：</strong>利用公開市場與暗池的短暫價差獲利</li>
                    </ol>

                    <p>理解這種博弈結構對於避免成為「聰明錢」的對手盤至關重要。</p>
                `
            },
            {
                "title": "量化基金的配對交易與統計套利策略",
                "html": `
                    <p>在機構級量化交易中，布林通道的最重要應用是統計套利和配對交易，這代表了該指標在現代金融中的最高形式。</p>

                    <p><strong>協整性配對交易模型：</strong></p>
                    <div class="callout co-important">
                        <div class="cot">數學建模框架</div>
                        <p>對於兩個協整資產 X 和 Z：<br>
                        • 價格比率：$y_{t} = \\ln\\left(\\frac{P_{Z}}{P_{X}}\\right)_{t}$<br>
                        • 對 $y_{t}$ 應用布林通道：$BB(y_{t}, n, k)$<br>
                        • 當 $y_{t} > UB$ 時：做空 Z，做多 X<br>
                        • 當 $y_{t} < LB$ 時：做多 Z，做空 X<br>
                        • 退場條件：$y_{t}$ 回歸中軌</p>
                    </div>

                    <p><strong>全球量化基金的宏觀影響：</strong></p>
                    <ul>
                        <li>數千個演算法同時執行基於布林通道的統計套利</li>
                        <li>形成強大的均值回歸力量，賦予通道軌道真實的物理意義</li>
                        <li>創造自我實現的預言效應</li>
                        <li>在市場壓力下提供系統性流動性</li>
                    </ul>

                    <p><strong>風險管理與停機準則：</strong></p>
                    <ul>
                        <li>協整關係破裂檢測（Engle-Granger檢驗）</li>
                        <li>極端市場制度下的策略暫停</li>
                        <li>動態調整持倉大小以控制最大回撤</li>
                    </ul>
                `
            },
            {
                "title": "波動率制度切換與動態參數優化",
                "html": `
                    <p>金融市場頻繁在高波動與低波動制度間切換，靜態布林通道參數無法適應這種結構性變化，催生了多種進階演算法。</p>

                    <p><strong>GARCH-BB 混合模型：</strong></p>
                    <div class="callout co-note">
                        <div class="cot">動態波動率建模</div>
                        <p>結合 GARCH(1,1) 模型預測條件波動率：<br>
                        $$\\sigma^2_{t+1} = \\omega + \\alpha \\cdot \\varepsilon^2_{t} + \\beta \\cdot \\sigma^2_{t}$$
                        <br>
                        動態調整標準差乘數：<br>
                        $$k_{dynamic} = k_{base} \\times f\\left(\\frac{\\sigma_{GARCH}}{\\sigma_{historical}}\\right)$$
                        <br>
                        在高波動制度下自動擴大通道寬度，低波動時收縮參數以提高敏感度。</p>
                    </div>

                    <p><strong>ATR-卡爾曼混合系統：</strong></p>
                    <ul>
                        <li><strong>卡爾曼濾波中軌：</strong>零延遲趨勢跟蹤，消除傳統MA滯後</li>
                        <li><strong>ATR波動率包絡：</strong>基於真實波幅而非標準差計算軌道</li>
                        <li><strong>制度識別：</strong>自動檢測趨勢/震盪制度並調整參數</li>
                    </ul>

                    <p><strong>BBTrend 進階指標：</strong></p>
                    <p>Bollinger 開發的趨勢量化指標：</p>
                    $$BBTrend = \\frac{|BB_{short,lower} - BB_{long,lower}| - |BB_{short,upper} - BB_{long,upper}|}{BB_{short,middle}} \\times 100$$
                    <ul>
                        <li>正值：多頭趨勢強度</li>
                        <li>負值：空頭趨勢強度</li>
                        <li>絕對值：動能強度量化</li>
                    </ul>
                `
            },
            {
                "title": "%b 指標與通道寬度的量化應用",
                "html": `
                    <p>消除主觀判斷的關鍵在於將布林通道視覺信號轉換為可計算的數值指標。</p>

                    <p><strong>%b 指標的精確定義：</strong></p>
                    $$\%b = \\frac{Price - Lower_{Band}}{Upper_{Band} - Lower_{Band}}$$

                    <div class="callout co-tip">
                        <div class="cot">%b 指標的交易信號</div>
                        <ul>
                            <li><strong>%b > 1：</strong>價格突破上軌，潛在超買</li>
                            <li><strong>%b = 0.5：</strong>價格位於中軌，均衡狀態</li>
                            <li><strong>%b < 0：</strong>價格突破下軌，潛在超賣</li>
                            <li><strong>%b 背離：</strong>價格創新高而 %b 未創新高，預示動能衰減</li>
                        </ul>
                    </div>

                    <p><strong>通道寬度 (BandWidth) 分析：</strong></p>
                    $$BandWidth = \\frac{Upper_{Band} - Lower_{Band}}{Middle_{Band}} \\times 100$$

                    <p><strong>擠壓檢測演算法：</strong></p>
                    <ul>
                        <li><strong>絕對擠壓：</strong>BandWidth 降至 n 期最低值</li>
                        <li><strong>相對擠壓：</strong>當前 BW < 歷史 BW 的第 20 百分位</li>
                        <li><strong>擠壓強度：</strong>$BW_{current} / BW_{6month\_avg} < 0.5$</li>
                    </ul>

                    <p><strong>爆發預測模型：</strong></p>
                    <ul>
                        <li>擠壓持續期達到歷史中位數以上</li>
                        <li>成交量萎縮至平均水準50%以下</li>
                        <li>價格在中軌附近橫盤整理</li>
                        <li>ATR 降至近期最低水準</li>
                    </ul>
                `
            },
            {
                "title": "Bollinger Squeeze 交易系統的深度解構",
                "html": `
                    <p>波動率擠壓是布林通道最著名的應用，但成功執行需要精密的系統化方法。</p>

                    <div class="callout co-important">
                        <div class="cot">LazyBear Squeeze Momentum 指標原理</div>
                        <p><strong>核心邏輯：</strong>將基於標準差的布林通道與基於 ATR 的肯特納通道疊加<br>
                        <strong>Squeeze On：</strong>BB 完全位於 KC 內部，波動率極度壓縮<br>
                        <strong>Squeeze Off：</strong>BB 突破 KC 邊界，爆發式擴張開始<br>
                        <strong>動能確認：</strong>線性迴歸斜率指標驗證突破方向</p>
                    </div>

                    <p><strong>量化進場條件：</strong></p>
                    <ol>
                        <li><strong>擠壓識別：</strong>BB 內軌完全位於 KC 內軌之內，持續 ≥ 5 根 K 線</li>
                        <li><strong>爆發信號：</strong>BB 外軌突破 KC 外軌</li>
                        <li><strong>動能確認：</strong>動能直方圖連續 2 根同色柱體</li>
                        <li><strong>成交量確認：</strong>爆發當日成交量 > 20 日平均</li>
                    </ol>

                    <p><strong>勝率優化技術：</strong></p>
                    <ul>
                        <li><strong>多時間框架確認：</strong>日線擠壓 + 4H 確認</li>
                        <li><strong>結構支撐：</strong>爆發方向與關鍵支撐阻力一致</li>
                        <li><strong>宏觀過濾：</strong>避開重大事件期間的假突破</li>
                    </ul>

                    <p><strong>止損與止盈框架：</strong></p>
                    <ul>
                        <li><strong>初始止損：</strong>擠壓期間的相對低點/高點</li>
                        <li><strong>追蹤止損：</strong>以中軌為動態止損線</li>
                        <li><strong>目標設定：</strong>對側軌道或結構性阻力位</li>
                    </ul>
                `
            },
            {
                "title": "沿軌漫步現象的交易心理學與資金管理",
                "html": `
                    <p>「沿軌漫步」是布林通道交易中最危險的陷阱之一，體現了市場強勢趨勢下的極端行為。</p>

                    <div class="callout co-warning">
                        <div class="cot">沿軌漫步的辨識與應對</div>
                        <p><strong>特徵識別：</strong><br>
                        • 價格連續 5+ 根 K 線收盤於上軌外側<br>
                        • ADX > 25 確認強趨勢環境<br>
                        • 下軌持續向下張開（波動率擴張）<br>
                        • MACD 或動量指標顯示持續強化<br>
                        <br>
                        <strong>錯誤應對：</strong>基於「超買」假設的逆勢做空<br>
                        <strong>正確策略：</strong>等待下軌停止擴張並向上勾頭才考慮反轉</p>
                    </div>

                    <p><strong>強趨勢下的操作紀律：</strong></p>
                    <ul>
                        <li><strong>趨勢跟隨：</strong>在中軌獲得支撐時加碼做多</li>
                        <li><strong>分批進場：</strong>避免單點進場的時機風險</li>
                        <li><strong>動態止損：</strong>以下軌或中軌為追蹤止損線</li>
                        <li><strong>部位管理：</strong>隨著軌道擴張逐步減少新增部位</li>
                    </ul>

                    <p><strong>心理陷阱克服技術：</strong></p>
                    <ol>
                        <li><strong>統計謬誤：</strong>認識到「觸軌即反轉」的認知偏誤</li>
                        <li><strong>制度意識：</strong>區分震盪制度與趨勢制度的參數差異</li>
                        <li><strong>資金管理：</strong>強趨勢期間降低槓桿比例</li>
                        <li><strong>耐心等待：</strong>等待真正的趨勢衰竭信號</li>
                    </ol>
                `
            },
            {
                "title": "與 SMC 理論的深度融合：流動性掃蕩雷達",
                "html": `
                    <p>Smart Money Concept (SMC) 與布林通道的結合創造了現代機構級交易的強大工具，能夠精確映射流動性池位置並預測機構行為。</p>

                    <div class="callout co-important">
                        <div class="cot">流動性掃蕩的微觀機制</div>
                        <p><strong>散戶行為模式：</strong>在支撐下方或阻力上方設置止損<br>
                        <strong>統計聚集點：</strong>布林通道 ±2σ 外側正是止損密集區<br>
                        <strong>機構策略：</strong>短期推動價格觸發止損，利用被動流動性建倉<br>
                        <strong>視覺標記：</strong>長影線刺穿外軌後迅速收回通道內部</p>
                    </div>

                    <p><strong>SMC-BB 協同分析框架：</strong></p>

                    <table style="width:100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: var(--bg-secondary);">
                                <th style="padding: 8px; border: 1px solid var(--border); text-align: left;">階段</th>
                                <th style="padding: 8px; border: 1px solid var(--border); text-align: left;">SMC 信號</th>
                                <th style="padding: 8px; border: 1px solid var(--border); text-align: left;">布林通道狀態</th>
                                <th style="padding: 8px; border: 1px solid var(--border); text-align: left;">機構意圖</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">流動性掃蕩</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">刺穿前高/低形成長影線</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">價格短暫突破 2σ 外軌</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">獵殺散戶止損獲取流動性</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">結構破壞</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">實體突破關鍵支撐/阻力</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">強勢收盤於中軌另一側</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">確認真實方向性移動</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">失衡創造</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">產生公允價值缺口 (FVG)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">BBTrend 柱狀圖翻轉</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">機構大單引發定價失衡</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">精確進場</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">回調至 FVG 或訂單塊</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">接近中軌，BandWidth 收縮</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">機構在公允價格區加倉</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                "title": "ICT 概念整合：訂單塊與公允價值缺口的統計邊界",
                "html": `
                    <p>Inner Circle Trader (ICT) 概念與布林通道的結合提供了機構交易行為的完整解讀框架，將主觀的市場結構分析轉化為客觀的統計邊界。</p>

                    <p><strong>三幕式進場執行模型：</strong></p>

                    <div class="callout co-tip">
                        <div class="cot">完美執行的三個階段</div>
                        <p><strong>第一幕 - 誘導與掃蕩：</strong><br>
                        推動價格刺穿布林外軌，完成流動性獵殺，留下特徵性長影線<br><br>

                        <strong>第二幕 - 位移與失衡：</strong><br>
                        機構資金湧入造成劇烈反向移動，強勢貫穿中軌，創造三根K線組成的公允價值缺口 (FVG)<br><br>

                        <strong>第三幕 - 重測與精確進場：</strong><br>
                        價格回調填補 FVG 並觸及訂單塊 (OB)，此時通常恰好回測中軌且通道收縮</p>
                    </div>

                    <p><strong>量化確認清單：</strong></p>
                    <ul>
                        <li><strong>掃蕩確認：</strong>%b > 1.2 且隨後快速回落至 %b < 0.9</li>
                        <li><strong>FVG 品質：</strong>三根K線無重疊且伴隨成交量放大</li>
                        <li><strong>OB 有效性：</strong>發動前最後一根反向K線，位於統計中位數附近</li>
                        <li><strong>進場時機：</strong>回調至 FVG 50%-75% 回補區域</li>
                        <li><strong>止損設置：</strong>OB 對側邊界外 1ATR 距離</li>
                    </ul>

                    <p><strong>決策權重分配邏輯：</strong></p>
                    <ul>
                        <li><strong>結構破壞 (50%)：</strong>是否有明確的支撐阻力突破配合 FVG？</li>
                        <li><strong>流動性掃蕩 (30%)：</strong>外軌突破是否精準完成對流動性池的掃蕩？</li>
                        <li><strong>統計極值 (20%)：</strong>%b 和 BandWidth 是否達到極端水準？</li>
                    </ul>
                `
            },
            {
                "title": "Volume Profile 與籌碼分析的協同效應",
                "html": `
                    <p>成交量分佈圖 (Volume Profile) 與布林通道的結合實現了價格極值與籌碼密集度的雙重確認，提供了極高勝率的反轉交易機會。</p>

                    <div class="callout co-note">
                        <div class="cot">波動率極限與籌碼壁壘的共振原理</div>
                        <p><strong>統計邊界：</strong>布林外軌標示價格的統計學極端位置<br>
                        <strong>流動性壁壘：</strong>高成交量節點 (HVN) 代表籌碼密集的價值認同區<br>
                        <strong>共振效應：</strong>當外軌突破恰好觸及 HVN 或價值區間邊界時，統計極值遇上流動性阻力<br>
                        <strong>反轉確認：</strong>雙重阻力提供強力的均值回歸動力</p>
                    </div>

                    <p><strong>VP-BB 交易系統設計：</strong></p>

                    <p><strong>1. 重疊區域識別：</strong></p>
                    <ul>
                        <li>布林上軌 +2σ 與 Value Area High (VAH) 的重疊</li>
                        <li>布林下軌 -2σ 與 Value Area Low (VAL) 的重疊</li>
                        <li>外軌突破至高成交量節點 (HVN) 區域</li>
                        <li>低成交量節點 (LVN) 與通道中軌的對應關係</li>
                    </ul>

                    <p><strong>2. 量化進場條件：</strong></p>
                    <ul>
                        <li>%b 達到 1.1-1.3 極端區間</li>
                        <li>當日成交量集中在 HVN ± 5% 價格區間</li>
                        <li>Point of Control (POC) 線提供動態支撑/阻力</li>
                        <li>成交量加權平均價 (VWAP) 與中軌方向一致</li>
                    </ul>

                    <p><strong>3. 風險管理框架：</strong></p>
                    <ul>
                        <li><strong>止損設置：</strong>突破 HVN 邊界外 0.5 ATR</li>
                        <li><strong>部位分配：</strong>根據 VP 顯示的阻力強度調整倉位</li>
                        <li><strong>止盈策略：</strong>分批在 POC、VAH/VAL、對側軌道獲利</li>
                    </ul>
                `
            },
            {
                "title": "加密貨幣市場的極端參數優化與清算分析",
                "html": `
                    <p>加密貨幣市場的高槓桿環境和極端波動率特徵需要專門的布林通道參數優化，結合清算熱力圖分析可以顯著提升策略勝率。</p>

                    <div class="callout co-warning">
                        <div class="cot">Crypto 市場的特殊性挑戰</div>
                        <p><strong>尖峰胖尾特徵：</strong>極端價格事件頻率遠超傳統金融市場<br>
                        <strong>24/7 交易：</strong>無休市保護，流動性時段差異巨大<br>
                        <strong>高槓桿環境：</strong>100x 槓桿下微小波動即觸發爆倉<br>
                        <strong>機器人主導：</strong>70%+ 交易由演算法執行<br>
                        <strong>監管不確定性：</strong>政策風險引發極端波動</p>
                    </div>

                    <p><strong>Crypto 專用參數優化：</strong></p>

                    <p><strong>1. 主流幣 (BTC/ETH) 設定：</strong></p>
                    <ul>
                        <li><strong>日線級別：</strong>(50, 2.5) - 拉長週期濾除雜訊</li>
                        <li><strong>4H 級別：</strong>(34, 2.2) - 基於斐波那契數列</li>
                        <li><strong>1H 級別：</strong>(21, 2.0) - 平衡靈敏度與穩定性</li>
                    </ul>

                    <p><strong>2. 山寨幣 (Altcoins) 設定：</strong></p>
                    <ul>
                        <li><strong>高波動幣：</strong>(100, 3.0) - 極寬容忍區間</li>
                        <li><strong>穩定幣對：</strong>(20, 1.5) - 高敏感度捕獲微波動</li>
                        <li><strong>新幣種：</strong>(200, 3.5) - 超長期平滑極端噪音</li>
                    </ul>

                    <p><strong>清算熱力圖整合策略：</strong></p>

                    <div class="callout co-tip">
                        <div class="cot">3σ 清算獵殺模型</div>
                        <p><strong>理論基礎：</strong>3σ 外軌通常與大額清算密集區完美重合<br>
                        <strong>獵殺機制：</strong>價格被推至 3σ 觸發連鎖爆倉<br>
                        <strong>反轉信號：</strong>清算完成後缺乏真實買盤支撐<br>
                        <strong>執行特徵：</strong>極長影線 + 大幅度反轉</p>
                    </div>

                    <p><strong>量化清算分析指標：</strong></p>
                    <ul>
                        <li><strong>清算密度：</strong>監控 3σ 區域的未平倉合約集中度</li>
                        <li><strong>資金費率：</strong>極端費率預示強制平倉壓力</li>
                        <li><strong>期現價差：</strong>極端升貼水暗示機構套利活動</li>
                        <li><strong>鯨魚錢包：</strong>大額地址異動與價格推動的關聯</li>
                    </ul>
                `
            },
            {
                "title": "多時間框架分析與分形幾何應用",
                "html": `
                    <p>布林通道在不同時間框架下呈現分形特徵，多層次分析可以顯著提高交易信號的可靠性和精確度。</p>

                    <p><strong>分形布林通道理論：</strong></p>

                    <div class="callout co-important">
                        <div class="cot">多重時間框架的分形對應</div>
                        <p><strong>日線趨勢：</strong>定義主要方向和長期支撐阻力<br>
                        <strong>4H 結構：</strong>識別中期修正和反彈的邊界<br>
                        <strong>1H 執行：</strong>精確進場時機和短期波動捕獲<br>
                        <strong>15M 確認：</strong>驗證突破真實性和假突破過濾<br>
                        <br>
                        <strong>分形一致性：</strong>各時間框架布林通道方向趨同時信號最強</p>
                    </div>

                    <p><strong>多週期協同分析框架：</strong></p>

                    <table style="width:100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: var(--bg-secondary);">
                                <th style="padding: 8px; border: 1px solid var(--border);">時間框架</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">功能定位</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">參數設定</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">權重分配</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">週線 (W1)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">宏觀趨勢過濾</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">(50, 2.5)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">40% 方向確認</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">日線 (D1)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">主趨勢定義</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">(34, 2.2)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">30% 結構分析</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">4小時 (H4)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">波段識別</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">(21, 2.0)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">20% 時機選擇</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">1小時 (H1)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">精確進場</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">(20, 1.8)</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">10% 執行確認</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>分形共振交易信號：</strong></p>
                    <ol>
                        <li><strong>週線確認：</strong>價格位於週線布林通道的有利側</li>
                        <li><strong>日線結構：</strong>突破日線中軌且波段完整</li>
                        <li><strong>4H 觸發：</strong>4H 級別出現擠壓爆發信號</li>
                        <li><strong>1H 執行：</strong>回調至 1H 中軌或下軌獲得支撑</li>
                        <li><strong>15M 確認：</strong>15 分鐘級別動量指標配合</li>
                    </ol>
                `
            },
            {
                "title": "黑天鵝事件與極端市場條件下的防禦機制",
                "html": `
                    <p>在面臨系統性風險和極端市場事件時，傳統布林通道的統計假設完全失效，需要專門的風險管理框架。</p>

                    <div class="callout co-warning">
                        <div class="cot">歷史極端事件案例分析</div>
                        <p><strong>2015 瑞郎黑天鵝：</strong>15 分鐘暴漲 30%，刺穿無數標準差<br>
                        <strong>2020 COVID 崩盤：</strong>VIX 飆升至 80+，相關性趨近 1<br>
                        <strong>2021 Archegos 爆倉：</strong>單一事件引發系統性流動性枯竭<br>
                        <strong>2022 LUNA 歸零：</strong>演算法穩定幣死亡螺旋<br>
                        <br>
                        <strong>共同特徵：</strong>歷史數據完全失去預測能力，布林通道無限拉伸</p>
                    </div>

                    <p><strong>極端事件預警系統：</strong></p>

                    <p><strong>1. 宏觀風險監控：</strong></p>
                    <ul>
                        <li><strong>VIX 恐慌指數：</strong>超過 30 時暫停均值回歸策略</li>
                        <li><strong>信用利差：</strong>投資級與高收益債券利差急劇擴大</li>
                        <li><strong>匯率波動：</strong>主要貨幣對日內波動超過 2%</li>
                        <li><strong>流動性指標：</strong>買賣價差異常擴大</li>
                    </ul>

                    <p><strong>2. 微觀結構異常：</strong></p>
                    <ul>
                        <li><strong>成交量異常：</strong>單日成交量超過 20 日平均 5 倍</li>
                        <li><strong>跳空缺口：</strong>開盤跳空超過 ATR 的 3 倍</li>
                        <li><strong>Flash Crash：</strong>5 分鐘內下跌超過 5%</li>
                        <li><strong>流動性真空：</strong>訂單簿深度驟減 50% 以上</li>
                    </ul>

                    <p><strong>防禦性操作準則：</strong></p>

                    <div class="callout co-important">
                        <div class="cot">黑天鵝生存指南</div>
                        <p><strong>預防性措施：</strong><br>
                        • 重大事件前 24-48 小時暫停新開倉<br>
                        • 使用硬性止損單而非動態止損<br>
                        • 降低單筆交易風險至資本的 0.5% 以下<br>
                        • 持有部分現金或避險資產<br>
                        <br>
                        <strong>事件中應對：</strong><br>
                        • 立即停止所有演算法交易<br>
                        • 手動管理現有部位<br>
                        • 避免接飛刀或抄底<br>
                        • 等待波動率正常化後再次啟動</p>
                    </div>
                `
            },
            {
                "title": "演算法交易的自動化實現與回測框架",
                "html": `
                    <p>將布林通道理論轉化為可執行的演算法交易系統需要嚴格的系統化方法和全面的回測驗證。</p>

                    <p><strong>系統架構設計：</strong></p>

                    <div class="callout co-note">
                        <div class="cot">模組化交易系統架構</div>
                        <p><strong>數據模組：</strong>實時行情、歷史數據、基本面數據整合<br>
                        <strong>指標計算：</strong>多時間框架布林通道、%b、BandWidth 等衍生指標<br>
                        <strong>信號生成：</strong>規則引擎、機器學習模型、多因子評分<br>
                        <strong>風險管理：</strong>部位大小、止損止盈、相關性控制<br>
                        <strong>執行引擎：</strong>訂單管理、滑價控制、延遲優化<br>
                        <strong>監控報告：</strong>實時 P&L、風險指標、績效歸因</p>
                    </div>

                    <p><strong>核心演算法邏輯：</strong></p>

                    <p><strong>1. 多因子評分模型：</strong></p>
                    <ul>
                        <li><strong>統計因子 (25%)：</strong>%b 極值、BandWidth 百分位、Z-score</li>
                        <li><strong>動量因子 (25%)：</strong>BBTrend、MACD、RSI 背離</li>
                        <li><strong>結構因子 (25%)：</strong>支撐阻力、趨勢線、圖形型態</li>
                        <li><strong>流動性因子 (25%)：</strong>成交量、價差、訂單簿深度</li>
                    </ul>

                    <p><strong>2. 機器學習增強：</strong></p>
                    <ul>
                        <li><strong>特徵工程：</strong>100+ 技術指標、市場制度、宏觀變數</li>
                        <li><strong>模型選擇：</strong>XGBoost、LSTM、Transformer 架構</li>
                        <li><strong>標籤定義：</strong>未來 5/20/60 期收益率分位數</li>
                        <li><strong>樣本權重：</strong>基於時間衰減和波動率調整</li>
                    </ul>

                    <p><strong>回測與驗證框架：</strong></p>

                    <table style="width:100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: var(--bg-secondary);">
                                <th style="padding: 8px; border: 1px solid var(--border);">指標類別</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">核心指標</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">目標範圍</th>
                                <th style="padding: 8px; border: 1px solid var(--border);">基準比較</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">報酬指標</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">年化報酬率</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">15-25%</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">vs 指數 +5%</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">風險指標</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">最大回撤</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">< 15%</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">指數回撤 -50%</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">效率指標</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">夏普比率</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">> 1.5</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">vs 市場 2x</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid var(--border);">穩定性指標</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">勝率</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">55-65%</td>
                                <td style="padding: 8px; border: 1px solid var(--border);">vs 隨機 50%</td>
                            </tr>
                        </tbody>
                    </table>
                `
            }
        ],
        "id": "bb-comprehensive"
    }
];