# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page


### Links

- Live Site URL: (https://chuksinteractivecard.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript



### What I learned

I learned how to make changes on an element dynamically on the website with Javascript. Also learned how to test an input value against a REGEX 

 see  code snippets, see below:


```const cardNumRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;


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
```


## Author

- X - [@Dev Chukwudi](https://twitter.com/Dev_Chukwudi?t=jU8OwwWreCRcVW_94FDYBA&s=09)



