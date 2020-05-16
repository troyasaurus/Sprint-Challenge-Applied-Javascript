// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //Elements
 
    const newHeader = document.createElement('div');
    const date =  document.createElement('span');
    const headerText =  document.createElement('h1');
    const temp =  document.createElement('span');

    //text content
    date.textContent = 'MARCH 28, 2019';
    headerText.textContent = 'Lambda Times';
    temp.textContent = '98°';


    //classes
    newHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    newHeader.appendChild(date);
    newHeader.appendChild(headerText);
    newHeader.appendChild(temp);

    return newHeader;
}

const headerSelection = document.querySelector('.header-container');
headerSelection.appendChild(Header())
