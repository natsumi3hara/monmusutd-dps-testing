document.write(`
<style>
#flex-container-otherPassive-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-otherPassive-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-otherPassive-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-otherPassive-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.otherPassive-buff-img{
    height: 75px;
    flex:3;
}
.otherPassive-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.otherPassive-buff-label{
    font-size:0.8em;
    flex:1;
}
.otherPassive-check{
    margin:auto;
    flex:1;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">味方パッシブ（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-otherPassive-buff">
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10005_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">シルフィーネ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">風マス配置</span>
                <input type="checkbox" id="otherPassive10005" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10060_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">バウ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10060" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10067_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ディリオ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10067" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="awake10067" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10121_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ペント</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10121" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10137_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">灯火ミテラス</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10137-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">攻撃力</span>
                <input id="otherPassive10137-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10148_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">たまも</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10148-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">物理防御</span>
                <input id="otherPassive10148-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10153_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ピューリ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">状態</span>
                <select name="otherPassive10153-1" id="otherPassive10153-1" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="none">無し</option>
                    <option value="deploy">配置</option>
                    <option value="skill">スキル中</option>
                </select>
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10171_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ココノハ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10171-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">妖怪人数</span>
                <input id="otherPassive10171-2" type="number" min="1" max="50" value="1" class="otherPassive-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10179_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">マシュロア</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10179-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">ゴブリン数</span>
                <input id="otherPassive10179-2" type="number" min="1" max="50" value="1" class="otherPassive-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10185_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ウスコ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10185-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">状態</span>
                <select name="otherPassive10185-2" id="otherPassive10185-2" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="none">無し</option>
                    <option value="deploy">配置</option>
                    <option value="skill">スキル中</option>
                </select>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10202_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">号令アルギュロ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">状態</span>
                <select name="otherPassive10202-1" id="otherPassive10202-1" class="otherPassive-check" style="width:80%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="15">通常</option>
                    <option value="30">通常+スキル</option>
                    <option value="20">完凸</option>
                    <option value="40">完凸+スキル</option>
                </select>
                <span class="otherPassive-buff-label">攻撃回数</span>
                <input id="otherPassive10202-2" type="number" min="0" max="9" value="0" class="otherPassive-check" style="width:80%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10203_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">援武ニグリュ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10203-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">攻撃力</span>
                <input id="otherPassive10203-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10207_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">シナツ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10207-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">7秒攻撃回数</span>
                <input id="otherPassive10207-2" type="number" min="0" max="20" value="0" class="otherPassive-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10209_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">火竜イグニ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10209-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">スキル中</span>
                <input type="checkbox" id="otherPassive10209-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10220_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">エルタ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10220-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10220-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10244_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">プロメスティン</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸/回数</span>
                <span><input type="checkbox" id="otherPassive10244-1" class="larger-check otherPassive-check" style="display:inline;" onchange="allDPS();"><input id="otherPassive10244-2" type="number" min="0" max="20" value="0" class="otherPassive-nocheck" style="width:40%;height:70%;margin:2px auto;border:none;display:inline;" onChange="allDPS();"></span>
                <span class="otherPassive-buff-label">基礎攻撃力</span>
                <input id="otherPassive10244-3" type="number" min="0" max="9999" value="0" class="otherPassive-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10264_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">壊奏ブンコ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10264-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10264-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10264_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">壊奏ブンコ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">演奏(9秒)</span>
                <input id="otherPassive10264-3" type="number" min="0" max="20" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherPassive-buff-label">基本攻撃力</span>
                <input id="otherPassive10264-4" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10272_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">戯夏マギー</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">配置(20秒)</span>
                <input type="checkbox" id="otherPassive10272-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10273_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">クルクリ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>    
                <span class="otherPassive-buff-label">トラップ数</span>
                <input id="otherPassive10273-1" type="number" min="0" max="20" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherPassive-buff-label"></span>    
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10277_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">オセヴィア</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10277-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10277-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10282_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">憧嫁スズ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10282-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10282-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10289_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ナナエ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>    
                <span class="otherPassive-buff-label">基本攻撃力</span>
                <input id="otherPassive10289-1" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherPassive-buff-label"></span>    
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10290_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">幽霊アメリ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10290-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">人数</span>
                <input id="otherPassive10290-2" type="number" min="0" max="12" value="0" class="otherPassive-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10300_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ティッカ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10300-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">スキル中</span>
                <input type="checkbox" id="otherPassive10300-2" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">計算（工事中）</button>
    <div class="collapsible-content" style="display:none;">
        計算
    </div>
</div>
<script>
let otherPassivechecks = document.getElementsByClassName("otherPassive-check")
for (let i=0;i<otherPassivechecks.length;i++){
    if (otherPassivechecks[i].id.split("-")[0] == "otherPassive"+masterValues.charaID.toString()){
        if ([10179].includes(masterValues.charaID)){
            otherPassivechecks[i].checked = true;
        } else if ([10244,10264,10272,10273,10290].includes(masterValues.charaID)){
            otherPassivechecks[i].disabled = false;
        } else {
            otherPassivechecks[i].disabled = true;
        }
    } else {}
    if (otherPassivechecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString() && charAwaked){
        otherPassivechecks[i].disabled = true;
        otherPassivechecks[i].checked = true;
    } else if (otherPassivechecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString()){
        otherPassivechecks[i].disabled = true;
    } else {}
}
</script>


`);