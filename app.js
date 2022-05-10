const character = document.getElementById("character")
const cone = document.getElementById('cone')
const score = document.getElementById('score')
//The classList is a read-only property of an element that returns a 
//live collection of CSS classes. Basically I used this to be able to get the keyframes 
//and also the jump element to be used together for this function. This basically helps
//to put everything together from what I had on CSS.
// I learned about this on https://www.javascripttutorial.net/javascript-dom/javascript-classlist/
function jump() {
    //This line of code is basically to stop the character from initiating the jump action so the animation won't be reset.
    if(character.classList != "jump"){
    character.classList.add("jump");
    //Setting the timeout function is used for the class to disappear and to let my character to jump more than
    //once and not to be locked for jumping just once.
    setTimeout(function (){
        character.classList.remove("jump")
    }, 300)
}}

//Be able to make my character jump from doing a click on the mouse
document.addEventListener("click", function (event){
    jump();
});

//Make collisions for the character to jump over
//I used window.getComputedStyle because I'm able to see when my character's position hits the 
//top and also I need to have the position of the cone from the left. With this information I 
//make a if  statment of when the cone hits the position of the character if said charcter doesn't
//jump on time. Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
setInterval(() => {
    score.innerText++;
const characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue('top'));
const coneLeft = parseInt(window.getComputedStyle(cone)
    .getPropertyValue('left'));
    //This is for when the cone exits the screen it will just disappear. The empty string will
    //remove none and continue showing the cone
    if(coneLeft <0) {
        cone.style.display = 'none';
    } else {
        cone.style.display = '';
    }

    if (coneLeft < 50 && coneLeft > 0 && characterTop>450){
        alert("Game Over!" + "\nYou got a score of: " + score.innerText + 
        "\nPlay again?");
        location.reload();
    }
}, 50);
//Reset level after getting hit by a obstacle 

