
//creating navigation bar 

const links = ["banner", "features", "team", "contact"];
const ul = document.querySelector(".navigation-link");

const createNavigation = function() {
	links.forEach((link)=>{
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${link}`;
    a.innerText = link;
    li.appendChild(a);
    ul.appendChild(li);
  })	
}

// creating navigation collapse button 

const navigationBar = document.querySelector(".navigation");
const collapseDiv = document.createElement("div");

const collapseFun = function() {
	navigationBar.appendChild(collapseDiv);
	collapseDiv.className = "collapse";
	for (let i = 0; i <= 2; i++) {
		let temp = document.createElement("p");
		collapseDiv.appendChild(temp);
	}
	collapseDiv.addEventListener('click', ()=>{
		ul.classList.toggle("navigation-active");
	})
}

// sticky navigation bar

const body = document.body;
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

const scroll = function() {
	window.addEventListener('scroll', ()=>{
		navigationBar.classList.toggle("sticky", window.scrollY > 0);
		const currentScroll = window.pageYOffset;
		if(currentScroll == 0) {
			body.classList.remove(scrollDown);
			return;
		}

		if(currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
			body.classList.remove(scrollUp);
			body.classList.add(scrollDown);
		} else if(currentScroll < lastScroll && body.classList.contains(scrollDown)) {
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		lastScroll = currentScroll;
	})
}

//highlight navigation link on scrolling

const highlight = function(event) {
	const sections = document.querySelectorAll(".navigation-link a");
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	for(let section of sections) {
		let currentLink = section;
		let value = currentLink.getAttribute("href");
		let refElement = document.querySelector(value);
		if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
			document.querySelector(".navigation ul li a").classList.remove('active-link');
			currentLink.classList.add('active-link');
		} else {
			currentLink.classList.remove('active-link');
		}
	}
};

window.document.addEventListener('scroll', highlight);

createNavigation();
collapseFun();
scroll();






















