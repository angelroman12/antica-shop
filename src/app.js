import { http } from './http.js';
import { ui } from './ui.js';
import { uiFilter} from './uiFilter.js'
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);
const allBooksBtn = document.getElementById('allBooks').addEventListener('click', allBooksFunc);

const contactBtn = document.getElementById('contact-btn');
const contactForm = document.getElementById('contact');
contactBtn.addEventListener('click', (e) => {
	e.preventDefault();
	contactForm.scrollIntoView({behavior: 'smooth'})
})

const animatieDiv = document.getElementById('animatie');
const navbarBtn = document.getElementById('navbar-btn');

navbarBtn.addEventListener('click', (e) => {
	e.preventDefault();
	animatieDiv.scrollIntoView({behavior: 'smooth'})
})

//  Filter buttons functions 


function allBooksFunc () {
	output.innerHTML = ''
	http.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
		.then((data) => ui.showProducts(data));
}
function getProducts() {
	// const http = new customHTTPMethods();
	http.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
		.then((data) => ui.showProducts(data));
}

let searchInput =document.getElementById('search').addEventListener('change', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.findFilter(data))
})
let btn = document.querySelector('#fil')


const copertaBrosata = document.getElementById('copertaBrosata').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.coverBrosata(data))
})

const copertaCartonata = document.getElementById('copertaCartonata').addEventListener('click' , () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.coverCartonata(data))
})
let filter2130 = document.getElementById('21-30').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap2130(data))
})

let filter3140 = document.getElementById('31-40').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap3140(data))
})

let filter4150 = document.getElementById('41-50').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap4150(data))
})

let filter51 = document.getElementById('51').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap51(data))
})


//  Filter buttons 
const pretFilterBtn = document.getElementById('pret-filter-btn');
const pretDiv = document.querySelector('.pret-btn');
pretFilterBtn.addEventListener('click', showFilterBtn);

function showFilterBtn(){
	pretDiv.classList.toggle('display-none')
}

const categoryBtn = document.getElementById('category-filter-btn')
const categoryDiv = document.querySelector('.category-btn')

categoryBtn.addEventListener('click', showCategory);

function showCategory() {
	categoryDiv.classList.toggle('display-none');
}

const coverBtn = document.getElementById('cover-filter-btn')
const coverDiv = document.querySelector('.cover-btn')

coverBtn.addEventListener('click', showCover);

function showCover() {
	coverDiv.classList.toggle('display-none');
}

//  Footer Year
const year = document.getElementById('year')
const currentYear = new Date().getFullYear()
year.innerHTML = currentYear