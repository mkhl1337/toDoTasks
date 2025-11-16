document.getElementById('tache').focus();


// script.js - À COMPLÉTER

// ============================================================================
// 1. GESTION DU FORMULAIRE D'AJOUT
// ============================================================================

// TODO: Sélectionner le formulaire par son ID
const formTasks=document.getElementById('form-tache');
// TODO: Ajouter un écouteur d'événement 'submit'
formTasks.addEventListener('submit', event => {

event.preventDefault();

const taskInput = document.getElementById('tache');

const testInput = taskInput.value.trim();

if (testInput==='') {alert('le champ ne doit pas etre vide !')} else { ajouterTache(testInput); taskInput.value=''; taskInput.placeholder="✏️ Entrez une nouvelle tâche...";}

});
// TODO: Empêcher le comportement par défaut du formulaire
// TODO: Récupérer la valeur de l'input #tache
// TODO: Si le champ n'est pas vide, appeler ajouterTache()
// TODO: Vider le champ input après ajout

// ============================================================================
// 2. FONCTION D'AJOUT D'UNE TÂCHE
// ============================================================================

function ajouterTache(texte) {
  
  document.querySelector('.empty-message').textContent=''

  const nvLi = document.createElement('li');
  nvLi.textContent=texte;
  nvLi.classList.add('new-task');

  setTimeout(() => {nvLi.classList.remove('new-task')},600)
  const taskList=document.getElementById('liste-taches');
  taskList.appendChild(nvLi);
  mettreAJourStats();
  
  // TODO: Supprimer le message "Aucune tâche" s'il existe
  // TODO: Créer un nouvel élément <li>
  // TODO: Ajouter le texte de la tâche
  // TODO: Ajouter la classe 'new-task' pour l'animation
  // TODO: Ajouter l'élément à la liste #liste-taches
  // TODO: Appeler mettreAJourStats() pour mettre à jour les compteurs
}

// ============================================================================
// 3. INTERACTIONS AVEC LES TÂCHES (DÉLÉGATION D'ÉVÉNEMENTS)
// ============================================================================
const maListe = document.getElementById('liste-taches');
maListe.addEventListener('click', e=> {

if (e.target.tagName==='LI')
{
  e.target.classList.toggle('termine');

mettreAJourStats();
}
});

// TODO: Sélectionner la liste des tâches
// TODO: Ajouter un écouteur pour les clics simples (marquer comme terminé)
// TODO: Dans le gestionnaire, vérifier si on clique sur un <li>
// TODO: Alterner la classe 'termine' sur l'élément cliqué
// TODO: Appeler mettreAJourStats()
maListe.addEventListener('dblclick', e=> {

if (e.target.tagName==='LI'){

  const removeTaskConfirm = confirm(`Voulez-vous vraiment supprimer supprimer ${e.target.textContent}`);

if (!removeTaskConfirm) return;

e.target.remove()

 if (maListe.querySelectorAll('li').length===0) { document.querySelector('.empty-message').textContent='Aucune tâche pour le moment. Ajoutez-en une !';}
mettreAJourStats()
}
})
// TODO: Ajouter un écouteur pour les double-clics (suppression)
// TODO: Dans le gestionnaire, vérifier si on double-clique sur un <li>
// TODO: Supprimer l'élément cliqué
// TODO: Si la liste est vide, réafficher le message "Aucune tâche"
// TODO: Appeler mettreAJourStats()

// ============================================================================
// 4. ÉVÉNEMENTS CLAVIER EN TEMPS RÉEL
// ============================================================================
document.addEventListener('keydown',e=> {
  const keyDisplay = document.getElementById("touche-appuyee");
  let keyText=''
switch (e.key){

  case " ":
    keyText = "ESPACE";
    break;


  case "Enter":
    keyText = "ENTRÉE";
    // Pour la partie submit de task lorsque j'appuie sur Entrer
    const noSpace = taskInput.value.trim();
    if (noSpace !== "") {
      ajouterTache(noSpace);
      taskInput.value = "";
      taskInput.placeholder="✏️ Entrez une nouvelle tâche...";
    }
    break;


  case "Escape":
    keyText = "ÉCHAP";
    break;


  default:
    keyText = e.key;




}

keyDisplay.textContent=`⌨️ Touche pressée : ${keyText}`;
keyDisplay.classList.add('nvStyle');
setTimeout(()=>{

  keyDisplay.classList.remove('nvStyle');},300);




});
// TODO: Ajouter un écouteur 'keydown' sur le document
// TODO: Récupérer le nom de la touche (event.key)
// TODO: Transformer les touches spéciales (Espace, Entrée, Échap)
// TODO: Mettre à jour le contenu de #touche-appuyee
// TODO: Changer le style temporairement pour le feedback visuel
// TODO: Remettre le style original après 300ms

// ============================================================================
// 5. FONCTION DE MISE À JOUR DES STATISTIQUES
// ============================================================================

function mettreAJourStats() {

  const toutesLesTaches = document.getElementById('liste-taches');

  let totalTasks = localStorage.getItem('totalTasks');
  let termineTasks = localStorage.getItem('termineTasks');

  
  if (totalTasks===null || termineTasks===null){

    totalTasks = toutesLesTaches.querySelectorAll('li').length;
    termineTasks=toutesLesTaches.querySelectorAll('li.termine').length
    localStorage.setItem('totalTasks',totalTasks);
    localStorage.setItem('termineTasks',termineTasks);
  }
  

  
  document.getElementById('total-taches').textContent=`Total: ${totalTasks} tâche(s)`; 
  
  document.getElementById('taches-terminees').textContent=`Terminées: ${termineTasks}`;

  // TODO: Compter le nombre total de tâches (<li> dans #liste-taches)
  // TODO: Compter le nombre de tâches terminées (avec classe 'termine')
  // TODO: Mettre à jour le texte de #total-taches
  // TODO: Mettre à jour le texte de #taches-terminees
}

// ============================================================================
// BONUS (FACULTATIF)
// ============================================================================

// TODO: Focus automatique sur le champ de saisie au chargement
// TODO: Permettre l'ajout avec la touche Entrée (en dehors du formulaire)
// TODO: Ajouter une confirmation avant suppression
// TODO: Sauvegarder les tâches dans le localStorage