let anneeDeNaissance = 2000;
let annee = 2025;

let ageCalcul = annee - anneeDeNaissance;

console.log(ageCalcul);

let dateNaissance = new Date(1995); // exemple
let today = new Date();
let age = today.getFullYear() - dateNaissance.getFullYear();

console.log("La personne à :" + age)