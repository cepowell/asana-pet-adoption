// This file contains code to control opening and closing the full-size image modal

let modal = document.querySelector(".fullscreen-image-modal");
let modalContent = document.querySelector(".fullscreen-image-modal-content");
let gallery = document.getElementById("gallery");

/**
 * Launches the full-sized image modal after a user clicks a thumbnail
 * @param {Object} target - The image the user clicked to launch the modal
 */
const openModal = (target) => {
  gallery.classList.add('modal-open'); // dims background
  document.body.classList.add('stop-scroll');  // prevents background scroll
  const modalImage = document.createElement('IMG'); // creates a new image node
  modalImage.setAttribute('src', target.getAttribute('src')); // with the same source as event target
  modalImage.setAttribute('alt', 'Full size dog image');
  modalImage.setAttribute('id', 'modal-image');
  modalImage.setAttribute('class', 'modal-image');
  modal.classList.add('show-fullscreen-image-modal'); // makes modal visible
  modalContent.appendChild(modalImage); // adds the new image to the modal
}

/**
 * Closes the full-sized image modal after a user clicks anywhere on the page or hits escape
 */
const closeModal = () => {
  gallery.classList.remove('modal-open');
  document.body.classList.remove('stop-scroll');
  modal.classList.remove('show-fullscreen-image-modal');
  const currentImage = document.getElementById("modal-image");
  modalContent.removeChild(currentImage); // removes the image from the modal
}

/**
 * Registers user input and opens or closes modal as appropriate
 */
const handleModal = () => {
  // a click on an image opens the modal, a click anywhere on the page when the modal is open closes the modal
  document.body.addEventListener('click', e => {
    e.stopPropagation();
    if (modal.classList.contains('show-fullscreen-image-modal')) {
      closeModal();
    } else {
      if (e.target.tagName === 'IMG') {
        openModal(e.target);
      }
    }
  });

  // accessibility feature: hitting the escape key when the modal is open closes the modal
  document.body.addEventListener('keydown', e => {
    e.stopPropagation();
    if (e.which === 27 && modal.classList.contains('show-fullscreen-image-modal')) {
      closeModal();
    }
  });
}

export default handleModal;
