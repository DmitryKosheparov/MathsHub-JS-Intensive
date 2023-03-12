// const variant = "option1"

// console.log(5 == "5") //с приведением типов
// console.log(5 === "5") //без приведения типов

// const go = confirm("Morissio, do we like to move it?")
// if (go){
//     alert("MOVE IT")
// } else {
//     alert("MORISSIO, I CAN'T MOVE IT MOVE IT ANYMORE")
// }

// const go1 = prompt("Morissio, where do we move it move it?", "Madagaskar")
// if (go){
//     alert("MOVE IT")
// } else {
//     alert("MORISSIO, I CAN'T MOVE IT MOVE IT ANYMORE")
// }

// const userName = prompt("Who are you?", "anon")
// if (userName === "admin"){
//     alert("Hi daddy")
// } else if (userName === "anon"){
//     alert("I don't trust you, anon...")
// } else if (userName) {
//     alert(`Hi, ${username}`)
// } else {
//     alert("You are null")
// }

//FUCTION
//declaration
// function scream() {
//     alert("AAAAAAAAA")
//     return "scary"
// }
// scream()

// //expression
// const wowScream = function() {
//     alert("WOOOOOOW!")
// }
// wowScream()

// //arrow
// const arrow = () => {
//     alert("arrow in the sky")
// }
// arrow()

const getRandomNumInRange = (min, max) => {
    const randomValue = (Math.random() * (max - min) + min).toFixed(0)
    return randomValue
}
const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task) 
    return task
}

//const isPlus = Math.random() > 0.5
//console.log(getRandomNumInRange(2, 4))

const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const buttonGame = gameElements[3]

const gameState = {
    solutionProgress: false,
    rightAnswer: null,
}

const startGame = () => {
    if (!gameState.solutionProgress) {
        title.innerText = "The game begins!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        buttonGame.innerText = "Check answer"
        gameState.solutionProgress = true

    } else {
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (userAnswer.value == gameState.rightAnswer) ? "You win!" : "You lost..."
        buttonGame.innerText = "Restart"
        gameState.solutionProgress = false
    }   
}

buttonGame.addEventListener("click", startGame)
userAnswer.addEventListener("keydown", (e) => {
    //console.log(e)
    if (e.key === "Enter") {
        startGame()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})






const chosenEl = document.querySelectorAll(".chosen_block-container > div")
const counterEl = document.querySelector(".chosen_block span")

const chosenState = {
    elementsCount: 0,
}

const changeCount = (value) => {
    chosenState.elementsCount += value
    counterEl.innerText = chosenState.elementsCount
}

for (let i = 0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", (e) => {
        //chosenEl[i].className = "chosen_element"
        //console.log(e)
        if (e.target.className === ""){
            e.target.className = "chosen_element"
            changeCount(1)
        } else {
            e.target.className = ""
            changeCount(-1)
        }
    })
}
