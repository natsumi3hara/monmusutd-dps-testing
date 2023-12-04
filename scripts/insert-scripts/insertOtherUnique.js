document.write(`
<style>
#flex-container-otherUnique-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-otherUnique-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-otherUnique-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-otherUnique-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.otherUnique-buff-img{
    height: 75px;
    flex:3;
}
.otherUnique-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.otherUnique-buff-label{
    font-size:0.8em;
    flex:1;
}
.otherUnique-check{
    margin:auto;
    flex:1;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">味方専用武器（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-otherUnique-buff">
        <div class="flex-container-otherUnique-buff-inner">
            <div class="flex-container-otherUnique-buff-inner2">
                <img src="../../img/chara-icons/icon_10006_0_s.png" class="otherUnique-buff-img">
                <span class="otherUnique-buff-name">リン</span>
            </div>
            <div class="flex-container-otherUnique-buff-inner2">
                <span class="otherUnique-buff-label"></span>
                <span class="otherUnique-buff-label">回復回数</span>
                <input id="otherUnique10006-1" type="number" min="0" max="9" value="0" class="otherUnique-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherUnique-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherUnique-buff-inner">
            <div class="flex-container-otherUnique-buff-inner2">
                <img src="../../img/chara-icons/icon_10046_0_s.png" class="otherUnique-buff-img">
                <span class="otherUnique-buff-name">ルルゥ</span>
            </div>
            <div class="flex-container-otherUnique-buff-inner2">
                <span class="otherUnique-buff-label"></span>
                <span class="otherUnique-buff-label">専用武器</span>
                <input type="checkbox" id="otherUnique10046" class="larger-check otherUnique-check" onchange="allDPS();">
                <span class="otherUnique-buff-label"></span>
            </div>
        </div>
    </div>
</div>
<script>
let otherUniquechecks = document.getElementsByClassName("otherUnique-check")
for (let i=0;i<otherUniquechecks.length;i++){
    if (otherUniquechecks[i].id.split("-")[0] == "otherUnique"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10179){
            otherUniquechecks[i].checked = true;
        }
        if (masterValues.charaID === 10006){
            otherUniquechecks[i].disabled = false;
        } else {
            otherUniquechecks[i].disabled = true;
        }
    } else {}
    if (otherUniquechecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString() && charAwaked){
        otherUniquechecks[i].disabled = true;
        otherUniquechecks[i].checked = true;
    } else if (otherUniquechecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString()){
        otherUniquechecks[i].disabled = true;
    } else {}
}
</script>


`);