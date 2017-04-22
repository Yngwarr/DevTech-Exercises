/* memory.js */
this.number = new Fraction('0');
this.on = false;

this.save = function(frac)
{
	this.number = frac.copy();
	this.on = true;
}

this.restore = function()
{
	return this.number.copy();
}

this.add = function(frac)
{
	this.number.add(frac);
	this.on = true;
}

this.clear = function()
{
	this.number = '0';
	this.on = false;
}
