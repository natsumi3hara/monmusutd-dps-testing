document.write(`
<style>
#flex-container-party-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-party-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-party-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-party-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
    vertical-align:middle;
}
.party-buff-img{
    height: 75px;
    flex:3;
}
.party-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
    display:table;
}
.party-buff-label{
    font-size:0.8em;
    flex:1;
}
.party-check{
    margin:auto;
    flex:1;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">Party Buff（Click to expand）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-party-buff">
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10005_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Sylphine</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10005" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10005" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10008_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Punema</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10008" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10008" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10010_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Igni</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10010" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10010" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10012_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Petra</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10012" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10012" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10039_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Diffnilla</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10039" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10039" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10044_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Lagos</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10044" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10044" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10069_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Miteras</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10069" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10069" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10080_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Frith</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10080" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10080" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10095_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Lafka</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10095" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10095" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10106_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Loviris</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10106" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10106" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10116_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Lupche</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10116" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10116" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10125_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Maridura</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10125" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10125" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10127_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Yasefa</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10127" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10127" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10134_0_s.png" class="party-buff-img">
                <span class="party-buff-name">C.Muzzle</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10134" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10134" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <img src="../../img/chara-icons/icon_10136_0_s.png" class="party-buff-img">
                <span class="party-buff-name">Ifijal</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">In party</span>
                <input type="checkbox" id="party10136" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">Awakened</span>
                <input type="checkbox" id="awake10136" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
    </div>
</div>
<script>
let partychecks = document.getElementsByClassName("party-check")
for (let i=0;i<partychecks.length;i++){
    if (partychecks[i].id == "party"+masterValues.charaID.toString()){
        partychecks[i].disabled = true;
        partychecks[i].checked = true;
    } else {}
    if (partychecks[i].id == "awake"+masterValues.charaID.toString() && masterValues.charaAwaked){
        partychecks[i].disabled = true;
        partychecks[i].checked = true;
    } else if (partychecks[i].id == "awake"+masterValues.charaID.toString()){
        partychecks[i].disabled = true;
    } else {}
}
</script>


`);