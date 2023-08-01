document.write(`
<style>
#flex-container-shared-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-shared-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-shared-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-shared-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.shared-buff-img{
    height: 75px;
    width: 75px;
    flex:3;
}
.shared-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.shared-buff-label{
    font-size:0.8em;
    flex:1;
}
.shared-check{
    margin:auto;
    flex:1;
}
.shared-level-input{
    border: none;
    max-height: 20%;
    margin:1px auto;
    width: 60px;
}


</style>
<button type="button" class="collapsible-button inputInsertButton">共通（クリックで開く）</button>
<div class="collapsible-content" style="display:block;">
    <div id="flex-container-shared-buff">
		<div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="配置時、攻撃と物防と魔防+15%、射程+10%" style="cursor: help;"><img src="../../img/ui-icons/Summon_Type_3.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">属性マス</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">配置</span>
                <input type="checkbox" id="shared20001-1" class="larger-check shared-check" onChange="attributeTile();allDPS();">
                <span class="shared-buff-label">属性</span>
                <select name="attribute-tile-select" id="shared20001-2" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="attributeTile();allDPS();">
                    <option value="2">火</option>
                    <option value="3">水</option>
                    <option value="4" selected>風</option>
                    <option value="7">土</option>
                    <option value="5">光</option>
                    <option value="6">闇</option>
                </select>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <img src="../../img/ui-icons/ex_skill_key.png" class="shared-buff-img">
                <span class="shared-buff-name">底力系用</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">HP残量</span>
                <span class="shared-buff-label"><input id="shared20002" type="number" min="0" max="100" value="100" style="width:65%;height:50%;margin:2px auto;border:none;" onchange="equipImageChange();selfConditionChange('2000',this.value);selfReferenceChange('200',this.value);enemyConditionChange('2000',this.value);allDPS();">&nbsp;%</span>
                <span class="shared-buff-label"></span>
            </div>
        </div>
		<div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <img src="../../img/ui-icons/ex_skill_key.png" class="shared-buff-img">
                <span class="shared-buff-name">ブロック数</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">ブロック</span>
                <span class="shared-buff-label"><input id="input-number-blocked" type="number" min="0" max="7" value="0" style="width:65%;height:50%;margin:2px auto;border:none;" onchange="isBlock(this.value);allDPS();"></span>
                <span class="shared-buff-label"></span>
            </div>
        </div>
    </div>
</div>
<script>
let sharedchecks = document.getElementsByClassName("shared-check")
for (let i=0;i<sharedchecks.length;i++){
    if (sharedchecks[i].id == "shared"+masterValues.charaID.toString()){
        sharedchecks[i].disabled = true;
        sharedchecks[i].checked = true;
    } else {}
    if (sharedchecks[i].id == "awake"+masterValues.charaID.toString() && charAwaked){
        sharedchecks[i].disabled = true;
        sharedchecks[i].checked = true;
    } else if (sharedchecks[i].id == "awake"+masterValues.charaID.toString()){
        sharedchecks[i].disabled = true;
    } else {}
}
function makeSameAttribute(){
    document.getElementById("shared20001-2").value = masterValues.unitcard["element"].toString();
}
makeSameAttribute();
</script>


`);