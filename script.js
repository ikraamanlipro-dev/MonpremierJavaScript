// Ici , je rédige mon script JavaScript

let nom  = "Burns";
let prenom = "David";
/*let age = 35;*/
                
const pi = 3.14 ;
const Nbfractioner = 1/3;
const Nbnegatif = -509;
                
/*console.log("Bonjour je m'appelle",prenom , nom,"j'ai",age,"ans .");*/
                
console.log("Pi est égale à ",pi);
console.log("Le résultat de 1/3 équivaut",Nbfractioner);
console.log(Nbnegatif,"est un nombre négatif");

let salutation = "Bonjour les gens";
let greeting = 'Good morning';
let andabu = `kwezi`;

let commune = "M'tsamboro";
let village = 'M\'tsahara';

console.log(salutation);
console.log(greeting);
console.log(andabu);

console.log(andabu ,"je suis dans la commune de",commune , "dans le village de", village);

                
let vrai = true;
let est_faux = false;

console.log(vrai);
console.log(est_faux);

                
let eleves = ["Said","Amina","Bao"];//Je déclare un liste d'éleve
                
console.log(eleves[0]); //récupère Said
console.log(eleves[1]); //Récupère Amina
console.log(eleves[2]); //Récupère Bao
console.log(eleves); // j'appel la variable qui permet de récuperé tout les éléments de la liste eleves

                
let diplome = [true , 10 , "Daniel"];// Je déclare une nouvelle liste nommer diplome qui contient plusieur élément de différente type de variable

console.log(diplome);
console.log(diplome[0]);// On récupère la première élément de la liste 
console.log(diplome[1]);// On récupère la seconde élément de la liste

                
let client = {// Déclaration d'une variable objet dans la quelle je stockes des informations
        nom:"Bacar",
        village:"Chirongui",
        age:27,
        scores:[7,3,1]
};

console.log(client);

console.log(client.nom); // récupére Bacar qui se trouve dans l'objet
console.log(client.village); // récupére Chirongui qui se trouve dans l'objet
console.log(client.age); // récupére 27 qui se trouve dans l'objet
console.log(client.scores); // récuprére les élémenents de la liste qui se trouve dans l'objet
console.log(client.scores[1]); // récuprére l'élémenent qui est à position 1 qui est dans la liste qui se trouve dans l'objet

