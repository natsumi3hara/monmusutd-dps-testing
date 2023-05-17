document.write(`
<style>
#flex-container-charaSpecific-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-charaSpecific-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-charaSpecific-buff-inner{
    width:225px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-charaSpecific-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.charaSpecific-buff-img{
    height: 75px;
    flex:3;
}
.charaSpecific-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.charaSpecific-buff-label{
    font-size:0.8em;
    flex:1;
}
.charaSpecific-check{
    margin:auto;
    flex:1;
}
.charaSpecific-level-input{
    border: none;
    max-height: 20%;
    margin:1px auto;
    width: 60px;
}

</style>
<button type="button" class="collapsible-button inputInsertButton">Chara-specific（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-charaSpecific-buff">
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10007">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10007_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Heal↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Water Ally</span>
                <input id="charaSpecific10007-1" type="checkbox" class="larger-check charaSpecific-check" onchange="isSameAttributeTarget(this.checked);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10011_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Rage</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">HP became < 25%?</span>
                <input id="charaSpecific10011-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10016">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10016_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Map Buff</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Dungeon</span>
                <input id="charaSpecific10016-1" type="checkbox" class="larger-check charaSpecific-check" onchange="isDungeon(this.checked);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10029">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10029_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">maxHP↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Skill activations(99%)</span>
                <input id="charaSpecific10029-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10039">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10039_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Rage</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">HP became < 25%?</span>
                <input id="charaSpecific10039-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10040">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10040_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Poison Pool</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Number of Pools(10s)</span>
                <input id="charaSpecific10040-C" class="" type="number" min="0" max="42" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10043">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10043_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Skill activations</span>
                <input id="charaSpecific10043-1" class="" type="number" min="0" max="7" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10047">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10047_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Skill activations</span>
                <input id="charaSpecific10047-1" class="" type="number" min="0" max="9" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10056">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10056_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Dmg received</span>
                <input id="charaSpecific10056-1" class="" type="number" min="0" max="20000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10057">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10057_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">movSpd↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Revivals</span>
                <input id="charaSpecific10057-1" class="" type="number" min="0" max="1" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2006',Number(this.value));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10082">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10082_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">pDef,mDef↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Skill activations</span>
                <input id="charaSpecific10082-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10083">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10083_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Times moved(10s)</span>
                <input id="charaSpecific10083-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10083">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10083_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Enemies attacked with skill(30s)</span>
                <input id="charaSpecific10083-2" class="" type="number" min="0" max="99" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10093">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10093_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk,pDef↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Revivals</span>
                <input id="charaSpecific10093-1" class="" type="number" min="0" max="1" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2006',Number(this.value));enemyConditionChange('2006',Number(this.value));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10098">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10098_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk,pDef↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Skill activations</span>
                <input id="charaSpecific10098-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10103">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10103_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">pDef↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Dmg received</span>
                <input id="charaSpecific10103-1" class="" type="number" min="0" max="20000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10111">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10111_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Fairy Knight tokens placed</span>
                <input id="charaSpecific10111-1" class="" type="number" min="0" max="99" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10147">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10147_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk,HP↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Enemies defeated with skill</span>
                <input id="charaSpecific10147-1" class="" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10178">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10178_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Atk↑</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Poison Recoveries</span>
                <input id="charaSpecific10178-1" class="" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-11011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_11011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Blader</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Wait time(s)</span>
                <input id="charaSpecific11011-1" class="" type="number" min="0" max="60" value="0" step="0.01" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2002',Math.floor(Number(this.value)*30+0.0001));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-11031">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_11031.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Barbarian</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Dmg received</span>
                <input id="charaSpecific11031-1" class="" type="number" min="0" max="10000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-16011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_16011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">Assassin CC3</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">Times moved(10s)</span>
                <input id="charaSpecific16011-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
    </div>
</div>
<script>
let charaSpecificDivs = document.getElementsByClassName("flex-container-charaSpecific-buff-inner");
let checkCharaID = "chara-specific-" + masterValues.charaID.toString();
let checkClassID = "chara-specific-" + masterValues.baseClass.toString();
for (let i=0;i<charaSpecificDivs.length;i++){
    if (charaSpecificDivs[i].classList.contains(checkCharaID)||charaSpecificDivs[i].classList.contains(checkClassID)){
        //Correct ID//
    } else {
        charaSpecificDivs[i].style.display = "none";
    }
}
</script>
`);