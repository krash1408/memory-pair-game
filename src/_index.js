  wrapper = document.querySelector('.game-field__wrapper');
  //создать карточки
  function createCard (num) {
      let tmpArr = [];
      for (var i = 0; i < num; i++) {
          const card = document.createElement('div');
          const cardWrapper = document.createElement('div');
          const cardFront = document.createElement('div');
          const cardBack = document.createElement('div');
          card.classList.add('card');
          cardWrapper.classList.add('card__wrapper');
          cardFront.classList.add('card__front');
          cardBack.classList.add('card__back');
          card.appendChild(cardWrapper);
          cardWrapper.appendChild(cardFront);
          cardWrapper.appendChild(cardBack);
          tmpArr.push(card);
      }
      return tmpArr;
  }
  //создать поле из num карточек через fn createCard(num)
  function createCardField ( value ) {
    value.forEach( val => {
      wrapper.appendChild( val );
    } );
  }
  //перемешать массив
  function shuffleImages () {
    const imageArray = [
      '../img/fb.svg',
      '../img/fb.svg',
      '../img/line.svg',
      '../img/line.svg',
      '../img/skype.svg',
      '../img/skype.svg',
      '../img/snap.svg',
      '../img/snap.svg',
      '../img/tlg.svg',
      '../img/tlg.svg',
      '../img/viber.svg',
      '../img/viber.svg',
      '../img/weixin.svg',
      '../img/weixin.svg',
      '../img/whatsapp.svg',
      '../img/whatsapp.svg'
    ];
    var j, x, i;
    for (i = imageArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = imageArray[i];
        imageArray[i] = imageArray[j];
        imageArray[j] = x;
    }
    return imageArray;
  }
  function newGame() {
    cardBackArr = $('.card__back').toArray();
    let shuffledArray = new shuffleImages();
    cardBackArr.forEach((val, ind) => {
        $(document).ready(function () {
            $(val).css('background-image', `url(${shuffledArray[ind]})`);
            $(val).css('background-repeat', 'no-repeat');
            $(val).css('background-position', 'center center');
        });
    });
  }
  wrapper.addEventListener('click', () => {
    cardFrontArray = $('.card__front').toArray();
    if (event.target == cardFrontArray.forEach(val => {return val})) {
      
    }
  });
  document.querySelector('.start-btn').addEventListener('click', function() {
    this.classList.add('active');
    new createCardField(createCard(16));
    new newGame();
  });
