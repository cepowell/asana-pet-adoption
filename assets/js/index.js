import loadDogHTML from './load-dogs.js';
import handleModal from './image-modal.js';

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    loadDogHTML();
    handleModal();
  });
} else {
  loadDogHTML();
  handleModal();
}

document.addEventListener("dogsLoaded", event => {
  console.log('loaded');
  var images = document.querySelectorAll('[data-src]');
  createObserver(images);
}, false);

function createObserver(images) {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: .02
  };
  var observer = new IntersectionObserver(handleIntersect, options);
  images.forEach(function (image) {
    observer.observe(image);
  });

}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var image = entry.target;
      var url = image.getAttribute('data-src');
      image.setAttribute('src', url);
      observer.unobserve(entry.target);
    }
  });
}
