var curShowing = 0;

function clickMe(code) {
	hide();
	show(code);
	curShowing = code;
}

function show(code) {
	var e = document.getElementById(code);
	e.style.display="block";
}

function hide() {
	//hide everythingggg!
	if (curShowing) {
		var e = document.getElementById(curShowing);
		e.style.display="none";
	}
}

function start() {
	var ans = "";
	var display = document.createTextNode(ans);
	document.body.appendChild(display);
}

window.onload = start;