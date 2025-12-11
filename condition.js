let nombreFruit = 19 ;

// Déclaration d'une condition
// J'affiche l'alerte SI le nombre de fruit est égale à 18
if(nombreFruit == 18) {  // ON fait une compararaison strict
    alert("Vous avez atteint 18 fruits."); // Fontion alert
}; 

console.log(nombreFruit);
/*
let noteEleve = 10;
if (noteEleve >= 10){
    alert("Vous êtes admis avec une note de " + noteEleve);
};

console.log(noteEleve);

let age3 = 16;
if (age3 >= 18){
    alert("Vous pouvez regarder Rambo");
}else{
    alert("vous pouvez regarder Le Roi Lion");
};

console.log(age3);
*/

/*######### BOUCLE  #####################3*/

console.log("Partie boucle ");


const voiture = ["BMW", "Porsche", "Mercedes", "M'claren", "Lamborghini", "Audi"]; 

/*   
*exp1 définit une variable avant le début de la boucle (soit i = 0).

*exp2 définit la condition pour que la boucle s’exécute (i doit être inférieure à la taille de ma list).

*exp3 augmente d’une valeur (i++) à chaque exécution du bloc de code.
*/

let text = "";
for (let i = 0; i < voiture.length; i++) {
  text += voiture[i] ;
};

console.log(text);
console.log(voiture)


let text2 = "";
/*La boucle while s'execute comme la boucle for mais s'arrête dès que la 
* condition est remplie
*/
/*
let u = 0;
while (u <= 30) {
  text2 += "On est à " + u + " " ;
  u++;
};

console.log(text2);


let compteRebour = 30;
while(a >= 0){
    compteRebour -= a +" ";
    a++;
};

console.log(compteRebour)*/