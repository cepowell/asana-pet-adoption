const loadDogsFromJSON = (callback) => {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', 'assets/data/dogs.json', true);
   xobj.onreadystatechange = function () {
     if (xobj.readyState == 4 && xobj.status == "200") {
       callback(xobj.responseText);
     }
   };
   xobj.send(null);
}

const createHTMLElements = (dogs) => {
  let frag = document.createDocumentFragment();
  dogs.map(dog => {
    const id = dogs.indexOf(dog);
    const dogMarkup = `
      <img alt="image of dog number ${id}" data-src=${dog.image}/>
    `;
    const wrapperElement = document.createElement("A");
    wrapperElement.setAttribute("id", `dog-image-${id}`);
    wrapperElement.innerHTML = dogMarkup;
    frag.appendChild(wrapperElement);
  });
  document.getElementById('dog-list').appendChild(frag);
  let event = new Event('dogsLoaded');
  document.dispatchEvent(event);

}

const loadDogHTML = () => {
  loadDogsFromJSON(response => {
    const jsonResponse = JSON.parse(response);
    const { dogs } = jsonResponse;
    createHTMLElements(dogs);
  });
}

export default loadDogHTML;
