/* iface.js */

/**
 * Enable and disable number keys depending on given base. Keys with number <=
 * base will be disabled.
 *
 * @param {number} base - Base of the current number.
 */
this.disableNumkeys = function(base) {
	var keys = document.getElementsByClassName('numkey');
	for (var i = 0; i < keys.length; ++i) {
		var num = Converter.digit(keys[i].innerHTML);
		if (num < base) {
			keys[i].classList.remove('disabled');
		} else {
			keys[i].classList.add('disabled');
		}
	}
}

/**
 * Handle command that comes from web-interface.
 *
 * @param {string} cmd - Command to be executed. Can be hexadecimal digit, BS,
 *        CE, '-' or '.'.
 */
this.keyCmd = function(cmd) {
	// digits
	if (Converter.digit(cmd) >= 0) {
		Editor.addDigit(cmd);
	} else if (cmd === 'BS') {
		Editor.backspace();
	} else if (cmd === 'CE') {
		Editor.clear();
	} else if (cmd === '-') {
		Editor.toggleSign();
	}
	// TODO delimiter
}

/**
 * Get current number from Editor. Use this method instead of getting
 * Editor.number directly.
 *
 * @return {string} - Current number string.
 */
this.getNumber = function() {
	return Editor.getNumber();
}

/**
 * Get current base string from editor. Use this method instead of getting
 * Editor.base directly.
 *
 * @return {string} - Current base string.
 */
this.getBase = function() {
	return Editor.base.toString();
}

/**
 * Set Editor's base.
 *
 * @param {number} base - New value of Editor.base.
 */
this.setBase = function(base) {
	Editor.base = base;
}

/**
 * Updates number view on the screen (both number and base) according to 
 * Editor's properties.
 */
this.updateNumber = function() {
	var num = document.getElementById('number'),
		base = document.getElementById('base'),
		minus = document.getElementById('sign');
	num.innerHTML = this.getNumber();
	base.innerHTML = this.getBase();
	sign.innerHTML = Editor.isNegative() ? '-' : '';
}

/**
 * Start conversion.
 *
 * @param {number} base - Base to convert to.
 */
this.convert = function(base) {
	var num = this.getNumber(),
		from = this.getBase(),
		to = base,
		sign = Editor.isNegative() ? '-' : '',
		res = sign + Converter.convert(num, from, to);
	Editor.setNumber(res);
	History.add(num, from, res, to);
	//console.log(Editor.nuber);
}
