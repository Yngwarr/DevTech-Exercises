/* editor.js */

/** Current number. '' means it is zero.*/
this.number = '';
/** Base of current number. */
this.base = 10;
this.minus = false;
this.delimiter = -1;

/**
 * Get number.
 *
 * @return {string} Number.
 */
this.getNumber = function() {
	if (this.isZero()) return '0' + (this.delimiter > -1 ? '.' : '');
	if (this.delimiter != -1) {
		var ipart = this.number.substr(0, this.delimiter);
		return (ipart.length == 0 ? '0' : ipart)
			+ '.' + this.number.substr(this.delimiter, 20);
	}
	return this.number;
}

/**
 * Set number.
 *
 * @param {number} num - number.
 */
this.setNumber = function(num) {
	var parts = num.split('.');
	if (parts[0][0] == '-') {
		this.minus = true;
		parts[0] = parts[0].substr(1);
	} else {
		this.minus = false;
	}
	if (parts[0] === '0') {
		parts[0] = '';
	}
	this.number = parts.join('');
	this.delimiter = parts[0].length;
}

/**
 * Check if current number is zero.
 */
this.isZero = function() {
	if (this.number.length == 0) return true;
	return false;
}

/**
 * Check if current number is negative.
 *
 * @return {bool} True, if the number is negative.
 */
this.isNegative = function() {
	if (this.isZero()) this.minus = false;
	return this.minus;
}

/**
 * Add digit to current number.
 *
 * @param {string} dig - single char hexadecimal digit.
 */
this.addDigit = function(dig) {
	// no leading zeros in my number!
	if (this.isZero() && dig == '0') return;
	var num = Converter.digit(dig);
	if (num != -1 && num < this.base)
		this.number += dig;
}

/**
 * Toggles the sign of the number.
 */
this.toggleSign = function() {
	if (this.isZero()) return;
	this.minus = this.minus ? false : true;
}

/**
 * Remove the last digit of current number.
 */
this.backspace = function() {
	if (this.delimiter == this.number.length) {
		this.delimiter = -1;
		return;
	}
	if (this.isZero()) return;
	this.number = this.number.substr(0, this.number.length - 1);
}

/**
 * Clear the current number.
 */
this.clear = function() {
	this.number = '';
	this.minus = false;
	this.delimiter = -1;
}

/**
 * Places delimiter at the end of the number.
 */
this.placeDelimiter = function() {
	if (this.delimiter != -1) return;
	this.delimiter = this.number.length;
}
