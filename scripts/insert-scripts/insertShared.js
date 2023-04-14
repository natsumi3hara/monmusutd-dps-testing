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
<button type="button" class="collapsible-button">共通（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-shared-buff">
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="配置時、攻撃と物防と魔防+15%、射程+10%" style="cursor: help;"><img src="../../img/ui-icons/Summon_Type_3.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">属性マス</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">配置</span>
                <input type="checkbox" id="shared20001" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img">
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
                <abbr title="配置中、全味方の物理防御力+4%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">タクティクス</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">枚数</span>
                <input id="shared20003" type="number" min="0" max="9" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="移動中、攻撃力+100%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">移動バフ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">移動中</span>
                <input type="checkbox" id="shared20004" class="larger-check shared-check" onChange="isMove(this.checked);allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="付与した味方の攻撃力を20秒+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_50012_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">リコ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">覚醒?</span>
                <input type="checkbox" id="shared20005-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">トークン数</span>
                <input id="shared20005-2" type="number" min="0" max="30" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="風属性味方の攻撃力+25%" style="cursor: help;"><img src="../../img/chara-icons/icon_40210_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">ヤーセファ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">トークン数</span>
                <input id="shared20006" type="number" min="0" max="4" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="発動時に味方遠距離のスキル準備時間を-10秒\n\nカヅネEXスキル\n効果時間25秒\n再使用:[44,43,42,41,40]秒" style="cursor: help;"><img src="../../img/chara-icons/icon_10068_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">カヅネ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">短縮に使用</span>
                <input type="checkbox" id="shared20007-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">回数</span>
                <input id="shared20007-2" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="ゴブリンが死亡すると全味方のスキル再使用時間が3秒短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_10032_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">アニシラ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">短縮に使用</span>
                <input type="checkbox" id="shared20008-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">回数</span>
                <input id="shared20008-2" type="number" min="1" max="20" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
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