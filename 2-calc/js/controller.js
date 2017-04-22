/* controller.js */
const ops = {
	'^2': 'sqr',
	'1/x': 'rev',
	'+': 'add',
	'-': 'sub',
	'*': 'mul',
	'/': 'div'
}

this.issueCmd = function(cmd)
{
	if (!isNaN(cmd) || cmd === '|') {
		Editor.addChar(cmd);
	} else if (cmd === '+/-') {
		Editor.toggleSign();
	} else if (cmd in ops) {
		console.log(`Controller: performing operation ${ops[cmd]}`);
		if (Processor.isEmpty()) {
			Processor.addNumber(Editor.pullFrac());
		}
		Processor.setOperation(ops[cmd]);
	}
	if (cmd === '=' || Processor.isOpUnary()) {
		console.log(`Controller: evaluating`);
		Processor.addNumber(Editor.pullFrac());
		Processor.eval();
		Editor.setNumber(Processor.nums[0]);
	}
}
