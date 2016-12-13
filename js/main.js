window.onload = function(){
	var links = document.getElementById("links");
	var title = document.getElementById("title");
	links.style.width = title.offsetWidth + "px";

	var infoDiv = document.getElementById('info');
	var currentLinkIndex;
	var currentHTMLNode;
	document.getElementById('games').addEventListener("click", games);
	document.getElementById('about').addEventListener("click", about);
	document.getElementById('contact').addEventListener("click", contact);

	function games(){
		console.log("TINGZ");
	}

	function about(){
		info(1, "Beanpole Labs is the brain child of Jeffrey Quach.  If you like puzzle games check out Buckets: A Puzzle Journey and Block Farm!");
	}

	function contact(){
		info(2, 'For any inquiries please contact: <a href="mailto:beanpolelabs@gmail.com" class="email">beanpolelabs@gmail.com</a>');
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
}