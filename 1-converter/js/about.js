/* about.js */

this.header = function() {
	return [" .-                .       ",
			"(  .-..-.. ..-,.-.-|-.-,.-.",
			" `-`-'' ' ` `'-'   '-`'-'  "]
		//.join('<br />');
		.join('\n');
}

this.programName = 'Конвертер';
this.author = 'Кислицын Игорь, ПМИ-41';
this.year = '2017';

this.print = function() {
	return ['<pre id="about-header">' + this.header() + '</pre>',
			'<p>' + this.programName + '</p>',
			'<p>Автор: ' + this.author + '</p>'].join('');
}
