let pays = "";
selectPays = document.querySelector("select");
affichageVille = document.querySelector("div");

const getPays = async function () {
    let response = await fetch('cities');
    // data va me donner toutes les données
    let data = await response.json();
    // console.log(data);
    // création tableau vide en prévision du include
    let paysUneFois = [];

    data.forEach(ville => {
        // pour éviter doublon pays
        if (!paysUneFois.includes(ville.countrycode.name)) {
            paysUneFois.push(ville.countrycode.name);
        }

    });
    paysUneFois.sort()
    paysUneFois.forEach(pays => {
        let selectOption = document.createElement("option");
        selectPays.appendChild(selectOption);
        selectOption.value = pays;
        selectOption.innerHTML += pays;
    })

    selectPays.addEventListener('change', affiche);
    function affiche() {
        affichageVille.innerHTML = "";
        data.forEach(ville => {
            // lancer le if sur le selectPays pas sur le selectOption
            if (selectPays.value == ville.countrycode.name) {
                // pour afficher les villes en colonne, les mettre dans des <p>
                let villeColonne = document.createElement("p");
                affichageVille.appendChild(villeColonne);
                villeColonne.innerHTML += ville.name;
                console.log(villeColonne);
            }
        });
    }
}
getPays();