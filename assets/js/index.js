import loadDogHTML from './load-dogs.js';
import handleModal from './image-modal.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadDogHTML();
    handleModal();
  });
} else {
  loadDogHTML();
  handleModal();
}

// The following code implements lazy loading. When all dog elements have been created
// and appended to the DOM, their data-src attributes will be converted to src attributes
// only when they enter the viewport. It's important to listen for the dogsLoaded event
// rather than the usual DOMContentLoaded event, because the dog elements are being added
// dynamically and may not have been added to the DOM when the DOM itself is ready

document.addEventListener('dogsLoaded', () => {
  const images = document.querySelectorAll('[data-src]');
  createObserver(images);
}, false);

const createObserver = (images) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .02
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  images.forEach(image => {
    observer.observe(image);
  });
}

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const url = image.getAttribute('data-src');
      image.setAttribute('src', url);
      observer.unobserve(entry.target);
    }
  });
}
