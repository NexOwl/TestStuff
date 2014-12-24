var curContent = 0;
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	mclose();

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.display = 'block';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.display = 'none';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

function clickMe(code) {
	hide();
	curContent = document.getElementById(code);
	curContent.style.display="block";
}

function hide() {
	//hide everythingggg!
	if (curContent) {
		curContent.style.display="none";
	}
}

function start() {
	
}

window.onload = start;