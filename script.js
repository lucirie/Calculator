const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const modifiers = document.querySelectorAll(".modifier");
const speed = 5;
const display = document.querySelector(".display");

function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function devide(a, b) {return a / b}

function operate(a, sign, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (sign == "+") {return add(a, b)}
    else if (sign == "-") {return subtract(a, b)}
    else if (sign == "*") {return multiply(a, b)}
    else if (sign == "/") {return devide(a, b)}
}

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.currentTarget.innerText;
        if (!isNaN(value) || value == '.') {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.currentTarget.innerText;
        if (value == "=" && currentInput != "" && previousInput != "") {
            output = operate(parseFloat(previousInput), operator, parseFloat(currentInput));
            currentInput = output;
            display.innerText = currentInput;
            previousInput = "";
            operator = "";
        }
        else if (previousInput == "" && value != "=") {
            previousInput = currentInput;
            operator = value;
            currentInput = "";
            display.innerText = previousInput;
        }
        else if (currentInput != "" && previousInput != "") {
            output = operate(parseFloat(previousInput), operator, parseFloat(currentInput));
            previousInput = output;
            display.innerText = previousInput;
            currentInput = "";
            operator = value;
        }
    });
});

modifiers.forEach((modifier) => {
    modifier.addEventListener("click", (e) => {
        value = e.currentTarget.innerText;
        if (value == "AC") {
            currentInput = "";
            previousInput = "";
            display.innerText = "";
        } else if (value == "C") {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput;
        }
    })
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":speed,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":speed,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":speed,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;