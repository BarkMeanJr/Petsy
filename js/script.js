let windowW = window.innerWidth;
let windowH = window.innerHeight;
let windowX = window.matchMedia("(max-width: 420px)");

let icon = document.getElementById("icon");

window.onscroll = function() {
	scroll();
};

function scroll() {
	let toTopButton = document.getElementById("toTopButton");

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
	let header = document.querySelector(".header");

	if (header.className === ".header") {
		header.className += " responsive";
	} else {
		header.className = "header";
	}
}

function linksToIcons(windowX) {
	let navLinks = document.querySelector(".shopLinks");
	let toyLink = document.getElementById("toysLink");
	let foodLink = document.getElementById("foodLink");
	let clothesLink = document.getElementById("clotheLink");
	let walkLink = document.getElementById("walkLink");
	let groomLink = document.getElementById("groomLink");

	if (windowX.matches) {
		toyLink.innerHTML = '<i class="fas fa-bone"></i>';
		foodLink.innerHTML = '<i class="fas fa-utensils"></i>';
		clothesLink.innerHTML = '<i class="fas fa-tshirt"></i>';
		walkLink.innerHTML = '<i class="fas fa-walking"></i>';
		groomLink.innerHTML = '<i class="fas fa-cut"></i>';
	} else {
		navLinks.innerHTML = `
    <a href="" id="toysLink">Toys & Entertainment</a>
    <a href="" id="foodLink">Food & Treats</a>
    <a href="" id="clotheLink">Clothing</a>
    <a href="" id="walkLink">Dog Walking</a>
    <a href="" id="groomLink">Dog Grooming</a>`;
	}
}
windowX.addListener(linksToIcons);
linksToIcons(windowX);

function swapWeenie() {
	let weenies = document.querySelectorAll(".weenie > img");
	let weenieTarget = document.querySelector(".weenie-selected > img");

	let toyPics = [
		"Assets/Images/pet-toy-1.jpg",
		"Assets/Images/pet-toy-2.jpg",
		"Assets/Images/pet-toy-3.jpg",
		"Assets/Images/pet-toy-4.jpg",
		"Assets/Images/pet-toy-5.jpg",
		"Assets/Images/pet-toy-6.jpg"
	];

	weenieTarget.src = toyPics[0];

	weenies.forEach(e => {
		e.addEventListener("click", function() {
      weenieTarget.src = event.target.src;
		});
  });
  

}

swapWeenie();
