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
<div class="collapsible-content" style="display:block;">
    <div id="flex-container-divine-buff">
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <img src="../../img/equipment-icons/0000.png" class="divine-buff-img">
                <span class="divine-buff-name">なし</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30000" class="larger-check divine-check" checked onChange="divineOneOnly('divine30000');allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30000" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" disabled>
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、全モンスター娘のスキルの初回使用までの時間が\n[10%,11%,12%,13%,15%]短縮、\n攻撃後の待ち時間を\n[20%,21%,22%,23%,25%]短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_30003_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">パズズ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30003" class="larger-check divine-check" onChange="divineOneOnly('divine30003');allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30003" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-divine-buff-inner">
            <div class="flex-container-divine-buff-inner2">
                <abbr title="編成中、スナイパーの攻撃力が\n[10%,11%,12%,13%,15%]上昇、\n攻撃後の待ち時間を\n[30%,32%,35%,37%,40%]短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_30010_0_s.png" class="divine-buff-img"></abbr>
                <span class="divine-buff-name">セーラ</span>
            </div>
            <div class="flex-container-divine-buff-inner2">
                <span class="divine-buff-label">編成</span>
                <input type="checkbox" id="divine30010" class="larger-check divine-check" onChange="divineOneOnly('divine30010');allDPS();">
                <span class="divine-buff-label">加護Lv</span>
                <input id="level30010" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
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