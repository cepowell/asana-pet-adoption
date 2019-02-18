let modal = document.querySelector(".fullscreen-image-modal");
let modalContent = document.querySelector(".fullscreen-image-modal-content");
let gallery = document.getElementById("gallery");

const openModal = (target) => {
  gallery.classList.add('modal-open');
  document.body.classList.add('stop-scroll');
  const modalImage = document.createElement("IMG");
  modalImage.setAttribute('src', target.getAttribute('src'));
  modalImage.setAttribute('alt', "Full size dog image");
  modalImage.setAttribute('id', 'modal-image');
  modalImage.setAttribute('class', 'modal-image');
  modal.classList.add('show-fullscreen-image-modal');
  modalContent.appendChild(modalImage);
}

const closeModal = () => {
  gallery.classList.remove('modal-open');
  document.body.classList.remove('stop-scroll');
  modal.classList.remove('show-fullscreen-image-modal');
  const currentImage = document.getElementById("modal-image");
  modalContent.removeChild(currentImage);
}

const handleModal = () => {
  document.body.addEventListener("click", e => {
    e.stopPropagation();
    if (modal.classList.contains('show-fullscreen-image-modal')) {
      closeModal();
    } else {
      if (e.target.tagName === 'IMG') {
        openModal(e.target);
      }
    }
  });

  document.body.addEventListener("keydown", e => {
    e.stopPropagation();
    if (e.which === 27 && modal.classList.contains('show-fullscreen-image-modal')) {
      closeModal();
    }
  });
}

export default handleModal;
