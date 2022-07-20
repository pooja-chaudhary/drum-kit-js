let numberOfDrumButton=document.querySelectorAll(".drum").length;


//button press event detector
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerhtml= this.innerHTML;
    makeSound(buttonInnerhtml);
    buttonAnnimation(buttonInnerhtml);
  });
}


//keypress event detector
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnnimation(event.key);
});

function buttonAnnimation(currentKey)
{
  var activeButton=document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   
   setTimeout(function (){
     activeButton.classList.remove("pressed")
   }, 100);
}
//function to add sounds

function makeSound(key)
{
  switch (key)
   {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var kickBass=new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;

    case "l":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
    break;

    default: console.log(key);

    }
}
