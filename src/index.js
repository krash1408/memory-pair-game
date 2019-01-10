
const field = document.querySelector('.game-field');
let wrapper = document.createElement('div');
wrapper.classList.add('game-field__wrapper');
field.appendChild(wrapper);

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
let shuffle = function(val) {
    var j, x, i;
    for (i = val.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = val[i];
        val[i] = val[j];
        val[j] = x;
    }
    return val;
}

createCard = (num) => {
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

createCard(16).forEach(val => {
    wrapper.appendChild(val);
});

let cardArr = $('.card__wrapper').toArray();
    cardArr.forEach(value => {
        value.addEventListener('click', () => {
            value.classList.toggle('card__wrapper--click');
        })
    });
document.querySelector('.start-btn').addEventListener('click', function() {
    this.classList.add('active');
    newGame();
})

document.querySelector('.restart-btn').addEventListener('click', function() {
    document.querySelector('.start-btn').classList.remove('active');

})

function newGame() {
    cardBackArr = $('.card__back').toArray();
    cardBackArr.forEach((val, ind) => {
        let shuffledArray = new shuffle(imageArray);
        $(document).ready(function () {
            $(val).css('background-image', `url(${shuffledArray[ind]})`);
            $(val).css('background-repeat', 'no-repeat');
            $(val).css('background-position', 'center center');
        });
    });
}

