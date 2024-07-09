const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
]

 	// modifier l'image par celle suivante

function changeSlide(numSlides) {
	let bannerImg = document.querySelector(".banner-img");
	bannerImg.src = "./assets/images/slideshow/" + slides[numSlides].image;
	let bannerP = document.querySelector("#banner p");
	bannerP.innerHTML = slides[numSlides].tagLine;
	document.querySelectorAll(".dot").forEach((dot) => {
		dot.classList.remove("dot_selected");
	})
	document.querySelectorAll(".dot")[numSlides].classList.add("dot_selected")
}

let numSlides = 0
let nbSlides = slides.length-1

	// flèche de gauche
let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => {
	if (numSlides <= 0) {
		numSlides = nbSlides;
	} else {
		numSlides--;
	}
	changeSlide(numSlides);
});

	// flèche de droite
let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
	if (numSlides >= nbSlides) {
		numSlides = 0;
	} else {
		numSlides++;
	}
	changeSlide(numSlides);
});


//création bullet points

let node = `<div class="dot dot_selected"></div>`
for(let i = 1; i < slides.length; i++){
	node = node + `<div class="dot"></div>`
}
let dots = document.querySelector(".dots");
dots.innerHTML=node
console.log(node)
