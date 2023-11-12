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
                <span class="otherPassive-buff-label">覚醒?</span>
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
                <span class="otherPassive-buff-label">覚醒?</span>
                <input type="checkbox" id="otherPassive10148-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">物理防御</span>
                <input id="otherPassive10148-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
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
                    <option value="20">覚醒</option>
                    <option value="40">覚醒+スキル</option>
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
                <span class="otherPassive-buff-label">覚醒?</span>
                <input type="checkbox" id="otherPassive10203-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">攻撃力</span>
                <input id="otherPassive10203-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
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
    </div>
</div>
<script>
let otherPassivechecks = document.getElementsByClassName("otherPassive-check")
for (let i=0;i<otherPassivechecks.length;i++){
    if (otherPassivechecks[i].id.split("-")[0] == "otherPassive"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10179){
            otherPassivechecks[i].checked = true;
        }
        otherPassivechecks[i].disabled = true;
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