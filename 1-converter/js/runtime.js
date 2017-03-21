/* runtime.js */

function init()
{
	var range = document.getElementById('base-range')
	
	IFace.disableNumkeys(Editor.base)

	range.onchange = function(e) {
		var base = e.srcElement.value
		IFace.setBase(base.toString())
		IFace.disableNumkeys(base)
	}
}
