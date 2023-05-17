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
<button type="button" class="collapsible-button inputInsertButton">Shared Buffs（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-shared-buff">
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="When deployed: Atk,pDef,mDef+15%, Range+10%" style="cursor: help;"><img src="../../img/ui-icons/Summon_Type_3.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">Attr Tile</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Deploy</span>
                <input type="checkbox" id="shared20001" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img">
                <span class="shared-buff-name">HP Cond</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">HP left</span>
                <span class="shared-buff-label"><input id="shared20002" type="number" min="0" max="100" value="100" style="width:65%;height:50%;margin:2px auto;border:none;" onchange="equipImageChange();selfConditionChange('2000',this.value);selfReferenceChange('200',this.value);enemyConditionChange('2000',this.value);allDPS();">&nbsp;%</span>
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="When dployed, increase all allies' pDef by +4% (exclude self for input)" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">Tactics</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Number</span>
                <input id="shared20003" type="number" min="0" max="9" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="While moving, Atk+100%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">Move Cond</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Moving</span>
                <input type="checkbox" id="shared20004" class="larger-check shared-check" onChange="isMove(this.checked);allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="Each token increases attached ally's Atk↑ by +12%(+3%) for 20s" style="cursor: help;"><img src="../../img/chara-icons/icon_50012_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">リコ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">Awakened</span>
                <input type="checkbox" id="shared20005-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">Tokens</span>
                <input id="shared20005-2" type="number" min="0" max="30" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="Each token deployed increases all Wind allies' Atk by +25%" style="cursor: help;"><img src="../../img/chara-icons/icon_40210_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">Yasefa</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Tokens</span>
                <input id="shared20006" type="number" min="0" max="4" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="On skill, decrease all Ranged allies' skill cooldowns by 10s (7s if skill Ⅱ)" style="cursor: help;"><img src="../../img/chara-icons/icon_10068_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">カヅネ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">Skill Ⅱ</span>
                <input type="checkbox" id="shared20007-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">Activations</span>
                <input id="shared20007-2" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="When a Goblin token dies, decrease all allies' skill cooldowns by 3s" style="cursor: help;"><img src="../../img/chara-icons/icon_10032_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">Anishira</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Times</span>
                <input id="shared20008-2" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="Each enemy defeated by an attack increases Atk by +1%\n(max 50 times/resets on death or retreat)" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">屍山血河</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">Enemies</span>
                <input id="shared20009" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
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
</script>


`);