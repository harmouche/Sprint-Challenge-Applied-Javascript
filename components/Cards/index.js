// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



const newArticle = (Object) => {

    // create elements
    const card = domain.createElement('div')
    const cardHeadLine = domain.createElement('div')
    const cardAuthor = domain.createElement('div')
    const cardImgContainer = domain.createElement('div')
    const cardImg = domain.createElement('img')
    const cardByAuthor = domain.createElement('span')


    // add structure
    card.appendChild(cardHeadLine, cardAuthor)
    cardAuthor.appendChild(cardImgContainer, cardByAuthor)
    cardImgContainer.appendChild(cardImgContainer)

    // add content
    cardHeadLine.textContent = 'object.cardHeadLine'
    cardImg.src = 'object.authorPhoto'
    cardAuthor.textContent = 'object.authorName'
    cardByAuthor.textContent = `By ${object.authorName}`
    



    return card

}

//axios APIs

function lambdaTimes() {
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(respone =>{
    console.log(response)

})
.catch(error => {
    console.log(error)
})
}
console.log(lambdaTimes())
console.log('test')

