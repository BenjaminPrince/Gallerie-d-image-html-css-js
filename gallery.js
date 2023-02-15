// Attente du chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Récupération de la galerie
  const gallery = document.querySelector('.gallery');

  // Récupération des images
  const images = gallery.querySelectorAll('img');

  // Ajout d'un écouteur d'événements pour chaque image
  images.forEach(image => {
    image.addEventListener('click', () => {
      // Création de la fenêtre modale
      const modal = document.createElement('div');
      modal.classList.add('modal');

      // Création de l'image agrandie
      const modalImg = document.createElement('img');
      modalImg.src = image.src.replace('.jpg', '-large.jpg');

      // Ajout de l'image agrandie à la fenêtre modale
      modal.appendChild(modalImg);

      // Ajout de la fenêtre modale au DOM
      document.body.appendChild(modal);

      // Ajout d'un écouteur d'événements pour fermer la fenêtre modale
      modal.addEventListener('click', () => {
        modal.remove();
      });
    });
  });

  // Ajout d'un intervalle pour faire défiler les images automatiquement
  let currentImageIndex = 0;

  setInterval(() => {
    // Suppression de la classe active de l'image courante
    images[currentImageIndex].classList.remove('active');

    // Passage à l'image suivante
    currentImageIndex++;

    // Si on est arrivé à la dernière image, retour à la première
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    // Ajout de la classe active à l'image suivante
    images[currentImageIndex].classList.add('active');
  }, 3500); 
});

