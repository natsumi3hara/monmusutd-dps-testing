document.write(`
<style>
#flex-container-divine-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-divine-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-divine-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-divine-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.divine-buff-img{
    height: 75px;
    flex:3;
}
.divine-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.divine-buff-label{
    font-size:0.8em;
    flex:1;
}
.divine-check{
    margin:auto;
    flex:1;
}
.divine-level-input{
    border: none;
    max-height: 20%;
    margin:1px auto;
    width: 60px;
}


</style>
<button type="button" class="collapsible-button inputInsertButton">獣神（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-divine-buff">
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <img src="../../img/equipment-icons/0000.png" class="divine-buff-img">
                <span class="divine-buff-name">なし</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30000" class="larger-check divine-check" checked onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30000" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" disabled>
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、ウォリアーとガーディアンの攻撃力と物理防御力が\n[10%,11%,12%,13%,15%]上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30001_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ヴィヴィ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30001" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30001" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、スナイパーとソーサラーの攻撃力が\n[13%,14%,15%,16%,17%]上昇、\nその代わりに最大HPが\n[9%,8%,7%,6%,6%]ダウン" style="cursor: help;"><img src="../../img/chara-icons/icon_30002_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ニーズホッグ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30002" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30002" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、全モンスター娘のスキルの初回使用までの時間が\n[10%,11%,12%,13%,15%]短縮、\n攻撃後の待ち時間を\n[20%,21%,22%,23%,25%]短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_30003_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">パズズ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30003" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30003" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、全モンスター娘の最大HPと魔法防御力が\n[10%,11%,12%,13%,15%]上昇、\n毒耐性を\n[20%,21%,22%,23%,25%]増加" style="cursor: help;"><img src="../../img/chara-icons/icon_30004_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ファロ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30004" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30004" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、全モンスター娘の最大HPが\n[30%,31%,32%,33%,35%]上昇、\n攻撃力が\n[6%,6%,7%,7%,8%]上昇、\nその代わりに出撃コスト+3" style="cursor: help;"><img src="../../img/chara-icons/icon_30006_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ベヒモス</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30006" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30006" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、ソーサラーの攻撃力が\n[10%,11%,12%,13%,15%]上昇、\n射程が\n[10,10,11,11,12]上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30007_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ソラス</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30007" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30007" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中光、火、水属性モンスター娘の攻撃力が\n[10%,11%,12%,13%,15%]上昇、\n移動速度が\n[40,42,45,47,50]上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30008_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">ビッキーヌ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30008" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30008" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、全モンスター娘の最大HPが\n[20%,21%,22%,23%,25%]上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30009_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">メイドヴィヴィ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30009" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30009" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、スナイパーの攻撃力が\n[10%,11%,12%,13%,15%]上昇、\n攻撃後の待ち時間を\n[30%,32%,35%,37%,40%]短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_30010_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">セーラ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30010" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30010" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、ウォリアーの最大HPが\n[15%,18%,22%,26%,30%]上昇、\n攻撃力が\n[10%,12%,15%,17%,20%]上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30011_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">リーファー</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30011" class="larger-check divine-check" onChange="allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30011" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">獣神所持バフ（工事中）</button>
    <div class="collapsible-content" style="display:block;">
        <div id="flex-container-divine-buff">
            <div class="flex-container-divine-buff-inner">
                <div class="flex-container-divine-buff-inner2">
                    <img src="../../img/equipment-icons/0000.png" class="divine-buff-img">
                    <span class="divine-buff-name">---</span>
                </div>
                <div class="flex-container-divine-buff-inner2">
                    <span class="divine-buff-label"></span>
                    <span class="divine-buff-label">所持数</span>
                    <input id="divineTotalPossess" type="number" min="1" max="11" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="divine-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-divine-buff-inner">
                <div class="flex-container-divine-buff-inner2">
                    <img src="../../img/equipment-icons/0000.png" class="divine-buff-img">
                    <span class="divine-buff-name">---</span>
                </div>
                <div class="flex-container-divine-buff-inner2">
                    <span class="divine-buff-label"></span>    
                    <span class="divine-buff-label">総Lv</span>
                    <input id="divineTotalLevel" type="number" min="1" max="130" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                    <span class="divine-buff-label"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
let divinechecks = document.getElementsByClassName("divine-check")
for (let i=0;i<divinechecks.length;i++){
    if (divinechecks[i].id == "divine"+masterValues.charaID.toString()){
        divinechecks[i].disabled = true;
        divinechecks[i].checked = true;
    } else {}
    if (divinechecks[i].id == "awake"+masterValues.charaID.toString() && charAwaked){
        divinechecks[i].disabled = true;
        divinechecks[i].checked = true;
    } else if (divinechecks[i].id == "awake"+masterValues.charaID.toString()){
        divinechecks[i].disabled = true;
    } else {}
}
</script>


`);