document.write(`
<style>
#flex-container-supporter-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-supporter-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-supporter-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-supporter-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.supporter-buff-img{
    height: 75px;
    flex:3;
}
.supporter-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.supporter-buff-label{
    font-size:0.8em;
    margin:auto;
    vertical-align:middle;
    flex:1;
}
.supporter-check{
    margin:auto;
    flex:1;
}
.supporter-value-input{
    margin:auto;
    font-size:0.8em;
    flex:1;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">Supporters（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-supporter-buff">
        <div class="flex-container-supporter-buff-inner">
            <div class="flex-container-supporter-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_17011.png" class="supporter-buff-img">
                <span class="supporter-buff-name">Atk</span>
            </div>
            <div class="flex-container-supporter-buff-inner2">
                <span class="supporter-buff-label"></span>
                <span class="supporter-buff-label">Total</span>
                <input id="supporter-buff-value-stat2" class="supporter-value-input" type="number" min="0" max="9999" value="0" style="width:70%;height:20%;margin:2px auto;border:none;font-size:0.75em;" onchange="allDPS();">
                <span class="supporter-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-supporter-buff-inner">
            <div class="flex-container-supporter-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_17011.png" class="supporter-buff-img">
                <span class="supporter-buff-name">pDef</span>
            </div>
            <div class="flex-container-supporter-buff-inner2">
                <span class="supporter-buff-label"></span>
                <span class="supporter-buff-label">Total</span>
                <input id="supporter-buff-value-stat3" class="supporter-value-input" type="number" min="0" max="9999" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="supporter-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-supporter-buff-inner">
            <div class="flex-container-supporter-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_17011.png" class="supporter-buff-img">
                <span class="supporter-buff-name">mDef</span>
            </div>
            <div class="flex-container-supporter-buff-inner2">
                <span class="supporter-buff-label"></span>
                <span class="supporter-buff-label">Total</span>
                <input id="supporter-buff-value-stat4" class="supporter-value-input" type="number" min="0" max="9999" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="supporter-buff-label"></span>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button">Details</button>
    <div style="display:none;">
        <span style="font-size:16px;">Shamans</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC0: Atk only, max 150</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC1: Atk and pDef, max 240</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC2: Atk, pDef and mDef, max 300</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC3: Atk, pDef and mDef, max 300</span><br>
        <span style="font-size:16px;">Bards</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC0: Atk, pDef and mDef +50</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC1: Atk, pDef and mDef +70, +90 if same attribute</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC2: Atk, pDef and mDef +90, +120 if same attribute</span><br>
        <span style="font-family: mtdfontlight;font-size:14px;">CC3: Atk, pDef and mDef +100. +140 if same attribute</span><br>
    </div>
</div>
<script>
let supporterchecks = document.getElementsByClassName("supporter-check")
for (let i=0;i<supporterchecks.length;i++){
    if (supporterchecks[i].id == "supporter"+masterValues.charaID.toString()){
        supporterchecks[i].disabled = true;
        supporterchecks[i].checked = true;
    } else {}
    if (supporterchecks[i].id == "awake"+masterValues.charaID.toString() && charAwaked){
        supporterchecks[i].disabled = true;
        supporterchecks[i].checked = true;
    } else if (supporterchecks[i].id == "awake"+masterValues.charaID.toString()){
        supporterchecks[i].disabled = true;
    } else {}
}
</script>


`);