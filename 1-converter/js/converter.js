/* converter.js */

/**
 * Converts given number to decimal.
 * 
 * @param {string} num - Number.
 * @param {number} base - Base of num (from 2 to 16).
 * @param {number} accuracy - Number of digits after delimiter.
 * @return {number} Given number in decimal format
 */
this.toDec = function(num, base, accuracy) {
	var parts = num.split('.');
	if (parts.length > 1 && parts[1] !== '') {
		return Number.parseInt(parts[0], base)
			+ Number.parseInt(parts[1].substr(0,accuracy), base)
			/ Math.pow(base, parts[1].length);
	}
	return Number.parseInt(parts[0], base);
}

/**
 * Converts number from decimal to given base.
 *
 * @param {number} num - Number in decimal format.
 * @param {number} base - Base of the system to convert to.
 * @return {string} Given number in given system.
 */
this.fromDec = function(num, base) {
	return num.toString(base).toUpperCase();
}

/**
 * Converts number from one system to another.
 *
 * @param {string} num - A number to convert.
 * @param {number} from - A base of the system to convert from.
 * @param {number} to - A base of the system to convert to.
 * @param {number} accuracy - Number of digits after delimiter.
 * @return {string} Given number in from-based system.
 */
this.convert = function(num, from, to, accuracy) {
	return this.fromDec(this.toDec(num, from, accuracy), to);
}

/**
 * Converts a single digit to number.
 *
 * @param {char} dig - Single char hexadecimal digit (case-insensitive).
 * @return {number} A number denoted by given hexadecimal digit.
 */
this.digit = function(dig) {
	/* digit must be a single char */
	if (dig.length != 1) return -1;

	var code = dig.toUpperCase().charCodeAt();
	if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) {
		return code - '0'.charCodeAt();
	}
	if (code >= 'A'.charCodeAt() && code <= 'F'.charCodeAt()) {
		return code - 'A'.charCodeAt() + 10;
	}
	return -1;
}
