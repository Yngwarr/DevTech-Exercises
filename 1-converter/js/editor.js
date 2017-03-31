/* editor.js */

/** Current number. '' means it is zero.*/
this.number = '';
/** Base of current number. */
this.base = 10;
this.minus = false;

/**
 * Get number.
 *
 * @return {string} Number.
 */
this.getNumber = function() {
	if (this.isZero()) return '0';
	return this.number;
}

/**
 * Set number.
 *
 * @param {number} num - number.
 */
this.setNumber = function(num) {
	if (num === '0' || num === '-0') {
		this.minus = false;
		this.number = '';
	} else if (num[0] === '-') {
		this.minus = true;
		this.number = num.substr(1, num.length);
	} else {
		this.minus = false;
		this.number = num;
	}
}

/**
 * Check if current number is zero.
 */
// TODO do something with floats
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

this.toggleSign = function() {
	if (this.isZero()) return;
	this.minus = this.minus ? false : true;
}

/**
 * Remove the last digit of current number.
 */
this.backspace = function() {
	if (this.isZero()) return;
	this.number = this.number.substr(0, this.number.length - 1);
}

/**
 * Clear the current number.
 */
this.clear = function() {
	this.number = '';
}
