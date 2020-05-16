// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function newCardMaker(data){


	// Elements
    const newCard = document.createElement("div");
    const header = document.createElement("div");
    const author = document.createElement("div")
    const imageContainer = document.createElement("div");
    const newImg = document.createElement("img");
    const newAuthor = document.createElement("span");
  
  
      //text content
    header.textContent = data.headline;
    newAuthor.textContent = data.authorName;
    newImg.src = data.authorPhoto;
      
      //classes
    newCard.classList.add("card");
    header.classList.add("headline");
    imageContainer.classList.add("img-container");
    author.classList.add('author');

  
  
  
  

    newCard.appendChild(header);
    newCard.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(newImg);
    author.appendChild(newAuthor)

    return newCard
   

}
const newEntry = document.querySelector('.cards-container')


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    for (let key in response.data.articles) {
      console.log(key);
      for (let i = 0; i < response.data.articles[key].length; i++) {
        // Do whatever you need to
        const newCard = newCardMaker(response.data.articles[key][i]);
        console.log(response.data.articles[key][i]);
        newEntry.appendChild(newCard);
      }
    }
  })
  .catch(err => {
    console.log(err);
  });