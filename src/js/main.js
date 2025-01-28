var research = document.querySelector(".form-input");
var researchButton = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

function clickForm() {
  var text = research.value;
  articles.forEach(function (article) {
    if (article.textContent.includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

researchButton.addEventListener("click", clickForm);

// articles.forEach(function (clickForm) {
//   console.log(articles.innerText);
// });

// if (articles.innerText.includes(research)) {
//   console.log("bien ouej");
// }

// -----------------

// let research = document.querySelector(".form-input");
// const search = document.querySelector(".form-button");
// const articles = document.querySelectorAll(".articles-item");

// clickForm = () => {
//   search.classList.toggle("is-active");
// };

// search.addEventListener("click", clickForm);

// articles.forEach((articles) => {
//   let content = articles.textContent.includes(Text).toLowerCase();
// });

// search.addEventListener("click", () => {
//   let researchtext = research.value.toLowerCase();
//   if (researchtext === content) {
//     art;
//   }
// });

// --------------

// Déclaration des variables
// var research = document.querySelector(".form-input"); // Input, change à chaque recherche
// var search = document.querySelector(".form-button"); // Bouton de recherche
// var articles = document.querySelectorAll(".article-item"); // Articles

// // Formatage du texte des articles
// articles.forEach((article) => {
//   // ici on parcourt chaque article
//   let content = article.textContent.includes(text).toLowerCase(); // On récupère le contenu de chaque article et on le met en minuscule
// });

// search.addEventListener("click", () => {
//   // On écoute le click sur le bouton de recherche
//   let researchText = research.value.toLowerCase(); // On récupère la valeur de l'input et on la met en minuscule
//   if (researchText === content) {
//     // Si la recherche correspond à un article
//     articles.forEach((article) => {
//       article.style.display = "block"; // On affiche l'article
//     });

//     search.classList.add("is-active"); // On ajoute la classe is-active au bouton de recherche
//   } else if (researchText != content) {
//     // Si la recherche ne correspond à aucun article
//     articles.forEach((article) => {
//       article.style.display = "none"; // On cache l'article
//     });
//   } else return; // Sinon on ne fait rien et on sort de la fonction

//   researchText.innerHTML(""); // On vide l'input après la recherche

//   setTimeout(() => {
//     search.classList.remove("is-active"); // On retire la classe is-active après 1 seconde
//   }, 1000);
// });
