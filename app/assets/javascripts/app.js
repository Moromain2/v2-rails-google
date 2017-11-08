alert("Hello toi ;)")

//Affichage des éléments centraux

//Variable logo+barre de recherche
let elementsCentraux = document.getElementById('main');
//Variable bouton d'affichage
let boutonReveal = document.getElementById('btn-réveler');

//Fonction au clic sur le bouton
boutonReveal.onclick = function() {
  //changement de l'attribu de main & bouton
  elementsCentraux.style.display = 'block';
  boutonReveal.style.display = 'none';
}

//Barre de recherche

//Variable bouton de recherche
let boutonRecherche = document.getElementById('rech');

//Fonction au clic sur le bouton de recherche
boutonRecherche.onclick = function() {
  //Reprise des mots dans input
  let termes = document.getElementById('form_search').value;
  //Concatenation url google
  document.location.href="https://www.google.fr/#q=" + termes;
}

//Pop Up

//Variable fenêtre pop up
let popUp = document.getElementById('popup-bg');

//Fonction ouverture
  function openPopup() {
    popUp.style.display = 'block';
  }

//Fonction fermeture
function closePopUp() {
  popUp.style.display = 'none';
}
