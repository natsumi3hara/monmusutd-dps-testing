document.write(`
<tr>
    <td colspan="2" class="displaytext" style="background-color:#b3ffcf">Green = Not excluded</td>
    <td colspan="2" class="displaytext" style="background-color:#c0c0c0">Grey = Excluded</td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Basic Subskills</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1001" class="exsub excluded" onclick="toggleExclude(1001)">HP強化 I</td>
    <td id="exsub-1002" class="exsub excluded" onclick="toggleExclude(1002)">HP強化 II</td>
    <td id="exsub-1003" class="exsub excluded" onclick="toggleExclude(1003)">HP強化 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1004" class="exsub" onclick="toggleExclude(1004)">攻撃力強化 I</td>
    <td id="exsub-1005" class="exsub" onclick="toggleExclude(1005)">攻撃力強化 II</td>
    <td id="exsub-1006" class="exsub" onclick="toggleExclude(1006)">攻撃力強化 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1007" class="exsub excluded" onclick="toggleExclude(1007)">物理防御強化 I</td>
    <td id="exsub-1008" class="exsub excluded" onclick="toggleExclude(1008)">物理防御強化 II</td>
    <td id="exsub-1009" class="exsub excluded" onclick="toggleExclude(1009)">物理防御強化 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1010" class="exsub excluded" onclick="toggleExclude(1010)">魔法防御強化 I</td>
    <td id="exsub-1011" class="exsub excluded" onclick="toggleExclude(1011)">魔法防御強化 II</td>
    <td id="exsub-1012" class="exsub excluded" onclick="toggleExclude(1012)">魔法防御強化 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1013" class="exsub excluded" onclick="toggleExclude(1013)">リジェネ I</td>
    <td id="exsub-1014" class="exsub excluded" onclick="toggleExclude(1014)">リジェネ II</td>
    <td id="exsub-1015" class="exsub excluded" onclick="toggleExclude(1015)">リジェネ III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1016" class="exsub excluded" onclick="toggleExclude(1016)">物理攻撃回避 I</td>
    <td id="exsub-1017" class="exsub excluded" onclick="toggleExclude(1017)">物理攻撃回避 II</td>
    <td id="exsub-1018" class="exsub excluded" onclick="toggleExclude(1018)">物理攻撃回避 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1019" class="exsub excluded" onclick="toggleExclude(1019)">魔法攻撃回避 I</td>
    <td id="exsub-1020" class="exsub excluded" onclick="toggleExclude(1020)">魔法攻撃回避 II</td>
    <td id="exsub-1021" class="exsub excluded" onclick="toggleExclude(1021)">魔法攻撃回避 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1022" class="exsub excluded" onclick="toggleExclude(1022)">移動速度上昇 I</td>
    <td id="exsub-1023" class="exsub excluded" onclick="toggleExclude(1023)">移動速度上昇 II</td>
    <td id="exsub-1024" class="exsub excluded" onclick="toggleExclude(1024)">移動速度上昇 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1025" class="exsub" onclick="toggleExclude(1025)">クリティカル I</td>
    <td id="exsub-1026" class="exsub" onclick="toggleExclude(1026)">クリティカル II</td>
    <td id="exsub-1027" class="exsub" onclick="toggleExclude(1027)">クリティカル III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1028" class="exsub excluded" onclick="toggleExclude(1028)">再出撃時間短縮 I</td>
    <td id="exsub-1029" class="exsub excluded" onclick="toggleExclude(1029)">再出撃時間短縮 II</td>
    <td id="exsub-1030" class="exsub excluded" onclick="toggleExclude(1030)">再出撃時間短縮 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1031" class="exsub excluded" onclick="toggleExclude(1031)">生命力吸収 I</td>
    <td id="exsub-1032" class="exsub excluded" onclick="toggleExclude(1032)">生命力吸収 II</td>
    <td id="exsub-1033" class="exsub excluded" onclick="toggleExclude(1033)">生命力吸収 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1034" class="exsub" onclick="toggleExclude(1034)">攻撃待機短縮 I</td>
    <td id="exsub-1035" class="exsub" onclick="toggleExclude(1035)">攻撃待機短縮 II</td>
    <td id="exsub-1036" class="exsub" onclick="toggleExclude(1036)">攻撃待機短縮 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1037" class="exsub" onclick="toggleExclude(1037)">貫通攻撃 I</td>
    <td id="exsub-1038" class="exsub" onclick="toggleExclude(1038)">貫通攻撃 II</td>
    <td id="exsub-1039" class="exsub" onclick="toggleExclude(1039)">貫通攻撃 III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1040" class="exsub" onclick="toggleExclude(1040)">底力(攻撃) I</td>
    <td id="exsub-1041" class="exsub" onclick="toggleExclude(1041)">底力(攻撃) II</td>
    <td id="exsub-1042" class="exsub" onclick="toggleExclude(1042)">底力(攻撃) III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1043" class="exsub excluded" onclick="toggleExclude(1043)">底力(物理防御) I</td>
    <td id="exsub-1044" class="exsub excluded" onclick="toggleExclude(1044)">底力(物理防御) II</td>
    <td id="exsub-1045" class="exsub excluded" onclick="toggleExclude(1045)">底力(物理防御) III</td>
</tr>
<tr>
    <td class="displaytext" style="border:none"></td>
    <td id="exsub-1046" class="exsub excluded" onclick="toggleExclude(1046)">撤退コスト回復 I</td>
    <td id="exsub-1047" class="exsub excluded" onclick="toggleExclude(1047)">撤退コスト回復 II</td>
    <td id="exsub-1048" class="exsub excluded" onclick="toggleExclude(1048)">撤退コスト回復 III</td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Premium (Epic)</td>
</tr>
<tr>
    <td id="exsub-1057" class="exsub" onclick="toggleExclude(1057)">攻撃+物理防御強化</td>
    <td id="exsub-1064" class="exsub" onclick="toggleExclude(1064)">攻撃+魔法防御強化</td>
    <td id="exsub-1065" class="exsub excluded" onclick="toggleExclude(1065)">HP+物理防御強化</td>
    <td id="exsub-1066" class="exsub excluded" onclick="toggleExclude(1066)">HP+魔法防御強化</td>
    <td id="exsub-1068" class="exsub excluded" onclick="toggleExclude(1068)">物理防御+魔法防御強化</td>
</tr>
<tr>
    <td id="exsub-1069" class="exsub excluded" onclick="toggleExclude(1069)">HP強化+出撃コスト減少</td>
    <td id="exsub-1078" class="exsub excluded" onclick="toggleExclude(1078)">攻撃強化+出撃コスト減少</td>
    <td id="exsub-1079" class="exsub excluded" onclick="toggleExclude(1079)">物理防御強化+物理攻撃回避</td>
    <td id="exsub-1081" class="exsub excluded" onclick="toggleExclude(1081)">攻撃強化+リジェネ</td>
    <td id="exsub-1085" class="exsub excluded" onclick="toggleExclude(1085)">物理防御強化+出撃コスト減少</td>
</tr>
<tr>
    <td id="exsub-1087" class="exsub" onclick="toggleExclude(1087)">攻撃強化+貫通攻撃</td>
    <td id="exsub-1088" class="exsub" onclick="toggleExclude(1088)">生命力吸収+攻撃待機短縮</td>
    <td id="exsub-1093" class="exsub excluded" onclick="toggleExclude(1093)">HP強化+リジェネ</td>
    <td id="exsub-1094" class="exsub excluded" onclick="toggleExclude(1094)">物理攻撃+魔法攻撃回避</td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Premium (Legend)</td>
</tr>
<tr>
    <td id="exsub-1049" class="exsub excluded" onclick="toggleExclude(1049)">アイアンボディ</td>
    <td id="exsub-1050" class="exsub" onclick="toggleExclude(1050)">ファストチャージャー</td>
    <td id="exsub-1051" class="exsub excluded" onclick="toggleExclude(1051)">オートパニッシャー</td>
    <td id="exsub-1062" class="exsub excluded" onclick="toggleExclude(1062)">冥途の置き土産</td>
    <td id="exsub-1063" class="exsub" onclick="toggleExclude(1063)">捨て身の一撃</td>
</tr>
<tr>
    <td id="exsub-1067" class="exsub excluded" onclick="toggleExclude(1067)">聖なる祈り</td>
    <td id="exsub-1074" class="exsub" onclick="toggleExclude(1074)">リミットブレイク</td>
    <td id="exsub-1084" class="exsub excluded" onclick="toggleExclude(1084)">タクティクスガード</td>
    <td id="exsub-1090" class="exsub" onclick="toggleExclude(1090)">疾風怒濤</td>
    <td id="exsub-1091" class="exsub" onclick="toggleExclude(1091)">先手必勝！</td>
</tr>
<tr>
    <td id="exsub-1092" class="exsub excluded" onclick="toggleExclude(1092)">ポイズンボム</td>
    <td id="exsub-1101" class="exsub" onclick="toggleExclude(1101)">屍山血河</td>
    <td id="exsub-1100" class="exsub excluded" onclick="toggleExclude(1100)">アタッチヒール</td>
    <td id="exsub-1099" class="exsub excluded" onclick="toggleExclude(1099)">プロトバリア</td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Main Story</td>
</tr>
<tr>
    <td id="exsub-1054" class="exsub excluded" onclick="toggleExclude(1054)">騎士の心得</td>
    <td id="exsub-1073" class="exsub" onclick="toggleExclude(1073)">魔導の心得</td>
    <td id="exsub-1076" class="exsub" onclick="toggleExclude(1076)">高貴なる狩人</td>
    <td id="exsub-1082" class="exsub" onclick="toggleExclude(1082)">皇女の誇り</td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Boss Challenges</td>
</tr>
<tr>
    <td id="exsub-1056" class="exsub" onclick="toggleExclude(1056)">巨鎧騎士の討伐証</td>
    <td id="exsub-1060" class="exsub excluded" onclick="toggleExclude(1060)">双角王者の討伐証</td>
    <td id="exsub-1070" class="exsub" onclick="toggleExclude(1070)">竜騎士の討伐証</td>
    <td id="exsub-1077" class="exsub" onclick="toggleExclude(1077)">魔導艦の討伐証</td>
    <td id="exsub-1096" class="exsub" onclick="toggleExclude(1096)">究極騎将の討伐証</td>
</tr>
<tr>
    <td id="exsub-1103" class="exsub" onclick="toggleExclude(1103)">恩愛触手の討伐証</td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Event Boss Challenges</td>
</tr>
<tr>
    <td id="exsub-1058" class="exsub excluded" onclick="toggleExclude(1058)">黄金岩晶の討伐証</td>
    <td id="exsub-1071" class="exsub" onclick="toggleExclude(1071)">結石竜の討伐証</td>
    <td id="exsub-1080" class="exsub" onclick="toggleExclude(1080)">古代艦の討伐証</td>
    <td id="exsub-1086" class="exsub excluded" onclick="toggleExclude(1086)">常夏巨兵の討伐証</td>
    <td id="exsub-1095" class="exsub excluded" onclick="toggleExclude(1095)">41ストーン</td>
</tr>
<tr>
    <td id="exsub-1097" class="exsub excluded" onclick="toggleExclude(1097)">穴鏡触手の討伐証</td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Paid Subskills</td>
</tr>
<tr>
    <td id="exsub-1053" class="exsub excluded" onclick="toggleExclude(1053)">フェニックスの加護</td>
    <td id="exsub-1059" class="exsub" onclick="toggleExclude(1059)">フルハートハイビート</td>
    <td id="exsub-1072" class="exsub excluded" onclick="toggleExclude(1072)">スタートチャージャー</td>
    <td id="exsub-1075" class="exsub excluded" onclick="toggleExclude(1075)">ゴブリンパーティ！</td>
    <td id="exsub-1083" class="exsub excluded" onclick="toggleExclude(1083)">ぐねぐねスライムくん（緑）</td>
</tr>
<tr>
    <td id="exsub-1089" class="exsub" onclick="toggleExclude(1089)">まったり充電寝正月</td>
    <td id="exsub-1098" class="exsub" onclick="toggleExclude(1098)">1stAnniversaryの祝福</td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
</tr>
<tr>
    <td colspan="5" class="displaytext">Other</td>
</tr>
<tr>
    <td id="exsub-1055" class="exsub excluded" onclick="toggleExclude(1055)">霧を晴らす列車</td>
    <td id="exsub-1061" class="exsub excluded" onclick="toggleExclude(1061)">純白ヴェール</td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
    <td class="exsub excluded"></td>
</tr>
`);