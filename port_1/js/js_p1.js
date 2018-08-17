var mainScreenSlider = document.querySelector(".main_screen_slider");
var sliderMin1 = document.querySelector("#slider_min1");
var sliderMin2 = document.querySelector("#slider_min2");
var sliderMin3 = document.querySelector("#slider_min3");
var sliderMin4 = document.querySelector("#slider_min4");

 sliderMin1.onclick = function() {
      sliderMin1.style.backgroundColor = "rgb(26, 68, 74)";
      sliderMin2.style.backgroundColor = "#cdd3cf";
      sliderMin3.style.backgroundColor = "#cdd3cf";
      sliderMin4.style.backgroundColor = "#cdd3cf";
      mainScreenSlider.style.backgroundPosition = "-0.1%";
 }
 
 sliderMin2.onclick = function() {
      sliderMin2.style.backgroundColor = "rgb(26, 68, 74)";
      sliderMin1.style.backgroundColor = "#cdd3cf";
      sliderMin3.style.backgroundColor = "#cdd3cf";
      sliderMin4.style.backgroundColor = "#cdd3cf";
      mainScreenSlider.style.backgroundPosition = "33.3%";
 }
 
 sliderMin3.onclick = function() {
      sliderMin3.style.backgroundColor = "rgb(26, 68, 74)";
      sliderMin2.style.backgroundColor = "#cdd3cf";
      sliderMin1.style.backgroundColor = "#cdd3cf";
      sliderMin4.style.backgroundColor = "#cdd3cf";
      mainScreenSlider.style.backgroundPosition = "66.6%";
 }
 
 sliderMin4.onclick = function() {
      sliderMin4.style.backgroundColor = "rgb(26, 68, 74)";
      sliderMin2.style.backgroundColor = "#cdd3cf";
      sliderMin3.style.backgroundColor = "#cdd3cf";
      sliderMin1.style.backgroundColor = "#cdd3cf";
      mainScreenSlider.style.backgroundPosition = "100%";
 }
 
 /*burger*/
 
 var burger1 = document.querySelector("#burger1");
 var burger3 = document.querySelector("#burger3");
 var burgerCont = document.querySelector(".burger_cont");
 var meinMenu = document.querySelector(".mein_menu");
 

burgerCont.onclick = function() {
    
    burger1.classList.toggle("burger1");
    burger3.classList.toggle("burger3");
    burgerCont.classList.toggle("burger_cont_go");
    meinMenu.classList.toggle("mein_menu_on");
    
    
}

 
 
 
 