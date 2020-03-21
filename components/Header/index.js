// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector(".header-container");

function Header() {

    // create elements
    const headerContainer = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    // add structure
    headerContainer.appendChild(headerDate)
    headerContainer.appendChild(headerTitle)
    headerContainer.appendChild(headerTemp)


    // add style
    headerContainer.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')


    // add content
    headerDate.textContent = "MARCH 28, 2019"
    headerTitle.textContent = "Lambda Times"
    headerTemp.textContent = "98°"

    return headerContainer

}

// const entryPoint = document.querySelector('.header-container')
// container.appendChild(header())
// console.log(header())


const myHead = Header();
console.log(myHead);
container.appendChild(myHead);