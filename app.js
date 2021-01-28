'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ];

  // sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
  // 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // create your board
  function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i) // data-id를 attribute로 생성하고 여기에 i를 value로 넣어줌. 
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulation! You found them all!'
    }
  }

  // flip your card
  function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500); // setTimeout() 타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정합니다.
    }
  }

  createBoard();
});