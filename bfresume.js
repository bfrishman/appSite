skills = [80, 70, 50, 50, 90];
skillNum = 5;

window.onload = function() {
			$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
			$("#place").load("default.html");	
			$(document).ready(function(){
			
				$("#skills").click(function(){
					$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
					$("#place").load("skills.html");
				});
				$("#education").click(function(){
					$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
					$("#place").load("education.html");
				});
				$("#experience").click(function(){
					$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
					$("#place").load("experience.html");
				});
				$("#about").click(function(){
					$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
					$("#place").load("about.html");
				});		
				$("#school").click(function(){
					$('head').append('<link rel="stylesheet" href="bfresume.css" type="text/css" />');
					$("#place").load("school.html");
				});					
			});	
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
};