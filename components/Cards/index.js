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
function newCardMaker(){


	// Elements
    const newCard = document.createElement("div");
    const header = document.createElement("div");
    const imageContainer = document.createElement("div");
    const newImg = document.createElement("img");
    const newAuthor = document.createElement("span");
  
  
      //text content
    header.textContent = "headline";
    newAuthor.textContent = "authorName";
    newImg.src = "imgSrc";
      
      //classes
    newCard.classList.add("card");
    header.classList.add("headline");
    imageContainer.classList.add("img-container");
  
  
  
  

    newCard.appendChild(header);
    newCard.appendChild(imageContainer);
    newCard.appendChild(newImg);
    newCard.appendChild(newAuthor);


    return newCard
   

}

.catch(err => {
    console.log(err);
});