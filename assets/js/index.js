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
