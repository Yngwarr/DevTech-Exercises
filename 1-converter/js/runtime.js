/* runtime.js */

const ipc = require('electron').ipcRenderer;

/**
 * The first function to call when the page is ready.
 */
function init()
{
	IFace.disableNumkeys(Editor.base);

	var range = document.getElementById('base-range')
	range.onchange = function(e) {
		var base = e.srcElement.value;
		IFace.convert(base);
		IFace.setBase(base);
		IFace.disableNumkeys(base);
		IFace.updateNumber();

		document.getElementById('history').innerHTML = History.print();
	}

	ipc.on('set-layout', (e, arg) => {
		var ls = document.getElementsByClassName('layout');
		for (var i = 0; i < ls.length; ++i) {
			if (ls[i].id === arg) {
				if (!ls[i].classList.contains('hidden')) continue;
				ls[i].classList.remove('hidden');
				continue;
			}
			if (ls[i].classList.contains('hidden')) continue;
			ls[i].classList.add('hidden');
		}
	});

	var keys = document.getElementsByClassName('numkey')
	for (var i = 0; i < keys.length; ++i) {
		keys[i].onclick = hitKey;
	}

	document.querySelector('body').onkeypress = hitKey;
	document.querySelector('body').onkeydown = hitKey;
}

/**
 * Event to call when you hit the key.
 *
 * @param {Event} e - event handled by function.
 */
function hitKey(e) {
	var cmd = '';

	if (e.type == 'click') {
		cmd = e.srcElement.innerHTML;
	} else if (e.type == 'keypress') {
		cmd = String.fromCharCode(e.charCode || e.keyCode);
	} else if (e.type == 'keydown') {
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
		IFace.keyCmd(cmd);
		IFace.updateNumber();
	}
}
