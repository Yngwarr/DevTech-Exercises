'use strict';

function gcd(_a, _b)
{
	var a = Math.abs(_a),
		b = Math.abs(_b);
	while (a && b) { a > b ? a %= b : b %= a; }
	return a + b;
}
function lcm(_a, _b)
{
	var a = Math.abs(_a),
		b = Math.abs(_b),
		c = a;
	while (a && b) { a > b ? a %= b : b %= a; }
	return Math.abs(c * _b)/(a + b);
}

class Fraction
{
	constructor(str)
	{
		this.number = str;
		//this.num = numerator;
		//this.denom = denomenator;
	}
	get number()
	{
		if (this.denom === 1) {
			return this.num.toString();
		}
		if (this.num === 0) {
			return '0';
		}
		return `${this.num}|${this.denom}`;
	}
	set number(str)
	{
		if (str === '') {
			this.num = 0;
			this.denom = 1;
			return;
		}
		// '|12' is not valid too. That's why < 1 instead of < 0
		if (str.indexOf('|') < 1) {
			this.num = parseInt(str);
			if (!this.num) {
				//console.log(`set number(${str}): can't parse numerator`);
				this.num = 0;
			}
			this.denom = 1;
			return;
		}
		[this.num, this.denom] = str.split('|').map((x) => {
			return parseInt(x);
		});
		if (!this.denom) {
			if (this.denom === 0) {
				console.log('dividing by zero, huh?');
			}
			this.denom = 1;
		} else if (this.denom < 0) {
			this.num = -this.num;
			this.denom = -this.denom;
		}
	}
	isNegative()
	{
		return this.num < 0;
	}
	copy()
	{
		return new Fraction(this.number);
	}
	reduce()
	{
		var d = gcd(this.num, this.denom);
		if (d > 1) {
			this.num /= d;
			this.denom /= d;
		}
		return this;
	}
	add(other)
	{
		var denom = lcm(this.denom, other.denom);
		this.num = this.num * (denom / this.denom)
			+ other.num * (denom / other.denom);
		this.denom = denom;
		return this;
	}
	sub(other)
	{
		return this.add(other.copy().minus());
	}
	mul(other)
	{
		this.num *= other.num;
		this.denom *= other.denom;
		return this.reduce();
	}
	div(other)
	{
		return this.mul(other.copy().rev());
	}
	sqr()
	{
		return this.mul(this);
	}
	rev()
	{
		[this.num, this.denom] = [this.denom, this.num];
		return this;
	}
	minus()
	{
		this.num = -this.num;
		return this;
	}
	cmp(other)
	{
		var c = this.copy().sub(other);
		return c.num;
	}
}
