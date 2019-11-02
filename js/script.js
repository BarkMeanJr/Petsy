let windowW = window.innerWidth;
let windowH = window.innerHeight;
let windowX600 = window.matchMedia("(max-width: 700px)");
let windowX1000 = window.matchMedia("(max-width: 1000px)");

<<<<<<< HEAD
let homeLink = document.getElementById("homeLink")
=======
let homeLink = document.getElementById("homeLink");
>>>>>>> Update readme, cleans+fixes
let sellLink = document.getElementById("sellLink");
let signLink = document.getElementById("signLink");
let cartLink = document.getElementById("cartLink");

let shopLinks = document.querySelectorAll(".shopLinks");
let shopLink = document.getElementById("shopLinks");
let nav = document.getElementById("navLinks");
let logo = document.querySelector(".petsy-logo");

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

function linksToIcons(windowX600) {
	let toyLink = document.getElementById("toysLink");
	let foodLink = document.getElementById("foodLink");
	let clothesLink = document.getElementById("clothesLink");
	let walkLink = document.getElementById("walkLink");
	let groomLink = document.getElementById("groomLink");

	if (windowX600.matches) {
		toyLink.innerHTML = '<i class="fas fa-bone"></i>';
		foodLink.innerHTML = '<i class="fas fa-utensils"></i>';
		clothesLink.innerHTML = '<i class="fas fa-tshirt"></i>';
		walkLink.innerHTML = '<i class="fas fa-walking"></i>';
		groomLink.innerHTML = '<i class="fas fa-cut"></i>';
	} else {
		toyLink.innerHTML = "Toys & Entertainment";
		foodLink.innerHTML = "Food & Treats";
		clothesLink.innerHTML = "Clothing";
		walkLink.innerHTML = "Dog Walking";
		groomLink.innerHTML = "Dog Grooming";
	}
}
windowX600.addListener(linksToIcons);
linksToIcons(windowX600, windowX1000);

function navToIcons(windowX600) {
	if (windowX600.matches) {
		homeLink.innerHTML = '<i class="fas fa-home"></i>';
		sellLink.innerHTML = '<i class="fas fa-store"></i>';
		signLink.innerHTML = '<i class="fas fa-user-circle"></i>';
		cartLink.innerHTML = '<i class="fas fa-shopping-cart"></i>';
	} else {
		homeLink.innerHTML = "Home";
		sellLink.innerHTML = "Sell on Petsy";
		signLink.innerHTML = "Sign In/Register";
		cartLink.innerHTML = "Cart";
	}
}
windowX600.addListener(navToIcons);
navToIcons(windowX600);

function swapWeenie() {
	let weenies = document.querySelectorAll(".weenie > img");
	let groom = document.querySelectorAll(".groom > img");
	let food = document.querySelectorAll(".food > img");
	let clothes = document.querySelectorAll(".clothes > img");
	let walk = document.querySelectorAll(".walk > img");

	let weenieTarget = document.querySelector(".weenie-selected > img");
	let groomTarget = document.querySelector(".groom-selected > img");
	let foodTarget = document.querySelector(".food-selected > img");
	let clothesTarget = document.querySelector(".clothes-selected > img");
	let walkTarget = document.querySelector(".walk-selected > img");

	let toyPic = "Assets/Images/pet-toy-1.jpg";
	let groomPic = "Assets/Images/grooming-1.jpg";
	let foodPic = "Assets/Images/pet-food-1.jpg";
	let clothesPic = "Assets/Images/clothes-1.jpg";
	let walkPic = "Assets/Images/walk-1.jpg";

	weenieTarget.src = toyPic;
	foodTarget.src = foodPic;
	clothesTarget.src = clothesPic;
	groomTarget.src = groomPic;
	walkTarget.src = walkPic;

	weenies.forEach(e => {
		e.addEventListener("click", function() {
			weenieTarget.src = event.target.src;
		});
	});

	groom.forEach(e => {
		e.addEventListener("click", function() {
			groomTarget.src = event.target.src;
		});
	});

	food.forEach(e => {
		e.addEventListener("click", function() {
			foodTarget.src = event.target.src;
		});
	});

	clothes.forEach(e => {
		e.addEventListener("click", function() {
			clothesTarget.src = event.target.src;
		});
	});
<<<<<<< HEAD

	walk.forEach(e => {
		e.addEventListener("click", function() {
			walkTarget.src = event.target.src;
		});
	});

=======

	walk.forEach(e => {
		e.addEventListener("click", function() {
			walkTarget.src = event.target.src;
		});
	});

>>>>>>> Update readme, cleans+fixes
	shopLinks.forEach(e => {
		e.addEventListener("click", function(a) {
			a.preventDefault();
		});
	});
}
swapWeenie();

function jumpTo(spot) {
	let top = document.getElementById(spot).offsetTop;

	window.scrollTo(0, top);
}

cartLink.addEventListener("click", function(e) {
	let cartModal = document.getElementById("cartModal");

	e.preventDefault();
	cartModal.style.display = "block";
});

sellLink.addEventListener("click", function(e) {
	let sellModal = document.getElementById("sellModal");

	e.preventDefault();
	sellModal.style.display = "block";
});

signLink.addEventListener("click", function(e) {
	let signModal = document.getElementById("signModal");

	e.preventDefault();
	signModal.style.display = "block";
});

<<<<<<< HEAD
// logo.addEventListener("click", function() {
// 	let navModal = document.getElementById("navModal");

// 	if (windowX1000.matches) {
// 		navModal.style.display = "block";
// 		// nav.style.position = "static";
// 	} else {
// 		// nav.style.position = 'sticky';
// 	}
// });

=======
>>>>>>> Update readme, cleans+fixes
window.onclick = function(event) {
	if (event.target === cartModal) cartModal.style.display = "none";
	if (event.target === signModal) signModal.style.display = "none";
	if (event.target === sellModal) sellModal.style.display = "none";
	if (event.target === navModal) navModal.style.display = "none";
};
