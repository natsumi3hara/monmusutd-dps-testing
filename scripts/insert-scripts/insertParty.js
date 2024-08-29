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
<button type="button" class="collapsible-button inputInsertButton">編成バフ（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-party-buff">
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、風属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10005_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">シルフィーネ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10005" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10005" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10008_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">プネーマ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10008" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10008" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10010_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">イグニ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10010" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10010" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、地属性モンスター娘の攻撃力+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10012_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ペトラ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10012" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10012" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、ガーディアン系のHP+8%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10039_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ディフニラ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10039" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10039" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、ウォリアー系のHP+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10044_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ラゴス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10044" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10044" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、全モンスター娘のHP+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10069_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ミテラス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成/完凸</span>
                <span class="party-buff-label"><input type="checkbox" id="party10069" class="larger-check party-check" onchange="allDPS();">　<input type="checkbox" id="awake10069" class="larger-check party-check" onchange="allDPS();"></span>
                <span class="party-buff-label">専用武器</span>
                <input type="checkbox" id="unique10069" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時水属性モンスター娘の攻撃力と物理防御+4%(+1%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10080_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">フリス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10080" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10080" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時竜特性の物理防御と魔法防御+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10082_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ソレイア</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10082" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10082" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10095_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ラフーカ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10095" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10095" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10106_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ロヴィリス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10106" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10106" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時水属性モンスター娘の攻撃力+9%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10116_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">リュプチェ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10116" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10116" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時水属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10125_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">マリドゥーラ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10125" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10125" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時風属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10127_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ヤーセファ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10127" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10127" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時光属性モンスター娘の最大HP+10%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10134_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">鈴音マズル</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10134" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10134" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、火属性モンスター娘のHPと攻撃力+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10136_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">イフィジャール</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10136" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10136" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時火属性モンスター娘のHPと攻撃力+4%(+1%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10153_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ピューリ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10153" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10153" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時光属性モンスター娘の攻撃と魔法防御+10%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10195_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">オシュネー</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10195" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10195" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、ソーサラー系の攻撃力7%(+3%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10199_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">戯祭ラゴス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10199" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10199" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時闇属性モンスター娘の攻撃力+16%(+4%)、ただし最大HP-10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10212_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">アルコス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10212" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10212" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、全モンスター娘のクリティカル率とクリティカル率上限+10%(+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10217_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">祝砲リクリフ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10217" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10217" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、全モンスター娘のHPと攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10218_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">庭ペトラ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10218" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10218" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時火属性モンスター娘の最大HP+7%(+3%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10224_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">雪鹿ラフーカ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10224" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10224" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時水属性のモンスター娘の物理と魔法防御+9%" style="cursor: help;"><img src="../../img/chara-icons/icon_10225_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">氷雪リュプチェ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10225" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10225" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、闇属性の味方の攻撃後の待ち時間を短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_10226_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">墓守リッチ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10226" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10226" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、竜特性の攻撃力+10%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10228_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">賀照ソレイア</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10228" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10228" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃力+9%(+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10237_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">参詣ロヴィリス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10237" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10237" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、全モンスター娘の攻撃力+3%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10239_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">旋律アテエル</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10239" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10239" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、妖精の攻撃力+14%(完凸で+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10241_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">オブスカリテ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10241" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10241" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、妖怪系・火属性のモンスター娘それぞれの攻撃力+8%" style="cursor: help;"><img src="../../img/chara-icons/icon_10251_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ヒミノ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10251" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10251" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、エイリアンの最大HP+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10267_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">パープロープ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10267" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10267" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、水属性モンスター娘の攻撃と物理防御+6%(+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10271_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">浜球フリス</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10271" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10271" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、妖精の最大HP、攻撃力+10%(完凸で+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10276_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">リュミヴェル</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10276" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10276" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、火属性モンスター娘の攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10279_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">灼嫁ｲﾌｨｼﾞｬｰﾙ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10279" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10279" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、風属性モンスター娘の攻撃力+12%(+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10281_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">風嫁ヤーセファ</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10281" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10281" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
        <div class="flex-container-party-buff-inner">
            <div class="flex-container-party-buff-inner2">
                <abbr title="編成時、全モンスター娘のHPと魔法防御力+12%(完凸で+4%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10291_0_s.png" class="party-buff-img"></abbr>
                <span class="party-buff-name">ファロリエット</span>
            </div>
            <div class="flex-container-party-buff-inner2">
                <span class="party-buff-label">編成</span>
                <input type="checkbox" id="party10291" class="larger-check party-check" onchange="allDPS();">
                <span class="party-buff-label">完凸</span>
                <input type="checkbox" id="awake10291" class="larger-check party-check" onchange="allDPS();">
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　サブスキル（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-party-buff">
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="セット時、全モンスター娘の攻撃力+5%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">ツンデレ皇妹</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1119" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="セット時、全モンスター娘の最大HP+10%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">おっとり皇姉</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1120" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="編成時風属性モンスター娘のHPと攻撃力+10%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">風エクステンド</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1130" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="セット時、全ウォリアー系クラスの攻撃力+15%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">捕獲！女勇者</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1158" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="セット時、全スナイパー系クラスの攻撃速度が15%増加" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">捕獲！女海賊</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1159" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-party-buff-inner">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="編成時火属性モンスター娘のHPと攻撃力+10%" style="cursor: help;"><img src="../../img/ui-icons/sub_skill.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">火エクステンド</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label"></span>
                    <span class="party-buff-label">枚数</span>
                    <input id="partySub-1173" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="party-buff-label"></span>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　変身キャラ（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-party-buff">
            <div class="flex-container-party-buff-inner" style="width:225px;">
                <div class="flex-container-party-buff-inner2">
                    <abbr title="ドッペルゲンガー" style="cursor: help;"><img src="../../img/chara-icons/icon_10169_0_s.png" class="party-buff-img"></abbr>
                    <span class="party-buff-name">ラッツェル</span>
                </div>
                <div class="flex-container-party-buff-inner2">
                    <span class="party-buff-label">変身元</span>
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
                        <option value="10217">祝砲リクリフ</option>
                        <option value="10218">庭ペトラ</option>
                        <option value="10224">雪鹿ラフーカ</option>
                        <option value="10225">氷雪リュプチェ</option>
                        <option value="10226">墓守リッチ</option>
                        <option value="10228">賀照ソレイア</option>
                        <option value="10237">参詣ロヴィリス</option>
                        <option value="10239">旋律アテエル</option>
                        <option value="10251">ヒミノ</option>
                        <option value="10267">パープロープ</option>
                        <option value="10279">灼嫁イフィジャール</option>
                        <option value="10281">風嫁ヤーセファ</option>
                    </select>
                    <span class="party-buff-label"><abbr title="自身ではなく変身元" style="cursor: help;">完凸/専用武器</abbr></span>
                    <span class="party-buff-lebel"><input type="checkbox" id="henshin-10169-awake" class="larger-check" style="margin:auto;flex:1;" onchange="allDPS();">　<input type="checkbox" id="henshin-10169-unique" class="larger-check" style="margin:auto;flex:1;" onchange="allDPS();"></span>
                </div>
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