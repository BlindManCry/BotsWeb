// For Eli Bot 
const eliInput = document.querySelector(".eli-input")
const sendButtonForEli = document.querySelector(".eli-button")

const mainMessegeDiv = document.querySelector(".main-messeges-container-for-eli")

let botSkipForEli = false

function wrtieMessegeEli() {
    if (eliInput.value == "") {
        botSkipForEli = true
        return
    } else {
        var userMessegeDiv = document.createElement("div")
        userMessegeDiv.classList.add("user-messege-container")
        mainMessegeDiv.appendChild(userMessegeDiv)
     
        var userDiv = document.createElement("div")
        userDiv.classList.add("user-div-for-messege")
        userMessegeDiv.appendChild(userDiv)
     
        var userMessege = document.createElement("p")
        userMessege.classList.add("user-messege")
        userMessege.innerHTML = eliInput.value
        userDiv.appendChild(userMessege)
     
        var userImgDiv = document.createElement("div")
        userImgDiv.classList.add("user-img-container")
        userMessegeDiv.appendChild(userImgDiv)
     
        var userImg = document.createElement("div")
        userImg.classList.add("user-img")
        userImg.innerHTML = "d"
        userImgDiv.appendChild(userImg)
        
        eliInput.value = ""
     
        mainMessegeDiv.scrollTop = mainMessegeDiv.scrollHeight 
        botSkipForEli = false
    }

    setTimeout(() => {
        if (botSkipForEli) {
            return
        } else {
            var botMessegeDiv = document.createElement("div")
            botMessegeDiv.classList.add("bot-messege-container")
            mainMessegeDiv.appendChild(botMessegeDiv)
        
            var botMessegeImgContainer = document.createElement("div")
            botMessegeImgContainer.classList.add("messege-img-container")
            botMessegeDiv.appendChild(botMessegeImgContainer)
        
            var botMessegeImg = document.createElement("img")
            botMessegeImg.classList.add("messege-img")
            botMessegeImg.src = "images/bot-1.png"
            botMessegeImgContainer.appendChild(botMessegeImg)
        
            var divForBotMessege = document.createElement("div")
            divForBotMessege.classList.add("bot-div-for-messege")
            botMessegeDiv.appendChild(divForBotMessege)
        
            var botMessege = document.createElement("p")
            botMessege.classList.add("bot-messege")
            botResponse(userMessege, botMessege)
            divForBotMessege.appendChild(botMessege)
        
            mainMessegeDiv.scrollTop = mainMessegeDiv.scrollHeight 
        } 
    }, 1000);
}

function botResponse(userMessege, botMessege) {
    if (userMessege.innerHTML == "გამარჯობა") {
        botMessege.innerHTML = "გამარჯობა, როგორ ხარ?"
    } else if (userMessege.innerHTML == "კარგად შენ?" || userMessege.innerHTML == "კარგად შენ") {
        botMessege.innerHTML = "მეც კარგად"
    } else if (userMessege.innerHTML == "როგორხარ" || userMessege.innerHTML == "როგორხარ?" || userMessege.innerHTML == "შენ როგორხარ") {
        botMessege.innerHTML = "კარგად შენ"
    } else if (userMessege.innerHTML == "მეც კარგად") {
        botMessege.innerHTML = "კარგია"
    } else if (userMessege.innerHTML == "კარგია") {
        botMessege.innerHTML = "❤️"
    } else if (userMessege.innerHTML == "ცუდად") {
        botMessege.innerHTML = "ცუდია"
    } else if (userMessege.innerHTML == "რამდენი წლის ხარ") {
        botMessege.innerHTML = "19ის"
    } else if (userMessege.innerHTML == "ვინ შეგქმნა") {
        botMessege.innerHTML = "ერთი სიმპატიური ბიჭია"
    } else if (userMessege.innerHTML == "რა გქვია" || userMessege.innerHTML == "რა გქვია?") {
        botMessege.innerHTML = "ელისო მაგრამ ელის მეძახიან"
    } else if (userMessege.innerHTML == "რასშვები?" || userMessege.innerHTML == "რასშვები") {
        botMessege.innerHTML = "ამ წამს შენ გწერ. შენ რას შვები"
    }  else if (userMessege.innerHTML == "არაფერს") {
        botMessege.innerHTML = "ცუდია"
    } else if (userMessege.innerHTML == "ელი") {
        botMessege.innerHTML = "გისმენ"
    } else if (userMessege.innerHTML == "მადლობა") {
        botMessege.innerHTML = "არაფერს"
    } else {
        botMessege.innerHTML = "ვწუხვარ, ზოგი სიტყვები არ მესმის ჯერჯერობით"
    }
}


sendButtonForEli.addEventListener("click", ()=> {
    wrtieMessegeEli()
})

document.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        if (itsEli) {
            wrtieMessegeEli()
        } else if (itsElo) {
            writeMessegeElo()
        }
    }
})


// Switch Generator 
const eliChoose = document.querySelector(".bot-1")
const eloChoose = document.querySelector(".bot-2")

let itsEli = true
let itsElo = false

eloChoose.addEventListener("click", ()=> {
    eloChoose.style.backgroundColor = "#abeb09"
    eliChoose.style.backgroundColor = "#edf2f1"
    document.querySelector(".messeges-container-for-eli").style.display = "none"
    document.querySelector(".messeges-container-for-elo").style.display = "block"

    document.querySelector(".user-info-container-for-eli").style.display = "none"
    document.querySelector(".user-info-container-for-elo").style.display = "block"
    itsElo = true
    itsEli = false
})

eliChoose.addEventListener("click", ()=> {
    eloChoose.style.backgroundColor = "#edf2f1"
    eliChoose.style.backgroundColor = "#abeb09"
    document.querySelector(".messeges-container-for-eli").style.display = "block"
    document.querySelector(".messeges-container-for-elo").style.display = "none"

    document.querySelector(".user-info-container-for-eli").style.display = "block"
    document.querySelector(".user-info-container-for-elo").style.display = "none"
    itsEli = true
    itsElo = false
})


// For Elo Bot 
const mainMessegeDivForElo = document.querySelector(".main-messeges-container-for-elo")

const eloInput = document.querySelector(".elo-input")
const sendButtonForElo = document.querySelector(".elo-button")

function writeMessegeElo() {
    if (eloInput.value == "") {
        botSkipForEli = true
        return
    } else {
        var userMessegeDiv = document.createElement("div")
        userMessegeDiv.classList.add("user-messege-container")
        mainMessegeDivForElo.appendChild(userMessegeDiv)
     
        var userDiv = document.createElement("div")
        userDiv.classList.add("user-div-for-messege")
        userMessegeDiv.appendChild(userDiv)
     
        var userMessege = document.createElement("p")
        userMessege.classList.add("user-messege")
        userMessege.innerHTML = eloInput.value
        userDiv.appendChild(userMessege)
     
        var userImgDiv = document.createElement("div")
        userImgDiv.classList.add("user-img-container")
        userMessegeDiv.appendChild(userImgDiv)
     
        var userImg = document.createElement("div")
        userImg.classList.add("user-img")
        userImg.innerHTML = "d"
        userImgDiv.appendChild(userImg)
        
        eloInput.value = ""
     
        mainMessegeDivForElo.scrollTop = mainMessegeDivForElo.scrollHeight 
        botSkipForEli = false
    }

    setTimeout(() => { 
        if (botSkipForEli) {
            return
        } else {
            var botMessegeDiv = document.createElement("div")
            botMessegeDiv.classList.add("bot-messege-container")
            mainMessegeDivForElo.appendChild(botMessegeDiv)
    
            var botMessegeImgContainer = document.createElement("div")
            botMessegeImgContainer.classList.add("messege-img-container")
            botMessegeDiv.appendChild(botMessegeImgContainer)
    
            var botMessegeImg = document.createElement("img")
            botMessegeImg.classList.add("messege-img")
            botMessegeImg.src = "images/bot-2.png"
            botMessegeImgContainer.appendChild(botMessegeImg)
    
            var divForBotMessege = document.createElement("div")
            divForBotMessege.classList.add("bot-div-for-messege")
            botMessegeDiv.appendChild(divForBotMessege)
    
            var botMessege = document.createElement("p")
            botMessege.classList.add("bot-messege")
            if (!gameOn) {
                botResponseForElo(userMessege, botMessege) 
            } else if (gameOn) {
                startGame(userMessege, botMessege)
            }
            divForBotMessege.appendChild(botMessege)
    
            mainMessegeDivForElo.scrollTop = mainMessegeDivForElo.scrollHeight 
        }
    }, 1000);
}

let gameOn = false

function botResponseForElo(userMessege, botMessege) {
    if (userMessege.innerHTML == "!თამაში") {
        botMessege.innerHTML = "თქვენ დაიწყეთ თამაში. მე ჩავიფიქრებ რიცხვს 1დან 100მდე და თქვენ გაქვთ 6 ცდა რომ ეს რიცხვი გამოიცნოთ. ყოველ არასწორ მცდელობაზე მე გეტყვით თქვენი დასახელებული რიცხვი ჩემს ჩაფიქრებულ რიცხვზე მაღალია თუ დაბალია. დავიწყოთ ❤️"
        gameOn = true
    } else {
        botMessege.innerHTML = "ვწუხვარ, ტექსტი ვერ გავიგე. თუ გინდათ ვითამაშოთ დაწერეთ - '!თამაში' "
    }
}

let botsNumber = Math.floor(Math.random() * 100)
let counter = 0
let oppositeCounter = 6

function startGame(userMessege, botMessege) {
    if (isNaN(userMessege.innerHTML)) {
        botMessege.innerHTML = "თქვენ უნდა აირჩიოთ რიცხვი თამაშის გასაგრძელებლად"
    } else if (counter > 5) {
        
    } else {
        if (userMessege.innerHTML > botsNumber) {  
            if (counter == 5) {
                botMessege.innerHTML = "სამწუხაროდ თქვენ გამოიყენეთ 6ვე მცდელობა და დამარცხდით. თუ გიდნათ ახლიდან თამაში დაწერეთ - '!თამაში'"
                endGame()
            } else {
                counter = counter + 1
                oppositeCounter = oppositeCounter - 1
                botMessege.innerHTML = `რიცხვი ${userMessege.innerHTML} ჩემს ჩაფიქრებულ რიცხვზე მაღალია. დარჩენილი გაქვთ ${oppositeCounter} მცდელობა`  
            }     
        } else if (userMessege.innerHTML < botsNumber) { 
            if (counter == 5) {
                botMessege.innerHTML = "სამწუხაროდ თქვენ გამოიყენეთ 6ვე მცდელობა და დამარცხდით. თუ გიდნათ ახლიდან თამაში დაწერეთ - '!თამაში'"
                endGame()
            } else {
                counter = counter + 1          
                oppositeCounter = oppositeCounter - 1
                botMessege.innerHTML = `რიცხვი ${userMessege.innerHTML} ჩემს ჩაფიქრებულ რიცხვზე დაბალია. დარჩენილი გაქვთ ${oppositeCounter} მცდელობა`
            }
        } else if (userMessege.innerHTML == botsNumber) {
            counter = counter + 1
            oppositeCounter = oppositeCounter - 1
            botMessege.innerHTML = `გილოცავთ, თქვენ გამოიცანით ჩემი ჩაფიქრებული რიცხვი ${counter} ცდაში და მოიგეთ თამაში. თუ გსურთ ახლიდან დაწყება დაწერეთ - !თამაში`
            endGame()
        }
    }
}

function endGame() {
    gameOn = false
    counter = 0
    oppositeCounter = 6
    botsNumber = Math.floor(Math.random() * 100)
}

sendButtonForElo.addEventListener("click", ()=> {
    writeMessegeElo()
})

