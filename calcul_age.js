document.addEventListener("DOMContentLoaded", function () {

    // Sélection des champs HTML
    let inputNom = document.getElementById("nom");           // champ nom
    let inputPrenom = document.getElementById("prenom");     // champ prénom
    let inputAnnee = document.getElementById("annee");        // champ année de naissance
    let inputAge = document.getElementById("age");             // champ âge
    let boutonValider = document.getElementById("boutonValider");  // bouton "Valider"
    let elementListCommunes = document.getElementById("listesCommune"); // champ liste des communes

    let elementClassCommune = document.getElementsByClassName("commune");
    console.log(elementClassCommune)

    console.log(elementListCommunes);// affichage de la liste des communes 

    let text = "";// variable text vide pour stocker les éléments à venir
    for (let i = 0; i < elementClassCommune.length; i++) {
        text += elementClassCommune[i].textContent + " " ;
    };
    console.log(text);

    
    let elementSection = document.createElement("Section");
    let elementBody = document.querySelector('body');

    elementBody.appendChild(elementSection);

    let nouveauTitre = document.createElement("h3");
    nouveauTitre.textContent = "Mon titre de la section"
    elementSection.appendChild(nouveauTitre);


    let elementSection2 = document.createElement('section2');
    elementBody.appendChild(elementSection2);
    
    let nouveauTitre2 = document.createElement("h3");
    nouveauTitre2.textContent = "Bonjour"
    elementSection2.appendChild(nouveauTitre2);

    
    /*document.getElementById("image").src = "images.jpg"*/
    /*
    let elementImage = document.createElement('img');
    elementImage.src = 'images.jpg';
    elementImage.setAttribute("alt","Mon écureuil");
    elementImage.className = "image écureuil";
    elementImage.classList.add("image","image3");*/

    // Fonction pour calculer l'âge en fonction de l'année de naissance
    function calculerAge() {
        let anneeDeNaissance = parseInt(inputAnnee.value);

        // Vérifie si l'année de naissance est un nombre
        if (!isNaN(anneeDeNaissance)) {
            let today = new Date();
            let anneeActuelle = today.getFullYear();

            // Calcul de l'âge
            let ageCalcul = anneeActuelle - anneeDeNaissance;

            // Affichage de l'âge dans l'input "age"
            inputAge.value = ageCalcul;
        } else {
            // Si l'année de naissance n'est pas valide
            inputAge.value = "";
        }
    }

    // Quand l’utilisateur écrit dans le champ "année de naissance", on calcule l'âge
    inputAnnee.addEventListener("input", function () {
        calculerAge();
    });

    // Quand l’utilisateur clique sur le bouton "Valider"
    boutonValider.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page (comportement par défaut du submit)

        // Récupération des valeurs saisies
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

            // Affichage des informations dans un message popup
            alert(`Vous avez  ${inputAge.value} ans`);
        } else {
            alert("Veuillez entrer une année de naissance valide !");
        }
        // Règles mineur / majeur
        if ( inputAge.value < 18) {
            alert(`${nom} ${prenom}, vous êtes mineur.`);
        } else {
            alert(`${nom} ${prenom}, vous êtes majeur.`);
        }
    });

});
