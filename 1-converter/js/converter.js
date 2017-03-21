/* converter.js */

// TODO add floating point support
this.toDec = function(num, base) {
	return Number.parseInt(num, base)
}

this.fromDec = function(num, base) {
	return num.toString(base).toUpperCase()
}

this.convert = function(num, from, to) {
	if (from == 10) return this.fromDec(num, to)
	if (to == 10) return this.toDec(num, from)
	return this.fromDec(this.toDec(num, from), to)
}

/* converts digit to int */
this.digit = function(dig) {
	if (dig.length != 1) return -1
	var code = dig.charCodeAt()
	if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt())
		return code - '0'.charCodeAt()
	if (code >= 'A'.charCodeAt() && code <= 'F'.charCodeAt())
		return code - 'A'.charCodeAt() + 10
	return -1
}
