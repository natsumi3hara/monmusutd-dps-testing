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
<button type="button" class="collapsible-button inputInsertButton">共通（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <div id="flex-container-shared-buff">
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="配置時、攻撃と物防と魔防+30%、射程+10%" style="cursor: help;"><img src="../../img/ui-icons/Summon_Type_3.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">属性マス</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">配置</span>
                <input type="checkbox" id="shared20001-1" class="larger-check shared-check" onChange="attributeTile();allDPS();">
                <span class="shared-buff-label">属性</span>
                <select name="attribute-tile-select" id="shared20001-2" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="attributeTile();allDPS();">
                    <option value="2">火</option>
                    <option value="3">水</option>
                    <option value="4">風</option>
                    <option value="7">地</option>
                    <option value="5">光</option>
                    <option value="6">闇</option>
                </select>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <img src="../../img/ui-icons/heart_life_block.png" class="shared-buff-img">
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
                <abbr title="移動中" style="cursor: help;"><img src="../../img/ui-icons/pallios_walk.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">移動バフ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">移動中</span>
                <input type="checkbox" id="shared20003" class="larger-check shared-check" onChange="isMove(this.checked);allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="EXスキルI\n発動時に味方遠距離のスキル準備時間を-10秒\n\nEXスキルII\n発動時に味方遠距離のスキル準備時間を-7秒" style="cursor: help;"><img src="../../img/chara-icons/icon_10068_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">カヅネ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">EXスキルⅡ</span>
                <input type="checkbox" id="shared20004-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">回数</span>
                <input id="shared20004-2" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="ゴブリンが死亡すると全味方のスキル再使用時間が3秒短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_10032_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">アニシラ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">回数</span>
                <input id="shared20005-2" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="配置中、味方近接のスキル使用後、再発動までの時間を-4秒(フル覚醒で-2秒)" style="cursor: help;"><img src="../../img/chara-icons/icon_10248_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name" style="font-size:0.5em;">ルププ＆タンタル</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label">配置</span>
                <input type="checkbox" id="shared20006-1" class="larger-check shared-check" onChange="allDPS();">
                <span class="shared-buff-label">完凸</span>
                <input type="checkbox" id="shared20006-2" class="larger-check shared-check" onChange="allDPS();">
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="範囲内味方のスキル再使用時間を-2秒" style="cursor: help;"><img src="../../img/chara-icons/icon_10300_0_s.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">ティッカ</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">回数</span>
                <input id="shared20007-2" type="number" min="0" max="5" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="天候" style="cursor: help;"><img src="../../img/ui-icons/we_7_Icon.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">天候</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">天候</span>
                <select name="attribute-tile-select" id="shared20008-1" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="weatherType();allDPS();">
                    <option value="0">無し</option>
                    <option value="15">雨</option>
                </select>
                <span class="shared-buff-label"></span>
            </div>
        </div>
        <div class="flex-container-shared-buff-inner">
            <div class="flex-container-shared-buff-inner2">
                <abbr title="[鞭クラスACT]与ダメージ1.2倍" style="cursor: help;"><img src="../../img/equipment-icons/3801.png" class="shared-buff-img"></abbr>
                <span class="shared-buff-name">テラーペイン</span>
            </div>
            <div class="flex-container-shared-buff-inner2">
                <span class="shared-buff-label"></span>
                <span class="shared-buff-label">ACT発動</span>
                <input type="checkbox" id="shared20009" class="larger-check shared-check" onChange="isMove(this.checked);allDPS();">
                <span class="shared-buff-label"></span>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　サブスキル（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-shared-buff">
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="配置中、全味方の物理防御力+4%\n(枚数は自身除外)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">タクティクス</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">枚数</span>
                    <input id="shared21001" type="number" min="0" max="11" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="敵を攻撃で倒すごとに攻撃力が1%上昇\n(最大50回/死亡撤退時リセット)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">屍山血河</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">敵数</span>
                    <input id="shared21002" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="クリティカル率+20%、移動速度+100\nクリティカル時、攻撃速度が10秒間10%増加" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">来たる福女！</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">10秒CRI数</span>
                    <input id="shared21003" type="number" min="0" max="10" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="再出撃までの時間を40%短縮(重複不可)\n自身の死亡時、味方全員の攻撃力を10秒間100%上昇させる" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">戦意継承</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">死亡回数</span>
                    <input id="shared21004" type="number" min="0" max="12" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="クリティカル発生時、攻撃力+2%\n(最大50回/死亡撤退時リセット)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">アサルトｸﾘﾃｨｶﾙ</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">CRI数</span>
                    <input id="shared21005" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="移動速度+50％\n配置、移動完了後5秒間、攻撃速度が少し増加する" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">ゆく年くる年</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">移動回数</span>
                    <input id="shared21006" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="配置中、全味方の魔法防御力+4%\n(枚数は自身除外)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">タクティクスM</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">枚数</span>
                    <input id="shared21007" type="number" min="0" max="11" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="配置中、全味方の物防・魔防+3%\n(枚数は自身除外)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">ﾀｸﾃｨｶﾙマスター</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">枚数</span>
                    <input id="shared21008" type="number" min="0" max="11" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="ドラゴンにセット時、最大HPと攻撃力+15%\r\n自身の攻撃で敵を撃破した時10秒間攻撃力10%上昇" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">ドラゴンｽﾋﾟﾘｯﾄ</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">倒した敵</span>
                    <input id="shared21009" type="number" min="0" max="50" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="アンデッドにセット時、攻撃力+25%、最大HP-15%\r\n敵撃破時、最大HP+5%(最大20回/死亡撤退時リセット)" style="cursor: help;"><img src="../../img/ui-icons/subskill_L.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">亡者の残影</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">倒した敵</span>
                    <input id="shared21010" type="number" min="0" max="20" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　トークン（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-shared-buff">
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【リッチ娘】リコ\n付与した味方の攻撃力を20秒+12%(+3%)" style="cursor: help;"><img src="../../img/chara-icons/icon_50012_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">霊魂</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label">覚醒?</span>
                    <input type="checkbox" id="shared22001-1" class="larger-check shared-check" onChange="allDPS();">
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22001-2" type="number" min="0" max="30" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【ジン娘】ヤーセファ\n風属性味方の攻撃力+25%" style="cursor: help;"><img src="../../img/chara-icons/icon_40210_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">風エレメンタル</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22002" type="number" min="0" max="4" value="0" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【マモン娘】マージェル\n付与した味方のステータスを撤退するまで強化する\n近接クラス：HP、攻撃力+10%\n遠隔/スカウト系クラス：攻撃力+10%、攻撃間隔-10%" style="cursor: help;"><img src="../../img/chara-icons/icon_50037_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">御買得品</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22003" type="number" min="0" max="999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【万機の祖たる者】アージェ\n射程内の味方の物理魔法防御力を+5%\n光属性の場合は追加で攻撃力+8%" style="cursor: help;"><img src="../../img/chara-icons/icon_50040_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">魔導ドローン</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22004" type="number" min="0" max="2" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【劇薬のリッチ娘】リコ\n付与した味方の攻撃力を40秒+12%" style="cursor: help;"><img src="../../img/chara-icons/icon_50044_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">助手霊魂</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22005" type="number" min="0" max="12" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【ドヴェルグ娘】クルクリ\n範囲内の敵の被ダメージを10%増加させる" style="cursor: help;"><img src="../../img/chara-icons/icon_50050_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">偵察ドローン</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label"></span>
                    <span class="shared-buff-label">スキル発動</span>
                    <input type="checkbox" id="shared22006" class="larger-check shared-check" onChange="allDPS();">
                    <span class="shared-buff-label"></span>
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【劇薬のリッチ娘】リコ\n遠隔ユニットと遠近距離ユニットに付与した時、与ダメージ20%(完凸で+4%)上昇\nスキル中、近接ユニットにもこの効果が発生する" style="cursor: help;"><img src="../../img/chara-icons/icon_50056_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">ライトソウル</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label">効果発生</span>
                    <input type="checkbox" id="shared22007-1" class="larger-check shared-check" onChange="allDPS();">
                    <span class="shared-buff-label">覚醒?</span>
                    <input type="checkbox" id="shared22007-2" class="larger-check shared-check" onChange="allDPS();">
                </div>
            </div>
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="【購買のマモン娘】マージェル\n付与した味方に攻撃力+20%(完凸で+5%)を撤退するまで付与する" style="cursor: help;"><img src="../../img/chara-icons/icon_50059_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">購買部食品</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label">トークン数</span>
                    <input id="shared22008-1" type="number" min="0" max="999" value="0" class="otherPassive-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                    <span class="shared-buff-label">覚醒?</span>
                    <input type="checkbox" id="shared22008-2" class="larger-check shared-check" onChange="allDPS();">
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="collapsible-button inputInsertButton">　　-　獣神（クリックで開く）</button>
    <div class="collapsible-content" style="display:none;">
        <div id="flex-container-shared-buff">
            <div class="flex-container-shared-buff-inner">
                <div class="flex-container-shared-buff-inner2">
                    <abbr title="範囲内の味方のHPを[1000~2800]回復し、攻撃力[40%~60%]と攻撃速度を30秒上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_30012_0_s.png" class="shared-buff-img"></abbr>
                    <span class="shared-buff-name">パニエスキル</span>
                </div>
                <div class="flex-container-shared-buff-inner2">
                    <span class="shared-buff-label">発動</span>
                    <input type="checkbox" id="shared23001-1" class="larger-check shared-check" onChange="allDPS();">
                    <span class="shared-buff-label">レベル</span>
                    <input id="shared23001-2" type="number" min="1" max="10" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                </div>
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
function makeSameAttribute(){
    document.getElementById("shared20001-2").value = masterValues.unitcard["element"].toString();
}
makeSameAttribute();
</script>


`);