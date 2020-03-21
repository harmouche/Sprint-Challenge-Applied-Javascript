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

const content = document.querySelector('.cards-container')

//axios APIs


    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(s =>{
        console.log(s.data.articles)
        const news = s.data.articles
            for(info in news) {
                news[info].forEach(article => content.appendChild(createArticle(article)))
            }
    
    })
    .catch(error =>
        console.log(error))

 function createArticle(article){
    const card = document.createElement('div')
    const title = document.createElement('div')
    const writer = document.createElement('div')
    const iBox = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')

     card.classList.add('card')
    title.classList.add('headline')
    writer.classList.add('author')
    iBox.classList.add('img-container')
    image.src = article.authorPhoto
    span.textContent = `By ${article.authorName}`
    title.textContent = article.headline

     card.appendChild(title)
    card.appendChild(writer)
    card.appendChild(span)
    writer.appendChild(iBox)
    iBox.appendChild(image)

     return card;
}    
    
