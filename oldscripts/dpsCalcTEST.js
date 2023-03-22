/*intialise//
var masterValues = {};
masterValues["charaID"] = 10106;
masterValues["unitcard"] = card10106;
masterValues["charaAwaked"] = false;
masterValues["baseClass"] = masterValues.unitcard["classId"];
//intialise*/

function testLevelCC(){
    let level = Number(document.getElementById("input-level").value);
    let cc = Number(document.getElementById("input-cc").value);
    if (level === "" || cc === ""){
        window.alert("レベルまたはクラスチェンジが空白");
        document.getElementById("input-level").value = 1;
        document.getElementById("input-cc").value = 0;
    } else if (level > 120 || level < 1) {
        window.alert("レベル：最低値1、最大値120");
        document.getElementById("input-level").value = 1;
    } else if (cc > 3 || cc < 0) {
        window.alert("クラスチェンジ：最低値0、最大値3");
        document.getElementById("input-cc").value = 0;
    } else if (!(Number.isInteger(level))){
        window.alert("レベル：整数を入力してください");
        document.getElementById("input-level").value = 1
    } else if (!(Number.isInteger(cc))){
        window.alert("クラスチェンジ：整数を入力してください");
        document.getElementById("input-cc").value = 0
    }
}
function printHI(){
    console.log("hi");
}
function selfConditionChange(index,value){
    selfConditions[index] = value;
    console.log(selfConditions["2000"]);
}
function selfReferenceChange(index,value){
    selfReference[index] = value;
    console.log(selfReference["200"]);
}
function selfConditionUpdate(){
    let cc = Number(document.getElementById("input-cc").value)
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    if (masterValues.unitcard["moveAction"] == 5){
        selfConditions["5"] = 1;
    } else {selfConditions["6"] = 1;}
    //selfConditions - 15?
    //selfConditions - 21?
    //selfConditions - 22?
    if (masterValues.charaAwaked){
        selfConditions["26"] = 1;
    } else {selfConditions["26"] = 0;}
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
    weapon.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][0]+cc.toString()+".png";
    head.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][1]+cc.toString()+".png";
    accessory.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][2]+cc.toString()+".png";
    body.src = "../../img/equipment-icons/"+equipConvert[masterValues.baseClass.toString()][3]+cc.toString()+".png";
    weaponabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][0];
    headabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][1];
    bodyabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][3];
    accessoryabbr.title = equipAbbr[(masterValues.baseClass+cc-1).toString()][2];
}

function allDPS(){
    testLevelCC()
    var level = Number(document.getElementById("input-level").value);
    var cc = Number(document.getElementById("input-cc").value);
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
}

function calculateStat(level,cc,type){
    console.log("-----");
    masterValues.allBuff = {}; //reset for each stat calc
    let job = job_data["table"][job_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    let classObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.baseClass+cc)})];
    let traitObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.charaID-10000)})];
    let skillaltnumber = Number(document.getElementById("skill-alt-select").value);
    let skillchangenumber = Number(document.getElementById("skill-change-select").value);
    let skillObject = skill_data["table"][skill_data["table"].findIndex(object => {return object.id === (masterValues.charaID-skillaltnumber+skillchangenumber)})];
    if (level < 31) {
        var a = 0;
    } else if (level > 30 && level < 61){
        var a = 1;
    } else if (level > 60 && level < 91){
        var a = 2;
    } else {
        var a = 3;
    }
    if (level == 30 || level == 60 || level == 90 || level == 120) {
        var b = 30;
    } else {
        var b = level % 30;
    }
    try {
        var x = formula[type][0] - formula[type][1];
        for (let i = 1; i < 1+a+1; i++){
            if (i == a+1){
                x += formula[type][i] * b;
            } else {
                x += formula[type][i] * 30;
            }
        }
        for (let i = 5; i < 5+cc; i++){
            x += formula[type][i];
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
    } else if (type == "stat11"){
        var rawStat = Math.floor(job["targetNum"]);
    } else if (type == "stat15"){
        var rawStat = Math.floor(job["cost"]+masterValues.unitcard["cost"]);
    } else if (type == "stat21"){
        var rawStat = Math.floor(job["targetType"]);
    } else if (type == "stat22"){
        var rawStat = Math.floor(job["hitType"]);
    } else if (["stat17",""].includes(type)){
        var rawStat = 0;
    } else {}
    //console.log("rawStat: "+rawStat);
    //RAW STAT//
    for (let i = 3; i < 6; i++){
        if (document.getElementById("talent"+i.toString()+"check").checked) {
            if (talentIdentifier(document.getElementById("talent"+i.toString()).innerHTML) == type) {
                //TALENT STAT//
                rawStat += Number(document.getElementById("talent"+i.toString()).innerHTML.split("+")[1]);
                //TALENT STAT//
            } else {}
        } else {}
    }
    console.log(type+" + talent:"+rawStat);
    //subskill//
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'")
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
        } else {
            //no subskill is active
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill")
        if (subskillID_1 >= subskillID_2){
            let attachObject = attach_ability_data.table[subskillID_1];
            cycleAllTalents(attachObject,type,"attach");
        } else {
            let attachObject = attach_ability_data.table[subskillID_2];
            cycleAllTalents(attachObject,type,"attach");
        }
    } else {
        //console.log("Different kind of subskill")
        //SUBSKILL ADDITIVE PROBLEM!! elute
        let attachObject = attach_ability_data.table[subskillID_1];
        cycleAllTalents(attachObject,type,"attach");
        attachObject = attach_ability_data.table[subskillID_2];
        cycleAllTalents(attachObject,type,"attach",true);
    }
    //trait and class//
    cycleAllTalents(classObject,type,"class");
    cycleAllTalents(traitObject,type,"trait");
    console.log("allbuff-at-cl-tr:",masterValues.allBuff); //here
    //((元能力値+潜在覚醒能力値)*乗算効果 + 加算効果)*編成バフ
    let multEffect1 = Number(addMinusRateActual(masterValues.allBuff,[23],"rate"));
    let addEffect1 = Number(addMinusRateActual(masterValues.allBuff,[23],"actual"));
    let equipEffect = Number(equipValues("1",type,cc) + equipValues("2",type,cc) + equipValues("3",type,cc) + equipValues("4",type,cc));
    let pdEffect = pdMultValues(type);
    console.log("multEffect1: "+multEffect1);
    console.log("addEffect1: "+addEffect1);
    console.log("equipEffect:"+equipEffect);
    console.log("pdEffect: "+pdEffect);
    let outputMenu = Math.floor((Math.floor(rawStat * multEffect1 / 100) + addEffect1 + equipEffect) * pdEffect / 100);
    let upperStat = 10*outputMenu;
    let lowerStat = Math.floor(0.5*outputMenu);
    try {
        document.getElementById("dps-output-menu-value-"+type).innerHTML = outputMenu;
    } catch (error) {
        console.log("Error-outputMenu: "+ type);
    }
    //outputMenu over//

    //cycleAllTalents(skillObject,type,"skill");
    //console.log("allbuffskill:",masterValues.allBuff);
    //updateText
}

function addMinusRateActual(allBuff,timingList,actualRateFixed){
    if (actualRateFixed === "rate"){var output = 100;}
    else {var output = 0;}
    var count = 0;
    for (let key in allBuff){
        console.log(key);
        if (timingList.includes(Number(key.split("-")[2])) && key.split("-")[0] === actualRateFixed){
            count += allBuff[key].length;
            console.log("allBuff[key]: "+allBuff[key]);
            //
            if (actualRateFixed === "rate"){
                if (key.split("-")[1] === "plus"){
                    output *= allBuff[key].reduce(outputAccumRatePlus,1);
                } else if (key.split("-")[1] === "minus"){
                    output *= allBuff[key].reduce((acc,curr)=>((Number(acc))*(100-Number(curr))),1);
                } else {/*keysplit === none*/}
            } else if (actualRateFixed === "actual"){
                if (key.split("-")[1] === "plus"){
                    output += allBuff[key].reduce(outputAccumActual,0);
                } else if (key.split("-")[1] === "minus"){
                    output -= allBuff[key].reduce(outputAccumActual,0);
                } else {/*keysplit === none*/}
            } else {/*actualRateFixed is fixed*/}
        } else {} //wrong timing or wrong countType
    }
    if (actualRateFixed === "rate"){
        console.log("returned output: "+output);
        return output / (100**(count));
    } else {return output;}
}
function outputAccumRatePlus(accum, allBuffKey){
    console.log(allBuffKey);
    if (allBuffKey.length === 1) {
        console.log("length 1");
        console.log(accum * (100+allBuffKey[0][0]));
        return accum * (100+allBuffKey[0][0]);
    } else if (allBuffKey.length === 2) {
        console.log(accum + allBuffKey[0][0]);
        return accum * (100+allBuffKey[0][0]);
    } else if (allBuffKey.length === 3) {
        console.log("length 3");
        if (allBuffKey[2][0] === 0){
            return accum * (100+allBuffKey[0][0]);
        } else {}
        let referenceValue = selfReference[allBuffKey[2][0].toString()];
        let referenceValueMax = allBuffKey[2][1];
        let toBeAdd = 0;
        if (allBuffKey[2][0] === 200){
            if (referenceValue <= referenceValueMax) {
                toBeAdd = allBuffKey[0][0];
            } else {
                toBeAdd = (allBuffKey[0][0] * (100-referenceValue)/(100-referenceValueMax));
            }
        } else {
            if (referenceValue >= referenceValueMax) {
                toBeAdd = allBuffKey[0][0];
            } else {
                toBeAdd = (allBuffKey[0][0] * referenceValue / referenceValueMax);
            }
        }
        console.log(accum + toBeAdd);
        return accum + toBeAdd;
    } else {console.log("length 0 or more than 3");}
}





function outputAccumActual(accum, allBuffKey){
    console.log(allBuffKey);
    if (allBuffKey.length === 1) {
        console.log("length 1");
        console.log(accum + allBuffKey[0][0]);
        return accum + allBuffKey[0][0];
    } else if (allBuffKey.length === 2) {
        console.log("length 2");
        console.log(accum + allBuffKey[0][0]);
        return accum + allBuffKey[0][0];
    } else if (allBuffKey.length === 3) {
        console.log("length 3");
        if (allBuffKey[2][0] === 0){
            return accum + allBuffKey[0][0];
        } else {}
        let referenceValue = selfReference[allBuffKey[2][0].toString()];
        let referenceValueMax = allBuffKey[2][1];
        let toBeAdd = 0;
        if (allBuffKey[2][0] === 200){
            if (referenceValue <= referenceValueMax) {
                toBeAdd = allBuffKey[0][0];
            } else {
                toBeAdd = (allBuffKey[0][0] * (100-referenceValue)/(100-referenceValueMax));
            }
        } else {
            if (referenceValue >= referenceValueMax) {
                toBeAdd = allBuffKey[0][0];
            } else {
                toBeAdd = (allBuffKey[0][0] * referenceValue / referenceValueMax);
            }
        }
        console.log(accum + toBeAdd);
        return accum + toBeAdd;
    } else {console.log("length 0 or more than 3");}
}





//only use addWithPrevious if there is already an array
//addwithprevious only works on stats below 1000 (or stat67)
function cycleAllTalents(abilityObject,type,parseType,addWithPrevious = false){
    let allTalents = abilityObject["talentList"];
    for (let i=0; i<allTalents.length;i++){
        if (eBuffTypeParse(allTalents[i]["talentId"])[0] === type){
            /*console.log("type matches");*/
            let conditionRecord = {"trigger":true,"active":true};
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
            console.log(conditionRecord);
            let range = allTalents[i]["range"];
            if (conditionRecord.active && conditionRecord.trigger && (range===1||range===2||range===3)){
                /*console.log("pushed to buff array");*/
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
                        param0 = Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1));
                        param = [param0];
                    } else if (allTalents[i]["param"].length === 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1));
                        param1 = allTalents[i]["param"][1]["num"][0];
                        param = [param0,param1];
                    } else if (allTalents[i]["param"].length > 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1));
                        param1 = allTalents[i]["param"][1]["num"][0];
                        param2 = allTalents[i]["param"][2]["num"][0];
                        param = [param0,param1,param2];
                    } else {}
                } else {
                    //not skill (as of now)
                    if (allTalents[i]["param"].length === 1){
                        timing = allTalents[i]["timing"].toString();
                        param0 = allTalents[i]["param"][0]["num"];
                        param = [param0];
                    } else if (allTalents[i]["param"].length === 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = allTalents[i]["param"][0]["num"];
                        param1 = allTalents[i]["param"][1]["num"];
                        param = [param0,param1];
                    } else if (allTalents[i]["param"].length > 2){
                        timing = allTalents[i]["timing"].toString();
                        param0 = allTalents[i]["param"][0]["num"];
                        param1 = allTalents[i]["param"][1]["num"];
                        param2 = allTalents[i]["param"][2]["num"];
                        param = [param0,param1,param2];
                    } else {}
                }//here
                console.log(addWithPrevious,allTalents[i]["talentId"] < 1000);
                try {
                    //fixed talent
                    if (eBuffTypeParse(allTalents[i]["talentId"])[1].split("-")[0] === "fixed"){
                        console.log("isFixedTalent");
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        let forError = ABarray.length; // will throw an error if ref//
                        //if here, means there is a value here
                        console.log("need to replace");
                        ABarray[ABarray.length-1][0] = param[0];
                    }
                    //movspd and redploy
                    else if (type === "stat5" || type === "stat146"){
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        console.log("still here");
                        if (param[0] > ABarray[ABarray.length-1][0]){
                            ABarray[ABarray.length-1][0] = param[0];
                        } else {
                            //no change, param not added
                        }
                    }
                    else if (addWithPrevious && allTalents[i]["talentId"] < 1000){
                        console.log("addwithprevious");
                        let ABarray = masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing];
                        ABarray[ABarray.length-1][0] = Number(ABarray[ABarray.length-1][0]) + Number(param[0]);
                    }
                    else {
                        console.log("not addwithprevious");
                        masterValues.allBuff[eBuffTypeParse(allTalents[i]["talentId"])[1]+"-"+timing].push(param);
                    }
                } catch (err) {
                    console.log("create new entry");
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
        console.log("Not in object!");
    }
}

function pdMultValues(type){ //timing = 4//
    let totalPartyBuff = 100;
    for (i=0;i<partychecks.length;i++){
        if (partychecks[i].checked){
            if (partybuffref[partychecks[i].id].cond.length == 0){
                try {
                    totalPartyBuff += partybuffref[partychecks[i].id][type][0];
                } catch (err) {}
            }
            else if (partybuffref[partychecks[i].id].cond.includes(masterValues.unitcard["element"])||partybuffref[partychecks[i].id].cond.includes(masterValues.baseClass)){
                try {
                    totalPartyBuff += partybuffref[partychecks[i].id][type][0];
                } catch (err) {}
            }
        }
    }
    //console.log(type+"-pBuff:",totalPartyBuff)
    for (i=0;i<divinechecks.length;i++){
        let divineCB = divinechecks[i];
        let divineLV = Number(document.getElementById("level"+divineCB.id.split("divine")[1]).value);
        //console.log(partybuffref[divineCB.id].cond)
        if (divineCB.checked){
            if (partybuffref[divineCB.id].cond.length == 0){
                try {
                    totalPartyBuff *= (partybuffref[divineCB.id][type][divineLV-1]/100 + 1);
                    break
                } catch (err) {//console.log("No buff")
                    totalPartyBuff *= 100;
                }
            }
            else if (partybuffref[divineCB.id].cond.includes(masterValues.unitcard["element"])||partybuffref[divineCB.id].cond.includes(masterValues.baseClass)){
                try {
                    //console.log(partybuffref[divineCB.id][type][divineLV-1])
                    if (typeof partybuffref[divineCB.id][type][divineLV-1] == "number"){
                    totalPartyBuff *= (partybuffref[divineCB.id][type][divineLV-1]+100);
                    break
                    } else {}
                } catch (err) {//console.log("No buff")
                    totalPartyBuff *= 100;
                }
            } else {//console.log("Error 3")
            }
        } else {}
    }
    console.log(type+"-pdBuff:",totalPartyBuff)
    return totalPartyBuff/100;
}

function oldAllDPS(){
    let RateBuff1 = [0];
    let AddBuff1 = [0];
    let RateBuff2 = [0];
    let AddBuff2 = [0];
    var subskillID_1 = getAttachID("subskill1");
    var subskillID_2 = getAttachID("subskill2");
    if (subskillID_1 == -1 || subskillID_2 == -1){
        //console.log("Either subskill is 'None'")
        if (subskillID_1 == -1 && subskillID_2 != -1) {
            //subskill 2 is active
            let attachObject = attach_ability_data.table[subskillID_2].talentList;
            RateBuff1.push(extractAttachTalent(attachObject,type,23)[0])
            AddBuff1.push(extractAttachTalent(attachObject,type,23)[1])
            RateBuff2.push(extractAttachTalent(attachObject,type,1)[0])
            AddBuff2.push(extractAttachTalent(attachObject,type,1)[1])
        } else if (subskillID_1 != -1 && subskillID_2 == -1) {
            //subskill 1 is active
            let attachObject = attach_ability_data.table[subskillID_1].talentList;
            RateBuff1.push(extractAttachTalent(attachObject,type,23)[0])
            AddBuff1.push(extractAttachTalent(attachObject,type,23)[1])
            RateBuff2.push(extractAttachTalent(attachObject,type,1)[0])
            AddBuff2.push(extractAttachTalent(attachObject,type,1)[1])
        } else {
            //no subskill is active
        }
    } else if (attach_ability_data.table[subskillID_1].name.split(" ")[0] == attach_ability_data.table[subskillID_2].name.split(" ")[0]){
        //console.log("Same kind of subskill")
        if (subskillID_1 >= subskillID_2){
            let attachObject = attach_ability_data.table[subskillID_1].talentList;
            RateBuff1.push(extractAttachTalent(attachObject,type,23)[0])
            AddBuff1.push(extractAttachTalent(attachObject,type,23)[1])
            RateBuff2.push(extractAttachTalent(attachObject,type,1)[0])
            AddBuff2.push(extractAttachTalent(attachObject,type,1)[1])
        } else {
            let attachObject = attach_ability_data.table[subskillID_2].talentList;
            RateBuff1.push(extractAttachTalent(attachObject,type,23)[0])
            AddBuff1.push(extractAttachTalent(attachObject,type,23)[1])
            RateBuff2.push(extractAttachTalent(attachObject,type,1)[0])
            AddBuff2.push(extractAttachTalent(attachObject,type,1)[1])
        }
    } else {
        //console.log("Different kind of subskill")
        let attachObject = attach_ability_data.table[subskillID_1].talentList;
        let tempSubskill1 = extractAttachTalent(attachObject,type,23)
        let tempSubskill2 = extractAttachTalent(attachObject,type,1)
        attachObject = attach_ability_data.table[subskillID_2].talentList;
        RateBuff1.push(extractAttachTalent(attachObject,type,23)[0]+tempSubskill1[0])
        AddBuff1.push(extractAttachTalent(attachObject,type,23)[1]+tempSubskill1[1])
        RateBuff2.push(extractAttachTalent(attachObject,type,1)[0]+tempSubskill2[0])
        AddBuff2.push(extractAttachTalent(attachObject,type,1)[1]+tempSubskill2[1])
    }
    //↓ATTACH AND SELF-BUFF STAT↓//
    RateBuff1.push(selfBuff[type][0])
    AddBuff1.push(selfBuff[type][1])
    let RateBuff1Mult = RateBuff1.reduce((acc,curr)=>(acc)*(1+curr/100),1);
    let AddBuff1Mult = AddBuff1.reduce((acc,curr)=>acc+curr);
    console.log(type+"Rate1:",RateBuff1Mult,type+"Add1:",AddBuff1Mult);
    rawStat = Math.floor(rawStat * RateBuff1Mult + AddBuff1Mult);
    //↑ATTACH AND SELF-BUFF STAT↑//



    /*
    //EQUIPMENT STAT//
    rawStat += equipValues("1",type,cc) + equipValues("2",type,cc) + equipValues("3",type,cc) + equipValues("4",type,cc);
    //PARTY+DIVINE STAT//
    //console.log(rawStat);
    rawStat = Math.floor(rawStat * pdMultValues(type));
    rawStat = Math.floor(rawStat + divineAdd(type));
    var upperStat = Math.floor(rawStat * 10);
    var lowerStat = Math.floor(rawStat * 0.5);
    //For display//
    document.getElementById("dps-output-menu-value-"+type).innerHTML = rawStat;
    //END OF BASE STATS//
    //START OF BATTLE STATS//
    //ATTRIBUTE TILE//
    if (document.getElementById("shared20001").checked){
        if (type === "stat2"||type === "stat3"||type === "stat4"){
            RateBuff2.push(15*attrEffect);
        } else if (type === "stat7"){
            RateBuff2.push(10*attrEffect);
        } else {}
    }
    //TACTICS GUARD//
    if (type === "stat3"){
        RateBuff2.push(Number(document.getElementById("shared20003").value)*4);
    }
    //ATKUP WHILE MOVE (1090)//
    if (type === "stat2"){
        if (Number(document.getElementById("subskill1").value) === 1090 || Number(document.getElementById("subskill2").value === 1090)){
            if (document.getElementById("shared20004").checked){
                RateBuff2.push(100);
            } else {}
        } else {}
    } else {}
    //Other allies' skills (Mearus)//
    RateBuff2.push(allAlliesSkillRate(type));
    //Extra Buffs (no Block input)//
    try {
        RateBuff2.push(Number(document.getElementById("extra-"+type+"-1").value));
        AddBuff2.push(Number(document.getElementById("extra-"+type+"-2").value));
    } catch (err) {}
    //Supporter Buffs (no HP, aSpd, PAD, Block input)//
    try {
        AddBuff2.push(Number(document.getElementById("supporter-buff-value-"+type).value));
    } catch (err) {}
    //Chara-specific Buffs//
    console.log("Hi");
    console.log(charaSpecificSkillRates(type));
    console.log(charaSpecificSkillAdds(type));
    RateBuff2.push(charaSpecificSkillRates(type));
    AddBuff2.push(charaSpecificSkillAdds(type));
    //---------------------------------//
    //Now RateBuff2 is WITHOUT EX skill//
    //---------------------------------//
    let RateBuff2Mult = RateBuff2.reduce((acc,curr)=>(acc)+(curr/100),1);
    let AddBuff2Mult = AddBuff2.reduce((acc,curr)=>acc+curr);
    console.log(type+"Rate2:",RateBuff2Mult,type+"Add2:",AddBuff2Mult);
    let battleStat = Math.floor(rawStat * RateBuff2Mult + AddBuff2Mult);
    if (battleStat < lowerStat){
        battleStat = lowerStat;
    } else if (battleStat > upperStat){
        battleStat = upperStat;
    } else {}
    document.getElementById("dps-output-battle-value-"+type).innerHTML = battleStat;
    //EX Skill//
    let skillaltnumber = Number(document.getElementById("skill-alt-select").value);
    let skilllevelnumber = Number(document.getElementById("skill-level-select").value);
    getOwnSkillRates(type)

    



    */
}
function getOwnSkillRates(type){
    let totalOwnSkillRate = 0;
    console.log(skillaltnumber);
}


function charaSpecificSkillRates(type){
    let totalSpecificRate = 0;
    let CSnumber = document.getElementsByClassName("chara-specific-"+masterValues.charaID.toString()).length;
    for (let i=1;i<(CSnumber+1);i++){
        let charaSpecificIndex = document.getElementById("charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()).value;
        if (masterValues.charaAwaked){
            try {
                let CSList = charaSpecificRef["charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()+"a"][type];
                if (typeof CSList[0] === "number"){
                    if (charaSpecificIndex > CSList.length){
                        totalSpecificRate += CSList[CSList.length-1];
                    } else {
                        totalSpecificRate += CSList[charaSpecificIndex];
                    }
                } else {} //else is not Rate
            } catch (err) {}
        } else {
            try {
                let CSList = charaSpecificRef["charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()][type];
                if (typeof CSList[0] === "number"){
                    if (charaSpecificIndex > CSList.length){
                        totalSpecificRate += CSList[CSList.length-1];
                    } else {
                        totalSpecificRate += CSList[charaSpecificIndex];
                    }
                } else {} //else is not Rate
            } catch (err) {}
        }
    }
    return totalSpecificRate;
}
function charaSpecificSkillAdds(type){
    let totalSpecificAdd = 0;
    let CSnumber = document.getElementsByClassName("chara-specific-"+masterValues.charaID.toString()).length;
    for (let i=1;i<(CSnumber+1);i++){
        let charaSpecificIndex = document.getElementById("charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()).value;
        if (masterValues.charaAwaked){
            try {
                let CSList = charaSpecificRef["charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()+"a"][type];
                if (typeof CSList[0] === "string"){
                    if (charaSpecificIndex > CSList.length){
                        totalSpecificAdd += Number(CSList[CSList.length-1].split("a")[1]);
                    } else {
                        totalSpecificAdd += Number(CSList[charaSpecificIndex].split("a")[1]);
                    }
                } else {} //else is not Add
            } catch (err) {}
        } else {
            try {
                let CSList = charaSpecificRef["charaSpecific"+masterValues.charaID.toString()+"-"+i.toString()][type];
                if (typeof CSList[0] === "string"){
                    if (charaSpecificIndex > CSList.length){
                        totalSpecificAdd += Number(CSList[CSList.length-1].split("a")[1]);
                    } else {
                        totalSpecificAdd += Number(CSList[charaSpecificIndex].split("a")[1]);
                    }
                } else {} //else is not Add
            } catch (err) {}
        }
    }
    return totalSpecificAdd;
}
function allAlliesSkillRate(type){
    let totalAllAlliesSkill = 0
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
    return totalAllAlliesSkill;
}

function divineAdd(type){
    let totalDivineAddBuff = 0
    for (i=0;i<divinechecks.length;i++){
        let divineCB = divinechecks[i];
        let divineLV = Number(document.getElementById("level"+divineCB.id.split("divine")[1]).value);
        //console.log(partybuffref[divineCB.id].cond)
        if (divineCB.checked){
            if (partybuffref[divineCB.id].cond.length == 0){
                try {
                    console.log(typeof partybuffref[divineCB.id][type][divineLV-1])
                    totalDivineAddBuff += Number(partybuffref[divineCB.id][type][divineLV-1].split("a")[1]);
                    break
                } catch (err) {//console.log("No buff")
                }
            }
            else if (partybuffref[divineCB.id].cond.includes(char["attribute"])||partybuffref[divineCB.id].cond.includes(masterValues.baseClass)){
                try {
                    if (typeof partybuffref[divineCB.id][type][divineLV-1] == "string");
                    console.log("String");
                    totalDivineAddBuff += Number(partybuffref[divineCB.id][type][divineLV-1].split("a")[1]);
                    break
                } catch (err) {//console.log("No buff")
                    totalDivineAddBuff += 0;
                }
            } else {//console.log("Error 3")
            }
        } else {}
    }
    console.log(type+"-dAddBuff:",totalDivineAddBuff);
    return totalDivineAddBuff;
}
function equipValues(equipnumber,type,cc){
    let value;
    if (document.getElementById("equip"+equipnumber).checked){
        value = equip[cc][Number(equipnumber)-1][type];
        if (value === undefined){value = 0;}else{}
    } else {value = 0;}
    return value;
}

function extractAttachTalent(list,type,time){
    let attachTalentRate = 0;
    let attachTalentActual = 0;
    let attachTalentFixed = -1;
    if (type == "stat1"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,1,time)
            attachTalentRate -= talentParseParamOnly(list,2,time)
            attachTalentActual += talentParseParamOnly(list,3,time)
            attachTalentActual -= talentParseParamOnly(list,4,time)
            attachTalentFixed = talentParseParamOnly(list,5,time)
            }
    } else if (type == "stat2"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,6,time)
            attachTalentRate -= talentParseParamOnly(list,7,time)
            attachTalentActual += talentParseParamOnly(list,8,time)
            attachTalentActual -= talentParseParamOnly(list,9,time)
            attachTalentFixed = talentParseParamOnly(list,10,time)
            }
    } else if (type == "stat3"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,11,time)
            attachTalentRate -= talentParseParamOnly(list,12,time)
            attachTalentActual += talentParseParamOnly(list,13,time)
            attachTalentActual -= talentParseParamOnly(list,14,time)
            attachTalentFixed = talentParseParamOnly(list,15,time)
            }
    } else if (type == "stat4"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,16,time)
            attachTalentRate -= talentParseParamOnly(list,17,time)
            attachTalentActual += talentParseParamOnly(list,18,time)
            attachTalentActual -= talentParseParamOnly(list,19,time)
            attachTalentFixed = talentParseParamOnly(list,20,time)
            }
    } else if (type == "stat5"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,26,time)
            attachTalentRate -= talentParseParamOnly(list,27,time)
            attachTalentActual += talentParseParamOnly(list,28,time)
            attachTalentActual -= talentParseParamOnly(list,29,time)
            attachTalentFixed = talentParseParamOnly(list,30,time)
            }
    } else if (type == "stat6"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,31,time)
            attachTalentRate -= talentParseParamOnly(list,32,time)
            attachTalentActual += talentParseParamOnly(list,33,time)
            attachTalentActual -= talentParseParamOnly(list,34,time)
            attachTalentFixed = talentParseParamOnly(list,35,time)
            }
    } else if (type == "stat7"){
        for (i = 0;i<list.length;i++){
            attachTalentRate += talentParseParamOnly(list,36,time)
            attachTalentRate -= talentParseParamOnly(list,37,time)
            attachTalentActual += talentParseParamOnly(list,38,time)
            attachTalentActual -= talentParseParamOnly(list,39,time)
            attachTalentFixed = talentParseParamOnly(list,40,time)
            }
    }
    //console.log([attachTalentRate, attachTalentActual,attachTalentFixed])
    return [attachTalentRate, attachTalentActual,attachTalentFixed];
}
function talentParseParamOnly(list,bufftype,time) {
    let remainHP = Number(document.getElementById("shared20002").value);
    if (list[i].talentId == bufftype && list[i].timing == time){
        if (list[i].triggerData.length == 0){
            if (list[i].activeData.length == 0){
                if (list[i].param[2] === undefined){//test for 底力//
                    return Number(list[i].param[0].num[0]);
                } else {
                    return (100-remainHP)/100 * Number(list[i].param[0].num[0]);
                }
            } else if (list[i].activeData[0].type == 1006) {
                if ((masterValues.baseClass+1000).toString().slice(1,2) == list[i].activeData[0].num[0]){
                    return Number(list[i].param[0].num[0]);
                } else if (bufftype%5 == 0) {return -1;} else {return 0;}
            } else if (masterValues.baseClass >= list[i].activeData[0].num[0] && masterValues.baseClass <= list[i].activeData[1].num[0]){
                return Number(list[i].param[0].num[0])
            } else if (bufftype%5 == 0) {return -1;} else {return 0;}
        } else {
            //as of now only 疾風怒濤 has a base stat with triggerData, the rest are either bomb activation or damage up with trigger
            return 0;}
    } else if (bufftype%5 == 0) {return -1;} else {return 0;}
}

function talentIdentifier(talentText){
    if (talentText.slice(0,2) == "最大"){
        return "stat1";
    } else if (talentText.slice(0,2) == "攻撃"){
        if (talentText.slice(0,3) == "攻撃力") {
            return "stat2";
        } else if (talentText.slice(0,3) == "攻撃速") {
            return "stat6";
        }
    } else if (talentText.slice(0,2) == "物理"){
        return "stat3";
    } else if (talentText.slice(0,2) == "魔法"){
        return "stat4";
    } else if (talentText.slice(0,2) == "射程"){
        return "stat8";
    } else {
        return
    }
}

function getAttachID(subskillSelectID){
    let requireCheck = [1040,1041,1042,1043,1044,1045,1090];
    let subskillSelect = Number(document.getElementById(subskillSelectID).value);
    let subskillIndex = attach_ability_data.table.findIndex(object => {return object.id === subskillSelect})
    if (requireCheck.includes(subskillSelect)){
        document.getElementById(subskillSelectID+"condcheck").innerHTML = "「条件」をチェック！";
    } else {
        document.getElementById(subskillSelectID+"condcheck").innerHTML = "";
    }
    return subskillIndex;
}

function updateBlockCount(){
    let maxBC = document.getElementById("")
    let currentBC = document.getElementById("input-number-blocked").value;
    let BCList = document.getElementsByClassName("actualBlockCount");
    console.log(BCList);
    for (let i=0;i<BCList.length;i++){
        BCList[i].value = currentBC;
    }
}
function talenttext(){
    document.getElementById("talent3").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId3"]})]["name"];
    document.getElementById("talent4").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId4"]})]["name"];
    document.getElementById("talent5").innerHTML = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === masterValues.unitcard["awakingAbilityId5"]})]["name"];
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
    let baseText = skillObject["text"].replace(/\r/g,"").replace(/\n/g,"<br>"); //replace "\r","\n" in future(?)
    let beforeArray = baseText.match(/(?<=\[)[^\][]*(?=])/g);
    let maxDuration = skillObject["maxDurationTime"];
    let minDuration = skillObject["minDurationTime"];
    for (let i=0; i<beforeArray.length;i++){
        let B4Asplit = beforeArray[i].split(",")
        if (beforeArray[i] === "duration"){
            let replaceDuration = Math.floor((minDuration + (maxDuration-minDuration)/4*(skilllevelnumber-1))/30);
            baseText = baseText.replace("duration",replaceDuration.toString());
        } else if (B4Asplit[0] === "MAG") {
            let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
            let maxParam = skillObject["talentList"][B4Asplit[1]]["maxParam"][B4Asplit[2]]["num"][0];
            if (maxParam === 0){maxParam = minParam} else {}
            let replaceParam = Math.floor(minParam + (maxParam-minParam)/4*(skilllevelnumber-1))/100;
            if (skillObject["talentList"][B4Asplit[1]]["param"].length === 1){
                replaceParam += 1;
            } else {
                let plusOneTest = false;
                //changed j=0 to j=1, not sure if affects
                for (let j=1;j<skillObject["talentList"][B4Asplit[1]]["param"].length;j++){
                    if (skillObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 1 || skillObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 2){
                        plusOneTest = true;
                    } else {}
                }
                if (plusOneTest){} else {replaceParam+=1;}
            }
            baseText = baseText.replace(beforeArray[i], replaceParam.toString());
        } else if (B4Asplit[0] === "0"){
            let minParam = skillObject["talentList"][B4Asplit[1]]["param"][B4Asplit[2]]["num"][0];
            let maxParam = skillObject["talentList"][B4Asplit[1]]["maxParam"][B4Asplit[2]]["num"][0];
            let replaceParam = Math.floor((minParam + (maxParam-minParam)/4*(skilllevelnumber-1)));
            baseText = baseText.replace(beforeArray[i], replaceParam.toString());
        }
    }
    let pattern = baseText.match(/\[(attack|hp|defense|mdefense),\[(\d|\.)*\]\]/g);
    if (pattern !== null){
        for (let i=0; i<pattern.length;i++){
            let replaceText = "("+pattern[i]+")";
            replaceText = replaceText.replace("hp,","HP×");
            replaceText = replaceText.replace("attack,","攻撃力×");
            replaceText = replaceText.replace("defense,","物理防御×");
            replaceText = replaceText.replace("mdefense,","魔法防御×");
            baseText = baseText.replace(pattern[i],replaceText);
        }
    }
    baseText = baseText.replace(/\[/g,"").replace(/\]/g,"");
    document.getElementById("dps-output-menu-skill-text").innerHTML = baseText;
    document.getElementById("dps-output-battle-skill-text").innerHTML = baseText;
    document.getElementById("dps-output-skill-skill-text").innerHTML = baseText;
}
function traittextreplace(){
    let traitObject = ability_data["table"][ability_data["table"].findIndex(object => {return object.id === (masterValues.charaID-10000)})];
    //manipulation//
    let baseText = traitObject["text"].replace(/\r/g,"").replace(/\n/g,"<br>"); //replace "\r","\n" in future(?)
    console.log(baseText);
    let beforeArray = baseText.match(/(?<=\[)[^\][]*(?=])/g);
    console.log(typeof beforeArray);
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
            console.log(replaceParam);
            if (traitObject["talentList"][B4Asplit[1]]["param"].length === 1){
                replaceParam += 1;
            } else {
                let plusOneTest = false;
                //changed j=0 to j=1, not sure if affects
                for (let j=1;j<traitObject["talentList"][B4Asplit[1]]["param"].length;j++){
                    if (traitObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 1 || traitObject["talentList"][B4Asplit[1]]["param"][j]["num"][0] === 2){
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
    //console.log(baseText);
    //need notawaked also, look at loren (10028)
    let patternP = baseText.match(/\[(attack|hp|defense|mdefense),\[(\d|\.)*\]\]/g);
    if (patternP !== null){
        for (let i=0; i<patternP.length;i++){
            let replaceText = "("+patternP[i]+")";
            replaceText = replaceText.replace("hp,","HP×");
            replaceText = replaceText.replace("attack,","攻撃力×");
            replaceText = replaceText.replace("defense,","物理防御×");
            replaceText = replaceText.replace("mdefense,","魔法防御×");
            replaceText = replaceText.replace(/\[/g,"").replace(/\]/g,"");
            baseText = baseText.replace(patternP[i],replaceText);
        }
    }
    //console.log(baseText);
    let pattern = baseText.match(/\[awaked,.*\]/g);
    if (pattern !== null){
        for (let i=0; i<pattern.length;i++){
            let replaceText = "("+pattern[i]+")";
            replaceText = replaceText.replace("awaked,","フル覚醒で");
            console.log(replaceText);
            baseText = baseText.replace(pattern[i],replaceText);
        }
    }
    baseText = baseText.replace(/\[/g,"").replace(/\]/g,"");
    document.getElementById("dps-output-menu-trait-text").innerHTML = baseText;
    document.getElementById("dps-output-battle-trait-text").innerHTML = baseText;
    document.getElementById("dps-output-skill-trait-text").innerHTML = baseText;
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
    } else {return true;}
}
/*
const text = "[Some text] ][with[ [some important info]";
console.log( text.match(/(?<=\[)[^\][]*(?=])/g) );
console.log( Array.from(text.matchAll(/\[([^\][]*)]/g), x => x[1]) );
// Both return ["Some text", "some important info"]
*/ 

//super-long/repetitive code starts here
function attachOptions1() {
    let optionList = document.getElementById('subskill1').options;
    let attachOptions = [
        {value: 0, text: 'なし'},
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
        //{value: 1052, text: 'エレメンタルブースト'},
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
        {value: 1094, text: '物理攻撃+魔法攻撃回避'},];

attachOptions.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);
}

function attachOptions2() {
    let optionList = document.getElementById('subskill2').options;
    let attachOptions = [
        {value: 0, text: 'なし'},
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
        //{value: 1052, text: 'エレメンタルブースト'},
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
        {value: 1094, text: '物理攻撃+魔法攻撃回避'},];
    
attachOptions.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);
}
//loaders//
window.addEventListener("load", talenttext);
window.addEventListener("load", traittextreplace);
window.addEventListener("load", skilltextreplace);
window.addEventListener("load",equipImageChange);
window.addEventListener("load",selfConditionUpdate);
window.addEventListener("load",allDPS);
//repetitive//
window.addEventListener("load", attachOptions1);
window.addEventListener("load", attachOptions2);
//test//
console.log(undefined !== 3);