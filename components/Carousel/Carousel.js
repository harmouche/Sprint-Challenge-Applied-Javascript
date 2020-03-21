/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// const content = document.querySelector('.carousel-container')

function newCarousel() {
// create elements
const carousel = document.createElement('div')
const leftBtn = document.createElement('div')
const imgMountain = document.createElement('img')
const imgComputer = document.createElement('img')
const imgTrees = document.createElement('img')
const imgTurntable = document.createElement('img')
const rightBtn = document.createElement('div')


// add structure
carousel.appendChild(leftBtn)
carousel.appendChild(imgMountain)
carousel.appendChild(imgComputer)
carousel.appendChild(imgTrees)
carousel.appendChild(imgTurntable)
carousel.appendChild(rightBtn)

// add style
carousel.classList.add('carousel')
leftBtn.classList.add('left-button')
rightBtn.classList.add('right-button')

// add content
imgMountain.src = "./assets/carousel/mountains.jpeg"
imgComputer.src = "./assets/carousel/computer.jpeg"
imgTrees.src = "./assets/carousel/trees.jpeg" 
imgTurntable.src = "./assets/carousel/turntable.jpeg"

return carousel
}

let carousel = document.querySelectorAll(".carousel");
console.log(carousel);
carousel.forEach(element => new newCarousel(element));
