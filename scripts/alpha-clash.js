// function play() {
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

// অথবা utility.js ফাইলে দুইটা রিইউজেবল ফাংশন বানিয়ে এখানে play() আর মধ্যে কল করলেও হয় 


function continueGame() {
    const alphabet = getRandomAlphabet()

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}