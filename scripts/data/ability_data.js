const ability_data = {
	"m_GameObject": {
		"m_FileID": 0,
		"m_PathID": 0
	},
	"m_Enabled": 1,
	"m_Script": {
		"m_FileID": 0,
		"m_PathID": 8067521045042604447
	},
	"m_Name": "ability_data",
	"table": [{
		"id": 1,
		"rarity": 0,
		"name": "人馬一体の騎士",
		"kana": "",
		"text": "20％の確率で攻撃力が2倍\r\n移動中の速度が２倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [20]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 2,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 3,
		"rarity": 0,
		"name": "蒼空の狩人",
		"kana": "",
		"text": "20％の確率で攻撃力が2倍\r\nコストが-1",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 517,
			"param": [{
				"num": [150]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 4,
		"rarity": 0,
		"name": "助けてブラザー！",
		"kana": "",
		"text": "ゴブリン戦士トークンを使役可能\r\nトークンは１体まで配置人数に含まれない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 5,
		"rarity": 0,
		"name": "ウインドエンハンス",
		"kana": "",
		"text": "風属性マス配置時の効果が2倍\r\n物理と魔法攻撃を40％の確率で回避\r\n編成時風属性モンスター娘の攻撃+8％[awaked,+2％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 517,
			"param": [{
				"num": [100]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1083,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 6,
		"rarity": 0,
		"name": "超軟体生物",
		"kana": "",
		"text": "自身が受ける物理攻撃ダメージを30％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 7,
		"rarity": 0,
		"name": "深海の秘薬",
		"kana": "",
		"text": "配置時に範囲内の味方の毒、石化を回復する\r\n水属性の味方への回復量+10％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 8,
		"rarity": 0,
		"name": "ウォーターエンハンス",
		"kana": "",
		"text": "水属性マス配置時の効果が2倍、1秒ごとに範囲内の味方HPを[attack,[MAG,1,0]]回復する\r\n（回復量は基本攻撃力に依存）\r\n編成時水属性モンスター娘の攻撃+8％[awaked,+2％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1083,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 64,
			"param": [{
				"num": [4]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 9,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 10,
		"rarity": 0,
		"name": "ファイアーエンハンス",
		"kana": "",
		"text": "火属性マス配置時の効果が2倍\r\n攻撃後の隙を25％短縮\r\n編成時火属性モンスター娘の攻撃+8％[awaked,+2％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1083,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11,
		"rarity": 0,
		"name": "オークレイジ",
		"kana": "",
		"text": "HPが25％以下になると一度だけ\r\n永続的に攻撃力が[attack,[MAG,0,0]]上昇し、\r\n撤退後も持続する\r\n（上昇値は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [25]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12,
		"rarity": 0,
		"name": "アースエンハンス",
		"kana": "",
		"text": "地属性マス配置時の効果が2倍\r\n射程+100、ただし、攻撃後の待ち時間が大幅に増加\r\n編成時地属性モンスター娘の攻撃+8％[awaked,+2％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1083,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 35,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [7],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [7],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13,
		"rarity": 0,
		"name": "マタンゴシスターズ",
		"kana": "",
		"text": "自身そっくりのマタンゴトークンを使役\r\nトークンはEXスキルを使用することが可能",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14,
		"rarity": 0,
		"name": "スパイダーウェブ",
		"kana": "",
		"text": "範囲内に入ってきた敵を蜘蛛糸状態にし\r\n攻撃速度と移動速度を18％[awaked,+3％]減少させる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [18]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 514,
			"param": [{
				"num": [21]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15,
		"rarity": 0,
		"name": "サイレントステップ",
		"kana": "",
		"text": "移動中は敵の遠距離攻撃の対象にならず、\r\n攻撃を行わない　\r\n移動中移動速度が2倍[awaked,+0.5倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16,
		"rarity": 0,
		"name": "迷宮の斧闘士",
		"kana": "",
		"text": "ダンジョンではHP[MAG,1,0]倍、攻撃力[MAG,0,0]倍[awaked,+0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70010],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70018],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17,
		"rarity": 0,
		"name": "闇隠れ",
		"kana": "",
		"text": "スキル未使用中のみ、\r\n敵の遠距離攻撃の対象にならない\r\n闇属性マスに配置中は常時発動",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 20,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 18,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 19,
		"rarity": 0,
		"name": "闇隠れの魔術",
		"kana": "",
		"text": "スキル未使用中のみ、\r\n敵の遠距離攻撃の対象にならない\r\n闇属性マス配置中攻撃力+10％[awaked,+2%]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 20,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 20,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70040],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70048],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 20,
		"rarity": 0,
		"name": "リトルフェアリー",
		"kana": "",
		"text": "配置人数に含まれない\r\n飛行して移動する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 21,
		"rarity": 0,
		"name": "淫魔の手管",
		"kana": "",
		"text": "男性に対するダメージが1.3倍上昇し、\r\n男性に攻撃時、自身のHPを最大値の1％回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 1005,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1064,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1005,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 22,
		"rarity": 0,
		"name": "ペガサスウイング",
		"kana": "",
		"text": "射程＋20\r\n飛行して移動する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 23,
		"rarity": 0,
		"name": "カッパースケイル",
		"kana": "",
		"text": "物理攻撃を30%の確率で回避\r\nスタン中の敵に対する与ダメージが\r\n1.5倍[awaked,+0.1倍]上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 23,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 23,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 24,
		"rarity": 0,
		"name": "ゴーストポゼッション",
		"kana": "",
		"text": "[awaked,攻撃力+4％、]毒状態にならない\r\n自身そっくりのトークンを使役可能、トークンは30秒で消滅し、味方がいるマスのみに配置することができ援護攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 25,
		"rarity": 0,
		"name": "レディキラー",
		"kana": "",
		"text": "女性に対するダメージが1.5倍[awaked,+0.1倍]上昇し、\r\n女性に攻撃時、自身のHPを最大値の2％回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1005,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1064,
			"param": [{
				"num": [2]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1005,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1005,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 26,
		"rarity": 0,
		"name": "不死の騎士",
		"kana": "",
		"text": "毒状態にならず、HPが低下する程\r\n攻撃力が上昇(最大100%[awaked,+25％])\r\nスキル中は首無し騎士状態になりHP0にならない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1089,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [200, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [25]
			}, {
				"num": [0]
			}, {
				"num": [200, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 27,
		"rarity": 0,
		"name": "ケルベロスハウリング",
		"kana": "",
		"text": "攻撃時、30％[awaked,+10％]の確率で\r\n範囲内の敵3体まで同時に攻撃\r\n配置時に、敵全員の攻撃力が[attack,[MAG,0,0]]減少\r\n（減少量は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [18, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [3]
			}, {
				"num": [30]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [3]
			}, {
				"num": [40]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 28,
		"rarity": 0,
		"name": "邪眼の洗礼",
		"kana": "",
		"text": "攻撃時に相手をまれに[notawaked,毒][awaked,猛毒]状態にする\r\n配置時に石化の邪眼で敵全体を石化状態にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [180]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 6,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 515,
			"param": [{
				"num": [15]
			}, {
				"num": [120]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 515,
			"param": [{
				"num": [15]
			}, {
				"num": [190]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 24,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 29,
		"rarity": 0,
		"name": "擬態待ち伏せ",
		"kana": "",
		"text": "ダンジョンではコストが-4",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 60,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 30,
		"rarity": 0,
		"name": "ライカンスロープ(鳥)",
		"kana": "",
		"text": "HPが1秒ごとに最大HPの3％回復\r\nスキル中は姿が獣化しパワーアップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 31,
		"rarity": 0,
		"name": "ぬるぬるテンタクル",
		"kana": "",
		"text": "配置時に範囲内の敵の移動を\r\n触手攻撃で5秒停止させる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 518,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 32,
		"rarity": 0,
		"name": "血の犠牲",
		"kana": "",
		"text": "ゴブリン戦士トークンを使役可能\r\nトークンは１体まで配置人数に含まれず、\r\n死亡すると全味方のスキル再使用時間が３秒短縮される",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [99999]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 13,
			"range": 3,
			"triggerData": [{
				"type": 1009,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1008,
				"num": [50001],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 33,
		"rarity": 0,
		"name": "石翼の悪魔",
		"kana": "",
		"text": "石化状態にならない\r\n飛行して移動する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 34,
		"rarity": 0,
		"name": "深森の管理者",
		"kana": "",
		"text": "配置時に範囲内の味方のHPを戦闘開始時の攻撃力の400％回復し毒、石化状態を回復、その後10[awaked,+2]秒の間毒、石化状態への耐性+100％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [400]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 402,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 404,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 402,
			"param": [{
				"num": [100]
			}, {
				"num": [360]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 404,
			"param": [{
				"num": [100]
			}, {
				"num": [360]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 35,
		"rarity": 0,
		"name": "ストーンブレイク",
		"kana": "",
		"text": "毒状態にならない\r\n攻撃時に5%の確率で攻撃した敵を石化させ、石化した敵に対する与ダメージが2倍上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 24,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 513,
			"param": [{
				"num": [5]
			}, {
				"num": [180]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 36,
		"rarity": 0,
		"name": "ファントムステップ",
		"kana": "",
		"text": "物理と魔法攻撃を[0,1,0]％[awaked,＋5％]の確率で回避\r\n移動中は回避の確率が[0,3,0]％に上昇し\r\n敵の攻撃を引き付ける",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 37,
		"rarity": 0,
		"name": "ソルジャービー使役",
		"kana": "",
		"text": "[awaked,最大HP+5%、]飛行して移動する\r\n敵を毒状態にする蜂トークンを使役可能、トークンは配置人数に含まれず20秒後に消滅",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 38,
		"rarity": 0,
		"name": "クラーケンテンタクルス",
		"kana": "",
		"text": "自身の被ダメージを半分肩代わりする\r\nタコ足トークンを使役可能\r\n[awaked,タコ足トークンの攻撃力＋10％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1008,
				"num": [50006],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 39,
		"rarity": 0,
		"name": "ハイオークレイジ",
		"kana": "",
		"text": "HPが25％以下になると一度だけ\r\n永続的に攻撃力が[attack,[MAG,0,0]]上昇、撤退後も持続\r\n（上昇値は基本攻撃力に依存）\r\n編成時ガーディアン系のHP+8％[awaked,+2％]上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1006,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 40,
		"rarity": 0,
		"name": "腐食毒の猛獣",
		"kana": "",
		"text": "攻撃した敵の攻撃力と物理防御が10減少、スキル中は減少量が2倍\r\n人間に対して攻撃力が1.5倍[awaked,+0.1倍]に上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 14,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 14,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 9,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 14,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 9,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 41,
		"rarity": 0,
		"name": "あふれる生命力",
		"kana": "",
		"text": "最大HP+[0,1,0]％[awaked,+6％]、攻撃対象数+[0,2,0]\r\n出撃コスト+[0,0,0]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 47,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 42,
		"rarity": 0,
		"name": "聖獣の奇跡",
		"kana": "",
		"text": "毒と石化状態にならない\r\nスキル中、範囲内の味方の毒、石化を無効化\r\n[awaked,攻撃力+4%]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 43,
		"rarity": 0,
		"name": "いにしえの秘島",
		"kana": "",
		"text": "スキル中は巨大化してパワーアップ、\r\nスキルを使用する毎に永続的に攻撃力が[attack,[MAG,0,0]]上昇する\r\n（最大6回[awaked,+1回]　上昇値は基本攻撃力依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [6],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70030],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70038],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [7],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 44,
		"rarity": 0,
		"name": "ビーストヘッドラッシュ",
		"kana": "",
		"text": "50%の確率で最大2回追加攻撃が発生\r\n最後の攻撃は敵を毒状態にする場合がある\r\n編成時、ウォリアー系のHP10％[awaked,＋3％]上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1020,
			"param": [{
				"num": [2]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 515,
			"param": [{
				"num": [100]
			}, {
				"num": [120]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2004,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1006,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 45,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 46,
		"rarity": 0,
		"name": "カーバンクルバリア",
		"kana": "",
		"text": "配置時に、範囲内の味方に\r\n戦闘前の攻撃力の300％[awaked,+50％]分の\r\n耐久力を持つバリアを付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1092,
			"param": [{
				"num": [2]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1092,
			"param": [{
				"num": [2]
			}, {
				"num": [350]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 47,
		"rarity": 0,
		"name": "吸精の半蛇",
		"kana": "",
		"text": "スキルを使用する度に\r\n永続的に攻撃力が[attack,[MAG,0,0]]上昇し、\r\n撤退後も持続する\r\n（最大９回　上昇値は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [5]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [9],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 48,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 49,
		"rarity": 0,
		"name": "フェニックスヒール",
		"kana": "",
		"text": "配置時に全味方のHPを全回復、配置中範囲内の敵に攻撃力3％[awaked,＋1％]で継続ダメージ、場から離れた味方の再出撃時間[0,2,0]%短縮\r\n(再出撃時間短縮は重複不可)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1080,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [3]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [4]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50,
		"rarity": 0,
		"name": "オルトロスハウリング",
		"kana": "",
		"text": "30％[awaked,+7％]の確率で範囲内の敵2体を同時攻撃\r\n配置時に、敵全員の攻撃力が[attack,[MAG,0,0]]減少\r\n（減少量は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [12, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [30]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [37]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 51,
		"rarity": 0,
		"name": "鷲獅子の舞",
		"kana": "",
		"text": "50％[awaked,＋10％]の確率で範囲内の敵2体同時に攻撃\r\n範囲内の敵の物理防御力を[attack,[MAG,1,0]]減少\r\n（減少量は基本攻撃力に依存）　",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 14,
			"param": [{
				"num": [15]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 517,
			"param": [{
				"num": [100]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 52,
		"rarity": 0,
		"name": "火妖のかくれんぼ",
		"kana": "",
		"text": "敵の遠距離攻撃に狙われにくくなる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 57,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 4,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 53,
		"rarity": 0,
		"name": "氷妖のかくれんぼ",
		"kana": "",
		"text": "敵の遠距離攻撃に狙われにくくなる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 57,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 4,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 54,
		"rarity": 0,
		"name": "魅惑の海鳥",
		"kana": "",
		"text": "飛行して移動する\r\n配置時にすべての味方のHPを戦闘開始時の攻撃力の300％[awaked,＋50％]回復する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [300]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [50]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70169],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 55,
		"rarity": 0,
		"name": "断末魔の呪い",
		"kana": "",
		"text": "死亡時に断末魔の呪いをかけ\r\nブロックしていた敵の攻撃力と防御力を\r\n[attack,[MAG,0,0]]減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [20, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 14,
			"param": [{
				"num": [20, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 56,
		"rarity": 0,
		"name": "代謝停止",
		"kana": "",
		"text": "毒状態にならない\r\nスタンの蓄積値を50％減少する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 400,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 57,
		"rarity": 0,
		"name": "トカゲの尻尾切り",
		"kana": "",
		"text": "戦闘中、HPが0になっても\r\n1度だけHPを半分まで回復\r\n回復後、移動速度が1.8倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1090,
			"param": [{
				"num": [50]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2006,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 58,
		"rarity": 0,
		"name": "ヘルハウンドハウリング",
		"kana": "",
		"text": "配置時に、敵全員の攻撃力が[attack,[MAG,0,0]]減少\r\n（減少量は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [10, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 59,
		"rarity": 0,
		"name": "空飛ぶ小悪魔",
		"kana": "",
		"text": "飛行して移動する\r\n移動中の速度が1.5倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 60,
		"rarity": 0,
		"name": "コボルトプライド",
		"kana": "",
		"text": "最大HP、攻撃力、物理防御、魔法防御が\r\n低い代わりにコストが-２",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 60,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 61,
		"rarity": 0,
		"name": "高貴なる赤竜",
		"kana": "",
		"text": "攻撃力が[0,0,0]％上昇、クラス特性の\r\n攻撃力上昇が発動後、次の攻撃で\r\n与えるダメージが１.５倍[awaked,＋0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2002,
				"num": [120],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2002,
				"num": [120],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 62,
		"rarity": 0,
		"name": "アブラ・カタブラ",
		"kana": "",
		"text": "クラス特性による周囲攻撃時、全味方のHPを自身の元々の攻撃力の200%分回復\r\n[awaked,攻撃力＋4%]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [200]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}, {
				"num": [5000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 2,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 517,
			"param": [{
				"num": [150]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 63,
		"rarity": 0,
		"name": "赤熱の抱擁",
		"kana": "",
		"text": "非ブロック中は射程の短い遠距離攻撃を行う\r\nブロック中は攻撃力が[0,1,0]％[awaked,＋10％]上昇し、\r\nブロック中の敵に攻撃力に応じた継続ダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [10]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1009,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10030]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [10]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1009,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1101,
			"param": [{
				"num": [40]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1009,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 64,
		"rarity": 0,
		"name": "百腕の剛弓",
		"kana": "",
		"text": "地上の敵への与ダメージ1.4倍[awaked,＋0.1倍]\r\n攻撃した相手をスタンさせる(蓄積値：小)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 67,
			"param": [{
				"num": [10030]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [140]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 6,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 6,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 65,
		"rarity": 0,
		"name": "邪視の水牛",
		"kana": "",
		"text": "毒状態にならない\r\n攻撃後の待ち時間が少し増加するが、\r\n攻撃時まれに相手を毒状態にし、毒状態の敵に対する与ダメージが1.5倍[awaked,+0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [120]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 66,
		"rarity": 0,
		"name": "ラッキーサンダー",
		"kana": "",
		"text": "飛行して移動する\r\n50％の確率で攻撃力が2倍[awaked,+0.3倍]、スキル中は100％の確率で発生\r\n攻撃した相手をスタンさせる(蓄積値：小)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1086,
			"param": [{
				"num": [230]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1086,
			"param": [{
				"num": [230]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 67,
		"rarity": 0,
		"name": "溢れる劇毒",
		"kana": "",
		"text": "配置中、敵が毒状態になるとその毒ダメージを+20％[awaked,+7%]、味方の毒状態の敵への与ダメージ1.1倍 自身が毒状態の敵に攻撃時攻撃力80％の追加ダメージが発生、毒無効",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [80]
			}, {
				"num": [3]
			}, {
				"num": [100352]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 415,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 415,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 415,
			"param": [{
				"num": [27]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 415,
			"param": [{
				"num": [108]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 68,
		"rarity": 0,
		"name": "幻惑の糸",
		"kana": "",
		"text": "範囲内に入ってきた敵を蜘蛛糸状態にし\r\n攻撃速度と移動速度を20％[awaked,+5％]減少\r\nスキル未使用中は敵の遠距離攻撃の対象にならない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1081,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 12,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 4,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 514,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 69,
		"rarity": 0,
		"name": "慈愛の半蛇",
		"kana": "",
		"text": "編成時、全モンスター娘のHP12％[awaked,＋3％]上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 70,
		"rarity": 0,
		"name": "ヴァンパイアの祝福",
		"kana": "",
		"text": "毒状態にならない\r\nスキルを使用する度、範囲内の味方の\r\n攻撃力がそれぞれの基本攻撃力の5％上昇\r\n最大9回[awaked,+1回]まで効果が重複する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 2,
			"triggerData": [{
				"type": 40002,
				"num": [9],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 2,
			"triggerData": [{
				"type": 40002,
				"num": [10],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 71,
		"rarity": 0,
		"name": "怪根の雄叫び",
		"kana": "",
		"text": "スキル使用時に範囲内の敵をスタンさせる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 72,
		"rarity": 0,
		"name": "滅びの赤熱",
		"kana": "",
		"text": "スキル使用中、回復を行わず\r\n範囲内の敵に攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 73,
		"rarity": 0,
		"name": "魚鱗の衣",
		"kana": "",
		"text": "物理と魔法攻撃を20％の確率で回避、\r\nスキル中は回避率2倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 74,
		"rarity": 0,
		"name": "ライカンスロープ(虎)",
		"kana": "",
		"text": "HPが1秒ごとに最大HPの3％回復\r\nスキル中は姿が獣化しパワーアップ\r\n2回目以降のスキルは効果時間無限\r\n[awaked,攻撃力+4%]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70020],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70028],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 75,
		"rarity": 0,
		"name": "聖銀の調べ",
		"kana": "",
		"text": "毒、石化状態にならない\r\n配置中すべての味方の毒、石化耐性が30%[awaked,+5%]上昇し、スキル発動時に毒、石化状態を回復する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 12,
			"range": 3,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 12,
			"range": 3,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 404,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 402,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 76,
		"rarity": 0,
		"name": "鷲翼の風",
		"kana": "",
		"text": "範囲内の敵の物理防御力を[attack,[MAG,1,0]]減少\r\n（減少量は基本攻撃力に依存）　\r\n[awaked,最大HP＋6％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 517,
			"param": [{
				"num": [100]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 14,
			"param": [{
				"num": [10]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70050],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70069],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 77,
		"rarity": 0,
		"name": "雪夜の来訪",
		"kana": "",
		"text": "スキル発動後5[awaked,+2]秒間、\r\n天候を吹雪(敵の攻撃速度減少)にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [9]
			}, {
				"num": [150]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 0,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [9]
			}, {
				"num": [210]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 0,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70250],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70269],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 78,
		"rarity": 0,
		"name": "草原の角兎",
		"kana": "",
		"text": "物理と魔法攻撃を40％[awaked,+5%]の確率で回避\r\n自身そっくりのアルミラージトークンを使役\r\nトークンはEXスキルを使用することが可能",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1016,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 79,
		"rarity": 0,
		"name": "凍土の巨人",
		"kana": "",
		"text": "最大HP+[0,1,0]％[awaked,+10%]、攻撃が範囲攻撃化し\r\n攻撃した周囲の敵にも攻撃、出撃コスト+[0,0,0]\r\nスキル発動後に10秒間、\r\n天候を吹雪(敵の攻撃速度減少)にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10055]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [9]
			}, {
				"num": [300]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 0,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 80,
		"rarity": 0,
		"name": "アイスエンハンス",
		"kana": "",
		"text": "水属性マス配置時の効果が2倍、物理、魔法ダメージを5％減少する\r\n編成時水属性モンスター娘の攻撃と物理防御+4％[awaked,+1％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1083,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1010,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70070],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70089],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 81,
		"rarity": 0,
		"name": "幻狼の遠吠え",
		"kana": "",
		"text": "味方がいるマスに配置可能な援護攻撃を行う自身そっくりのトークン使役\r\n配置時に、敵全員の物理魔法防御力が[attack,[MAG,2,0]]減少（減少量は基本攻撃力に依存）[awaked,射程+10]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 14,
			"param": [{
				"num": [8, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 19,
			"param": [{
				"num": [8, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 82,
		"rarity": 0,
		"name": "金色の竜鱗",
		"kana": "",
		"text": "物理防御力と魔法防御力+15％[awaked,+5％]\r\nスキルを使用する度に、自身の物理防御力[defense,[MAG,4,0]]上昇、魔法防御力[mdefense,[MAG,4,0]]上昇\r\n撤退後も持続する（最大5回）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 11,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [30]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 1,
			"triggerData": [{
				"type": 2008,
				"num": [6],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [30]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 12,
			"range": 1,
			"triggerData": [{
				"type": 2008,
				"num": [6],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70130],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70149],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 83,
		"rarity": 0,
		"name": "高貴なる吸血姫",
		"kana": "",
		"text": "ワープして移動するが、移動コスト+12\r\n攻撃時に自身のHPが最大値の4％回復し、\r\n配置か移動完了後10秒間攻撃力+30％[awaked,+7％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 61,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}, {
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [37]
			}, {
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1064,
			"param": [{
				"num": [4]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [25]
			}, {
				"num": [600]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 25,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 84,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 85,
		"rarity": 0,
		"name": "最強黒竜パワー！",
		"kana": "",
		"text": "攻撃力+15%[awaked,+7％]、ブロック0で周囲の敵に継続ダメージを与えるトークン使役、トークンは配置人数に含まず30秒で消滅し敵の遠距離攻撃を引き付けダメージを受けない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1016,
			"param": [{
				"num": [19]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 86,
		"rarity": 0,
		"name": "ライカンスロープ(熊)",
		"kana": "",
		"text": "出撃コスト+4、最大HP+10％[awaked,+5％]、攻撃力+15％[awaked,+3％]\r\nHPが1秒ごとに最大HPの3％回復、スキル中は姿が獣化しパワーアップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70110],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70129],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 59,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 87,
		"rarity": 0,
		"name": "バーニングハート",
		"kana": "",
		"text": "最大HP-15％、攻撃力+25％[awaked,+7％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 2,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 88,
		"rarity": 0,
		"name": "猪突猛進撃",
		"kana": "",
		"text": "突進して移動し、移動時にスキル解除されない\r\n移動中の速度が2.5倍[awaked,+0.5倍]になり、攻撃した敵を低確率で吹き飛ばす",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 516,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 89,
		"rarity": 0,
		"name": "不死の海魔",
		"kana": "",
		"text": "HPが1秒ごとに最大HPの3％[awaked,+1％]回復\r\n敵を3体までブロックし範囲攻撃する触手トークンを使役可能、トークンは配置人数に含まれず45秒で消滅",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1016,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90,
		"rarity": 0,
		"name": "深森の大賢樹",
		"kana": "",
		"text": "出撃コスト+6、最大HP+50％、\r\n攻撃力+30％[awaked,+7％]、射程+20\r\n近接マスにも配置する事ができ、HPが1秒ごとに最大HPの2％回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 91,
		"rarity": 0,
		"name": "静寂なる急襲者",
		"kana": "",
		"text": "クラス特性による周囲攻撃時、2連続でダメージを与える\r\n移動中は敵の攻撃の対象にならず、\r\n攻撃を行わない、移動速度が3倍[awaked,+0.5倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [250]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 503,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 92,
		"rarity": 0,
		"name": "ライカンスロープ(鼠)",
		"kana": "",
		"text": "HPが1秒ごとに最大HPの3％回復、配置中範囲内の敵に攻撃力3％[awaked,＋1％]で継続ダメージ、スキル中は姿が獣化しパワーアップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70090],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70109],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1101,
			"param": [{
				"num": [3]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [9]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [4]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [12]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 93,
		"rarity": 0,
		"name": "サンシャイン・リヴァイヴ",
		"kana": "",
		"text": "飛行して移動(ブロック0にならない)\r\nHPが0になると1度だけHP全回復で復活し、攻撃力[attack,[MAG,0,0]]上昇、物理防御[defense,[MAG,0,0]]上昇、スキル中のダメージが1.4倍[awaked,＋0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2006,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2006,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1090,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [140]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2006,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2006,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 94,
		"rarity": 0,
		"name": "太陽に吠えるわん！",
		"kana": "",
		"text": "攻撃時50％の確率で敵の防御力を無視し、30％[awaked,+10％]の確率で3連射攻撃\r\n配置時に、敵全員の物理防御力と魔法防御力が[attack,[MAG,0,0]]減少（減少量は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 14,
			"param": [{
				"num": [8, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 19,
			"param": [{
				"num": [8, 1]
			}, {
				"num": [-1]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [1]
			}, {
				"num": [30]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [1]
			}, {
				"num": [40]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1030,
			"param": [{
				"num": [3]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 95,
		"rarity": 0,
		"name": "太陽の獅子",
		"kana": "",
		"text": "3回攻撃を行う毎に、範囲内の敵3体まで同時に攻撃、編成時火属性モンスター娘の\r\n攻撃力+10％[awaked,+3％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1019,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [125]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 96,
		"rarity": 0,
		"name": "野生の直感",
		"kana": "",
		"text": "配置時に物理ダメージが追加で2回発生\r\n(追加分は攻撃力の2倍のダメージ)\r\n物理と魔法攻撃を40％[awaked,+5%]の確率で回避",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1101,
			"param": [{
				"num": [200]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [20],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1101,
			"param": [{
				"num": [200]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [24],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70330],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70349],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 97,
		"rarity": 0,
		"name": "頭多の大蛇",
		"kana": "",
		"text": "HPが1秒毎に最大HPの3％回復し、ブロック中は攻撃時75%確率で最大4回追加攻撃\r\n毒状態の敵に与ダメージが1.5倍[awaked,+0.1倍]\r\nHPが0になると1度だけHP全回復で復活",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1020,
			"param": [{
				"num": [4]
			}, {
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1090,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10079]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2004,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 98,
		"rarity": 0,
		"name": "ナゾ喰いの番人",
		"kana": "",
		"text": "出撃コスト+2、ブロック数+1、物理防御力+20％、\r\n人間の敵に与えるダメージが1.5倍[awaked,+0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 44,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 502,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 12,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 59,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 99,
		"rarity": 0,
		"name": "デュアルホーン",
		"kana": "",
		"text": "射程+20[awaked,+7]\r\n攻撃が常時2ヒットになる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [2]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 100,
		"rarity": 0,
		"name": "魔族の闘気",
		"kana": "",
		"text": "攻撃力が20％[awaked,+5％]上昇\r\n自身が受ける魔法攻撃ダメージを20％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70170],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70189],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 67,
			"param": [{
				"num": [10080]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 101,
		"rarity": 0,
		"name": "アイアンハードボディ",
		"kana": "",
		"text": "出撃コスト+3、物理防御力+40％\r\n配置中、物理防御の50%[awaked,+15％]攻撃力増加\r\n毒とスタン状態にならず、物理ダメージを20％減少、スキル中は効果2倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [65]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 59,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1010,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100561]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [12],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [12],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 102,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 103,
		"rarity": 0,
		"name": "サインレオン",
		"kana": "",
		"text": "ダメージを受けると物理防御力が上昇(累積2万ダメージで最大150％上昇)攻撃を受けた際、敵攻撃力30％[awaked,+7％]でダメージ反射\r\n配置中味方が受ける物理ダメージ20％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1012,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1012,
			"param": [{
				"num": [37]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [150]
			}, {
				"num": [0]
			}, {
				"num": [102, 20000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 104,
		"rarity": 0,
		"name": "死を看取る妖精",
		"kana": "",
		"text": "自身の範囲内にいる味方が場から離れた際の再出撃時間[0,0,0]%[awaked,+5%]短縮、スキル発動中は効果が倍になる\r\n(再出撃時間短縮は重複不可)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1080,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1080,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1080,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1080,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 105,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 106,
		"rarity": 0,
		"name": "大海を統べし竜",
		"kana": "",
		"text": "魔法攻撃ダメージを25％減少、スキル中は効果が倍化、ブロックしている敵1体につき攻撃力が30％[awaked,+5％]上昇\r\n編成時水属性モンスター娘の攻撃力+10％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [2],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [3],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [4],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [5],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [6],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [7],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [2],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [3],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [4],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [5],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [6],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [7],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 107,
		"rarity": 0,
		"name": "ソウルエナジー",
		"kana": "",
		"text": "味方がいるマスのみ配置可能な霊魂トークンを使役、トークンは味方に付与後消滅し、付与した味方の攻撃力を20秒+12％[awaked,+3％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [21]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1016,
			"param": [{
				"num": [22]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 108,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 109,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 110,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 111,
		"rarity": 0,
		"name": "妖精騎士団長",
		"kana": "",
		"text": "配置人数に含まれず飛行して移動する\r\n配置人数に含まれず2体まで同時に配置可能な妖精騎士トークンを使役、配置中のトークン1体につき自身の攻撃力+20％[awaked,+5％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [16]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1016,
			"param": [{
				"num": [17]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 112,
		"rarity": 0,
		"name": "ミスリルボディ",
		"kana": "",
		"text": "出撃コスト+5、物理防御力+30％\r\n配置中、物理防御力の40%[awaked,+12％]分攻撃力が増加する\r\n毒状態にならず、魔法ダメージを20％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [40]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [52]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 113,
		"rarity": 0,
		"name": "レディドレイン",
		"kana": "",
		"text": "移動中は敵の遠距離攻撃の対象にならず、\r\n攻撃を行わない\r\n女性に攻撃時、自身のHPを\r\n最大値の3％[awaked,+1％]回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1064,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1005,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1064,
			"param": [{
				"num": [4]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1005,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70190],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70209],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 114,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 115,
		"rarity": 0,
		"name": "血に飢えた悪鬼",
		"kana": "",
		"text": "毎秒HPが50減少し常に与ダメージ+0.1倍[awaked,+0.03倍]、スキル中はHPの減少と与ダメージ上昇効果が3倍\r\n攻撃時、自身のHPを最大値の6%回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [113]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [139]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [150]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1064,
			"param": [{
				"num": [6]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1064,
			"param": [{
				"num": [30]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70290],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70309],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 116,
		"rarity": 0,
		"name": "大渦の化身",
		"kana": "",
		"text": "射程+30、スキル発動時足元に5秒間大渦を作り出し、大渦内の敵は一定時間毎に継続ダメージ(毎300)が発生、移動速度90％減少\r\n編成時水属性モンスター娘の攻撃+9％[awaked,+3％]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 117,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 118,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 119,
		"rarity": 0,
		"name": "魅惑の妖花",
		"kana": "",
		"text": "範囲内の敵の毒耐性を40%[awaked,+10%]減少\r\n配置人数に含まれずHPが0になると爆発し周囲に魔法ダメージを与え高確率で猛毒状態にする妖花トークンを使役",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1016,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 405,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 405,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 120,
		"rarity": 0,
		"name": "黒山羊の契約",
		"kana": "",
		"text": "飛行して移動する\r\n攻撃時に範囲内の味方のHPが最大値の2％減少するが、自身の与えるダメージが常に1.3倍[awaked,+0.1倍]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [2]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 2,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1024,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 2,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [140]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70310],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70329],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 121,
		"rarity": 0,
		"name": "コボルトプライド(白毛)",
		"kana": "",
		"text": "最大HP、攻撃力、物理防御力が低い代わりにコストが-4\r\n攻撃が即着弾し、攻撃した相手をスタンさせる(蓄積値：小)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 60,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 122,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 123,
		"rarity": 0,
		"name": "大空の奏者",
		"kana": "",
		"text": "飛行して移動する\r\n配置中全味方の移動速度を+20[awaked,+5]、飛行して移動する味方は更に+20する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 23,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 23,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 23,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 23,
			"param": [{
				"num": [45]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 60,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70210],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70229],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100242]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 124,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 125,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 126,
		"rarity": 0,
		"name": "小さき宝の番人",
		"kana": "",
		"text": "最大HPと攻撃力が-[0,2,0]％されるが\r\n出撃コスト-[0,0,0][awaked,-2]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 60,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 7,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 2,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70230],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70249],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 127,
		"rarity": 0,
		"name": "柔らかな風の寵愛",
		"kana": "",
		"text": "編成時風属性モンスター娘のHPと攻撃力+10％[awaked,+3％]、1体まで配置人数に含まれない風エレメンタルトークンを使役、配置中のトークン1体毎に風属性味方の攻撃力+25％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1016,
			"param": [{
				"num": [24]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 128,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 129,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 130,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 131,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 132,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 133,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 134,
		"rarity": 0,
		"name": "聖なる幻狼楽団",
		"kana": "",
		"text": "編成時光属性モンスター娘の最大HP+10％[awaked,+2%]、自身そっくりで配置人数に含まれないトークンを使役、トークンはEXスキルを使用することが可能で45秒で消滅する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1016,
			"param": [{
				"num": [23]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [85]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70270],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70289],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 135,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 136,
		"rarity": 0,
		"name": "封壺の魔人",
		"kana": "",
		"text": "編成時、火属性モンスター娘のHPと攻撃力+10％[awaked,+3％]、非スキル中は移動と攻撃を行えないが物理魔法ダメージ50％減少\r\nスキル中は封印解除されパワーアップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 8,
				"num": [1],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 49,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 507,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 137,
		"rarity": 0,
		"name": "慈愛のママサンタ",
		"kana": "",
		"text": "配置中、HPが1秒ごとに40減少するが、範囲内の味方の攻撃力を自身の攻撃力の20%[awaked,+5%]上昇しHPを毎秒[attack,[MAG,3,0]]回復（回復量は基本攻撃力に依存）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [40]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [20]
			}, {
				"num": [0]
			}, {
				"num": [12]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 8,
			"param": [{
				"num": [25]
			}, {
				"num": [0]
			}, {
				"num": [12]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 64,
			"param": [{
				"num": [4]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 13,
				"num": [0],
				"option": ["|2"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 138,
		"rarity": 0,
		"name": "強靭無敵デカイオー！",
		"kana": "",
		"text": "最大HP+[0,1,0]％[awaked,+10%]、攻撃力+[0,3,0]%、出撃コスト+[0,0,0]、非ブロック時は与ダメージ30%で遠距離範囲攻撃を行い、ブロック時は攻撃した相手を低確率で吹き飛ばす",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 516,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 139,
		"rarity": 0,
		"name": "わたしに歯向かう気か",
		"kana": "",
		"text": "常に攻撃対象数+3、敵の防御力を無視\r\n配置中すべての敵の攻撃力を10％[awaked,+3%]減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 47,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1030,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 7,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 7,
			"param": [{
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 140,
		"rarity": 0,
		"name": "見習い妖狐忍者",
		"kana": "",
		"text": "25%[awaked,+5%]の確率で攻撃力が2倍\r\nHPが減少する程スキル中の与ダメージ上昇(HP半減で1.5倍)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1086,
			"param": [{
				"num": [200]
			}, {
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2000,
				"num": [95],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [81],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [71],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [61],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [140]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [51],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 141,
		"rarity": 0,
		"name": "ぷるぷるボディ",
		"kana": "",
		"text": "物理ダメージを25％[awaked,+7%]減少、HPが1秒毎に最大HPの2％回復\r\n攻撃した敵の移動速度を3秒間20%減少させる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1010,
			"param": [{
				"num": [68]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 63,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 22,
			"param": [{
				"num": [20]
			}, {
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 22,
			"param": [{
				"num": [40]
			}, {
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 142,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 143,
		"rarity": 0,
		"name": "不眠不休の三が日",
		"kana": "",
		"text": "毒、スタン状態にならず攻撃した敵の攻撃力を10[awaked,+3]減少、HPが減少する程に攻撃速度が上昇する(HP半減で効果最大)\r\nスキル中首無し状態になりHP0にならない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 26,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 9,
			"param": [{
				"num": [10]
			}, {
				"num": [-2]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 9,
			"param": [{
				"num": [13]
			}, {
				"num": [-2]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1089,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 144,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 145,
		"rarity": 0,
		"name": "ビリビリニューイヤー",
		"kana": "",
		"text": "飛行して移動(ブロック0にならない)\r\n移動中一定時間毎に周囲の敵に攻撃力20%[awaked,+5%]の魔法攻撃を与え、スタンさせる(蓄積値：低)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [20]
			}, {
				"num": [2]
			}, {
				"num": [100273]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [25]
			}, {
				"num": [2]
			}, {
				"num": [100273]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 146,
		"rarity": 0,
		"name": "サキュバスアーツ零式",
		"kana": "",
		"text": "移動中の速度が2倍\r\n敵の物理、魔法攻撃を50％の確率で回避\r\n通常攻撃が40％[awaked,+12％]の確率で5連続攻撃になる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1019,
			"param": [{
				"num": [1]
			}, {
				"num": [40]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [1]
			}, {
				"num": [52]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 147,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 148,
		"rarity": 0,
		"name": "九尾の護り",
		"kana": "",
		"text": "射程+20、物理防御力+30%\r\n配置中、自身を除く範囲内の味方の物理防御力を、自身の物理防御力の30%[awaked,+10％]増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 13,
			"param": [{
				"num": [30]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [40]
			}, {
				"num": [0]
			}, {
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 74,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 1007,
				"num": [17014],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 149,
		"rarity": 0,
		"name": "武人の剣閃",
		"kana": "",
		"text": "出撃コスト+5、攻撃力と物理防御+15％[awaked,+4％]、ブロック数+1\r\nブロックしている敵の数が多いほど与ダメージと攻撃速度が上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 59,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 44,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2013,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [1],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2013,
				"num": [2],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [2],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2013,
				"num": [3],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [3],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [1],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [2],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [2],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [3],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [3],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [1],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [2],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [2],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2013,
				"num": [3],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2013,
				"num": [3],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 60,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3001,
				"num": [70350],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [70369],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 150,
		"rarity": 0,
		"name": "暴虐の魔王",
		"kana": "",
		"text": "攻撃力+15%[awaked,+7％]\r\n配置時に全ての敵に攻撃力分のダメージを与え、スタンさせる(蓄積値：大)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 40001,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [3]
			}, {
				"num": [10026]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 40001,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 151,
		"rarity": 0,
		"name": "天然おっぱいガード",
		"kana": "",
		"text": "移動速度が30％減少するが物理防御力+50%\r\n攻撃を受けた際、敵攻撃力20％[awaked,+5％]でダメージ反射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1012,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1012,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 152,
		"rarity": 0,
		"name": "究極群体妖魔",
		"kana": "",
		"text": "物理ダメージを40％[awaked,+10%]減少、HPが1秒毎に最大HPの3％回復、自身そっくりで1体まで配置人数に含まないトークン使役、トークンはスキル使用可能で45秒で消滅",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 26,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1016,
			"param": [{
				"num": [26]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 153,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 154,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 155,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 156,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 157,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 158,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 159,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 160,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 161,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 162,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 163,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 164,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 165,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 166,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 167,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 168,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 169,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 170,
		"rarity": 0,
		"name": "ダミー",
		"kana": "",
		"text": "ダミー",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1086,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11011,
		"rarity": 0,
		"name": "ウォリアー（曲刀）",
		"kana": "",
		"text": "ブロックした敵全員を攻撃\r\n待機中は一定時間経過で攻撃力が上昇し、\r\n次の攻撃時に周囲の地上の敵に同時攻撃\r\n(攻撃時にリセット)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [99]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11012,
		"rarity": 0,
		"name": "ブレイダー",
		"kana": "",
		"text": "ブロックした敵全員を攻撃\r\n待機中は一定時間毎に攻撃力が上昇し、\r\n次の攻撃時に周囲の地上の敵に同時攻撃\r\n効果が２段階で上昇(攻撃時にリセット)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [99]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [150]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11013,
		"rarity": 0,
		"name": "ソードマスター",
		"kana": "",
		"text": "ブロックした敵全員を攻撃\r\n待機中は一定時間毎に攻撃力が上昇し、\r\n次の攻撃時に周囲の地上の敵に同時攻撃\r\n効果が３段階で上昇(攻撃時にリセット)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [99]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [150],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [150]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [70]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [450],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [200]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [450],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11014,
		"rarity": 0,
		"name": "アクロバットソード",
		"kana": "",
		"text": "ブロックした敵全員を攻撃、待機中一定時間毎に攻撃力上昇、次の攻撃時に周囲の地上敵に同時攻撃(最大３段階、攻撃時にリセット)\r\nチャージ速度と効果上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [100],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [99]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [100],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 15,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [100],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [120]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [100],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [200],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [180]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [200],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [240]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2002,
				"num": [300],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11021,
		"rarity": 0,
		"name": "ウォリアー（槍）",
		"kana": "",
		"text": "コストが増加するEXスキルを使え、\r\n槍で少し遠くの敵に物理攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11022,
		"rarity": 0,
		"name": "ランサー",
		"kana": "",
		"text": "コストが増加するEXスキルを使え、\r\n槍で少し遠くの敵に物理攻撃を行う\r\n攻撃時、対象付近にいる地上の敵にも\r\n50％の攻撃力でダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1021,
			"param": [{
				"num": [125]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11023,
		"rarity": 0,
		"name": "ランスマスター",
		"kana": "",
		"text": "コストが増加するEXスキルを使え、\r\n槍で少し遠くの敵に物理攻撃を行う\r\n攻撃時、対象付近にいる地上の敵にも\r\n70％の攻撃力でダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1021,
			"param": [{
				"num": [125]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11024,
		"rarity": 0,
		"name": "ランスロード",
		"kana": "",
		"text": "コストが増加するEXスキルを使え、\r\n槍で少し遠くの敵に物理攻撃を行う\r\n攻撃時、対象付近にいる地上敵にもダメージ\r\nスキル初回使用までの時間-3秒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1021,
			"param": [{
				"num": [125]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1081,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11031,
		"rarity": 0,
		"name": "ウォリアー（斧）",
		"kana": "",
		"text": "敵１体に強力な物理近接攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11032,
		"rarity": 0,
		"name": "バーバリアン",
		"kana": "",
		"text": "敵１体に強力な物理近接攻撃を行う\r\n戦闘中に受けた総ダメージの合計で\r\n自身の攻撃力が永続アップ\r\n（累積１万ダメージで最大300上昇）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [102, 10000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11033,
		"rarity": 0,
		"name": "バーサーカー",
		"kana": "",
		"text": "敵１体に強力な物理近接攻撃を行う\r\n戦闘中に受けた総ダメージの合計で\r\n自身の攻撃力が永続アップ\r\n（累積１万ダメージで最大500上昇）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [500]
			}, {
				"num": [0]
			}, {
				"num": [102, 10000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11034,
		"rarity": 0,
		"name": "リベンジャー",
		"kana": "",
		"text": "敵１体に強力な物理近接攻撃を行う\r\n戦闘中に受けた総ダメージの合計で\r\n自身の攻撃力が永続アップ\r\n（累積１万ダメージで最大700上昇）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [700]
			}, {
				"num": [0]
			}, {
				"num": [102, 10000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11041,
		"rarity": 0,
		"name": "ウォリアー（拳）",
		"kana": "",
		"text": "常に2連続で攻撃し、配置時に周囲の敵に\r\n攻撃力2倍の物理ダメージを与え短時間スタンさせる(蓄積値：超特大)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [200]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [19],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11042,
		"rarity": 0,
		"name": "モンク",
		"kana": "",
		"text": "常に2連続で攻撃し、配置時に周囲の敵に\r\n攻撃力3倍の物理ダメージを与え短時間スタンさせる(蓄積値：超特大)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [300]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [19],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11043,
		"rarity": 0,
		"name": "マスターモンク",
		"kana": "",
		"text": "常に2連続で攻撃し、配置時に周囲の敵に\r\n攻撃力4倍の物理ダメージを与え短時間スタンさせる(蓄積値：超特大)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [400]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [19],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 11044,
		"rarity": 0,
		"name": "チャンピオン",
		"kana": "",
		"text": "常に2連続で攻撃し、配置時に周囲の敵に\r\n攻撃力5倍の物理ダメージを与え短時間スタンさせる(蓄積値：超特大)\r\nスキル初回使用までの時間-3秒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 4,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 5,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1081,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [500]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [19],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [105]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 512,
			"param": [{
				"num": [60]
			}, {
				"num": [105]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 16,
			"triggerData": [{
				"type": 2001,
				"num": [14],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [14],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 12,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12011,
		"rarity": 0,
		"name": "ガーディアン（剣）",
		"kana": "",
		"text": "3体までの敵をブロックし、\r\n敵１体に物理攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12012,
		"rarity": 0,
		"name": "シールドナイト",
		"kana": "",
		"text": "4体までの敵をブロックし、\r\n敵１体に物理攻撃を行う\r\n配置時にダメージを防ぐバリアが発生し、\r\n配置中45秒毎に再度発生(耐久力：500)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1350],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12013,
		"rarity": 0,
		"name": "パラディン",
		"kana": "",
		"text": "4体までの敵をブロックし、\r\n敵１体に物理攻撃を行う\r\n配置時にダメージを防ぐバリアが発生し、\r\n配置中45秒毎に再度発生(耐久力：1000)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1350],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12014,
		"rarity": 0,
		"name": "マスターパラディン",
		"kana": "",
		"text": "5体までの敵をブロックし敵１体に物理攻撃、配置時にダメージを防ぐバリアが発生、配置中45秒毎に再度発生(耐久力：1500)\r\nブロック中の敵からのダメージ25％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [1500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1092,
			"param": [{
				"num": [0]
			}, {
				"num": [1500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1350],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12021,
		"rarity": 0,
		"name": "ガーディアン（鈍器）",
		"kana": "",
		"text": "3体までの敵をブロックし、\r\n敵１体に物理攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12022,
		"rarity": 0,
		"name": "デストロイヤー",
		"kana": "",
		"text": "3体までの敵をブロックし、\r\n敵１体に物理攻撃を行う\r\n攻撃した相手をスタンさせる(蓄積値：低)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12023,
		"rarity": 0,
		"name": "ジャガーノート",
		"kana": "",
		"text": "3体までの敵をブロックし、\r\n敵１体に物理攻撃を行う\r\n攻撃した相手をスタンさせる(蓄積値：中)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 12024,
		"rarity": 0,
		"name": "ギガンティック",
		"kana": "",
		"text": "3体までの敵をブロックし敵１体に物理攻撃\r\n攻撃した相手をスタンさせる(蓄積値：中)\r\nブロック中の敵に与えるダメージ1.1倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13011,
		"rarity": 0,
		"name": "スナイパー（弓）",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる遠距離物理攻撃\r\n飛行する敵を優先的に攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13012,
		"rarity": 0,
		"name": "アーチャー",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる遠距離物理攻撃\r\n3回攻撃を行う毎に2連射攻撃を行う\r\n飛行する敵に攻撃力1.2倍で優先的に攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [2]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13013,
		"rarity": 0,
		"name": "ボウマスター",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる遠距離物理攻撃\r\n3回攻撃を行う毎に3連射攻撃を行う\r\n飛行する敵に攻撃力1.5倍で優先的に攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [3]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13014,
		"rarity": 0,
		"name": "アルテミス",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる遠距離物理攻撃\r\n3回攻撃を行う毎に3連射攻撃を行う\r\n飛行する敵に攻撃力1.7倍で優先的に攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [3]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1009,
			"param": [{
				"num": [170]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13021,
		"rarity": 0,
		"name": "スナイパー（銃）",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる魔法弾を放つ\r\n飛行する敵を優先的に攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13022,
		"rarity": 0,
		"name": "ガンナー",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる魔法弾を放つ\r\n飛行する敵を優先的に攻撃\r\nやや攻撃後の待ち時間が増加するが\r\n攻撃力が大きく上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13023,
		"rarity": 0,
		"name": "ガンマスター",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる魔法弾を放つ\r\n飛行する敵を優先的に攻撃\r\n攻撃後の待ち時間が増加するが\r\n攻撃力がさらに大きく上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 13024,
		"rarity": 0,
		"name": "シャープシューター",
		"kana": "",
		"text": "空飛ぶ敵にも攻撃できる魔法弾を放ち、飛行する敵を優先的に攻撃\r\n攻撃後の待ち時間が増加するが攻撃力がさらに大きく上昇、3回攻撃毎に敵の防御を無視",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1030,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14011,
		"rarity": 0,
		"name": "ソーサラー（杖）",
		"kana": "",
		"text": "範囲ダメージを与える魔法攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14012,
		"rarity": 0,
		"name": "ウォーロック",
		"kana": "",
		"text": "範囲ダメージを与える魔法攻撃を行う\r\n自身の範囲内の敵の魔法防御-100",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 19,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14013,
		"rarity": 0,
		"name": "ウォーロック２",
		"kana": "",
		"text": "範囲ダメージを与える魔法攻撃を行う\r\n自身の範囲内の敵の魔法防御-150",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 19,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14014,
		"rarity": 0,
		"name": "エルダーウィザード",
		"kana": "",
		"text": "範囲ダメージを与える魔法攻撃を行う\r\n自身の範囲内の敵の魔法防御-200",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 19,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14021,
		"rarity": 0,
		"name": "ソーサラー（本）",
		"kana": "",
		"text": "周囲の敵1体に魔法攻撃を行う\r\n自身の範囲内の敵の移動速度-30％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14022,
		"rarity": 0,
		"name": "コンジャラー",
		"kana": "",
		"text": "周囲の敵2体に魔法攻撃を行う\r\n自身の範囲内の敵の移動速度-35％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14023,
		"rarity": 0,
		"name": "コンジャラー２",
		"kana": "",
		"text": "周囲の敵3体に魔法攻撃を行う\r\n自身の範囲内の敵の移動速度-40％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 14024,
		"rarity": 0,
		"name": "フィロソフィア",
		"kana": "",
		"text": "周囲の敵3体に魔法攻撃を行う\r\n自身の範囲内の敵の移動速度-40％\r\n攻撃敵数が2体以下の場合ダメージ上昇(最大1.3倍)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [115]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15011,
		"rarity": 0,
		"name": "ヒーラー（錫杖）",
		"kana": "",
		"text": "味方のHPを回復する\r\n自身と同じ属性の場合回復量10％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15012,
		"rarity": 0,
		"name": "ハイヒーラー",
		"kana": "",
		"text": "味方のHPを回復する\r\n自身と同じ属性の場合回復量15％上昇\r\n最大HPを超える回復をした時\r\n一時的に最大HPをアップ(最大500)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [115]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 52,
			"param": [{
				"num": [500]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15013,
		"rarity": 0,
		"name": "ハイヒーラー２",
		"kana": "",
		"text": "味方のHPを回復する\r\n自身と同じ属性の場合回復量20％上昇\r\n最大HPを超える回復をした時\r\n一時的に最大HPをアップ(最大800)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 52,
			"param": [{
				"num": [800]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15014,
		"rarity": 0,
		"name": "エルダープリースト",
		"kana": "",
		"text": "味方のHPを回復し、自身と同じ属性の場合回復量25％上昇、4秒間魔法防御+200\r\n最大HPを超える回復をした時\r\n一時的に最大HPをアップ(最大1200)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [125]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 52,
			"param": [{
				"num": [1200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 18,
			"param": [{
				"num": [200]
			}, {
				"num": [120]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15021,
		"rarity": 0,
		"name": "ヒーラー（オーブ）",
		"kana": "",
		"text": "範囲内全ての味方のHPを回復する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15022,
		"rarity": 0,
		"name": "ミスティック",
		"kana": "",
		"text": "範囲内全ての味方のHPを回復する\r\n配置中一定時間毎に全味方のHPを[attack,[MAG,0,0]]\r\n（自身の基本攻撃力の3％）回復し続ける",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 64,
			"param": [{
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15023,
		"rarity": 0,
		"name": "ミスティック２",
		"kana": "",
		"text": "範囲内全ての味方のHPを回復する\r\n配置中一定時間毎に全味方のHPを[attack,[MAG,0,0]]\r\n（自身の基本攻撃力の5％）回復し続ける",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 64,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 15024,
		"rarity": 0,
		"name": "オラクルマスター",
		"kana": "",
		"text": "範囲内全ての味方のHPを回復する\r\n配置中一定時間毎に全味方のHPを[attack,[MAG,0,0]]\r\n（自身の基本攻撃力の8％）回復し続ける\r\nスキル中の射程が+0.1倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 64,
			"param": [{
				"num": [8]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 36,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 15,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16011,
		"rarity": 0,
		"name": "スカウト",
		"kana": "",
		"text": "遠近両方のマスに配置できる\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、まれに相手を弱い毒状態にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [70]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16012,
		"rarity": 0,
		"name": "アサシン",
		"kana": "",
		"text": "遠近両方のマスに配置できる\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、まれに相手を毒状態にする\r\n移動で消費するコストが-1",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [120]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16013,
		"rarity": 0,
		"name": "マスターアサシン",
		"kana": "",
		"text": "遠近両方のマスに配置できる\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、まれに相手を猛毒状態にする\r\n移動で消費するコストが-2",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [190]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16014,
		"rarity": 0,
		"name": "チェイスアサシン",
		"kana": "",
		"text": "遠近両方のマスに配置でき、射程の短い遠距離物理攻撃、攻撃時まれに相手を超毒状態\r\n移動で消費するコストが-2され、\r\n配置、移動完了後10秒間攻撃力+50％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [280]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16021,
		"rarity": 0,
		"name": "スカウト（団扇）",
		"kana": "",
		"text": "遠近両方のマスに配置でき飛行して移動\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、相手の移動速度を下げる(効果：微)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [20]
			}, {
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16022,
		"rarity": 0,
		"name": "エアスカウト",
		"kana": "",
		"text": "遠近両方のマスに配置でき飛行して移動\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、相手の移動速度を下げる(効果：小)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [35]
			}, {
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16023,
		"rarity": 0,
		"name": "エアスカウト２",
		"kana": "",
		"text": "遠近両方のマスに配置でき飛行して移動\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、相手の移動速度を下げる(効果：中)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [50]
			}, {
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 16024,
		"rarity": 0,
		"name": "スカイロード",
		"kana": "",
		"text": "遠近両方のマスに配置でき飛行して移動\r\n射程の短い遠距離物理攻撃を行う\r\n攻撃時、相手の移動速度を下げる(効果：中)\r\n移動速度が上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [50]
			}, {
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17011,
		"rarity": 0,
		"name": "シャーマン",
		"kana": "",
		"text": "配置中、コスト回復速度アップ、\r\n範囲内の味方の攻撃力が\r\n１秒ごとに3増加（最大150）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1003,
			"param": [{
				"num": [70]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [150]
			}, {
				"num": [0]
			}, {
				"num": [100, 1500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [50101],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [54999],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90003],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17012,
		"rarity": 0,
		"name": "ハイシャーマン",
		"kana": "",
		"text": "配置中、コスト回復速度アップ、範囲内の\r\n味方の攻撃力と物理防御が\r\n１秒ごとに3増加（最大240）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1003,
			"param": [{
				"num": [70]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [240]
			}, {
				"num": [0]
			}, {
				"num": [100, 2400]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 13,
			"param": [{
				"num": [240]
			}, {
				"num": [0]
			}, {
				"num": [100, 2400]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [50101],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [54999],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90003],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17013,
		"rarity": 0,
		"name": "ハイシャーマン２",
		"kana": "",
		"text": "配置中、コスト回復速度アップ、範囲内の\r\n味方の攻撃力と物理防御と魔法防御が\r\n１秒ごとに3増加（最大300）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1003,
			"param": [{
				"num": [70]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 3000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 13,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 3000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 18,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 3000]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [50101],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [54999],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90003],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17014,
		"rarity": 0,
		"name": "エルダーシャーマン",
		"kana": "",
		"text": "配置中、コスト回復速度アップ、範囲内の\r\n味方の攻撃力と物理防御と魔法防御が\r\n１秒ごとに4増加（最大300）\r\n近接マスにも配置可能",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1003,
			"param": [{
				"num": [70]
			}, {
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 8,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 2700]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 13,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 2700]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 18,
			"param": [{
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [100, 2700]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [50101],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [54999],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1005,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3001,
				"num": [90000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3001,
				"num": [90003],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17021,
		"rarity": 0,
		"name": "楽器CC0",
		"kana": "",
		"text": "配置中、自身を除く全味方の\r\n攻撃力と物防と魔防+[0,0,0]\r\n範囲内の敵の攻撃力を、自身の基本攻撃力の[0,3,0]％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [30]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17022,
		"rarity": 0,
		"name": "楽器CC1",
		"kana": "",
		"text": "配置中、自身を除く全味方の攻撃力と物防と魔防+[0,0,0]、自身と同属性の場合更に+[0,3,0]\r\n範囲内の敵の攻撃力を、自身の基本攻撃力の[0,6,0]％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 8,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [35]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17023,
		"rarity": 0,
		"name": "楽器CC2",
		"kana": "",
		"text": "配置中、自身を除く全味方の攻撃力と物防と魔防+[0,0,0]、自身と同属性の場合更に+[0,3,0]\r\n範囲内の敵の攻撃力を、自身の基本攻撃力の[0,6,0]％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 8,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [40]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 17024,
		"rarity": 0,
		"name": "楽器CC3",
		"kana": "",
		"text": "配置中、自身を除く全味方の攻撃力と物防と魔防+[0,0,0]、自身と同属性の場合更に+[0,3,0]\r\n範囲内の敵の攻撃力を、自身の基本攻撃力の[0,6,0]％減少、配置人数に含まれない",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 8,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 13,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 22,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 9,
			"param": [{
				"num": [45]
			}, {
				"num": [0]
			}, {
				"num": [2]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 20000,
		"rarity": 0,
		"name": "戦いの歌",
		"kana": "",
		"text": "編成中、ウォリアーとガーディアンの攻撃力と物理防御力が[0,0,0]％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [2],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1006,
				"num": [3],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [2],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1006,
				"num": [3],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20001,
		"rarity": 0,
		"name": "魔導の理",
		"kana": "",
		"text": "編成中、スナイパーとソーサラーの攻撃力が[0,0,0]％上昇、その代わりに最大HPが[0,1,0]％ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [13]
			}],
			"maxParam": [{
				"num": [17]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [4],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1006,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 2,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [6]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [4],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1006,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20002,
		"rarity": 0,
		"name": "ラピッドチャージ",
		"kana": "",
		"text": "編成中、全モンスター娘のスキルの初回使用までの時間が[0,0,0]％短縮、攻撃後の待ち時間を[0,1,0]％短縮",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 72,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [25]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20003,
		"rarity": 0,
		"name": "マジックレジスト",
		"kana": "",
		"text": "編成中、全モンスター娘の最大HPと魔法防御力が[0,0,0]％上昇、毒耐性を[0,2,0]％増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 404,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [25]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20005,
		"rarity": 0,
		"name": "ステラ・ルミノクス",
		"kana": "",
		"text": "編成中、ソーサラーの攻撃力が[0,0,0]％上昇、射程+[0,1,0]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 38,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [12]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1006,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20006,
		"rarity": 0,
		"name": "巨獣の激高",
		"kana": "",
		"text": "編成中、全モンスター娘の最大HPが+[0,0,0]％、攻撃力+[0,1,0]％、その代わりに出撃コスト+[0,2,0]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [35]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [8]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 59,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [3]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20008,
		"rarity": 0,
		"name": "サマービーチバケーション",
		"kana": "",
		"text": "編成中光、火、水属性モンスター娘の攻撃力が[0,0,0]％上昇、移動速度が+[0,1,0]",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [15]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1002,
				"num": [3],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1002,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 23,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [50]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [2],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1002,
				"num": [3],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1002,
				"num": [5],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 20009,
		"rarity": 0,
		"name": "メイド根性",
		"kana": "",
		"text": "編成中、全モンスター娘の最大HPが+[0,0,0]％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [25]
			}],
			"timing": 4,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 100,
		"skipend": 0
	}, {
		"id": 50001,
		"rarity": 0,
		"name": "ゴブリントークン",
		"kana": "",
		"text": "死亡すると全味方のスキル再使用時間が3秒短縮される。\r\n※ゴブリンシャーマンが配置中のみ効果発動",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1081,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 8,
			"range": 3,
			"triggerData": [{
				"type": 5000,
				"num": [32],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50002,
		"rarity": 0,
		"name": "ハイオークトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50003,
		"rarity": 0,
		"name": "マタンゴトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50004,
		"rarity": 0,
		"name": "ゴーストトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50005,
		"rarity": 0,
		"name": "ビートークン",
		"kana": "",
		"text": "弱い毒を与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [25]
			}, {
				"num": [120]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50006,
		"rarity": 0,
		"name": "触手トークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50007,
		"rarity": 0,
		"name": "ホルスタイン",
		"kana": "",
		"text": "ブロック数99",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 46,
			"param": [{
				"num": [99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50008,
		"rarity": 0,
		"name": "異世界戦士",
		"kana": "",
		"text": "攻撃した敵の移動速度を低下し、\r\n攻撃後の待ち時間を増加させる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [30]
			}, {
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [50]
			}, {
				"num": [90]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 46,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50009,
		"rarity": 0,
		"name": "アルミラージトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50010,
		"rarity": 0,
		"name": "スキュラトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50012,
		"rarity": 0,
		"name": "悪魔のギロチン",
		"kana": "",
		"text": "隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [999999]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 13,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 519,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 520,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50013,
		"rarity": 0,
		"name": "ボーンスタチュー",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [999999]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 13,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 519,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 520,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50014,
		"rarity": 0,
		"name": "ゲイザーヘッド",
		"kana": "",
		"text": "隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1024,
			"param": [{
				"num": [35]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 13,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 519,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 520,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50015,
		"rarity": 0,
		"name": "バナナの皮",
		"kana": "",
		"text": "隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [999999]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1098,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 519,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 520,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50016,
		"rarity": 0,
		"name": "リザードマン娘(NPC)",
		"kana": "",
		"text": "ブロック数変動",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 46,
			"param": [{
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0, 1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50017,
		"rarity": 0,
		"name": "グリーンスライムトークン",
		"kana": "",
		"text": "設定なし",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50018,
		"rarity": 0,
		"name": "妖精騎士団",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [111],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50019,
		"rarity": 0,
		"name": "熱血オーク",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50020,
		"rarity": 0,
		"name": "妖精騎士団",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [111],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50022,
		"rarity": 0,
		"name": "ブラックボール",
		"kana": "",
		"text": "ブラックボール",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 519,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [3]
			}, {
				"num": [10026]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50023,
		"rarity": 0,
		"name": "妖花トークン",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [10034]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 515,
			"param": [{
				"num": [80]
			}, {
				"num": [190]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 5,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50024,
		"rarity": 0,
		"name": "リッチトークン",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [12]
			}, {
				"num": [600]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50025,
		"rarity": 0,
		"name": "リッチトークン",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [15]
			}, {
				"num": [600]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 50027,
		"rarity": 0,
		"name": "ウインドエレメンタル",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": [{
				"type": 1002,
				"num": [4],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90026,
		"rarity": 0,
		"name": "出撃コスト -1",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 60,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90027,
		"rarity": 0,
		"name": "最大HP +400",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 3,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90028,
		"rarity": 0,
		"name": "攻撃力 +50",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90029,
		"rarity": 0,
		"name": "物理防御力 +60",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 13,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90030,
		"rarity": 0,
		"name": "魔法防御力 +60",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 18,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90031,
		"rarity": 0,
		"name": "射程 +10",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90032,
		"rarity": 0,
		"name": "攻撃速度 +10",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 28,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90033,
		"rarity": 0,
		"name": "移動速度1.5倍",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90034,
		"rarity": 0,
		"name": "移動消費コスト-2",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 62,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90035,
		"rarity": 0,
		"name": "再出撃時間50%短縮",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1080,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90036,
		"rarity": 0,
		"name": "トークン所持数+2",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1084,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90037,
		"rarity": 0,
		"name": "最大HP +600",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 3,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90038,
		"rarity": 0,
		"name": "攻撃力 +75",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90039,
		"rarity": 0,
		"name": "物理防御力 +90",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 13,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90040,
		"rarity": 0,
		"name": "魔法防御力 +90",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 18,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90041,
		"rarity": 0,
		"name": "射程 +15",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 90042,
		"rarity": 0,
		"name": "攻撃速度 +15",
		"kana": "",
		"text": "潜在覚醒",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 28,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 23,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900000,
		"rarity": 0,
		"name": "石化攻撃（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [20]
			}, {
				"num": [450]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900001,
		"rarity": 0,
		"name": "石化攻撃(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [50]
			}, {
				"num": [450]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900002,
		"rarity": 0,
		"name": "石化攻撃(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [450]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900003,
		"rarity": 0,
		"name": "スタン攻撃（20)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900004,
		"rarity": 0,
		"name": "スタン攻撃(50)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [50]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900005,
		"rarity": 0,
		"name": "スタン攻撃(100)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900006,
		"rarity": 0,
		"name": "毒攻撃（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [100]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900007,
		"rarity": 0,
		"name": "毒攻撃(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [100]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900008,
		"rarity": 0,
		"name": "毒攻撃(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [100]
			}, {
				"num": [100]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900009,
		"rarity": 0,
		"name": "猛毒攻撃（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [150]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900010,
		"rarity": 0,
		"name": "猛毒攻撃(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [150]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900011,
		"rarity": 0,
		"name": "猛毒攻撃(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900012,
		"rarity": 0,
		"name": "超猛毒攻撃（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900013,
		"rarity": 0,
		"name": "超猛毒攻撃(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [300]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900014,
		"rarity": 0,
		"name": "超猛毒攻撃(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}, {
				"num": [9999999]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900015,
		"rarity": 0,
		"name": "蜘蛛糸(10%)",
		"kana": "",
		"text": "効果量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900016,
		"rarity": 0,
		"name": "蜘蛛糸(20%)",
		"kana": "",
		"text": "効果量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900017,
		"rarity": 0,
		"name": "ブロック数要求(2)",
		"kana": "",
		"text": "ブロック2",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 73,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900018,
		"rarity": 0,
		"name": "ブロック数要求(3)",
		"kana": "",
		"text": "ブロック3",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 73,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900019,
		"rarity": 0,
		"name": "ブロック数要求(4)",
		"kana": "",
		"text": "ブロック4",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 73,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900020,
		"rarity": 0,
		"name": "ブロック数要求(5)",
		"kana": "",
		"text": "ブロック5",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 73,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900021,
		"rarity": 0,
		"name": "攻撃なし",
		"kana": "",
		"text": "攻撃回数で無力化(ヒーラー用)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [50],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900022,
		"rarity": 0,
		"name": "攻撃力減少(20)",
		"kana": "",
		"text": "全味方の攻撃力が20減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [20]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900023,
		"rarity": 0,
		"name": "攻撃力減少(50)",
		"kana": "",
		"text": "全味方の攻撃力が50減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900024,
		"rarity": 0,
		"name": "攻撃力減少(100)",
		"kana": "",
		"text": "全味方の攻撃力が100減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900025,
		"rarity": 0,
		"name": "攻撃力減少_対象(30)",
		"kana": "",
		"text": "攻撃した相手の攻撃力が30減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 9,
			"param": [{
				"num": [30]
			}, {
				"num": [99999]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900026,
		"rarity": 0,
		"name": "ブロック数要求(99)",
		"kana": "",
		"text": "ブロック不可",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 73,
			"param": [{
				"num": [99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900027,
		"rarity": 0,
		"name": "攻撃速度割合減少_対象(20)",
		"kana": "",
		"text": "攻撃した相手の攻撃速度が20%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900028,
		"rarity": 0,
		"name": "攻撃速度割合減少_対象(50)",
		"kana": "",
		"text": "攻撃した相手の攻撃速度が50%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [50]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900029,
		"rarity": 0,
		"name": "攻撃速度割合減少_対象(100)",
		"kana": "",
		"text": "攻撃した相手の攻撃速度が100%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900030,
		"rarity": 0,
		"name": "攻撃力割合減少(20)",
		"kana": "",
		"text": "全味方の攻撃力が20%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [20]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900031,
		"rarity": 0,
		"name": "攻撃力割合減少(50)",
		"kana": "",
		"text": "全味方の攻撃力が50%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900032,
		"rarity": 0,
		"name": "攻撃力割合減少(100)",
		"kana": "",
		"text": "全味方の攻撃力が100%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900033,
		"rarity": 0,
		"name": "攻撃時移動速度90％減少(カリュプディスダメージフィールド用)",
		"kana": "",
		"text": "ダメージフィールド範囲内の敵の移動速度90％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 22,
			"param": [{
				"num": [90]
			}, {
				"num": [15]
			}, {
				"num": [0]
			}, {
				"num": [0, 0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900034,
		"rarity": 0,
		"name": "スタン攻撃（5)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [5]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900035,
		"rarity": 0,
		"name": "スタン攻撃（10)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 900036,
		"rarity": 0,
		"name": "スタン攻撃（30)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [30]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910000,
		"rarity": 0,
		"name": "石化耐性（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 402,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910001,
		"rarity": 0,
		"name": "石化耐性(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 402,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910002,
		"rarity": 0,
		"name": "石化耐性(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910003,
		"rarity": 0,
		"name": "スタン耐性（20)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 400,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910004,
		"rarity": 0,
		"name": "スタン耐性(50)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 400,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910005,
		"rarity": 0,
		"name": "スタン耐性(100)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 901,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910006,
		"rarity": 0,
		"name": "毒耐性（20%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910007,
		"rarity": 0,
		"name": "毒耐性(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910008,
		"rarity": 0,
		"name": "毒耐性(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910009,
		"rarity": 0,
		"name": "吹き飛ばし耐性（50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 406,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910010,
		"rarity": 0,
		"name": "吹き飛ばし耐性(80%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 406,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910011,
		"rarity": 0,
		"name": "吹き飛ばし耐性(100%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 905,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910012,
		"rarity": 0,
		"name": "石化耐性（95%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 402,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910013,
		"rarity": 0,
		"name": "スタン耐性（95％)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 400,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910014,
		"rarity": 0,
		"name": "毒耐性（95%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910015,
		"rarity": 0,
		"name": "吹き飛ばし耐性（95%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 406,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910016,
		"rarity": 0,
		"name": "状態耐性_石化95",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 402,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 400,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 905,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910017,
		"rarity": 0,
		"name": "スタン耐性(100)",
		"kana": "",
		"text": "蓄積量",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 400,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 402,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 905,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910018,
		"rarity": 0,
		"name": "回避(50%)",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910020,
		"rarity": 0,
		"name": "基礎能力耐性(100%)",
		"kana": "",
		"text": "デバフ無効",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 450,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 910021,
		"rarity": 0,
		"name": "触手無効",
		"kana": "",
		"text": "発生確率",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 907,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920000,
		"rarity": 0,
		"name": "死亡時ライフ減少",
		"kana": "",
		"text": "ライフ減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1034,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 8,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920001,
		"rarity": 0,
		"name": "HP半減時モードチェンジ",
		"kana": "",
		"text": "HP50%以下でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920002,
		"rarity": 0,
		"name": "ブロック時モードチェンジ",
		"kana": "",
		"text": "ブロック時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920003,
		"rarity": 0,
		"name": "非ブロック時モードチェンジ",
		"kana": "",
		"text": "非ブロック時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920004,
		"rarity": 0,
		"name": "隠密",
		"kana": "",
		"text": "隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920005,
		"rarity": 0,
		"name": "楽器サポーター",
		"kana": "",
		"text": "自身を除く敵の攻撃力、物理防御、魔法防御+25％\r\n範囲内の味方攻撃力20%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 7,
			"param": [{
				"num": [20]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920006,
		"rarity": 0,
		"name": "演出ボス用",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 73,
			"param": [{
				"num": [99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 920007,
		"rarity": 0,
		"name": "特定地点到達時にモードチェンジ",
		"kana": "",
		"text": "特定地点到達時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921000,
		"rarity": 0,
		"name": "HP半減時攻撃モーション変更(1)",
		"kana": "",
		"text": "HP50%以下で攻撃モーションをsp_atack1にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921001,
		"rarity": 0,
		"name": "HP半減時攻撃モーション変更(2)",
		"kana": "",
		"text": "HP50%以下で攻撃モーションをsp_atack2にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921002,
		"rarity": 0,
		"name": "HP半減時攻撃モーション変更(3)",
		"kana": "",
		"text": "HP50%以下で攻撃モーションをsp_atack3にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921010,
		"rarity": 0,
		"name": "HP半減時マルチアタック",
		"kana": "",
		"text": "HP50%以下でマルチアタック",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921011,
		"rarity": 0,
		"name": "HP半減時マルチアタック(2)",
		"kana": "",
		"text": "HP50%以下で2体マルチアタック",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921012,
		"rarity": 0,
		"name": "HP半減時マルチアタック(3)",
		"kana": "",
		"text": "HP50%以下で3体マルチアタック",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921020,
		"rarity": 0,
		"name": "HP半減時全ステ割合アップ(20)",
		"kana": "",
		"text": "HP50%以下で攻撃力、物理防御、魔法防御を20%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921021,
		"rarity": 0,
		"name": "HP半減時全ステ割合アップ(50)",
		"kana": "",
		"text": "HP50%以下で攻撃力、物理防御、魔法防御を50%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921022,
		"rarity": 0,
		"name": "HP半減時全ステ割合アップ(100)",
		"kana": "",
		"text": "HP50%以下で攻撃力、物理防御、魔法防御を100%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921023,
		"rarity": 0,
		"name": "2連射",
		"kana": "",
		"text": "2連射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921024,
		"rarity": 0,
		"name": "3連射",
		"kana": "",
		"text": "3連射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [3]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921025,
		"rarity": 0,
		"name": "5連射",
		"kana": "",
		"text": "5連射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921030,
		"rarity": 0,
		"name": "攻撃モーション変更(1)",
		"kana": "",
		"text": "攻撃モーションをsp_atack1にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921031,
		"rarity": 0,
		"name": "攻撃モーション変更(2)",
		"kana": "",
		"text": "攻撃モーションをsp_atack2にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921032,
		"rarity": 0,
		"name": "攻撃モーション変更(3)",
		"kana": "",
		"text": "攻撃モーションをsp_atack3にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921040,
		"rarity": 0,
		"name": "攻撃力割合アップ(20)",
		"kana": "",
		"text": "攻撃力を20%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921041,
		"rarity": 0,
		"name": "攻撃力割合アップ(50)",
		"kana": "",
		"text": "攻撃力を50%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921042,
		"rarity": 0,
		"name": "攻撃力割合アップ(100)",
		"kana": "",
		"text": "攻撃力を100%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921043,
		"rarity": 0,
		"name": "攻撃力割合アップ(150)",
		"kana": "",
		"text": "攻撃力を150%アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921050,
		"rarity": 0,
		"name": "攻撃対象数変動",
		"kana": "",
		"text": "攻撃対象数変動",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921051,
		"rarity": 0,
		"name": "攻撃対象数変動(2)",
		"kana": "",
		"text": "攻撃対象数変動(2)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921052,
		"rarity": 0,
		"name": "攻撃対象数変動(3)",
		"kana": "",
		"text": "攻撃対象数変動(3)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 921053,
		"rarity": 0,
		"name": "攻撃対象数変動(4)",
		"kana": "",
		"text": "攻撃対象数変動(4)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 930000,
		"rarity": 0,
		"name": "黄色オーラ",
		"kana": "",
		"text": "黄色オーラ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1111,
			"param": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500001,
		"rarity": 0,
		"name": "ケルベロス娘",
		"kana": "",
		"text": "HP半減時3体マルチ+攻撃間隔減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500002,
		"rarity": 0,
		"name": "オルトロス娘",
		"kana": "",
		"text": "HP半減時2連射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500003,
		"rarity": 0,
		"name": "アラクネ娘",
		"kana": "",
		"text": "HP半減時蜘蛛糸40%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500004,
		"rarity": 0,
		"name": "アラクネ娘_汎用",
		"kana": "",
		"text": "HP半減時蜘蛛糸25%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 514,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500005,
		"rarity": 0,
		"name": "メデューサ娘",
		"kana": "",
		"text": "HP半減時石化攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [450]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500006,
		"rarity": 0,
		"name": "デュラハン娘",
		"kana": "",
		"text": "死亡時に一定時間無敵",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1089,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [1],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500007,
		"rarity": 0,
		"name": "ワーペンギン娘",
		"kana": "",
		"text": "HP半減時に獣人形態になりHP全回復+性能アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500008,
		"rarity": 0,
		"name": "サラマンダー娘",
		"kana": "",
		"text": "HP半減時に魔法攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 70,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500009,
		"rarity": 0,
		"name": "カッパードラゴン娘",
		"kana": "",
		"text": "HP減少毎にスタン攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [100]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500010,
		"rarity": 0,
		"name": "帝国騎士(騎乗)",
		"kana": "",
		"text": "モードチェンジ（帝国騎士)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200028]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500011,
		"rarity": 0,
		"name": "リザードマン娘",
		"kana": "",
		"text": "尻尾切り",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1090,
			"param": [{
				"num": [50]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2006,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500012,
		"rarity": 0,
		"name": "帝国兵士(旗)",
		"kana": "",
		"text": "敵の攻撃力、物理防御、魔法防御+50％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500013,
		"rarity": 0,
		"name": "サハギン娘",
		"kana": "",
		"text": "攻撃力増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [95]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500014,
		"rarity": 0,
		"name": "物理攻撃回避",
		"kana": "",
		"text": "物理攻撃を50%の確率で回避",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500015,
		"rarity": 0,
		"name": "ゴースト娘",
		"kana": "",
		"text": "毒無効",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 57,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500016,
		"rarity": 0,
		"name": "モードチェンジ（ガーゴイル)",
		"kana": "",
		"text": "4000フレーム後にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500053]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3110],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [10042]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3100],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 73,
			"param": [{
				"num": [99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500017,
		"rarity": 0,
		"name": "勇者男MC遠距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200030]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500018,
		"rarity": 0,
		"name": "勇者男MC近距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200029]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500019,
		"rarity": 0,
		"name": "勇者女MC遠距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200032]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500020,
		"rarity": 0,
		"name": "勇者女MC近距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200031]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500021,
		"rarity": 0,
		"name": "NPC勇者男MC遠距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500057]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500022,
		"rarity": 0,
		"name": "NPC勇者男MC近距離",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500056]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500023,
		"rarity": 0,
		"name": "デュラハン娘",
		"kana": "",
		"text": "モードチェンジ首無し",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500062]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500024,
		"rarity": 0,
		"name": "首無し変身",
		"kana": "",
		"text": "攻撃アニメ再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 28,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1024,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [10014]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500025,
		"rarity": 0,
		"name": "ワーペンギン娘",
		"kana": "",
		"text": "モードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500064]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500026,
		"rarity": 0,
		"name": "ペンギンビーストモード",
		"kana": "",
		"text": "攻撃アニメ再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [2000]
			}, {
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500027,
		"rarity": 0,
		"name": "HP減少時攻撃力2倍",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500028,
		"rarity": 0,
		"name": "ワータイガー娘",
		"kana": "",
		"text": "MC獣人化",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500072]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500029,
		"rarity": 0,
		"name": "ワータイガービーストモード",
		"kana": "",
		"text": "攻撃アニメ再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500030,
		"rarity": 0,
		"name": "ゴブリンシャーマン娘",
		"kana": "",
		"text": "敵の攻撃力、物理防御、魔法防御+70％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500031,
		"rarity": 0,
		"name": "ウィルオウィスプ娘",
		"kana": "",
		"text": "モードチェンジ攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500080]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500032,
		"rarity": 0,
		"name": "ウィルオウィスプ攻撃モード",
		"kana": "",
		"text": "攻撃力アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500033,
		"rarity": 0,
		"name": "ウィルオウィスプ娘EX",
		"kana": "",
		"text": "モードチェンジ攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500082]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500034,
		"rarity": 0,
		"name": "ノーム",
		"kana": "",
		"text": "3回攻撃を行う毎に2連射攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [2]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500035,
		"rarity": 0,
		"name": "オキュー自動回復",
		"kana": "",
		"text": "ダイレクトヒール",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [10]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [450],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500036,
		"rarity": 0,
		"name": "ローパー娘",
		"kana": "",
		"text": "スキル発動",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [500088]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500037,
		"rarity": 0,
		"name": "ローパー娘",
		"kana": "",
		"text": "射程増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 36,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500038,
		"rarity": 0,
		"name": "ジャックランタン娘",
		"kana": "",
		"text": "敵の遠距離攻撃に狙われにくくなる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 57,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500039,
		"rarity": 0,
		"name": "ロックスライムLv1～3",
		"kana": "",
		"text": "死亡時に爆発して範囲ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [100131]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [200]
			}, {
				"num": [3]
			}, {
				"num": [10014]
			}, {
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500040,
		"rarity": 0,
		"name": "敵兵騎士",
		"kana": "",
		"text": "移動している間、遠距離攻撃からのダメージ減少20％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500041,
		"rarity": 0,
		"name": "サンドワーム",
		"kana": "",
		"text": "地中は攻撃の対象にならず、攻撃を回避する",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500042,
		"rarity": 0,
		"name": "ブルースライム",
		"kana": "",
		"text": "魔法攻撃の被ダメージを10％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500043,
		"rarity": 0,
		"name": "イエロースライム",
		"kana": "",
		"text": "物理攻撃の被ダメージを10％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500044,
		"rarity": 0,
		"name": "グリーンスライム",
		"kana": "",
		"text": "HPが自動で回復する（HP1％で）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500045,
		"rarity": 0,
		"name": "ビッグロックスライム",
		"kana": "",
		"text": "死亡時に爆発して範囲ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [100131]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [120]
			}, {
				"num": [3]
			}, {
				"num": [10014]
			}, {
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500046,
		"rarity": 0,
		"name": "ロックスライムLv4～M",
		"kana": "",
		"text": "死亡時に爆発して範囲ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [100131]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [80]
			}, {
				"num": [3]
			}, {
				"num": [10014]
			}, {
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500047,
		"rarity": 0,
		"name": "ハーピィ娘",
		"kana": "",
		"text": "HP半減時3体マルチ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500048,
		"rarity": 0,
		"name": "ジャイアント娘",
		"kana": "",
		"text": "吹っ飛ばし攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 516,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500049,
		"rarity": 0,
		"name": "ファイアーエレメンタル",
		"kana": "",
		"text": "ブロック中の敵に継続ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [10]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500050,
		"rarity": 0,
		"name": "フロストジャイアント娘",
		"kana": "",
		"text": "吹っ飛ばし攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 516,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [10]
			}, {
				"num": [500]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1000],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10056]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500051,
		"rarity": 0,
		"name": "ラミア娘",
		"kana": "",
		"text": "HP半減時にHP全回復して攻撃力上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1026,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [150]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500052,
		"rarity": 0,
		"name": "ジンニーヤ娘A",
		"kana": "",
		"text": "移動速度上昇能力付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500101, 500100],
				"option": ["!", "!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500102],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500103],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 21,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10047]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500053,
		"rarity": 0,
		"name": "ジンニーヤ娘B",
		"kana": "",
		"text": "攻撃力上昇能力付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500101, 500100],
				"option": ["!", "!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500102],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500103],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1008,
			"param": [{
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500101, 500100],
				"option": ["!", "!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500102],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500103],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500054,
		"rarity": 0,
		"name": "ジンニーヤ娘C",
		"kana": "",
		"text": "リジェネ能力付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500101, 500100],
				"option": ["!", "!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500102],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500103],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 63,
			"param": [{
				"num": [5]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [30001]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500055,
		"rarity": 0,
		"name": "属性エレメンタル用",
		"kana": "",
		"text": "魔法攻撃の被ダメージを80％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500056,
		"rarity": 0,
		"name": "ブルースライムLvMAX",
		"kana": "",
		"text": "魔法攻撃の被ダメージを30％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500057,
		"rarity": 0,
		"name": "イエロースライムLvMAX",
		"kana": "",
		"text": "物理攻撃の被ダメージを30％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500058,
		"rarity": 0,
		"name": "グリーンスライムLvMAX",
		"kana": "",
		"text": "HPが自動で回復する（HP10％で）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500059,
		"rarity": 0,
		"name": "薬の影響(攻撃20)",
		"kana": "",
		"text": "攻撃力増加20%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [20]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500060,
		"rarity": 0,
		"name": "薬の影響(攻撃50)",
		"kana": "",
		"text": "攻撃力増加50%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500061,
		"rarity": 0,
		"name": "薬の影響(攻撃80)",
		"kana": "",
		"text": "攻撃力増加80%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [80]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500062,
		"rarity": 0,
		"name": "薬の影響(継続ダメ)",
		"kana": "",
		"text": "3秒毎にHP1%持続ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500063,
		"rarity": 0,
		"name": "サキュバス娘",
		"kana": "",
		"text": "HP50%以下で攻撃力増加+マルチショット",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500064,
		"rarity": 0,
		"name": "インキュバス娘",
		"kana": "",
		"text": "HP50%以下で攻撃力増加+マルチショット+味方モンスター娘の攻撃力ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 7,
			"param": [{
				"num": [30]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500065,
		"rarity": 0,
		"name": "レッドドラゴン娘",
		"kana": "",
		"text": "HP50%以下、3回攻撃毎に特殊なミサイル発射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10053]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500066,
		"rarity": 0,
		"name": "メデューサ娘",
		"kana": "",
		"text": "石化攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500067,
		"rarity": 0,
		"name": "マンティコア娘",
		"kana": "",
		"text": "HP50%以下、3回攻撃毎に特殊なミサイル発射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [250]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10044]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500068,
		"rarity": 0,
		"name": "薬の影響(継続ダメEX用)",
		"kana": "",
		"text": "5秒毎にHP1%持続ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [150],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500069,
		"rarity": 0,
		"name": "モードチェンジ用",
		"kana": "",
		"text": "モードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500070,
		"rarity": 0,
		"name": "汎用マタンゴ娘",
		"kana": "",
		"text": "HP減少で攻撃対象数変更",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [99],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500071,
		"rarity": 0,
		"name": "死亡時ライフ減少",
		"kana": "",
		"text": "ライフ減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1034,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 8,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500072,
		"rarity": 0,
		"name": "本物のマタンゴ娘",
		"kana": "",
		"text": "HP０じゃないロスト時に拠点回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1034,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [1],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500073,
		"rarity": 0,
		"name": "ヘカトンケイル娘",
		"kana": "",
		"text": "モードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500074,
		"rarity": 0,
		"name": "ターロス娘",
		"kana": "",
		"text": "非ブロック中は射程の短い遠距離攻撃を行う",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10030]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500075,
		"rarity": 0,
		"name": "ワーラット",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": ["&"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100361]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [20]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500076,
		"rarity": 0,
		"name": "サラマンダー娘",
		"kana": "",
		"text": "HP50％で範囲魔法攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 40,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10032]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500077,
		"rarity": 0,
		"name": "イノシシ",
		"kana": "",
		"text": "モードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500078,
		"rarity": 0,
		"name": "オークロード娘",
		"kana": "",
		"text": "HP50％以下でHP50%回復と攻撃力200%上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [200]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [50]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [50]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 3,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500080,
		"rarity": 0,
		"name": "オーク娘",
		"kana": "",
		"text": "HP50％以下でHP50%回復と攻撃力50％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [50]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500081,
		"rarity": 0,
		"name": "ワーラット娘",
		"kana": "",
		"text": "周辺ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": ["&"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100361]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [20]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500082,
		"rarity": 0,
		"name": "ワーラットビーストモード",
		"kana": "",
		"text": "周辺ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": ["&"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100361]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [20]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500083,
		"rarity": 0,
		"name": "ワイバーン娘",
		"kana": "",
		"text": "HP50%以下、3回攻撃毎に特殊なミサイル発射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500084,
		"rarity": 0,
		"name": "ブラックワイバーン",
		"kana": "",
		"text": "生存時間毎に攻撃力上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1500],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2500],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3000],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3500],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500085,
		"rarity": 0,
		"name": "ブラックリザードマン娘",
		"kana": "",
		"text": "HP減少で攻撃力上昇さらに減少で攻撃力上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500086,
		"rarity": 0,
		"name": "女僧侶",
		"kana": "",
		"text": "味方全体リジェネ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [150]
			}, {
				"num": [4]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [150, 150, 150],
				"option": ["%", "%", "%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500088,
		"rarity": 0,
		"name": "風の守護結晶",
		"kana": "",
		"text": "ボス被ダメ低下",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 13,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 20,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 18,
			"param": [{
				"num": [1500]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [100072]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 20,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500089,
		"rarity": 0,
		"name": "カースワイバーン",
		"kana": "",
		"text": "攻撃時相手を稀に石化させる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 513,
			"param": [{
				"num": [10]
			}, {
				"num": [90]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500090,
		"rarity": 0,
		"name": "爆弾魔",
		"kana": "",
		"text": "攻撃時に不死身で死亡時爆発、味方にのみダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [3]
			}, {
				"num": [10014]
			}, {
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1089,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1105,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100131]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 8,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500091,
		"rarity": 0,
		"name": "爆弾",
		"kana": "",
		"text": "死亡時に爆発、敵味方どちらにもダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [3]
			}, {
				"num": [10014]
			}, {
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 9,
			"range": 14,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100131]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500092,
		"rarity": 0,
		"name": "フェニックス娘",
		"kana": "",
		"text": "戦闘中1度だけHPが0になってもHP最大で復活可能\r\n復活後は永続で攻撃力と射程がアップ、周囲の敵全てを攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1090,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2006,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500093,
		"rarity": 0,
		"name": "フェニックス娘_復活後",
		"kana": "",
		"text": "攻撃力100%増加、攻撃範囲200に変化、マルチアタック",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 40,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500094,
		"rarity": 0,
		"name": "水着ケルベロス娘",
		"kana": "",
		"text": "登場時に全味方の物理防御力と魔法防御力5%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 12,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [5]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500095,
		"rarity": 0,
		"name": "水着ケルベロス娘_モードチェンジ",
		"kana": "",
		"text": "HP半減後は常時3連射、攻撃力20%、攻撃範囲30%上昇。\r\n攻撃待機時間軽減",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1018,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 36,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500096,
		"rarity": 0,
		"name": "にょるにょるちゃん",
		"kana": "",
		"text": "触手",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 518,
			"param": [{
				"num": [30]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 507,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 56,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500097,
		"rarity": 0,
		"name": "伝説の勇者",
		"kana": "",
		"text": "自身を除く、全敵の攻撃力+100％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500098,
		"rarity": 0,
		"name": "伝説の勇者_モードチェンジ",
		"kana": "",
		"text": "攻撃力、物理防御力、魔法防御力+100%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500099,
		"rarity": 0,
		"name": "ゴールドドラゴン娘",
		"kana": "",
		"text": "時間経過で物理防御力と魔法防御力が増加\r\nHP半減で攻撃力100%増加、射程30%増加、マルチアタック、ミサイル変更",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4500],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4500],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 36,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10072]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500100,
		"rarity": 0,
		"name": "プリースト",
		"kana": "",
		"text": "範囲内の攻撃力、物理防御力+100%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500101,
		"rarity": 0,
		"name": "ロシカの幻影",
		"kana": "",
		"text": "幻影死亡時にロシカのステータス上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [300]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500206],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500206],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [150]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500206],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 3,
			"param": [{
				"num": [50000]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500206],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500102,
		"rarity": 0,
		"name": "ラフーカ",
		"kana": "",
		"text": "HP半減時にマルチアタック3体と攻撃対象数2だと与ダメ1.15倍、1だと1.3倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [115]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [{
				"type": 2012,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500103,
		"rarity": 0,
		"name": "大砲",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500104,
		"rarity": 0,
		"name": "強化型魔導ドローン",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [403]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [700],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500105,
		"rarity": 0,
		"name": "女盗賊",
		"kana": "",
		"text": "毒中の敵にスタン30付与。",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 512,
			"param": [{
				"num": [30]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500106,
		"rarity": 0,
		"name": "",
		"kana": "",
		"text": "HP半減時に射程と攻撃速度上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 36,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 26,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500107,
		"rarity": 0,
		"name": "女海賊",
		"kana": "",
		"text": "HP50%以下で攻撃モーションをsp_atack1にする",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500108,
		"rarity": 0,
		"name": "デーモン娘",
		"kana": "",
		"text": "魔法攻撃の被ダメージを50％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500109,
		"rarity": 0,
		"name": "ヒュドラ娘",
		"kana": "",
		"text": "HPが1秒毎に最大HPの1％回復し、ブロック中は攻撃時100%確率で4回追加攻撃\r\n毒状態の敵に与ダメージが1.5倍\r\nHPが0になると1度だけHP全回復で復活",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1020,
			"param": [{
				"num": [4]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1009,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1090,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10079]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500110,
		"rarity": 0,
		"name": "魔導戦車",
		"kana": "",
		"text": "移動中攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [500]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [10],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 5,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500111,
		"rarity": 0,
		"name": "ノコギリアーム周辺攻撃",
		"kana": "",
		"text": "周囲攻撃(LvMAX)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [360],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500112,
		"rarity": 0,
		"name": "アルプ娘",
		"kana": "",
		"text": "移動時隠密+攻撃しない\r\nモンスター娘に対する攻撃でHP回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 27,
				"num": [0],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 23,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 24,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 49,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 27,
				"num": [0],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1064,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 13,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500113,
		"rarity": 0,
		"name": "ネメアレオ娘",
		"kana": "",
		"text": "味方が受ける物理ダメージを20％減少し、敵の攻撃力の25％を反射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1012,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500114,
		"rarity": 0,
		"name": "ネメアレオ娘_モードチェンジ後",
		"kana": "",
		"text": "HP半減時、自身の攻撃力が1.5倍、味方の物理防御力2倍になる\r\n自身は物理ダメージを0にして、スタンしなくなる\r\nまた、敵の攻撃を引き付ける",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500115,
		"rarity": 0,
		"name": "ギガホルスタイン",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [260],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [630],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [960],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [990],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1240],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1270],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1300],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1630],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1700],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1730],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2030],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2060],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2090],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2430],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2460],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2490],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2520],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2550],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2700],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2730],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2830],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2860],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2900],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2930],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2960],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2990],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3020],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3050],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3080],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500116,
		"rarity": 0,
		"name": "移動式砲台",
		"kana": "",
		"text": "特定地点到達時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600129]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500117,
		"rarity": 0,
		"name": "移動式三連砲台",
		"kana": "",
		"text": "特定地点到達時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600132]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [101],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500118,
		"rarity": 0,
		"name": "移動式砲台_攻撃",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1002]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [360],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [600127]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [110],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500119,
		"rarity": 0,
		"name": "移動式三連砲台_攻撃",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1002]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [450],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [600130]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [111],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500120,
		"rarity": 0,
		"name": "鞭使いの女秘書",
		"kana": "",
		"text": "攻撃時、相手の防御力減少と、被ダメージ増加を付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 12,
			"param": [{
				"num": [3]
			}, {
				"num": [300]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500121,
		"rarity": 0,
		"name": "ハルピュイア娘",
		"kana": "",
		"text": "敵の移動速度を+20増加、飛行敵は移動速度+40増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 23,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 5,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 23,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 5,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500122,
		"rarity": 0,
		"name": "バジリスク娘",
		"kana": "",
		"text": "存在する限り、敵が毒状態になった際、その毒のダメージを+100％する\r\n毒状態の敵に攻撃時、攻撃力50％の追加ダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [50]
			}, {
				"num": [3]
			}, {
				"num": [100352]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 415,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500123,
		"rarity": 0,
		"name": "バジリスク娘_モードチェンジ後",
		"kana": "",
		"text": "HP半減時、攻撃力が1.5倍、射程1.2倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 36,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500124,
		"rarity": 0,
		"name": "牛鬼",
		"kana": "",
		"text": "被弾時、攻撃者の攻撃力と攻撃速度低下、攻撃間隔増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 27,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [50]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500125,
		"rarity": 0,
		"name": "大砲_発動タイミング調整1",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [700],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500126,
		"rarity": 0,
		"name": "大砲_発動タイミング調整2",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500127,
		"rarity": 0,
		"name": "大砲_発動タイミング調整2",
		"kana": "",
		"text": "砲台攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1100],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500128,
		"rarity": 0,
		"name": "ケルベロス娘",
		"kana": "",
		"text": "味方全体に攻撃力低下デバフ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50, 50, 50],
				"option": ["<=", "<=", "<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 35,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500129,
		"rarity": 0,
		"name": "オルトロス娘",
		"kana": "",
		"text": "味方全体に攻撃力低下デバフ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [2]
			}, {
				"num": [100]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50, 50, 50],
				"option": ["<=", "<=", "<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500130,
		"rarity": 0,
		"name": "ヘルハウンド娘",
		"kana": "",
		"text": "味方全体に攻撃力低下デバフ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [220]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500131,
		"rarity": 0,
		"name": "マーナガルム娘",
		"kana": "",
		"text": "味方全体に物理魔法防御力低下デバフ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 12,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [630],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [160]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500132,
		"rarity": 0,
		"name": "幻狼トークン",
		"kana": "",
		"text": "味方全体に物理魔法防御力低下デバフ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 12,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500133,
		"rarity": 0,
		"name": "サラマンダー娘",
		"kana": "",
		"text": "自身を除く、全敵の攻撃力+100％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 40,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10032]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500134,
		"rarity": 0,
		"name": "コカトリス娘",
		"kana": "",
		"text": "石化状態の相手に対し与ダメージ100％アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1009,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 24,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 513,
			"param": [{
				"num": [100]
			}, {
				"num": [150]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500135,
		"rarity": 0,
		"name": "キマイラ娘",
		"kana": "",
		"text": "50%の確率で最大2回追加攻撃が発生、最後の攻撃は敵を毒状態にする場合がある\r\n",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1020,
			"param": [{
				"num": [2]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 515,
			"param": [{
				"num": [120]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [{
				"type": 2004,
				"num": [3],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10032]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1019,
			"param": [{
				"num": [-1]
			}, {
				"num": [100]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500136,
		"rarity": 0,
		"name": "ターロス娘",
		"kana": "",
		"text": "ブロック中の敵に攻撃力に応じた継続ダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [10]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500137,
		"rarity": 0,
		"name": "フェニックス娘",
		"kana": "",
		"text": "周囲の味方に継続ダメージ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [3]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1026,
			"param": [{
				"num": [50]
			}, {
				"num": [1]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 24,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500138,
		"rarity": 0,
		"name": "ライカンスロープリジェネ",
		"kana": "",
		"text": "HPが1秒ごとに最大HPの1％回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500139,
		"rarity": 0,
		"name": "クーシー娘",
		"kana": "",
		"text": "移動時隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 27,
				"num": [0],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 23,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 24,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 40,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10051]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [2]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [4],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500140,
		"rarity": 0,
		"name": "",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 27,
				"num": [0],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 23,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 18,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 24,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 40,
			"param": [{
				"num": [350]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10051]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [2]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [350]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500141,
		"rarity": 0,
		"name": "ブラックドラゴン娘",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [110],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [111],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [112],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [113],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [114],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [115],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [116],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1088,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [120],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 38,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10090]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500142,
		"rarity": 0,
		"name": "マウロブラックホール",
		"kana": "",
		"text": "無敵",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1025,
			"param": [{
				"num": [300]
			}, {
				"num": [3]
			}, {
				"num": [10026]
			}, {
				"num": [120]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500143,
		"rarity": 0,
		"name": "精鋭魔導士_移動時",
		"kana": "",
		"text": "特定地点到達時にモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200051]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [10],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [200052]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500144,
		"rarity": 0,
		"name": "精鋭魔導士_到達時",
		"kana": "",
		"text": "体力60%以下でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [200052]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [200050],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [200051],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [200052],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500145,
		"rarity": 0,
		"name": "精鋭魔導士_HP60%以下",
		"kana": "",
		"text": "HP50%分のバリアを自身に１回だけ付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1092,
			"param": [{
				"num": [1]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500146,
		"rarity": 0,
		"name": "第４皇女カティナ",
		"kana": "",
		"text": "敵「人間・兵器」の移動速度・攻撃速度50%アップ、攻撃間隔30％ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60011],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 26,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60011],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 32,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60011],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500147,
		"rarity": 0,
		"name": "第3皇女リンデンハート",
		"kana": "",
		"text": "敵「モンスター娘・魔物・亜人」の攻撃力・物理防御・魔法防御50％アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500267],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500267],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500267],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500148,
		"rarity": 0,
		"name": "雪女娘",
		"kana": "",
		"text": "攻撃した相手の攻撃速度を10％低下＋攻撃間隔10％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [10]
			}, {
				"num": [420]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500266],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500266],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}, {
				"num": [-1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 8,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500266],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500149,
		"rarity": 0,
		"name": "式神",
		"kana": "",
		"text": "死亡時式神エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10072]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 9,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500150,
		"rarity": 0,
		"name": "ターロス娘/珍宝",
		"kana": "",
		"text": "ブロック中の敵に攻撃力に応じた継続ダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [10]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 3,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500151,
		"rarity": 0,
		"name": "鬼火",
		"kana": "",
		"text": "範囲内の敵に継続ダメージと物理攻撃回避",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500152,
		"rarity": 0,
		"name": "雪女娘/キャッチ",
		"kana": "",
		"text": "攻撃した相手の攻撃速度を10％低下＋攻撃間隔10％上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 31,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [1]
			}, {
				"num": [10]
			}, {
				"num": [420]
			}, {
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500153,
		"rarity": 0,
		"name": "天候変更",
		"kana": "",
		"text": "一定時間毎に天候：晴れを発生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500154,
		"rarity": 0,
		"name": "アメマネキ",
		"kana": "",
		"text": "ブロック時は挑発、移動中は隠密",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 3,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 505,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [3]
			}, {
				"num": [13]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [35],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500155,
		"rarity": 0,
		"name": "サンフラワーHP減少時モードチェンジ",
		"kana": "",
		"text": "HP20%以下でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600157]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500156,
		"rarity": 0,
		"name": "サンフラワーHP回復中",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 63,
			"param": [{
				"num": [10]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [30001]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500157,
		"rarity": 0,
		"name": "再度開花",
		"kana": "",
		"text": "HP85%でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600155]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500158,
		"rarity": 0,
		"name": "ひまわり　回復",
		"kana": "",
		"text": "リジェネ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [500]
			}, {
				"num": [4]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [150, 150, 150],
				"option": ["%", "%", "%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500159,
		"rarity": 0,
		"name": "ひまわり狙われにくくする　",
		"kana": "",
		"text": "敵の遠距離攻撃に狙われにくくなる",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 54,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500160,
		"rarity": 0,
		"name": "被弾時攻撃速度減少",
		"kana": "",
		"text": "攻撃した相手の攻撃速度が20%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [20]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500161,
		"rarity": 0,
		"name": "サンフラワーHP減少時モードチェンジ",
		"kana": "",
		"text": "HP20%以下でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600167]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500162,
		"rarity": 0,
		"name": "ひまわり　回復",
		"kana": "",
		"text": "リジェネ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [800]
			}, {
				"num": [4]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [150, 150, 150],
				"option": ["%", "%", "%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500163,
		"rarity": 0,
		"name": "被弾時攻撃速度減少",
		"kana": "",
		"text": "攻撃した相手の攻撃速度が20%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 27,
			"param": [{
				"num": [40]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500164,
		"rarity": 0,
		"name": "再度開花",
		"kana": "",
		"text": "HP85%でモードチェンジ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1006,
			"param": [{
				"num": [600165]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500165,
		"rarity": 0,
		"name": "星の輝き/エロイーズ",
		"kana": "",
		"text": "攻撃力、物防、魔防100%上昇、攻撃間隔50%減少を射程内のカミラ、メイジーに付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500322],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500324],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500166,
		"rarity": 0,
		"name": "星の輝き/カミラ",
		"kana": "",
		"text": "攻撃力、物防、魔防100%上昇、攻撃間隔50%減少を射程内のエロイーズ、メイジーに付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500322],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500323],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500167,
		"rarity": 0,
		"name": "星の輝き/メイジー",
		"kana": "",
		"text": "攻撃力、物防、魔防100%上昇、攻撃間隔50%減少を射程内のエロイーズ、カミラに付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [500323],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [500324],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 16,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500168,
		"rarity": 0,
		"name": "クリスマスの奇跡(小)",
		"kana": "",
		"text": "自身が受ける魔法攻撃ダメージを25％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [75]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500169,
		"rarity": 0,
		"name": "クリスマスの奇跡(中)",
		"kana": "",
		"text": "自身が受ける魔法攻撃ダメージを50％減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500170,
		"rarity": 0,
		"name": "吟遊詩人",
		"kana": "",
		"text": "自身を除く敵の攻撃力、物理防御、魔法防御+25％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 12,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1025,
			"param": [{
				"num": [100]
			}, {
				"num": [4]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 5,
			"triggerData": [{
				"type": 2001,
				"num": [180, 180, 180],
				"option": ["%", "%", "%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500171,
		"rarity": 0,
		"name": "レッドキャップ娘",
		"kana": "",
		"text": "味方ユニットに攻撃時最大HPの3%を回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1064,
			"param": [{
				"num": [3]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500172,
		"rarity": 0,
		"name": "レッドキャップ娘/モードチェンジ後",
		"kana": "",
		"text": "味方ユニットに攻撃時最大HPの5%を回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1064,
			"param": [{
				"num": [5]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500173,
		"rarity": 0,
		"name": "信長化アビリティ",
		"kana": "",
		"text": "攻撃時味方の攻撃防御ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [5]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 12,
			"param": [{
				"num": [5]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [5]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500174,
		"rarity": 0,
		"name": "ブラックドラゴン娘",
		"kana": "",
		"text": "HP50％で貫通魔法攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 38,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 70,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10090]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 69,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500175,
		"rarity": 0,
		"name": "ドライアド娘",
		"kana": "",
		"text": "常時敵全体にリジェネと毒と石化無効",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [100]
			}, {
				"num": [4]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [150, 150, 150],
				"option": ["%", "%", "%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 904,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 902,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500176,
		"rarity": 0,
		"name": "シャイターン娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [180]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 67,
			"param": [{
				"num": [10065]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500177,
		"rarity": 0,
		"name": "スフィンクス娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500178,
		"rarity": 0,
		"name": "インプ娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 36,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500179,
		"rarity": 0,
		"name": "アルプ娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500180,
		"rarity": 0,
		"name": "バジリスク娘",
		"kana": "",
		"text": "HP半減時、攻撃力が1.5倍、射程1.2倍",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 36,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500181,
		"rarity": 0,
		"name": "ゴブリン娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500182,
		"rarity": 0,
		"name": "ハイオーク娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500183,
		"rarity": 0,
		"name": "リーフウルフ",
		"kana": "",
		"text": "非ブロック時に回避80%",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [80]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500184,
		"rarity": 0,
		"name": "オヤブンガロトラ",
		"kana": "",
		"text": "毒状態の相手に攻撃した際、対象者の最大HPの15%のダメージを与える",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [15]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500185,
		"rarity": 0,
		"name": "女騎乗騎士",
		"kana": "",
		"text": "移動中攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [500]
			}, {
				"num": [1]
			}, {
				"num": [0]
			}, {
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500186,
		"rarity": 0,
		"name": "女武闘家",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500361]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500187,
		"rarity": 0,
		"name": "女武闘家V2",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500365]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [1],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500188,
		"rarity": 0,
		"name": "女武闘家V3",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500366]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [4],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500189,
		"rarity": 0,
		"name": "女武闘家V4",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [11],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500367]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [10],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500190,
		"rarity": 0,
		"name": "8-1エネミー用",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1105,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40000,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 1008,
				"num": [600180],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1008,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 10,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500191,
		"rarity": 0,
		"name": "焚火",
		"kana": "",
		"text": "死亡時エントリー2召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 8,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500192,
		"rarity": 0,
		"name": "帝国士官",
		"kana": "",
		"text": "攻撃時、相手の物理・魔法防御力２０％ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 12,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500193,
		"rarity": 0,
		"name": "ゴーレムライダー兵",
		"kana": "",
		"text": "敵「人間・兵器」の攻撃速度20%アップ、攻撃間隔10％ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 26,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60011],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 32,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60000],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60011],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500194,
		"rarity": 0,
		"name": "モンスターテイマー兵",
		"kana": "",
		"text": "敵「モンスター娘・魔物・亜人・竜」の攻撃力・物理防御・魔法防御35％アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 6,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60003],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60003],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60002],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1004,
				"num": [60012],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [35]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60003],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500195,
		"rarity": 0,
		"name": "爆弾植物",
		"kana": "",
		"text": "ミサイル攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1402]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1105,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [680],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500196,
		"rarity": 0,
		"name": "ペガサス娘",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 36,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 32,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500198,
		"rarity": 0,
		"name": "ピスティーフ",
		"kana": "",
		"text": "毒解除",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 904,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 20,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 904,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": [{
				"type": 20,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 63,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [30001]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1053,
			"param": [{
				"num": [30001]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500199,
		"rarity": 0,
		"name": "ロリ王国騎士",
		"kana": "",
		"text": "非ブロック時、ダメージ減少40％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [200057],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [200058],
				"option": ["|1"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500200,
		"rarity": 0,
		"name": "アカオウム",
		"kana": "",
		"text": "魔物の攻撃力、物理防御、魔法防御+50％",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [600191],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 11,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [600191],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 16,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 1004,
				"num": [60001],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 1008,
				"num": [600191],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500201,
		"rarity": 0,
		"name": "アオオウム",
		"kana": "",
		"text": "攻撃時、相手の攻撃力・攻撃速度減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [15]
			}, {
				"num": [600]
			}, {
				"num": [0]
			}, {
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 27,
			"param": [{
				"num": [15]
			}, {
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500202,
		"rarity": 0,
		"name": "ジャンガコンガ",
		"kana": "",
		"text": "遠距離攻撃を被弾するごとに攻撃力上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 8,
			"param": [{
				"num": [100]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 4,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 8,
			"param": [{
				"num": [25]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [10046]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 4,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500203,
		"rarity": 0,
		"name": "女武闘家EX",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500371]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [0],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500204,
		"rarity": 0,
		"name": "女武闘家EXV2",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [2],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500372]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [1],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500205,
		"rarity": 0,
		"name": "女武闘家EXV3",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [5],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500373]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [4],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500206,
		"rarity": 0,
		"name": "女武闘家EXV4",
		"kana": "",
		"text": "エフェクト再生",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1053,
			"param": [{
				"num": [10020]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [9],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [500374]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [8],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500208,
		"rarity": 0,
		"name": "ギガントプーパ",
		"kana": "",
		"text": "ミニプーパ地",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1500],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [13]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1700],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [14]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2400],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2500],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [21]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [650],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [22]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [700],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [23]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [750],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [24]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [25]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [850],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [26]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1750],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [27]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [28]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1850],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [29]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1900],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1950],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [31]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500209,
		"rarity": 0,
		"name": "特殊範囲ラプワーン系",
		"kana": "",
		"text": "特殊範囲円で範囲50",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500210,
		"rarity": 0,
		"name": "グランべリア(コラボ)",
		"kana": "",
		"text": "HPが減少すると攻撃力上昇（最大50%）",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [80],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [70],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [40]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [50],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500211,
		"rarity": 0,
		"name": "エルベティエ(コラボ)",
		"kana": "",
		"text": "自身が受ける物理攻撃ダメージを50%軽減\r\n射程内の味方ユニットの物理防御、魔法防御を30%減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 12,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500212,
		"rarity": 0,
		"name": "スライム娘(コラボ)",
		"kana": "",
		"text": "自身が受ける物理攻撃ダメージを30%軽減",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [70]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500213,
		"rarity": 0,
		"name": "スライム娘(コラボ)_モードチェンジ後",
		"kana": "",
		"text": "攻撃力と射程が30%上昇",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 6,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 36,
			"param": [{
				"num": [30]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500214,
		"rarity": 0,
		"name": "インプ娘(コラボ)",
		"kana": "",
		"text": "受けたダメージの20%を反射\r\n範囲内の味方ユニットの移動速度を50%低下",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1012,
			"param": [{
				"num": [20]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 10,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 22,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500215,
		"rarity": 0,
		"name": "妖狐(コラボ)",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [101],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [102],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [103],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [104],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [105]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [105],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [106]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [106],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [107]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [107],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [108]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [108],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [109]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [109],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [110],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [111]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [111],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [112]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [112],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [113]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [113],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [114]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [114],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [115]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [115],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [116]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [116],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [117]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [117],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [118]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [118],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [119]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [119],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [120],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [121]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [121],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [122]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [122],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [123]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [123],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [124]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2009,
				"num": [124],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500216,
		"rarity": 0,
		"name": "特殊範囲爆弾魔",
		"kana": "",
		"text": "特殊範囲円で範囲120",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500217,
		"rarity": 0,
		"name": "特殊範囲ラプワーン系",
		"kana": "",
		"text": "特殊範囲円で範囲50",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500218,
		"rarity": 0,
		"name": "ワーラット特殊範囲追加版",
		"kana": "",
		"text": "",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 515,
			"param": [{
				"num": [50]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 3,
			"range": 4,
			"triggerData": [],
			"activeData": [{
				"type": 21,
				"num": [1],
				"option": ["&"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 25,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1053,
			"param": [{
				"num": [100361]
			}, {
				"num": [0]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1101,
			"param": [{
				"num": [20]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [30],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500219,
		"rarity": 0,
		"name": "特殊範囲ノコギリアーム",
		"kana": "",
		"text": "特殊範囲円で範囲180",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [180]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500220,
		"rarity": 0,
		"name": "特殊範囲桃形兜",
		"kana": "",
		"text": "特殊範囲円で範囲120",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500221,
		"rarity": 0,
		"name": "特殊範囲魔王化桃形兜",
		"kana": "",
		"text": "特殊範囲円で範囲150",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1107,
			"param": [{
				"num": [1]
			}, {
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500222,
		"rarity": 0,
		"name": "アルマエルマ(コラボ)",
		"kana": "",
		"text": "物理と魔法攻撃を50%回避",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 7,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 8,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500223,
		"rarity": 0,
		"name": "アルマエルマ(コラボ)_モードチェンジ後",
		"kana": "",
		"text": "攻撃時に最大HPの1％回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1064,
			"param": [{
				"num": [1]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500224,
		"rarity": 0,
		"name": "たまも(コラボ)",
		"kana": "",
		"text": "射程内の敵の防御力を100％増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 11,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": [{
				"type": 18,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 500225,
		"rarity": 0,
		"name": "たまも(コラボ)_モードチェンジ後",
		"kana": "",
		"text": "射程内の味方に攻撃力100%のダイレクトアタック+スタン10付与",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1101,
			"param": [{
				"num": [100]
			}, {
				"num": [1]
			}, {
				"num": [100562]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 512,
			"param": [{
				"num": [10]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800001,
		"rarity": 0,
		"name": "デカイオー",
		"kana": "",
		"text": "ミサイル攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800002,
		"rarity": 0,
		"name": "巨大スライム",
		"kana": "",
		"text": "雑魚召喚(分身)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [203]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [49],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [800007]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [48],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [9],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800003,
		"rarity": 0,
		"name": "スライム(スレイブ)",
		"kana": "",
		"text": "主人回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [5]
			}, {
				"num": [4]
			}, {
				"num": [30002]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 7,
			"range": 15,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800004,
		"rarity": 0,
		"name": "竜騎士シスイ",
		"kana": "",
		"text": "炎設置",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [302]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [302]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800005,
		"rarity": 0,
		"name": "魔導巡洋艦",
		"kana": "",
		"text": "雑魚召喚(分身)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2700],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4500],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8100],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [9000],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8100],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [402]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [402]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800006,
		"rarity": 0,
		"name": "ライフダメージ99",
		"kana": "",
		"text": "ライフダメージ99",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1034,
			"param": [{
				"num": [-99]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 7,
			"range": 0,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800007,
		"rarity": 0,
		"name": "巨大スライム",
		"kana": "",
		"text": "雑魚召喚(分身)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [45],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [9],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800008,
		"rarity": 0,
		"name": "Gデカイオー",
		"kana": "",
		"text": "剣攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [500]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [503]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [503]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [15],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800009,
		"rarity": 0,
		"name": "デカイオーMAX",
		"kana": "",
		"text": "ミサイル攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [100],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [80],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [79],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [50],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [49],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [49],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800010,
		"rarity": 0,
		"name": "プルラルクルスの根",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [601]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [601]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2700],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3700],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [600]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [4500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800011,
		"rarity": 0,
		"name": "プルラルクルスの根（後半)",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [603]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800012,
		"rarity": 0,
		"name": "プルラルクルスの根（弱体後)",
		"kana": "",
		"text": "雑魚召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [602]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [1500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800013,
		"rarity": 0,
		"name": "ゴールデンキングスライム",
		"kana": "",
		"text": "移動中攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [1500]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [700]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800014,
		"rarity": 0,
		"name": "ゴールデンマターMAX",
		"kana": "",
		"text": "移動中攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1025,
			"param": [{
				"num": [2000]
			}, {
				"num": [3]
			}, {
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 2,
			"triggerData": [{
				"type": 2001,
				"num": [15],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [701]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800015,
		"rarity": 0,
		"name": "巨大スライムLvMAX",
		"kana": "",
		"text": "雑魚召喚(分身)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [59],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [9],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [200]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800016,
		"rarity": 0,
		"name": "巨大スライムLvMAX",
		"kana": "",
		"text": "雑魚召喚(分身)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [205]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [205]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [45],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [205]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [205]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [9],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [6]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [206]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 21,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [49],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [450],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [49],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2001,
				"num": [540],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800017,
		"rarity": 0,
		"name": "スライム(スレイブ)LvMAX",
		"kana": "",
		"text": "主人回復",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1024,
			"param": [{
				"num": [3]
			}, {
				"num": [4]
			}, {
				"num": [30002]
			}, {
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 7,
			"range": 15,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800018,
		"rarity": 0,
		"name": "竜騎士シスイLvMAX",
		"kana": "",
		"text": "炎設置",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [302]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [302]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800019,
		"rarity": 0,
		"name": "ニードルフライLv1-3",
		"kana": "",
		"text": "設置物召喚①",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [800]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2550],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4350],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6150],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7950],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [9750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800020,
		"rarity": 0,
		"name": "ニードルフライLvMAX",
		"kana": "",
		"text": "設置物召喚①",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [800]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [800]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1650],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2550],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3450],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4350],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5250],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6150],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7050],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7950],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8850],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [9750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [10650],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800021,
		"rarity": 0,
		"name": "ニードルフライLv4-5",
		"kana": "",
		"text": "設置物召喚①",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [800]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [800]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2550],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4350],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6150],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [802]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7950],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [801]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [9750],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800022,
		"rarity": 0,
		"name": "ビッグマミー",
		"kana": "",
		"text": "被遠距離ダメージ減少",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1010,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 3,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 3,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 49,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1102,
			"param": [{
				"num": [1]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [480],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [780],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1080],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1140],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1680],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2160],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2280],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2660],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2880],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3150],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3480],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3900],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4080],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4680],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4950],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5280],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5550],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5880],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5970],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6480],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6570],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [902]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7080],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7260],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [904]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [903]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8190],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800023,
		"rarity": 0,
		"name": "魔導巡洋艦",
		"kana": "",
		"text": "強化ドローン召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2700],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6300],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [4]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8100],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [401]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [9000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8100],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [402]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [400]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [402]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800024,
		"rarity": 0,
		"name": "古代戦艦（LvMAX)",
		"kana": "",
		"text": "魔導戦車召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [450],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [25],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4720],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800025,
		"rarity": 0,
		"name": "デカイオー無限1-9",
		"kana": "",
		"text": "斧攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [800],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [17]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1400],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [18]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3500],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800026,
		"rarity": 0,
		"name": "古代戦艦（Lv1～3)",
		"kana": "",
		"text": "火炎放射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [450],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [35],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4720],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800027,
		"rarity": 0,
		"name": "古代戦艦（Lv4～5)",
		"kana": "",
		"text": "魔導戦車召喚",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [450],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2600],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3800],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7200],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [8]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1100]
			}, {
				"num": [7]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8000],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8400],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4720],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5660],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5800],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [10]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6000],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [9]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6100],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [11]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800028,
		"rarity": 0,
		"name": "デカイオー無限10-",
		"kana": "",
		"text": "ミサイル攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [100],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [80],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [79],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [50],
				"option": [">="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [49],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [49],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [12]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [800],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [17]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [18]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2000],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1056,
			"param": [{
				"num": [15]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3500],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800029,
		"rarity": 0,
		"name": "プシュキニア",
		"kana": "",
		"text": "非ブロック中は魔法防御力増加",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 16,
			"param": [{
				"num": [1000]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 1,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [3],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [750],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1650],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [2550],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [3450],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [4350],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [5250],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [6150],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7050],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [2]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [7950],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1201]
			}, {
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [8850],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800030,
		"rarity": 0,
		"name": "氷柱演出用",
		"kana": "",
		"text": "氷柱発射",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1203]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1010,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": [{
				"type": 1008,
				"num": [50021],
				"option": ["!"],
				"target": 1,
				"targetNum": []
			}]
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800031,
		"rarity": 0,
		"name": "デカイオーM",
		"kana": "",
		"text": "斧攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1304]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1302]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [7],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800032,
		"rarity": 0,
		"name": "無限スライム（右）",
		"kana": "",
		"text": "雑魚召喚(角)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [104]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [106]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [105]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [15],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [209]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800033,
		"rarity": 0,
		"name": "無限スライム（左）",
		"kana": "",
		"text": "雑魚召喚(角)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [202]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [204]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [203]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [202]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [204]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [206]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [200]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [205]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [201]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [15],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [209]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800034,
		"rarity": 0,
		"name": "無限スライム（中）",
		"kana": "",
		"text": "雑魚召喚(角)",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [90],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [204]
			}, {
				"num": [302]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [304]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [75],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [304]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [306]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [300]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [305]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [208]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [15],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [209]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 21,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800035,
		"rarity": 0,
		"name": "無限スライム（中強化）",
		"kana": "",
		"text": "雑魚移動速度アップ",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 21,
			"param": [{
				"num": [150]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 6,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 6,
			"param": [{
				"num": [50]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800036,
		"rarity": 0,
		"name": "デカイオーM　LV1",
		"kana": "",
		"text": "斧攻撃",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1304]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2003,
				"num": [5],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1061,
			"param": [{
				"num": [7]
			}, {
				"num": [12]
			}, {
				"num": [10000]
			}, {
				"num": [5]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1301]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1303]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [7],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800037,
		"rarity": 0,
		"name": "演出ボス用",
		"kana": "",
		"text": "仮無敵演出",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800038,
		"rarity": 0,
		"name": "演出ボス用",
		"kana": "",
		"text": "仮無敵演出",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1079,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 504,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1006,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [29500],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800039,
		"rarity": 0,
		"name": "合体ブラックドラゴン",
		"kana": "",
		"text": "攻撃時味方の攻撃防御ダウン",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 7,
			"param": [{
				"num": [10]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 12,
			"param": [{
				"num": [10]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}, {
			"talentId": 17,
			"param": [{
				"num": [10]
			}, {
				"num": [60]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 2,
			"range": 4,
			"triggerData": [],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800040,
		"rarity": 0,
		"name": "マイサンテ",
		"kana": "",
		"text": "雑魚召喚しんぐん",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1069,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [600],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [100]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1108,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1201],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1400]
			}, {
				"num": [110]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [90],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [120]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [80],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1400]
			}, {
				"num": [111]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [70],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1400]
			}, {
				"num": [112]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [50],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [121]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [40],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1400]
			}, {
				"num": [113]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [30],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1400]
			}, {
				"num": [114]
			}],
			"maxParam": [{
				"num": [0]
			}, {
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [10],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1401]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1401]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [20],
				"option": ["<="],
				"target": 1,
				"targetNum": []
			}, {
				"type": 40002,
				"num": [1],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 63,
			"param": [{
				"num": [3]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 25,
				"num": [0],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}, {
		"id": 800041,
		"rarity": 0,
		"name": "アドラメレク",
		"kana": "",
		"text": "アドラメレクシャドウフレア",
		"restrictionForClass": 0,
		"restrictionForTribe": 0,
		"restrictionForElement": 0,
		"restrictionForFamily": 0,
		"talentList": [{
			"talentId": 1072,
			"param": [{
				"num": [1500]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [300],
				"option": ["%"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1501]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [900],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [101]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [560],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1060],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [111]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": [">"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1502]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [102]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [500],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [103]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [860],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [111]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1020],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1069,
			"param": [{
				"num": [112]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1200],
				"option": [""],
				"target": 1,
				"targetNum": []
			}, {
				"type": 2000,
				"num": [60],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1072,
			"param": [{
				"num": [1502]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2000,
				"num": [15],
				"option": ["<"],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}, {
			"talentId": 1108,
			"param": [{
				"num": [0]
			}],
			"maxParam": [{
				"num": [0]
			}],
			"timing": 1,
			"range": 1,
			"triggerData": [{
				"type": 2001,
				"num": [1201],
				"option": [""],
				"target": 1,
				"targetNum": []
			}],
			"activeData": []
		}],
		"recipeId": 0,
		"skipend": 0
	}]
}