/* history.js */

/**
 * Convertations.
 */
this.cs = [];

/**
 * Add a conversion to history.
 *
 * @param {string} src_num - Source number.
 * @param {number} src_base - Source base.
 * @param {string} dst_num - Destination number.
 * @param {number} dst_base - Destination base.
 */
this.add = function(src_num, src_base, dst_num, dst_base) {
	var c = '<tr class="history"><td>' + src_num + '<span class="sub">' +
		src_base.toString() +
		'</span></td><td class="arrow"> &#8594; </td><td>' +
		dst_num + '<span class="sub">' +
		dst_base.toString() + '</span></td></tr>';
	this.cs.push(c);
}

this.print = function() {
	return '<table>' + this.cs.join('\n') + '</table>';
}
