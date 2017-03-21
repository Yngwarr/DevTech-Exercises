/* editor.js */

this.number = ''
this.base = 10

// TODO do something with floats
this.isZero = function() {
	if (this.number.length == 0) return true
	return false
}

this.addDigit = function(dig) {
	// no leading zeros in my number!
	if (this.isZero() && dig == '0') return
	var num = Converter.digit(dig)
	if (num != -1 && num < this.base)
		number += dig
}

this.backspace = function() {
	if (this.isZero()) return
	this.number = this.number.substr(0, this.number.length)
}

this.clear = function() {
	this.number = ''
}
