document.write(`
<style>
#flex-container-partyUnit-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-partyUnit-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-partyUnit-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-partyUnit-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
    vertical-align:middle;
}
.partyUnit-buff-img{
    height: 75px;
    flex:3;
}
.partyUnit-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
    display:table;
}
.partyUnit-buff-label{
    font-size:0.8em;
    flex:1;
}
.partyUnit-check{
    margin:auto;
    flex:1;
}
.partyUnitBtn6p {
    border: none;
    outline: none;
    margin: 1px;
    padding: 8px 10px;
    border-radius: 10px;
    background-color: #f1f1f1;
    cursor: pointer;
    font-size: 12px;
    font-family: mtdfont;
    width:15%;
}
.partyUnitBtn5p {
    border: none;
    outline: none;
    margin: 1px;
    padding: 8px 10px;
    border-radius: 10px;
    background-color: #f1f1f1;
    cursor: pointer;
    font-size: 12px;
    font-family: mtdfont;
    width:18%;
}    
.partyUnitBtn:hover {
    background-color: #ddd;
}
.partyUnitBtn.active {
    background-color: #666;
    color: white;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">編成バフ（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <button type="button" class="collapsible-button inputInsertButton" style="width:80%;background-color:#fc60cb;">フィルター</button>
    <div class="collapsible-content" style="display:none;width:80%;background-color:#fc97dc;font-family:mtdfont;">
        <input type="search" id="partyUnit-searchbox-type" style="display:none;margin:3px;font-size:1.2vw;font-family:mtdfont;" value="all" disabled>
        キャラ名検索<input type="search" id="partyUnit-searchbox-name" style="margin:3px;font-size:1.2vw;font-family:mtdfont;" oninput="filterpartyUnit()">
        <hr>
        <div id="partyUnitButtonContainer">
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('fire');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_2.png" style="height:24px;"></button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('water');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_3.png" style="height:24px;"></button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('wind');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_4.png" style="height:24px;"></button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('earth');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_7.png" style="height:24px;"></button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('light');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_5.png" style="height:24px;"></button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('dark');filterpartyUnit();"><img src="../../img/ui-icons/Icon_Type_6.png" style="height:24px;"></button>
            <hr>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('dragon');filterpartyUnit();">ドラゴン</button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('youkai');filterpartyUnit();">妖怪</button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('alien');filterpartyUnit();">宇宙人</button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('demon');filterpartyUnit();">悪魔</button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('fairy');filterpartyUnit();">妖精</button>
            <button class="partyUnitBtn partyUnitBtn6p" onclick="addtopartyUnitSearch('jobclass');filterpartyUnit();">クラス</button>
        </div>
    </div>
    <!--
    remember to edit "ALL" types when adding a new category
    current copypaste is " fire water wind earth light dark dragon youkai alien demon fairy jobclass"
    -->
    <div id="flex-container-partyUnit-buff">
        <div title="シルフィーネ-しるふぃーね" class="flex-container-partyUnit-buff-inner wind">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、風属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10005_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">シルフィーネ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10005" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10005" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="プネーマ-ぷねーま" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10008_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">プネーマ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10008" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10008" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="イグニ-いぐに" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10010_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">イグニ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10010" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10010" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ペトラ-ぺとら" class="flex-container-partyUnit-buff-inner earth">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、地属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10012_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ペトラ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10012" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10012" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ディフニラ-でぃふにら" class="flex-container-partyUnit-buff-inner jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、ガーディアン系のHP+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10039_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ディフニラ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10039" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10039" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ラゴス-らごす" class="flex-container-partyUnit-buff-inner jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、ウォリアー系のHP+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10044_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ラゴス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10044" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10044" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ミテラス-みてらす" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘のHP+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10069_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ミテラス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成/完凸</span>
                <span class="partyUnit-buff-label"><input type="checkbox" id="party10069" class="larger-check partyUnit-check" onchange="allDPS();">　<input type="checkbox" id="awake10069" class="larger-check partyUnit-check" onchange="allDPS();"></span>
                <span class="partyUnit-buff-label">専用武器</span>
                <input type="checkbox" id="unique10069" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="フリス-ふりす" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時水属性モンスター娘の攻撃力と物理防御+4%(+1%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10080_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">フリス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10080" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10080" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ソレイア-それいあ" class="flex-container-partyUnit-buff-inner dragon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時竜特性の物理防御と魔法防御+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10082_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ソレイア</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10082" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10082" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ラフーカ-らふーか" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10095_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ラフーカ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10095" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10095" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ロヴィリス-ろヴぃりす-ろゔぃりす" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10106_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ロヴィリス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10106" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10106" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="リュプチェ-りゅぷちぇ" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時水属性モンスター娘の攻撃力+9%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10116_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">リュプチェ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10116" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10116" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="マリドゥーラ-まりどぅーら" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時水属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10125_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">マリドゥーラ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10125" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10125" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ヤーセファ-やーせふぁ" class="flex-container-partyUnit-buff-inner wind">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時風属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10127_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ヤーセファ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10127" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10127" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="鈴音マズル-まずる" class="flex-container-partyUnit-buff-inner light">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時光属性モンスター娘の最大HP+10%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10134_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">鈴音マズル</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10134" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10134" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="イフィジャール-いふぃじゃーる" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、火属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10136_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">イフィジャール</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10136" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10136" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ピューリ-ぴゅーり" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時火属性モンスター娘のHPと攻撃力+4%(+1%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10153_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ピューリ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10153" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10153" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="オシュネー-おしゅねー" class="flex-container-partyUnit-buff-inner light">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時光属性モンスター娘の攻撃と魔法防御+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10195_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">オシュネー</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10195" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10195" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="戯祭ラゴス-らごす" class="flex-container-partyUnit-buff-inner jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、ソーサラー系の攻撃力7%(+3%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10199_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">戯祭ラゴス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10199" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10199" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="アルコス-あるこす" class="flex-container-partyUnit-buff-inner dark">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時闇属性モンスター娘の攻撃力+16%(+4%)、ただし最大HP-10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10212_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">アルコス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10212" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10212" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="アゼプ-あぜぷ" class="flex-container-partyUnit-buff-inner demon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、悪魔の攻撃力+14%(完凸で+3％)" style="cursor: help;"><img src="../../img/chara-icons/icon_10215_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">アゼプ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10215" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10215" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="祝砲リクリフ-りくりふ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘のクリティカル率とクリティカル率上限+10%(+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10217_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">祝砲リクリフ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10217" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10217" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="庭ペトラ-ぺとら" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘のHPと攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10218_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">庭ペトラ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10218" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10218" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="雪鹿ラフーカ-らふーか" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時火属性モンスター娘の最大HP+7%(+3%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10224_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">雪鹿ラフーカ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10224" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10224" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="氷雪リュプチェ-りゅぷちぇ" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時水属性のモンスター娘の物理と魔法防御+9%" style="cursor: help;"><img src="../../img/chara-icons/icon_10225_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">氷雪リュプチェ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10225" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10225" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="墓守リッチ-りっち" class="flex-container-partyUnit-buff-inner dark">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、闇属性の味方の攻撃後の待ち時間を短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_10226_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">墓守リッチ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10226" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10226" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="賀照ソレイア-それいあ" class="flex-container-partyUnit-buff-inner dragon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、竜特性の攻撃力+10%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10228_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">賀照ソレイア</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10228" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10228" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="参詣ロヴィリス-ろヴぃりす-ろゔぃりす" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+9%(+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10237_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">参詣ロヴィリス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10237" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10237" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="旋律アテエル-あてえる" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘の攻撃力+3%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10239_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">旋律アテエル</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10239" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10239" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="オブスカリテ-おぶすかりて" class="flex-container-partyUnit-buff-inner fairy">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、妖精の攻撃力+14%(完凸で+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10241_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">オブスカリテ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10241" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10241" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ヒミノ-ひみの" class="flex-container-partyUnit-buff-inner fire youkai">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、妖怪系・火属性のモンスター娘それぞれの攻撃力+8%" style="cursor: help;"><img src="../../img/chara-icons/icon_10251_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ヒミノ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10251" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10251" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="パープロープ-ぱーぷろーぷ" class="flex-container-partyUnit-buff-inner alien">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、エイリアンの最大HP+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10267_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">パープロープ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10267" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10267" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="プリプリダ-ぷりぷりだ" class="flex-container-partyUnit-buff-inner alien">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、エイリアンの最大HPと攻撃力を9%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10269_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">プリプリダ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10269" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10269" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="浜球フリス-ふりす" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃と物理防御+6%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10271_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">浜球フリス</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10271" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10271" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="リュミヴェル-りゅみヴぇる-りゅみゔぇる" class="flex-container-partyUnit-buff-inner fairy">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、妖精の最大HP、攻撃力+10%(完凸で+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10276_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">リュミヴェル</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10276" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10276" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="灼嫁イフィジャール-いふぃじゃーる" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10279_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">灼嫁ｲﾌｨｼﾞｬｰﾙ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10279" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10279" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="風嫁ヤーセファ-やーせふぁ" class="flex-container-partyUnit-buff-inner wind">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、風属性モンスター娘の攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10281_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">風嫁ヤーセファ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10281" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10281" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="グーラン-ぐーらん" class="flex-container-partyUnit-buff-inner dark">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、闇属性モンスター娘の最大HPと攻撃+5%(完凸で+1%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10285_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">グーラン</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10285" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10285" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ファロリエット-ふぁろりえっと" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘のHPと魔法防御力+12%(完凸で+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10291_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ファロリエット</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10291" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10291" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ダムストー-だむすとー" class="flex-container-partyUnit-buff-inner demon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、悪魔の攻撃力+9%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10295_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ダムストー</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10295" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10295" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ティッカ-てぃっか" class="flex-container-partyUnit-buff-inner light">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、光属性モンスター娘の最大HPと攻撃+10%(完凸で+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10300_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ティッカ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10300" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10300" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ニーサ-にーさ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘の攻撃力+4%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10301_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ニーサ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10301" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10301" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ルイシャ-るいしゃ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="レンタルを含めず地属性が8体以上編成されている場合、全モンスター娘の最大HP+10%(完凸で+2%)、攻撃力+5%(完凸で+2%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10307_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ルイシャ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10307" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10307" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="リャオホァ-りゃおほぁ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="レンタルを含めず火属性が8体以上編成されている場合、全モンスター娘の攻撃力+10%(完凸で+3%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10308_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">リャオホァ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10308" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10308" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="リンフー-りんふー" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="レンタルを含めず光属性が8体以上編成されている時全モンスター娘のHPと攻撃力+7%(完凸で+2%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10313_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">リンフー</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10313" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10313" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="初縁ココノハ-ここのは" class="flex-container-partyUnit-buff-inner youkai">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、妖怪の攻撃力+12%" style="cursor: help;"><img src="../../img/chara-icons/icon_10317_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">初縁ココノハ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10317" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10317" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="エシュマナ-えしゅまな" class="flex-container-partyUnit-buff-inner demon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、悪魔の攻撃力+12%(完凸で+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10322_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">エシュマナ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10322" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10322" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="煌射手オシュネー-おしゅねー" class="flex-container-partyUnit-buff-inner fire">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+4%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10327_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">煌射手オシュネー</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10327" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10327" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="オンシジューム-おんしじゅーむ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘の移動速度+30" style="cursor: help;"><img src="../../img/chara-icons/icon_10328_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">オンシジューム</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10328" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10328" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="プピペルザ-ぷぴぺるざ" class="flex-container-partyUnit-buff-inner dark alien">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、味方のエイリアン/闇属性モンスター娘それぞれの攻撃力+8%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10338_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">プピペルザ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10338" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10338" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ピエンティア-ぴえんてぃあ" class="flex-container-partyUnit-buff-inner light alien">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、味方のエイリアン/光属性モンスター娘それぞれの攻撃力+8%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10341_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ピエンティア</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10341" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10341" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="シュエン-しゅえん" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="レンタルを含めず水属性が8体以上編成されている時、全モンスター娘の攻撃力と物理防御力+7%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10344_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">シュエン</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10344" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10344" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ランシャン-らんしゃん" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="レンタルを含めず風属性が8体以上編成されている時、全モンスター娘の攻撃力+7%(完凸で+3%)、コスト-1" style="cursor: help;"><img src="../../img/chara-icons/icon_10345_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ランシャン</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10345" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10345" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="宝石竜ルルゥ-るるぅ" class="flex-container-partyUnit-buff-inner light dragon">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、味方の竜特性/光属性モンスター娘それぞれの攻撃力+8%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10348_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">宝石竜ルルゥ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10348" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10348" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="碧海ファロリエット-ふぁろりえっと" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、全モンスター娘の攻撃力と魔法防御力+7%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10351_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">碧海ﾌｧﾛﾘｴｯﾄ</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10351" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10351" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ミレリア-みれりあ" class="flex-container-partyUnit-buff-inner water">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力とHP+7%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10353_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">ミレリア</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10353" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10353" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
        <div title="天城ダムストー-だむすとー" class="flex-container-partyUnit-buff-inner wind">
            <div class="flex-container-partyUnit-buff-inner2">
                <abbr title="編成時、風属性の攻撃力+9%(完凸で+3%)、出撃コスト-1" style="cursor: help;"><img src="../../img/chara-icons/icon_10372_0_s.png" class="partyUnit-buff-img"></abbr>
                <span class="partyUnit-buff-name">天城ダムストー</span>
            </div>
            <div class="flex-container-partyUnit-buff-inner2">
                <span class="partyUnit-buff-label">編成</span>
                <input type="checkbox" id="party10372" class="larger-check partyUnit-check" onchange="allDPS();">
                <span class="partyUnit-buff-label">完凸</span>
                <input type="checkbox" id="awake10372" class="larger-check partyUnit-check" onchange="allDPS();">
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　サブスキル（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-partyUnit-buff">
            <div title="テッパンツンデレ皇女-てっぱんつんでれおうじょ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="セット時、全モンスター娘の攻撃力+5%" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">ツンデレ皇妹</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1119" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
            <div title="おっとりお姉ちゃん皇女-おっとりおねえちゃんおうじょ" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="セット時、全モンスター娘の最大HP+10%" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">おっとり皇姉</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1120" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
            <div title="ウィンドエクステンド-うぃんどえくすてんど" class="flex-container-partyUnit-buff-inner wind">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="編成時風属性モンスター娘のHPと攻撃力+10%" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">風エクステンド</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1130" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
            <div title="捕獲自信に満ちた女勇者-ほかくじしんにみちたおんなゆうしゃ" class="flex-container-partyUnit-buff-inner jobclass">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="セット時、全ウォリアー系クラスの攻撃力+15%" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">捕獲！女勇者</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1158" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
            <div title="捕獲！二丁使いの女海賊-ほかくにちょうづかいのおんなかいぞく" class="flex-container-partyUnit-buff-inner jobclass">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="セット時、全スナイパー系クラスの攻撃速度が15%増加" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">捕獲！女海賊</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1159" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
            <div title="ファイアエクステンド-ふぁいあくすてんど" class="flex-container-partyUnit-buff-inner fire">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="編成時火属性モンスター娘のHPと攻撃力+10%" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">火エクステンド</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label"></span>
                    <span class="partyUnit-buff-label">枚数</span>
                    <input id="partySub-1173" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="partyUnit-buff-label"></span>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　変身キャラ（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-partyUnit-buff">
            <div title="ラッツェル-らっつぇる" class="flex-container-partyUnit-buff-inner fire water wind earth light dark dragon youkai alien demon fairy jobclass" style="width:225px;">
                <div class="flex-container-partyUnit-buff-inner2">
                    <abbr title="ドッペルゲンガー" style="cursor: help;"><img src="../../img/chara-icons/icon_10169_0_s.png" class="partyUnit-buff-img"></abbr>
                    <span class="partyUnit-buff-name">ラッツェル</span>
                </div>
                <div class="flex-container-partyUnit-buff-inner2">
                    <span class="partyUnit-buff-label">変身元</span>
                    <select name="henshin-10169-select" id="henshin-10169-select" style="font-family:mtdfont;width:90%;font-size:0.7em;" onchange="allDPS();">
                        <option value="10000">無し</option>
                        <option value="10005">シルフィーネ</option>
                        <option value="10008">プネーマ</option>
                        <option value="10010">イグニ</option>
                        <option value="10012">ペトラ</option>
                        <option value="10039">ディフニラ</option>
                        <option value="10044">ラゴス</option>
                        <option value="10069">ミテラス</option>
                        <option value="10080">フリス</option>
                        <option value="10082">ソレイア</option>
                        <option value="10095">ラフーカ</option>
                        <option value="10106">ロヴィリス</option>
                        <option value="10116">リュプチェ</option>
                        <option value="10125">マリドゥーラ</option>
                        <option value="10127">ヤーセファ</option>
                        <option value="10134">鈴音マズル</option>
                        <option value="10136">イフィジャール</option>
                        <option value="10153">ピューリ</option>
                        <option value="10195">オシュネー</option>
                        <option value="10199">戯祭ラゴス</option>
                        <option value="10212">アルコス</option>
                        <option value="10215">アゼプ</option>
                        <option value="10217">祝砲リクリフ</option>
                        <option value="10218">庭ペトラ</option>
                        <option value="10224">雪鹿ラフーカ</option>
                        <option value="10225">氷雪リュプチェ</option>
                        <option value="10226">墓守リッチ</option>
                        <option value="10228">賀照ソレイア</option>
                        <option value="10237">参詣ロヴィリス</option>
                        <option value="10239">旋律アテエル</option>
                        <option value="10241">オブスカリテ</option>
                        <option value="10251">ヒミノ</option>
                        <option value="10267">パープロープ</option>
                        <option value="10269">プリプリダ</option>
                        <option value="10271">浜球フリス</option>
                        <option value="10276">リュミヴェル</option>
                        <option value="10279">灼嫁イフィジャール</option>
                        <option value="10281">風嫁ヤーセファ</option>
                        <option value="10285">グーラン</option>
                        <option value="10291">ファロリエット</option>
                        <option value="10295">ダムストー</option>
                        <option value="10300">ティッカ</option>
                        <option value="10301">ニーサ</option>
                        <option value="10307">ルイシャ</option>
                        <option value="10308">リャオホァ</option>
                        <option value="10313">リンフー</option>
                        <option value="10317">初縁ココノハ</option>
                        <option value="10322">エシュマナ</option>
                        <option value="10327">煌射手オシュネー</option>
                        <option value="10328">オンシジューム</option>
                        <option value="10338">プピペルザ</option>
                        <option value="10341">ピエンティア</option>
                        <option value="10344">シュエン</option>
                        <option value="10345">ランシャン</option>
                        <option value="10348">宝石竜ルルゥ</option>
                        <option value="10351">碧海ファロリエット</option>
                        <option value="10353">ミレリア</option>
                        <option value="10372">天城ダムストー</option>
                    </select>
                    <span class="partyUnit-buff-label"><abbr title="自身ではなく変身元" style="cursor: help;">完凸/専用武器</abbr></span>
                    <span class="partyUnit-buff-lebel"><input type="checkbox" id="henshin-10169-awake" class="larger-check" style="margin:auto;flex:1;" onchange="allDPS();">　<input type="checkbox" id="henshin-10169-unique" class="larger-check" style="margin:auto;flex:1;" onchange="allDPS();"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
let partyUnitchecks = document.getElementsByClassName("partyUnit-check")
let partyUnitchecksExcluded = [10307,10308,10313,10344,10345];
for (let i=0;i<partyUnitchecks.length;i++){
    if (partyUnitchecks[i].id == "party"+masterValues.charaID.toString()){
        if (partyUnitchecksExcluded.includes(masterValues.charaID)){
            partyUnitchecks[i].disabled = false;
            partyUnitchecks[i].checked = true;
        } else {
            partyUnitchecks[i].disabled = true;
            partyUnitchecks[i].checked = true;
        }
    }
    if (partyUnitchecks[i].id == "awake"+masterValues.charaID.toString() && masterValues.charaAwaked){
        if (partyUnitchecksExcluded.includes(masterValues.charaID)){
            partyUnitchecks[i].disabled = false;
            partyUnitchecks[i].checked = true;
        } else {
            partyUnitchecks[i].disabled = true;
            partyUnitchecks[i].checked = true;
        }
    } else if (partyUnitchecks[i].id == "awake"+masterValues.charaID.toString()){
        if (partyUnitchecksExcluded.includes(masterValues.charaID)){
            partyUnitchecks[i].disabled = false;
        } else {
            partyUnitchecks[i].disabled = true;
        }
    }
}

//buttons//

function filterpartyUnit(){
    let typeFilter = document.getElementById("partyUnit-searchbox-type").value.split(',');
    let nameFilter = document.getElementById("partyUnit-searchbox-name").value;
    typeFilter.splice(typeFilter.indexOf("all"),1);
    let partyUnitDivs = document.getElementsByClassName("flex-container-partyUnit-buff-inner");
    let checkerOR = (arr,target) => target.some(v => arr.includes(v));
    let checkerAND = (arr, target) => target.every(v => arr.includes(v));
    for (let i=0;i<partyUnitDivs.length;i++){
        let divTypes = partyUnitDivs[i].className.split(" ");
        divTypes.splice(divTypes.indexOf("flex-container-partyUnit-buff-inner"),1);
        console.log(typeFilter);
        console.log(divTypes);
        if ((checkerAND(divTypes,typeFilter)||typeFilter.length===0)&&partyUnitDivs[i].getAttribute("title").toLowerCase().includes(nameFilter.toLowerCase())){
            console.log("conditions met! or filter length 0!")
            partyUnitDivs[i].style.display = "flex";
        }
        else {
            console.log("conditions not met!");
            partyUnitDivs[i].style.display = "none";
        }
    }
}

function addtopartyUnitSearch(toggletype){
    let searchboxtype = document.getElementById("partyUnit-searchbox-type");
    if (searchboxtype.value.includes(','+toggletype)){
        searchboxtype.value = searchboxtype.value.replace(','+toggletype,'');
    }
    else {
        searchboxtype.value += ','+toggletype;
    }
}

function partyUnitSelection(){
    if (this.className.includes(" active")) {
    this.className = this.className.replace(" active", "");
    } else {
    this.className += " active";
    }
}
var partyUnitBtnContainer = document.getElementById("partyUnitButtonContainer");
var partyUnitBtns = partyUnitBtnContainer.getElementsByClassName("partyUnitBtn");
for (var i = 0; i < partyUnitBtns.length; i++) {
  partyUnitBtns[i].addEventListener("click", partyUnitSelection)
}
</script>


`);