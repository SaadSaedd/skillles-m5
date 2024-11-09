const doto = document.getElementById("js--doto")
const oswald = document.getElementById("js--oswald")
const edu = document.getElementById("js--edu")

const input = document.getElementById("js--input");


input.oninput = function(event) {
    doto.innerText = event.target.value;
    oswald.innerText = event.target.value;
    edu.innerText = event.target.value;
}

/*  like button */


let heart2 = true;
const heart = document.getElementById("hart-1")

heart.onclick = function(){
    if (heart2 === true ){
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        console.log("hi")
        heart2 = false;
    }else {
        heart.classList.add("fa-regular");
        heart.classList.remove("fa-solid");
        heart2 = true;
    }
   
}

const hart2 = document.getElementById("hart-2")

hart2.onclick = function(){
    if (heart2 === true ){
        hart2.classList.remove("fa-regular");
        hart2.classList.add("fa-solid");
        console.log("hi")
        heart2 = false;
    }else {
        hart2.classList.add("fa-regular");
        hart2.classList.remove("fa-solid");
        heart2 = true;
    }
   
}

const hart3 = document.getElementById("hart-3")

hart3.onclick = function(){
    if (heart2 === true ){
        hart3.classList.remove("fa-regular");
        hart3.classList.add("fa-solid");
        console.log("hi")
        heart2 = false;
    }else {
        hart3.classList.add("fa-regular");
        hart3.classList.remove("fa-solid");
        heart2 = true;
    }
   
}



/*  dark button */

const dark = document.getElementById('body')
const darkmode = document.getElementById("js--darkmode")
let light = true;

darkmode.onclick = function(){
    if (light === true){
        dark.style.background = '#000000'
        light = false;
    }else {
        dark.style.background = '#A6AEBF'
        light = true;
    }
    
}