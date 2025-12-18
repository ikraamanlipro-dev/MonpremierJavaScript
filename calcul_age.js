document.addEventListener("DOMContentLoaded", function () {

    // Sélection des champs HTML et des éléments d'interface utilisateur
    let inputNom = document.getElementById("nom");           // champ nom
    let inputPrenom = document.getElementById("prenom");     // champ prénom
    let inputAnnee = document.getElementById("annee");       // champ année de naissance
    let inputAge = document.getElementById("age");           // champ âge
    let boutonValider = document.getElementById("boutonValider");  // bouton "Valider"
    let elementListCommunes = document.getElementById("listesCommunes"); // champ liste des communes
    // Sélection des radios pour la situation
    let radioEtudiant = document.getElementById("etudiant");
    let radioSalarie = document.getElementById("salarie");
    let divSituationAffichee = document.getElementById("situationAffichee");
    let situationTexte = document.getElementById("situationTexte");

    // Sélection de tous les éléments de classe "commune"
    let elementClassCommune = document.getElementsByClassName("commune");
    console.log(elementClassCommune);  // Affichage des éléments avec la classe "commune"

    // Affichage de la liste des communes
    console.log(elementListCommunes);

    // Création d'une variable texte vide pour stocker les communes
    let text = "";
    // Parcours de tous les éléments "commune" et ajout de leur texte dans la variable "text"
    for (let i = 0; i < elementClassCommune.length; i++) {
        text += elementClassCommune[i].textContent + " ";
    };
    console.log(text);  // Affichage de la liste des communes sous forme de chaîne de caractères

    // Création d'une nouvelle section dans le document
    let elementSection = document.createElement("Section");
    let elementBody = document.querySelector('body');
    elementBody.appendChild(elementSection);  // Ajout de la section au corps de la page

    // Création et ajout d'un titre à la section
    let nouveauTitre = document.createElement("h3");
    nouveauTitre.textContent = "Mon titre de la section";
    elementSection.appendChild(nouveauTitre);

    // Création d'une autre section
    let elementSection2 = document.createElement('section2');
    elementBody.appendChild(elementSection2);
    
    // Création et ajout d'un titre à cette deuxième section
    let nouveauTitre2 = document.createElement("h3");
    nouveauTitre2.textContent = "Bonjour";
    elementSection2.appendChild(nouveauTitre2);

    /*
    Code commenté pour insérer une image, mais actuellement non utilisé
    let elementImage = document.createElement('img');
    elementImage.src = 'images.jpg';
    elementImage.setAttribute("alt", "Mon écureuil");
    elementImage.className = "image écureuil";
    elementImage.classList.add("image", "image3");
    */

    /*
    Code commenté pour afficher la date du jour et son format
    let elementSpanDateDuJour = document.querySelector("#dateDuJour");
    let elementSpanDateDuJourFormat2 = document.querySelector("#DateDuJourFormat2");
    
    const maDate = Date();
    const elementBoutonValiderDate = document.querySelector("#validerDate");
    
    elementBoutonValiderDate.addEventListener("click", function () {
        console.log("### Je suis dans le bouton valider date .");

        // Affiche la date dans les éléments correspondants
        elementSpanDateDuJour.innerHTML = maDate;
        elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();
    });
    */

    // Gestion de l'événement keydown sur un bouton avec la classe "boutonFleche"
    let elementBoutonFleche = document.querySelector("#boutonFleche");
    elementBoutonFleche.addEventListener("keydown", (event) => {
        console.log("Je suis dans l'événement keydown");
        console.log("clé event ", event.key);  // Affichage de la touche enfoncée
    });

    // Fonction pour calculer l'âge à partir de l'année de naissance
    function calculerAge() {
        let anneeDeNaissance = parseInt(inputAnnee.value);

        // Vérifie si l'année de naissance est un nombre
        if (!isNaN(anneeDeNaissance)) {
            let today = new Date();
            let anneeActuelle = today.getFullYear();

            // Calcul de l'âge
            let ageCalcul = anneeActuelle - anneeDeNaissance;

            // Affichage de l'âge dans le champ "age"
            inputAge.value = ageCalcul;
        } else {
            // Si l'année de naissance n'est pas valide, on vide le champ "age"
            inputAge.value = "";
        }
    }

    // Quand l’utilisateur entre une année de naissance, on déclenche le calcul de l'âge
    inputAnnee.addEventListener("input", function () {
        calculerAge();
    });

    // Fonction pour afficher la situation
    function afficherSituation() {
        if (radioEtudiant.checked) {
            situationTexte.textContent = "Votre situation : Étudiant";
        } else if (radioSalarie.checked) {
            situationTexte.textContent = "Votre situation : Salarié";
        } else {
            situationTexte.textContent = "Votre situation : Non spécifiée";
        }
    }

    // Quand l’utilisateur change de sélection pour la situation
    radioEtudiant.addEventListener("change", afficherSituation);
    radioSalarie.addEventListener("change", afficherSituation);

    // Quand l’utilisateur clique sur le bouton "Valider"
    boutonValider.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page par défaut

        // Récupération des valeurs saisies par l'utilisateur
        let nom = inputNom.value;
        let prenom = inputPrenom.value;
        let anneeDeNaissance = parseInt(inputAnnee.value);

        // Vérifie si l'année de naissance est valide
        if (!isNaN(anneeDeNaissance)) {
            // Affichage des informations dans la console
            console.log(`Nom : ${nom}`);
            console.log(`Prénom : ${prenom}`);
            console.log(`Année de naissance : ${anneeDeNaissance}`);
            console.log(`Âge : ${inputAge.value}`);

            // Affichage des informations dans une fenêtre pop-up
            alert(`Vous avez  ${inputAge.value} ans\n${situationTexte.textContent}`);
        } else {
            alert("Veuillez entrer une année de naissance valide !");
        }

        // Vérifie si la personne est mineure ou majeure et affiche un message
        if (inputAge.value < 18) {
            alert(`${nom} ${prenom}, vous êtes mineur.`);
        } else {
            alert(`${nom} ${prenom}, vous êtes majeur.`);
        }
    });

});
