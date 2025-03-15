function openNav() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
 
function closeNav() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) {
	// Grab the src URL and use that as a lazy-loading background
	var url = element.src;
	document.getElementById("img01").style.backgroundImage = "url(" + url + ")";

	// Do the rest of the shit
	var urledit = element.src.replace("/min/" , "/full/");
	document.getElementById("img01").src = urledit;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}