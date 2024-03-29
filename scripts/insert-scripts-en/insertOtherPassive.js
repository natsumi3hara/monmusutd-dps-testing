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
<button type="button" class="collapsible-button inputInsertButton">Ally Passives（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-otherPassive-buff">
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10046_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">Lulu</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">U.Weapon</span>
                <input type="checkbox" id="otherPassive10046" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10060_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">Bow</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">Deploy</span>
                <input type="checkbox" id="otherPassive10060" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10067_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">Dhirio</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">Deploy</span>
                <input type="checkbox" id="otherPassive10067" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">Awakened</span>
                <input type="checkbox" id="awake10067" class="larger-check otherPassive-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10121_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">Pent</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label"></span>
                <span class="otherPassive-buff-label">Deploy</span>
                <input type="checkbox" id="otherPassive10121" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10137_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">C.Miteras</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">Awakened</span>
                <input type="checkbox" id="otherPassive10137-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">Atk</span>
                <input id="otherPassive10137-2" type="number" min="0" max="9999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10148_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">Tamamo</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">Awakened</span>
                <input type="checkbox" id="otherPassive10148-1" class="larger-check otherPassive-check" onchange="allDPS();">
                <span class="otherPassive-buff-label">pDef</span>
                <input id="otherPassive10148-2" type="number" min="0" max="9999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
    </div>
</div>
<script>
let otherPassivechecks = document.getElementsByClassName("otherPassive-check")
for (let i=0;i<otherPassivechecks.length;i++){
    if (otherPassivechecks[i].id.split("-")[0] == "otherPassive"+masterValues.charaID.toString()){
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