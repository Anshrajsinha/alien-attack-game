var alienX = 20
var alienY = 5
var guessX = 0
var guessY = 0
var shotsRemaining = 8
var shotsMade = 0
var gameStats = ""
var gameWon = false

var cannon = document.querySelector('#cannon')
var missile = document.querySelector('#missile')
var alien = document.querySelector('#alien')

alien.style.left = Math.floor(Math.random()*280) + "px"
alien.style.top = Math.floor(Math.random()*280) + "px"
alienX = parseInt(alien.style.left)
alienY = parseInt(alien.style.top)

var output = document.querySelector('#output')
var inputX = document.querySelector('#inputX')
var inputY = document.querySelector('#inputY')

var button = document.querySelector('#btn')
button.addEventListener('click', clickHandler)

function render () {
    /* guessX = inputX.value
    guessY = inputY.value */

    alien.style.left = alienX + "px"
    alien.style.top = alienY + "px"

    cannon.style.left = guessX + "px"

    missile.style.left = guessX + "px"
    missile.style.top = guessY + "px"
}
function clickHandler() {
    playGame()
}
function playGame() {
    shotsRemaining -= 1
    shotsMade +=1
    gameStats = "Shots: " + shotsMade + "Remaining: " + shotsRemaining

    guessX = parseInt(inputX.value)
    guessY = parseInt(inputY.value)

    if (guessX>=alienX&&guessX<=alienX+20) {
        if (guessY>=alienY&&guessY<=alienY+20) {
            gameWon = true
            endGame()
        }
    } else {
        output.innerHTML = "Miss " + gameStats
        if (shotsRemaining<1) {
            endGame()
        } 
    }
    if (!gameWon) {
        alienX = Math.floor(Math.random()*280)
        alienY += 30
    }
    render()
}
function endGame() {
    if (gameWon) {
        output.innerHTML = "Hit! You saved the earth" + "<br>" 
        + "It only took you " + shotsMade + " shots"
    } else {
        output.innerHTML = "You lost" + "<br>"
        + "The earth has been invaded"
    }
}


/* guessX = inputX.value
guessY = inputY.value
console.log(guessX,guessY) */







