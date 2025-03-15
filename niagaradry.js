function openNav() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
 
function closeNav() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) {
	const modal = document.getElementById("modal01");
	const image = document.getElementById("img01");
	const caption = document.getElementById("caption");

	// Flush previous img
	image.style.backgroundImage = "";
	image.src = "";

	// Set background img for slow loads
	image.style.backgroundImage = "url(" + element.src + ")";
	// I'm also going to do this blatantly hacky bullshit to force the img to load
	image.src = url;

	// Swap out the min folder for the full folder for the modal img
	var urledit = element.src.replace("/min/" , "/full/");
	image.src = urledit;
	caption.innerHTML = element.alt;

	// Show the modal
	modal.style.display = "block";
}