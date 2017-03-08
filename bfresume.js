skills = [80, 70, 50, 50, 90];
skillNum = 5;

window.onload = function() {
	function setNamePlate(x){
		x += "px";
		document.getElementById("mainBox").style.marginTop = x;
	}
	function moveNPtoNavB() {
		var tall = document.getElementById("myNavBar").clientHeight;
		setNamePlate(tall);
	}
	moveNPtoNavB();
	function sideBarHeight(SBheight){
		SBheight += "px";
		document.getElementById("sidebar").style.height = SBheight;
	}
	function resizeSideBar() {
		var Mheight = document.getElementById("mainBox").clientHeight;
		sideBarHeight(Mheight);
	}
	resizeSideBar();	
	
	function arrayToBar(skills){
		for (var z = 0;z < skillNum; z++){
			barName = "thisBar" + (z+1);
			moveBar(barName, skills[z]);
		}
	}
	arrayToBar(skills);
	function moveBar(name,percent){
		var elem = document.getElementById(name); 
		var width = 1;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= percent) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
			}
		}
	}
};













//borrowed from w3schools.com
// When the user clicks on div, open the popup
function myFunction() {
	console.log("YO!");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
