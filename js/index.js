// Your code goes here

const navlinks = document.querySelectorAll("nav a");
// console.log(navlinks);
navlinks.forEach((e) => {
    e.addEventListener("click", function(event) {
        console.log("You clicked " + e.textContent + " nav link.");
    });
});

document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    console.log("You pressed '" + event.key  + "' key.");
});

const funbusimg = document.querySelectorAll(".intro img");
// console.log(funbusimg);
funbusimg[0].addEventListener("wheel", function(event) {
    event.preventDefault();
    // console.log(event.deltaX);
    // console.log(event.deltaY);
    console.log("Wheel event detected, seems like you have scrolled over an image.");
});

const introclass= document.querySelectorAll(".intro");
window.addEventListener("load", function(event){
    const newimg = document.createElement('img');
    newimg.setAttribute("src", "https://media3.giphy.com/media/0SHGYm3VhI1X7NSkNV/200w.webp?cid=ecf05e47y0tn5kjl0crje0sigubo2i5uks0uhvnyrhtty1hg&rid=200w.webp&ct=g");
    introclass[0].appendChild(newimg);
});

const welcometext = document.querySelectorAll('header h2');
welcometext[0].addEventListener('dblclick', (event) => {
  event.target.style.background = 'pink';
});


const contentclass = document.querySelectorAll(".content-destination img");
contentclass[0].addEventListener("mouseover", function(event) {
    console.log("mouseover event triggered");
});
contentclass[0].addEventListener("mouseout", function(event) {
    console.log("mouseout event triggered");
});



const contentclass1 = document.querySelectorAll(".content-destination h2");
contentclass1[0].addEventListener("copy", function(event) {
    window.alert("copy event triggered");
});

const imgcontent = document.querySelectorAll('.content-section');
imgcontent[0].addEventListener('dblclick', (event) => {
  event.target.style.background = 'yellow';
});

window.addEventListener("beforeprint", function(event) {
    window.alert("You are about to print this awesome website.");
});