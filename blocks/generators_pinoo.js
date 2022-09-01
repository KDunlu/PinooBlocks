

  Blockly.JavaScript['pir'] = function(block) {
	var dropdown_kapi = block.getFieldValue('Kapi');
	var value_pirsensor = Blockly.JavaScript.valueToCode(block, 'pirsensor', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `(digitalRead(`+dropdown_kapi+`))`;
	return [code, Blockly.JavaScript.ORDER_NONE];
	
  };

  Blockly.JavaScript['potansiyometre'] = function(block) {
	var dropdown_kapi = block.getFieldValue('kapi');
	var value_potansiyometresensor = Blockly.JavaScript.valueToCode(block, 'potansiyometresensor', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `(analogRead(`+dropdown_kapi+`))`;
	return [code, Blockly.JavaScript.ORDER_NONE];
	
  };

  Blockly.JavaScript['egim_ve_darbe'] = function(block) {
	var dropdown_kapi = block.getFieldValue('kapi');
	var value_egimsensor = Blockly.JavaScript.valueToCode(block, 'egimsensor', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `(digitalRead(`+dropdown_kapi+`))`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  

  Blockly.JavaScript['buton'] = function(block) {
	var dropdown_kapi = block.getFieldValue('kapi');
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `(digitalRead(`+dropdown_kapi+`))`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
  
  };

  Blockly.JavaScript['role'] = function(block) {
	var dropdown_kapi = block.getFieldValue('kapi');
	var dropdown_durum = block.getFieldValue('durum');
	
	
	var value_rolemodul = Blockly.JavaScript.valueToCode(block, 'rolemodul', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `#SETUP pinMode(`+dropdown_kapi+ `,OUTPUT); ; #END`;
	// TODO: Assemble JavaScript into code variable.
	code += 'digitalWrite('+dropdown_kapi+','+dropdown_durum+');\n';
	return code;
  };

  Blockly.JavaScript['gaz'] = function(block) {
	var dropdown_kapi = block.getFieldValue('kapi');
	var value_gazsensoru = Blockly.JavaScript.valueToCode(block, 'gazsensoru', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `(analogRead(`+dropdown_kapi+`))`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
  };

  
