import loadDogHTML from './load-dogs.js';
import handleLightbox from './lightbox.js';

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    loadDogHTML();
    handleLightbox();
  });
} else {
  loadDogHTML();
  handleLightbox();
}
