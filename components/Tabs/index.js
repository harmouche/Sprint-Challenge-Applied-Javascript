// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const news = document.querySelector(".topics");



    axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then(s => {
        console.log("response", s.data.topics)
        const subject = s.data.topics
        subject.forEach(term => {
            iteration(term)            
        });
    })

    .catch(error => {
        console.log(error)
    })

    function iteration(arr) {
        const item = document.createElement('div')
        item.classList.add('tab')
        item.textContent = arr

        news.appendChild(item)  

        return item

    }


