document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "bird",
      img: "./images/bird.png",
    },
    {
      name: "bird",
      img: "./images/bird.png",
    },
    {
      name: "dog",
      img: "./images/dog.png",
    },
    {
      name: "dog",
      img: "./images/dog.png",
    },
    {
      name: "fish",
      img: "./images/fish.png",
    },
    {
      name: "fish",
      img: "./images/fish.png",
    },
    {
      name: "lion",
      img: "./images/lion.png",
    },
    {
      name: "lion",
      img: "./images/lion.png",
    },
    {
      name: "octo",
      img: "./images/octo.png",
    },
    {
      name: "octo",
      img: "./images/octo.png",
    },
    {
      name: "panda",
      img: "./images/panda.png",
    },
    {
      name: "panda",
      img: "./images/panda.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("game-result");
  var cardChosen = [];
  var cardChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/main.png");

      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // checking for matching card
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] == cardChosen[1]) {
      alert("You found the match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/main.png");
      cards[optionTwoId].setAttribute("src", "images/main.png");
      alert("Sorry try again, Pairs don't match");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = "Congratulation!! You have won the game";
    }
  }
  // flipping the cards

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length > 1) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
