/* about.js */

this.header = function() {
	return [" .-                .       ",
			"(  .-..-.. ..-,.-.-|-.-,.-.",
			" `-`-'' ' ` `'-'   '-`'-'  "]
		//.join('<br />');
		.join('\n');
}

this.programName = /*ru*/'Конвертер'/*ur*/;
this.author = /*ru*/'Кислицын Игорь, ПМИ-41'/*ur*/;

this.print = function() {
	return ['<pre id="about-header">' + this.header() + '</pre>',
			'<p>' + this.programName + '</p>',
			/*ru*/'<p>Автор: '/*ur*/ + this.author + '</p><br />',
			/*ru*/'<p>Для ввода числа используйте экранную или физическую клавиатуру.</p>',/*ur*/
			/*ru*/'<p>Для конвертации измените основание системы счисления с помощью ползунка.</p>'/*ur*/].join('');
}
