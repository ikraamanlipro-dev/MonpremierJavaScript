// gestion d'une bibliothèque

let totalLivres = 500;// déclare la variable totalLivres avec une valeur de 500 livres
console.log(totalLivres);

totalLivres+= 50;//Puis on ajoute 50 livres
console.log(totalLivres);

totalLivres-= 10;// Ensuite on retire 10 livres
console.log(totalLivres);

totalLivres+= 5;// Pour finir on rerajoute 5 livre 
console.log(totalLivres);


let affichageTotalLivres = "La bibliothèque contient ";
affichageTotalLivres += totalLivres;
affichageTotalLivres+= " livres au total";

console.log(affichageTotalLivres);

let joueurprofessionel = {
    Nom:	"Zinédine Yazid Zidane",
    Nationalité:	["Française", "Algérienne"],
    NatSportive:	"Française",
    Naissance:	"23 juin 1972 (53 ans)",
    villeNaissance : "Marseille (France)",
    Taille	: 1.85 ,
    PériodePro	: 1988-2006,
    Poste:	"Milieu offensif",
    PiedFort:	"Droit"
};

console.log(joueurprofessionel)

console.log(joueurprofessionel.Nom)
console.log(joueurprofessionel.Nationalité)
