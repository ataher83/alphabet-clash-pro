const notificationSound = new Audio()
let isGamePlayOn = false
const artBoard = document.getElementById('art-board') 
const modalBox = document.getElementById('modal-box')



function handleKeyboardKeyUpEvent(event) {
    if (isGamePlayOn == false) return
    
    const playerPressed = event.key 
    if (playerPressed === 'Escape') {
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase() 

    if (playerPressed === expectedAlphabet) {

        notificationSound.src = "audio/success.mp3"
        notificationSound.play()

        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score', updateScore)

         const newScore = currentScore + 1 


        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        
        notificationSound.src = "audio/wrong.mp3"
        notificationSound.play()

        const currentLife =getTextElementValueById('current-life')
        const updatedLife = currentLife - 1

        const updatedLifePercentage = (updatedLife / 5) * 100
        artBoard.style.background = `linear-gradient(white ${updatedLifePercentage}%, red)`


        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        }
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

    isGamePlayOn = true
}
function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)

    isGamePlayOn = false

    // artBoard.style.background = `linear-gradient(white 100%, red)`
    artBoard.style.background = "linear-gradient(white 100%, red)"
}


function modalOpen(event) {
    if (event.clientY < 20) {
        modalBox.style.display= "flex"
    }
}
function modalClose() {
    modalBox.style.display="none"
}
document.body.onmousemove = modalOpen