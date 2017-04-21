input metauml;
beginfig(1)
	Class.C("Converter")()
		("+toDec(num:string, base:number, accuracy:number):number",
		 "+fromDec(num:number, base:number):string",
		 "+convert(num:string, from:number, to:number, accuracy:number):string",
		 "+digit(dig:char):number");

	Class.E("Editor")
		("#number:string",
		 "#base:number",
		 "#minus:bool",
		 "#delimiter:number")
		("+getNumber():string",
		 "+setNumber(num:string)",
		 "+isZero():bool",
		 "+isNegative():bool",
		 "+addDigit(dig:char)",
		 "+toggleSign()",
		 "+backspace()",
		 "+clear()",
		 "+placeDelimiter()");

	Class.H("History")
		("#rs:Object[]")
		("+add(src_num:string, src_base:number, dst_num:string, dst_base:number)",
		 "+print():string",
		 "+printText():string",
		 "+clear()");

	Class.I("IFace")()
		("+disableNumkeys(base:number)",
		 "+keyCmd(cmd:string)",
		 "+getNumber():string",
		 "+getBase():string",
		 "+setBase(base:number)",
		 "+updateNumber()",
		 "+convert(base:number)");

	Class.R("Runtime")
		("-ipc:ipcRenderer")
		("+init()",
		 "#hitKey(e:Event)");

	Class.A("About")
		("#programName:string",
		 "#author:string")
		("-header():string",
		 "+print():string");

	E.e = C.w + (-20, 0);
	R.n = E.s + (0, -20);
	I.n = C.s + (0, -20);
	H.n = R.s + (100, -20);
	A.w = H.e + (20, 0);

	drawObjects(C,E,H,I,R,A);

	link(associationUni)(E.e -- C.w);
	link(associationUni)(R.n -- E.s);
	link(associationUni)(R.e -- I.w);
	link(associationUni)(I.n -- C.s);
	link(associationUni)((I.nw + (0, -20)) -- (E.se + (0, 20)));
	link(associationUni)((R.s) -- (H.n + (-100, 0)));
	link(associationUni)((I.s) -- (H.n + (100, 0)));
endfig;
end
