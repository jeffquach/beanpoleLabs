window.onload = function(){
	var links = document.getElementById("links");
	var title = document.getElementById("title");
	var infoDiv = document.getElementById('info');
	var arrows = document.getElementsByClassName('arrow-div');
	var icon = document.getElementsByClassName('slider');
	var gamePanels = document.getElementById('info').children;
	var gamePanelIndex = 0;
	var leftArrow = document.getElementById('arrow-img-left');
	var rightArrow = document.getElementById('arrow-img-right');
	var currentLinkIndex, currentHTMLNode;
	var gamesInfo = document.getElementById("games-info");
	var aboutInfo = document.getElementById("about-info");
	var contactInfo = document.getElementById("contact-info");

	document.getElementById("games").addEventListener("click", games);
	document.getElementById("about").addEventListener("click", about);
	document.getElementById("contact").addEventListener("click", contact);
	document.getElementById("arrow-img-left").addEventListener("click", left_arrow);
	document.getElementById("arrow-img-right").addEventListener("click", right_arrow);
	links.style.width = title.offsetWidth + "px";

	function games(){
		onElementClick(gamesInfo);
	}

	function about(){
		onElementClick(aboutInfo);
	}

	function contact(){
		onElementClick(contactInfo);
	}

	function onElementClick(node){
		if(node.className === "container-10 hidden"){
			if(currentHTMLNode) currentHTMLNode.className = "container-10 hidden";
			node.className = "container-10";
			currentHTMLNode = node
		}else{
			node.className = "container-10 hidden";
		}
	}

	function left_arrow(){
		gamePanels[gamePanelIndex].className = "hidden";
		if(gamePanelIndex === 0){
			gamePanelIndex = 1;
		}else{
			gamePanelIndex--;
		}
		gamePanels[gamePanelIndex].className = "slider-panel fadeIn";
	}

	function right_arrow(){
		gamePanels[gamePanelIndex].className = "hidden";
		if(gamePanelIndex === 1){
			gamePanelIndex = 0;
		}else{
			gamePanelIndex++;
		}
		gamePanels[gamePanelIndex].className = "slider-panel fadeIn";
	}

	function toggleArrows(state){
		for(var i = 0; i < arrows.length; i++){
			arrows[i].className = "float-left arrow-div fadeIn";
		}
	}

	function toggleIcon(state){
		for(var i = 0; i < icon.length; i++){
			icon[i].style.visibility = state ? "visible" : "hidden";
		}
	}
}