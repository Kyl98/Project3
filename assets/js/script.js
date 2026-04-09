// Récupère le manga sélectionné dans l'URL
function getMangaFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("manga");
}

fetch("manga.json")
  .then(response => response.json())
  .then(data => {
    const mangaID = getMangaFromURL();
    if (!mangaID || !data[mangaID]) {
      console.error("Manga non trouvé dans le JSON !");
      return;
    }

    const manga = data[mangaID];

    // Remplissage des infos principales
    document.querySelector(".product-info h2").textContent = manga.titre;
    document.querySelector(".product-info .genre").textContent = "Genre : " + manga.genre;
    document.querySelector(".product-info .price").textContent = manga.prix;
    document.querySelector(".details-block p").innerHTML =
      "<strong>" + manga.titre + "</strong> " + manga.description;

    // Détails produit
    const detailsList = document.querySelectorAll(".details-block ul li");
    detailsList[0].textContent = "Auteur : " + manga.details.auteur;
    detailsList[1].textContent = "Illustrateur : " + manga.details.illustrateur;
    detailsList[2].textContent = "Éditeur : " + manga.details.editeur;
    detailsList[3].textContent = "Nombre de tomes disponibles : " + manga.details.tomes;
    detailsList[4].textContent = "Statut : " + manga.details.statut;

    // Image principale
    const mainImg = document.querySelector(".main-image img");
    mainImg.src = manga.images.principale;
    mainImg.alt = manga.titre;

    // Miniatures
    const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
    thumbnails.forEach((img, index) => {
      if (manga.images.miniatures[index]) {
        img.src = manga.images.miniatures[index];
        img.alt = manga.titre + " mini" + (index + 1);
      }
    });

  })
  .catch(error => console.error("Erreur de chargement du JSON :", error));
