'use strict'

///////////////////////////////////////////////////////////
//  SCRIPT FOR CARD NAME
const cardHolderName = document.querySelector('#cardNameField');
const defaultCardName = document.querySelector('#card-name-text');


///////////////////////////////////////////////////////////
//  SCRIPT FOR CARD NUMBER
const cardHolderNum = document.querySelector('#cardNumField')
const errorMsg1 = document.querySelector('.errorMessage1')
const cardDefaultNum = document.querySelector('#cardNumber')
const cardNumRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

///////////////////////////////////////////////////////////
//  SCRIPT FOR EXP.DATE
const expireMonthDefaultDate = document.querySelector('#MM')
const expireYearDefaultDate = document.querySelector('#YY')
const expireMonthDate = document.querySelector('#MM-field')
const expireYearDate = document.querySelector('#YY-field')
const errorMsg2 = document.querySelector('.errorMessage2')


///////////////////////////////////////////////////////////
//  SCRIPT FOR CVC

const cvcField = document.querySelector('#cvcField')
const cvcDefaultText = document.querySelector('.cvcDefaultText')
const errorMsg3 = document.querySelector('.errorMessage3')

///////////////////////////////////////////////////////////
//  SCRIPT FOR CONFIRM BTN
const confirmButton = document.querySelector('.confirmBtn')
let btnBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--Very-dark-violet')

///////////////////////////////////////////////////////////
//  SCRIPT TO DISPLAY THANK YOU CONTAINER
const rightContainer = document.querySelector('.right-container')
const thankYouContainer = document.querySelector('.thank-you-container');

///////////////////////////////////////////////////////////
//  SCRIPT FOR CONTINUE BUTTON
const continueBtn = document.querySelector('.continue')



///////////////////////////////////////////////////////////
//  SCRIPT FOR CARD NAME
cardHolderName.addEventListener('blur', function() {
    defaultCardName.textContent = cardHolderName.value

})



///////////////////////////////////////////////////////////
//  SCRIPT FOR CARD NUMBER
cardHolderNum.addEventListener('blur', function() {
    const numGiven = cardHolderNum.value;
    if (!cardNumRegex.test(numGiven)) {
        errorMsg1.textContent = ' Wrong format, number only'
        cardHolderNum.style.borderColor = 'red'


    } else {
        errorMsg1.textContent = ''
        cardDefaultNum.textContent = numGiven
        cardHolderNum.style.borderColor = ''

    }

})


///////////////////////////////////////////////////////////
//  SCRIPT FOR EXP.DATE
expireMonthDate.addEventListener('blur', function() {
    const givenExpnum = expireMonthDate.value;
    if (!cardNumRegex.test(givenExpnum)) {
        errorMsg2.textContent = 'numbers only'
        expireMonthDate.style.borderColor = 'red'

    } else {
        errorMsg2.textContent = ''
        expireMonthDefaultDate.textContent = givenExpnum
        expireMonthDate.style.borderColor = ''

    }

    if (givenExpnum == '') {
        errorMsg2.textContent = "can't be blank"
        expireMonthDate.style.borderColor = 'red'

    }
})



///////////////////////////////////////////////////////////
//  SCRIPT FOR CVC
expireYearDate.addEventListener('blur', function() {
    const givenExpnum = expireYearDate.value;
    if (!cardNumRegex.test(givenExpnum)) {
        errorMsg2.textContent = 'numbers only'
        expireYearDate.style.borderColor = 'red'

    } else {
        errorMsg2.textContent = ''
        expireYearDefaultDate.textContent = givenExpnum
        expireYearDate.style.borderColor = ''

    }

    if (givenExpnum == '') {
        expireYearDate.style.borderColor = 'red'
        errorMsg2.textContent = "can't be blank"
    }
})


///////////////////////////////////////////////////////////
//  SCRIPT FOR CVC
cvcField.addEventListener('blur', function() {
    const givenCvC = cvcField.value;
    if (!cardNumRegex.test(givenCvC)) {
        cvcField.style.borderColor = 'red'
        confirmButton.disabled = true;
        errorMsg3.textContent = 'numbers only'
    } else {
        confirmButton.disabled = false;
        errorMsg3.textContent = ''
        cvcField.style.borderColor = ''
        cvcDefaultText.textContent = givenCvC
        confirmButton.style.backgroundColor = btnBackgroundColor

    }

    if (givenCvC == '') {
        errorMsg2.textContent = "can't be blank"
        cvcField.style.borderColor = 'red'
        confirmButton.disabled = true;


    }
})

///////////////////////////////////////////////////////////
//  SCRIPT FOR CONFIRM BTN AND TO DISPLAY THANK YOU
confirmButton.addEventListener('click', function() {
    rightContainer.style.display = 'none'
    thankYouContainer.style.display = 'block'
})

continueBtn.addEventListener('click', function() {
    rightContainer.style.display = 'block'
    thankYouContainer.style.display = 'none'
})