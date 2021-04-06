const prompt = require('prompt-sync')();
function Saisie_TCC_TVA() {

    // var TCC=prompt("Entrer le montant de TCC :")
    // var TVA=prompt("Entrer le montant de TVA :")

    var montantHT = prompt('Entrez le montant H.T total: ');
    var montantTVA = prompt('Entrez le montant de la TVA: ');
    var montantTTC = parseInt(montantHT) + parseInt(montantTVA);
    console.log('Montant TTC: ' + montantTTC);

}

module.exports = { Saisie_TCC_TVA }