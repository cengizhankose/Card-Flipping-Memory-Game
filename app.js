document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: 'games',
            img: './images/games.png'
        },
        {
            name: 'games',
            img: './images/games.png'
        },
        {
            name: 'heart',
            img: './images/heart.png'
        },
        {
            name: 'heart',
            img: './images/heart.png'
        },
        {
            name: 'keep',
            img: './images/keep.png'
        },
        {
            name: 'keep',
            img: './images/keep.png'
        },
        {
            name: 'whatsapp',
            img: './images/whatsapp.png'
        },
        {
            name: 'whatsapp',
            img: './images/whatsapp.png'
        },
        {
            name: 'playstore',
            img: './images/playstore.png'
        },
        {
            name: 'playstore',
            img: './images/playstore.png'
        },
        {
            name: 'phone',
            img: './images/phone.png'
        },
        {
            name: 'phone',
            img: './images/phone.png'
        },
        {
            name: 'youtube',
            img: './images/youtube.png'
        },
        {
            name: 'youtube',
            img: './images/youtube.png'
        },
        {
            name: 'music',
            img: './images/music.png'
        },
        {
            name: 'music',
            img: './images/music.png'
        },
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = [], cardsChosenId=[], cardsWon = []
    
    function createBoard () {
        for(var i=0; i<cardArray.length;i++){
             var card = document.createElement("img")
             card.setAttribute("src","./images/blank.png")
             card.setAttribute("data-id",i)
             card.addEventListener('click',flipCard)
             grid.appendChild(card)
        }
    }
    
    function checkForMatch(){
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You found a match")
            cards[optionOneId].setAttribute("src", "./images/white.png")
            cards[optionTwoId].setAttribute("src", "./images/white.png")
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute("src","./images/blank.png")
            cards[optionTwoId].setAttribute("src","./images/blank.png")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations!<br> You Won!"
        }
    }

    function flipCard(){
         var cardId = this.getAttribute("data-id")
         cardsChosen.push(cardArray[cardId].name)
         cardsChosenId.push(cardId)
         this.setAttribute("src" , cardArray[cardId].img)
         if (cardsChosen.length==2){
             setTimeout(checkForMatch,500)
         }
    }

    createBoard()
})