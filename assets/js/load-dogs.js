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

const loadDogHTML = () => {
  loadDogsFromJSON(response => {
    const jsonResponse = JSON.parse(response);
    const { dogs } = jsonResponse;
    let frag = document.createDocumentFragment();
    dogs.map(dog => {
      const id = dogs.indexOf(dog);
      const dogMarkup = `
        <img alt="image of dog number ${id}" src=${dog.image} />
      `;
      const wrapperElement = document.createElement("A");
      wrapperElement.setAttribute("id", `dog-image-${id}`);
      wrapperElement.innerHTML = dogMarkup;
      frag.appendChild(wrapperElement);
    });
    document.getElementById('dog-list').appendChild(frag);
  });
}

export default loadDogHTML;
