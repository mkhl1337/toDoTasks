# 📝 Projet Todo-List

## 🎯 Objectif de l'Exercice

Vous devez compléter le code **JavaScript** pour rendre cette magnifique Todo-List **entièrement fonctionnelle** en utilisant les **concepts des événements JavaScript**.

---

## 🧱 Structure Fournie

Le **HTML** et **CSS** sont déjà complets — vous avez une belle interface avec :

- 🎨 Design moderne avec dégradés  
- ⚡ Animations CSS  
- 📱 Interface responsive  
- 🧩 Structure HTML prête  

👉 **Votre mission** : Écrire uniquement le JavaScript dans le fichier `script.js`

---

## 🚀 Tâches à Réaliser

### 1. Setup du Projet (Configuration GitHub)

**Adresse du repo GitHub :** [https://github.com/houssemRouabeh/toDoList.git](https://github.com/houssemRouabeh/toDoList.git)

#### Étapes :

1. Faites un **fork** du repo sur votre profil  
2. **Clonez** le repository sur votre machine  
3. **Créez une branche** avec votre nom  
4. Faites votre **premier commit** avec le message :  
   > "Initialisation du projet"  
5. **Demandez un pull request** après chaque commit  

---

### 2. Gestion du Formulaire d’Ajout

**Objectif :** Empêcher le rechargement de la page et ajouter une nouvelle tâche.

#### À faire :

- Intercepter l’événement de **soumission du formulaire**  
- **Empêcher le comportement par défaut**  
- Récupérer le texte saisi dans l’**input**  
- Ajouter la tâche **si le champ n’est pas vide**  
- **Vider le champ** après ajout  
- Faire un **commit** avec la fonctionnalité réalisée  

---

### 3. Ajout Dynamique des Tâches

**Objectif :** Créer et afficher les nouvelles tâches dans la liste.

#### À faire :

- Créer un élément `<li>` pour chaque nouvelle tâche  
- Ajouter la classe **`new-task`** pour l’animation  
- Supprimer le message **"Aucune tâche"** quand la liste n’est plus vide  
- Ajouter la tâche à la liste **`#liste-taches`**  
- Faire le **commit** avec la fonctionnalité réalisée  

---

### 4. Interactions avec les Tâches (Clic et Double-Clic)

**Objectif :** Gérer les actions de marquage et de suppression des tâches.

#### À faire :

- **Clic simple** → alterner entre *terminé / non terminé* (`.termine`)  
- **Double-clic** → supprimer définitivement la tâche  
- Utiliser la **délégation d’événements** sur `#liste-taches`  
- Réafficher le message **"Aucune tâche"** si la liste devient vide  
- Faire le **commit** avec la fonctionnalité réalisée  

---

### 5. Événements Clavier en Temps Réel

**Objectif :** Afficher la touche pressée par l’utilisateur.

#### À faire :

- Écouter les événements **`keydown`** sur le `document`  
- Afficher la touche pressée dans **`#touche-appuyee`**  
- Transformer les touches spéciales :
  - `' '` → `Espace`
  - `'Enter'` → `Entrée`
  - `'Escape'` → `Échap`
- Ajouter un **feedback visuel temporaire**  
- Faire le **commit** avec la fonctionnalité réalisée  

---

### 6. Statistiques et Compteurs

**Objectif :** Maintenir à jour les compteurs de tâches.

#### À faire :

- Compter le **nombre total de tâches**  
- Compter le **nombre de tâches terminées**  
- Mettre à jour l’affichage après chaque action (*ajout, suppression, marquage*)  
- Afficher les résultats dans :
  - `#total-taches`
  - `#taches-terminees`
- Faire le **commit** avec la fonctionnalité réalisée  

---

## ✅ Critères de Réussite

- Le formulaire ajoute des tâches **sans recharger la page**  
- Les tâches s’affichent avec une **animation fluide**  
- **Clic simple** → marque comme terminé  
- **Double-clic** → supprime la tâche  
- Les **touches clavier** s’affichent en temps réel  
- Les **statistiques** se mettent à jour automatiquement  
- La **délégation d’événements** est correctement utilisée  

---

👨‍💻 **Bon courage !**
