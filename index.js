const myButton = document.getElementById("myButton")
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNun1;
let randomNun2;
let randomNun3;

myButton.onclick = function(){
    randomNun1 = Math.floor(Math.random() * max) + min ;
    randomNun2 = Math.floor(Math.random() * max) + min;
    randomNun3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNun1;
    label2.textContent = randomNun2;
    label3.textContent = randomNun3;
}
