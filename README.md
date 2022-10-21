# Frontend Mentor - Interactive rating component solution

This is my solution to the password generator challenge on frontend mentor.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Deployment](#deployment)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options ✅
- Copy the generated password to the computer's clipboard ✅
- See a strength rating for their generated password ✅
- View the optimal layout for the interface depending on their device's screen size ✅
- See hover and focus states for all interactive elements on the page ✅

### Screenshot

![](/public/password-generator.png)

### Links

- Live Site URL: [here](https://password-generator-seven-theta.vercel.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Setting the dynamic backgrounds depending on password strength was quite tricky to implement. However, I solved the problem like this.

```js
const [strengthLevel, setStrengthLevel] = useState([
  false,
  false,
  false,
  false,
]); // initialize an array of 4 booleans

useEffect(() => {
  checkStrength();
}, [strength]); // Run the checkStrength function each time strength changes

const checkStrength = () => {
  // Mutate the array depending on strength
  if (strength === "WEAK") {
    setStrengthLevel([true, false, false, false]);
  } else if (strength === "MEDIUM") {
    setStrengthLevel([true, true, false, false]);
  } else if (strength === "STRONG") {
    setStrengthLevel([true, true, true, false]);
  } else if (strength === "VERY STRONG") {
    setStrengthLevel([true, true, true, true]);
  }
};

const barElements = strengthLevel.map((level, index) => {
  return <Bar key={index} fillCell={level} />;
}); // Pass the boolean value as props to the component

const Bar = styled.div`
  // Fill the background of the bar if fillCell prop is true
  height: 100%;
  width: 0.6rem;
  background-color: ${({ fillCell }) => (fillCell ? "#41f246" : "transparent")};
  border: solid 2px ${({ fillCell }) => (fillCell ? "#41f246" : "white")};
`;
```

### Deployment

The app is deployed using [Vercel](https://vercel.com/)

### Useful resources

- [rc-slider example](https://www.cluemediator.com/slider-component-in-react) - I used this to learn how to use the rc slider package.
- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [Kiprop David](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
