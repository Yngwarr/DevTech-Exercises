/* iface.js */
function init()
{
	var keys = document.getElementsByClassName('key');
	for (var i = 0; i < keys.length; ++i) {
		keys[i].addEventListener('click', keyHit);
	}
}

function keyHit(e)
{
	var cmd = '';
	if (e.type === 'click') {
		cmd = e.srcElement.innerHTML;
	} else if (e.type === 'keypress') {
		cmd = String.fromCharCode(e.charCode || e.keyCode);
	} else if (e.type === 'keydown') {
		switch (e.keyCode) {
		case 8: // BS
			cmd = 'BS';
		break;
		case 46: // del
			cmd = 'CE';
		break;
		}
	}

	if (cmd !== '') {
		Controller.issueCmd(cmd);
		updateView();
	}
}

function updateView()
{
	var mem = document.getElementById('mem'),
		op = document.getElementById('op'),
		number = document.getElementById('number');
	number.innerHTML = Editor.number();
	if (Memory.on) {
		if (mem.classList.contains('hidden')) {
			mem.classList.remove('hidden');
		}
	} else if (!mem.classList.contains('hidden')) {
		mem.classList.add('hidden');
	}
	op.innerHTML = Processor.op;
}
