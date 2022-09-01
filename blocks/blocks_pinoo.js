

{

	Blockly.Blocks['pir'] = {
		init: function() {
			this.jsonInit({
				"type": "pir",
				"message0": "PIR Sensörü Kapı %1 %2",
				"args0": [
				  {
					"type": "field_dropdown",
					"name": "Kapi",
					"options": [
					  [
						"1",
						"2"
					  ],
					  [
						"2",
						"3"
					  ],
					  [
						"3",
						"4"
					  ],
					  [
						"4",
						"7"
					  ]
					]
				  },
				  {
					"type": "input_value",
					"name": "pirsensor"
				  }
				],
				"output": null,
				"colour": 230,
				"tooltip": "",
				"helpUrl": ""
});
}
};
}  


{
	Blockly.Blocks['potansiyometre'] = {
		init: function() {
			this.jsonInit({
				"type": "potansiyometre",
				"message0": "Potansiyometre Kapı %1 %2",
				"args0": [
				  {
					"type": "field_dropdown",
					"name": "kapi",
					"options": [
					  [
						"7",
						"A0"
					  ],
					  [
						"8",
						"A1"
					  ]
					]
				  },
				  {
					"type": "input_value",
					"name": "potansiyometresensor"
				  }
				],
				"output": null,
				"colour": 230,
				"tooltip": "",
				"helpUrl": ""
});
}
};
} 


{
	Blockly.Blocks['egim_ve_darbe'] = {
		init: function() {
			this.jsonInit({
	"type": "egim_ve_darbe",
	"message0": "Eğim ve Darbe Sensörü Kapı %1 %2",
	"args0": [
	  {
		"type": "field_dropdown",
		"name": "kapi",
		"options": [
		  [
			"1",
			"2"
		  ],
		  [
			"2",
			"3"
		  ],
		  [
			"3",
			"4"
		  ],
		  [
			"4",
			"7"
		  ]
		]
	  },
	  {
		"type": "input_value",
		"name": "egimsensor"
	  }
	],
	"output": null,
	"colour": 230,
	"tooltip": "",
	"helpUrl": ""
});
}
};
} 




 



{

	Blockly.Blocks['buton'] = {
		init: function() {
			this.jsonInit({
				"type": "buton",
				"message0": "Buton Kapı %1 %2",
				"args0": [
				  {
					"type": "field_dropdown",
					"name": "kapi",
					"options": [
					  [
						"1",
						"2"
					  ],
					  [
						"2",
						"3"
					  ],
					  [
						"3",
						"4"
					  ],
					  [
						"4",
						"7"
					  ]
					]
				  },
				  {
					"type": "input_value",
					"name": "NAME"
				  }
				],
				"output": null,
				"colour": 230,
				"tooltip": "",
				"helpUrl": ""
  
});
}
};
} 

{
	Blockly.Blocks['role'] = {
		init: function() {
			this.jsonInit({
	"type": "role",
	"message0": "Röle Kapı %1 Durum %2 %3",
	"args0": [
	  {
		"type": "field_dropdown",
		"name": "kapi",
		"options": [
		  [
			"1",
			"2"
		  ],
		  [
			"2",
			"3"
		  ],
		  [
			"3",
			"4"
		  ],
		  [
			"4",
			"7"
		  ]
		]
	  },
	  {
		"type": "field_dropdown",
		"name": "durum",
		"options": [
		  [
			"Açık",
			"1"
		  ],
		  [
			"Kapalı",
			"0"
		  ]
		]
	  },
	  {
		"type": "input_value",
		"name": "rolemodul"
	  }
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "",
	"helpUrl": ""
});
}
};
} 

{
	Blockly.Blocks['gaz'] = {
		init: function() {
			this.jsonInit({
	"type": "gaz",
	"message0": "Gaz sensörü Kapı %1 %2",
	"args0": [
	  {
		"type": "field_dropdown",
		"name": "kapi",
		"options": [
		  [
			"7",
			"A0"
		  ],
		  [
			"8",
			"A1"
		  ]
		]
	  },
	  {
		"type": "input_value",
		"name": "gazsensoru"
	  }
	],
	"output": null,
	"colour": 230,
	"tooltip": "",
	"helpUrl": ""
});
}
};
} 


