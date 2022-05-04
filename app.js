const character = document.getElementById("character")

//The classList is a read-only property of an element that returns a 
//live collection of CSS classes. Basically I used this to be able to get the keyframes 
//and also the jump element to be used together for this function. This basically helps
//to put everything together from what I had on CSS.
// I learned about this on https://www.javascripttutorial.net/javascript-dom/javascript-classlist/
function jump() {
    character.classList.add("jump");
    //Setting the timeout function is used for the class to disappear and to let my character to jump more than
    //once and not to be locked for jumping just once.
    setTimeout(function (){
        character.classList.remove("jump")
    }, 400)
}

//Be able to make my character jump from doing a click on the mouse
document.addEventListener("click", function (event){
    jump();
});

//Make collisions for the character to jump over

//Reset level after getting hit by a obstacle 

// Keep score after jumping over obstacle 
