// Ici je viens coder les opérateurs

console.log("+");//Addittion
console.log("-");//Soustraction
console.log("*");//Multiplication
console.log("/");//Division

//Addittion
let prixUnitaire = 13;
let valeurAjouter = 7;
let prixAdditionel1 = 3 + 7;//Première méthode d'addition
let prixAdditionel2 = prixUnitaire + valeurAjouter;// Deuxième méthode d'addition 

console.log("prixAdditionnel1: égale",prixAdditionel1);
console.log("prixAdditionnel12: égale",prixAdditionel2);

// Additionner des chaîne de caractère 
// Exemple : "Fatima" + "Samira" ; résultat attendu est " Fatima Samira"
let eleve1 = "Fatima";
let eleve2 = "Samira";

// Je fais une concaténation de 2 variables en ajoutant une chaine de caractère avec un espace à l'intérieur 
console.log(eleve1 +" "+ eleve2);

let eleveCombo = (eleve1 +" "+ eleve2);

console.log(eleveCombo);

console.log("eleveCombo : ", eleveCombo);

/*
######## Soustraction #########
*/

let valeurReduit = 5;
let prixReduit = prixUnitaire - valeurReduit;

console.log("prixReduit : ", prixReduit);

/*
######## Multiplication #########
*/

PrixMultiplie = prixUnitaire * valeurAjouter ;

console.log("prixMultiplie : ",PrixMultiplie);

/*
######## Division #########
*/
let valeurDivision = 4;
let prixDivise  = prixUnitaire / valeurDivision ; 

console.log("prixDivision : ", prixDivise);



/*
######## Opérateur de comparaison  #########
*/

/*
* On va comparer les valeurs stocker dans les variables 
*/

console.log("### Section Comparaison");

let vill = "Mamoudzou";
let commu = "Mamoudzou";

console.log(vill === commu);



let a = 12;
let distanceParcourue = 5;

console.log(a > distanceParcourue);
console.log(a < distanceParcourue);

console.log(a = distanceParcourue);

console.log(vill != commu);// On veut vérifier si la commune est différente du village
console.log(commu !== commu);// On veut vérifier si la commune est strictement différente du village 