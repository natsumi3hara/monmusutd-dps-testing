var selfConditions = {
	//each value of object is "conditional"//
	"1": 0, //isBlock (クレッタとか)
	"2": 0, //isMove (疾風怒濤)
	"3": 0, //isSummonNear (無用)
	"4": 1, //isSummonFar (無用 - スゥノとテナ)
	"5": 0, //isFly (ハリエラ?) screw hariela, adjust when something important appears
	"6": 0, //isGround (無用 - ラキオン(敵に))
	"7": 0, //isPhysicalAttack (無用)
	"8": 0, //isMagicAttack (無用)
	"9": 0, //isIgnoreAttack (無用)
	"10": 0, //isHealAttack (無用)
	"11": 0, //isFriend (無用)
	"12": 0, //isEnemy (無用)
	"13": 0, //isToken (無用)
	"14": 0, //isOwnerToken (無用)
	"15": 0, //isSkillActivated (いろいろ)
	"16": 0, //isPlayerUnit (無用
	"17": 0, //isEnemyUnit (無用)
	"18": 1, //default is 1 for "is self"
	"19": 0, //isBattleCharacterEnable (無用)
	"20": 0, //isBoss (無用)
	"21": 0, //isBlockedByOwner (クレッタ、ランサー)
	"22": 0, //isAttributeSameAsOwner (オキシー) (but timing 1?)
	"23": 0, //isStun (無用)
	"24": 0, //isPetrifaction (無用)
	"25": 0, //isPoison (無用)
	"26": 0, //isAwakingCompleted
	"27": 0, //isWaitMotion (無用)
	"28": 0, //isSummonAll (無用)
	"29": 0, //isOwnerEnchantTarget (NEW)
	"30": 0, //isIndomitable (NEW)
	"31": 0, //isBurn (NEW)
	"32": 0, //isScratch (NEW)
	"33": 0, //isFrozen (NEW)
	"34": 0, //isKenki (NEW)
	"1000": 0, //Move (無用)
	"1001": 0, //Weather (無用)
	"1002": 0, //Attribute
	"1003": 0, //Rarity (無用) (but added because easy)
	"1004": 0, //Tribe (無用) (but added because easy)
	"1005": 1, //Gender (0 is male, 1 is female, others not used)
	"1006": 0, //jobSystemId (found in job_data)
	"1007": 0, //jobId
	"1008": 0, //charaId
	"1009": 1, //skillNo
	"1010": [0], //attributeTile
	"1011": 0, //traitTag
	"2000": 100, //hpRate
	"2001": 0, //existenceTime (dot % operator)
	"2002": 0,//waitTime (曲刀用)
	"2003": 0, //attackCount (archer/lafka etc) (でも無用?)
	"2004": 0, //continuousAttackCount (ラゴス、ユラ) (でも無用?)
	"2005": 0, //moveDownCount (無用)
	"2006": 0, //revivalCount (アテエル、ディリオ)
	"2007": 0, //TotalAttackCount (as of now 無用)
	"2008": 0, //TotalSkillCount (ソレイアのみ)
	"2009": 0, //entryPoint (無用)
	"2010": 0, //extraIndex (無用)
	"2011": 0, //aliveSlaveCount (無用)
	"2012": 0, //attackTargetCount (フィロソフィア、ラフーカ)
	"2013": 0, //blockCount (いろいろ)
	"2014": 0, //destroyCount
	"2015": 0, //TotalDestroyCount
	"3000": undefined, //questCategory (無用)
	"3001": undefined, //questId (無用?)
	"3002": undefined, //timeLimit (無用)
	"3003": 0, //mapType (dungeon is 1) (シルバ、アスタ)
	"4000": undefined, //isTutorial (無用)
	"4001": undefined, //isScenarioPlay (無用)
	"4002": undefined, //isNotCleared (無用)
	"5000": undefined, //sortieTribe (ゴブリンのみ) (無用?) (check of anisira on field)
	"5001": undefined, //sortieJobSystem (無用)
	"5002": undefined, //sortieJob (無用)
	"5003": undefined, //sortieChara (無用)
	"10000": undefined, //exclusive (無用?)
	"40000": 1, //giveTalent (1 for ally, 2 for enemy?)
	"40001": 0, //skillTalent (values of 1,2,3 ???)
	"40002": 0, //limit (いろいろ)
	"40003": 0, //touchArea (NEW)
	"40004": 0, //totalLimit (NEW)
	"40005": 0, //classActionTalent
}
var selfReference = {
	"0": 0, //None
	"1": 0, //Life (無用?)
	"2": 0, //Power (無用?)
	"3": 0, //Defense (無用?)
	"11": 0, //currentLife (無用?)
	"12": 0, //currentPower (無用?)
	"13": 0, //currentDefense (無用?)
	"100": 0, //existenceTime
	"101": 0, //givenDamage (無用?)
	"102": 0, //takenDamage
	"103": 0, //givenHealing (無用?)
	"104": 0, //takenHealing (無用?)
	"105": 0, //skillCount (無用?) soleia is 2008↑
	"200": 100, //hpRate
}
var enemyConditions = {
	//each value of object is "conditional"//
	"1": 0, //isBlock
	"2": 0, //isMove
	"3": 0, //isSummonNear
	"4": 0, //isSummonFar
	"5": 0, //isFly
	"6": 0, //isGround
	"7": 0, //isPhysicalAttack
	"8": 0, //isMagicAttack
	"9": 0, //isIgnoreAttack
	"10": 0, //isHealAttack
	"11": 0, //isFriend
	"12": 1, //isEnemy
	"13": 0, //isToken
	"14": 0, //isOwnerToken
	"15": 0, //isSkillActivated
	"16": 0, //isPlayerUnit
	"17": 0, //isEnemyUnit
	"18": 0, //default is 1 for "is self"
	"19": 0, //isBattleCharacterEnable
	"20": 0, //isBoss
	"21": 0, //isBlockedByOwner
	"22": 0, //isAttributeSameAsOwner
	"23": 0, //isStun
	"24": 0, //isPetrifaction
	"25": 0, //isPoison
	"26": 0, //isAwakingCompleted (無用)
	"27": 0, //isWaitMotion
	"28": 0, //isSummonAll
	"29": 0, //isOwnerEnchantTarget (NEW)
	"30": 0, //isIndomitable (NEW)
	"31": 0, //isBurn (NEW)
	"32": 0, //isScratch (NEW)
	"33": 0, //isFrozen (NEW)
	"34": 0, //isKenki (NEW)
	"1000": 0, //Move
	"1001": 0, //Weather
	"1002": 0, //Attribute
	"1003": 0, //Rarity
	"1004": 0, //Tribe
	"1005": 3, //Gender (0 is male, 1 is female, others not used)
	"1006": 0, //jobSystemId
	"1007": 0, //jobId
	"1008": 0, //charaId
	"1009": 1, //skillNo
	"1010": [0], //attributeTile
	"1011": 0, //traitTag
	"2000": 100, //hpRate
	"2001": 0, //existenceTime (DoT % operator)
	"2002": 0,//waitTime
	"2003": 0, //attackCount
	"2004": 0, //continuousAttackCount
	"2005": 0, //moveDownCount
	"2006": 0, //revivalCount
	"2007": 0, //TotalAttackCount
	"2008": 0, //TotalSkillCount
	"2009": 0, //entryPoint
	"2010": 0, //extraIndex
	"2011": 0, //aliveSlaveCount
	"2012": 0, //attackTargetCount
	"2013": 0, //blockCount
	"2014": 0, //destroyCount
	"2015": 0, //TotalDestroyCount
	"3000": undefined, //questCategory
	"3001": undefined, //questId
	"3002": undefined, //timeLimit
	"3003": 0, //mapType (dungeon is 1)
	"4000": undefined, //isTutorial
	"4001": undefined, //isScenarioPlay
	"4002": undefined, //isNotCleared
	"5000": undefined, //sortieTribe
	"5001": undefined, //sortieJobSystem
	"5002": undefined, //sortieJob
	"5003": undefined, //sortieChara
	"10000": undefined, //exclusive
	"40000": 1, //giveTalent (1 for ally, 2 for enemy?)
	"40001": 0, //skillTalent (values of 1,2,3 ???)
	"40002": 0, //limit
	"40003": 0, //touchArea (NEW)
	"40004": 0, //totalLimit (NEW)
	"40005": 0, //classActionTalent
}