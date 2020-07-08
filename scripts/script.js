'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');


//Open and close AddAd
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('modal__close') || (target === modalAdd)) {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
})


//Open and close OneItem
catalog.addEventListener('click', () => {
    modalItem.classList.remove('hide');
})


modalItem.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.modal__close') || (target === modalItem)) {
        modalItem.classList.add('hide');
    }
})


//Open and close AddAd and OneItem when press Escape
document.addEventListener('keydown', event => {
    const key = event.key;
    if (key === "Escape") {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        modalSubmit.reset();
    }
});

