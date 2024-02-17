// function play() {
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

// অথবা utility.js ফাইলে দুইটা রিইউজেবল ফাংশন বানিয়ে এখানে play() আর মধ্যে কল করলেও হয় 

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key 

    if (playerPressed === 'Escape') {
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase() 

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score', updateScore)

        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // // const currentScore = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText) 

         const newScore = currentScore + 1 

        //  currentScoreElement.innerText = newScore 
        // //  currentScore = newScore  



        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        const currentLife =getTextElementValueById('current-life')
        const updatedLife = currentLife - 1
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        }

        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText) 

        // const newLife = currentLife - 1

        // currentLifeElement.innerText = newLife 
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame() {
    const alphabet = getRandomAlphabet()

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet)
}  

function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame()
}
function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}