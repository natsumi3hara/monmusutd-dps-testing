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
<button type="button" class="collapsible-button inputInsertButton">Other Buffs/Debuffs（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <p style="margin:0px 1px;background-color:#ff788c;font-size:smaller; font-family:mtdfontlight;">(Buffs/Debuffs that take effect in battle)<br>Input all values additively<br>(Eg 1) +50% and -20% becomes +30%<br>(Eg 2) +20 and -60 becomes -40</p>
    <div id="flex-container-extra-buff">
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">HP(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat1-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">HP(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat1-2" type="number" min="-9999" max="99999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">Atk(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat2-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">Atk(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat2-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">pDef(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat3-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">pDef(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat3-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">mDef(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat4-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">mDef(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat4-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">mSpd(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat5-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">mSpd(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat5-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">aSpd(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat6-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">aSpd(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat6-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">PAD(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat7-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">PAD(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat7-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">Range(Mult)</span>
                <span class="extra-buff-label"><input id="extra-stat8-1" type="number" min="-9999" max="9999" value="0" style="width:65%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;%</span>
                <span class="extra-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-extra-buff-inner">
            <div class="flex-container-extra-buff-inner2">
                <img src="../../img/ui-icons/Home_BtnNumBase_Enh.png" class="extra-buff-img">
                <span class="extra-buff-name">Buff</span>
            </div>
            <div class="flex-container-extra-buff-inner2">
                <span class="extra-buff-label"></span>
                <span class="extra-buff-label">Range(Add)</span>
                <span class="extra-buff-label"><input id="extra-stat8-2" type="number" min="-9999" max="9999" value="0" style="width:70%;height:50%;margin:2px auto;border:none;font-size:0.85em;" onChange="allDPS();">&nbsp;</span>
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