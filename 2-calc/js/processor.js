/* processor.js */
// operands
this.nums = [];
// operation
this.op = '';
this.unary = ['sqr', 'rev'];
this.binary = ['add', 'sub', 'mul', 'div'];

this.reset = function()
{
	this.nums = [];
	this.op = '';
}

this.isEmpty = function()
{
	return this.nums.length === 0;
}

this.addNumber = function(num)
{
	this.nums.push(num.copy());
}

this.setOperation = function(op)
{
	this.op = op;
}

this.isOpUnary = function()
{
	return this.unary.indexOf(this.op) >= 0;
}

this.eval = function()
{
	if (this.unary.indexOf(this.op) >= 0) {
		this.nums[0][this.op]();
	} else if (this.binary.indexOf(this.op) >= 0) {
		this.nums[0][this.op](this.nums[1]);
	} else {
		this.nums[0].reduce();
	}
	this.nums = [this.nums[0]];
	this.op = '';
	return this.nums[0].copy();
}
