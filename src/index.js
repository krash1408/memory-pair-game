
let field = document.querySelector('.game-field');
let content = [
    'img/fb.svg',
    'img/line.svg'
]

let wrapper = document.createElement('div');
wrapper.classList.add('game-field__wrapper');

field.appendChild(wrapper);
createCard = () => {
    let tmpArr = [];
    for (var i = 0; i < 16; i++) {
        const card = document.createElement('div');
        const cardWrapper = document.createElement('div');
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        card.classList.add('card');
        cardWrapper.classList.add('card__wrapper');
        cardFront.classList.add('card__front');
        cardBack.classList.add('card__back');
        cardBack.style.backgroundImage = 'img/fb.svg';
        card.appendChild(cardWrapper);
        cardWrapper.appendChild(cardFront);
        cardWrapper.appendChild(cardBack);
        tmpArr.push(card);
    }
    return tmpArr;
}
randomize = () => {
    return createCard().sort(function() { return 0.5 - Math.random() });
}
//заменить createCard на randomize
createCard().forEach(val => {
    wrapper.appendChild(val);
});

cardArr = document.querySelectorAll('.card__wrapper')
cardArr.forEach(value => {
    value.addEventListener('click', (evt) => {
        value.classList.toggle('card__wrapper--click');
    })
})
