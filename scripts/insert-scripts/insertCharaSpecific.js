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
<button type="button" class="collapsible-button inputInsertButton">キャラ個別（クリックで開く）</button>
<div class="collapsible-content" style="display:block;">
    <div id="flex-container-charaSpecific-buff">
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10011_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">レイジ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">HP25%以下になった?</span>
                <input id="charaSpecific10011-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10016">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10016_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">マップバフ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">ダンジョン</span>
                <input id="charaSpecific10016-1" type="checkbox" class="larger-check charaSpecific-check" onchange="isDungeon(this.checked);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10017">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10017_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">貫通攻撃</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">ティーレ配置</span>
                <input id="charaSpecific10017-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10026">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10026_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル中倒した敵数</span>
                <input id="charaSpecific10026-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10029">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10029_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">最大HPアップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数(99%)</span>
                <input id="charaSpecific10029-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10039">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10039_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">レイジ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">HP25%以下になった?</span>
                <input id="charaSpecific10039-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10040">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10040_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">毒沼</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">毒沼の数(10秒)</span>
                <input id="charaSpecific10040-C" class="" type="number" min="0" max="42" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10043">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10043_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10043-1" class="" type="number" min="0" max="7" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10044">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10044_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">攻撃した回数(5秒)</span>
                <input id="charaSpecific10044-1" class="" type="number" min="0" max="99" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10047">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10047_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10047-1" class="" type="number" min="0" max="9" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10056">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10056_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">受けたダメージ</span>
                <input id="charaSpecific10056-1" class="" type="number" min="0" max="20000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10057">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10057_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">移動速度アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">復活した回数</span>
                <input id="charaSpecific10057-1" class="" type="number" min="0" max="1" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2006',Number(this.value));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10061">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10061_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10061-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10082">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10082_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">物防&魔防上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10082-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10083">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10083_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">移動回数(10秒)</span>
                <input id="charaSpecific10083-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10083">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10083_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキルで攻撃した敵(30秒)</span>
                <input id="charaSpecific10083-2" class="" type="number" min="0" max="99" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10091">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10091_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキルで攻撃した敵</span>
                <input id="charaSpecific10091-1" class="" type="number" min="0" max="7" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10093">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10093_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃&物防上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">復活した回数</span>
                <input id="charaSpecific10093-1" class="" type="number" min="0" max="1" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2006',Number(this.value));enemyConditionChange('2006',Number(this.value));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10097">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10097_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">HPアップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">受けたダメージ</span>
                <input id="charaSpecific10097-1" class="" type="number" min="0" max="10000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10098">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10098_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃&物防上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10098-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10100">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10100_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">再使用時間</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキルで倒した敵</span>
                <input id="charaSpecific10100-1" class="" type="number" min="0" max="15" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10103">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10103_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">物理防御アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">受けたダメージ</span>
                <input id="charaSpecific10103-1" class="" type="number" min="0" max="20000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10111">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10111_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">配置中の妖精トークン</span>
                <input id="charaSpecific10111-1" class="" type="number" min="0" max="99" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10147">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10147_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃&HP上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル中倒した敵数</span>
                <input id="charaSpecific10147-1" class="" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10154">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10154_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">再使用時間</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">移動中に倒した敵</span>
                <input id="charaSpecific10154-1" class="" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10172">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10172_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃力アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">攻撃回数</span>
                <input id="charaSpecific10172-1" class="" type="number" min="0" max="60" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10178">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10178_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">毒を回復した回数</span>
                <input id="charaSpecific10178-1" class="" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10196">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10196_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">最大HPアップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10196-1" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10199">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10199_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">再使用時間</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">非スキル中に倒した敵</span>
                <input id="charaSpecific10199-1" class="" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10202">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10202_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻速アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">攻撃回数(5秒)</span>
                <input id="charaSpecific10202-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10205">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10205_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻撃アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">吸収した敵の攻撃力</span>
                <input id="charaSpecific10205-1" class="" type="number" min="0" max="99999" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10208">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10208_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">攻速アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">攻撃回数</span>
                <input id="charaSpecific10208-1" class="" type="number" min="0" max="70" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10210">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10210_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">貫通率</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label">敵が遠い</span>
                <input id="charaSpecific10210-1" type="checkbox" class="larger-check charaSpecific-check" onchange="allDPS();">
                <span class="charaSpecific-buff-label" style="color:red;">バグです。特性の貫通</span>
                <span class="charaSpecific-buff-label" style="color:red;">が3回中2回発生します。</span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10217">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10217_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">射程アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">クリティカル回数</span>
                <input id="charaSpecific10217-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10218">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10218_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">射程アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10218-1" class="" type="number" min="0" max="3" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10219">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10219_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">聖菓テティ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">存在時間(秒)</span>
                <input id="charaSpecific10219-1" class="" type="number" min="0" max="300" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('100',Math.floor(Number(this.value)*30+0.0001));allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10228">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10228_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">HP&攻撃上昇</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">スキル発動回数</span>
                <input id="charaSpecific10228-1" class="" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-10238">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10238_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">アージェ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">待機バフ(%)</span>
                <input id="charaSpecific10238-1" class="" type="number" min="0" max="700" step="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-11011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_11011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">曲刀CC1以上</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">待機時間(秒)</span>
                <input id="charaSpecific11011-1" class="" type="number" min="0" max="60" value="0" step="0.01" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfConditionChange('2002',Math.floor(Number(this.value)*30+0.0001));allDPS();">
                <span class="charaSpecific-buff-label">(DPS比べに使用不可)</span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-11031">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_11031.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">斧CC1以上</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">受けたダメージ</span>
                <input id="charaSpecific11031-1" class="" type="number" min="0" max="10000" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="selfReferenceChange('102',this.value);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-14011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_14011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">杖CC4</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">倒した敵(10秒)</span>
                <input id="charaSpecific14011-1" class="" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-15011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_15011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">錫杖</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">味方が同属性</span>
                <input id="charaSpecific15011-1" type="checkbox" class="larger-check charaSpecific-check" onchange="isSameAttributeTarget(this.checked);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-16011">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_16011.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">短剣CC3以上</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">移動回数(10秒)</span>
                <input id="charaSpecific16011-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-charaSpecific-buff-inner chara-specific-16021">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/ui-icons/Icon_Job_16021.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">扇CC3以上</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">移動回数(10秒)</span>
                <input id="charaSpecific16021-1" class="" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onchange="allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
    </div>
    <span>&nbsp;全て表示</span><input type="checkbox" id="charaShowAll-check" class="larger-check" style="vertical-align: bottom;" onchange="charaShowAll();">
</div>
<script>
function charaShowAll(){
    if (document.getElementById("charaShowAll-check").checked){
        let charaSpecificDivs = document.getElementsByClassName("flex-container-charaSpecific-buff-inner");
        let checkCharaID = "chara-specific-" + masterValues.charaID.toString();
        let checkClassID = "chara-specific-" + masterValues.baseClass.toString();
        for (let i=0;i<charaSpecificDivs.length;i++){
            if (charaSpecificDivs[i].classList.contains(checkCharaID)||charaSpecificDivs[i].classList.contains(checkClassID)){
                //Correct ID//
            } else {
                charaSpecificDivs[i].style.display = "flex";
            }
        }
    } else {
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
    }
}
charaShowAll()
</script>
`);
/* oxy's outdated toggle
<div class="flex-container-charaSpecific-buff-inner chara-specific-10007">
            <div class="flex-container-charaSpecific-buff-inner2">
                <img src="../../img/chara-icons/icon_10007_0_s.png" class="charaSpecific-buff-img">
                <span class="charaSpecific-buff-name">回復量アップ</span>
            </div>
            <div class="flex-container-charaSpecific-buff-inner2" style="flex:2;">
                <span class="charaSpecific-buff-label"></span>
                <span class="charaSpecific-buff-label">味方が水属性</span>
                <input id="charaSpecific10007-1" type="checkbox" class="larger-check charaSpecific-check" onchange="isSameAttributeTarget(this.checked);allDPS();">
                <span class="charaSpecific-buff-label"></span>
            </div>
        </div>
*/