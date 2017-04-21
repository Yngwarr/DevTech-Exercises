/* history.js */

/**
 * Records.
 */
this.rs = [];

/**
 * Add a record to history.
 *
 * @param {string} src_num - Source number.
 * @param {number} src_base - Source base.
 * @param {string} dst_num - Destination number.
 * @param {number} dst_base - Destination base.
 */
this.add = function(src_num, src_base, dst_num, dst_base) {
	var r = {
		src: { num: src_num, base: src_base },
		dst: { num: dst_num, base: dst_base }
	};
	this.rs.push(r);
}

/**
 * Print history in HTML format.
 */
this.print = function() {
	return '<table>' + this.rs.map( (x) => {
		return '<tr class="history"><td>' + x.src.num + '<span class="sub">'
			+ x.src.base.toString()
			+ '</span></td><td class="arrow"> &#8594; </td><td>'
			+ x.dst.num + '<span class="sub">'
			+ x.dst.base.toString() + '</span></td></tr>';
	}).join('\n') + '</table>';
}

this.printText = function() {
	return this.rs.map( (x) => {
		return '' + x.src.num + '_' + x.src.base.toString()
			+ ' -> ' + x.dst.num + '_' + x.dst.base.toString();
	}).join('\n');
}

/**
 * Clear the history.
 */
this.clear = function() {
	this.rs = [];
}
