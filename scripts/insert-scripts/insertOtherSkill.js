document.write(`
<style>
#flex-container-otherSkill-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-otherSkill-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-otherSkill-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-otherSkill-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.otherSkill-buff-img{
    height: 75px;
    flex:3;
}
.otherSkill-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.otherSkill-buff-label{
    font-size:0.8em;
    flex:1;
}
.otherSkill-check{
    margin:auto;
    flex:1;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">味方スキル（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-otherSkill-buff">
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10037_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">メアルス</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">EX2発動</span>
                <input type="checkbox" id="otherSkill10037" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10037" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10070_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">ヴィルエ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10070" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">発動回数</span>
                <input id="level10070" class="otherSkill-level" type="number" min="1" max="10" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10103_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">メアルス</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10103" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10103" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10139_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">ラピス</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10139" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10139" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10157_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">キョウ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10157" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10157" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10171_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">ココノハ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10171" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10171" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10173_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">ディフォーラ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10173" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">覚醒</span>
                <input type="checkbox" id="otherSkill10173a" class="larger-check otherSkill-check" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10179_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">マシュロア</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10179" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10179" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10217_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">祝砲リクリフ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10217" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10217" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10225_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">氷雪リュプチェ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10225" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10225" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10239_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">旋律アテエル</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
            <span class="otherSkill-buff-label"></span>
                <span class="otherSkill-buff-label">基本攻撃力</span>
                <input id="otherSkill10239-1" type="number" min="0" max="19999" value="0" class="otherSkill-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherSkill-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10244_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">プロメスティン</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label"></span>
                <span class="otherSkill-buff-label">範囲内</span>
                <input type="checkbox" id="otherSkill10244-1" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10248_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name" style="font-size:0.5em;">ルププ＆タンタル</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10248-1" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10248" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10254_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">シィール</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10254" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10254" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div class="flex-container-otherPassive-buff-inner">
            <div class="flex-container-otherPassive-buff-inner2">
                <img src="../../img/chara-icons/icon_10275_0_s.png" class="otherPassive-buff-img">
                <span class="otherPassive-buff-name">ルシターニ</span>
            </div>
            <div class="flex-container-otherPassive-buff-inner2">
                <span class="otherPassive-buff-label">魔力段階</span>
                <select name="otherPassive10275-1" id="otherSkill10275-1" class="otherPassive-check" style="width:80%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="0">段階0</option>
                    <option value="25">段階1</option>
                    <option value="50">段階2</option>
                    <option value="75">段階3</option>
                    <option value="30">完凸+段階1</option>
                    <option value="60">完凸+段階2</option>
                    <option value="90">完凸+段階3</option>
                </select>
                <span class="otherPassive-buff-label">基本攻撃力</span>
                <input id="otherSkill10275-2" type="number" min="0" max="19999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-otherSkill-buff-inner">
            <div class="flex-container-otherSkill-buff-inner2">
                <img src="../../img/chara-icons/icon_10281_0_s.png" class="otherSkill-buff-img">
                <span class="otherSkill-buff-name">風嫁ヤーセファ</span>
            </div>
            <div class="flex-container-otherSkill-buff-inner2">
                <span class="otherSkill-buff-label">発動</span>
                <input type="checkbox" id="otherSkill10281" class="larger-check otherSkill-check" onChange="allDPS();">
                <span class="otherSkill-buff-label">スキルLv</span>
                <input id="level10281" class="otherSkill-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
    </div>
</div>
<script>
let otherSkillchecks = document.getElementsByClassName("otherSkill-check")
for (let i=0;i<otherSkillchecks.length;i++){
    if (otherSkillchecks[i].id == "otherSkill"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10070){
            otherSkillchecks[i].disabled = false;
            otherSkillchecks[i].checked = false;
        } else {
            otherSkillchecks[i].disabled = true;
            otherSkillchecks[i].checked = false;
        }
    } else if (otherSkillchecks[i].id == "otherSkill"+masterValues.charaID.toString()+"a"){
        otherSkillchecks[i].disabled = true;
        otherSkillchecks[i].checked = false;
    }
}
let otherSkilllevels = document.getElementsByClassName("otherSkill-level")
for (let i=0;i<otherSkilllevels.length;i++){
    if (otherSkilllevels[i].id == "level"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10070){
            otherSkilllevels[i].disabled = false;
        } else {
            otherSkilllevels[i].disabled = true;
        }
    } else {}
}
</script>


`);