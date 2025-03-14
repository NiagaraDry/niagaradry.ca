function openNav() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
 
function closeNav() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) {
	/* Modified version for thumbnail support once it's ready */
	var url = element.src.replace("/min/" , "/full/");
	document.getElementById("img01").src = url;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;

	/* Original code below
	var url = document.getElementById("img01").src;
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt; */
}