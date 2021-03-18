let button = document.querySelector(".guess-submit")
let lastGuesses = document.querySelector(".guesses")
let lastResult = document.querySelector(".lastResult")
let lowOrHigh = document.querySelector(".lowOrHigh")
let guessField = document.querySelector(".guessField")
let title = document.querySelector("h1")

let guesses = 1
let resetButton
let randomNumber = Math.floor(Math.random() * 100) + 1
const colors = ['aqua', 'crimson', 'yellow']
let colorCounter = 0
setInterval(() => {
    title.style.backgroundColor = colors[colorCounter]
    colorCounter++
    if (colorCounter === 3){
        colorCounter = 0
    }
}, 700)


let checkGuess = () => {
    if (guessField.value > 0) {
        let userGuess = Number(guessField.value)
        if (guesses === 1) {
            lastGuesses.textContent = "Previous guesses:"
        }
        lastGuesses.textContent += userGuess + " "
        if (userGuess === randomNumber) {
            lastResult.textContent = "Congratulations, you guessed the number"
            lastResult.style.backgroundColor = "green"
            setGameOver()
        } else if (guesses === 5) {
            lastResult.textContent = "Game over! Increased number of attempts"
            button.disabled = true
            setGameOver()
        } else {
            lastResult.textContent = "Wrong!"
            lastResult.style.backgroundColor = "blueviolet"


            if (userGuess > 100) {
                lowOrHigh.textContent = "Please enter a number less than 100"
            } else if (userGuess < 0) {
                lowOrHigh.textContent = "Please enter a positive number  "
            } else if (userGuess < randomNumber) {
                lowOrHigh.textContent = "number less than specified"
            } else if (userGuess > randomNumber) {
                lowOrHigh.textContent = "The number is greater than the specified"
            }
        }


        guesses++
    }
}

let setGameOver = () => {
    guessField.disabled = true
    button.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = "New game"
    document.body.querySelector('.guess__btns').appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)
}

let resetGame = () => {
    guesses = 1
    lastResult.textContent = ''
    lastGuesses.textContent = ''
    lowOrHigh.textContent = ''
    guessField.disabled = false
    button.disabled = false
    lastResult.style.backgroundColor = "white"
    resetButton.parentNode.removeChild(resetButton)
}

button.addEventListener("click", () => {
    checkGuess()
    guessField.value = ""
})