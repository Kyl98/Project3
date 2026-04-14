// ================================================================================================================================================
// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE /// CATALOGUE ///
// ================================================================================================================================================


// PAGINATION
  const cardsPerPage = 16; // Nombre de mangas par page
  const cards = Array.from(document.querySelectorAll('.card-catalogue'));
  const pageButtons = document.querySelectorAll('.page-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function showPage(page) {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    // Calcul des index de début et de fin
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    // Afficher/Masquer les cartes
    cards.forEach((card, index) => {
      card.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    // Mise à jour de l'apparence des boutons
    pageButtons.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.innerText) === currentPage);
    });

    // Gérer l'état des flèches
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);
  }

  // Événements sur les numéros
  pageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(parseInt(btn.innerText));
    });
  });

  // Événements sur les flèches
  prevBtn.addEventListener('click', () => showPage(currentPage - 1));
  nextBtn.addEventListener('click', () => showPage(currentPage + 1));

  // Initialisation au chargement
  showPage(1);


  // ==============================================================================================
  // 
  // ==============================================================================================

// Image Principale
function openZoom(src) {
    const imgZoom = document.getElementById('img-zoom');
    imgZoom.src = src;
    imgZoom.classList.remove('zoomed'); // On réinitialise le zoom à l'ouverture
    document.getElementById('lightbox').style.display = "block";
}

function closeZoom() {
    document.getElementById('lightbox').style.display = "none";
}

function toggleImageZoom(event) {
    // 1. Empêche la fermeture de la lightbox (on ne prévient pas le fond noir)
    event.stopPropagation();
    
    // 2. Ajoute ou retire la classe de zoom
    const img = event.target;
    img.classList.toggle('zoomed');
}


// Images en minatures sur la ligne de défilement
  function changeImage(src) {
    document.getElementById('main-img').src = src;
  }