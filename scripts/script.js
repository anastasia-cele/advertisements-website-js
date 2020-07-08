'use strict';

const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item'),
    modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements]
    .filter(elem => elem.tagName !== 'BUTTON' && elem.type !== 'submit');


//Close AddAd and OneItem
const closeModal = function(event) {
    const target = event.target;
    if (target.closest('.modal__close') || (target === this)) {
        this.classList.add('hide');
        if (this === modalAdd) {
            modalSubmit.reset();
        }
    }
}


//Close AddAd and OneItem on Esc
const closeModalEsc = event => {
    const key = event.key;
    if (key === 'Escape') {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        modalSubmit.reset();
        document.removeEventListener('keydown', closeModalEsc)
    }
}


//Button and Warning Display and Disabled
modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    modalBtnSubmit.disabled = !validForm;
    modalBtnWarning.style.display = validForm ? 'none' : '';
})


//Add new obj in dataBase
modalSubmit.addEventListener('submit', event => {
    event.preventDefault();
    const itemObj = {};
    for (const elem of elementsModalSubmit) {
        itemObj[elem.name] = elem.value;
    }
    dataBase.push(itemObj);
})


//Open AddAd
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
    document.addEventListener('keydown', closeModalEsc)
});


//Open OneItem
catalog.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.card')){
        modalItem.classList.remove('hide');
        document.addEventListener('keydown', closeModalEsc)
    }
})


//Close AddAd
modalAdd.addEventListener('click', closeModal);


//Close OneItem
modalItem.addEventListener('click', closeModal);





