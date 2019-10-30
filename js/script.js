let windowW = window.innerWidth;
let windowX = window.matchMedia("(max-width: 420px)");
let windowH = window.innerHeight;
let toTopButton = document.getElementById("toTopButton");
let navLinks = document.querySelector(".shopLinks");
let icon = document.getElementById("icon");
let header = document.querySelector(".header");

let toyLink = document.getElementById("toysLink");
let foodLink = document.getElementById("foodLink");
let clothesLink = document.getElementById("clotheLink");
let walkLink = document.getElementById("walkLink");
let groomLink = document.getElementById("groomLink");

window.onscroll = function() {
	scroll();
};

function scroll() {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		toTopButton.style.display = "block";
	} else {
		toTopButton.style.display = "none";
	}
}

function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function openMenu() {
	if (header.className === ".header") {
		header.className += " responsive";
	} else {
		header.className = "header";
	}
}

function linksToIcons() {
	if (windowX.matches) {
		toyLink.innerHTML = '<i class="fas fa-bone"></i>';
		foodLink.innerHTML = '<i class="fas fa-utensils"></i>';
		clothesLink.innerHTML = '<i class="fas fa-tshirt"></i>';
		walkLink.innerHTML = '<i class="fas fa-walking"></i>';
		groomLink.innerHTML = '<i class="fas fa-cut"></i>';
	}
}
linksToIcons();
windowX.addListener(linksToIcons);
