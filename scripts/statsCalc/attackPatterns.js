//these numbers are added on to already existing ones

const attack_patterns = {
	"1": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":20,"damage":200},
		],
		"skill_critical":[
			{"probability":20,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"10001": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":20,"damage":200},
		],
		"skill_critical":[
			{"probability":20,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"3": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":4,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":20,"damage":200},
		],
		"skill_critical":[
			{"probability":20,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"4": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10004": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"5": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"6": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10006": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"7": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":-2,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10007": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":-2,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"8": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10008": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"11": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"12": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10012": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"13": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"14": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10014": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"15": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":5000,"extraTarget":0,"extraMulti":4,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"16": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"17": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10017": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"19": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10019": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"20": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10020": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"21": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"22": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10022": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"23": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10023": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"24": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10024": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"25": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10025": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"26": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10026": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"27": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":30,"time":3000,"extraTarget":2,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"27a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":60,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":40,"time":3000,"extraTarget":2,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"28": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10028": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"29": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10029": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"30": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10030": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"31": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10031": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"32": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10032": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"33": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"34": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"35": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10035": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"36": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"37": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10037": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"38": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10038": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"39": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10039": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"40": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10040": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"41": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":5000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10041": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"42": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"43": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"44": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":40,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
				{"probability":24,"time":6000,"extraTarget":0,"extraMulti":1,"text-ja":"2回攻撃","text-en":"Double Attack","text-zhtw":"2連撃","text-zhcn":"2连击","text-kr":"2회공격"},
				{"probability":36,"time":8000,"extraTarget":0,"extraMulti":2,"text-ja":"3回攻撃","text-en":"Triple Attack","text-zhtw":"3連撃","text-zhcn":"3连击","text-kr":"3회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10044": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":40,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
				{"probability":24,"time":6000,"extraTarget":0,"extraMulti":1,"text-ja":"2回攻撃","text-en":"Double Attack","text-zhtw":"2連撃","text-zhcn":"2连击","text-kr":"2회공격"},
				{"probability":36,"time":8000,"extraTarget":0,"extraMulti":2,"text-ja":"3回攻撃","text-en":"Triple Attack","text-zhtw":"3連撃","text-zhcn":"3连击","text-kr":"3회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"46": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10046": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"47": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10047": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"49": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10049": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"50": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":30,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":30,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊スキル攻撃","text-en":"Special Skill Attack","text-zhtw":"特殊技能攻撃","text-zhcn":"特殊攻击","text-kr":"특수스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"50a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":63,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":37,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":63,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":37,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊スキル攻撃","text-en":"Special Skill Attack","text-zhtw":"特殊技能攻撃","text-zhcn":"特殊攻击","text-kr":"특수스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10050": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":30,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10050a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":63,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":37,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"51": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":50,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1体攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":50,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"2体攻撃","text-en":"2-target Attack","text-zhtw":"2體攻撃","text-zhcn":"2体攻击","text-kr":"이체공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":50,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル1体攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":50,"time":4000,"extraTarget":1,"extraMulti":1,"text-ja":"スキル2体攻撃","text-en":"Skill 2-target Attack","text-zhtw":"技能2體攻撃","text-zhcn":"技能2体攻击","text-kr":"스킬 이체공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"51a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":40,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1体攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":60,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"2体攻撃","text-en":"2-target Attack","text-zhtw":"2體攻撃","text-zhcn":"2体攻击","text-kr":"이체공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":40,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル1体攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":60,"time":4000,"extraTarget":1,"extraMulti":1,"text-ja":"スキル2体攻撃","text-en":"Skill 2-target Attack","text-zhtw":"技能2體攻撃","text-zhcn":"技能2体攻击","text-kr":"스킬 이체공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"52": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"53": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"54": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"55": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10055": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"56": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"}, 
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10056": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"}, 
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"57": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"58": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10058": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"59": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"60": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10060": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"61": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0.5,"text-ja":"ターゲット","text-en":"Target","text-zhtw":"目標","text-zhcn":"目标","text-kr":"목표"},
				{"probability":100,"time":6000,"extraTarget":98,"extraMulti":3.5,"text-ja":"火の輪(範囲内計算)","text-en":"Ring of Fire(in range)","text-zhtw":"甜甜圈(範圍内)","text-zhcn":"甜甜圈(范围内)","text-kr":"불 반지(범위내)"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"62": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"63": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10063": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"64": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":4,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.34,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.34,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.34,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":2500,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.34,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10064": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":2500,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"65": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10065": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"66": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":50,"damage":200},
		],
		"skill_critical":[
			{"probability":100,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"66a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":50,"damage":230},
		],
		"skill_critical":[
			{"probability":100,"damage":230},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"67": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"68": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10068": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"69": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"70": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"71": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":98,"extraMulti":4,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"72": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"73": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"74": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"75": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"76": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"77": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"78": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10078": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":4,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"79": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10079": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":5000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"80": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"81": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"82": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"83": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":5500,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"84": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"85": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10085": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"86": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"87": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10087": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"88": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10088": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"89": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10089": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"90": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10090": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"91": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":10000,"extraTarget":0,"extraMulti":9,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10091": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"92": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10092": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"93": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10093": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"94": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":30,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[50],
		"skill_penetration":[50],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"94a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":60,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":40,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[50],
		"skill_penetration":[50],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"10094": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":70,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":30,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[50],
		"skill_penetration":[50],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"10094a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":60,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":40,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":3000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[50],
		"skill_penetration":[50],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"95": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":33.33,"time":4000,"extraTarget":2,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":4000,"extraTarget":2,"extraMulti":0,"text-ja":"スキル特殊攻撃","text-en":"Skill Special Attack","text-zhtw":"技能特殊攻撃","text-zhcn":"技能特殊攻击","text-kr":"스킬특수공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10095": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":33.33,"time":4000,"extraTarget":2,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":33.33,"time":4000,"extraTarget":2,"extraMulti":0,"text-ja":"スキル特殊攻撃","text-en":"Skill Special Attack","text-zhtw":"技能特殊攻撃","text-zhcn":"技能特殊攻击","text-kr":"스킬특수공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"96": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"97": {
		"attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":25,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
				{"probability":18.75,"time":6000,"extraTarget":0,"extraMulti":1,"text-ja":"2回攻撃","text-en":"Double Attack","text-zhtw":"2連撃","text-zhcn":"2连击","text-kr":"2회공격"},
				{"probability":14.06,"time":8000,"extraTarget":0,"extraMulti":2,"text-ja":"3回攻撃","text-en":"Triple Attack","text-zhtw":"3連撃","text-zhcn":"3连击","text-kr":"3회공격"},
				{"probability":10.55,"time":10000,"extraTarget":0,"extraMulti":3,"text-ja":"4回攻撃","text-en":"Quadruple Attack","text-zhtw":"4連撃","text-zhcn":"4连击","text-kr":"4회공격"},
				{"probability":31.64,"time":12000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"97a": {
		"attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":25,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
				{"probability":18.75,"time":6000,"extraTarget":0,"extraMulti":1,"text-ja":"2回攻撃","text-en":"Double Attack","text-zhtw":"2連撃","text-zhcn":"2连击","text-kr":"2회공격"},
				{"probability":14.06,"time":8000,"extraTarget":0,"extraMulti":2,"text-ja":"3回攻撃","text-en":"Triple Attack","text-zhtw":"3連撃","text-zhcn":"3连击","text-kr":"3회공격"},
				{"probability":10.55,"time":10000,"extraTarget":0,"extraMulti":3,"text-ja":"4回攻撃","text-en":"Quadruple Attack","text-zhtw":"4連撃","text-zhcn":"4连击","text-kr":"4회공격"},
				{"probability":31.64,"time":12000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"98": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10098": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"99": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"100": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10100": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"101": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":8000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"102": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"103": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"10103": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"104": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"105": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"106": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"107": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"108": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"109": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"110": {
		"attack":[
			{"cond":[["condition","34","",1]],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(剣気)","text-en":"Attack (Kenki)","text-zhtw":"攻撃(劍氣)","text-zhcn":"攻击(剑气)","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","34","",1]],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(剣気)","text-en":"Attack (Kenki)","text-zhtw":"攻撃(劍氣)","text-zhcn":"攻击(剑气)","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"111": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"112": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"113": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"114": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"115": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"116": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"117": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":7,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"118": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"119": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"120": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"121": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"122": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"123": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"124": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"125": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"126": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"127": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"128": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"129": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"131": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"132": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"133": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"134": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"135": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"136": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"137": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"138": {
		"attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"斧攻撃","text-en":"Axe Attack","text-zhtw":"斧頭攻撃","text-zhcn":"斧头攻击","text-kr":"도끼공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"ミサイル攻撃","text-en":"Missile Attack","text-zhtw":"導彈攻撃","text-zhcn":"导弹攻击","text-kr":"미사일 공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1","",1]],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"斧攻撃","text-en":"Axe Attack","text-zhtw":"斧頭攻撃","text-zhcn":"斧头攻击","text-kr":"도끼공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":2,"text-ja":"ミサイル攻撃","text-en":"Missile Attack","text-zhtw":"導彈攻撃","text-zhcn":"导弹攻击","text-kr":"미사일 공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"139": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"140": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":25,"damage":200},
		],
		"skill_critical":[
			{"probability":25,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"140a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":30,"damage":200},
		],
		"skill_critical":[
			{"probability":30,"damage":200},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"141": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"142": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"143": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"144": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"145": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"146": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":60,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":40,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"146a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":48,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":52,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":4,"text-ja":"5回攻撃","text-en":"Quintuple Attack","text-zhtw":"5連撃","text-zhcn":"5连击","text-kr":"5회공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"147": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"148": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"149": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"150": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"151": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"152": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"153": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"154": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"155": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"156": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"157": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"158": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"159": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"160": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"161": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"162": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"163": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"164": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":75,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":25,"time":4000,"extraTarget":2,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"165": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"166": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"168": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":2,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"169": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"170": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"171": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"172": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"173": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"174": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"175": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":7,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"176": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":75,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":25,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
				{"probability":25,"time":4000,"extraTarget":98,"extraMulti":0.5,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":100,"time":4000,"extraTarget":98,"extraMulti":2.3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"176a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":75,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":25,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
				{"probability":25,"time":4000,"extraTarget":98,"extraMulti":1.1,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":100,"time":4000,"extraTarget":98,"extraMulti":3.62,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"177": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"178": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"179": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"182": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":11000,"extraTarget":1,"extraMulti":11,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"183": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"184": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[40],
		"skill_penetration":[40],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"184a": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[52],
		"skill_penetration":[52],
		"BCL":0,
		"SCL":0,
		"BPL":1,
		"SPL":1,
	},
	"185": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":25,"damage":150},
		],
		"skill_critical":[
			{"probability":25,"damage":150},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"185a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[
			{"probability":32,"damage":150},
		],
		"skill_critical":[
			{"probability":32,"damage":150},
		],
		"penetration":[],
		"skill_penetration":[],
		"BCL":1,
		"SCL":1,
		"BPL":0,
		"SPL":0,
	},
	"187": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"188": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"189": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"190": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"191": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"192": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"193": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"195": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"196": {
		"attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[["condition","1007","",13015]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"攻撃(弓)","text-en":"Attack (Archer)","text-zhtw":"攻撃(弓)","text-zhcn":"攻击(弓)","text-kr":"공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
			{"cond":[["condition","1007","",13014]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13013]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[["condition","1007","",13012]],
			"pattern":[
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃(弓)","text-en":"Skill Attack (Archer)","text-zhtw":"技能攻撃(弓)","text-zhcn":"技能攻击(弓)","text-kr":"스킬공격(활)"},
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"198": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"199": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":20,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"1回攻撃","text-en":"Single Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"1회공격"},
				{"probability":16,"time":6000,"extraTarget":0,"extraMulti":1,"text-ja":"2回攻撃","text-en":"Double Attack","text-zhtw":"2連撃","text-zhcn":"2连击","text-kr":"2회공격"},
				{"probability":64,"time":8000,"extraTarget":0,"extraMulti":2,"text-ja":"3回攻撃","text-en":"Triple Attack","text-zhtw":"3連撃","text-zhcn":"3连击","text-kr":"3회공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":11000,"extraTarget":1,"extraMulti":11,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"200": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"201": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"202": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"203": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"204": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":-2,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":-2,"extraMulti":0,"text-ja":"スキル回復","text-en":"Skill Heal","text-zhtw":"技能恢復","text-zhcn":"技能恢复","text-kr":"스킬회복"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"205": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"206": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"207": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"208": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"209": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"210": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":2,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":5,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"211": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"212": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"217": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"218": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"219": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"220": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"回復","text-en":"Heal","text-zhtw":"恢復","text-zhcn":"恢复","text-kr":"회복"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"221": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"222": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"224": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"225": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"226": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"228": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"229": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"230": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"232": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"234": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4500,"extraTarget":0,"extraMulti":4,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"235": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"236": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"237": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"238": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"239": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"242": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"243": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"244": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"245": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":3,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"246": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"248": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"249": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"250": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"251": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
				{"probability":33.33,"time":4000,"extraTarget":98,"extraMulti":1,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":100,"time":4000,"extraTarget":96,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"251a": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":66.67,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
				{"probability":33.33,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
				{"probability":33.33,"time":4000,"extraTarget":98,"extraMulti":1.4,"text-ja":"特殊攻撃","text-en":"Special Attack","text-zhtw":"特殊攻撃","text-zhcn":"特殊攻击","text-kr":"특수공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
				{"probability":100,"time":4000,"extraTarget":96,"extraMulti":1.4,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"252": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"253": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":-1,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"263": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":11000,"extraTarget":1,"extraMulti":11,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"264": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":1,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":6000,"extraTarget":1,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"265": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
	"266": {
		"attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"攻撃","text-en":"Attack","text-zhtw":"攻撃","text-zhcn":"攻击","text-kr":"공격"},
			]},
		],
		"skill_attack":[
			{"cond":[],
			"pattern":[
				{"probability":100,"time":4000,"extraTarget":0,"extraMulti":0,"text-ja":"スキル攻撃","text-en":"Skill Attack","text-zhtw":"技能攻撃","text-zhcn":"技能攻击","text-kr":"스킬공격"},
			]},
		],
		"critical":[],
		"skill_critical":[],
		"penetration":[],
		"skill_penetration":[],
		"BCL":0,
		"SCL":0,
		"BPL":0,
		"SPL":0,
	},
}