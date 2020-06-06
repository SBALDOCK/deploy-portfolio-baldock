"use strict"

function randomImage(){

let imagesArray = ['url("images/img_one.jpg")', 'url("images/img_two.jpg")', 'url("images/img_three.jpg")', 'url("images/img_four.jpg")', 'url("images/img_five.jpg")'];

let randomNumber = Math.floor(Math.random() * imagesArray.length);

document.getElementById('section.one').css = imagesArray[randomIndex];

setTimeout(function() {
  randomImage();
}, 5000);
}
