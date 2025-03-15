function openNav() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
 
function closeNav() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) {
	var url = element.src;
	var urledit = element.src.replace("/min/" , "/full/");
	document.getElementById("img01").style.backgroundImage = ""; // Flush prev img?
	document.getElementById("img01").src = ""; // Flush prev img plz
  	document.getElementById("modal01").style.display = "none"; // Flush prev img plz
	document.getElementById("img01").style.backgroundImage = "url(" + url + ")";
	document.getElementById("img01").src = urledit;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}