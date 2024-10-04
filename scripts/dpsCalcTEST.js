function testLevelCC(){
    let level = Number(document.getElementById("input-level").value);
    let cc = Number(document.getElementById("input-cc").value);
    if (level === "" || cc === ""){
        window.alert("レベルまたはクラスチェンジが空白");
        document.getElementById("input-level").value = 1;
        document.getElementById("input-cc").value = 0;
    } else if (level > 150 || level < 1) {
        window.alert("レベル：最低値1、最大値150");
        document.getElementById("input-level").value = 1;
    } else if (cc > 4 || cc < 0) {
        window.alert("クラスチェンジ：最低値0、最大値3");
        document.getElementById("input-cc").value = 0;
    } else if (!(Number.isInteger(level))){
        window.alert("レベル：整数を入力してください");
        document.getElementById("input-level").value = 1;
    } else if (!(Number.isInteger(cc))){
        window.alert("クラスチェンジ：整数を入力してください");
        document.getElementById("input-cc").value = 0;
    }
}
function printHI(){
    console.log("hi");
}
//conditions and references//
function selfConditionChange(index,value){
    selfConditions[index] = Number(value);
}
function selfReferenceChange(index,value){
    selfReference[index] = Number(value);
}
function isBlock(value){
    if (value == 0){ //because this is string
        selfConditions["1"] = 0;
        selfConditions["21"] = 0;
        enemyConditions["1"] = 0;
        enemyConditions["21"] = 0;
    } else {
        selfConditions["1"] = 1;
        selfConditions["21"] = 1;
        enemyConditions["1"] = 1;
        enemyConditions["21"] = 1;
    }
    selfConditions["2013"] = Number(value);
    enemyConditions["2013"] = Number(value); //as of now enemy no have//
}
function attackTargetCount(valueRange){ //as of now enemy no have//
    selfConditions["2012"] = Number(valueRange);
    enemyConditions["2012"] = Number(valueRange);
}
function isMove(checked){ //as of now enemy no move//
    if (checked) {selfConditions["2"] = 1;enemyConditions["2"] = 1;}
    else {selfConditions["2"] = 0;enemyConditions["2"] = 0;}
}
function isClassAct(checked){ //as of now enemy no act gauge//
    if (checked) {selfConditions["34"] = 1;enemyConditions["34"] = 1;}
    else {selfConditions["34"] = 0;enemyConditions["34"] = 0;}
}
function isUniqueWeaponEquipped(checked){ //as of now enemy no uw//
    if (checked) {selfConditions["80000"] = 1;enemyConditions["80000"] = 1;}
    else {selfConditions["80000"] = 0;enemyConditions["80000"] = 0;}
}
function isSameAttributeTarget(checked){
    if (checked) {selfConditions["22"] = 1;}
    else {selfConditions["22"] = 0;}
}
function isDungeon(checked){
    if (checked) {selfConditions["3003"] = 1;}
    else {selfConditions["3003"] = 0;}
}
function attributeTile(){
    if (document.getElementById("shared20001-1").checked) {
        selfConditions["1010"][0] = Number(document.getElementById("shared20001-2").value);
        enemyConditions["1010"][0] = Number(document.getElementById("shared20001-2").value);
    }
    else {selfConditions["1010"][0] = 0;enemyConditions["1010"][0] = 0;}
}
function giveAttributeTile(menuBattleSkill){
    selfConditions["1010"].splice(1);
    enemyConditions["1010"].splice(1);
    //summer maggie's give water tile
    if (document.getElementById("otherPassive10272-1").checked) {
        selfConditions["1010"].push(3);
        enemyConditions["1010"].push(3);
    }
    //igni's give fire tile
    if (masterValues.charaID !== 10209 && document.getElementById("otherPassive10209-2").checked) {
        selfConditions["1010"].push(2);
        enemyConditions["1010"].push(2);
    } else if (masterValues.charaID === 10209 && menuBattleSkill === "skill"){
        selfConditions["1010"].push(2);
        enemyConditions["1010"].push(2);
    }
    //yuyle's earth tile giving water tile
    if (masterValues.charaID === 10033 && document.getElementById("shared20001-1").checked && document.getElementById("shared20001-2").value == "7"){
        selfConditions["1010"].push(3);
        enemyConditions["1010"].push(3);
    }
    //mikuma's earth tile on kenki
    if (masterValues.charaID === 10223 && document.getElementById("class-act-check").checked){
        selfConditions["1010"].push(7);
        enemyConditions["1010"].push(7);
    }
    //other give tile in future goes here 
    ///console.log(selfConditions["1010"]);
}
function skillNumber(value){
    if (value == 10000){
        selfConditions["1009"] = 1;
        enemyConditions["1009"] = 1; //because enemy no skill
    } else if (value == 0){
        selfConditions["1009"] = 2;
        enemyConditions["1009"] = 2;
    }
}
//
function enemyConditionChange(index,value){
    enemyConditions[index] = Number(value);
}
function enemyStun(checked){
    if (checked) {enemyConditions["23"] = 1;}
    else {enemyConditions["23"] = 0;}
}
function enemyPetrify(checked){
    if (checked) {enemyConditions["24"] = 1;}
    else {enemyConditions["24"] = 0;}
}
function enemyPoison(checked){
    if (checked) {enemyConditions["25"] = 1;}
    else {enemyConditions["25"] = 0;}
}
function enemyFrozen(checked){
    if (checked) {enemyConditions["33"] = 1;}
    else {enemyConditions["33"] = 0;}
}
function enemyCurse(checked){
    if (checked) {enemyConditions["37"] = 1;}
    else {enemyConditions["37"] = 0;}
}
function enemyFlying(checked){
    if (checked) {enemyConditions["5"] = 1;selfConditions["5"] = 1;}
    else {enemyConditions["5"] = 0;selfConditions["5"] = 0;}
}
function enemyGround(checked){
    if (checked) {enemyConditions["6"] = 1;selfConditions["6"] = 1;}
    else {enemyConditions["6"] = 0;selfConditions["6"] = 0;}
}
function enemyHuman(checked){
    if (checked) {enemyConditions["1004"] = 60000;}
    else {enemyConditions["1004"] = 0;}
}
// ↑ conditions ↑ //
function updateSummonType(){
    let cc = Number(document.getElementById("input-cc").value);
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    if (masterValues.charaID === 10090){return 3;}
    return job["summonType"];
}
function selfConditionUpdate(){
    let cc = Number(document.getElementById("input-cc").value);
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    /* let this exclusively be for enemies
    if (masterValues.unitcard["moveAction"] == 5){
        selfConditions["5"] = 1;
    } else {selfConditions["6"] = 1;}
    */
    //selfConditions - 21?
    //selfConditions - 22?
    if (masterValues.charaAwaked){
        selfConditions["26"] = 1; 
        enemyConditions["26"] = 1;//because enemy cannot be awaked, solves tantal etc problem//
    } else {selfConditions["26"] = 0;enemyConditions["26"] = 0;}
    selfConditions["1002"] = masterValues.unitcard["element"];
    selfConditions["1003"] = masterValues.unitcard["rarityId"];
    selfConditions["1004"] = masterValues.unitcard["mainTribe"];
    selfConditions["1005"] = masterValues.unitcard["gender"];
    selfConditions["1006"] = job["system_id"];
    selfConditions["1007"] = masterValues.baseClass+cc;
    selfConditions["1008"] = masterValues.unitcard["id"];
    
    //selfConditions - 15?
}
function equipImageChange(){
    let cc = Number(document.getElementById("input-cc").value) + 1;
    let weapon = document.getElementById("equipweapon");
    let head = document.getElementById("equiphead");
    let body = document.getElementById("equipbody");
    let accessory = document.getElementById("equipaccessory");
    let weaponabbr = document.getElementById("equipweaponabbr");
    let headabbr = document.getElementById("equipheadabbr");
    let bodyabbr = document.getElementById("equipbodyabbr");
    let accessoryabbr = document.getElementById("equipaccessoryabbr");
    if (cc == 5){
        weapon.src = "../../img/equipment-icons/9999.png";
        head.src = "../../img/equipment-icons/9999.png";
        accessory.src = "../../img/equipment-icons/9999.png";
        body.src = "../../img/equipment-icons/9999.png";
        weaponabbr.title = "近日公開";
        headabbr.title = "近日公開";
        bodyabbr.title = "近日公開";
        accessoryabbr.title = "近日公開";
    } else {
        weapon.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][0]+cc.toString()+".png";
        head.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][1]+cc.toString()+".png";
        accessory.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][2]+cc.toString()+".png";
        body.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][3]+cc.toString()+".png";
        weaponabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][0];
        headabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][1];
        bodyabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][3];
        accessoryabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][2];
    }
}
function enemyReminder(){
    let bl = Number(document.getElementById("input-number-blocked").value);
    let rng = Number(document.getElementById("input-number-inRange").value);
    let rmd1 = document.getElementById("enemy-remind1");
    let rmd2 = document.getElementById("enemy-remind2");
    let rmd3 = document.getElementById("enemy-remind3");
    if (bl === 0 && rng === 0){
        //console.log("both zero");
        if (masterValues.language === "ja"){
            rmd1.innerHTML = "敵数が0です(敵ユニット > ブロックしている敵/範囲内にいる敵)";
            rmd2.innerHTML = "敵数が0です(敵ユニット > ブロックしている敵/範囲内にいる敵)";
            rmd3.innerHTML = "敵数が0です(敵ユニット > ブロックしている敵/範囲内にいる敵)";
        } else if (masterValues.language === "en"){
            rmd1.innerHTML = "Number of enemies is 0 (Enemy > Blocked/In range)";
            rmd2.innerHTML = "Number of enemies is 0 (Enemy > Blocked/In range)";
            rmd3.innerHTML = "Number of enemies is 0 (Enemy > Blocked/In range)";
        }
    } else {
        //console.log("at least one non zero");
        rmd1.innerHTML = "";
        rmd2.innerHTML = "";
        rmd3.innerHTML = "";
    }
}

function toggleChara(includeID,includeType){
    let tdElem = document.getElementById("compare-"+includeID);
    let includeList = document.getElementById("included-"+includeType);
    if (tdElem.classList.contains("included")){
        tdElem.className = tdElem.className.replace(" included","");
    } else {tdElem.className += " included";}
    if (includeList.value.includes(includeID.toString())){
        includeList.value = includeList.value.replace(","+includeID.toString(),"");
    } else {includeList.value += ","+includeID.toString();}
}

function arrayUnion(arrayOfarrays){return Array.from(new Set([arrayOfarrays].flat(2)));}
function arrayIntersect(arrayOfarrays){return arrayOfarrays.reduce((a, b) => a.filter(c => b.includes(c)));}

function compareChara(){
    //creating the allIncluded array//
    let allIncluded;
    let includeList = [];
    let includeRarity = [];
    let includeAttribute = [];
    let includeClass = [];
    let includeRarityText = document.getElementById("included-rarity").value.split(",");
    let includeAttributeText = document.getElementById("included-attribute").value.split(",");
    let includeClassText = document.getElementById("included-class").value.split(",");
    includeRarityText.splice(0,1);includeAttributeText.splice(0,1);includeClassText.splice(0,1);
    for (let text in includeRarityText) {includeRarity.push(window[includeRarityText[text]]);includeList.push(window[includeRarityText[text]]);}
    for (let text in includeAttributeText) {includeAttribute.push(window[includeAttributeText[text]]);includeList.push(window[includeAttributeText[text]]);}
    for (let text in includeClassText) {includeClass.push(window[includeClassText[text]]);includeList.push(window[includeClassText[text]]);}
    //to think about -- search "intersection of multiple arrays"//
    if (document.getElementById("compChara-AND").checked){
        includeList.sort(function(a,b){return a.length - b.length;});
        ///console.log("includelist",includeList);
        allIncluded = arrayIntersect(includeList);
    } else {
        includeList.sort(function(a,b){return a.length - b.length;});
        includeRarity.sort(function(a,b){return a.length - b.length;});
        includeAttribute.sort(function(a,b){return a.length - b.length;});
        includeClass.sort(function(a,b){return a.length - b.length;});
        if (includeRarity.length===0){includeRarity=includeList;}
        if (includeAttribute.length===0){includeAttribute=includeList;}
        if (includeClass.length===0){includeClass=includeList;}
        ///console.log("includelist",includeList);
        ///console.log("includeRarity",includeRarity);
        ///console.log("includeAttribute",includeAttribute);
        ///console.log("includeClass",includeClass);
        allIncluded = arrayIntersect([arrayUnion(includeRarity),arrayUnion(includeAttribute),arrayUnion(includeClass)]);
    }
    console.log("allIncluded",allIncluded);
    //using the allIncluded array to cycle//
    let dpsRanking = [];
    let ex2List = [10001,10004,10006,10008,10012,10014,10017,10019,10020,10022,10023,10024,10025,10026,10028,10029,10030,10031,10032,10035,10037,10038,10039,10040,10041,10044,10046,10047,10049,10050,10055,10058,10060,10063,10064,10065,10068,10078,10079,10085,10088,10089,10090,10091,10093,10094,10100,10147,10173];
    let exChangeList = [10088,10106,10126,10211,10214,10237];
    let exChangeRefr = [[0,4],[4],[3],[2],[4],[4]];
    let sortMethod = Number(document.getElementById("compChara-type-select").value);
    //preliminary adjustments
    document.getElementById("skill-change-select").value = "0";
    document.getElementById("skill-alt-select").value = "10000";
    selfConditionChange('2002',0);//set attack delay to 0 (invalidates scimitar ability)
    for (let characterID of allIncluded){
        ///console.log(characterID);
        if (ex2List.includes(characterID) && exChangeList.includes(characterID)){//10088 only
            //normal
            setForCompare(characterID);
            talenttext();
            let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"];
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            //cycle change, normal
            let changeIndex = exChangeList.indexOf(characterID);
            for (let i=0;i<exChangeRefr[changeIndex][0];i++){
                document.getElementById("skill-change-select").value = (200000 + 1000 * i).toString();
                setForCompare(characterID);
                talenttext();
                let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"]+"&nbsp;(変化"+(1+i).toString()+")";
                dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            }
            document.getElementById("skill-change-select").value = "0";//set back to normal
            //ex2
            document.getElementById("skill-alt-select").value = "0";
            setForCompare(characterID);
            talenttext();
            unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"]+"&nbsp;(EXスキルII)";
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            //cycle change, ex2
            for (let i=0;i<exChangeRefr[changeIndex][1];i++){
                document.getElementById("skill-change-select").value = (200000 + 1000 * i).toString();
                setForCompare(characterID);
                talenttext();
                let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"]+"&nbsp;(EXスキルII、変化"+(1+i).toString()+")";
                dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            }
            //set back to normal
            document.getElementById("skill-change-select").value = "0";
            document.getElementById("skill-alt-select").value = "10000";
        } else if (exChangeList.includes(characterID)){//10106 and 10126
            //normal
            setForCompare(characterID);
            talenttext();
            let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"];
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            //cycle change
            let changeIndex = exChangeList.indexOf(characterID);
            for (let i=0;i<exChangeRefr[changeIndex];i++){
                document.getElementById("skill-change-select").value = (200000 + 1000 * i).toString();
                setForCompare(characterID);
                talenttext();
                let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"]+"&nbsp;(変化"+(1+i).toString()+")";
                dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            }
            //set back to normal
            document.getElementById("skill-change-select").value = "0";
        } else if (ex2List.includes(characterID)){//all the ex2
            //normal
            setForCompare(characterID);
            talenttext();
            let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"];
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            //ex2
            document.getElementById("skill-alt-select").value = "0";
            setForCompare(characterID);
            talenttext();
            unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"]+"&nbsp;(EXスキルII)";
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
            //set back to normal
            document.getElementById("skill-alt-select").value = "10000";
        } else {//everything else
            setForCompare(characterID);
            talenttext();
            let unitname = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"];
            dpsRanking.push([characterID,unitname,Number(allDPS()[sortMethod].toFixed(3))]);
        }
    }
    dpsRanking.sort(function(a,b){return b[2] - a[2];});
    ///console.log(dpsRanking);
    for (let k=0;k<30;k++){ //clearing rank
        document.getElementById("compChara-"+(k+1)+"-name").innerHTML = "";
        document.getElementById("compChara-"+(k+1)+"-img").src = "../../img/chara-icons/icon_10000_0_s.png";
        document.getElementById("compChara-"+(k+1)+"-dps").innerHTML = "";
    }
    for (let k=0;k<30;k++){ //filling rank
        try {
            let compName = dpsRanking[k][1];
            let compImg = "../../img/chara-icons/icon_"+dpsRanking[k][0].toString()+"_0_s.png";
            let compDps = dpsRanking[k][2];
            if (compDps === undefined){
                document.getElementById("compChara-"+(k+1)+"-name").innerHTML = "";
                document.getElementById("compChara-"+(k+1)+"-img").src = "../../img/chara-icons/icon_10000_0_s.png";
                document.getElementById("compChara-"+(k+1)+"-dps").innerHTML = "";
                continue;
            }
            document.getElementById("compChara-"+(k+1)+"-name").innerHTML = compName;
            document.getElementById("compChara-"+(k+1)+"-img").src = compImg;
            document.getElementById("compChara-"+(k+1)+"-dps").innerHTML = compDps;
        } catch (err) {
            //console.log("No more charas!")
        }
    }
    //revert to normal//
    masterValues["charaID"] = Number(params.get("id"));
    masterValues["unitcard"] = window["card"+params.get("id")];
    masterValues["charaAwaked"] = (params.get("awaked")==="true");
    masterValues["baseClass"] = masterValues.unitcard["classId"];
    talenttext();
    allDPS();
    document.getElementById("skill-change-select").value = "0";
    document.getElementById("skill-alt-select").value = "10000";
    document.getElementById("skill-error").innerHTML = "";
}

function setForCompare(ID){
    masterValues["charaID"] = ID;
    masterValues["unitcard"] = window["card"+masterValues.charaID];
    masterValues["baseClass"] = masterValues.unitcard["classId"];
    if (document.getElementById("make-same-attribute").value === "make"){
        makeSameAttribute();
        attributeTile();
    }
}

function createChart(){
    let chartCanvas = document.getElementById("dpsChart");
    let chartStatus = Chart.getChart("dpsChart");
    if (chartStatus != undefined) {chartStatus.destroy();}
    let enemyPDefElem = document.getElementById("input-enemy-stat3");
    let enemyMDefElem = document.getElementById("input-enemy-stat4");
    enemyPDefElem.value=0;enemyMDefElem.value=0;
    let enemyDefSelect = document.getElementById("enemy-def-select").value;
    const xValues = [0,100,200,300,400,500,600,700,800,900,1000,1250,1500,1750,2000,2500,3000,4000,5000];
    let offskillArray = [];
    let skillArray = [];
    let overallArray = [];
    let labels = ["DPSグラフ","非スキル","スキル","総合"];
    if (masterValues.language === "en"){labels = ["DPS Graph","Off-skill","Skill","Overall"];}
    //Start processing
    if(enemyDefSelect === "0"){
        for (item in xValues){
            enemyPDefElem.value = xValues[item];
            let dpsOut = allDPS();
            offskillArray.push(dpsOut[0]);
            skillArray.push(dpsOut[1]);
            overallArray.push(dpsOut[2]);
        }
    } else if(enemyDefSelect === "1"){
        for (item in xValues){
            enemyMDefElem.value = xValues[item];
            let dpsOut = allDPS();
            offskillArray.push(dpsOut[0]);
            skillArray.push(dpsOut[1]);
            overallArray.push(dpsOut[2]);
        }
    } else if(enemyDefSelect === "2"){
        for (item in xValues){
            enemyPDefElem.value = xValues[item];
            enemyMDefElem.value = xValues[item];
            let dpsOut = allDPS();
            offskillArray.push(dpsOut[0]);
            skillArray.push(dpsOut[1]);
            overallArray.push(dpsOut[2]);
        }
    } else {}
    enemyPDefElem.value = 0;
    enemyMDefElem.value = 0;
    allDPS();
    const data = {
        labels: xValues,
        datasets: [{ 
          data: offskillArray,
          borderColor: "#77ddff",
          fill: false,
          label: labels[1],
        }, { 
          data: skillArray,
          borderColor: "#ff7373",
          fill: false,
          label: labels[2],
        }, { 
          data: overallArray,
          borderColor: "#bb66ff",
          fill: false,
          label: labels[3],
        }]
    }
    const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: labels[0]
            }
          }
        },
      };
    new Chart(chartCanvas, config);
}

function toggleExclude(excludeID){
    let tdElem = document.getElementById("exsub-"+excludeID.toString());
    let excludeList = document.getElementById("excluded-subskills");
    if (tdElem.classList.contains("excluded")){
        tdElem.className = tdElem.className.replace(" excluded","");
    } else {tdElem.className += " excluded";}
    if (excludeList.value.includes(excludeID.toString())){
        excludeList.value = excludeList.value.replace(","+excludeID.toString(),"");
    } else {excludeList.value += ","+excludeID.toString();}
}
function subskillLoadOrder(number){
    loadToggle(true);
    setTimeout(optimiseSubskill,100,number,1);
    setTimeout(loadToggle,100,false);
}
function optimiseSubskill(number,battleSkillFinal){
    //number is number of subskills to optimise
    //battleSkillFinal is which value to optimise
    let sortMethod = Number(document.getElementById("optimise-type-select").value);
    let collection = [];
    let lastSubskillID = 1183;
    let excludedSubskills = document.getElementById("excluded-subskills").value.split(",");
    let noOfSubskills = lastSubskillID - 1000 - excludedSubskills.length;
    //console.log("no of subskills is",noOfSubskills);
    if (number === 1){
        for (let i=1001;i<lastSubskillID+1;i++){
            if (excludedSubskills.includes(i.toString())) {continue;}
            //console.log(i);
            collection.push([i,0,allDPS(i)[sortMethod]]);
        }
        document.getElementById("subskill1").value = "0";
    } else if (number === 2){
        for (let i=1001;i<lastSubskillID+1;i++){
            if (excludedSubskills.includes(i.toString())) {continue;}
            for (let j=1001;j<lastSubskillID+1;j++){
                if (excludedSubskills.includes(j.toString())||i>=j) {continue;}
                //console.log(i,j);
                collection.push([i,j,allDPS(i,j)[sortMethod]]);
            }
        }
        document.getElementById("subskill1").value = "0";
        document.getElementById("subskill2").value = "0";
        document.getElementById("subskill1condcheck").innerHTML = "";
        document.getElementById("subskill2condcheck").innerHTML = "";
    }
    collection.sort(function(a,b){return b[2] - a[2];});
    for (let k=0;k<30;k++){ //clearing rank
        document.getElementById("optimise-"+(k+1)+"-1").innerHTML = "";
        document.getElementById("optimise-"+(k+1)+"-2").innerHTML = "";
        document.getElementById("optimise-dps-"+(k+1)).innerHTML = "";
    }
    for (let k=0;k<30;k++){ //filling rank
        let optSubID1 = collection[k][0];
        let optSubID2 = collection[k][1];
        if (optSubID1 === undefined || optSubID2 === undefined){
            document.getElementById("optimise-"+(k+1)+"-1").innerHTML = "";
            document.getElementById("optimise-"+(k+1)+"-2").innerHTML = "";
            document.getElementById("optimise-dps-"+(k+1)).innerHTML = "";
            continue;
        }
        if (optSubID2 === 0){optSubID2=Number(document.getElementById("subskill2").value);}
        let optSubskillText1 = attachOptions[attachOptions.findIndex(object => {return object.value === (optSubID1)})]["text"];
        let optSubskillText2 = attachOptions[attachOptions.findIndex(object => {return object.value === (optSubID2)})]["text"];
        document.getElementById("optimise-"+(k+1)+"-1").innerHTML = optSubskillText1;
        document.getElementById("optimise-"+(k+1)+"-2").innerHTML = optSubskillText2;
        document.getElementById("optimise-dps-"+(k+1)).innerHTML = collection[k][2].toFixed(2);
    }
}
function loadToggle(onOffsetting){
    let loadScreen = document.getElementById("loading-fade");
    let charaselect = document.getElementById("chara-selection");
    let mainScreen = document.getElementById("main-display");
    if (onOffsetting){loadScreen.style.display = "block";mainScreen.style.display = "none";charaselect.style.display = "none";}
    else {loadScreen.style.display = "none";mainScreen.style.display = "flex";charaselect.style.display = "block";}
}

function allDPS(slot1=-1,slot2=-1){
    if (slot1 !== -1){document.getElementById("subskill1").value = slot1;}
    if (slot2 !== -1){document.getElementById("subskill2").value = slot2;}
    //console.log("selfCond1",selfConditions["1"]);
    //console.log("selfCond2",selfConditions["2"]);
    testLevelCC();
    var level = Number(document.getElementById("input-level").value);
    var cc = Number(document.getElementById("input-cc").value);
    selfConditions["1007"] = masterValues.baseClass+cc; //for attack pattern//
    calculateStat(level,cc,"stat1");
    calculateStat(level,cc,"stat2");
    calculateStat(level,cc,"stat3");
    calculateStat(level,cc,"stat4");
    calculateStat(level,cc,"stat5");
    calculateStat(level,cc,"stat6");
    calculateStat(level,cc,"stat7");
    calculateStat(level,cc,"stat8");
    calculateStat(level,cc,"stat9");
    calculateStat(level,cc,"stat10");
    calculateStat(level,cc,"stat11");
    calculateStat(level,cc,"stat21");
    calculateStat(level,cc,"stat22");
    calculateStat(level,cc,"stat76");
    calculateStat(level,cc,"stat86");
    calculateStat(level,cc,"stat193");
    calculateStat(level,cc,"stat194");
    //191 and 192 must come after 193 and 194 because it reads their values//
    calculateStat(level,cc,"stat191");
    calculateStat(level,cc,"stat192");
    //19 must come after 22 because it reads 22 value//
    //right now battle doesn't need because same type//
    calculateStat(level,cc,"stat19");
    if ([10016,10101,10112,10118,10160,10196,10230,10235,10287].includes(masterValues.charaID)){
        //repeat because stat2 depends on stat3 (skill or no skill, place here)
        //stat1 dependent here too (10016,10196,10230)
        calculateStat(level,cc,"stat2");
    }
    if ([10041,10079].includes(masterValues.charaID)){
        //double dependent stats
        calculateStat(level,cc,"stat2");
        calculateStat(level,cc,"stat3");
    }
    //statcalc over//
    /* exclude until can reliably determine
    let extraAffectDamage = document.getElementById("input-number-extraAffectDamage");
    if ((masterValues.baseClass + cc) === 11022){
        console.log("lancer cc1");
        extraAffectDamage.value = "50";
    } else if ((masterValues.baseClass + cc) === 11023){
        console.log("lancer cc2");
        extraAffectDamage.value = "70";
    } else {extraAffectDamage.value = "100";}
    */
    //henshinPattern
    let henshinReference = masterValues.charaID - Number(document.getElementById("skill-alt-select").value);
    henshinCheck = henshin_patterns[henshinReference];
    if (henshinCheck === undefined) {henshinReference = 0;}
    let henshinTime = Math.floor(Number(henshin_patterns[henshinReference])/Number(document.getElementById("dps-output-skill-value-stat6").innerHTML));
    if (masterValues.language === "ja"){
        document.getElementById("dps-all-henshinDuration").innerHTML = (henshinTime/30).toFixed(2)+"秒";
    } else if (masterValues.language === "en"){
        document.getElementById("dps-all-henshinDuration").innerHTML = (henshinTime/30).toFixed(2)+"秒";
    }
    //attackPattern
    let attackPatternReference = masterValues.charaID - Number(document.getElementById("skill-alt-select").value);
    if (masterValues.charaAwaked){
        attackPatternReference = attackPatternReference.toString() + "a";
    } else {attackPatternReference = attackPatternReference.toString();}
    //as of now, no skill warrants the use of this ↓ better stay that way
    //+ Number(document.getElementById("skill-change-select").value);
    try {
        let battleAttackTypes = getAttackTypeList("battle",attackPatternReference);
    } catch (err) {
        attackPatternReference = attackPatternReference.split("a")[0];
    }
    let battleAttackTypes = getAttackTypeList("battle",attackPatternReference);
    updateAttackTypes(battleAttackTypes,false);
    let skillAttackTypes = getAttackTypeList("skill",attackPatternReference);
    updateAttackTypes(skillAttackTypes,true);
    //vorpal beast lapinus on-crit//
    let onCritBattle = 100;
    let onCritSkill = 100;
    if (masterValues.charaID===10302){
        onCritSkill = 300;
    }
    //new crit list//
    let battleCritList = [{"probability":Number(document.getElementById("dps-output-battle-value-stat191").innerHTML),"damage":onCritBattle*Number(document.getElementById("dps-output-battle-value-stat192").innerHTML)/100}];
    let skillCritList = [{"probability":Number(document.getElementById("dps-output-skill-value-stat191").innerHTML),"damage":onCritSkill*Number(document.getElementById("dps-output-skill-value-stat192").innerHTML)/100}];
    //legacy crit buff//
    //let battleCritList = attack_patterns[attackPatternReference]["critical"];
    //let skillCritList = attack_patterns[attackPatternReference]["skill_critical"];
    let battlePenList = attack_patterns[attackPatternReference]["penetration"];
    let skillPenList = attack_patterns[attackPatternReference]["skill_penetration"];
    //new crit buff//
    let BCL = 1;
    let SCL = 1;
    //legacy crit buff//
    //let BCL = attack_patterns[attackPatternReference]["BCL"];
    //let SCL = attack_patterns[attackPatternReference]["SCL"];
    let BPL = attack_patterns[attackPatternReference]["BPL"];
    let SPL = attack_patterns[attackPatternReference]["SPL"];
    //somehow need to do this twice so ???//
    for (let i=0;i<(battleCritList.length-BCL);i++){battleCritList.pop();}
    for (let i=0;i<(skillCritList.length-SCL);i++){skillCritList.pop();}
    for (let i=0;i<(battlePenList.length-BPL);i++){battlePenList.pop();}
    for (let i=0;i<(skillPenList.length-SPL);i++){skillPenList.pop();}
    for (let i=0;i<(battleCritList.length-BCL);i++){battleCritList.pop();}
    for (let i=0;i<(skillCritList.length-SCL);i++){skillCritList.pop();}
    for (let i=0;i<(battlePenList.length-BPL);i++){battlePenList.pop();}
    for (let i=0;i<(skillPenList.length-SPL);i++){skillPenList.pop();}
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 && subskillID_2 == -1){
        //console.log("Both suskills are 'None'");
    } else if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'");
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            //let crit = subskillGetCrit(subskillID_2);
            let pen = subskillGetPen(subskillID_2);
            //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
            if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            //let crit = subskillGetCrit(subskillID_1);
            let pen = subskillGetPen(subskillID_1);
            //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
            if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
        } else {
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill");
        if (subskillID_1 >= subskillID_2){
            //let crit = subskillGetCrit(subskillID_1);
            let pen = subskillGetPen(subskillID_1);
            //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
            if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
        } else {
            //let crit = subskillGetCrit(subskillID_2);
            let pen = subskillGetPen(subskillID_2);
            //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
            if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
        }
    } else {
        //console.log("Different kind of subskill");
        //let crit = subskillGetCrit(subskillID_1);
        let pen = subskillGetPen(subskillID_1);
        //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
        if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
        //crit = subskillGetCrit(subskillID_2);
        pen = subskillGetPen(subskillID_2);
        //if (crit !== undefined){battleCritList.push(crit);skillCritList.push(crit);}
        if (pen !== undefined){battlePenList.push(pen);skillPenList.push(pen);}
    }
    /*usuko's crit buff
    if (document.getElementById("otherPassive10185-2").value == "none") {}
    else if (document.getElementById("otherPassive10185-2").value == "deploy"){
        if (document.getElementById("otherPassive10185-1").checked){
            battleCritList.push({"probability":32,"damage":150});skillCritList.push({"probability":32,"damage":150});
        } else {
            battleCritList.push({"probability":25,"damage":150});skillCritList.push({"probability":25,"damage":150});
        }
    }
    else if (document.getElementById("otherPassive10185-2").value == "skill"){
        if (document.getElementById("otherPassive10185-1").checked){
            battleCritList.push({"probability":64,"damage":150});skillCritList.push({"probability":64,"damage":150});
        } else {
            battleCritList.push({"probability":50,"damage":150});skillCritList.push({"probability":50,"damage":150});
        }
    }*/
    ///console.log(battleCritList,battlePenList);
    ///console.log(skillCritList,skillPenList);
    updateCritPen(battleCritList,battlePenList,false);
    updateCritPen(skillCritList,skillPenList,true);
    let battleAvgDmg = calculateAvgDmg("battle");
    let skillAvgDmg = calculateAvgDmg("skill");
    let battleHitFrameList = calculateAvgHitFrame("battle");
    let skillHitFrameList = calculateAvgHitFrame("skill");
    let battleFinalDPS = Number(battleAvgDmg) * Number(battleHitFrameList[0]) * 30 / Number(battleHitFrameList[1]);
    let skillFinalDPS = Number(skillAvgDmg) * Number(skillHitFrameList[0]) * 30 / Number(skillHitFrameList[1]);
    //continuous here//
    let continuousCheck,AAcheck;
    let continuousReference = masterValues.charaID - Number(document.getElementById("skill-alt-select").value);
    let AAReference = masterValues.charaID - Number(document.getElementById("skill-alt-select").value);
    if (masterValues.charaAwaked){
        continuousReference = continuousReference.toString() + "a";
        AAReference = AAReference.toString() + "a";
    } else {continuousReference = continuousReference.toString();AAReference = AAReference.toString();}
    continuousReference += "-"+document.getElementById("skill-level-select").value.toString();
    AAReference += "-"+document.getElementById("skill-level-select").value.toString();
    //console.log(continuousReference);
    continuousCheck = continuous_patterns[continuousReference];
    if (continuousCheck === undefined) {continuousReference = continuousReference.split("-")[0];}
    AAcheck = additional_patterns[AAReference];
    if (AAcheck === undefined) {AAReference = AAReference.split("-")[0];}
    //console.log(continuousReference);
    continuousCheck = continuous_patterns[continuousReference];
    if (continuousCheck === undefined) {continuousReference = continuousReference.split("a")[0];}
    AAcheck = additional_patterns[AAReference];
    if (AAcheck === undefined) {AAReference = AAReference.split("a")[0];}
    //console.log(continuousReference);
    continuousCheck = continuous_patterns[continuousReference];
    if (continuousCheck === undefined) {continuousReference = 0;}
    AAcheck = additional_patterns[AAReference];
    if (AAcheck === undefined) {AAReference = 0;}
    //console.log(continuousReference);
    //
    //console.log("beforeContinuous",battleFinalDPS);
    //console.log("beforeContinuous",skillFinalDPS);
    let excludeContinuous = document.getElementById("exclude-continuous-damage").checked;
    let excludeAdditional = document.getElementById("exclude-additional-attack").checked;
    battleFinalDPS += getContinuousDamage("battle",continuousReference,excludeContinuous);
    skillFinalDPS += getContinuousDamage("skill",continuousReference,excludeContinuous);
    let continuousWhenStun = getContinuousDamage("battle",continuousReference,excludeContinuous,true);//true for stunCheck
    battleFinalDPS += getAdditionalAttackDamage("battle",AAReference,excludeAdditional);
    skillFinalDPS += getAdditionalAttackDamage("skill",AAReference,excludeAdditional);
    battleFinalDPS += getAdditionalAttackDamage2("battle",AAReference,excludeAdditional);
    skillFinalDPS += getAdditionalAttackDamage2("skill",AAReference,excludeAdditional);
    //console.log("afterContinuous",battleFinalDPS);
    //console.log("beforeContinuous",skillFinalDPS);
    //
    document.getElementById("dps-battle-finalDPS").innerHTML = battleFinalDPS.toFixed(2);
    document.getElementById("dps-skill-finalDPS").innerHTML = skillFinalDPS.toFixed(2);
    //continuous end
    let finalDPS = overallCooldownDuration(subskillID_1,subskillID_2,battleFinalDPS,skillFinalDPS,continuousWhenStun,henshinTime);
    //reminder for enemy input//
    enemyReminder()
    ///console.log([battleFinalDPS,skillFinalDPS,finalDPS]);
    return [battleFinalDPS,skillFinalDPS,finalDPS];
}

function overallCooldownDuration(subskillID_1,subskillID_2,battleFinalDPS,skillFinalDPS,continuousWhenStun,henshinTime){
    let skillaltnumber = Number(document.getElementById("skill-alt-select").value);
    let skillchangenumber = Number(document.getElementById("skill-change-select").value);
    let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
    //console.log("skillReference: ",masterValues.charaID-skillaltnumber+skillchangenumber+skillOCnumber);
    let skillObject = skill_data["table"][skill_data["table"].findIndex(object => {return object.id === (masterValues.charaID-skillaltnumber+skillchangenumber)})];
    let minDuration = skillObject["minDurationTime"];
    let maxDuration = skillObject["maxDurationTime"];
    let minCooldown = skillObject["minCoolTime"];
    let maxCooldown = skillObject["maxCoolTime"];
    let duration = Math.floor((minDuration + (maxDuration-minDuration)/4*(skilllevelnumber-1))/30);
    let cooldown = Math.floor((minCooldown + (maxCooldown-minCooldown)/4*(skilllevelnumber-1))/30);
    if (overchargeCharas.includes(masterValues.charaID)&&document.getElementById("overcharge-check").checked){
        cooldown = Math.floor(1.50001 * cooldown);
    }
    let initial = cooldown;
    let selfStun = selfStun_patterns[(masterValues.charaID-skillaltnumber+skillchangenumber).toString()];
    if (selfStun === undefined || document.getElementById("selfStun-invalid").checked){selfStun = 0;}
    //console.log(duration);
    //console.log(cooldown);
    //console.log(subskillID_1);
    //console.log(subskillID_2);
    //true-false variables//
    //↓if needed, this will be converted to lists like decrease1per1, decrease1per4 etc, count number of true//
    let fullHeart = selfConditions["2000"]===100 && (subskillID_1 === 58||subskillID_2 === 58);
    let mattari = selfConditions["1006"]!==8 && (subskillID_1 === 88||subskillID_2 === 88);
    let cooldown4per4 = (masterValues.charaID===10234);
    //console.log(cooldown4per4);
    let cooldown1per4 = ((masterValues.charaID===10066)&&document.getElementById("unique-equip-check").checked);
    let cooldown1per2 = ((masterValues.charaID===10015)&&selfConditions["2"]===1&&document.getElementById("unique-equip-check").checked)||(masterValues.charaID===10263&&selfConditions["1010"].includes(5));
    let cooldown1per1 = (masterValues.charaID===10198) && selfConditions["2"]===1;
    let cooldown2per1 = (masterValues.charaID===10147) && selfConditions["2"]===1;
    //duration manipulation//
    if (duration === 0){duration = Number(document.getElementById("dps-dps-skill-averageFrame").innerHTML)/30}
    //initial manipulation//
    if (selfConditions["1003"] === 82) {initial = Math.round(initial * 70 / 100);}
    else if (selfConditions["1003"] === 18514) {initial = Math.round(initial * 60 / 100);}
    else if (selfConditions["1003"] === 21330) {initial = Math.round(initial * 50 / 100);}
    else if (selfConditions["1003"] === 5460818) {initial = Math.round(initial * 30 / 100);}
    if (document.getElementById("divine30012").checked){initial = Math.round(initial * [80,79,78,77,75][document.getElementById("level30012").value-1] / 100);}
    else if (document.getElementById("divine30003").checked){initial = Math.round(initial * [90,89,88,87,85][document.getElementById("level30003").value-1] / 100);}
    //initial CD talent//
    for (let i = 3; i < 6; i++){
        if (document.getElementById("talent"+i.toString()+"check").checked) {
            if (document.getElementById("talent"+i.toString()).innerHTML.includes("スキル初回待ち時間")) {
                initial -= Number(document.getElementById("talent"+i.toString()).innerHTML.split("-")[1].split("秒")[0]); 
            }
        }
    }
    if (selfConditions["1007"]===11024||selfConditions["1007"]===11044){initial -= 3;}
    if (selfConditions["1007"]===11025||selfConditions["1007"]===11045){initial -= 5;}
    if (getAttachID("subskill1") === 128||getAttachID("subskill2") === 128){initial -= 4;}
    if (subskillID_1 === 71||subskillID_2 === 71){initial -= 10;}
    if ((masterValues.charaID===10030)&&document.getElementById("unique-equip-check").checked){initial-=20;}
    if ((masterValues.charaID===10254)&&masterValues.charaAwaked){initial-=10;}
    else if ((masterValues.charaID===10254)){initial-=8;}
    //division madness//
    if (fullHeart && mattari && cooldown2per1){
        initial = Math.floor(initial/17)*4 + Math.ceil((initial%17)/4);
    } else if (fullHeart && mattari && cooldown1per1){
        initial = Math.floor(initial/13)*4 + Math.ceil((initial%13)/3);
    } else if (fullHeart && mattari && cooldown1per2){
        initial = Math.floor(initial/11)*4 + Math.ceil((initial%11)/2.5);
    } else if (fullHeart && mattari && cooldown1per4){
        initial = Math.floor(initial/10)*4 + Math.ceil((initial%10)/2.33);
    } else if (fullHeart && mattari && cooldown4per4){
        initial = Math.floor(initial/13)*4 + Math.min(Math.ceil((initial%13)/2),4);
    } else if ((fullHeart||cooldown1per4) && (mattari||cooldown1per1)){
        initial = Math.floor(initial/9)*4 + Math.ceil((initial%9)/2);
    } else if (fullHeart && cooldown2per1){
        initial = Math.floor(initial/13)*4 + Math.ceil((initial%13)/3);
    } else if (fullHeart && cooldown1per2){
        initial = Math.floor(initial/7)*4 + Math.ceil((initial%7)/1.5);
    } else if (fullHeart && cooldown1per4){
        initial = Math.floor(initial/6)*4 + Math.ceil((initial%6)/1.33);
    } else if (fullHeart && cooldown4per4){
        initial = Math.floor(initial/9)*4 + Math.min(Math.ceil((initial%9)),4);
    } else if (fullHeart||cooldown1per4){
        initial = Math.floor(initial/5)*4 + Math.ceil(initial%5);
    } else if (mattari&&cooldown2per1){
        initial = Math.ceil(initial/4);
    } else if (mattari&&cooldown1per1){
        initial = Math.ceil(initial/3);
    } else if (mattari&&cooldown1per2){
        initial = Math.ceil(initial/2.5);
    } else if (mattari&&cooldown4per4){
        initial = Math.floor(initial/12)*4 + Math.min(Math.ceil((initial%12)/2),4);
    } else if (cooldown2per1){
        initial = Math.ceil(initial/3);
    } else if (mattari||cooldown1per1){
        initial = Math.ceil(initial/2);
    } else if (cooldown1per2){
        initial = Math.ceil(initial/1.5);
    } else if (cooldown4per4){
        initial = Math.floor(initial/8)*4 + Math.min(Math.ceil((initial%8)),4);
    } else {}
    if (initial < 0){initial = 0;}
    //console.log(initial);
    //cooldown manipulation//
    for (let i = 3; i < 6; i++){
        if (document.getElementById("talent"+i.toString()+"check").checked) {
            if (document.getElementById("talent"+i.toString()).innerHTML.includes("スキル再使用時間")) {
                cooldown -= Number(document.getElementById("talent"+i.toString()).innerHTML.split("-")[1].split("秒")[0]); 
            }
        }
    }
    //cooldown manipulation (subskill)//
    /*console.log(fullHeart);
    console.log(mattari);
    console.log(cooldown1per1);
    console.log(Math.floor(cooldown/13)*4 + Math.ceil((cooldown%13)/3));
    console.log(Math.floor(cooldown/9)*4 + Math.ceil((cooldown%9)/2));
    console.log(Math.floor(cooldown/5)*4 + Math.ceil(cooldown%5));*/
    //ticca
    if (true/*document.getElementById("shared20007-1").checked*/){
        cooldown -= 2*Number(document.getElementById("shared20007-2").value);
    }
    //rupupu&tantal
    if (document.getElementById("shared20006-1").checked && document.getElementById("shared20006-2").checked && (selfConditions["1006"]===2||selfConditions["1006"]===3||selfConditions["1006"]===7) && masterValues.charaID!==10248){
        cooldown -= 6;
    } else if (document.getElementById("shared20006-1").checked && (selfConditions["1006"]===2||selfConditions["1006"]===3||selfConditions["1006"]===7) && masterValues.charaID!==10248){
        cooldown -= 4;
    }
    //kazune
    if (document.getElementById("shared20004-1").checked && (selfConditions["1006"]===4||selfConditions["1006"]===5||selfConditions["1006"]===8) && masterValues.charaID!==10068){
        cooldown -= 7*Number(document.getElementById("shared20004-2").value);
    } else if ((selfConditions["1006"]===4||selfConditions["1006"]===5||selfConditions["1006"]===8) && masterValues.charaID!==10068){
        cooldown -= 10*Number(document.getElementById("shared20004-2").value);
    }
    //anishira
    if (true/*document.getElementById("shared20005-1").checked*/){
        cooldown -= 3*Number(document.getElementById("shared20005-2").value);
    }
    if (masterValues.charaID === 10100 && document.getElementById("skill-alt-select").value === "0"){
        cooldown -= 2*Number(document.getElementById("charaSpecific10100-1").value);
    }
    if (masterValues.charaID === 10154){
        cooldown -= 2*Number(document.getElementById("charaSpecific10154-1").value); 
    }
    if (masterValues.charaID === 10199){
        cooldown -= Number(document.getElementById("charaSpecific10199-1").value); 
    }
    if (getAttachID("subskill1") === 49 || getAttachID("subskill2") === 49){
        cooldown -= 3;
    }
    if (getAttachID("subskill1") === 128 || getAttachID("subskill2") === 128){
        cooldown -= 4;
    }
    //division madness//
    if (fullHeart && mattari && cooldown2per1){
        cooldown = Math.floor(cooldown/17)*4 + Math.ceil((cooldown%17)/4);
    } else if (fullHeart && mattari && cooldown1per1){
        cooldown = Math.floor(cooldown/13)*4 + Math.ceil((cooldown%13)/3);
    } else if (fullHeart && mattari && cooldown1per2){
        cooldown = Math.floor(cooldown/11)*4 + Math.ceil((cooldown%11)/2.5);
    } else if (fullHeart && mattari && cooldown1per4){
        cooldown = Math.floor(cooldown/10)*4 + Math.ceil((cooldown%10)/2.33);
    } else if (fullHeart && mattari && cooldown4per4){
        cooldown = Math.floor(cooldown/13)*4 + Math.min(Math.ceil((cooldown%13)/2),4);
    } else if ((fullHeart||cooldown1per4) && (mattari||cooldown1per1)){
        cooldown = Math.floor(cooldown/9)*4 + Math.ceil((cooldown%9)/2);
    } else if (fullHeart && cooldown2per1){
        cooldown = Math.floor(cooldown/13)*4 + Math.ceil((cooldown%13)/3);
    } else if (fullHeart && cooldown1per2){
        cooldown = Math.floor(cooldown/7)*4 + Math.ceil((cooldown%7)/1.5);
    } else if (fullHeart && cooldown1per4){
        cooldown = Math.floor(cooldown/6)*4 + Math.ceil((cooldown%6)/1.33);
    } else if (fullHeart && cooldown4per4){
        cooldown = Math.floor(cooldown/9)*4 + Math.min(Math.ceil((cooldown%9)),4);
    } else if (fullHeart||cooldown1per4){
        cooldown = Math.floor(cooldown/5)*4 + Math.ceil(cooldown%5);
    } else if (mattari&&cooldown2per1){
        cooldown = Math.ceil(cooldown/4);
    } else if (mattari&&cooldown1per1){
        cooldown = Math.ceil(cooldown/3);
    } else if (mattari&&cooldown1per2){
        cooldown = Math.ceil(cooldown/2.5);
    } else if (mattari&&cooldown4per4){
        cooldown = Math.floor(cooldown/12)*4 + Math.min(Math.ceil((cooldown%12)/2),4);
    } else if (cooldown2per1){
        cooldown = Math.ceil(cooldown/3);
    } else if (mattari||cooldown1per1){
        cooldown = Math.ceil(cooldown/2);
    } else if (cooldown1per2){
        cooldown = Math.ceil(cooldown/1.5);
    } else if (cooldown4per4){
        cooldown = Math.floor(cooldown/8)*4 + Math.min(Math.ceil((cooldown%8)),4);
    } else {}
    if (cooldown < 0) {cooldown = 0;}
    //final adjustment and display//
    if (duration === -1){
        if (masterValues.language === "ja"){
            document.getElementById("dps-all-skillDuration").innerHTML = "無限";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-all-skillDuration").innerHTML = "Infinite";
        }
    } else {
        if (masterValues.language === "ja"){
            document.getElementById("dps-all-skillDuration").innerHTML = duration.toFixed(2)+"秒";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-all-skillDuration").innerHTML = duration.toFixed(2)+"s";
        }
    }
    if (masterValues.language === "ja"){
        document.getElementById("dps-all-skillCooldown").innerHTML = cooldown.toFixed(2)+"秒";
        document.getElementById("dps-all-skillFirst").innerHTML = initial.toFixed(2)+"秒";
        document.getElementById("dps-all-skillSelfStun").innerHTML = selfStun.toFixed(2)+"秒";
    } else if (masterValues.language === "en"){
        document.getElementById("dps-all-skillCooldown").innerHTML = cooldown.toFixed(2)+"s";
        document.getElementById("dps-all-skillFirst").innerHTML = initial.toFixed(2)+"s";
        document.getElementById("dps-all-skillSelfStun").innerHTML = selfStun.toFixed(2)+"s";
    }
    document.getElementById("dps-all-battle").innerHTML = battleFinalDPS.toFixed(2);
    document.getElementById("dps-all-skill").innerHTML = skillFinalDPS.toFixed(2);
    let finalDPS = 0;
    if (duration === -1){
        finalDPS = skillFinalDPS;
    } else {
        finalDPS = (battleFinalDPS*(cooldown-selfStun) + skillFinalDPS*(duration-henshinTime/30) + continuousWhenStun*selfStun)/(cooldown+duration);
    }
    document.getElementById("dps-all-final").innerHTML = finalDPS.toFixed(2);
    return finalDPS;
}
/* as of now no need yet
function getFieldDamage(battleskill,fieldReference,exclude=false){
    if (exclude){console.log("continuous damage excluded!");return 0;}
    let dmgF,frameF;
    let targetF = Number(document.getElementById("input-number-inDamageField").value)+1;
}
*/
function getAdditionalAttackDamage(battleskill,AAReference,exclude=false,stunCheck=false){
    if (exclude){console.log("additional damage excluded!");return 0;}
    //console.log("startContinuous",battleskill,continuousReference);
    let dmgAA,frameAA;
    let targetAA = 0;
    //targets//
    let blockCount = Number(document.getElementById("input-number-blocked").value);
    let inRangeCount = Number(document.getElementById("input-number-inRange").value);
    let blockCountMax;
    if (battleskill === "battle"){
        blockCountMax = Number(document.getElementById("dps-output-battle-value-stat10").innerHTML);
    } else {
        blockCountMax = Number(document.getElementById("dps-output-skill-value-stat10").innerHTML);
    }
    if (blockCount > blockCountMax){blockCount = blockCountMax;}
    //
    let damageAdditional = additional_patterns[AAReference][battleskill];
    ///console.log(damageAdditional);
    let stunActiveAA = true;
    for (let indivAA of damageAdditional){
        //console.log(indivAA);
        document.getElementById("dps-dps-"+battleskill+"-hitTypeAA").innerHTML = indivAA["damage"]["hitType"];
        if (indivAA["cond"].length === 0){
            dmgAA = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivAA["damage"]["reference"]).innerHTML) * Number(indivAA["damage"]["multiplier"]) / 100);
            dmgAA = damageCalc(dmgAA,indivAA["damage"]["hitType"]);
            document.getElementById("dps-dps-"+battleskill+"-dmgAA").innerHTML = dmgAA;
            let targets = 0;
            if (indivAA["target"]==="block"){console.log("refBlock");targets = blockCount;targetAA = blockCount;}
            else if (indivAA["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetAA = blockCount+inRangeCount;}
            else if (indivAA["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
            else if (indivAA["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-AA").value;targetAA= document.getElementById("charaSpecific"+masterValues.charaID+"-AA").value;}
            document.getElementById("dps-dps-"+battleskill+"-targetAA").innerHTML = targets;
            if (indivAA["time"] === "attack"){frameAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
            else{frameAA = indivAA["time"];}
            document.getElementById("dps-dps-"+battleskill+"-frameAA").innerHTML = frameAA;
            if (stunCheck){stunActiveAA = false;}
            break;
        } else { //have condition list
            let allCondTrue = true;
            let condArray = indivAA["cond"];
            ///console.log(condArray);
            for (let i=0;i<condArray.length;i++){
                if (condArray[i][0] === "condition"){
                    // for now, put an OR option here, might need change if negative effects on ally buff themselves
                    if (conditionalOption(selfConditions[condArray[i][1]],condArray[i][2],condArray[i][3])||conditionalOption(enemyConditions[condArray[i][1]],condArray[i][2],condArray[i][3])){
                        ///console.log(condArray[i]," is true");
                    } else {
                        ///console.log(condArray[i]," made it false");
                        allCondTrue = false;
                    }
                } else {//reference
                    if (conditionalOption(selfReference[condArray[i][1]],condArray[i][2],condArray[i][3])){console.log(condArray[i]," is true");}
                    else {/*console.log(condArray[i]," made it false");*/allCondTrue = false;}
                }
            }
            if (allCondTrue){
                dmgAA = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivAA["damage"]["reference"]).innerHTML) * Number(indivAA["damage"]["multiplier"]) / 100);
                dmgAA = damageCalc(dmgAA,indivAA["damage"]["hitType"]);
                document.getElementById("dps-dps-"+battleskill+"-dmgAA").innerHTML = dmgAA;
                let targets = 0;
                if (indivAA["target"]==="block"){console.log("refBlock");targets = blockCount;targetAA = blockCount;}
                else if (indivAA["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetAA = blockCount+inRangeCount;}
                else if (indivAA["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
                else if (indivAA["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-AA").value;targetAA = document.getElementById("charaSpecific"+masterValues.charaID+"-AA").value;}
                document.getElementById("dps-dps-"+battleskill+"-targetAA").innerHTML = targets;
                if (indivAA["time"] === "attack"){frameAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
                else{frameAA = indivAA["time"];}
                document.getElementById("dps-dps-"+battleskill+"-frameAA").innerHTML = frameAA;
                if (stunCheck){stunActiveAA = false;}
                break;
            } else {
                document.getElementById("dps-dps-"+battleskill+"-dmgAA").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-targetAA").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-frameAA").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-hitTypeAA").innerHTML = "無し";
            }
        }
    }
    ///console.log(dmgAA,targetAA,frameAA);
    if (dmgAA === undefined||targetAA === undefined||frameAA === undefined||frameAA === 0){
        //console.log("return 0");
        return 0;
    } else if (!stunActiveAA){
        ///console.log("no additional when stun");
    }
    return Number(dmgAA)*Number(targetAA)*30/Number(frameAA);
}
function getAdditionalAttackDamage2(battleskill,AAReference,exclude=false,stunCheck=false){
    if (exclude){console.log("additional damage excluded!");return 0;}
    //console.log("startContinuous",battleskill,continuousReference);
    let dmgAA,frameAA;
    let targetAA = 0;
    //targets//
    let blockCount = Number(document.getElementById("input-number-blocked").value);
    let inRangeCount = Number(document.getElementById("input-number-inRange").value);
    let blockCountMax;
    if (battleskill === "battle"){
        blockCountMax = Number(document.getElementById("dps-output-battle-value-stat10").innerHTML);
    } else {
        blockCountMax = Number(document.getElementById("dps-output-skill-value-stat10").innerHTML);
    }
    if (blockCount > blockCountMax){blockCount = blockCountMax;}
    //
    let damageAdditional = additional_patterns_2[AAReference][battleskill];
    ///console.log(damageAdditional);
    let stunActiveAA = true;
    for (let indivAA of damageAdditional){
        //console.log(indivAA);
        document.getElementById("dps-dps-"+battleskill+"-hitTypeAA2").innerHTML = indivAA["damage"]["hitType"];
        if (indivAA["cond"].length === 0){
            dmgAA = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivAA["damage"]["reference"]).innerHTML) * Number(indivAA["damage"]["multiplier"]) / 100);
            dmgAA = damageCalc(dmgAA,indivAA["damage"]["hitType"]);
            document.getElementById("dps-dps-"+battleskill+"-dmgAA2").innerHTML = dmgAA;
            let targets = 0;
            if (indivAA["target"]==="block"){console.log("refBlock");targets = blockCount;targetAA = blockCount;}
            else if (indivAA["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetAA = blockCount+inRangeCount;}
            else if (indivAA["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
            else if (indivAA["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-AA2").value;targetAA= document.getElementById("charaSpecific"+masterValues.charaID+"-AA2").value;}
            document.getElementById("dps-dps-"+battleskill+"-targetAA2").innerHTML = targets;
            if (indivAA["time"] === "attack"){frameAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
            else{frameAA = indivAA["time"];}
            document.getElementById("dps-dps-"+battleskill+"-frameAA2").innerHTML = frameAA;
            if (stunCheck){stunActiveAA = false;}
            break;
        } else { //have condition list
            let allCondTrue = true;
            let condArray = indivAA["cond"];
            ///console.log(condArray);
            for (let i=0;i<condArray.length;i++){
                if (condArray[i][0] === "condition"){
                    // for now, put an OR option here, might need change if negative effects on ally buff themselves
                    if (conditionalOption(selfConditions[condArray[i][1]],condArray[i][2],condArray[i][3])||conditionalOption(enemyConditions[condArray[i][1]],condArray[i][2],condArray[i][3])){
                        ///console.log(condArray[i]," is true");
                    } else {
                        ///console.log(condArray[i]," made it false");
                        allCondTrue = false;
                    }
                } else {//reference
                    if (conditionalOption(selfReference[condArray[i][1]],condArray[i][2],condArray[i][3])){console.log(condArray[i]," is true");}
                    else {/*console.log(condArray[i]," made it false");*/allCondTrue = false;}
                }
            }
            if (allCondTrue){
                dmgAA = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivAA["damage"]["reference"]).innerHTML) * Number(indivAA["damage"]["multiplier"]) / 100);
                dmgAA = damageCalc(dmgAA,indivAA["damage"]["hitType"]);
                document.getElementById("dps-dps-"+battleskill+"-dmgAA2").innerHTML = dmgAA;
                let targets = 0;
                if (indivAA["target"]==="block"){console.log("refBlock");targets = blockCount;targetAA = blockCount;}
                else if (indivAA["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetAA = blockCount+inRangeCount;}
                else if (indivAA["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
                else if (indivAA["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-AA2").value;targetAA = document.getElementById("charaSpecific"+masterValues.charaID+"-AA2").value;}
                document.getElementById("dps-dps-"+battleskill+"-targetAA2").innerHTML = targets;
                if (indivAA["time"] === "attack"){frameAA = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
                else{frameAA = indivAA["time"];}
                document.getElementById("dps-dps-"+battleskill+"-frameAA2").innerHTML = frameAA;
                if (stunCheck){stunActiveAA = false;}
                break;
            } else {
                document.getElementById("dps-dps-"+battleskill+"-dmgAA2").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-targetAA2").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-frameAA2").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-hitTypeAA2").innerHTML = "無し";
            }
        }
    }
    ///console.log(dmgAA,targetAA,frameAA);
    if (dmgAA === undefined||targetAA === undefined||frameAA === undefined||frameAA === 0){
        //console.log("return 0");
        return 0;
    } else if (!stunActiveAA){
        ///console.log("no additional when stun");
    }
    return Number(dmgAA)*Number(targetAA)*30/Number(frameAA);
}

function getContinuousDamage(battleskill,continuousReference,exclude=false,stunCheck=false){
    if (exclude){console.log("continuous damage excluded!");return 0;}
    //console.log("startContinuous",battleskill,continuousReference);
    let dmgC,frameC;
    let targetC = 0;
    //targets//
    let blockCount = Number(document.getElementById("input-number-blocked").value);
    let inRangeCount = Number(document.getElementById("input-number-inRange").value);
    let blockCountMax;
    if (battleskill === "battle"){
        blockCountMax = Number(document.getElementById("dps-output-battle-value-stat10").innerHTML);
    } else {
        blockCountMax = Number(document.getElementById("dps-output-skill-value-stat10").innerHTML);
    }
    if (blockCount > blockCountMax){blockCount = blockCountMax;}
    //
    let damageContinuous = continuous_patterns[continuousReference][battleskill];
    ///console.log(damageContinuous);
    let stunActiveC = true;
    for (let indivCont of damageContinuous){
        //console.log(indivCont);
        document.getElementById("dps-dps-"+battleskill+"-hitTypeC").innerHTML = indivCont["damage"]["hitType"];
        if (indivCont["cond"].length === 0){
            dmgC = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivCont["damage"]["reference"]).innerHTML) * Number(indivCont["damage"]["multiplier"]) / 100);
            dmgC = damageCalc(dmgC,indivCont["damage"]["hitType"]);
            document.getElementById("dps-dps-"+battleskill+"-dmgC").innerHTML = dmgC;
            let targets = 0;
            if (indivCont["target"]==="block"){console.log("refBlock");targets = blockCount;targetC = blockCount;}
            else if (indivCont["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetC = blockCount+inRangeCount;}
            else if (indivCont["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetC = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
            else if (indivCont["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-C").value;targetC = document.getElementById("charaSpecific"+masterValues.charaID+"-C").value;}
            document.getElementById("dps-dps-"+battleskill+"-targetC").innerHTML = targets;
            if (indivCont["time"] === "attack"){frameC = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
            else{frameC = indivCont["time"];}
            document.getElementById("dps-dps-"+battleskill+"-frameC").innerHTML = frameC;
            if (stunCheck && indivCont["target"]==="target"){stunActiveC = false;}
            break;
        } else { //have condition list
            let allCondTrue = true;
            let condArray = indivCont["cond"];
            ///console.log(condArray);
            for (let i=0;i<condArray.length;i++){
                if (condArray[i][0] === "condition"){
                    // for now, put an OR option here, might need change if negative effects on ally buff themselves
                    if (conditionalOption(selfConditions[condArray[i][1]],condArray[i][2],condArray[i][3])||conditionalOption(enemyConditions[condArray[i][1]],condArray[i][2],condArray[i][3])){
                        ///console.log(condArray[i]," is true");
                    } else {
                        ///console.log(condArray[i]," made it false");
                        allCondTrue = false;
                    }
                } else {//reference
                    if (conditionalOption(selfReference[condArray[i][1]],condArray[i][2],condArray[i][3])){console.log(condArray[i]," is true");}
                    else {/*console.log(condArray[i]," made it false");*/allCondTrue = false;}
                }
            }
            if (allCondTrue){
                dmgC = Math.floor(Number(document.getElementById("dps-output-"+battleskill+"-value-"+indivCont["damage"]["reference"]).innerHTML) * Number(indivCont["damage"]["multiplier"]) / 100);
                dmgC = damageCalc(dmgC,indivCont["damage"]["hitType"]);
                document.getElementById("dps-dps-"+battleskill+"-dmgC").innerHTML = dmgC;
                let targets = 0;
                if (indivCont["target"]==="block"){console.log("refBlock");targets = blockCount;targetC = blockCount;}
                else if (indivCont["target"]==="range"){console.log("refRange");targets = blockCount+inRangeCount;targetC = blockCount+inRangeCount;}
                else if (indivCont["target"]==="target"){console.log("refTarget");targets = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);targetC = Number(document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML);}
                else if (indivCont["target"]==="special"){console.log("refSpecial");targets = document.getElementById("charaSpecific"+masterValues.charaID+"-C").value;targetC = document.getElementById("charaSpecific"+masterValues.charaID+"-C").value;}
                document.getElementById("dps-dps-"+battleskill+"-targetC").innerHTML = targets;
                if (indivCont["time"] === "attack"){frameC = Number(document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML);}
                else{frameC = indivCont["time"];}
                document.getElementById("dps-dps-"+battleskill+"-frameC").innerHTML = frameC;
                if (stunCheck && indivCont["target"]==="target"){stunActiveC = false;}
                break;
            } else {
                document.getElementById("dps-dps-"+battleskill+"-dmgC").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-targetC").innerHTML = 0;
                document.getElementById("dps-dps-"+battleskill+"-frameC").innerHTML = 0;
            }
        }
    }
    ///console.log(dmgC,targetC,frameC);
    if (dmgC === undefined||targetC === undefined||frameC === undefined){
        //console.log("return 0");
        return 0;
    } else if (!stunActiveC){
        ///console.log("no continuous when stun");
        return 0;
    }
    return Number(dmgC)*Number(targetC)*30/Number(frameC);
}

function getAttackTypeList(battleskill,attackPatternReference){
    if (battleskill === "battle"){
        let battleAttackTypeSelect = attack_patterns[attackPatternReference]["attack"];
        for (let i=0;i<battleAttackTypeSelect.length;i++){
            if (battleAttackTypeSelect[i]["cond"].length === 0){
                return battleAttackTypeSelect[i]["pattern"];
            } else { //have condition(s)
                let condArray = battleAttackTypeSelect[i]["cond"]
                let condMet = true;
                for (let j=0;j<condArray.length;j++){
                    if (condArray[j][0] === "condition"){
                        // for now, put an OR option here, might need change if negative effects on ally buff themselves
                        if (conditionalOption(selfConditions[condArray[j][1]],condArray[j][2],condArray[j][3])||conditionalOption(enemyConditions[condArray[j][1]],condArray[j][2],condArray[j][3])){
                            //do nothing
                        } else {condMet = false;}
                    } else if (condArray[j][0] === "reference"){//reference
                        if (conditionalOption(selfReference[condArray[j][1]],condArray[j][2],condArray[j][3])){
                            //do nothing
                        } else {condMet = false;}
                    }
                }
                if (condMet){
                    return battleAttackTypeSelect[i]["pattern"];
                }
            }
        }
    } else { //==="skill"
        let skillAttackTypeSelect = attack_patterns[attackPatternReference]["skill_attack"];
        for (let i=0;i<skillAttackTypeSelect.length;i++){
            if (skillAttackTypeSelect[i]["cond"].length === 0){
                return skillAttackTypeSelect[i]["pattern"];
            } else { //have condition(s)
                let condArray = skillAttackTypeSelect[i]["cond"]
                for (let j=0;j<condArray.length;j++){
                    if (condArray[j][0] === "condition"){
                        // for now, put an OR option here, might need change if negative effects on ally buff themselves
                        if (conditionalOption(selfConditions[condArray[j][1]],condArray[j][2],condArray[j][3])||conditionalOption(enemyConditions[condArray[j][1]],condArray[j][2],condArray[j][3])){
                            return skillAttackTypeSelect[i]["pattern"];
                        }
                    } else if (condArray[j][0] === "reference"){//reference
                        if (conditionalOption(selfReference[condArray[j][1]],condArray[j][2],condArray[j][3])){
                            return skillAttackTypeSelect[i]["pattern"];
                        }
                    }
                }
            }
        }
    }
}

function calculateAvgHitFrame(battleskill){
    let averageHit = 0;
    let averageFrame = 0;
    let totalProb = 0;
    let blockCount = Number(document.getElementById("input-number-blocked").value);
    let inRangeCount = Number(document.getElementById("input-number-inRange").value);
    //console.log("BaseBC:",blockCount);
    //console.log("BaseRC:",inRangeCount);
    let blockCountMax;
    if (battleskill === "battle"){
        blockCountMax = Number(document.getElementById("dps-output-battle-value-stat10").innerHTML);
    } else {
        blockCountMax = Number(document.getElementById("dps-output-skill-value-stat10").innerHTML);
    }
    if (blockCount > blockCountMax){blockCount = blockCountMax;}
    for (let i=0;;i++){
        if (i===7){break}
        try {
            let prefix = "dps-attacks-"+battleskill+i.toString()+"-"
            totalProb += Number(document.getElementById(prefix+"probability").innerHTML);
        } catch (err) {
            //console.log("stopped at i=",i,"totalProb=",totalProb);
            break
        }
    }
    for (let i=0;;i++){
        if (i===7){break}
        try {
            let prefix = "dps-attacks-"+battleskill+i.toString()+"-"
            let probability = Number(document.getElementById(prefix+"probability").innerHTML);
            ///console.log("i=",i,probability);
            let targets = Number(document.getElementById(prefix+"targets").innerHTML);
            //console.log(blockCount);
            //console.log(inRangeCount);
            //console.log(targets);
            if (targets > (blockCount+inRangeCount)||targets < 0){targets = (blockCount+inRangeCount);}
            //console.log("i=",i,targets);
            let multi = Number(document.getElementById(prefix+"multi").innerHTML);
            ///console.log("i=",i,multi);
            let frames = Number(document.getElementById(prefix+"frames").innerHTML);
            ///console.log("i=",i,frames);
            averageHit += probability * targets * multi /100;
            ///console.log(probability * frames / totalProb);
            averageFrame += probability * frames / totalProb;
        } catch (err) {
            //console.log("stopped at i=",i);
            break
        }
    }
    document.getElementById("dps-dps-"+battleskill+"-averageHit").innerHTML = averageHit.toFixed(2);
    document.getElementById("dps-dps-"+battleskill+"-averageFrame").innerHTML = averageFrame.toFixed(2);
    return [averageHit.toFixed(4),averageFrame.toFixed(4)];
}

function calculateAvgDmg(battleskill){
    let averageDmg = 0;
    for (let i=0;;i++){
        if (i===7){break}
        try {
            let prefix = "dps-critPen-"+battleskill+i.toString()+"-"
            let probability = Number(document.getElementById(prefix+"probability").innerHTML);
            //console.log(i,probability);
            let finalDamage = Number(document.getElementById(prefix+"finalDamage").innerHTML);
            //console.log(i,finalDamage);
            averageDmg += probability * finalDamage / 100;
        } catch (err) {
            break //no such row of table
        }
    }
    document.getElementById("dps-dps-"+battleskill+"-averageDmg").innerHTML = averageDmg.toFixed(2);
    return averageDmg.toFixed(4);
}

function subskillGetCrit(subskillID){
    if (subskillID === 24){return{"probability":15,"damage":150};}
    else if (subskillID === 25){return{"probability":20,"damage":150};}
    else if (subskillID === 26){return{"probability":25,"damage":150};}
    else if (subskillID === 101){return{"probability":10,"damage":150};}
    else {return undefined;}
}

function subskillGetPen(subskillID){
    if (subskillID === 36){return 10;}
    else if (subskillID === 37){return 15;}
    else if (subskillID === 38){return 20;}
    else if (subskillID === 86){return 8;}
    else if (subskillID === 127){return 27;}
    else if (subskillID === 135){return 18;}
    else {return undefined;}
}

function updateCritPen(critList,penList,skillCritPen){
    let targetTable,attack,hitType,idType;
    if (skillCritPen){
        targetTable=document.getElementById("dps-critPen-skill");
        attack=Number(document.getElementById("dps-output-skill-value-stat2").innerHTML);
        attack*=Number(document.getElementById("dps-output-skill-value-stat76").innerHTML)/100;
        hitType=document.getElementById("dps-output-skill-value-stat22").innerHTML;
        idType = "skill";
        if (document.getElementById("dps-output-skill-value-stat21").innerHTML === "攻撃しない"||document.getElementById("dps-output-skill-value-stat21").innerHTML === "None"){
            attack = 0;
        }
    } else {
        targetTable=document.getElementById("dps-critPen-battle");
        attack=Number(document.getElementById("dps-output-battle-value-stat2").innerHTML);
        attack*=Number(document.getElementById("dps-output-battle-value-stat76").innerHTML)/100;
        hitType=document.getElementById("dps-output-battle-value-stat22").innerHTML;
        idType = "battle";
        if (document.getElementById("dps-output-battle-value-stat21").innerHTML === "攻撃しない"||document.getElementById("dps-output-skill-value-stat21").innerHTML === "None"){
            attack = 0;
        }
    }
    let rowCount = targetTable.rows.length;
    //console.log("rowcount: ",rowCount);
    while(--rowCount) {targetTable.deleteRow(rowCount)};
    //one crit only//
    insertRowCellCritPen(targetTable,critList,penList,attack,hitType,idType,skillCritPen);
    ////console.log(insertRowCellCritPen(targetTable,critList,penList,attack,hitType,idType));
    //here
}

function insertRowCellCritPen(table,critList,penList,attack,hitType,idType,skillCritPen){
    //console.log(skillCritPen);
    let critProb,penProb;
    if (critList.length === 1){
        critProb = [100-critList[0]["probability"],critList[0]["probability"]];
    } else if (critList.length === 2){
        critProb = [(100-critList[0]["probability"])*(100-critList[1]["probability"])/100,critList[0]["probability"],(100-critList[0]["probability"])*critList[1]["probability"]/100];
    } else if (critList.length === 3){
        critProb = [(100-critList[0]["probability"])*(100-critList[1]["probability"])*(100-critList[2]["probability"])/10000,critList[0]["probability"],(100-critList[0]["probability"])*critList[1]["probability"]/100,(100-critList[0]["probability"])*(100-critList[1]["probability"])*critList[2]["probability"]/10000];
    } else if (critList.length === 4){
        critProb = [(100-critList[0]["probability"])*(100-critList[1]["probability"])*(100-critList[2]["probability"])*(100-critList[3]["probability"])/1000000,critList[0]["probability"],(100-critList[0]["probability"])*critList[1]["probability"]/100,(100-critList[0]["probability"])*(100-critList[1]["probability"])*critList[2]["probability"]/10000,(100-critList[0]["probability"])*(100-critList[1]["probability"])*(100-critList[2]["probability"])*critList[3]["probability"]/1000000];
    } else {critProb = [100];}
    let noPenProb = 100;
    ///console.log("penlist length: ",penList.length);
    for (let i=0;i<penList.length;i++){noPenProb *= (100-penList[i]);}
    noPenProb /= (100**penList.length); //noPenProb now 73.6
    //account for valkyrie, sharpshooter and duelist
    if([11025,13024,13025].includes(selfConditions["1007"])){
        if(skillCritPen && masterValues.charaID === 10210 && document.getElementById("charaSpecific10210-1").checked){
            noPenProb=noPenProb*1/3; //naberius bug//
        } else {noPenProb=noPenProb*2/3;}
    }
    if(masterValues.charaID === 10130 && selfConditions["2"] === 1){
            noPenProb=noPenProb*9/10;
    } 
    if (noPenProb === 100){penProb = [100];}
    else {penProb = [noPenProb,100-noPenProb];}
    //arrays created//
    let iTitle,jOrder;
    if (penProb.length === 1) {
        if (masterValues.language === "ja"){iTitle = ["普通攻撃","クリティカル","クリティカル(2)","クリティカル(3)","クリティカル(4)"];}
        else if (masterValues.language === "en"){iTitle = ["Normal","Critical(1)","Critical(2)","Critical(3)","Critical(4)"];}
    } else {
        if (masterValues.language === "ja"){
            iTitle = ["普通攻撃","貫通攻撃","クリティカル","貫通+クリティカル","クリティカル(2)","貫通+クリティカル(2)","クリティカル(3)","貫通+クリティカル(3)","クリティカル(4)","貫通+クリティカル(4)"];
        } else if (masterValues.language === "en"){
            iTitle = ["Normal","Penetration","Critical(1)","Pen+Crit(1)","Critical(2)","Pen+Crit(2)"];
        }
    }
    jOrder = ["title","probability","multiplier","damage"]
    for (let i=0;i<(critProb.length*penProb.length);i++){
        let row = table.insertRow(i+1);
        for (let j=0;j<4;j++){
            let cell = row.insertCell(j)
            if (j === 0){
                cell.colSpan = "2";
                cell.innerHTML = iTitle[i];
                cell.className = "displaytext";
            } else if (j === 1){
                if (penProb.length === 1){
                    cell.innerHTML = (critProb[i] * penProb[0] / 100).toFixed(3);
                } else {
                    if (i%2 === 0){
                        cell.innerHTML = (critProb[Math.floor(i/2)] * penProb[0] / 100).toFixed(3);
                    } else {
                        cell.innerHTML = (critProb[Math.floor(i/2)] * penProb[1] / 100).toFixed(3);
                    }
                }
                cell.id = "dps-critPen-" + idType + i.toString() + "-probability";
            } else if (j === 2){
                if (penProb.length === 1){
                    try {
                        cell.innerHTML = critList[i-1]["damage"];
                    } catch (err) {
                        cell.innerHTML = 100;
                    }
                } else {
                    try {
                        cell.innerHTML = critList[Math.floor(i/2)-1]["damage"];
                    } catch (err) {
                        cell.innerHTML = 100;
                    }
                }
                cell.id = "dps-critPen-" + idType + i.toString() + "-multiplier";
            } else {//j===3//
                let finalAttack;
                if (penProb.length === 1){
                    try {
                        finalAttack = attack * critList[i-1]["damage"] / 100;
                        cell.innerHTML = damageCalc(finalAttack,hitType);
                    } catch (err) {
                        finalAttack = attack;
                        cell.innerHTML = damageCalc(finalAttack,hitType);
                    }
                } else {
                    try {
                        finalAttack = attack * critList[Math.floor(i/2)-1]["damage"] / 100;
                        if (i%2 === 0){
                            cell.innerHTML = damageCalc(finalAttack,hitType);
                        } else {
                            cell.innerHTML = damageCalc(finalAttack,"貫通");
                        }
                    } catch (err) {
                        finalAttack = attack;
                        if (i%2 === 0){
                            cell.innerHTML = damageCalc(finalAttack,hitType);
                        } else {
                            cell.innerHTML = damageCalc(finalAttack,"貫通");
                        }
                    }
                }
                cell.id = "dps-critPen-" + idType + i.toString() + "-finalDamage";
            }
        }
    } 
    return {"critProb":critProb,"penProb":penProb};
}

function damageCalc(attack,hitType){
    //may need to add another parameter for continuous (because no guarantee + may not be affected by difora)
    let damage = 0;
    let guaranteeDamage = Math.floor(attack/10);
    let dmgRed = 100 - Number(document.getElementById("input-enemy-dmgRed").value);
    if (hitType === "物理" || hitType === "Physical"){
        //difora's self-checking is in place with else ifs//
        if (masterValues.charaID === 10173 && masterValues.charaAwaked && selfConditions["1"] === 1){dmgRed=dmgRed*128/100;}
        else if (masterValues.charaID === 10173 && selfConditions["1"] === 1){dmgRed=dmgRed*120/100;}
        if (document.getElementById("otherSkill10173").checked && document.getElementById("otherSkill10173a").checked){dmgRed=dmgRed*128/100;}
        else if (document.getElementById("otherSkill10173").checked){dmgRed=dmgRed*120/100;}
        //console.log("enemy-pDef:",document.getElementById("input-enemy-stat3").value);
        damage = Number(attack) - Number(document.getElementById("input-enemy-stat3").value);
    } else if (hitType === "魔法" || hitType === "Magical"){
        //console.log("enemy-mDef:",document.getElementById("input-enemy-stat4").value);
        damage = Number(attack) - Number(document.getElementById("input-enemy-stat4").value);
    } else if (hitType === "貫通" || hitType === "回復" || hitType === "Penetrate" || hitType === "Heal"){
        //console.log("pen");
        damage = Number(attack);
    }
    //kulkuri's scouting drone token
    if (document.getElementById("shared22006").checked){
        dmgRed = dmgRed * 110 / 100;
    }
    //final adjustment
    if (damage < guaranteeDamage){damage = guaranteeDamage;}
    damage = Math.floor(damage * (dmgRed) / 100);
    return damage;
}

function updateAttackTypes(typelist,skillAttack){
    let targetTable,idType;
    if (skillAttack){targetTable=document.getElementById("dps-attacks-skill");idType="skill";}
    else {targetTable=document.getElementById("dps-attacks-battle");idType="battle";}
    let rowCount = targetTable.rows.length;
    while(--rowCount) {targetTable.deleteRow(rowCount)};
    for (let i=0;i<typelist.length;i++){
        let row = targetTable.insertRow(i+1);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = typelist[i]["text-"+masterValues.language];
        cell1.className = "displaytext";
        cell1.colSpan = "2";
        let cell2 = row.insertCell(1);
        cell2.innerHTML = typelist[i]["probability"];
        cell2.id = "dps-attacks-" + idType + i.toString() + "-probability";
        let cell3 = row.insertCell(2);
        //console.log("base number of targets: ",Number(document.getElementById("dps-output-"+idType+"-value-stat11").innerHTML));
        if (document.getElementById("dps-output-"+idType+"-value-stat11").innerHTML === "ALL"){
            cell3.innerHTML = -1;
        } else {
            cell3.innerHTML = Number(typelist[i]["extraTarget"]) + Number(document.getElementById("dps-output-"+idType+"-value-stat11").innerHTML);
        }
        cell3.id = "dps-attacks-" + idType + i.toString() + "-targets";
        let cell4 = row.insertCell(3);
        cell4.innerHTML = Number(typelist[i]["extraMulti"]) + Number(document.getElementById("dps-output-"+idType+"-value-stat9").innerHTML);
        cell4.id = "dps-attacks-" + idType + i.toString() + "-multi";
        let cell5 = row.insertCell(4);
        //this first condition is only for scimitars because their trait + skill duration 0//
        if (idType==="battle"&&Number(document.getElementById("dps-output-"+idType+"-value-stat7").innerHTML) < Number(selfConditions["2002"])){
            cell5.innerHTML = Math.ceil(Number(typelist[i]["time"]) / Number(document.getElementById("dps-output-"+idType+"-value-stat6").innerHTML)) + Number(selfConditions["2002"]);
        } else {
            cell5.innerHTML = Math.ceil(Number(typelist[i]["time"]) / Number(document.getElementById("dps-output-"+idType+"-value-stat6").innerHTML)) + Number(document.getElementById("dps-output-"+idType+"-value-stat7").innerHTML);
        }
        cell5.id = "dps-attacks-" + idType + i.toString() + "-frames";
    }
}

function calculateStat(level,cc,type){
    ///console.log("-----");
    charaInfoReplace()//update info panel
    selfConditionChange("15",0); //change to skill inactive
    enemyConditionChange("15",0); //change to skill inactive, enemy no skill
    giveAttributeTile("menu");
    ///console.log("selfcond15",selfConditions["15"]);
    masterValues.allBuff = {}; //reset for each stat calc
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    let classObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    let traitObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.charaID-10000)})];
    let uniqueObject = unique_weapon_ability_data["table"][unique_weapon_ability_data["table"].findIndex(object => {return object.id === (1000*(masterValues.charaID-10000)+1)})];
    let uniqueStats = unique_weapon_data["table"][unique_weapon_data["table"].findIndex(object => {return object.uw_id === (1000*(masterValues.charaID-10000)+1+Number(document.getElementById("unique-equip-level").value))})];
    ///console.log("uniqueStats",uniqueStats);
    let skillaltnumber = Number(document.getElementById("skill-alt-select").value);
    let skillchangenumber = Number(document.getElementById("skill-change-select").value);
    let skillOCnumber = 0;
    if (overchargeCharas.includes(masterValues.charaID)&&document.getElementById("overcharge-check").checked){
        skillOCnumber = 110000;
    }
    ///console.log("skillReference: ",masterValues.charaID-skillaltnumber+skillchangenumber);
    let skillObject = skill_data["table"][skill_data["table"].findIndex(object => {return object.id === (masterValues.charaID-skillaltnumber+skillchangenumber+skillOCnumber)})];
    if (level < 31) {
        var a = 0;
    } else if (level > 30 && level < 61){
        var a = 1;
    } else if (level > 60 && level < 91){
        var a = 2;
    } else if (level > 90 && level < 121){
        var a = 3;
    } else {
        var a = 4;
    }
    if (level == 30 || level == 60 || level == 90 || level == 120 || level == 150) {
        var b = 30;
    } else {
        var b = level % 30;
    }
    try {
        var x = window["formula"+masterValues.baseClass][type][0] - window["formula"+masterValues.baseClass][type][1];
        for (let i = 1; i < 1+a+1; i++){
            if (i == a+1){
                x += window["formula"+masterValues.baseClass][type][i] * b;
            } else {
                x += window["formula"+masterValues.baseClass][type][i] * 30;
            }
        }
        for (let i = 6; i < 6+cc; i++){
            x += window["formula"+masterValues.baseClass][type][i];
        }
    } catch(err){}
    //RAW STAT//
    if (type == "stat1"){
        var rawStat = Math.floor(masterValues.unitcard["life"] * x);
    } else if (type == "stat2"){
        var rawStat = Math.floor(masterValues.unitcard["power"] * x);
    } else if (type == "stat3"){
        var rawStat = Math.floor(masterValues.unitcard["defense"] * x);
    } else if (type == "stat4"){
        var rawStat = Math.floor(masterValues.unitcard["magicDefense"] * x);
    } else if (type == "stat5"){
        var rawStat = Math.floor(job["moveSpeed"]);
    } else if (type == "stat6"){
        var rawStat = Math.floor(100+job["attackSpeed"]);
    } else if (type == "stat7"){
        var rawStat = Math.floor(job["attackInterval"]);
    } else if (type == "stat8"){
        var rawStat = Math.floor(job["attackRange"]);
    } else if (type == "stat9"){
        var rawStat = Math.floor(job["attackCount"]);
    } else if (type == "stat10"){
        var rawStat = Math.floor(job["blockNum"]);
    } else if (type == "stat191"){
        var rawStat = 0
    } else if (type == "stat192"){
        var rawStat = 150
    } else if (type == "stat193"){
        var rawStat = 50
    } else if (type == "stat194"){
        var rawStat = 300
    //basic stats above//
    } else if (type == "stat11"){
        var rawStat = Math.floor(job["targetNum"]);
    } else if (type == "stat15"){
        var rawStat = Math.floor(job["cost"]+masterValues.unitcard["cost"]);
    } else if (type == "stat21"){
        var rawStat = Math.floor(job["targetType"]);
    } else if (type == "stat22"){
        var rawStat = Math.floor(job["hitType"]);
    } else if (type == "stat76"){
        var rawStat = 100; //damageUp
    } else if (["stat17","stat19","stat86",""].includes(type)){
        var rawStat = 0;
    } else {}
    //console.log("rawStat: "+rawStat);
    //RAW STAT//
    for (let i = 3; i < 6; i++){
        if (document.getElementById("talent"+i.toString()+"check").checked) {
            //console.log(masterValues.charaID,talentIdentifier(document.getElementById("talent"+i.toString()).innerHTML))
            if (talentIdentifier(document.getElementById("talent"+i.toString()).innerHTML).includes(type)) {
                //TALENT STAT//
                rawStat += Number(document.getElementById("talent"+i.toString()).innerHTML.split("+")[1].split("%")[0]);
                //TALENT STAT//
            } else {}
        } else {}
    }
    ///console.log(type+" + talent:"+rawStat);
    //↓ REPEAT ↓//
    //trait comes first so that subskills will be separate//
    cycleAllTalents(traitObject,type,"trait",true);
    cycleAllTalents(traitObject,type,"trait",true,true);
    //
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'")
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            //no subskill is active
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill")
        if (subskillID_1 >= subskillID_2){
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        }
    } else {
        //console.log("Different kind of subskill")
        //SUBSKILL ADDITIVE PROBLEM!! elute
        let attachObject = attach_ability_data.table[subskillID_1];
        cycleAllTalents(attachObject,type,"attach");
        cycleAllTalents(attachObject,type,"attach",false,true);
        attachObject = attach_ability_data.table[subskillID_2];
        cycleAllTalents(attachObject,type,"attach",true);
        cycleAllTalents(attachObject,type,"attach",false,true);
    }
    //class//
    cycleAllTalents(classObject,type,"class");
    cycleAllTalents(classObject,type,"class",false,true);
    //unique weapon (temp positioning)//
    try{
        if (document.getElementById("unique-equip-check").checked){
            cycleAllTalents(uniqueObject,type,"class");
            cycleAllTalents(uniqueObject,type,"class",false,true);
        }
    } catch (err){
        //console.log("no unique to cycle");
    }
    //
    ///console.log("allbuff-at-cl-tr:",masterValues.allBuff); //here
    //↑ REPEAT ↑//
    //((元能力値+潜在覚醒能力値)*乗算効果 + 加算効果)*編成バフ
    let multEffect1a = tempCompile(masterValues.allBuff,[23],"rate",type,true);
    let multEffect1b = tempCompile(masterValues.allBuff,[4],"rate",type,true);
    let addEffect1 = tempCompile(masterValues.allBuff,[23,4],"actual",type);
    let equipEffect = Number(equipValues("1",type,cc) + equipValues("2",type,cc) + equipValues("3",type,cc) + equipValues("4",type,cc));
    try {
        if (document.getElementById("unique-equip-check").checked){
            //console.log("unique equipped!");
            if (uniqueStats[statConvertUnique(type)] === undefined){/*console.log("unique stat undefined!");*/}
            else{equipEffect += uniqueStats[statConvertUnique(type)];}
        }
    } catch (err) {
        //console.log("no unique stats to add");
    }
    let pdMult = pdMultValues(type);
    let dAdd = divineAdd(type);
    let pAdd = partyAdd(type);
    ///console.log("multEffect1a: "+multEffect1a);
    ///console.log(multEffect1a);
    ///console.log("addEffect1: "+addEffect1);
    ///console.log(addEffect1);
    ///console.log("equipEffect:"+equipEffect);
    ///console.log("pdMult: "+pdMult);
    ///console.log("dAdd: ",dAdd);
    let upperStat, lowerStat;
    let outputMenu = Math.floor((Math.floor(rawStat * multEffect1a.buff / 100**(multEffect1a.count)) + Math.floor(addEffect1.buff) + equipEffect) * multEffect1b.buff / 100**(multEffect1b.count) * pdMult / 100) + dAdd + pAdd;
    if (type === "stat191"||type === "stat193"){upperStat = 100;}
    else if (type === "stat192"||type === "stat194"){upperStat = 10000;}
    else {upperStat = Number(10*outputMenu);}
    if (type === "stat7"){lowerStat = Math.floor(0.1*outputMenu);}
    else if (type === "stat191"||type === "stat193"){lowerStat = 0;}
    else if (type === "stat192"||type === "stat194"){lowerStat = 0;}
    else {lowerStat = Math.floor(0.5*outputMenu);}
    //adjusting for critical//
    if ((type === "stat191"||type === "stat193")&&outputMenu>100){outputMenu = 100;}
    if ((type === "stat191"||type === "stat193")&&outputMenu<0){outputMenu = 0;}
    //check for FIXED
    for (let key in masterValues.allBuff){
        if (key.includes("fixed") && type !== "stat21"){
            outputMenu = masterValues.allBuff[key][0][0][0];
        }
    }
    try {
        document.getElementById("dps-output-menu-value-"+type).innerHTML = outputMenu;
    } catch (error) {
        ///console.log("Error-outputMenu: "+ type);
    }
    //outputMenu over//
    masterValues.allBuff = {}; //reset for each stat calc
    giveAttributeTile("battle");
    //↓ REPEAT ↓//
    //trait comes first so that subskills will be separate
    cycleAllTalents(traitObject,type,"trait",true);
    cycleAllTalents(traitObject,type,"trait",true,true);
    //
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'")
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            //no subskill is active
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill")
        if (subskillID_1 >= subskillID_2){
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        }
    } else {
        //console.log("Different kind of subskill")
        //SUBSKILL ADDITIVE PROBLEM!! elute
        let attachObject = attach_ability_data.table[subskillID_1];
        cycleAllTalents(attachObject,type,"attach");
        cycleAllTalents(attachObject,type,"attach",false,true);
        attachObject = attach_ability_data.table[subskillID_2];
        cycleAllTalents(attachObject,type,"attach",true);
        cycleAllTalents(attachObject,type,"attach",false,true);
    }
    //class//
    cycleAllTalents(classObject,type,"class");
    cycleAllTalents(classObject,type,"class",false,true);
    //unique weapon (temp positioning)//
    try{
        if (document.getElementById("unique-equip-check").checked){
            cycleAllTalents(uniqueObject,type,"class");
            cycleAllTalents(uniqueObject,type,"class",false,true);
        }
    } catch (err){
        //console.log("no unique to cycle")
    }
    //
    if (selfConditions["1010"].includes(masterValues.unitcard.element)){
        cycleAllTalents(summon_point_data["table"][0],type,"attribute");
    }
    if (type === "stat5"){
        ///console.log("allbuff-at-cl-tr-2:",masterValues.allBuff);
    }
    if (type === "stat6"){ //can extend to all types, remove if statement
        ///console.log("allbuff-at-cl-tr-2:",masterValues.allBuff); //here
        //place to include aSpd buffs -- directly add an entry to the allbuff array//
        //panie
        if (document.getElementById("shared23001-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //ticca
        if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked && document.getElementById("otherPassive10300-2").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        } else if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[10]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[10]]];
            }
        }
        //reworked yasefa
        if (masterValues.charaID !== 10127 && document.getElementById("otherSkill10127").checked && masterValues.unitcard.element === 4){
            try {
                masterValues.allBuff["rate-plus-1"].push([[100]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[100]]];
            }
        }
        //bridal suzu
        if (masterValues.charaID !== 10282 && document.getElementById("otherPassive10282-1").checked && document.getElementById("otherPassive10282-2").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[25]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[25]]];
            }
        } else if (masterValues.charaID !== 10282 && document.getElementById("otherPassive10282-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //elter
        if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[30]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[30]]];
            }
        }
        //chizane
        if (masterValues.charaID === 10208 && Number(document.getElementById("charaSpecific10208-1").value) > 9){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //kitaru fukuonna
        if ((subskillID_1 === 155 || subskillID_2 === 155) && Number(document.getElementById("shared21003").value) > 0){
            try {
                masterValues.allBuff["rate-plus-1"].push([[10]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[10]]];
            }
        }
        //marshlowa's goblin buff on skill//
        if ([10004,10032,10179].includes(masterValues.charaID) && document.getElementById("otherSkill10179").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //kyou's buff//
        if (masterValues.charaID !== 10157 && document.getElementById("otherSkill10157").checked && masterValues.unitcard.element === 4){
            try {
                masterValues.allBuff["rate-plus-1"].push([[25]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[25]]];
            }
        }
        //kokonoha's buff//
        if (masterValues.charaID !== 10171 && document.getElementById("otherSkill10171").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //osevia's buff//
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //sports argyro buff//
        if (masterValues.charaID !== 10202 && document.getElementById("otherPassive10202-2").value !== "0"){
            let aSpdBuff202 = Number(document.getElementById("otherPassive10202-1").value);
            try {
                masterValues.allBuff["rate-plus-1"].push([[aSpdBuff202]]);
            } catch (err) {
                masterValues.allBuff["rate-plus-1"] = [[[aSpdBuff202]]];
            }
        } else if (masterValues.charaID === 10202 && document.getElementById("charaSpecific10202-1").value !== "0"){
            if (masterValues.charaAwaked){
                try {
                    masterValues.allBuff["rate-plus-1"].push([[20]]);
                } catch (err) {
                    masterValues.allBuff["rate-plus-1"] = [[[20]]];
                }
            } else {
                try {
                    masterValues.allBuff["rate-plus-1"].push([[15]]);
                } catch (err) {
                    masterValues.allBuff["rate-plus-1"] = [[[15]]];
                }
            }
        }
        //place to include aSpd buffs//
        //extraBuff for stat6 - battle//
        let extraASpdMult = Number(document.getElementById("extra-"+type+"-1").value);
        let extraASpdAdd = Number(document.getElementById("extra-"+type+"-2").value);
        if (extraASpdMult > 0){
            try {
                masterValues.allBuff["rate-plus-1"].push([[extraASpdMult]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[extraASpdMult]]];
            }
        } else if (extraASpdMult < 0){
            try {
                masterValues.allBuff["rate-minus-1"].push([[extraASpdMult*-1]]);
            } catch(err) {
                masterValues.allBuff["rate-minus-1"] = [[[extraASpdMult*-1]]];
            }
        } else {}//no mult buff
        if (extraASpdAdd > 0){
            try {
                masterValues.allBuff["actual-plus-1"].push([[extraASpdAdd]]);
            } catch(err) {
                masterValues.allBuff["actual-plus-1"] = [[[extraASpdAdd]]];
            }
        } else if (extraASpdAdd < 0){
            try {
                masterValues.allBuff["actual-minus-1"].push([[extraASpdAdd*-1]]);
            } catch(err) {
                masterValues.allBuff["actual-minus-1"] = [[[extraASpdAdd*-1]]];
            }
        } else {}//no add buff
        ///console.log("allbuff-at-cl-tr-2:",masterValues.allBuff);
        if (masterValues.allBuff["rate-plus-1"] !== undefined){
            if (masterValues.allBuff["rate-minus-1"] === undefined){
                //only rate-plus-1//
                //console.log(masterValues.allBuff["rate-plus-1"]);
                masterValues.allBuff["rate-plus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-plus-1"].splice(1);
                //console.log(masterValues.allBuff["rate-plus-1"]);
            } else {
                //rate-plus-1 AND rate-minus-1//
                //get highest plus//
                masterValues.allBuff["rate-plus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-plus-1"].splice(1);
                //get highest minus//
                masterValues.allBuff["rate-minus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-minus-1"].splice(1);
                let totalPlus = masterValues.allBuff["rate-plus-1"].flat(2).reduce((a, b) => a + b, 0);
                let totalMinus = masterValues.allBuff["rate-minus-1"].flat(2).reduce((a, b) => a + b, 0);
                //console.log(totalMinus,totalPlus);
                if (totalMinus >= totalPlus){
                    masterValues.allBuff["rate-plus-1"] = [[[0]]];
                    masterValues.allBuff["rate-minus-1"] = [[[totalMinus-totalPlus]]];
                } else if (totalMinus < totalPlus){
                    masterValues.allBuff["rate-plus-1"] = [[[totalPlus-totalMinus]]];
                    masterValues.allBuff["rate-minus-1"] = [[[0]]];
                }
            }
        } else if (masterValues.allBuff["rate-minus-1"] !== undefined){
            //only rate-minus-1//
            masterValues.allBuff["rate-minus-1"].sort(function(a, b){return b[0] - a[0]});
            masterValues.allBuff["rate-minus-1"].splice(1);
        }
        //console.log(masterValues.allBuff);
    }
    //↑ REPEAT ↑//
    let multEffect2, addEffect2;
    if (type === "stat76"){
        multEffect2 = tempCompile(masterValues.allBuff,[1,2,20],"rate",type,true);
        //extraBuff for stat76 - battle//
        multEffect2.buff *= Number(document.getElementById("extra-"+type+"-1").value);
        multEffect2.count += 1;
        // niddra's skill curse damage up//
        if (masterValues.charaID !== 10299 && enemyConditions["37"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10299").checked){
            multEffect2.buff *= 130;
            multEffect2.count += 1;
        }
        // christmas lupche' skill damage up//
        if (masterValues.charaID !== 10225 && enemyConditions["33"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10225").checked){
            multEffect2.buff *= 130;
            multEffect2.count += 1;
        }
        //melissa's poison damage up//
        if (enemyConditions["25"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10037").checked){
            multEffect2.buff *= 110;
            multEffect2.count += 1;
        }
        //ameri's troublesome effect//
        if (masterValues.charaID === 10024 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 180;
            multEffect2.count += 1;
        } else if (masterValues.charaID === 10024 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 210;
            multEffect2.count += 1;
        } else {}
        //yasome's troublesome effect//
        if (masterValues.charaID === 10174 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 200;
            multEffect2.count += 1;
        } else if (masterValues.charaID === 10174 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 250;
            multEffect2.count += 1;
        } else {}
        //piperi's troublesome effect//
        if (masterValues.charaID === 10268 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 150;
            multEffect2.count += 1;
        } else if (masterValues.charaID === 10268 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 180;
            multEffect2.count += 1;
        } else {}
        //makomo's troublesome effect//
        if (masterValues.charaID === 10233 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 300;
            multEffect2.count += 1;
        } else if (masterValues.charaID === 10233 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 360;
            multEffect2.count += 1;
        } else {}
        //dhirio's poison damage up//
        if (masterValues.charaID !== 10067 && enemyConditions["25"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherPassive10067").checked){
            multEffect2.buff *= 110;
            multEffect2.count += 1;
        }
        //lapis' skill damage up//
        if (masterValues.charaID !== 10067 && document.getElementById("otherSkill10139").checked){
            multEffect2.buff *= 130;
            multEffect2.count += 1;
        }
        //lulu's unique weapon//
        if (masterValues.charaID !== 10046 && document.getElementById("otherUnique10046").checked){
            multEffect2.buff *= 110;
            multEffect2.count += 1;
        }
        //anyaku
        if (selfConditions["1006"]===7 && (subskillID_1 === 103 || subskillID_2 === 103) && document.getElementById('enemybackattack').checked){
            multEffect2.buff *= 120;
            multEffect2.count += 1;
        }
        //berserk ACT
        if (selfConditions["34"]===1 && selfConditions["1007"]===11035){
            multEffect2.buff *= 150;
            multEffect2.count += 1;
        }
        //promestein's self healing buff for fire/light allies
        if (document.getElementById("charaSpecific10244-1").checked){
            multEffect2.buff *= 130;
            multEffect2.count += 1;
        }
        //summer narcepafne's self healing buff for water allies
        if (document.getElementById("charaSpecific10287-1").checked){
            multEffect2.buff *= 120;
            multEffect2.count += 1;
        }
        addEffect2 = {"buff":0,"count":1};
    } else {
        multEffect2 = tempCompile(masterValues.allBuff,[1,20],"rate",type);
        addEffect2 = tempCompile(masterValues.allBuff,[1,20],"actual",type);
    }
    //battle - stat193//
    if (type === "stat193"){
        //bridal yasefa's crit rate buff
        if (masterValues.charaID !== 10281 && masterValues.unitcard.element === 4 && document.getElementById("otherSkill10281").checked){
            addEffect2.buff += 20;
        }
        //usuko's reworked crit buff//
        if (masterValues.charaID !== 10185 && (document.getElementById("otherPassive10185-2").value === "deploy"||document.getElementById("otherPassive10185-2").value === "skill")){
            addEffect2.buff += 25;
        }
    }
    //battle - stat191//
    if (type === "stat191"){
        //kulkuri's wrong trait correction, might add it to the py file in future
        if (masterValues.charaID === 10273){
            addEffect2.buff -= 5;
        }
        //kulkuri's trap token buff
        if (true) {
            addEffect2.buff += 5 * Number(document.getElementById("otherPassive10273-1").value);
        }
        //yuurei ameri's youkai crit buff
        if (document.getElementById("otherPassive10290-1").checked && youkaiCharas.includes(masterValues.charaID)){
            addEffect2.buff += 9 * Number(document.getElementById("otherPassive10290-2").value);
        } else if (youkaiCharas.includes(masterValues.charaID)){
            addEffect2.buff += 7 * Number(document.getElementById("otherPassive10290-2").value);
        }
        //bridal yasefa's crit rate buff
        if (masterValues.charaID !== 10281 && masterValues.unitcard.element === 4 && document.getElementById("otherSkill10281").checked){
            addEffect2.buff += 20;
        }
        //ala's enemy attack stacking buff//
        if (masterValues.charaID === 10091 && document.getElementById("skill-alt-select").value === "0"){
            addEffect2.buff += 5 * Number(document.getElementById("charaSpecific10091-1").value);
        }
        //sylphine's crit buff//
        if (masterValues.charaID !== 10005 && document.getElementById("otherPassive10005").checked){
            addEffect2.buff += 20;
        }
        //usuko's reworked crit buff//
        if (masterValues.charaID !== 10185 && document.getElementById("otherPassive10185-1").checked){
            if (document.getElementById("otherPassive10185-2").value === "deploy"){
                addEffect2.buff += 32;
            } else if (document.getElementById("otherPassive10185-2").value === "skill"){
                addEffect2.buff += 64;
            }
        } else if (masterValues.charaID !== 10185){
            if (document.getElementById("otherPassive10185-2").value === "deploy"){
                addEffect2.buff += 25;
            } else if (document.getElementById("otherPassive10185-2").value === "skill"){
                addEffect2.buff += 50;
            }
        }
    }
    //battle - stat194//
    if (type === "stat194"){

    }
    //battle - stat192//
    if (type === "stat192"){
        //kulkuri's wrong trait correction, might add it to the py file in future
        if (masterValues.charaID === 10273){
            addEffect2.buff -= 10;
        }
        //kulkuri's trap token buff
        if (true) {
            addEffect2.buff += 10 * Number(document.getElementById("otherPassive10273-1").value);
        }
        //piperi's on crit buff
        if (masterValues.charaID === 10268){
            addEffect2.buff += 5 * Number(document.getElementById("charaSpecific10268-1").value);
        }
        //christmas recliff's skill ally buff//
        if (masterValues.charaID !== 10217 && document.getElementById("otherSkill10217").checked){
            addEffect2.buff += 30;
        }
        //ala's enemy attack stacking buff//
        if (masterValues.charaID === 10091 && document.getElementById("skill-alt-select").value === "0"){
            addEffect2.buff += 8 * Number(document.getElementById("charaSpecific10091-1").value);
        }
    }
    //battle - stat8//
    if (type === "stat8"){
        //christmas recliff's permanent buff//
        if (masterValues.charaID === 10217){
            addEffect2.buff += 5 * Number(document.getElementById("charaSpecific10217-1").value);
        }
        //garden petra's permanent buff//
        if (masterValues.charaID === 10218){
            addEffect2.buff += 40 * Number(document.getElementById("charaSpecific10218-1").value);
        }
    }
    //battle - stat7//
    if (type === "stat7"){
        //panie's skill buff//
        if (document.getElementById("shared23001-1").checked){
            multEffect2.buff -= 10;
        }
        //ticca
        if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked && document.getElementById("otherPassive10300-2").checked){
            multEffect2.buff -= 20;
        } else if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked) {
            multEffect2.buff -= 10;
        }
        //reworked yasefa
        if (masterValues.charaID !== 10127 && document.getElementById("otherSkill10127").checked && masterValues.unitcard.element === 4){
            multEffect2.buff -= 50;
        }
        //syir
        if (masterValues.charaID !== 10254 && document.getElementById("otherSkill10254").checked){
            multEffect2.buff -= 20;
        }
        //chizane
        if (masterValues.charaID === 10208){
            multEffect2.buff -= 10 * Math.floor(Number(document.getElementById("charaSpecific10208-1").value)/10);
        }
        //margel's token buff
        if (selfConditions["1006"]===4||selfConditions["1006"]===5||selfConditions["1006"]===6||selfConditions["1006"]===7||selfConditions["1006"]===8){
            multEffect2.buff -= 10 * document.getElementById("shared22003").value;
        }
        //sports argyro's PAD buff
        if (masterValues.charaID !== 10202){
            let attacks202 = Number(document.getElementById("otherPassive10202-2").value);
            let PADbuff202 = Number(document.getElementById("otherPassive10202-1").value);
            multEffect2.buff -= attacks202*PADbuff202;
        } else if (masterValues.charaID === 10202){
            if (masterValues.charaAwaked){
                multEffect2.buff -= 20 * Number(document.getElementById("charaSpecific10202-1").value);
            } else {
                multEffect2.buff -= 15 * Number(document.getElementById("charaSpecific10202-1").value);
            }
        }
        //kyou's wind ally PAD buff
        if (masterValues.charaID !== 10157 && document.getElementById("otherSkill10157").checked && masterValues.unitcard.element === 4){
            multEffect2.buff -= 25;
        }
        //kokonoha's PAD buff
        if (masterValues.charaID !== 10171 && document.getElementById("otherSkill10171").checked){
            multEffect2.buff -= 50;
        }
        //osevia's PAD buff
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            multEffect2.buff -= 50;
        }
        //aerial//
        if (selfConditions["1007"] === 16025 && selfConditions["2"] === 0){
            multEffect2.buff -= 20 * Number(document.getElementById("charaSpecific16021-1").value);
        }
    }
    //battle - stat5//
    if (type === "stat5"){
        //shinatsu's movSpd buff
        if (masterValues.charaID !== 10207){//practical reasons, omit self buff for dps
            if (document.getElementById("otherPassive10207-1").checked){
                addEffect2.buff += 75 * Number(document.getElementById("otherPassive10207-2").value);
            } else {
                addEffect2.buff += 60 * Number(document.getElementById("otherPassive10207-2").value);
            } 
        }
    }
    //battle - stat4//
    if (type === "stat4"){
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect2.buff += 180;
            } else {addEffect2.buff += 150;}
        }
        //arge's sorcery drone
        if (true){
            multEffect2.buff += 5 * Number(document.getElementById("shared22004").value);
        }
        //soleia's permanent buff//
        if (masterValues.charaID === 10082){
            multEffect2.buff += 30 * document.getElementById("charaSpecific10082-1").value;
        }
    }
    //battle - stat3//
    if (type === "stat3"){
        //osevia's earth tile buff (for other allies)
        if (masterValues.charaID !== 10277 && selfConditions["1010"].includes(7) && document.getElementById("otherPassive10277-1").checked){
            if (document.getElementById("otherPassive10277-2").checked){
                multEffect2.buff += 25;
            } else {
                multEffect2.buff += 20;
            }
        }
        //rotona's unique weapon buff
        if(masterValues.charaID === 10056 && document.getElementById("unique-equip-check").checked){
            multEffect2.buff += 30 * Number(document.getElementById("charaSpecific10056-2").value);
        }
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect2.buff += 180;
            } else {addEffect2.buff += 150;}
        }
        //arge's sorcery drone
        if (true){
            multEffect2.buff += 5 * Number(document.getElementById("shared22004").value);
        }
        //melon's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10041){
            addEffect2.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //soleia's permanent buff//
        if (masterValues.charaID === 10082){
            multEffect2.buff += 30 * document.getElementById("charaSpecific10082-1").value;
        }
        //rin's unique weapon buff
        if (true){ //rin is exception, since healer, no need to set individual (practicality)
            multEffect2.buff += 10 * Number(document.getElementById("otherUnique10006-1").value);
        }
        //tamamo's stat 3 dependent buff (passive)
        if (masterValues.charaID !== 10148 && !document.getElementById("otherPassive10148-1").checked){
            addEffect2.buff += Math.floor(30 * Number(document.getElementById("otherPassive10148-2").value) /100);
        } else if (masterValues.charaID !== 10148 && document.getElementById("otherPassive10148-1").checked){
            addEffect2.buff += Math.floor(40 * Number(document.getElementById("otherPassive10148-2").value) /100);
        }
        //mealus' map buff//
        if (masterValues.charaID !== 10103){
            if (document.getElementById("otherSkill10103").checked){
                multEffect2.buff += [100,112,125,137,150][Number(document.getElementById("level10103").value)-1];
            }
        }
        //logica's permanent buffs - skill 1//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect2.buff += [20,22,25,27,30][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //logica's permanent buffs - skill 2//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "0"){
            multEffect2.buff += [7,8,9,10,11][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
    }
    //battle - stat2//
    if (type === "stat2"){
        //panie's skill buff//
        if (document.getElementById("shared23001-1").checked){
            multEffect2.buff += [40,42,45,47,48,50,52,55,57,60][Number(document.getElementById("shared23001-2").value)-1];
        }
        //lapinus' enemy defeat buff//
        if (masterValues.charaID === 10302){
            if (selfConditions["26"] === 0){
                multEffect2.buff += 10 * Number(document.getElementById("charaSpecific10302-1").value);
            } else {
                multEffect2.buff += 15 * Number(document.getElementById("charaSpecific10302-1").value);
            }
        }
        //polpe's enemy defeat buff//
        if (masterValues.charaID === 10197){
            multEffect2.buff += 9 * Number(document.getElementById("charaSpecific10197-1").value);
        }
        //summer narcepafne's stat1 dependent buff (base HP)
        if (masterValues.charaID === 10287){
            addEffect2.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //osevia's skill attack buff (for other allies)
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            multEffect2.buff += 30;
        }
        //yuurei ameri's token buff: has no self-buff, only buffs her tokens
        //nanae's youkai buff
        if (masterValues.charaID !== 10289 && youkaiCharas.includes(masterValues.charaID)){
            addEffect2.buff += Math.floor(20 * Number(document.getElementById("otherPassive10289-1").value) /100);
        }
        //bridal darcy's attack steal buff
        if (masterValues.charaID === 10280){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(2 * Number(document.getElementById("charaSpecific10280-1").value) / 100);
            } else {
                addEffect2.buff += Math.floor(3 * Number(document.getElementById("charaSpecific10280-1").value) / 100);
            }
        }
        //lucitani
        if (masterValues.charaID !== 10275){
            addEffect2.buff += Math.floor(Number(document.getElementById("otherSkill10275-1").value) * Number(document.getElementById("otherSkill10275-2").value) / 100);
        } else if (masterValues.charaID === 10275 && masterValues.charaAwaked){
            multEffect2.buff += 60 * Number(document.getElementById("charaSpecific10275-1").value);
        } else {
            multEffect2.buff += 50 * Number(document.getElementById("charaSpecific10275-1").value);
        }
        //school lico's token buff
        if (true){
            multEffect2.buff += 12 * document.getElementById("shared22005").value;
        }
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect2.buff += 180;
            } else {addEffect2.buff += 150;}
        }
        //school bunko's buff on attack
        if (true){
            addEffect2.buff += Math.floor(9 * Number(document.getElementById("otherPassive10264-3").value) * Number(document.getElementById("otherPassive10264-4").value) / 100);
        }
        //promestein's atk increase on heal buff
        if (document.getElementById("otherPassive10244-1").checked){
            addEffect2.buff += Math.floor(50 * Number(document.getElementById("otherPassive10244-2").value) * Number(document.getElementById("otherPassive10244-3").value) / 100);
        } else {
            addEffect2.buff += Math.floor(40 * Number(document.getElementById("otherPassive10244-2").value) * Number(document.getElementById("otherPassive10244-3").value) / 100);
        }
        //vanilla's attack steal buff
        if (masterValues.charaID === 10246){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(4 * Number(document.getElementById("charaSpecific10246-1").value) / 100);
            } else {
                addEffect2.buff += Math.floor(6 * Number(document.getElementById("charaSpecific10246-1").value) / 100);
            }
        }
        //rogdanno's stat1 dependent buff (base HP)
        if (masterValues.charaID === 10230){
            addEffect2.buff += Math.floor(10 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //elter's atk buff
        if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked && document.getElementById("otherPassive10220-2").checked){
            multEffect2.buff += 40;
        } else if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked){
            multEffect2.buff += 30;
        }
        //arge's sorcery drone
        if (masterValues.unitcard.element === 5) {
            multEffect2.buff += 8 * Number(document.getElementById("shared22004").value);
        }
        //idol ather's ally buff
        if (masterValues.charaID !== 10239){
            addEffect2.buff += Math.floor(40 * Number(document.getElementById("otherSkill10239-1").value) /100);
        }
        //arge's wait buff
        if (masterValues.charaID === 10238){
            multEffect2.buff += 10 * Number(document.getElementById("charaSpecific10238-1").value);
        }
        //elute's unique weapon buff
        if (masterValues.charaID === 10061 && document.getElementById("unique-equip-check").checked){
            multEffect2.buff += 20 * Number(document.getElementById("charaSpecific10061-1").value);
        }
        //margel's token buff
        if (true){
            multEffect2.buff += 10 * document.getElementById("shared22003").value;
        }
        //pyuli's fire tile buff (for other allies)
        if (masterValues.charaID !== 10153 && selfConditions["1010"].includes(2)){
            if (document.getElementById("otherPassive10153-1").value === "skill"){
                multEffect2.buff += 12;
            } else if (document.getElementById("otherPassive10153-1").value === "deploy"){
                multEffect2.buff += 6;
            }
        }
        //ny soleia's permanent buff//
        if (masterValues.charaID === 10228){
            multEffect2.buff += 40 * document.getElementById("charaSpecific10228-1").value;
        }
        //kokonoha's youkai dependent buff
        if (document.getElementById("otherPassive10171-1").checked){
            addEffect2.buff += 160 * Number(document.getElementById("otherPassive10171-2").value);
        }
        //hagane's attack count buff
        if (masterValues.charaID === 10172){
            multEffect2.buff += 2 * Number(document.getElementById("charaSpecific10172-1").value);
        }
        //platina's enemy defeat buff
        if (masterValues.charaID === 10026 && document.getElementById("skill-alt-select").value === "0"){
            addEffect2.buff += 100 * Number(document.getElementById("charaSpecific10026-1").value);
        }
        //darcy's attack steal buff
        if (masterValues.charaID === 10205){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(4 * Number(document.getElementById("charaSpecific10205-1").value) / 100);
            } else {
                addEffect2.buff += Math.floor(5 * Number(document.getElementById("charaSpecific10205-1").value) / 100);
            }
        }
        //gneiss' stat3 dependent buff
        if (masterValues.charaID === 10118){
            addEffect2.buff += Math.floor(70 * Number(document.getElementById("dps-output-battle-value-stat3").innerHTML) / 100);
        }
        //melon's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10041){
            addEffect2.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //narcepafne's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10079){
            addEffect2.buff += Math.floor(6 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //lagos' unique weapon buff
        if (masterValues.charaID === 10044){
            if (document.getElementById("unique-equip-check").checked){
                multEffect2.buff += 30 * Number(document.getElementById("charaSpecific10044-1").value);
            }
        }
        //silva's unique weapon stat1 dependent buff (base HP)
        if (masterValues.charaID === 10016){
            if (document.getElementById("unique-equip-check").checked){
                addEffect2.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            }
        }
        //sports nigru's stat 2 dependent buff (passive)
        if (masterValues.charaID !== 10203 && !document.getElementById("otherPassive10203-1").checked){
            addEffect2.buff += Math.floor(50 * Number(document.getElementById("otherPassive10203-2").value) /100);
        } else if (masterValues.charaID !== 10203 && document.getElementById("otherPassive10203-1").checked){
            addEffect2.buff += Math.floor(60 * Number(document.getElementById("otherPassive10203-2").value) /100);
        }
        //marshlowa's goblin buff
        if ([10004,10032,10179].includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10179-1").checked){
                multEffect2.buff += 7 * Number(document.getElementById("otherPassive10179-2").value);
            }
        }
        //marshlowa's goblin buff on skill
        if ([10004,10032,10179].includes(masterValues.charaID)){
            if (document.getElementById("otherSkill10179").checked){
                multEffect2.buff += [40,50,60,70,80][Number(document.getElementById("level10179").value)-1];
            }
        }
        //summer diffnilla's stat1 dependent buff
        if (masterValues.charaID === 10196){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(9 * Number(document.getElementById("dps-output-battle-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            } else {
                addEffect2.buff += Math.floor(12 * Number(document.getElementById("dps-output-battle-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            }
        }
        //poisonRin's poison dispel buff
        if (masterValues.charaID === 10178 && masterValues.charaAwaked){
            multEffect2.buff += 12 * Number(document.getElementById("charaSpecific10178-1").value);
        } else if (masterValues.charaID === 10178){
            multEffect2.buff += 9 * Number(document.getElementById("charaSpecific10178-1").value);
        }
        //headia's enemy defeat buff//
        if (masterValues.charaID === 10147){
            multEffect2.buff += 6 * Number(document.getElementById("charaSpecific10147-1").value);
        }
        //santa miteras' stat 2 dependent buff (passive)
        if (masterValues.charaID !== 10137 && !document.getElementById("otherPassive10137-1").checked){
            addEffect2.buff += Math.floor(20 * Number(document.getElementById("otherPassive10137-2").value) /100);
        } else if (masterValues.charaID !== 10137 && document.getElementById("otherPassive10137-1").checked){
            addEffect2.buff += Math.floor(25 * Number(document.getElementById("otherPassive10137-2").value) /100);
        }
        //yasefa's token buff
        if (selfConditions["1002"] === 4){
            multEffect2.buff += 30 * Number(document.getElementById("shared22002").value);
        }
        //mithrena's stat3 dependent buff
        if (masterValues.charaID === 10112){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(40 * Number(document.getElementById("dps-output-battle-value-stat3").innerHTML) / 100);
            } else {
                addEffect2.buff += Math.floor(52 * Number(document.getElementById("dps-output-battle-value-stat3").innerHTML) / 100);
            }
        }
        //danadilly's fairy count buff
        if (masterValues.charaID === 10111){
            if (selfConditions["26"] === 0)
                multEffect2.buff += 20 * Number(document.getElementById("charaSpecific10111-1").value);
            else {
                multEffect2.buff += 25 * Number(document.getElementById("charaSpecific10111-1").value);
            }
        }
        //lico's token buff
        if (!document.getElementById("shared22001-1").checked){
            multEffect2.buff += 15 * Number(document.getElementById("shared22001-2").value);   
        } else if (document.getElementById("shared22001-1").checked){
            multEffect2.buff += 18 * Number(document.getElementById("shared22001-2").value);
        }
        //airen's stat3 dependent buff
        if (masterValues.charaID === 10101){
            if (selfConditions["26"] === 0){
                addEffect2.buff += Math.floor(50 * Number(document.getElementById("dps-output-battle-value-stat3").innerHTML) / 100);
            } else {
                addEffect2.buff += Math.floor(65 * Number(document.getElementById("dps-output-battle-value-stat3").innerHTML) / 100);
            }
        }
        //logica's permanent buffs - skill 1//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect2.buff += [10,11,12,13,15][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //logica's permanent buffs - skill 2//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "0"){
            multEffect2.buff += [2,3,4,5,6][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //veratu's buffs//
        if (masterValues.charaID === 10083 && selfConditions["26"] === 1){
            multEffect2.buff += 37 * Number(document.getElementById("charaSpecific10083-1").value);
            multEffect2.buff += 30 * Number(document.getElementById("charaSpecific10083-2").value);
        } else if (masterValues.charaID === 10083 && selfConditions["26"] === 0){
            multEffect2.buff += 30 * Number(document.getElementById("charaSpecific10083-1").value);
            multEffect2.buff += 30 * Number(document.getElementById("charaSpecific10083-2").value);
        }
        //vile's atk up buff//
        if (true){ //vile is exception, since healer, no need to set individual (practicality)
            if (document.getElementById("otherSkill10070").checked){
                multEffect2.buff += [5,10,15,20,25,30,35,40,45,50][Number(document.getElementById("level10070").value)-1];
            }
        }
        //kobold buff -- bow and pent//
        if ((masterValues.charaID === 10060||masterValues.charaID === 10121) && document.getElementById("otherPassive10060").checked){
            multEffect2.buff += 15;
        }
        if ((masterValues.charaID === 10060||masterValues.charaID === 10121) && document.getElementById("otherPassive10121").checked){
            multEffect2.buff += 20;
        }
        //amirami's permanent buff//
        if (masterValues.charaID === 10047){
            multEffect2.buff += 5 * Number(document.getElementById("charaSpecific10047-1").value);
        }
        //acqua's permanent buff//
        if (masterValues.charaID === 10043){
            multEffect2.buff += 10 * Number(document.getElementById("charaSpecific10043-1").value);
        }
        //orc rage effect -- podel and diffnilla//
        if (document.getElementById("charaSpecific10011-1").checked || selfConditions["2000"] <= 25 && masterValues.charaID === 10011){
            multEffect2.buff += 25;
        } else if (document.getElementById("charaSpecific10039-1").checked || selfConditions["2000"] <= 25 && masterValues.charaID === 10039){
            multEffect2.buff += 50;
        }
        //chase assassin//
        if (selfConditions["1007"] === 16014 && selfConditions["2"] === 0){
            multEffect2.buff += 50 * Number(document.getElementById("charaSpecific16011-1").value);
        }
        //phantom//
        if (selfConditions["1007"] === 16015 && selfConditions["2"] === 0){
            multEffect2.buff += 70 * Number(document.getElementById("charaSpecific16011-1").value);
        }
        //arcane mage//
        if (selfConditions["1007"] === 14015 && selfConditions["2"] === 0){
            multEffect2.buff += 10 * Number(document.getElementById("charaSpecific14011-1").value);
        }
    }
    //battle - stat1//
    if (type === "stat1"){
        //promestein skill hp buff
        if (document.getElementById("otherSkill10244-1").checked && masterValues.charaID !== 10244){
            multEffect2.buff += 30;
        }
        //demolish ACT
        if (selfConditions["34"]===1 && selfConditions["1007"]===12025){
            multEffect2.buff += 50;
        }
        //margel's token buff
        if (selfConditions["1006"]===2||selfConditions["1006"]===3){
            multEffect2.buff += 10 * document.getElementById("shared22003").value;
        }
        //ny soleia's permanent buff//
        if (masterValues.charaID === 10228){
            multEffect2.buff += 40 * document.getElementById("charaSpecific10228-1").value;
        }
        //summer diffnilla's permanent buff//
        if (masterValues.charaID === 10196){
            multEffect2.buff += 20 * Number(document.getElementById("charaSpecific10196-1").value);
        }
        //headia's enemy defeat buff
        if (masterValues.charaID === 10147){
            multEffect2.buff += 6 * Number(document.getElementById("charaSpecific10147-1").value);
        }
        //asta's permanent buff//
        if (masterValues.charaID === 10029 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect2.buff += 20 * Number(document.getElementById("charaSpecific10029-1").value);
        }
    }
    //attribute tile effects//
    if (selfConditions["1010"].includes(masterValues.unitcard.element)){
        if ([10005,10008,10010,10012,10080,10157].includes(masterValues.charaID)){
            //console.log("attribute tile double effect!");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect2.buff += 30;
            } else if (type === "stat8"){multEffect2.buff+=10} else {}
        }
        if (masterValues.charaID !== 10209 && fireCharas.includes(masterValues.charaID) && (document.getElementById("otherPassive10209-1").checked || document.getElementById("otherPassive10209-2").checked)){
            //console.log("attribute tile triple effect!(not self)");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect2.buff += 60;
            } else if (type === "stat8"){multEffect2.buff+=20} else {}
        }
        //elemental boost attribute tile x1.5//
        if (subskillID_1 === 51 || subskillID_2 === 51){
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect2.buff += 15; //if 7.5 gives problems then 8
            } else if (type === "stat8"){multEffect2.buff+=5} else {}
        }
    }
    //other allies' skills
    multEffect2.buff += allAlliesSkillRate(type); //timing must be 1
    //extrabuffs
    try {
        if (type === "stat6" || type === "stat76"){} else {
            multEffect2.buff += Number(document.getElementById("extra-"+type+"-1").value);
            addEffect2.buff += Number(document.getElementById("extra-"+type+"-2").value);
        }
    } catch (err) {}
    try {
        //supporters
        addEffect2.buff += Number(document.getElementById("supporter-buff-value-"+type).value)
    } catch (err) {}
    //tactics
    if (type === "stat3"){
        multEffect2.buff += Number(document.getElementById("shared21001").value)*4;
    } else {}
    //shizanketsuga
    if (type === "stat2" && (subskillID_1 === 100 || subskillID_2 === 100)){
        multEffect2.buff += Number(document.getElementById("shared21002").value)*1;
    }
    //kitaru fukuonna
    if (type === "stat7" && (subskillID_1 === 155 || subskillID_2 === 155)){
        multEffect2.buff -= 10 * Number(document.getElementById("shared21003").value);
    }
    //sen'i keishou
    if (type === "stat2"){
        multEffect2.buff += 100 * Number(document.getElementById("shared21004").value);
    }
    //aSpd debuff limit
    if (type === "stat6"){
        if (multEffect2.buff < 50){multEffect2.buff=50}
    }
    ///console.log("multEffect2: "+multEffect2);
    ///console.log(multEffect2);
    ///console.log("addEffect2: "+addEffect2);
    ///console.log(addEffect2);
    let outputBattle = Math.floor(outputMenu * multEffect2.buff / 100**(multEffect2.count)) + Math.floor(addEffect2.buff);
    if (["stat8","stat76"].includes(type)){
        if (outputBattle < 0){outputBattle = 0;}
    }
    else if (["stat7"].includes(type)){
        if (outputBattle < lowerStat){outputBattle = lowerStat;}
    }
    else if (outputBattle < lowerStat){
        outputBattle = lowerStat;
    } else if (outputBattle > upperStat){
        outputBattle = upperStat;
    } else {/*within lower and upper - OK*/}
    //check for FIXED
    ///console.log(type,masterValues.allBuff);
    for (let key in masterValues.allBuff){
        if (key.includes("fixed")){
            if (type === "stat86" && masterValues.allBuff[key][0][1][0] !== 100){}
            else {outputBattle = masterValues.allBuff[key][0][0][0];}
        }
    }
    //critical max checking//
    if (type === "stat191"){
        if (outputBattle >= Number(document.getElementById("dps-output-battle-value-stat193").innerHTML)){
            outputBattle = Number(document.getElementById("dps-output-battle-value-stat193").innerHTML);
            document.getElementById("dps-output-battle-value-stat191").style.color = "red";
        } else {
            document.getElementById("dps-output-battle-value-stat191").style.color = "";
        }
    }
    if (type === "stat192"){
        if (outputBattle >= Number(document.getElementById("dps-output-battle-value-stat194").innerHTML)){
            outputBattle = Number(document.getElementById("dps-output-battle-value-stat194").innerHTML);
            document.getElementById("dps-output-battle-value-stat192").style.color = "red";
        } else {
            document.getElementById("dps-output-battle-value-stat192").style.color = "";
        }
    }
    //marshlowa's goblin fixed PAD
    if (type === "stat7" && [10004,10032,10179].includes(masterValues.charaID)){
        if (document.getElementById("otherSkill10179").checked){
            outputBattle = 10;
        }
    }
    //PAD minimum 1 frame//
    if (["stat7"].includes(type)){
        if (outputBattle <= 0){outputBattle = 1;}
    }
    //gorgon loren skill penetration override//
    if (masterValues.charaID === 10258){
        if (masterValues.language === "ja" && (enemyConditions["24"] === 1||enemyConditions["25"] === 1)){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "貫通";
        } else if (masterValues.language === "en" && (enemyConditions["24"] === 1||enemyConditions["25"] === 1)){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "Penetrate";
        }
    }
    //school lico override//
    if (masterValues.charaID === 10265){
        if (masterValues.language === "ja"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "魔法";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "Magical";
        }
    }
    //chifa override//
    if (masterValues.charaID === 10131){
        if (masterValues.language === "ja" && selfConditions["1010"].includes(2)){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "魔法";
        } else if (masterValues.language === "en" && selfConditions["1010"].includes(2)){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "Magical";
        }
    }
    //drake igni override//
    if (masterValues.charaID === 10209){
        if (masterValues.language === "ja"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "魔法";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "Magical";
        }
    }
    //lapis override//
    if (masterValues.charaID === 10139){
        if (masterValues.language === "ja"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "貫通";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-output-battle-value-stat22").innerHTML = "Penetrate";
        }
    }
    try {
        if (masterValues.language === "ja"){
            if (outputBattle < 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "ALL";
            } else if (type === "stat86" && outputBattle !== 0){
                document.getElementById("dps-output-battle-value-stat11").innerHTML = outputBattle;
            } else if (type === "stat21" && outputBattle === 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "攻撃しない";
            } else if (type === "stat21" && outputBattle === 3){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "遠距離";
            } else if (type === "stat21" && outputBattle === 4){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "近距離";
            } else if (type === "stat22" && outputBattle === 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "無し";
            } else if (type === "stat22" && outputBattle === 1){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "物理";
            } else if (type === "stat22" && outputBattle === 2){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "魔法";
            } else if (type === "stat22" && outputBattle === 3){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "貫通";
            } else if (type === "stat22" && outputBattle === 4){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "回復";
            } else {
            document.getElementById("dps-output-battle-value-"+type).innerHTML = outputBattle;
            }
        } else if (masterValues.language === "en"){
            if (outputBattle < 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "ALL";
            } else if (type === "stat86" && outputBattle !== 0){
                document.getElementById("dps-output-battle-value-stat11").innerHTML = outputBattle;
            } else if (type === "stat21" && outputBattle === 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "No attack";
            } else if (type === "stat21" && outputBattle === 3){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Ranged";
            } else if (type === "stat21" && outputBattle === 4){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Melee";
            } else if (type === "stat22" && outputBattle === 0){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "None";
            } else if (type === "stat22" && outputBattle === 1){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Physical";
            } else if (type === "stat22" && outputBattle === 2){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Magical";
            } else if (type === "stat22" && outputBattle === 3){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Penetrate";
            } else if (type === "stat22" && outputBattle === 4){
                document.getElementById("dps-output-battle-value-"+type).innerHTML = "Heal";
            } else {
            document.getElementById("dps-output-battle-value-"+type).innerHTML = outputBattle;
            }
        }
    } catch (error) {
        //console.log("Error-outputBattle: "+ type);
    }
    //outputBattle over//
    masterValues.allBuff = {}; //reset for each stat calc
    selfConditionChange("15",1); //change to skill active
    enemyConditionChange("15",1); //change to skill active, enemy no skill
    giveAttributeTile("skill");
    ///console.log("selfcond15",selfConditions["15"]);
    //↓ REPEAT ↓//
    //trait comes first so that subskills will be separate
    cycleAllTalents(traitObject,type,"trait",true);
    cycleAllTalents(traitObject,type,"trait",true,true);
    //
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'")
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            //no subskill is active
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill")
        if (subskillID_1 >= subskillID_2){
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        } else {
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
            cycleAllTalents(attachObject,type,"attach",false,true);
        }
    } else {
        //console.log("Different kind of subskill")
        //SUBSKILL ADDITIVE PROBLEM!! elute
        let attachObject = attach_ability_data.table[subskillID_1];
        cycleAllTalents(attachObject,type,"attach");
        cycleAllTalents(attachObject,type,"attach",false,true);
        attachObject = attach_ability_data.table[subskillID_2];
        cycleAllTalents(attachObject,type,"attach",true);
        cycleAllTalents(attachObject,type,"attach",false,true);
    }
    //class//
    cycleAllTalents(classObject,type,"class");
    cycleAllTalents(classObject,type,"class",false,true);
    cycleAllTalents(skillObject,type,"skill");
    cycleAllTalents(skillObject,type,"skill",false,true);
    //unique weapon (temp positioning)//
    try{
        if (document.getElementById("unique-equip-check").checked){
            cycleAllTalents(uniqueObject,type,"class");
            cycleAllTalents(uniqueObject,type,"class",false,true);
        }
    } catch (err){
        //console.log("no unique to cycle")
    }
    //
    if (selfConditions["1010"].includes(masterValues.unitcard.element)){
        cycleAllTalents(summon_point_data["table"][0],type,"attribute");
    }
    if (type === "stat6"){ //can extend to all types, remove if statement
        ///console.log("allbuff-at-cl-tr-3:",masterValues.allBuff); //here
        //place to include aSpd buffs -- directly add an entry to the allbuff array//
        //panie
        if (document.getElementById("shared23001-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //ticca
        if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked && document.getElementById("otherPassive10300-2").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        } else if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[10]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[10]]];
            }
        }
        //reworked yasefa
        if (masterValues.charaID !== 10127 && document.getElementById("otherSkill10127").checked && masterValues.unitcard.element === 4){
            try {
                masterValues.allBuff["rate-plus-1"].push([[100]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[100]]];
            }
        }
        //bridal suzu
        if (masterValues.charaID !== 10282 && document.getElementById("otherPassive10282-1").checked && document.getElementById("otherPassive10282-2").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[25]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[25]]];
            }
        } else if (masterValues.charaID !== 10282 && document.getElementById("otherPassive10282-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //elter
        if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[30]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[30]]];
            }
        }
        //chizane
        if (masterValues.charaID === 10208 && Number(document.getElementById("charaSpecific10208-1").value) > 9){
            try {
                masterValues.allBuff["rate-plus-1"].push([[20]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[20]]];
            }
        }
        //kitaru fukuonna
        if ((subskillID_1 === 155 || subskillID_2 === 155) && Number(document.getElementById("shared21003").value) > 0){
            try {
                masterValues.allBuff["rate-plus-1"].push([[10]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[10]]];
            }
        }
        //marshlowa's goblin buff on skill//
        if ([10004,10032,10179].includes(masterValues.charaID) && document.getElementById("otherSkill10179").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //kyou's buff//
        if (masterValues.charaID !== 10157 && document.getElementById("otherSkill10157").checked && masterValues.unitcard.element === 4){
            try {
                masterValues.allBuff["rate-plus-1"].push([[25]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[25]]];
            }
        }
        //kokonoha's buff//
        if (masterValues.charaID !== 10171 && document.getElementById("otherSkill10171").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //osevia's buff//
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            try {
                masterValues.allBuff["rate-plus-1"].push([[50]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[50]]];
            }
        }
        //sports argyro buff//
        if (masterValues.charaID !== 10202 && document.getElementById("otherPassive10202-2").value !== "0"){
            let aSpdBuff202 = Number(document.getElementById("otherPassive10202-1").value);
            try {
                masterValues.allBuff["rate-plus-1"].push([[aSpdBuff202]]);
            } catch (err) {
                masterValues.allBuff["rate-plus-1"] = [[[aSpdBuff202]]];
            }
        } else if (masterValues.charaID === 10202 && document.getElementById("charaSpecific10202-1").value !== "0"){
            if (masterValues.charaAwaked){
                try {
                    masterValues.allBuff["rate-plus-1"].push([[40]]);
                } catch (err) {
                    masterValues.allBuff["rate-plus-1"] = [[[40]]];
                }
            } else {
                try {
                    masterValues.allBuff["rate-plus-1"].push([[30]]);
                } catch (err) {
                    masterValues.allBuff["rate-plus-1"] = [[[30]]];
                }
            }
        }
        //place to include aSpd buffs//
        //extraBuff for stat6 - skill//
        let extraASpdMult = Number(document.getElementById("extra-"+type+"-1").value);
        let extraASpdAdd = Number(document.getElementById("extra-"+type+"-2").value);
        if (extraASpdMult > 0){
            try {
                masterValues.allBuff["rate-plus-1"].push([[extraASpdMult]]);
            } catch(err) {
                masterValues.allBuff["rate-plus-1"] = [[[extraASpdMult]]];
            }
        } else if (extraASpdMult < 0){
            try {
                masterValues.allBuff["rate-minus-1"].push([[extraASpdMult*-1]]);
            } catch(err) {
                masterValues.allBuff["rate-minus-1"] = [[[extraASpdMult*-1]]];
            }
        } else {}//no mult buff
        if (extraASpdAdd > 0){
            try {
                masterValues.allBuff["actual-plus-1"].push([[extraASpdAdd]]);
            } catch(err) {
                masterValues.allBuff["actual-plus-1"] = [[[extraASpdAdd]]];
            }
        } else if (extraASpdAdd < 0){
            try {
                masterValues.allBuff["actual-minus-1"].push([[extraASpdAdd*-1]]);
            } catch(err) {
                masterValues.allBuff["actual-minus-1"] = [[[extraASpdAdd*-1]]];
            }
        } else {}//no add buff
        //console.log("allbuff-at-cl-tr-3:",masterValues.allBuff);
        if (masterValues.allBuff["rate-plus-1"] !== undefined){
            if (masterValues.allBuff["rate-minus-1"] === undefined){
                //only rate-plus-1//
                //console.log(masterValues.allBuff["rate-plus-1"]);
                masterValues.allBuff["rate-plus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-plus-1"].splice(1);
                //console.log(masterValues.allBuff["rate-plus-1"]);
            } else {
                //rate-plus-1 AND rate-minus-1//
                //get highest plus//
                masterValues.allBuff["rate-plus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-plus-1"].splice(1);
                //get highest minus//
                masterValues.allBuff["rate-minus-1"].sort(function(a, b){return b[0] - a[0]});
                masterValues.allBuff["rate-minus-1"].splice(1);
                let totalPlus = masterValues.allBuff["rate-plus-1"].flat(2).reduce((a, b) => a + b, 0);
                let totalMinus = masterValues.allBuff["rate-minus-1"].flat(2).reduce((a, b) => a + b, 0);
                //console.log(totalMinus,totalPlus);
                if (totalMinus >= totalPlus){
                    masterValues.allBuff["rate-plus-1"] = [[[0]]];
                    masterValues.allBuff["rate-minus-1"] = [[[totalMinus-totalPlus]]];
                } else if (totalMinus < totalPlus){
                    masterValues.allBuff["rate-plus-1"] = [[[totalPlus-totalMinus]]];
                    masterValues.allBuff["rate-minus-1"] = [[[0]]];
                }
            }
        } else if (masterValues.allBuff["rate-minus-1"] !== undefined){
            //only rate-minus-1//
            masterValues.allBuff["rate-minus-1"].sort(function(a, b){return b[0] - a[0]});
            masterValues.allBuff["rate-minus-1"].splice(1);
            //do nothing//
        }
        //console.log(masterValues.allBuff);
    }
    //↑ REPEAT ↑//
    if (type === ""){
        console.log("Test Value:");
        console.log(masterValues.allBuff);
    }    
    let multEffect3, addEffect3;
    if (type === "stat76"){
        multEffect3 = tempCompile(masterValues.allBuff,[1,2,20],"rate",type,true);
        //extraBuff for stat76 - skill//
        multEffect3.buff *= Number(document.getElementById("extra-"+type+"-1").value);
        multEffect3.count += 1;
        // niddra's skill curse damage up//
        if (masterValues.charaID !== 10299 && enemyConditions["37"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10299").checked){
            multEffect3.buff *= 130;
            multEffect3.count += 1;
        }
        // christmas lupche' skill damage up//
        if (masterValues.charaID !== 10225 && enemyConditions["33"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10225").checked){
            multEffect3.buff *= 130;
            multEffect3.count += 1;
        }
        //melissa's poison damage up//
        if (enemyConditions["25"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherSkill10037").checked){
            multEffect3.buff *= 110;
            multEffect3.count += 1;
        }
        //ameri's troublesome effect//
        if (masterValues.charaID === 10024 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 180;
            multEffect3.count += 1;
        } else if (masterValues.charaID === 10024 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 210;
            multEffect3.count += 1;
        } else {}
        //yasome's troublesome effect//
        if (masterValues.charaID === 10174 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 200;
            multEffect3.count += 1;
        } else if (masterValues.charaID === 10174 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 250;
            multEffect3.count += 1;
        } else {}
        //piperi's troublesome effect//
        if (masterValues.charaID === 10268 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 150;
            multEffect3.count += 1;
        } else if (masterValues.charaID === 10268 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 180;
            multEffect3.count += 1;
        } else {}
        //makomo's troublesome effect//
        if (masterValues.charaID === 10233 && selfConditions["26"] === 0 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 300;
            multEffect3.count += 1;
        } else if (masterValues.charaID === 10233 && selfConditions["26"] === 1 && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 360;
            multEffect3.count += 1;
        } else {}
        //dhirio's poison damage up//
        if (masterValues.charaID !== 10067 && enemyConditions["25"] === 1 && enemyConditions["12"] === 1 && document.getElementById("otherPassive10067").checked){
            multEffect3.buff *= 110;
            multEffect3.count += 1;
        }
        //lapis' skill damage up//
        if (masterValues.charaID !== 10139 && document.getElementById("otherSkill10139").checked){
            multEffect3.buff *= 130;
            multEffect3.count += 1;
        }
        //lulu's unique weapon//
        if (masterValues.charaID !== 10046 && document.getElementById("otherUnique10046").checked){
            multEffect3.buff *= 110;
            multEffect3.count += 1;
        }
        //anyaku
        if (selfConditions["1006"]===7 && (subskillID_1 === 103 || subskillID_2 === 103) && document.getElementById('enemybackattack').checked){
            multEffect3.buff *= 120;
            multEffect3.count += 1;
        }
        //berserk ACT
        if (selfConditions["34"]===1 && selfConditions["1007"]===11035){
            multEffect3.buff *= 150;
            multEffect3.count += 1;
        }
        //rupupu and tantal
        if (document.getElementById('otherSkill10248-1').checked){
            multEffect3.buff *= 130;
            multEffect3.count += 1;
        }
        //promestein's self healing buff for fire/light allies
        if (document.getElementById("charaSpecific10244-1").checked){
            multEffect3.buff *= 130;
            multEffect3.count += 1;
        }
        //summer narcepafne's self healing buff for water allies
        if (document.getElementById("charaSpecific10287-1").checked){
            multEffect3.buff *= 120;
            multEffect3.count += 1;
        }
        addEffect3 = {"buff":0,"count":1};
    } else {
        multEffect3 = tempCompile(masterValues.allBuff,[1,20],"rate",type);
        addEffect3 = tempCompile(masterValues.allBuff,[1,20],"actual",type);
    }
    //skill - stat193//
    if (type === "stat193"){
        //bridal yasefa's crit rate buff
        if (masterValues.charaID !== 10281 && masterValues.unitcard.element === 4 && document.getElementById("otherSkill10281").checked){
            addEffect3.buff += 20;
        }
        //usuko's reworked crit buff//
        if (masterValues.charaID !== 10185 && (document.getElementById("otherPassive10185-2").value === "deploy"||document.getElementById("otherPassive10185-2").value === "skill")){
            addEffect3.buff += 25;
        }
    }
    //skill - stat191//
    if (type === "stat191"){
        //kulkuri's wrong trait correction, might add it to the py file in future
        if (masterValues.charaID === 10273){
            addEffect3.buff -= 5;
        }
        //kulkuri's trap token buff
        if (true) {
            addEffect3.buff += 5 * Number(document.getElementById("otherPassive10273-1").value);
        }
        //yuurei ameri's youkai crit buff
        if (document.getElementById("otherPassive10290-1").checked && youkaiCharas.includes(masterValues.charaID)){
            addEffect3.buff += 9 * Number(document.getElementById("otherPassive10290-2").value);
        } else if (youkaiCharas.includes(masterValues.charaID)){
            addEffect3.buff += 7 * Number(document.getElementById("otherPassive10290-2").value);
        }
        //bridal yasefa's crit rate buff
        if (masterValues.charaID !== 10281 && masterValues.unitcard.element === 4 && document.getElementById("otherSkill10281").checked){
            addEffect3.buff += 20;
        }
        //ala's enemy attack stacking buff//
        if (masterValues.charaID === 10091 && document.getElementById("skill-alt-select").value === "0"){
            addEffect3.buff += 5 * Number(document.getElementById("charaSpecific10091-1").value);
        }
        //sylphine's crit buff//
        if (masterValues.charaID !== 10005 && document.getElementById("otherPassive10005").checked){
            addEffect3.buff += 20;
        }
        //usuko's reworked crit buff//
        if (masterValues.charaID !== 10185 && document.getElementById("otherPassive10185-1").checked){
            if (document.getElementById("otherPassive10185-2").value === "deploy"){
                addEffect3.buff += 32;
            } else if (document.getElementById("otherPassive10185-2").value === "skill"){
                addEffect3.buff += 64;
            }
        } else if (masterValues.charaID !== 10185){
            if (document.getElementById("otherPassive10185-2").value === "deploy"){
                addEffect3.buff += 25;
            } else if (document.getElementById("otherPassive10185-2").value === "skill"){
                addEffect3.buff += 50;
            }
        }
    }
    //skill - stat194//
    if (type === "stat194"){

    }
    //skill - stat192//
    if (type === "stat192"){
        //kulkuri's wrong trait correction, might add it to the py file in future
        if (masterValues.charaID === 10273){
            addEffect3.buff -= 10;
        }
        //kulkuri's trap token buff
        if (true) {
            addEffect3.buff += 10 * Number(document.getElementById("otherPassive10273-1").value);
        }
        //piperi's on crit buff
        if (masterValues.charaID === 10268){
            addEffect3.buff += 5 * Number(document.getElementById("charaSpecific10268-1").value);
        }
        //christmas recliff's skill ally buff//
        if (masterValues.charaID !== 10217 && document.getElementById("otherSkill10217").checked){
            addEffect3.buff += 30;
        }
        //ala's enemy attack stacking buff//
        if (masterValues.charaID === 10091 && document.getElementById("skill-alt-select").value === "0"){
            addEffect3.buff += 8 * Number(document.getElementById("charaSpecific10091-1").value);
        }
    }
    //skill - stat8//
    if (type === "stat8"){
        //christmas recliff's permanent buff//
        if (masterValues.charaID === 10217){
            addEffect3.buff += 5 * Number(document.getElementById("charaSpecific10217-1").value);
        }
        //garden petra's permanent buff//
        if (masterValues.charaID === 10218){
            addEffect3.buff += 40 * Number(document.getElementById("charaSpecific10218-1").value);
        }
    }
    //skill - stat7//
    if (type === "stat7"){
        //panie's skill buff//
        if (document.getElementById("shared23001-1").checked){
            multEffect3.buff -= 10;
        }
        //ticca
        if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked && document.getElementById("otherPassive10300-2").checked){
            multEffect3.buff -= 20;
        } else if (masterValues.charaID !== 10300 && document.getElementById("otherPassive10300-1").checked) {
            multEffect3.buff -= 10;
        }
        //reworked yasefa
        if (masterValues.charaID !== 10127 && document.getElementById("otherSkill10127").checked && masterValues.unitcard.element === 4){
            multEffect3.buff -= 50;
        }
        //syir
        if (masterValues.charaID !== 10254 && document.getElementById("otherSkill10254").checked){
            multEffect3.buff -= 20;
        }
        //chizane
        if (masterValues.charaID === 10208){
            multEffect3.buff -= 10 * Math.floor(Number(document.getElementById("charaSpecific10208-1").value)/10);
        }
        //margel's token buff
        if (selfConditions["1006"]===4||selfConditions["1006"]===5||selfConditions["1006"]===6||selfConditions["1006"]===7||selfConditions["1006"]===8){
            multEffect3.buff -= 10 * document.getElementById("shared22003").value;
        }
        //sports argyro's PAD buff
        if (masterValues.charaID !== 10202){
            let attacks202 = Number(document.getElementById("otherPassive10202-2").value);
            let PADbuff202 = Number(document.getElementById("otherPassive10202-1").value);
            multEffect3.buff -= attacks202*PADbuff202;
        } else if (masterValues.charaID === 10202){
            if (masterValues.charaAwaked){
                multEffect3.buff -= 40 * Number(document.getElementById("charaSpecific10202-1").value);
            } else {
                multEffect3.buff -= 30 * Number(document.getElementById("charaSpecific10202-1").value);
            }
        }
        //kyou's wind ally PAD buff
        if (masterValues.charaID !== 10157 && document.getElementById("otherSkill10157").checked && masterValues.unitcard.element === 4){
            multEffect3.buff -= 25;
        }
        //kokonoha's PAD buff
        if (masterValues.charaID !== 10171 && document.getElementById("otherSkill10171").checked){
            multEffect3.buff -= 50;
        }
        //osevia's PAD buff
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            multEffect3.buff -= 50;
        }
        //aerial//
        if (selfConditions["1007"] === 16025 && selfConditions["2"] === 0){
            multEffect3.buff -= 20 * Number(document.getElementById("charaSpecific16021-1").value);
        }
    }
    //skill - stat5//
    if (type === "stat5"){
        //shinatsu's movSpd buff
        if (masterValues.charaID !== 10207){//practical reasons, omit self buff for dps
            if (document.getElementById("otherPassive10207-1").checked){
                addEffect3.buff += 75 * Number(document.getElementById("otherPassive10207-2").value);
            } else {
                addEffect3.buff += 60 * Number(document.getElementById("otherPassive10207-2").value);
            } 
        }
    }
    //skill - stat4//
    if (type === "stat4"){
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect3.buff += 180;
            } else {addEffect3.buff += 150;}
        }
        //arge's sorcery drone
        if (true){
            multEffect3.buff += 5 * Number(document.getElementById("shared22004").value);
        }
        //soleia's permanent buff//
        if (masterValues.charaID === 10082){
            multEffect3.buff += 30 * document.getElementById("charaSpecific10082-1").value;
        }
    }
    //skill - stat3//
    if (type === "stat3"){
        //osevia's earth tile buff (for other allies)
        if (masterValues.charaID !== 10277 && selfConditions["1010"].includes(7) && document.getElementById("otherPassive10277-1").checked){
            if (document.getElementById("otherPassive10277-2").checked){
                multEffect3.buff += 25;
            } else {
                multEffect3.buff += 20;
            }
        }
        //rotona's unique weapon buff
        if(masterValues.charaID === 10056 && document.getElementById("unique-equip-check").checked){
            multEffect3.buff += 30 * Number(document.getElementById("charaSpecific10056-2").value);
        }
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect3.buff += 180;
            } else {addEffect3.buff += 150;}
        }
        //arge's sorcery drone
        if (true){
            multEffect3.buff += 5 * Number(document.getElementById("shared22004").value);
        }
        //melon's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10041){
            addEffect3.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //soleia's permanent buff//
        if (masterValues.charaID === 10082){
            multEffect3.buff += 30 * document.getElementById("charaSpecific10082-1").value;
        }
        //rin's unique weapon buff
        if (true){ //vile is exception, since healer, no need to set individual (practicality)
            multEffect3.buff += 10 * Number(document.getElementById("otherUnique10006-1").value);
        }
        //tamamo's stat 3 dependent buff (passive)
        if (masterValues.charaID !== 10148 && !document.getElementById("otherPassive10148-1").checked){
            addEffect3.buff += Math.floor(30 * Number(document.getElementById("otherPassive10148-2").value) /100);
        } else if (masterValues.charaID !== 10148 && document.getElementById("otherPassive10148-1").checked){
            addEffect3.buff += Math.floor(40 * Number(document.getElementById("otherPassive10148-2").value) /100);
        }
        //mealus' map buff//
        if (masterValues.charaID !== 10103){
            if (document.getElementById("otherSkill10103").checked){
                multEffect3.buff += [100,112,125,137,150][Number(document.getElementById("level10103").value)-1];
            }
        }
        //logica's permanent buffs - skill 1//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect3.buff += [20,22,25,27,30][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //logica's permanent buffs - skill 2//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "0"){
            multEffect3.buff += [7,8,9,10,11][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
    }
    //skill - stat2//
    if (type === "stat2"){
        //panie's skill buff//
        if (document.getElementById("shared23001-1").checked){
            multEffect3.buff += [40,42,45,47,48,50,52,55,57,60][Number(document.getElementById("shared23001-2").value)-1];
        }
        //lapinus' enemy defeat buff//
        if (masterValues.charaID === 10302){
            if (selfConditions["26"] === 0){
                multEffect3.buff += 10 * Number(document.getElementById("charaSpecific10302-1").value);
            } else {
                multEffect3.buff += 15 * Number(document.getElementById("charaSpecific10302-1").value);
            }
        }
        //polpe's enemy defeat buff//
        if (masterValues.charaID === 10197){
            multEffect3.buff += 9 * Number(document.getElementById("charaSpecific10197-1").value);
        }
        //obscalite's self atk buff based on no of allies
        if (masterValues.charaID === 10241){
            multEffect3.buff += 10 * Number(document.getElementById("charaSpecific10241-1").value);
        }
        //summer narcepafne's stat1 dependent buff (base HP)
        if (masterValues.charaID === 10287){
            addEffect3.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //osevia's skill attack buff (for other allies)
        if (masterValues.charaID !== 10277 && document.getElementById("otherSkill10277").checked){
            multEffect2.buff += 30;
        }
        //nanae's youkai buff
        if (masterValues.charaID !== 10289 && youkaiCharas.includes(masterValues.charaID)){
            addEffect3.buff += Math.floor(20 * Number(document.getElementById("otherPassive10289-1").value) /100);
        }
        //bridal darcy's attack steal buff
        if (masterValues.charaID === 10280){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(2 * Number(document.getElementById("charaSpecific10280-1").value) / 100);
            } else {
                addEffect3.buff += Math.floor(3 * Number(document.getElementById("charaSpecific10280-1").value) / 100);
            }
        }
        //lucitani
        if (masterValues.charaID !== 10275){
            addEffect3.buff += Math.floor(Number(document.getElementById("otherSkill10275-1").value) * Number(document.getElementById("otherSkill10275-2").value) / 100);
        } else if (masterValues.charaID === 10275 && masterValues.charaAwaked){
            multEffect3.buff += 60 * Number(document.getElementById("charaSpecific10275-1").value);
        } else {
            multEffect3.buff += 50 * Number(document.getElementById("charaSpecific10275-1").value);
        }
        //school lico's token buff
        if (true){
            multEffect3.buff += 12 * document.getElementById("shared22005").value;
        }
        //school bunko's youkai buff
        if (document.getElementById("otherPassive10264-1").checked&&youkaiCharas.includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10264-2").checked){
                addEffect3.buff += 180;
            } else {addEffect3.buff += 150;}
        }
        //school bunko's buff on attack
        if (true){
            addEffect3.buff += Math.floor(9 * Number(document.getElementById("otherPassive10264-3").value) * Number(document.getElementById("otherPassive10264-4").value) / 100);
        }
        //promestein's atk increase on heal buff
        if (document.getElementById("otherPassive10244-1").checked){
            addEffect2.buff += Math.floor(50 * Number(document.getElementById("otherPassive10244-2").value) * Number(document.getElementById("otherPassive10244-3").value) / 100);
        } else {
            addEffect2.buff += Math.floor(40 * Number(document.getElementById("otherPassive10244-2").value) * Number(document.getElementById("otherPassive10244-3").value) / 100);
        }
        //vanilla's attack steal buff
        if (masterValues.charaID === 10246){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(4 * Number(document.getElementById("charaSpecific10246-1").value) / 100);
            } else {
                addEffect3.buff += Math.floor(6 * Number(document.getElementById("charaSpecific10246-1").value) / 100);
            }
        }
        //rogdanno's stat1 dependent buff (base HP)
        if (masterValues.charaID === 10230){
            addEffect3.buff += Math.floor(50 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //elter's atk buff
        if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked && document.getElementById("otherPassive10220-2").checked){
            multEffect3.buff += 40;
        } else if (masterValues.charaID !== 10220 && document.getElementById("otherPassive10220-1").checked){
            multEffect3.buff += 30;
        }
        //arge's sorcery drone
        if (masterValues.unitcard.element === 5) {
            multEffect3.buff += 8 * Number(document.getElementById("shared22004").value);
        }
        //idol ather's ally buff
        if (masterValues.charaID !== 10239){
            addEffect3.buff += Math.floor(40 * Number(document.getElementById("otherSkill10239-1").value) /100);
        }
        //idol ather's self buff
        if (masterValues.charaID === 10239){
            multEffect3.buff += 40;
        }
        //arge's wait buff
        if (masterValues.charaID === 10238){
            multEffect3.buff += 10 * Number(document.getElementById("charaSpecific10238-1").value);
        }
        //choco airen's stat3 dependent buff
        if (masterValues.charaID === 10235){
            addEffect3.buff += Math.floor(50 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
        }
        //elute's unique weapon buff
        if (masterValues.charaID === 10061 && document.getElementById("unique-equip-check").checked){
            multEffect3.buff += 20 * document.getElementById("charaSpecific10061-1").value;
        }
        //margel's token buff
        if (true){
            multEffect3.buff += 10 * document.getElementById("shared22003").value;
        }
        //pyuli's fire tile buff (for other allies)
        if (masterValues.charaID !== 10153 && selfConditions["1010"].includes(2)){
            if (document.getElementById("otherPassive10153-1").value === "skill"){
                multEffect3.buff += 12;
            } else if (document.getElementById("otherPassive10153-1").value === "deploy"){
                multEffect3.buff += 6;
            }
        }
        //pyuli's fire tile buff (for self, corrected)
        else if (masterValues.charaID === 10153 && selfConditions["1010"].includes(2)){
            multEffect3.buff += 6; //because the cycleTalents already capture +6%, skill need to make up to +12%
        }
        //ny soleia's permanent buff//
        if (masterValues.charaID === 10228){
            multEffect3.buff += 40 * document.getElementById("charaSpecific10228-1").value;
        }
        //kokonoha's youkai dependent buff
        if (document.getElementById("otherPassive10171-1").checked){
            addEffect3.buff += 160 * Number(document.getElementById("otherPassive10171-2").value);
        }
        //hagane's attack count buff
        if (masterValues.charaID === 10172){
            multEffect3.buff += 2 * Number(document.getElementById("charaSpecific10172-1").value);
        }
        //platina's enemy defeat buff
        if (masterValues.charaID === 10026 && document.getElementById("skill-alt-select").value === "0"){
            addEffect3.buff += 100 * Number(document.getElementById("charaSpecific10026-1").value);
        }
        //darcy's attack steal buff
        if (masterValues.charaID === 10205){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(4 * Number(document.getElementById("charaSpecific10205-1").innerHTML) / 100);
            } else {
                addEffect3.buff += Math.floor(5 * Number(document.getElementById("charaSpecific10205-1").innerHTML) / 100);
            }
        }
        //gneiss' stat3 dependent buff
        if (masterValues.charaID === 10118){
            addEffect3.buff += Math.floor(70 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
        }
        //melon's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10041){
            addEffect3.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //narcepafne's trait stat1 dependent buff (base HP)
        if (masterValues.charaID === 10079){
            addEffect3.buff += Math.floor(6 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) / 100);
        }
        //lagos' unique weapon buff
        if (masterValues.charaID === 10044){
            if (document.getElementById("unique-equip-check").checked){
                multEffect3.buff += 30 * Number(document.getElementById("charaSpecific10044-1").value);
            }
        }
        //silva's unique weapon stat1 dependent buff (base HP)
        if (masterValues.charaID === 10016){
            if (document.getElementById("unique-equip-check").checked){
                addEffect3.buff += Math.floor(3 * Number(document.getElementById("dps-output-menu-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            }
        }
        //sports nigru's stat 2 dependent buff (passive)
        if (masterValues.charaID !== 10203 && !document.getElementById("otherPassive10203-1").checked){
            addEffect3.buff += Math.floor(50 * Number(document.getElementById("otherPassive10203-2").value) /100);
        } else if (masterValues.charaID !== 10203 && document.getElementById("otherPassive10203-1").checked){
            addEffect3.buff += Math.floor(60 * Number(document.getElementById("otherPassive10203-2").value) /100);
        }
        //marshlowa's goblin buff
        if ([10004,10032,10179].includes(masterValues.charaID)){
            if (document.getElementById("otherPassive10179-1").checked){
                multEffect3.buff += 7 * Number(document.getElementById("otherPassive10179-2").value);
            }
        }
        //marshlowa's goblin buff on skill
        if ([10004,10032,10179].includes(masterValues.charaID)){
            if (document.getElementById("otherSkill10179").checked){
                multEffect3.buff += [40,50,60,70,80][Number(document.getElementById("level10179").value)-1];
            }
        }
        //summer diffnilla's stat1 dependent buff
        if (masterValues.charaID === 10196){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(9 * Number(document.getElementById("dps-output-skill-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            } else {
                addEffect3.buff += Math.floor(12 * Number(document.getElementById("dps-output-skill-value-stat1").innerHTML) * Number(document.getElementById("shared20002").value) / 10000);
            }
        }
        //chika's stat3 dependent buff on skill
        if (masterValues.charaID === 10160){
            let multiplier10160 = [0,50,55,60,65,70];
            addEffect3.buff += Math.floor(multiplier10160[Number(document.getElementById("skill-level-select").value)] * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
        }
        //poisonRin's poison dispel buff
        if (masterValues.charaID === 10178 && masterValues.charaAwaked){
            multEffect3.buff += 12 * Number(document.getElementById("charaSpecific10178-1").value);
        } else if (masterValues.charaID === 10178){
            multEffect3.buff += 9 * Number(document.getElementById("charaSpecific10178-1").value);
        }
        //headia's enemy defeat buff
        if (masterValues.charaID === 10147){
            multEffect3.buff += 6 * Number(document.getElementById("charaSpecific10147-1").value);
        }
        //santa miteras' stat 2 dependent buff (passive)
        if (masterValues.charaID !== 10137 && !document.getElementById("otherPassive10137-1").checked){
            addEffect3.buff += Math.floor(20 * Number(document.getElementById("otherPassive10137-2").value) /100);
        } else if (masterValues.charaID !== 10137 && document.getElementById("otherPassive10137-1").checked){
            addEffect3.buff += Math.floor(25 * Number(document.getElementById("otherPassive10137-2").value) /100);
        }
        //yasefa's token buff
        if (selfConditions["1002"] === 4){
            multEffect3.buff += 30 * Number(document.getElementById("shared22002").value);
        }
        //mithrena's stat3 dependent buff
        if (masterValues.charaID === 10112){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(40 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
            } else {
                addEffect3.buff += Math.floor(52 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
            }
        }
        //danadilly's fairy count buff
        if (masterValues.charaID === 10111){
            if (selfConditions["26"] === 0)
                multEffect3.buff += 20 * Number(document.getElementById("charaSpecific10111-1").value);
            else {
                multEffect3.buff += 25 * Number(document.getElementById("charaSpecific10111-1").value);
            }
        }
        //lico's token buff
        if (!document.getElementById("shared22001-1").checked){
            multEffect3.buff += 15 * Number(document.getElementById("shared22001-2").value);   
        } else if (document.getElementById("shared22001-1").checked){
            multEffect3.buff += 18 * Number(document.getElementById("shared22001-2").value);
        }
        //airen's stat3 dependent buff
        if (masterValues.charaID === 10101){
            if (selfConditions["26"] === 0){
                addEffect3.buff += Math.floor(50 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
            } else {
                addEffect3.buff += Math.floor(65 * Number(document.getElementById("dps-output-skill-value-stat3").innerHTML) / 100);
            }
        }
        //logica's permanent buffs - skill 1//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect3.buff += [10,11,12,13,15][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //logica's permanent buffs - skill 2//
        if (masterValues.charaID === 10098 && document.getElementById("skill-alt-select").value === "0"){
            multEffect3.buff += [2,3,4,5,6][Number(document.getElementById("skill-level-select").value)-1] * document.getElementById("charaSpecific10098-1").value;
        }
        //veratu's buffs//
        if (masterValues.charaID === 10083 && selfConditions["26"] === 1){
            multEffect3.buff += 37 * Number(document.getElementById("charaSpecific10083-1").value);
            multEffect3.buff += 30 * Number(document.getElementById("charaSpecific10083-2").value);
        } else if (masterValues.charaID === 10083 && selfConditions["26"] === 0){
            multEffect3.buff += 30 * Number(document.getElementById("charaSpecific10083-1").value);
            multEffect3.buff += 30 * Number(document.getElementById("charaSpecific10083-2").value);
        }
        //vile's atk up buff//
        if (true){ //vile is exception, since healer, no need to set individual (practicality)
            if (document.getElementById("otherSkill10070").checked){
                multEffect3.buff += [5,10,15,20,25,30,35,40,45,50][Number(document.getElementById("level10070").value)-1];
            }
        }
        //kobold buff -- bow and pent//
        if ((masterValues.charaID === 10060||masterValues.charaID === 10121) && document.getElementById("otherPassive10060").checked){
            multEffect3.buff += 15;
        }
        if ((masterValues.charaID === 10060||masterValues.charaID === 10121) && document.getElementById("otherPassive10121").checked){
            multEffect3.buff += 20;
        }
        //amirami's permanent buff//
        if (masterValues.charaID === 10047){
            multEffect3.buff += 5 * Number(document.getElementById("charaSpecific10047-1").value);
        }
        //acqua's permanent buff//
        if (masterValues.charaID === 10043){
            multEffect3.buff += 10 * Number(document.getElementById("charaSpecific10043-1").value);
        }
        //orc rage effect -- podel and diffnilla//
        if (document.getElementById("charaSpecific10011-1").checked || selfConditions["2000"] <= 25 && masterValues.charaID === 10011){
            multEffect3.buff += 25;
        } else if (document.getElementById("charaSpecific10039-1").checked || selfConditions["2000"] <= 25 && masterValues.charaID === 10039){
            multEffect3.buff += 50;
        }
        //chase assassin//
        if (selfConditions["1007"] === 16014 && selfConditions["2"] === 0){
            multEffect3.buff += 50 * Number(document.getElementById("charaSpecific16011-1").value);
        }
        //phantom//
        if (selfConditions["1007"] === 16015 && selfConditions["2"] === 0){
            multEffect3.buff += 70 * Number(document.getElementById("charaSpecific16011-1").value);
        }
        //arcane mage//
        if (selfConditions["1007"] === 14015 && selfConditions["2"] === 0){
            multEffect3.buff += 10 * Number(document.getElementById("charaSpecific14011-1").value);
        }
    }
    //skill - stat1//
    if (type === "stat1"){
        //lumivael's self hp buff based on no of allies
        if (masterValues.charaID === 10276){
            multEffect3.buff += 15 * Number(document.getElementById("charaSpecific10276-1").value);
        }
        //promestein skill hp buff
        if (document.getElementById("otherSkill10244-1").checked && masterValues.charaID !== 10244){
            multEffect3.buff += 30;
        }
        //demolish ACT
        if (selfConditions["34"]===1 && selfConditions["1007"]===12025){
            multEffect3.buff += 50;
        }
        //margel's token buff
        if (selfConditions["1006"]===2||selfConditions["1006"]===3){
            multEffect3.buff += 10 * document.getElementById("shared22003").value;
        }
        //ny soleia's permanent buff//
        if (masterValues.charaID === 10228){
            multEffect3.buff += 40 * document.getElementById("charaSpecific10228-1").value;
        }
        //summer diffnilla's permanent buff//
        if (masterValues.charaID === 10196){
            multEffect3.buff += 20 * Number(document.getElementById("charaSpecific10196-1").value);
        }
        //headia's enemy defeat buff
        if (masterValues.charaID === 10147){
            multEffect3.buff += 6 * Number(document.getElementById("charaSpecific10147-1").value);
        }
        //asta's permanent buff//
        if (masterValues.charaID === 10029 && document.getElementById("skill-alt-select").value === "10000"){
            multEffect3.buff += 20 * Number(document.getElementById("charaSpecific10029-1").value);
        }
    }
    //attribute tile effects//
    if (selfConditions["1010"].includes(masterValues.unitcard.element)){
        if ([10005,10008,10010,10012,10080,10157].includes(masterValues.charaID)){
            //console.log("attribute tile double effect!");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect3.buff += 30;
            } else if (type === "stat8"){multEffect3.buff+=10} else {}
        }
        if (masterValues.charaID !== 10209 && fireCharas.includes(masterValues.charaID) && (document.getElementById("otherPassive10209-1").checked || document.getElementById("otherPassive10209-2").checked)){
            //console.log("attribute tile triple effect!(not self)");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect3.buff += 60;
            } else if (type === "stat8"){multEffect2.buff+=20} else {}
        }
        //elemental boost attribute tile x1.5//
        if (subskillID_1 === 51 || subskillID_2 === 51){
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect3.buff += 15; //if 7.5 gives problems then 8
            } else if (type === "stat8"){multEffect3.buff+=5} else {}
        }
    }
    //when attribute tile is not selected, or attribute doesn't match -- only skill//
    if (!(selfConditions["1010"].includes(masterValues.unitcard.element))){
        if ([10209].includes(masterValues.charaID)){
            //console.log("attribute tile triple effect guaranteed during skill!");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect3.buff += 90;
            } else if (type === "stat8"){multEffect3.buff+=30} else {}
        } 
    }
    //yano's attribute tile//
    if ([10188].includes(masterValues.charaID)){
        if (!(document.getElementById("shared20001-1").checked && document.getElementById("shared20001-2").value == masterValues.unitcard.element)){
            //console.log("simulated attibute tile");
            if (["stat2","stat3","stat4"].includes(type)){
                multEffect3.buff += 30;
            } else if (type === "stat8"){multEffect3.buff+=10} else {}
        } else {}
    }
    //other allies' skills
    multEffect3.buff += allAlliesSkillRate(type); //timing must be 1
    //extrabuffs
    try {
        if (type === "stat6" || type === "stat76"){} else {
            multEffect3.buff += Number(document.getElementById("extra-"+type+"-1").value);
            addEffect3.buff += Number(document.getElementById("extra-"+type+"-2").value);
        }
    } catch (err) {}
    try {
        //supporters
        addEffect3.buff += Number(document.getElementById("supporter-buff-value-"+type).value)
    } catch (err) {}
    //tactics
    if (type === "stat3"){
        multEffect3.buff += Number(document.getElementById("shared21001").value)*4;
    } else {}
    //shizanketsuga
    if (type === "stat2" && (subskillID_1 === 100 || subskillID_2 === 100)){
        multEffect3.buff += Number(document.getElementById("shared21002").value)*1;
    }
    //kitaru fukuonna
    if (type === "stat7" && (subskillID_1 === 155 || subskillID_2 === 155)){
        multEffect3.buff -= 10 * Number(document.getElementById("shared21003").value);
    }
    //sen'i keishou
    if (type === "stat2"){
        multEffect3.buff += 100 * Number(document.getElementById("shared21004").value);
    }
    //aSpd debuff limit
    if (type === "stat6"){
        if (multEffect3.buff < 50){multEffect3.buff=50}
    }
    ///console.log("multEffect3: "+multEffect3);
    ///console.log(multEffect3);
    ///console.log("addEffect3: "+addEffect3);
    ///console.log(addEffect3);
    let outputSkill = Math.floor(outputMenu * multEffect3.buff / 100**(multEffect3.count)) + Math.floor(addEffect3.buff);
    if (["stat8","stat76"].includes(type)){
        if (outputSkill < 0){outputSkill = 0;}
    }
    else if (["stat7"].includes(type)){
        if (outputSkill < lowerStat){outputSkill = lowerStat;}
    }
    else if (outputSkill < lowerStat){
        outputSkill = lowerStat;
    } else if (outputSkill > upperStat){
        outputSkill = upperStat;
    } else {/*within lower and upper - OK*/}
    //check for FIXED
    for (let key in masterValues.allBuff){
        if (key.includes("fixed")){
            if (type === "stat86" && masterValues.allBuff[key][0][1][0] !== 100){}
            else {outputSkill = masterValues.allBuff[key][0][0][0];}
        }
    }
    //critical max checking//
    if (type === "stat191"){
        if (outputSkill >= Number(document.getElementById("dps-output-skill-value-stat193").innerHTML)){
            outputSkill = Number(document.getElementById("dps-output-skill-value-stat193").innerHTML);
            document.getElementById("dps-output-skill-value-stat191").style.color = "red";
        } else {
            document.getElementById("dps-output-skill-value-stat191").style.color = "";
        }
    }
    if (type === "stat192"){
        if (outputSkill >= Number(document.getElementById("dps-output-skill-value-stat194").innerHTML)){
            outputSkill = Number(document.getElementById("dps-output-skill-value-stat194").innerHTML);
            document.getElementById("dps-output-skill-value-stat192").style.color = "red";
        } else {
            document.getElementById("dps-output-skill-value-stat192").style.color = "";
        }
    }
    //marshlowa's goblin fixed PAD
    if (type === "stat7" && [10004,10032,10179].includes(masterValues.charaID)){
        if (document.getElementById("otherSkill10179").checked){
            outputSkill = 10;
        }
    }
    //PAD minimum 1 frame//
    if (["stat7"].includes(type)){
        if (outputSkill <= 0){outputSkill = 1;}
    }
    //missile override//
    if (type === "stat19"){
        try {
            let missile = masterValues.allBuff["fixed-none-1"][0][0][0];
            let missileObject = missile_data["table"][missile_data["table"].findIndex(object => {return object.missileId === missile})];
            if (missileObject.landHitType === 1){
                document.getElementById("dps-output-skill-value-stat22").innerHTML = "物理";
            } else if (missileObject.landHitType === 2){
                document.getElementById("dps-output-skill-value-stat22").innerHTML = "魔法";
            } else {//landhittype 3
                document.getElementById("dps-output-skill-value-stat22").innerHTML = "貫通";
            }
        } catch (err) {
            //console.log("no missile");
        }
    }
    //drake igni override//
    if (masterValues.charaID === 10209){
        if (masterValues.language === "ja"){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "魔法";
        } else if (masterValues.language === "en"){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "Magical";
        }
    }
    //letia override//
    if (masterValues.charaID === 10017){
        if (masterValues.language === "ja" && document.getElementById("charaSpecific10017-1").checked && document.getElementById("skill-alt-select").value === "0"){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "貫通";
        } else if (masterValues.language === "en" && document.getElementById("charaSpecific10017-1").checked && document.getElementById("skill-alt-select").value === "0"){
            document.getElementById("dps-output-skill-value-stat22").innerHTML = "Penetrate";
        }
    }
    //lapis, thunderSuzu, shirotae, arge override
    if ([10139,10177,10187,10238].includes(masterValues.charaID)){
        document.getElementById("dps-output-skill-value-stat22").innerHTML = "貫通";
    }
    try {
        if (masterValues.language === "ja"){
            if (outputSkill < 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "ALL";
            } else if (type === "stat86" && outputSkill !== 0){
                document.getElementById("dps-output-skill-value-stat11").innerHTML = outputSkill;
            } else if (type === "stat21" && outputSkill === 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "攻撃しない";
            } else if (type === "stat21" && outputSkill === 3){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "遠距離";
            } else if (type === "stat21" && outputSkill === 4){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "近距離";
            } else if (type === "stat22" && outputSkill === 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "無し";
            } else if (type === "stat22" && outputSkill === 1){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "物理";
            } else if (type === "stat22" && outputSkill === 2){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "魔法";
            } else if (type === "stat22" && outputSkill === 3){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "貫通";
            } else if (type === "stat22" && outputSkill === 4){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "回復";
            } else {
            document.getElementById("dps-output-skill-value-"+type).innerHTML = outputSkill;
            }
        } else if (masterValues.language === "en"){
            if (outputSkill < 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "ALL";
            } else if (type === "stat86" && outputSkill !== 0){
                document.getElementById("dps-output-skill-value-stat11").innerHTML = outputSkill;
            } else if (type === "stat21" && outputSkill === 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "No attack";
            } else if (type === "stat21" && outputSkill === 3){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Ranged";
            } else if (type === "stat21" && outputSkill === 4){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Melee";
            } else if (type === "stat22" && outputSkill === 0){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "None";
            } else if (type === "stat22" && outputSkill === 1){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Physical";
            } else if (type === "stat22" && outputSkill === 2){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Magical";
            } else if (type === "stat22" && outputSkill === 3){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Penetrate";
            } else if (type === "stat22" && outputSkill === 4){
                document.getElementById("dps-output-skill-value-"+type).innerHTML = "Heal";
            } else {
            document.getElementById("dps-output-skill-value-"+type).innerHTML = outputSkill;
            }
        }
    } catch (error) {
        //console.log("Error-outputBattle: "+ type);
    }
    //outputSkill over//
    // ↓ Crit,Pen etc ↓ //
    
}

function tempCompile(allBuff,timingList,actualRateFixed,type,useMultiRate=false){
    //ony use for third param "rate"?
    if (actualRateFixed === "rate"){var output = 100;}
    else {var output = 0;}
    var count = 0;
    for (let key in allBuff){
        ///console.log("allbuff[key] is ",allBuff[key]);
        if (timingList.includes(Number(key.split("-")[2])) && key.split("-")[0] === actualRateFixed){
            if (actualRateFixed === "rate"){
                if (useMultiRate){
                    if (key.split("-")[1] === "plus"){
                        count += allBuff[key].length;
                        for (let i=0; i<allBuff[key].length;i++){
                            if (type === "stat76"){
                                output *= buffGet(allBuff[key][i],false,false,true);
                            } else {
                                output *= buffGet(allBuff[key][i],false,false);
                            }
                        }
                    } else if (key.split("-")[1] === "minus") {
                        count += allBuff[key].length;
                        for (let i=0; i<allBuff[key].length;i++){
                            output *= buffGet(allBuff[key][i],false,true);
                        }
                    } else {/*keysplit === none*/}
                } else {
                    count = 0;
                    if (key.split("-")[1] === "plus"){
                        for (let i=0; i<allBuff[key].length;i++){
                            output += buffGet(allBuff[key][i],true,false);
                        }
                    } else if (key.split("-")[1] === "minus"){
                        for (let i=0; i<allBuff[key].length;i++){
                            output += buffGet(allBuff[key][i],true,true);
                        }
                    } else {/*keysplit === none*/}
                }
            } else if (actualRateFixed === "actual"){
                count = -1;
                if (key.split("-")[1] === "plus"){
                    for (let i=0; i<allBuff[key].length;i++){
                        output += buffGet(allBuff[key][i],true,false);
                    }
                } else if (key.split("-")[1] === "minus") {
                    for (let i=0; i<allBuff[key].length;i++){
                        output += buffGet(allBuff[key][i],true,true);
                    }
                } else {/*keysplit === none*/}
            } else {
                //actualRateFixed is FIXED//
            }
        }
    }
    if (actualRateFixed === "rate" && useMultiRate){
        ///console.log(count);
        ///console.log("effective buff returned: ", output/100**(count+1));
    } else {}
    return {"buff": output,"count": (count+1)};
}

function buffGet(indivBuff,additive=false,minus=false,damageUp=false){
    //actual buffs are always additive
    ///console.log("indivBuff: ",indivBuff);
    if (indivBuff.length === 1) {
        ///console.log("length 1");
        ///console.log("returned value - ", typeof indivBuff[0][0], indivBuff[0][0]);
        if (damageUp) {return (indivBuff[0][0]);}
        else if (additive && minus) {return (-1*indivBuff[0][0]);}
        else if (additive){return (indivBuff[0][0]);}
        else if (minus){return (100-indivBuff[0][0]);}
        else {return (100+indivBuff[0][0]);}
    } else if (indivBuff.length === 2) {
        ///console.log("length 2");
        ///console.log("returned value - ", typeof indivBuff[0][0], indivBuff[0][0]);
        if (indivBuff[1][0] !== 0){
            console.log("buff not permanent, returning no buff");
            if (additive && minus) {return 0;}
            else if (additive){return 0;}
            else if (minus){return 100;}
            else {return 100;}
        }
        if (additive && minus) {return (-1*indivBuff[0][0]);}
        else if (additive){return (indivBuff[0][0]);}
        else if (minus){return (100-indivBuff[0][0]);}
        else {return (100+indivBuff[0][0]);}
    } else if (indivBuff.length === 3) {
        ///console.log("length 3");
        if (indivBuff[1][0] !== 0){
            console.log("buff not permanent, returning no buff");
            if (additive && minus) {return 0;}
            else if (additive){return 0;}
            else if (minus){return 100;}
            else {return 100;}
        } else if (indivBuff[2][0] === 0){
            if (additive && minus) {return (-1*indivBuff[0][0]);}
            else if (additive){return (indivBuff[0][0]);}
            else if (minus){return (100-indivBuff[0][0]);}
            else {return (100+indivBuff[0][0]);}
        } else {}
        let referenceValue = selfReference[indivBuff[2][0].toString()];
        ///console.log("referenceValue: ",referenceValue);
        let referenceValueMax = indivBuff[2][1];
        ///console.log("referenceValueMax: ",referenceValueMax);
        if (referenceValue === undefined || referenceValueMax === undefined){
            //console.log("some reference undefined, handled separately!");
            if (additive && minus) {return (0);}
            else if (additive){return (0);}
            else if (minus){return (100);}
            else {return (100);}
        }
        let toBeAdd = 0;
        if (indivBuff[2][0] === 200){
            ///console.log("ref is 200");
            if (referenceValue <= referenceValueMax) {
                toBeAdd = indivBuff[0][0];
            } else {
                toBeAdd = (indivBuff[0][0] * (100-referenceValue)/(100-referenceValueMax));
            }
        } else {
            ///console.log("ref is not 200");
            if (referenceValue >= referenceValueMax) {
                toBeAdd = indivBuff[0][0];
            } else {
                toBeAdd = (indivBuff[0][0] * referenceValue / referenceValueMax);
            }
        }
        ///console.log("returned value - ",typeof toBeAdd,toBeAdd);
        if (additive && minus) {return (-1*toBeAdd);}
        else if (additive){return (toBeAdd);}
        else if (minus){return (100-toBeAdd);}
        else {return (100+toBeAdd);}
    } else {/*console.log("length 0 or more than 3");*/}
}

//only use addWithPrevious if there is already an array
//addwithprevious only works on stats below 1000 (or stat67)
function cycleAllTalents(abilityObject,type,parseType,addWithPrevious = false,referenceEnemy=false){
    let allTalents = abilityObject["talentList"];
    for (let i=0; i<allTalents.length;i++){
        ////console.log(allTalents[i]); //probably a new talentID addition
        if (eBuffTypeParse(allTalents[i]["talentId"])[0] === type){
            ///console.log("type matches");
            let conditionRecord = {"trigger":true,"active":true};
            if (referenceEnemy){ //only for damageUp as of now, so exclude everything else//
                if (["stat76"].includes(type)){} else {conditionRecord = {"trigger":false,"active":false};}
                for (let j=0;j<allTalents[i]["triggerData"].length;j++){
                    let conditionRef = enemyConditions[allTalents[i]["triggerData"][j]["type"]];
                    for (let k=0;k<allTalents[i]["triggerData"][j]["num"].length;k++){
                        ///console.log("conditionRef: "+conditionRef);
                        ///console.log("option: "+allTalents[i]["triggerData"][j]["option"][k]);
                        ///console.log("hurdle: "+allTalents[i]["triggerData"][j]["num"][k]);
                        if (conditionalOption(conditionRef,allTalents[i]["triggerData"][j]["option"][k],allTalents[i]["triggerData"][j]["num"][k])){
                        } else {conditionRecord["trigger"]=false;}
                    }
                }
                for (let j=0;j<allTalents[i]["activeData"].length;j++){
                    let conditionRef = enemyConditions[allTalents[i]["activeData"][j]["type"]];
                    for (let k=0;k<allTalents[i]["activeData"][j]["num"].length;k++){
                        if (conditionalOption(conditionRef,allTalents[i]["activeData"][j]["option"][k],allTalents[i]["activeData"][j]["num"][k])){
                        } else {conditionRecord["active"]=false;}
                    }
                }
            } else {
                for (let j=0;j<allTalents[i]["triggerData"].length;j++){
                    let conditionRef = selfConditions[allTalents[i]["triggerData"][j]["type"]];
                    for (let k=0;k<allTalents[i]["triggerData"][j]["num"].length;k++){
                        //console.log("conditionRef: "+conditionRef);
                        //console.log("option: "+allTalents[i]["triggerData"][j]["option"][k]);
                        //console.log("hurdle: "+allTalents[i]["triggerData"][j]["num"][k]);
                        if (conditionalOption(conditionRef,allTalents[i]["triggerData"][j]["option"][k],allTalents[i]["triggerData"][j]["num"][k])){
                        } else {conditionRecord["trigger"]=false;}
                    }
                }
                for (let j=0;j<allTalents[i]["activeData"].length;j++){
                    let conditionRef = selfConditions[allTalents[i]["activeData"][j]["type"]];
                    for (let k=0;k<allTalents[i]["activeData"][j]["num"].length;k++){
                        if (conditionalOption(conditionRef,allTalents[i]["activeData"][j]["option"][k],allTalents[i]["activeData"][j]["num"][k])){
                        } else {conditionRecord["active"]=false;}
                    }
                }
            }
            ///console.log(conditionRecord);
            let range = allTalents[i]["range"];
            //edit
            if (type === "stat76"){
                if (conditionRecord.active && conditionRecord.trigger && referenceEnemy){
                    if (parseType === "skill" &&(range===4||range===5||range===6)){
                        let param,timing;
                        let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
                        let minParam = allTalents[i]["param"][0]["num"][0];
                        let maxParam = allTalents[i]["maxParam"][0]["num"][0];
                        if (maxParam === 0){maxParam = minParam} else {}
                        timing = allTalents[i]["timing"].toString();
                        param = [[Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))]];
                        try {///console.log("damageup - no addwithprevious");
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                        } catch (err) {///console.log("create new entry - damageup")
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing] = [param];
                        }
                    } else if (range===4||range===5||range===6) {///console.log("pushed to buff array - damageup");
                        let param,timing;
                        timing = allTalents[i]["timing"].toString();
                        param = [allTalents[i]["param"][0]["num"]];
                        try {///console.log("damageup - no addwithprevious");
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                        } catch (err) {///console.log("create new entry - damageup")
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing] = [param];
                        }
                    } else {/*range is 1-3*/}
                } else if (conditionRecord.active && conditionRecord.trigger){
                    if (parseType === "skill" &&(range===1||range===2||range===3)){
                        let param,timing;
                        let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
                        let minParam = allTalents[i]["param"][0]["num"][0];
                        let maxParam = allTalents[i]["maxParam"][0]["num"][0];
                        if (maxParam === 0){maxParam = minParam} else {}
                        timing = allTalents[i]["timing"].toString();
                        param = [[Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))]];
                        try {///console.log("damageup - no addwithprevious");
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                        } catch (err) {///console.log("create new entry - damageup")
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing] = [param];
                        }
                    } else if (range===1||range===2||range===3) {///console.log("pushed to buff array - damageup");
                        let param,timing;
                        timing = allTalents[i]["timing"].toString();
                        param = [allTalents[i]["param"][0]["num"]];
                        try {///console.log("damageup - no addwithprevious");
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                        } catch (err) {///console.log("create new entry - damageup")
                            masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing] = [param];
                        }
                    } else {/*range is 4-6*/}
                }
            }//edit 
            else if (conditionRecord.active && conditionRecord.trigger && (range===1||range===2||range===3)){
                ///console.log("pushed to buff array - not damageUP");
                let param,timing,param0,param1,param2;
                if (parseType === "skill"){
                    let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
                    let minParam = allTalents[i]["param"][0]["num"][0];
                    let maxParam = allTalents[i]["maxParam"][0]["num"][0];
                    if (maxParam === 0){maxParam = minParam} else {}
                    //param is parameter in stats
                    //param is chance of debuff in status
                    if (allTalents[i]["param"].length === 1){
                        timing = allTalents[i]["timing"].toString();
                        param0 = [Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))];
                        param = [param0];
                    } else if (allTalents[i]["param"].length === 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = [Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))];
                        param1 = allTalents[i]["param"][1]["num"][0];
                        param = [param0,param1];
                    } else if (allTalents[i]["param"].length > 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = [Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))];
                        param1 = allTalents[i]["param"][1]["num"][0];
                        param2 = allTalents[i]["param"][2]["num"][0];
                        param = [param0,param1,param2];
                    } else {}
                } else {
                    //not skill (as of now)
                    timing = allTalents[i]["timing"].toString();
                    if (timing === "4" && range === 3){
                        param0 = [0];
                        param = [param0];
                    } else if (allTalents[i]["param"].length === 1){
                        param0 = allTalents[i]["param"][0]["num"];
                        param = [param0];
                    } else if (allTalents[i]["param"].length === 2){
                        param0 = allTalents[i]["param"][0]["num"];
                        param1 = allTalents[i]["param"][1]["num"];
                        param = [param0,param1];
                    } else if (allTalents[i]["param"].length > 2){
                        param0 = allTalents[i]["param"][0]["num"];
                        param1 = allTalents[i]["param"][1]["num"];
                        param2 = allTalents[i]["param"][2]["num"];
                        param = [param0,param1,param2];
                    } else {}
                }//here
                ///console.log(addWithPrevious,allTalents[i]["talentId"] < 1000);
                try {
                    //fixed talent
                    if (eBuffTypeParse(allTalents[i]["talentId"])[1].split("-")[0] === "fixed"){
                        ///console.log("isFixedTalent");
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        let forError = ABarray.length; // will throw an error if ref//
                        //if here, means there is a value here
                        ///console.log("need to replace");
                        ABarray[ABarray.length-1][0] = param[0];
                    }
                    //movspd and redploy
                    else if (/*type === "stat5" ||*/ type === "stat146"){
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        //console.log("still here");
                        if (param[0] > ABarray[ABarray.length-1][0]){
                            ABarray[ABarray.length-1][0] = param[0];
                        } else {
                            //no change, param not added
                        }
                    }
                    else if (addWithPrevious && allTalents[i]["talentId"] < 1000){
                        ///console.log("addwithprevious");
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        ABarray[ABarray.length-1][0] = [Number(ABarray[ABarray.length-1][0][0]) + Number(param[0])];
                    }
                    else {
                        ///console.log("not addwithprevious");
                        masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                    }
                } catch (err) {
                    ///console.log("create new entry");
                    masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing] = [param];
                }
            } else {/*console.log("trigger or active not met")*/;}
        } else {/*console.log("type not match");*/}
        //console.log("allbuff:",masterValues.allBuff);
    }
}
function eBuffTypeParse(num){
    try {
        let bufftype = eBuffType[num];
        return bufftype;
    } catch (error) {
        //console.log("Not in object!");
    }
}

function pdMultValues(type){ //timing = 4//
    let totalPartyBuff = 100;
    for (let i=0;i<partychecks.length;i++){
        if (partychecks[i].checked){
            if (partybuffref[partychecks[i].id].cond.length == 0){
                try {
                    if (typeof partybuffref[partychecks[i].id][type][0] == "number"){
                        totalPartyBuff += partybuffref[partychecks[i].id][type][0];
                    } else {}
                } catch (err) {}
            }
            else if (partybuffref[partychecks[i].id].cond.includes(masterValues.unitcard["element"])||partybuffref[partychecks[i].id].cond.includes(masterValues.baseClass)){
                try {
                    if (typeof partybuffref[partychecks[i].id][type][0] == "number"){
                        totalPartyBuff += partybuffref[partychecks[i].id][type][0];
                    } else {}
                } catch (err) {}
            }
        }
    }
    //miteras unique weapon inclusion-exclusion//
    if ((type==="stat3"||type==="stat4") && masterValues.charaID === 10069){
        if (document.getElementById("unique10069").checked){} //if checked on partybuff, ignore uw
        else if (document.getElementById("unique-equip-check").checked){//else add uw effect here
            totalPartyBuff += 20;
        }
    }
    // princess subskills//
    if (type === "stat1" && (getAttachID("subskill1") === 119 || getAttachID("subskill2") === 119)){
        totalPartyBuff += 10;
    }
    if (type === "stat1"){//other chara's or ratzel's
        totalPartyBuff += Number(document.getElementById("partySub-1120").value) * 10;
    }
    if (type === "stat2" && (getAttachID("subskill1") === 118 || getAttachID("subskill2") === 118)){
        totalPartyBuff += 5;
    }
    if (type === "stat2"){//other chara's or ratzel's
        totalPartyBuff += Number(document.getElementById("partySub-1119").value) * 5;
    }
    //wind extend //
    if ((type==="stat1"||type==="stat2") && masterValues.unitcard["element"]===4){
        if (getAttachID("subskill1") === 129 || getAttachID("subskill2") === 129){
            totalPartyBuff += 10;
        }
        totalPartyBuff += Number(document.getElementById("partySub-1130").value) * 10;
    }
    //fire extend //
    if ((type==="stat1"||type==="stat2") && masterValues.unitcard["element"]===2){
        if (getAttachID("subskill1") === 172 || getAttachID("subskill2") === 172){
            totalPartyBuff += 10;
        }
        totalPartyBuff += Number(document.getElementById("partySub-1173").value) * 10;
    }
    //soleia's dragon buff
    if (document.getElementById("party10082").checked && (type==="stat3"||type==="stat4") && dragonCharas.includes(masterValues.charaID)){
        totalPartyBuff += 10;
        if (Number(document.getElementById("henshin-10169-select").value) === 10082){
            totalPartyBuff += 10;
        }
    }
    //ny soleia's dragon buff
    if (document.getElementById("party10228").checked && (type==="stat2") && dragonCharas.includes(masterValues.charaID)){
        totalPartyBuff += 10;
        if (document.getElementById("awake10228").checked){
            totalPartyBuff += 4;
        }
        if (Number(document.getElementById("henshin-10169-select").value) === 10228){
            totalPartyBuff += 10;
            if (document.getElementById("henshin-10169-awake").checked){
                totalPartyBuff += 4;
            }
        }
    }
    //himino's youkai buff
    if (document.getElementById("party10251").checked && type==="stat2" && youkaiCharas.includes(masterValues.charaID)){
        totalPartyBuff += 8;
        if (Number(document.getElementById("henshin-10169-select").value) === 10251){
            totalPartyBuff += 8;
        }
    }
    //perplop's alien buff
    if (document.getElementById("party10267").checked && (type==="stat1") && alienCharas.includes(masterValues.charaID)){
        totalPartyBuff += 12;
        if (document.getElementById("awake10267").checked){
            totalPartyBuff += 3;
        }
        if (Number(document.getElementById("henshin-10169-select").value) === 10267){
            totalPartyBuff += 12;
            if (document.getElementById("henshin-10169-awake").checked){
                totalPartyBuff += 3;
            }
        }
    }
    //puripurida's alien buff
    if (document.getElementById("party10269").checked && (type==="stat1"||type==="stat2") && alienCharas.includes(masterValues.charaID)){
        totalPartyBuff += 9;
        if (document.getElementById("awake10269").checked){
            totalPartyBuff += 2;
        }
        if (Number(document.getElementById("henshin-10169-select").value) === 10269){
            totalPartyBuff += 9;
            if (document.getElementById("henshin-10169-awake").checked){
                totalPartyBuff += 2;
            }
        }
    }
    //obscalite's fairy buff
    if (document.getElementById("party10241").checked && (type==="stat2") && fairyCharas.includes(masterValues.charaID)){
        totalPartyBuff += 14;
        if (document.getElementById("awake10241").checked){
            totalPartyBuff += 4;
        }
        if (Number(document.getElementById("henshin-10169-select").value) === 10241){
            totalPartyBuff += 14;
            if (document.getElementById("henshin-10169-awake").checked){
                totalPartyBuff += 4;
            }
        }
    }
    //lumivael's fairy buff
    if (document.getElementById("party10276").checked && (type==="stat1"||type==="stat2") && fairyCharas.includes(masterValues.charaID)){
        totalPartyBuff += 10;
        if (document.getElementById("awake10276").checked){
            totalPartyBuff += 3;
        }
        if (Number(document.getElementById("henshin-10169-select").value) === 10276){
            totalPartyBuff += 10;
            if (document.getElementById("henshin-10169-awake").checked){
                totalPartyBuff += 3;
            }
        }
    }
    //hokaku 1 - warrior
    if (type === "stat2" && selfConditions["1006"]==2 && (getAttachID("subskill1") === 157 || getAttachID("subskill2") === 157)){
        totalPartyBuff += 15;
    }
    if (type === "stat2" && selfConditions["1006"]==2){//other chara's or ratzel's
        totalPartyBuff += Number(document.getElementById("partySub-1158").value) * 15;
    }
    //hokaku 2 - sniper
    if (type === "stat6" && selfConditions["1006"]==4 && (getAttachID("subskill1") === 158 || getAttachID("subskill2") === 158)){
        totalPartyBuff += 15;
    }
    if (type === "stat6" && selfConditions["1006"]==4){//other chara's or ratzel's
        totalPartyBuff += Number(document.getElementById("partySub-1159").value) * 15; //might be take highest?
    }
    //↓ ratzel's partybuff copy (10169) ↓//
    let partyString = "party" + document.getElementById("henshin-10169-select").value;
    let awakeString = "awake" + document.getElementById("henshin-10169-select").value;
    let uniqueString = "unique" + document.getElementById("henshin-10169-select").value;
    if (partybuffref[partyString].cond.length == 0){
        try {
            if (typeof partybuffref[partyString][type][0] == "number"){
                totalPartyBuff += partybuffref[partyString][type][0];
            } else {}
        } catch (err) {}
    } else if (partybuffref[partyString].cond.includes(masterValues.unitcard["element"])||partybuffref[partyString].cond.includes(masterValues.baseClass)){
        try {
            if (typeof partybuffref[partyString][type][0] == "number"){
                totalPartyBuff += partybuffref[partyString][type][0];
            } else {}
        } catch (err) {}
    }
    if (document.getElementById("henshin-10169-awake").checked){
        if (partybuffref[awakeString].cond.length == 0){
            try {
                if (typeof partybuffref[awakeString][type][0] == "number"){
                    totalPartyBuff += partybuffref[awakeString][type][0];
                } else {}
            } catch (err) {}
        } else if (partybuffref[awakeString].cond.includes(masterValues.unitcard["element"])||partybuffref[awakeString].cond.includes(masterValues.baseClass)){
            try {
                if (typeof partybuffref[awakeString][type][0] == "number"){
                    totalPartyBuff += partybuffref[awakeString][type][0];
                } else {}
            } catch (err) {}
        }
    }
    if (document.getElementById("henshin-10169-unique").checked){
        try {
            if (partybuffref[uniqueString].cond.length == 0){
                try {
                    if (typeof partybuffref[uniqueString][type][0] == "number"){
                        totalPartyBuff += partybuffref[uniqueString][type][0];
                    } else {}
                } catch (err) {}
            } else if (partybuffref[uniqueString].cond.includes(masterValues.unitcard["element"])||partybuffref[uniqueString].cond.includes(masterValues.baseClass)){
                try {
                    if (typeof partybuffref[uniqueString][type][0] == "number"){
                        totalPartyBuff += partybuffref[uniqueString][type][0];
                    } else {}
                } catch (err) {}
            }
        } catch (err) {}
    }
    //↑ ratzel's partybuff copy ↑//
    ///console.log(type+"-pBuff:",totalPartyBuff);
    let totalDivineBuffMinus = 0;
    let totalDivineBuffPlus = 0;
    let divineBufftoCount = 0;
    //let totalDivineCount = document.querySelectorAll(".divine-check:checked").length;
    for (let i=0;i<divinechecks.length;i++){
        let divineCB = divinechecks[i];
        let divineLV = Number(document.getElementById("level"+divineCB.id.split("divine")[1]).value);
        //console.log(partybuffref[divineCB.id].cond)
        if (divineCB.checked){
            try{
                divineBufftoCount = partybuffref[divineCB.id][type][divineLV-1];
            } catch (err){
                divineBufftoCount = 0;
            }
            ///console.log(divineBufftoCount,totalDivineBuffPlus,totalDivineBuffMinus);
            try {
                if (partybuffref[divineCB.id].cond.length == 0 && divineBufftoCount>0 && divineBufftoCount > totalDivineBuffPlus){
                    try {
                        //console.log("plus added without condition");
                        totalDivineBuffPlus = divineBufftoCount;
                    } catch (err) {
                        //console.log("No buff")
                    }
                }
                else if (partybuffref[divineCB.id].cond.length == 0 && divineBufftoCount < 0 && divineBufftoCount < totalDivineBuffMinus){
                    try {
                        //console.log("minus added without condition");
                        totalDivineBuffMinus = divineBufftoCount;
                    } catch (err) {
                        //console.log("No buff")
                    }
                }
                else if ((partybuffref[divineCB.id].cond.includes(masterValues.unitcard["element"])||partybuffref[divineCB.id].cond.includes(masterValues.baseClass)) && divineBufftoCount>0 && divineBufftoCount > totalDivineBuffPlus){
                    try {
                        //console.log("plus added with condition");
                        //console.log(partybuffref[divineCB.id][type][divineLV-1])
                        if (typeof partybuffref[divineCB.id][type][divineLV-1] == "number"){
                            totalDivineBuffPlus = divineBufftoCount;
                        } else {
                            //not a number
                        }
                    } catch (err) {
                        //console.log("No buff")
                    }
                }
                else if ((partybuffref[divineCB.id].cond.includes(masterValues.unitcard["element"])||partybuffref[divineCB.id].cond.includes(masterValues.baseClass)) && divineBufftoCount<0 && divineBufftoCount < totalDivineBuffMinus){
                    try {
                        //console.log("minus added with condition");
                        //console.log(partybuffref[divineCB.id][type][divineLV-1])
                        if (typeof partybuffref[divineCB.id][type][divineLV-1] == "number"){
                            totalDivineBuffMinus = divineBufftoCount;
                        } else {
                            //not a number
                        }
                    } catch (err) {
                        //console.log("No buff")
                    }
                } else {
                    //console.log("condition + not met")
                }
            } catch (err) {
                //type not match
            }
        } else {}
    }
    if (type === "stat2" && document.getElementById("divine30013").checked){
        totalDivineBuffPlus += [12,13,14,15,17][Number(document.getElementById("level30013").value)-1];
    }
    ///console.log(type+"-pdBuff:",totalPartyBuff)
    ///console.log(totalPartyBuff*(100+totalDivineBuffPlus+totalDivineBuffMinus)/100);
    return totalPartyBuff*(100+totalDivineBuffPlus+totalDivineBuffMinus)/100;
}

function partyAdd(type){
    let totalPartyAddBuff = 0;
    for (let i=0;i<partychecks.length;i++){
        if (partychecks[i].checked){
            if (partybuffref[partychecks[i].id].cond.length == 0){
                try {
                    totalPartyAddBuff += Number(partybuffref[partychecks[i].id][type][0].split("a")[1]);
                } catch (err) {}
            }
            else if (partybuffref[partychecks[i].id].cond.includes(masterValues.unitcard["element"])||partybuffref[partychecks[i].id].cond.includes(masterValues.baseClass)){
                try {
                    totalPartyAddBuff += Number(partybuffref[partychecks[i].id][type][0].split("a")[1]);
                } catch (err) {}
            }
        }
    }
    return totalPartyAddBuff;
}

function divineAdd(type){
    let totalDivineAddBuff = 0;
    for (i=0;i<divinechecks.length;i++){
        let divineCB = divinechecks[i];
        let divineLV = Number(document.getElementById("level"+divineCB.id.split("divine")[1]).value);
        //console.log(partybuffref[divineCB.id].cond)
        if (divineCB.checked){
            if (partybuffref[divineCB.id].cond.length == 0){
                try {
                    ///console.log(typeof partybuffref[divineCB.id][type][divineLV-1])
                    totalDivineAddBuff += Number(partybuffref[divineCB.id][type][divineLV-1].split("a")[1]);
                    break
                } catch (err) {//console.log("No buff")
                }
            }
            else if (partybuffref[divineCB.id].cond.includes(masterValues.unitcard["element"])||partybuffref[divineCB.id].cond.includes(masterValues.baseClass)){
                try {
                    if (typeof partybuffref[divineCB.id][type][divineLV-1] == "string");
                    //console.log("String");
                    totalDivineAddBuff += Number(partybuffref[divineCB.id][type][divineLV-1].split("a")[1]);
                    break
                } catch (err) {//console.log("No buff")
                    totalDivineAddBuff += 0;
                }
            } else {//console.log("Error 3")
            }
        } else {}
    }
    ///console.log(type+"-dAddBuff:",totalDivineAddBuff);
    return totalDivineAddBuff;
}

function allAlliesSkillRate(type){
    //timing must be 1
    let totalAllAlliesSkill = 0
    try { //for those with no level+id otherskill//
        for (i=0;i<otherSkillchecks.length;i++){
            let otherSkillCB = otherSkillchecks[i];
            let otherSkillLV = Number(document.getElementById("level"+otherSkillCB.id.split("otherSkill")[1]).value);
            if (otherSkillCB.checked){
                if (partybuffref[otherSkillCB.id].cond.length == 0){
                    try {
                        totalAllAlliesSkill += Number(partybuffref[otherSkillCB.id][type][otherSkillLV-1]);
                        break
                    } catch (err) {//console.log("No buff")
                    }
                } else if (partybuffref[otherSkillCB.id].cond.includes(char["attribute"])||partybuffref[otherSkillCB.id].cond.includes(masterValues.baseClass)){
                    try {
                        totalAllAlliesSkill += Number(partybuffref[otherSkillCB.id][type][otherSkillLV-1]);
                        break
                    } catch (err) {//console.log("No buff")
                        totalAllAlliesSkill += 0;
                    }
                } else {//console.log("cond not met")
                }
            } else {//console.log("not checked")
            }
        }
    } catch(err){return 0;}
    return totalAllAlliesSkill;
}

function equipValues(equipnumber,type,cc){
    let value;
    if (document.getElementById("equip"+equipnumber).checked){
        value = window["equip"+masterValues.baseClass][cc][Number(equipnumber)-1][type];
        if (value === undefined){value = 0;}else{}
    } else {value = 0;}
    return value;
}

function talentIdentifier(talentText){
    if (talentText.slice(0,2) == "最大"){
        return ["stat1"];
    } else if (talentText.slice(0,2) == "攻撃"){
        if (talentText.slice(0,3) == "攻撃力") {
            return ["stat2"];
        } else if (talentText.slice(0,3) == "攻撃速") {
            return ["stat6"];
        } else if (talentText.slice(0,3) == "攻撃対") {
            return ["stat11"];
        } else {
            return [];
        }
    } else if (talentText.slice(0,3) == "物理防"){
        return ["stat3"];
    } else if (talentText.slice(0,3) == "魔法防"){
        return ["stat4"];
    } else if (talentText.slice(0,2) == "射程"){
        return ["stat8"];
    } else if (talentText.slice(0,11) == "CRI率/CRI率上限"){
        return ["stat191","stat193"];
    } else {
        return [];
    }
}

function getAttachID(subskillSelectID){
    let requireCheck = [1040,1041,1042,1043,1044,1045,1090,1101,1156];
    let subskillSelect = Number(document.getElementById(subskillSelectID).value);
    let subskillIndex = attach_ability_data.table.findIndex(object => {return object.id === subskillSelect})
    if (requireCheck.includes(subskillSelect)){
        document.getElementById(subskillSelectID+"condcheck").innerHTML = "「条件」をチェック！";
    } else {
        document.getElementById(subskillSelectID+"condcheck").innerHTML = "";
    }
    return subskillIndex;
}

function talenttext(){
    document.getElementById("talent3").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId3"]})]["name"];
    document.getElementById("talent4").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId4"]})]["name"];
    document.getElementById("talent5").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId5"]})]["name"];
    if (masterValues.charaAwaked){
        document.getElementById("talent3check").checked = true;
        document.getElementById("talent3check").disabled = true;
        document.getElementById("talent4check").checked = true;
        document.getElementById("talent4check").disabled = true;
        document.getElementById("talent5check").checked = true;
        document.getElementById("talent5check").disabled = true;
    }
}
function divineOneOnly(divineid){
    for (i=0;i<divinechecks.length;i++){
        divinechecks[i].checked = false;
    }
    document.getElementById(divineid).checked = true;
}
function skilltextreplace(){
    let skillaltnumber = Number(document.getElementById("skill-alt-select").value);
    let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
    let skillchangenumber = Number(document.getElementById("skill-change-select").value);
    let skillObject = skill_data["table"][skill_data["table"].findIndex(object => {return object.id === (masterValues.charaID-skillaltnumber+skillchangenumber)})];
    //manipulation//
    try {
        //excludes skills unreleased//
        //if (skillObject === undefined || [10095,10098].includes(skillObject["id"])) {
        if (skillObject === undefined) {
            if (masterValues.language === "ja"){throw "存在しないスキルです";}
            else if (masterValues.language === "en"){throw "Skill does not exist";}
        }
        console.log(skillObject);
        document.getElementById("skill-error").innerHTML = "";
    } catch (err) {
        document.getElementById("skill-error").innerHTML = err + "<br>";
        return;
    }
    let baseText = skillObject["text"].replace(/\r/g,"").replace(/\n/g,"<br>").replace("mdefense","mdef"); //replace \r,\n, and mdef to split later
    //console.log(baseText);
    let beforeArray = baseText.match(/(?<=\[)[^\][]*(?=])/g);
    //console.log(beforeArray);
    let maxDuration = skillObject["maxDurationTime"];
    let minDuration = skillObject["minDurationTime"];
    let maxCost = skillObject["maxCost"];
    let minCost = skillObject["minCost"];
    try {
        for (let i=0; i<beforeArray.length;i++){
            let B4Asplit = beforeArray[i].split(",")
            if (beforeArray[i] === "duration"){
                let replaceDuration = Math.floor((minDuration + (maxDuration-minDuration)/4*(skilllevelnumber-1))/30);
                baseText = baseText.replace("duration",replaceDuration.toString());
            } else if (beforeArray[i] === "cost"){
                let replaceCost = Math.floor((minCost + (maxCost-minCost)/4*(skilllevelnumber-1)));
                baseText = baseText.replace("cost",replaceCost.toString());
            } else if (B4Asplit[0] === "MAG") {
                let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
                let maxParam = skillObject["talentList"][B4Asplit[1]]["maxParam"][B4Asplit[2]]["num"][0];
                if (maxParam === 0){maxParam = minParam} else {}
                let replaceParam = Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))/100;
                if (skillObject["talentList"][B4Asplit[1]]["param"].length === 1){
                    replaceParam += 1;
                } else {
                    let plusOneTest = false;
                    let excludedSkillText = [98,10098];
                    //changed j=0 to j=1, not sure if affects
                    for (let j=1;j<skillObject["talentList"][B4Asplit[1]]["param"].length;j++){
                        if (skillObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 1 || skillObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 2 || skillObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === -1){
                            plusOneTest = true;
                        } else {}
                    }
                    console.log("minP",minParam,"maxP",maxParam,"plus1",plusOneTest);
                    if (plusOneTest&&!(excludedSkillText.includes(skillObject["id"]))){} else {replaceParam+=1;}
                }
                baseText = baseText.replace(beforeArray[i], replaceParam.toString());
            } else if (B4Asplit[0] === "0"){
                if (skillObject["talentList"][B4Asplit[1]]["maxParam"][B4Asplit[2]]["num"][0] === 0){
                    let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
                    let replaceParam = minParam;
                    baseText = baseText.replace(beforeArray[i], replaceParam.toString());
                }
                /*temporary measures to make some strings immutable (now pending deletion)
                if (baseText.split(beforeArray[i])[0].slice(-5) == "コストが\[" && baseText.split(beforeArray[i])[1].slice(0,3) == "\]回復"){
                    let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
                    let replaceParam = minParam;
                    baseText = baseText.replace(beforeArray[i], replaceParam.toString());
                */ else {
                    let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
                    let maxParam = skillObject["talentList"][B4Asplit[1]]["maxParam"][B4Asplit[2]]["num"][0];
                    let replaceParam = Math.floor((minParam + (maxParam-minParam)/4*(skilllevelnumber-1)));
                    //add the conditional for maxparam here next time
                    baseText = baseText.replace(beforeArray[i], replaceParam.toString());
                }
            }
        }
        let pattern = baseText.match(/\[(attack|hp|defense|mdef),\[(\d|\.)*\]\]/g);
        if (pattern !== null){
            for (let i=0; i<pattern.length;i++){
                let replaceText = "("+pattern[i]+")";
                if (masterValues.language === "ja"){
                    replaceText = replaceText.replace("hp,","HP×");
                    replaceText = replaceText.replace("attack,","攻撃力×");
                    replaceText = replaceText.replace("defense,","物理防御×");
                    replaceText = replaceText.replace("mdef,","魔法防御×");
                    replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
                } else if (masterValues.language === "en"){
                    replaceText = replaceText.replace("hp,","HP×");
                    replaceText = replaceText.replace("attack,","Atk×");
                    replaceText = replaceText.replace("defense,","pDef×");
                    replaceText = replaceText.replace("mdef,","mDef×");
                    replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
                }
                baseText = baseText.replace(pattern[i],replaceText);
            }
        }
        baseText = baseText.replace(/\[/g,"").replace(/\]/g,"");
        document.getElementById("dps-output-menu-skill-text").innerHTML = baseText;
        document.getElementById("dps-output-battle-skill-text").innerHTML = baseText;
        document.getElementById("dps-output-skill-skill-text").innerHTML = baseText;
    } catch(err){
        document.getElementById("dps-output-menu-skill-text").innerHTML = baseText;
        document.getElementById("dps-output-battle-skill-text").innerHTML = baseText;
        document.getElementById("dps-output-skill-skill-text").innerHTML = baseText;
    }
}
function traittextreplace(){
    let traitObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.charaID-10000)})];
    //manipulation//
    let baseText = traitObject["text"].replace(/\r/g,"").replace(/\n/g,"<br>").replace("mdefense","mdef"); //replace \r,\n, and mdef to split later
    ///console.log(baseText);
    let beforeArray = baseText.match(/(?<=\[)[^\][]*(?=])/g);
    ///console.log(beforeArray);
    if (!beforeArray){
        document.getElementById("dps-output-menu-trait-text").innerHTML = baseText;
        document.getElementById("dps-output-battle-trait-text").innerHTML = baseText;
        document.getElementById("dps-output-skill-trait-text").innerHTML = baseText;
        return;
    } else {}
    for (let i=0; i<beforeArray.length;i++){
        let B4Asplit = beforeArray[i].split(",")
        if (B4Asplit[0] === "awaked"){
        } else if (B4Asplit[0] === "MAG") {
            let replaceParam = traitObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0]/100;
            ///console.log(replaceParam);
            if (traitObject["talentList"][B4Asplit[1]]["param"].length === 1){
                let excludedTraitText = [16];
                if(excludedTraitText.includes(traitObject["id"])){
                    replaceParam += 1;
                }
                //replaceParam += 1; //for ather's trait, not sure if affects others.
            } else {
                let plusOneTest = false;
                let excludedSkillText = [16];
                //changed j=0 to j=1, not sure if affects
                for (let j=1;j<traitObject["talentList"][B4Asplit[1]]["param"].length;j++){
                    if (traitObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 1 || traitObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 2 || traitObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === -1){
                        plusOneTest = true;
                    } else {}
                }
                if (plusOneTest){} else {replaceParam+=1;}
            }
            baseText = baseText.replace(beforeArray[i], replaceParam.toString());
        } else if (B4Asplit[0] === "0"){
            let replaceParam = traitObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
            baseText = baseText.replace(beforeArray[i], replaceParam.toString());
        }
    }
    ///console.log(baseText);
    //need notawaked also, look at loren (10028)
    let patternP = baseText.match(/\[(attack|hp|defense|mdef),\[(\d|\.)*\]\]/g);
    if (patternP !== null){
        for (let i=0; i<patternP.length;i++){
            let replaceText = "("+patternP[i]+")";
            if (masterValues.language === "ja"){
                replaceText = replaceText.replace("hp,","HP×");
                replaceText = replaceText.replace("attack,","攻撃力×");
                replaceText = replaceText.replace("defense,","物理防御×");
                replaceText = replaceText.replace("mdef,","魔法防御×");
                replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
            } else if (masterValues.language === "en"){
                replaceText = replaceText.replace("hp,","HP×");
                replaceText = replaceText.replace("attack,","Atk×");
                replaceText = replaceText.replace("defense,","pDef×");
                replaceText = replaceText.replace("mdef,","mDef×");
                replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
            }
            baseText = baseText.replace(patternP[i],replaceText);
        }
    }
    ///console.log(baseText);
    let pattern = baseText.match(/\[awaked,.[^\[]*\]/g); //any character that is not "["
    ///console.log(pattern);
    if (pattern !== null){
        for (let i=0; i<pattern.length;i++){
            let replaceText = "("+pattern[i]+")";
            if (masterValues.language === "ja"){
                replaceText = replaceText.replace("awaked,","完凸で");
            } else if (masterValues.language === "en"){
                replaceText = replaceText.replace("awaked,","full potential,&nbsp");
            }
            baseText = baseText.replace(pattern[i],replaceText);
        }
    }
    baseText = baseText.replace(/\[/g,"").replace(/\]/g,"").replace("notawaked,","");
    document.getElementById("dps-output-menu-trait-text").innerHTML = baseText;
    document.getElementById("dps-output-battle-trait-text").innerHTML = baseText;
    document.getElementById("dps-output-skill-trait-text").innerHTML = baseText;
}
function charaInfoReplace(){
    let cc = Number(document.getElementById("input-cc").value);
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    let classObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    document.getElementById("dps-info-charaName").innerHTML = "【"+masterValues.unitcard["nickname"]+"】"+masterValues.unitcard["charaName"];
    document.getElementById("dps-info-jobTitle").innerHTML = job["name"];
    document.getElementById("dps-info-initialCost").innerHTML = Number(job["cost"]) + Number(masterValues.unitcard["cost"]);
    let baseText = classObject["text"].replace(/\r/g,"").replace(/\n/g,"<br>");
    let beforeArray = baseText.match(/(?<=\[)[^\][]*(?=])/g);
    ///console.log(beforeArray);
    if (!beforeArray){
        document.getElementById("dps-info-jobInfo").innerHTML = baseText;
    } else {
        for (let i=0; i<beforeArray.length;i++){
            let B4Asplit = beforeArray[i].split(",")
            if (B4Asplit[0] === "awaked"){
            } else if (B4Asplit[0] === "MAG") {
                let replaceParam = classObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0]/100;
                ///console.log(replaceParam);
                if (classObject["talentList"][B4Asplit[1]]["param"].length === 1){
                    replaceParam += 1;
                } else {
                    let plusOneTest = false;
                    //changed j=0 to j=1, not sure if affects
                    for (let j=1;j<classObject["talentList"][B4Asplit[1]]["param"].length;j++){
                        if (classObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 1 || classObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 2 || classObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === -1){
                            plusOneTest = true;
                        } else {}
                    }
                    if (plusOneTest){} else {replaceParam+=1;}
                }
                baseText = baseText.replace(beforeArray[i], replaceParam.toString());
            } else if (B4Asplit[0] === "0"){
                let replaceParam = classObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
                baseText = baseText.replace(beforeArray[i], replaceParam.toString());
            }
        }
        ///console.log(baseText);
        let patternP = baseText.match(/\[(attack|hp|defense|mdef),\[(\d|\.)*\]\]/g);
        if (patternP !== null){
            for (let i=0; i<patternP.length;i++){
                let replaceText = "("+patternP[i]+")";
                if (masterValues.language === "ja"){
                    replaceText = replaceText.replace("hp,","HP×");
                    replaceText = replaceText.replace("attack,","攻撃力×");
                    replaceText = replaceText.replace("defense,","物理防御×");
                    replaceText = replaceText.replace("mdef,","魔法防御×");
                    replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
                } else if (masterValues.language === "en"){
                    replaceText = replaceText.replace("hp,","HP×");
                    replaceText = replaceText.replace("attack,","Atk×");
                    replaceText = replaceText.replace("defense,","pDef×");
                    replaceText = replaceText.replace("mdef,","mDef×");
                    replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
                }
                baseText = baseText.replace(patternP[i],replaceText);
            }
        }
        ///console.log(baseText);
        let pattern = baseText.match(/\[awaked,.[^\[]*\]/g); //any character that is not "["
        ///console.log(pattern);
        if (pattern !== null){
            for (let i=0; i<pattern.length;i++){
                let replaceText = "("+pattern[i]+")";
                if (masterValues.language === "ja"){
                    replaceText = replaceText.replace("awaked,","完凸で");
                } else if (masterValues.language === "en"){
                    replaceText = replaceText.replace("awaked,","full potential,&nbsp");
                }
                baseText = baseText.replace(pattern[i],replaceText);
            }
        }
        baseText = baseText.replace(/\[/g,"").replace(/\]/g,"").replace("notawaked,","");
        document.getElementById("dps-info-jobInfo").innerHTML = baseText;
    }
    let extraInfo;
    let extraInfoReference = masterValues.charaID - Number(document.getElementById("skill-alt-select").value);
    if (masterValues.charaAwaked){
        extraInfoReference = extraInfoReference.toString() + "a";
    } else {extraInfoReference = extraInfoReference.toString();}
    //console.log(extraInfoReference);
    extraInfo = extra_info[extraInfoReference];
    if (extraInfo === undefined) {extraInfoReference = extraInfoReference.split("a")[0];}
    //console.log(extraInfoReference);
    extraInfo = extra_info[extraInfoReference];
    if (extraInfo === undefined) {extraInfoReference = 0;}
    //console.log(extraInfoReference);
    extraInfo = extra_info[extraInfoReference];
    document.getElementById("dps-info-extraInfo").innerHTML = extraInfo;
}

function uniqueWeaponReplace(charaID){
    let uwID = charaID-10000;
    let targetDiv = document.getElementById("unique-weapon-div");
    if (uniqueCharas.includes(uwID)){
        let uwSRC = "'../../img/equipment-icons/uw_"+uwID+"001.png'";
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="height:100%;width:100%;border:3px solid white;"><tr><td style="border:none;vertical-align:top;width: 33%;" rowspan="2"><span>専用武器</span></td><td style="border:none;text-align:right;width: 33%;" rowspan="2"><img class="equip-icon" src='+uwSRC+'></td><td style="border:none;text-align:left;width: 33%;"><input id="unique-equip-check" type="checkbox" class="larger-check" onchange="isUniqueWeaponEquipped(this.checked);allDPS();"></td></tr><tr><td style="border:none;text-align:left;width: 33%;"><span>レベル </span><input id="unique-equip-level" type="number" value="0" min="0" max="10" style="width:30%;" onchange="allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="height:100%;width:100%;border:3px solid white;"><tr><td style="border:none;vertical-align:top;width: 33%;" rowspan="2"><span>Unique<br>Weapon</span></td><td style="border:none;text-align:right;width: 33%;" rowspan="2"><img class="equip-icon" src='+uwSRC+'></td><td style="border:none;text-align:left;width: 33%;"><input id="unique-equip-check" type="checkbox" class="larger-check" onchange="isUniqueWeaponEquipped(this.checked);allDPS();"></td></tr><tr><td style="border:none;text-align:left;width: 33%;"><span>レベル </span><input id="unique-equip-level" type="number" value="0" min="0" max="10" style="width:30%;" onchange="allDPS();"></td></tr></table>'
        }
    } else {
        let uwSRC = "'../../img/chara-icons/icon_10000_0_s.png'";
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="display:none;height:100%;width:100%;border:3px solid white;"><tr><td style="border:none;vertical-align:top;width: 33%;" rowspan="2"><span>専用武器</span></td><td style="border:none;text-align:right;width: 33%;" rowspan="2"><img class="equip-icon" src='+uwSRC+'></td><td style="border:none;text-align:left;width: 33%;"><input id="unique-equip-check" type="checkbox" class="larger-check" onchange="isUniqueWeaponEquipped(this.checked);allDPS();"></td></tr><tr><td style="border:none;text-align:left;width: 33%;"><span>レベル </span><input id="unique-equip-level" type="number" value="0" min="0" max="10" style="width:30%;" onchange="allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="display:none;height:100%;width:100%;border:3px solid white;"><tr><td style="border:none;vertical-align:top;width: 33%;" rowspan="2"><span>Unique<br>Weapon</span></td><td style="border:none;text-align:right;width: 33%;" rowspan="2"><img class="equip-icon" src='+uwSRC+'></td><td style="border:none;text-align:left;width: 33%;"><input id="unique-equip-check" type="checkbox" class="larger-check" onchange="isUniqueWeaponEquipped(this.checked);allDPS();"></td></tr><tr><td style="border:none;text-align:left;width: 33%;"><span>レベル </span><input id="unique-equip-level" type="number" value="0" min="0" max="10" style="width:30%;" onchange="allDPS();"></td></tr></table>'
        }
    }
}
function classActReplace(classID){
    let targetDiv = document.getElementById("class-act-div");
    if (classID === 11031){
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>バーサーク</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>Berserk</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        }
    } else if (classID === 12011){
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>プロテクション</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>Protection</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        }
    } else if (classID === 12021){
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>ハイタフネス</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>High Toughness</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        }
    } else if (classID === 12031){
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>剣気解放</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>Kenki</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        }
    } else {
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;display:none;"><tr><td style="border:none;vertical-align:top;"><span>ACT</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;display:none;"><tr><td style="border:none;vertical-align:top;"><span>ACT</span></td><td style="border:none;"><input id="class-act-check" type="checkbox" class="larger-check" onchange="isClassAct(this.checked);allDPS();"></td></tr></table>'
        }
    }
}
function overchargeReplace(charaID){
    let targetDiv = document.getElementById("overcharge-div");
    if (overchargeCharas.includes(charaID)){
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>OC</span></td><td style="border:none;"><input id="overcharge-check" type="checkbox" class="larger-check" onchange="allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;"><tr><td style="border:none;vertical-align:top;"><span>OC</span></td><td style="border:none;"><input id="overcharge-check" type="checkbox" class="larger-check" onchange="allDPS();"></td></tr></table>'
        }
    } else {
        if (masterValues.language === "ja"){
            targetDiv.innerHTML = '<table style="border:none;display:none;"><tr><td style="border:none;vertical-align:top;"><span>OC</span></td><td style="border:none;"><input id="overcharge-check" type="checkbox" class="larger-check" onchange="allDPS();"></td></tr></table>'
        } else if (masterValues.language === "en"){
            targetDiv.innerHTML = '<table style="border:none;display:none;"><tr><td style="border:none;vertical-align:top;"><span>OC</span></td><td style="border:none;"><input id="overcharge-check" type="checkbox" class="larger-check" onchange="allDPS();"></td></tr></table>'
        }
    }
}

function dpsDetailShow(){
    let dpsC = [10014,10040,10049,10063,10092,10131,10136,10145,10147,10150,10173,10178,10209,10239,10245,10265,10279,10289];
    //let dpsF = [];
    let dpsAA = [10067,10155,10162,10168,10174,10177,10188,10201,10230];
    if (dpsC.includes(masterValues.charaID)){
        document.getElementById("battleC").style.display = "block";
        document.getElementById("skillC").style.display = "block";
    }
    if (dpsAA.includes(masterValues.charaID)){
        document.getElementById("battleAA").style.display = "block";
        document.getElementById("skillAA").style.display = "block";
    }
}

function conditionalOption(conditional, option, value){
    if (option === ""){
        return (conditional === value);
    } else if (option === "!") {
        return (conditional !== value);
    } else if (option === ">") {
        return (conditional > value);
    } else if (option === ">=") {
        return (conditional >= value);
    } else if (option === "<") {
        return (conditional < value);
    } else if (option === "<=") {
        return (conditional <= value);
    } else if (option === "%") {
        return false;
    } else if (option === "^") {
        return (conditional.includes(value));
    } else if (option === "!^") {
        return (!conditional.includes(value));
    } else {return true;}
}
function statConvertUnique(statX){
    let statnamelist = ["","life","power","defense","magic_resist","move_speed","attack_speed","attack_interval","range"];
    return statnamelist[Number(statX.split("stat")[1])];
}

function moveSubskillBar(percent) {
    var element = document.getElementById("subskill-optimise-bar");
    var progress = Number(element.style.width.split("%")[0]);
    if (progress >= 100){progress = 0;}
    var id = setInterval(frame, 10);
    function frame() {
        if (progress >= 100) {
            clearInterval(id);
        } else if (progress >= percent) {
            clearInterval(id);
        } else {
            progress++;
            element.style.width = progress + "%";
        }
    }
}
function changeLoadingLanguage(){
    if (masterValues.language === "en"){
        document.getElementById("calculating").innerHTML = "Calculating...";
        document.getElementById("turnOffFaster").innerHTML = "To speed up, display is disabled temporarily.";
        document.getElementById("shirami").innerHTML = "※This process cycles through every combination of subskills not excluded.";
        document.getElementById("notFreeze").innerHTML = "※The browser might think the page froze, but calculations are properly going on.";
    } else {}
}
/*
const text = "[Some text] ][with[ [some important info]";
console.log( text.match(/(?<=\[)[^\][]*(?=])/g) );
console.log( Array.from(text.matchAll(/\[([^\][]*)]/g), x => x[1]) );
// Both return ["Some text", "some important info"]
*/ 

function subskillSearch(subskillListNumber){
    let subskillList = document.querySelectorAll('.subskill-select-img-'+subskillListNumber);
    let searchQuery = document.getElementById("subskill-searchbox-"+subskillListNumber).value;
    for (let i = 0; i < subskillList.length; i++) {
        if(subskillList[i].getAttribute("alt").toLowerCase().includes(searchQuery.toLowerCase())){
            subskillList[i].classList.remove("subskill-hidden");
        }
        else{
            subskillList[i].classList.add("subskill-hidden");
        }
    }
}
function subskillSearchOpen(subskillListNumber){
    document.getElementById("subskill-select-div-"+subskillListNumber).style.display = "block";
}
function subskillSearchClose(){
    document.getElementById("subskill-select-div-1").style.display = "none";
    document.getElementById("subskill-select-div-2").style.display = "none";
}
function subskillSearchSelect(src,subskillListNumber){
    let subIDTemp = Number(src.split("_")[1].split(".")[0]);
    console.log(subIDTemp);
    document.getElementById("subskill"+subskillListNumber).value = subIDTemp;
}

//super-long/repetitive code starts here
function attachOptions1() {
    let optionList = document.getElementById('subskill1').options;
    attachOptions.forEach(option => optionList.add(new Option(option.text, option.value, option.selected)));
}
function attachOptions2() {
    let optionList = document.getElementById('subskill2').options;
    attachOptions.forEach(option => optionList.add(new Option(option.text, option.value, option.selected)));
}
const attachOptions = [
    {value: 0, text: '-----'},
    {value: 1001, text: 'HP強化 I'},
    {value: 1002, text: 'HP強化 II'},
    {value: 1003, text: 'HP強化 III'},
    {value: 1004, text: '攻撃力強化 I'},
    {value: 1005, text: '攻撃力強化 II'},
    {value: 1006, text: '攻撃力強化 III'},
    {value: 1007, text: '物理防御強化 I'},
    {value: 1008, text: '物理防御強化 II'},
    {value: 1009, text: '物理防御強化 III'},
    {value: 1010, text: '魔法防御強化 I'},
    {value: 1011, text: '魔法防御強化 II'},
    {value: 1012, text: '魔法防御強化 III'},
    {value: 1013, text: 'リジェネレーション I'},
    {value: 1014, text: 'リジェネレーション II'},
    {value: 1015, text: 'リジェネレーション III'},
    {value: 1016, text: '物理攻撃回避 I'},
    {value: 1017, text: '物理攻撃回避 II'},
    {value: 1018, text: '物理攻撃回避 III'},
    {value: 1019, text: '魔法攻撃回避 I'},
    {value: 1020, text: '魔法攻撃回避 II'},
    {value: 1021, text: '魔法攻撃回避 III'},
    {value: 1022, text: '移動速度上昇 I'},
    {value: 1023, text: '移動速度上昇 II'},
    {value: 1024, text: '移動速度上昇 III'},
    {value: 1025, text: 'クリティカル I'},
    {value: 1026, text: 'クリティカル II'},
    {value: 1027, text: 'クリティカル III'},
    {value: 1028, text: '再出撃時間短縮 I'},
    {value: 1029, text: '再出撃時間短縮 II'},
    {value: 1030, text: '再出撃時間短縮 III'},
    {value: 1031, text: '生命力吸収 I'},
    {value: 1032, text: '生命力吸収 II'},
    {value: 1033, text: '生命力吸収 III'},
    {value: 1034, text: '攻撃待機時間短縮 I'},
    {value: 1035, text: '攻撃待機時間短縮 II'},
    {value: 1036, text: '攻撃待機時間短縮 III'},
    {value: 1037, text: '貫通攻撃 I'},
    {value: 1038, text: '貫通攻撃 II'},
    {value: 1039, text: '貫通攻撃 III'},
    {value: 1040, text: '底力(攻撃) I'},
    {value: 1041, text: '底力(攻撃) II'},
    {value: 1042, text: '底力(攻撃) III'},
    {value: 1043, text: '底力(物理防御) I'},
    {value: 1044, text: '底力(物理防御) II'},
    {value: 1045, text: '底力(物理防御) III'},
    {value: 1046, text: '撤退時コスト回復 I'},
    {value: 1047, text: '撤退時コスト回復 II'},
    {value: 1048, text: '撤退時コスト回復 III'},
    {value: 1049, text: 'アイアンボディ'},
    {value: 1050, text: 'ファストチャージャー'},
    {value: 1051, text: 'オートパニッシャー'},
    {value: 1052, text: 'エレメンタルブースト'},
    {value: 1053, text: 'フェニックスの加護'},
    {value: 1054, text: '騎士の心得'},
    {value: 1055, text: '霧を晴らす列車'},
    {value: 1056, text: '巨鎧騎士の討伐証'},
    {value: 1057, text: '攻撃+物理防御強化'},
    {value: 1058, text: '黄金岩晶の討伐証'},
    {value: 1059, text: 'フルハートハイビート'},
    {value: 1060, text: '双角王者の討伐証'},
    {value: 1061, text: '純白ヴェール'},
    {value: 1062, text: '冥途の置き土産'},
    {value: 1063, text: '捨て身の一撃'},
    {value: 1064, text: '攻撃+魔法防御強化'},
    {value: 1065, text: 'HP+物理防御強化'},
    {value: 1066, text: 'HP+魔法防御強化'},
    {value: 1067, text: '聖なる祈り'},
    {value: 1068, text: '物理防御+魔法防御強化'},
    {value: 1069, text: 'HP強化+出撃コスト減少'},
    {value: 1070, text: '竜騎士の討伐証'},
    {value: 1071, text: '結石竜の討伐証'},
    {value: 1072, text: 'スタートチャージャー'},
    {value: 1073, text: '魔導の心得'},
    {value: 1074, text: 'リミットブレイク'},
    {value: 1075, text: 'ゴブリンパーティ！'},
    {value: 1076, text: '高貴なる狩人'},
    {value: 1077, text: '魔導艦の討伐証'},
    {value: 1078, text: '攻撃強化+出撃コスト減少'},
    {value: 1079, text: '物理防御強化+物理攻撃回避'},
    {value: 1080, text: '古代艦の討伐証'},
    {value: 1081, text: '攻撃強化+リジェネレーション'},
    {value: 1082, text: '皇女の誇り'},
    {value: 1083, text: 'ぐねぐねスライムくん（緑）'},
    {value: 1084, text: 'タクティクスガード'},
    {value: 1085, text: '物理防御強化+出撃コスト減少'},
    {value: 1086, text: '常夏巨兵の討伐証'},
    {value: 1087, text: '攻撃強化+貫通攻撃'},
    {value: 1088, text: '生命力吸収+攻撃待機短縮'},
    {value: 1089, text: 'まったり充電寝正月'},
    {value: 1090, text: '疾風怒濤'},
    {value: 1091, text: '先手必勝！'},
    {value: 1092, text: 'ポイズンボム'},
    {value: 1093, text: 'HP強化+リジェネレーション'},
    {value: 1094, text: '物理攻撃+魔法攻撃回避'},
    {value: 1095, text: '41ストーン'},
    {value: 1096, text: '究極騎将の討伐証'},
    {value: 1097, text: '穴鏡触手の討伐証'},
    {value: 1098, text: '1stAnniversaryの祝福'},
    {value: 1099, text: 'プロトバリア'},
    {value: 1100, text: 'アタッチヒール'},
    {value: 1101, text: '屍山血河'},
    {value: 1102, text: '攻撃強化+クリティカル'},
    {value: 1103, text: '恩愛触手の討伐証'},
    {value: 1104, text: '暗躍する影'},
    {value: 1105, text: 'HP強化 IV'},
    {value: 1106, text: '攻撃力強化 IV'},
    {value: 1107, text: '物理防御強化 IV'},
    {value: 1108, text: '魔法防御強化 IV'},
    {value: 1109, text: 'ポイズンエンチャント'},
    {value: 1110, text: 'ガードプロテクト'},
    {value: 1111, text: 'パワフルリジェネ'},
    {value: 1112, text: 'オールレジスト'},
    {value: 1113, text: 'アサルトチャージ'},
    {value: 1114, text: 'MAXマッスル'},
    {value: 1115, text: 'きらめきの星騎士'},
    {value: 1116, text: '触手も付けとくでぇ！'},
    {value: 1117, text: 'ハイテンションサマー'},
    {value: 1118, text: '灼熱噴然の討伐証'},
    {value: 1119, text: 'テッパンツンデレ皇女'},
    {value: 1120, text: 'おっとりお姉ちゃん皇女'},
    {value: 1121, text: '逆境の力'},
    {value: 1122, text: 'マジックボディ'},
    {value: 1123, text: '魔法防御強化+魔法攻撃回避'},
    {value: 1124, text: '快適快速'},
    {value: 1125, text: 'グレイトコンダクト'},
    {value: 1126, text: '魔導傑作の討伐証'},
    {value: 1127, text: '再出撃時間短縮 IV'},
    {value: 1128, text: '貫通攻撃 IV'},
    {value: 1129, text: 'ラピッドチャージャー'},
    {value: 1130, text: 'ウィンドエクステンド'},
    {value: 1131, text: '決死の一撃'},
    {value: 1132, text: 'メデューサソウル'},
    {value: 1133, text: '再出撃時間短縮+撤退時コスト回復'},
    {value: 1134, text: '麗しき藝術家'},
    {value: 1135, text: '聖女の加護'},
    {value: 1136, text: 'クリティカル+貫通攻撃'},
    {value: 1137, text: '1.5th Anniversaryの恩恵'},
    {value: 1138, text: '怪幹呑獣の討伐証'},
    {value: 1139, text: '一級ご主人証明書'},
    {value: 1140, text: 'ライフブロック'},
    {value: 1141, text: 'タクティクスMガード'},
    {value: 1143, text: 'クリティカルダメージ強化 II'}, //note the swapped index
    {value: 1142, text: 'クリティカルダメージ強化 III'},//note the swapped index
    {value: 1144, text: 'クリティカル+CRIダメージ強化'},
    {value: 1145, text: 'スキルエクステンド'},
    {value: 1146, text: '攻撃強化+生命力吸収'},
    {value: 1147, text: 'クリティカル IV'},
    {value: 1148, text: 'クリティカルダメージ強化 IV'},
    {value: 1149, text: 'マッスルチャレンジャー'},
    {value: 1150, text: 'オーバードーピング'},
    {value: 1151, text: 'ラッキーヒール'},
    {value: 1152, text: 'ケルベロスソウル'},
    {value: 1153, text: '膨大巨嚢の討伐証'},
    {value: 1154, text: '妖怪島探検家'},
    {value: 1155, text: '攻撃待機短縮+出撃コスト減少'},
    {value: 1156, text: '来たる福女！'},
    {value: 1157, text: '煩悶淫竜の討伐証'},
    {value: 1158, text: '捕獲！自信に満ちた女勇者'},
    {value: 1159, text: '捕獲！二丁使いの女海賊'},
    {value: 1160, text: '豪華絢爛'},
    {value: 1161, text: '再出撃時間+出撃コスト減少'},
    {value: 1162, text: '攻撃強化+HP強化'},
    {value: 1163, text: '戦意継承'},
    {value: 1164, text: 'パートナーチアー'},
    {value: 1165, text: '攻撃強化+攻撃待機短縮'},
    {value: 1166, text: 'ムッツリ妄想フルパワー'},
    {value: 1167, text: '攻撃強化+底力(攻撃)'},
    {value: 1168, text: '2nd Anniversaryの恩寵'},
    {value: 1169, text: '魔法攻撃回避 IV'},
    {value: 1170, text: '生命力吸収 IV'},
    {value: 1171, text: 'パワードバリア'},
    {value: 1172, text: '鉄壁の守り'},
    {value: 1173, text: 'ファイアエクステンド'},
    {value: 1174, text: 'ミノタウロスソウル'},
    {value: 1175, text: '被検体R13'},
    {value: 1176, text: '暗部の聖衣'},
    {value: 1177, text: '愛造暴玩の討伐証'},
    {value: 1178, text: 'エンジョイサマーリゾート'},
    {value: 1179, text: 'アセンションバケーション'},
    {value: 1180, text: 'マジックリダクション'},
    {value: 1181, text: 'クラスアクション強化(攻撃)'},
    {value: 1182, text: '被検体T42'},
    {value: 1183, text: '巨擬嶺の討伐証'},
    //{value: 1184, text: 'ダミー'},
    //{value: 1185, text: 'ダミー'},
    //{value: 1186, text: 'ダミー'},
    //{value: 1187, text: 'ダミー'},
    //{value: 1188, text: 'ダミー'},
    //{value: 1189, text: 'ダミー'},
    //{value: 1190, text: 'ダミー'},
    //{value: 1191, text: 'ダミー'},
    //{value: 1192, text: 'ダミー'},
    //{value: 1193, text: 'ダミー'},
    //{value: 1194, text: 'ダミー'},
    //{value: 1195, text: 'ダミー'},
    //{value: 1196, text: 'ダミー'},
    //{value: 1197, text: 'ダミー'},
    //{value: 1198, text: 'ダミー'},
    //{value: 1199, text: 'ダミー'},
];

//loaders//
window.addEventListener("load", talenttext);
window.addEventListener("load", traittextreplace);
window.addEventListener("load", skilltextreplace);
window.addEventListener("load",equipImageChange);
window.addEventListener("load",selfConditionUpdate);
window.addEventListener("load",charaInfoReplace);
window.addEventListener("load",dpsDetailShow);
window.addEventListener("load",allDPS);
//repetitive//
window.addEventListener("load", attachOptions1);
window.addEventListener("load", attachOptions2);
window.addEventListener("load", changeLoadingLanguage);
//test//
console.log(undefined !== 3);