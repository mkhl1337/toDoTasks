// script.js - À COMPLÉTER

// ============================================================================
// 1. GESTION DU FORMULAIRE D'AJOUT
// ============================================================================

// TODO: Sélectionner le formulaire par son ID
// TODO: Ajouter un écouteur d'événement 'submit'
// TODO: Empêcher le comportement par défaut du formulaire
// TODO: Récupérer la valeur de l'input #tache
// TODO: Si le champ n'est pas vide, appeler ajouterTache()
// TODO: Vider le champ input après ajout

// ============================================================================
// 2. FONCTION D'AJOUT D'UNE TÂCHE
// ============================================================================

function ajouterTache(texte) {
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

// TODO: Sélectionner la liste des tâches
// TODO: Ajouter un écouteur pour les clics simples (marquer comme terminé)
// TODO: Dans le gestionnaire, vérifier si on clique sur un <li>
// TODO: Alterner la classe 'termine' sur l'élément cliqué
// TODO: Appeler mettreAJourStats()

// TODO: Ajouter un écouteur pour les double-clics (suppression)
// TODO: Dans le gestionnaire, vérifier si on double-clique sur un <li>
// TODO: Supprimer l'élément cliqué
// TODO: Si la liste est vide, réafficher le message "Aucune tâche"
// TODO: Appeler mettreAJourStats()

// ============================================================================
// 4. ÉVÉNEMENTS CLAVIER EN TEMPS RÉEL
// ============================================================================

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
