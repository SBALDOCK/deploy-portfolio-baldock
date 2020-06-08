"use strict"


let imagesArray = ['url("images/img_one.jpg")', 'url("images/img_two.jpg")', 'url("images/img_three.jpg")', 'url("images/img_four.jpg")', 'url("images/img_five.jpg")'];

let renderImages = () => {
  setInterval(function(){
    $('section.one').css(
    {'background-image':imagesArray[1]});
    }, 5000);
  setInterval(function(){
    $('section.one').css(
    {'background-image':imagesArray[2]});
    }, 10000);
  setInterval(function(){
    $('section.one').css(
    {'background-image':imagesArray[3]});
    }, 15000);
  setInterval(function(){
    $('section.one').css(
    {'background-image':imagesArray[4]});
    }, 20000);
  setInterval(function(){
    $('section.one').css(
    {'background-image':imagesArray[0]});
    }, 25000); 
}

renderImages();

// $('section.one').css({'background-image':imagesArray[Math.floor(Math.random() * imagesArray.length)]});

// // let randomNumber = Math.floor(Math.random() * imagesArray.length);

// // document.getElementById('section.one').css= imagesArray[randomNumber];

// setInterval(function() {
//   randomImage();
// }, 5000);
