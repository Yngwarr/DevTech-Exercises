/* editor.js */
this.frac = new Fraction('0');
this.num = '';
this.denom = '';
this.editDenom = false;

this.clear = function()
{
	this.frac.number = '0';
	this.num = '';
	this.denom = '';
	this.editDenom = false;
}

this.isZero = function()
{
	return frac.cmp(new Fraction('0')) == 0;
}

this.number = function()
{
	if (this.editDenom) {
		return `${this.num}|${this.denom}`;
	} else {
		if (this.num === '') {
			return '0';
		}
		return `${this.num}`;
	}
}

this.setNumber = function(frac)
{
	this.frac = frac.copy();
	this.num = this.frac.num.toString();
	this.denom = this.frac.denom.toString();
}

this.toggleSign = function()
{
	this.frac.minus();
	if (this.frac.isNegative()) {
		this.num = '-' + this.num;
	} else {
		this.num = this.num.replace('-', '');
	}
}

this.addChar = function(c)
{
	if (c === '|') {
		if (this.num === '') {
			this.num = '1';
		}
		this.editDenom = true;
	} else if (this.editDenom) {
		this.frac.number = `${this.num}|${this.denom + c}`;
		this.denom = `${this.frac.denom}`;
	} else {
		this.frac.number += c;
		this.num = `${this.frac.num}`;
	}
}

this.backspace = function()
{
	if (this.editDenom) {
		if (this.denom === '') {
			this.editDenom = false;
		} else {
			this.denom = this.denom.substr(0, this.denom.length - 1);
			this.frac.number = `${this.num}|${this.denom}`
		}
	} else {
		this.num = this.num.substr(0, this.num.length - 1);
		this.frac.number = this.num;
	}
}

this.pullFrac = function()
{
	var c = this.frac.copy();
	this.frac.number = '0';
	return c;
}
