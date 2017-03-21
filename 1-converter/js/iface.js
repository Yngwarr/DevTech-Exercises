/* iface.js */

this.setBase = function(base) {
	var base_elem = document.getElementById('base')
	base_elem.innerHTML = base
}

this.disableNumkeys = function(base) {
	var keys = document.getElementsByClassName('numkey')
	for (var i = 0; i < keys.length; ++i) {
		var num = Converter.digit(keys[i].innerHTML)
		if (num < base) keys[i].classList.remove('disabled')
		else keys[i].classList.add('disabled')
	}
}
