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

	document.getElementById("games").addEventListener("click", games);
	document.getElementById("about").addEventListener("click", about);
	document.getElementById("contact").addEventListener("click", contact);
	document.getElementById("arrow-img-left").addEventListener("click", left_arrow);
	document.getElementById("arrow-img-right").addEventListener("click", right_arrow);
	links.style.width = title.offsetWidth + "px";

	function games(){
		console.log(gamesInfo.className === "container-10 hidden");
		if(gamesInfo.className === "container-10 hidden"){
			gamesInfo.className = "container-10";
		}else{
			gamesInfo.className = "container-10 hidden";
		}
		// gamesInfo.className = "container-10 fadeIn";
		// toggleArrows(true);
		// toggleIcon(true);
		// gamePanels[gamePanelIndex].className = "slider-panel fadeIn";
	}

	function about(){
		if(aboutInfo.className === "container-10 hidden"){
			aboutInfo.className = "container-10";
		}else{
			aboutInfo.className = "container-10 hidden";
		}	
		//info(1, "Beanpole Labs is the brain child of Jeffrey Quach.  If you like puzzle games check out Buckets: A Puzzle Journey and Block Farm!");
	}

	function contact(){
		info(2, 'For any inquiries please contact: <a href="mailto:beanpolelabs@gmail.com" class="email">beanpolelabs@gmail.com</a>');
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

	function info(index, msg){
		if(currentLinkIndex != index){
			if(currentHTMLNode) infoDiv.removeChild(currentHTMLNode);
			var pTag = document.createElement('p');
			pTag.innerHTML = msg;
			infoDiv.appendChild(pTag);
			currentLinkIndex = index;
			currentHTMLNode = pTag;
		}
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