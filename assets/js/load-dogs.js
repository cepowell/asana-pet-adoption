// This file contains code to control creating an HTML element for
// each dog in the dogs.json file and appending that element to the DOM

/**
 * Fetches data from assets/data/dogs.json
 * @param {function} callback - Function to execute when JSON successfully loaded
 */
const loadDogsFromJSON = (callback) => {
   var xobj = new XMLHttpRequest(); // because we're using vanilla JS, XML req required to get JSON data
   xobj.overrideMimeType('application/json');
   xobj.open('GET', 'assets/data/dogs.json', true);
   xobj.onreadystatechange = () => {
     if (xobj.readyState == 4 && xobj.status == '200') {
       callback(xobj.responseText);
     }
   };
   xobj.send(null);
}

/**
 * Creates an HTML element for each dog in dogs.json and appends a collection of elements to the DOM
 * @param {array} dogs - Array of dogs to be displayed on the page
 */
const createHTMLElements = (dogs) => {
  let frag = document.createDocumentFragment(); // use createDocumentFragment to avoid extra divs

  // for each dog in the array, create an <a> element that contains an <img> element
  // the image element's source will be the URL associated with the dog in the array
  dogs.map(dog => {
    const id = dogs.indexOf(dog);
    const dogMarkup = `
      <img alt="image of dog number ${id}" data-src=${dog.image}/>
    `;
    const wrapperElement = document.createElement('A');
    wrapperElement.setAttribute('id', `dog-image-${id}`);
    wrapperElement.innerHTML = dogMarkup;
    frag.appendChild(wrapperElement);
  });
  document.getElementById('dog-list').appendChild(frag); // add collection of elements to DOM

  let event = new Event('dogsLoaded'); // fire an event when all dog elements have been created and added
  document.dispatchEvent(event);

}

/**
 * Gets data from a JSON file and passes that data to createHTMLElements
 */
const loadDogHTML = () => {
  loadDogsFromJSON(response => {
    const jsonResponse = JSON.parse(response);
    const { dogs } = jsonResponse;
    createHTMLElements(dogs);
  });
}

export default loadDogHTML;
