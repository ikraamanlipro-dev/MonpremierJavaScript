// Déclare l'année de naissance
let anneeDeNaissance = 2000;

// Déclare l'année courante (ici fixée manuellement)
let annee = 2025;

// Calcule l'âge en faisant simplement la différence
let ageCalcul = annee - anneeDeNaissance;

// Affiche le résultat dans la console
console.log(ageCalcul);

// Crée une date de naissance à partir de l'année 1995
let dateNaissance = new Date(1995);

// Récupère la date actuelle
let today = new Date();

// Calcule l'âge basé uniquement sur la différence des années
let age = today.getFullYear() - dateNaissance.getFullYear();

// Affiche l'âge
console.log("La personne a : " + age);
