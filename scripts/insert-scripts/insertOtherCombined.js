document.write(`
<style>
#flex-container-otherCombined-buff {
    display: flex;
    flex-wrap: wrap;
}
#flex-container-otherCombined-buff br{
    display: block;
    content: "";
    margin-top: 0;
}
.flex-container-otherCombined-buff-inner{
    width:150px;
    height:100px;
    background-color:#ff788c;
    margin:5px;
    display:flex;
}
.flex-container-otherCombined-buff-inner2{
    display:flex;
    flex-direction:column;
    flex:1;
    text-align:center;
}
.otherCombined-buff-img{
    height: 75px;
    flex:3;
}
.otherCombined-buff-name{
    text-align:center;
    font-size:0.65em;
    flex:1;
}
.otherCombined-buff-label{
    font-size:0.8em;
    flex:1;
}
.otherCombined-check{
    margin:auto;
    flex:1;
}
.otherCombinedBtn {
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
.otherCombinedBtn:hover {
    background-color: #ddd;
}
.otherCombinedBtn.active {
    background-color: #666;
    color: white;
}
</style>
<button type="button" class="collapsible-button inputInsertButton">味方バフ（クリックで開く）</button>
<div class="collapsible-content" style="display:none;">
    <button type="button" class="collapsible-button inputInsertButton" style="width:80%;background-color:#fc60cb;">フィルター</button>
    <div class="collapsible-content" style="display:none;width:80%;background-color:#fc97dc;font-family:mtdfont;">
        <input type="search" id="otherCombined-searchbox-type" style="display:none;margin:3px;font-size:1.2vw;font-family:mtdfont;" value="all" disabled>
        キャラ名検索<input type="search" id="otherCombined-searchbox-name" style="margin:3px;font-size:1.2vw;font-family:mtdfont;" oninput="filterotherCombined()">
        <hr>
        <div id="buttonContainer">
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('attack');filterotherCombined();">攻撃力</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('damageD');filterotherCombined();">与ダメ</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('damageR');filterotherCombined();">被ダメ</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('aSpd');filterotherCombined();">攻速系</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('critical');filterotherCombined();">CRI系</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('hp');filterotherCombined();">HP</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('def');filterotherCombined();">物防/魔防</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('range');filterotherCombined();">射程</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('mSpd');filterotherCombined();">移動速度</button>
            <button class="otherCombinedBtn" onclick="addtootherCombinedSearch('attribute');filterotherCombined();">属性マス</button>
            <hr>
        </div>
    </div>
    <div id="flex-container-otherCombined-buff">
        <div title="シルフィーネ-しるふぃーね" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="風属性マス配置時、範囲内の味方のクリティカル率+20%" style="cursor: help;"><img src="../../img/chara-icons/icon_10005_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">シルフィーネ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">風マス配置</span>
                <input type="checkbox" id="otherPassive10005" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="リン-りん" class="flex-container-otherCombined-buff-inner def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="味方を回復した時に物理防御力を5秒+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10006_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">リン</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">(専用武器)</span>
                <span class="otherCombined-buff-label">回復回数</span>
                <input id="otherUnique10006-1" type="number" min="0" max="9" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="メリッサ-めりっさ" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、味方の毒状態の敵への与ダメージが1.1倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10037_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">メリッサ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル2中</span>
                <input type="checkbox" id="otherSkill10037" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10037" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="ルルゥ-るるぅ" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の味方の与えるダメージ1.1倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10046_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ルルゥ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">専用武器</span>
                <input type="checkbox" id="otherUnique10046" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="バウ-ばう" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中コボルト族の攻撃力+15%" style="cursor: help;"><img src="../../img/chara-icons/icon_10060_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">バウ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10060" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="ディリオ-でぃりお" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、味方の毒状態の敵への与ダメージ1.1倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10067_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ディリオ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10067-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10067-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ヴィルエ-ヴぃるえ-ゔぃるえ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキルを使用する度、範囲内の味方の攻撃力がそれぞれの基本攻撃力の5%上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10070_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ヴィルエ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
            <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">使用回数</span>
                <input id="otherSkill10070-1" type="number" min="0" max="10" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="アルギュロ-あるぎゅろ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、竜特性の攻撃力+10%" style="cursor: help;"><img src="../../img/chara-icons/icon_10075_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">アルギュロ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">(専用武器)</span>
                <span class="otherCombined-buff-label">配置中</span>
                <input type="checkbox" id="otherUnique10075-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="メアルス-めあるす" class="flex-container-otherCombined-buff-inner def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、全味方の物理防御力[2.00倍→2.50倍]" style="cursor: help;"><img src="../../img/chara-icons/icon_10103_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">メアルス</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10103" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10103" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="アンセ-あんせ" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方に、敵を攻撃で倒すごとにCRI率が15%、CRIダメージが10%上昇する能力を付与する" style="cursor: help;"><img src="../../img/chara-icons/icon_10104_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">アンセ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">(スキル2)</span>    
                <span class="otherCombined-buff-label">倒した敵</span>
                <input id="otherPassive10104-1" type="number" min="0" max="25" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>    
            </div>
        </div>
        <div title="ペント-ぺんと" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中コボルト族の攻撃力+20%" style="cursor: help;"><img src="../../img/chara-icons/icon_10121_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ペント</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10121" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="マージェル-まーじぇる" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の敵の攻撃力を15秒間10%減少させ、減少値分全味方の攻撃力を15秒間増加させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10122_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">マージェル</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">敵の攻撃力</span>
                <input id="otherSkill10122-1" type="number" min="0" max="99999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="ヤーセファ-やーせふぁ" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の自身を含む風属性の味方の攻撃速度が上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10127_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ヤーセファ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10127" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10127" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="灯火ミテラス-みてらす" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の味方の攻撃力を自身の攻撃力の20%(完凸で+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10137_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">灯火ミテラス</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10137-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">攻撃力</span>
                <input id="otherPassive10137-2" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="ラピス-らぴす" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方の与えるダメージが1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10139_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ラピス</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10139" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10139" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="たまも" class="flex-container-otherCombined-buff-inner def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、自身を除く範囲内の味方の物理防御力を、自身の物理防御力の30%(完凸で+10%)増加" style="cursor: help;"><img src="../../img/chara-icons/icon_10148_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">たまも</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10148-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">物理防御</span>
                <input id="otherPassive10148-2" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="ピューリ-ぴゅーり" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、射程内の火属性マスに配置しているユニットの攻撃力+6%\nスキル中、種族特性の火属性マス配置時のユニットの攻撃力上昇量が2倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10153_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ピューリ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">状態</span>
                <select name="otherPassive10153-1" id="otherPassive10153-1" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="none">無し</option>
                    <option value="deploy">配置</option>
                    <option value="skill">スキル1中</option>
                </select>
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="キョウ-きょう" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の風属性の味方の攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10157_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">キョウ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10157" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10157" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="ココノハ-ここのは" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、配置中の味方の妖怪1体につき、全味方の攻撃力が160(完凸で+40)上昇する" style="cursor: help;"><img src="../../img/chara-icons/icon_10171_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ココノハ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10171-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">妖怪人数</span>
                <input id="otherPassive10171-2" type="number" min="1" max="50" value="1" class="otherCombined-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="ココノハ-ここのは" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方の攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10171_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ココノハ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10171" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10171" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="ディフォーラ-でぃふぉーら" class="flex-container-otherCombined-buff-inner damageR">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="ブロック中、またはスキル中、敵の物理攻撃による被ダメージが20%(完凸で+8%)上昇する" style="cursor: help;"><img src="../../img/chara-icons/icon_10173_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ディフォーラ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10173" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">覚醒</span>
                <input type="checkbox" id="otherSkill10173a" class="larger-check otherCombined-check" onChange="allDPS();">
            </div>
        </div>
        <div title="マシュロア-ましゅろあ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中のゴブリン族1体につき、ゴブリン族の攻撃力7%上昇(ゴブリン部隊は4体分上昇)" style="cursor: help;"><img src="../../img/chara-icons/icon_10179_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">マシュロア</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10179-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">ゴブリン数</span>
                <input id="otherPassive10179-2" type="number" min="1" max="50" value="1" class="otherCombined-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="マシュロア-ましゅろあ" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、ゴブリン族(トークン含)の攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10179_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">マシュロア</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10179" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10179" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="ウスコ-うすこ" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、全ての味方のクリティカル率+25%(完凸で+7%)、クリティカル率上限+25%\nスキル中、種族特性のクリティカル確率が2倍化" style="cursor: help;"><img src="../../img/chara-icons/icon_10185_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ウスコ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10185-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">状態</span>
                <select name="otherPassive10185-2" id="otherPassive10185-2" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="none">無し</option>
                    <option value="deploy">配置</option>
                    <option value="skill">スキル中</option>
                </select>
            </div>
        </div>
        <div title="号令アルギュロ-あるぎゅろ" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="攻撃時、範囲内の味方の攻撃速度・移動速度を5秒15%(完凸で+5%)増加\nスキル中、種族特性の攻撃速度・移動速度増加量2倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10202_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">号令アルギュロ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">状態</span>
                <select name="otherPassive10202-1" id="otherPassive10202-1" class="otherCombined-check" style="width:80%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="15">通常</option>
                    <option value="30">通常+スキル1</option>
                    <option value="20">完凸</option>
                    <option value="40">完凸+スキル1</option>
                </select>
                <span class="otherCombined-buff-label">攻撃回数</span>
                <input id="otherPassive10202-2" type="number" min="0" max="9" value="0" class="otherCombined-check" style="width:80%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="援武ニグリュ-にぐりゅ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の自身を除く味方の攻撃力を自身の攻撃力の50%(完凸で+10%)分上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10203_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">援武ニグリュ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10203-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">攻撃力</span>
                <input id="otherPassive10203-2" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="シナツ-しなつ" class="flex-container-otherCombined-buff-inner mSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="攻撃時、7秒間全ての味方の移動速度を+60(完凸で+15)" style="cursor: help;"><img src="../../img/chara-icons/icon_10207_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">シナツ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10207-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">7秒攻撃回数</span>
                <input id="otherPassive10207-2" type="number" min="0" max="20" value="0" class="otherCombined-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="火竜イグニ-いぐに" class="flex-container-otherCombined-buff-inner attack def range attribute">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、範囲内の火属性の味方の火属性マス配置ボーナス効果が3倍\nスキル中、自身を含む範囲内の味方を、火属性マスに配置中の状態にする" style="cursor: help;"><img src="../../img/chara-icons/icon_10209_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">火竜イグニ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10209-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherPassive10209-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="祝砲リクリフ-りくりふ" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方のクリティカルダメージ+30%" style="cursor: help;"><img src="../../img/chara-icons/icon_10217_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">祝砲リクリフ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10217" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10217" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="エルタ-えるた" class="flex-container-otherCombined-buff-inner attack aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の自身を含む味方の攻撃力+30%(完凸で+10%)、攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10220_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">エルタ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10220-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10220-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="氷雪リュプチェ-りゅぷちぇ" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、味方の凍結状態の敵への与ダメージが1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10225_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">氷雪リュプチェ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10225" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10225" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="旋律アテエル-あてえる" class="flex-container-otherCombined-buff-inner attatk">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、自身を含む周囲の味方の攻撃力が自身の基本攻撃力の10%分上昇する" style="cursor: help;"><img src="../../img/chara-icons/icon_10239_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">旋律アテエル</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
            <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">基本攻撃力</span>
                <input id="otherSkill10239-1" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="プロメスティン-ぷろめすてぃん" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="回復した味方の攻撃力を20秒自身の基本攻撃力40%(完凸で+10%)上昇" style="cursor: help;"><img src="../../img/chara-icons/icon_10244_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">プロメスティン</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸/回数</span>
                <span><input type="checkbox" id="otherPassive10244-1" class="larger-check otherCombined-check" style="display:inline;" onchange="allDPS();"><input id="otherPassive10244-2" type="number" min="0" max="20" value="0" class="otherCombined-nocheck" style="width:40%;height:70%;margin:2px auto;border:none;display:inline;" onChange="allDPS();"></span>
                <span class="otherCombined-buff-label">基礎攻撃力</span>
                <input id="otherPassive10244-3" type="number" min="0" max="9999" value="0" class="otherCombined-nocheck" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="プロメスティン-ぷろめすてぃん" class="flex-container-otherCombined-buff-inner hp">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方の最大HP1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10244_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">プロメスティン</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherSkill10244-1" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="ルププ＆タンタル-るぷぷ＆たんたる-るぷぷあんどたんたる" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、スキル発動中の味方の与ダメージを1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10248_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name" style="font-size:0.5em;">ルププ＆タンタル</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10248-1" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10248" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="シィール-しぃーる" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内自身を除く味方の攻撃後の待ち時間を短縮" style="cursor: help;"><img src="../../img/chara-icons/icon_10254_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">シィール</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10254" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10254" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="壊奏ブンコ-ぶんこ" class="flex-container-otherCombined-buff-inner attack def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、自身を含む妖怪の味方の攻撃力、物理防御力、魔法防御力を+150(完凸で+30)" style="cursor: help;"><img src="../../img/chara-icons/icon_10264_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">壊奏ブンコ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10264-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10264-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="壊奏ブンコ-ぶんこ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="攻撃行動時に、9秒間周囲の自身を含む味方の攻撃力(基本攻撃力×0.09)上昇する" style="cursor: help;"><img src="../../img/chara-icons/icon_10264_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">壊奏ブンコ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">演奏(9秒)</span>
                <input id="otherPassive10264-3" type="number" min="0" max="20" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label">基本攻撃力</span>
                <input id="otherPassive10264-4" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="戯夏マギー-まぎー" class="flex-container-otherCombined-buff-inner attribute">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置時に自身を含む周囲の味方を、20秒間水属性マスに配置中の状態にする" style="cursor: help;"><img src="../../img/chara-icons/icon_10272_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">戯夏マギー</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">配置(20秒)</span>
                <input type="checkbox" id="otherPassive10272-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="クルクリ-くるくり" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、配置中の味方トラップ1体につき、全味方のクリティカル率が5%、クリティカルダメージが10%上昇する" style="cursor: help;"><img src="../../img/chara-icons/icon_10273_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">クルクリ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>    
                <span class="otherCombined-buff-label">トラップ数</span>
                <input id="otherPassive10273-1" type="number" min="0" max="20" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>    
            </div>
        </div>
        <!--
        <div title="ルシターニ-るしたーに" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="none" style="cursor: help;"><img src="../../img/chara-icons/icon_10275_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ルシターニ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">魔力段階</span>
                <select name="otherSkill10275-1" id="otherSkill10275-1" class="otherCombined-check" style="width:80%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="0">段階0</option>
                    <option value="25">段階1</option>
                    <option value="50">段階2</option>
                    <option value="75">段階3</option>
                    <option value="30">完凸+段階1</option>
                    <option value="60">完凸+段階2</option>
                    <option value="90">完凸+段階3</option>
                </select>
                <span class="otherCombined-buff-label">基本攻撃力</span>
                <input id="otherSkill10275-2" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        -->
        <div title="オセヴィア-おせヴぃあ-おせゔぃあ" class="flex-container-otherCombined-buff-inner def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の地属性マスに配置されている味方の物理防御力+20%(完凸で+5%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10277_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">オセヴィア</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10277-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10277-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="オセヴィア-おせヴぃあ-おせゔぃあ" class="flex-container-otherCombined-buff-inner attack aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の自身を除く味方の攻撃力+30%、攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10277_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">オセヴィア</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10277" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10277" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="風嫁ヤーセファ-やーせふぁ" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の自身を含む風属性の味方クリティカル率+20%、クリティカル率上限+20%" style="cursor: help;"><img src="../../img/chara-icons/icon_10281_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">風嫁ヤーセファ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10281" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10281" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="憧嫁スズ-すず" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の自身を含む味方の攻撃速度20%(完凸で+5%)を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10282_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">憧嫁スズ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10282-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10282-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ナナエ-ななえ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、範囲内の自身を除く妖怪の味方の攻撃力を(基本攻撃力×0.2)上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10289_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ナナエ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>    
                <span class="otherCombined-buff-label">基本攻撃力</span>
                <input id="otherPassive10289-1" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>    
            </div>
        </div>
        <div title="幽霊アメリ-あめり" class="flex-container-otherCombined-buff-inner critical">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="配置中、味方の妖怪のクリティカル率を+7%(完凸で+2%)" style="cursor: help;"><img src="../../img/chara-icons/icon_10290_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">幽霊アメリ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">配置</span>
                <input type="checkbox" id="otherPassive10290-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10290-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ルキファ-るきふぁ" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル終了時、永続的に味方の攻撃力を30%増加 (ラッツェルが居れば5回まで)" style="cursor: help;"><img src="../../img/chara-icons/icon_10297_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ルキファ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>    
                <span class="otherCombined-buff-label">死亡バフ</span>
                <input id="otherPassive10297-1" type="number" min="0" max="5" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>    
            </div>
        </div>
        <div title="ニッドラ-にっどら" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、味方の与ダメージが、呪詛状態の敵に対し1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10299_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ニッドラ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10299" class="larger-check otherCombined-check" onChange="allDPS();">
                <span class="otherCombined-buff-label">スキルLv</span>
                <input id="level10299" class="otherCombined-level" type="number" min="1" max="5" value="1" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();" disabled>
            </div>
        </div>
        <div title="ティッカ-てぃっか" class="flex-container-otherCombined-buff-inner aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の味方の移動速度と攻撃速度を上昇\nスキル中、種族特性の速度上昇効果2倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10300_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ティッカ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10300-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherPassive10300-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ニーサ-にーさ" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、味方の毒状態の敵に対し与えるダメージが1.2倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10301_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ニーサ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10301-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="戯楽祭ディフォーラ-でぃふぉーら" class="flex-container-otherCombined-buff-inner damageR">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の敵が受けるあらゆるダメージを20%増加させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10304_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name" style="font-size:0.5em;">戯楽祭ディフォーラ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10304-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="暗陰巫ヴァリナ-ヴぁりな-ゔぁりな" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方は毒・暗闇・スタン状態の敵へそれぞれ与えるダメージ1.1倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10318_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">暗陰巫ヴァリナ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">スキル1中+</span>
                <span class="otherCombined-buff-label">状態異常数</span>
                <select name="otherSkill10318-1" id="otherSkill10318-1" class="otherCombined-check" style="width:80%;height:20%;margin:2px auto;border:none;font-family:mtdfont;" onchange="allDPS();">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="氷竜フリス-ふりす" class="flex-container-otherCombined-buff-inner attribute">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、射程内の味方を水属性マスに配置中の状態にする" style="cursor: help;"><img src="../../img/chara-icons/icon_10321_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">氷竜フリス</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10321-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherPassive10321-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="蘭華メロン-めろん" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、射程内の風属性の味方の与えるダメージ1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10326_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">蘭華メロン</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10326-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="オンシジューム-おんしじゅーむ" class="flex-container-otherCombined-buff-inner damageD">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、射程内の風属性の味方の与えるダメージ1.3倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10328_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">オンシジューム</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10328-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="アナ-あな" class="flex-container-otherCombined-buff-inner damageR">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、火傷状態の全敵の受けるダメージが1.4倍" style="cursor: help;"><img src="../../img/chara-icons/icon_10329_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">アナ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10329-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="フィリス-ふぃりす" class="flex-container-otherCombined-buff-inner hp">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="スキル中、範囲内の味方が光属性マスに配置されている場合、最大HP+40%" style="cursor: help;"><img src="../../img/chara-icons/icon_10330_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">フィリス</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">スキル1中</span>
                <input type="checkbox" id="otherSkill10330-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="購買マージェル-まーじぇる" class="flex-container-otherCombined-buff-inner attack">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="範囲内の敵の攻撃力を40秒間6%減少させ、減少値の半分の値分全味方の攻撃力を40秒間増加させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10332_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">マージェル</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">敵の攻撃力</span>
                <input id="otherSkill10332-1" type="number" min="0" max="99999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
        <div title="奏響ドネ-どね" class="flex-container-otherCombined-buff-inner def">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="射程内の味方の物理防御力を、自身の攻撃力50%(完凸で+10%)分増加させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10333_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">奏響ドネ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10333-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">攻撃力</span>
                <input id="otherPassive10333-2" type="number" min="0" max="19999" value="0" class="otherCombined-check" style="width:70%;height:20%;margin:2px auto;border:none;" onChange="allDPS();">
            </div>
        </div>
        <div title="呪剣ニッドラ-にっどら" class="flex-container-otherCombined-buff-inner damageR">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="ニッドラがブロックしている敵の受ける魔法ダメージが1.2倍(完凸で+0.05倍)" style="cursor: help;"><img src="../../img/chara-icons/icon_10335_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">幽霊アメリ</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label">ブロック中</span>
                <input type="checkbox" id="otherPassive10335-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label">完凸</span>
                <input type="checkbox" id="otherPassive10335-2" class="larger-check otherCombined-check" onchange="allDPS();">
            </div>
        </div>
        <div title="ルクレツィア-るくれつぃあ" class="flex-container-otherCombined-buff-inner attack aSpd">
            <div class="flex-container-otherCombined-buff-inner2">
                <abbr title="射程内の味方の攻撃速度を上昇させる" style="cursor: help;"><img src="../../img/chara-icons/icon_10357_0_s.png" class="otherCombined-buff-img"></abbr>
                <span class="otherCombined-buff-name">ルクレツィア</span>
            </div>
            <div class="flex-container-otherCombined-buff-inner2">
                <span class="otherCombined-buff-label"></span>
                <span class="otherCombined-buff-label">範囲内</span>
                <input type="checkbox" id="otherPassive10357-1" class="larger-check otherCombined-check" onchange="allDPS();">
                <span class="otherCombined-buff-label"></span>
            </div>
        </div>
    </div>
</div>
<script>
let otherCombinedchecks = document.getElementsByClassName("otherCombined-check")
for (let i=0;i<otherCombinedchecks.length;i++){
    
    //passives//

    if (otherCombinedchecks[i].id.split("-")[0] == "otherPassive"+masterValues.charaID.toString()){
        if ([10179].includes(masterValues.charaID)){
            otherCombinedchecks[i].checked = true;
        } else if ([10244,10264,10272,10273,10290,10297].includes(masterValues.charaID)){
            otherCombinedchecks[i].disabled = false;
        } else {
            otherCombinedchecks[i].disabled = true;
        }
    } else {}
    if (otherCombinedchecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString() && charAwaked){
        otherCombinedchecks[i].disabled = true;
        otherCombinedchecks[i].checked = true;
    } else if (otherCombinedchecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString()){
        otherCombinedchecks[i].disabled = true;
    }
    
    //skills//

    if (otherCombinedchecks[i].id == "otherSkill"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10070){
            otherCombinedchecks[i].disabled = false;
            otherCombinedchecks[i].checked = false;
        } else {
            otherCombinedchecks[i].disabled = true;
            otherCombinedchecks[i].checked = false;
        }
    } else if (otherCombinedchecks[i].id == "otherSkill"+masterValues.charaID.toString()+"a"){
        otherCombinedchecks[i].disabled = true;
        otherCombinedchecks[i].checked = false;
    }

    //uniques//

    if (otherCombinedchecks[i].id.split("-")[0] == "otherUnique"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10179){
            otherCombinedchecks[i].checked = true;
        }
        if (masterValues.charaID === 10006){
            otherCombinedchecks[i].disabled = false;
        } else {
            otherCombinedchecks[i].disabled = true;
        }
    }
    if (otherCombinedchecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString() && charAwaked){
        otherCombinedchecks[i].disabled = true;
        otherCombinedchecks[i].checked = true;
    } else if (otherCombinedchecks[i].id.split("-")[0] == "awake"+masterValues.charaID.toString()){
        otherCombinedchecks[i].disabled = true;
    }
}
let otherCombinedSkilllevels = document.getElementsByClassName("otherCombined-level")
for (let i=0;i<otherCombinedSkilllevels.length;i++){
    if (otherCombinedSkilllevels[i].id == "level"+masterValues.charaID.toString()){
        if (masterValues.charaID === 10070){
            otherCombinedSkilllevels[i].disabled = false;
        } else {
            otherCombinedSkilllevels[i].disabled = true;
        }
    } else {}
}

//buttons//

function filterotherCombined(){
    let typeFilter = document.getElementById("otherCombined-searchbox-type").value.split(',');
    let nameFilter = document.getElementById("otherCombined-searchbox-name").value;
    typeFilter.splice(typeFilter.indexOf("all"),1);
    let otherCombinedDivs = document.getElementsByClassName("flex-container-otherCombined-buff-inner");
    let checkerOR = (arr,target) => target.some(v => arr.includes(v));
    let checkerAND = (arr, target) => target.every(v => arr.includes(v));
    for (let i=0;i<otherCombinedDivs.length;i++){
        let divTypes = otherCombinedDivs[i].className.split(" ");
        divTypes.splice(divTypes.indexOf("flex-container-otherCombined-buff-inner"),1);
        console.log(typeFilter);
        console.log(divTypes);
        if ((checkerAND(divTypes,typeFilter)||typeFilter.length===0)&&otherCombinedDivs[i].getAttribute("title").toLowerCase().includes(nameFilter.toLowerCase())){
            console.log("conditions met! or filter length 0!")
            otherCombinedDivs[i].style.display = "flex";
        }
        else {
            console.log("conditions not met!");
            otherCombinedDivs[i].style.display = "none";
        }
    }
}

function addtootherCombinedSearch(toggletype){
    let searchboxtype = document.getElementById("otherCombined-searchbox-type");
    if (searchboxtype.value.includes(','+toggletype)){
        searchboxtype.value = searchboxtype.value.replace(','+toggletype,'');
    }
    else {
        searchboxtype.value += ','+toggletype;
    }
}

function otherCombinedSelection(){
    if (this.className.includes(" active")) {
    this.className = this.className.replace(" active", "");
    } else {
    this.className += " active";
    }
}
var btnContainer = document.getElementById("buttonContainer");
var btns = btnContainer.getElementsByClassName("otherCombinedBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", otherCombinedSelection)
}
</script>


`);