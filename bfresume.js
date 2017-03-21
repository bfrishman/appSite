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
	function setMainTopMargin(x){
		x += "px";
		document.getElementById("mainBox").style.marginTop = x;
	}
	function moveMaintoNavB() {
		var tall = document.getElementById("myNavBar").clientHeight;
		setMainTopMargin(tall);
	}
	moveMaintoNavB();
	/*function changeHeight() { //fixing the height of the page...
		var windowHeight = $(window).height();
		var tall = document.getElementById("myNavBar").clientHeight;
		console.log(windowHeight - tall);
		document.getElementById("mainBox").style.height = ((windowHeight - tall) + "px");
	}*/
	/*function sideBarHeight(SBheight){
		SBheight += "px";
		document.getElementById("sidebar").style.height = SBheight;
	}
	function resizeSideBar() {
		var Mheight = document.getElementById("mainBox").clientHeight;
		sideBarHeight(Mheight);
	}
	resizeSideBar();	*/
};