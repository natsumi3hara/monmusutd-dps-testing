document.write(`
<style>
#flex-container-extra-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-extra-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-extra-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-extra-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.extra-buff-img{
    height: 75px;
    width: 75px;
    flex:3;
}
.extra-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.extra-buff-label{
    font-size:0.8em;
    flex:1;
}
.extra-check{
    margin:auto;
    flex:1;
}
.extra-level-input{
    border: none;
    max-height: 20%;
    margin:1px auto;
    width: 60px;
}


</style>
<button type="button" class="collapsible-button inputInsertButton">その他バフ/デバフ（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <p style="margin:0px 1px;background-color:#ff788c;font-size:smaller; font-family:mtdfontlight;">(戦闘中に発動するバフ/デバフ)<br>ここの数字を<b>加算して</b>入力してください<br>(例1) +50%の乗バフと-20%の乗デバフが重なれば+30%になる<br>(例2) +20の加バフと-60の加デバフが重なれば-40になる</p>
    <div id="flex-container-extra-buff">
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">HP(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat1-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">HP(加)</span>
                <span class="extra-buff-label"><input id="extra-stat1-2" type="number" min="-9999" max="99999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">攻撃(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat2-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">攻撃(加)</span>
                <span class="extra-buff-label"><input id="extra-stat2-2" type="number" min="-9999" max="99999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">物防(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat3-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">物防(加)</span>
                <span class="extra-buff-label"><input id="extra-stat3-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">魔防(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat4-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">魔防(加)</span>
                <span class="extra-buff-label"><input id="extra-stat4-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">移動速度(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat5-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">移動速度(加)</span>
                <span class="extra-buff-label"><input id="extra-stat5-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">攻速(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat6-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">攻速(加)</span>
                <span class="extra-buff-label"><input id="extra-stat6-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">硬直(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat7-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">硬直(加)</span>
                <span class="extra-buff-label"><input id="extra-stat7-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">射程(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat8-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">射程(加)</span>
                <span class="extra-buff-label"><input id="extra-stat8-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">クリ率(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat191-1" type="number" min="-999" max="999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">クリ率(加)</span>
                <span class="extra-buff-label"><input id="extra-stat191-2" type="number" min="-999" max="999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">クリダメ(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat192-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">クリダメ(加)</span>
                <span class="extra-buff-label"><input id="extra-stat192-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label">最大</span>
                <span class="extra-buff-label">クリ率(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat193-1" type="number" min="-999" max="999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label">最大</span>
                <span class="extra-buff-label">クリ率(加)</span>
                <span class="extra-buff-label"><input id="extra-stat193-2" type="number" min="-999" max="999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label">最大</span>
                <span class="extra-buff-label">クリダメ(乗)</span>
                <span class="extra-buff-label"><input id="extra-stat194-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label">最大</span>
                <span class="extra-buff-label">クリダメ(加)</span>
                <span class="extra-buff-label"><input id="extra-stat194-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">与ダメージ%</span>
                <span class="extra-buff-label"><input id="extra-stat76-1" type="number" min="0" max="99999" value="100" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">バフ/デバフ</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">被ダメージ%</span>
                <span class="extra-buff-label"><input id="extra-stat77-1" type="number" min="0" max="99999" value="100" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
    </div>
</div>
<script>
let extrachecks = document.getElementsByClassName("extra-check")
for (let i=0;i<extrachecks.length;i++){
    if (extrachecks[i].id == "extra"+masterValues.charaID.toString()){
        extrachecks[i].disabled = true;
        extrachecks[i].checked = true;
    } else {}
    if (extrachecks[i].id == "awake"+masterValues.charaID.toString() && charAwaked){
        extrachecks[i].disabled = true;
        extrachecks[i].checked = true;
    } else if (extrachecks[i].id == "awake"+masterValues.charaID.toString()){
        extrachecks[i].disabled = true;
    } else {}
}
</script>


`);