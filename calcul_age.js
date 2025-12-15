document.addEventListener("DOMContentLoaded", function () {

    // Sélection des champs HTML
    let inputNom = document.getElementById("nom");           // champ nom
    let inputPrenom = document.getElementById("prenom");     // champ prénom
    let inputAnnee = document.getElementById("annee");        // champ année de naissance
    let inputAge = document.getElementById("age");             // champ âge
    let boutonValider = document.getElementById("valider");  // bouton "Valider"

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
    });

});
