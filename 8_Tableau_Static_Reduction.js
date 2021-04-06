const { Console } = require('console');
var test = require('unit.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var tabMontant = [];
var tabReduction = [];

//TesterMethode();
function InitialiserTableau (){
    tabMontant.push("1000");
    tabMontant.push("5000");
    tabMontant.push("7000");
    tabMontant.push("10000");
    tabMontant.push("50000");

    tabReduction.push("3");
    tabReduction.push("5");
    tabReduction.push("7");
    tabReduction.push("10");
    tabReduction.push("15");
}

function AfficherTableauReduction () {
    InitialiserTableau();
    var affichage;
    affichage += "╔═══════════╦═════════════╗\n" +
    "║  Montant  ║ % Reduction ║\n" +
    "╠═══════════╬═════════════╣"

    console.log("╔═══════════╦═════════════╗\n" +
                "║  Montant  ║ % Reduction ║\n" +
                "╠═══════════╬═════════════╣");
    
    for(i = 0; i<tabMontant.length; i++){
        if(tabMontant[i].length == 5){
            affichage += "║   " + tabMontant[i] + "   ║      " + tabReduction[i] + "     ║"
            console.log("║   " + tabMontant[i] + "   ║      " + tabReduction[i] + "     ║" )
        }
        else if(tabMontant[i].length == 4)
        {
            affichage += "║   " + tabMontant[i] + "    ║      " + tabReduction[i] + "      ║"
            console.log("║   " + tabMontant[i] + "    ║      " + tabReduction[i] + "      ║" )

        }
    }
affichage += "╚═══════════╩═════════════╝"
    console.log("╚═══════════╩═════════════╝")

    return affichage;

}
// function TesterMethode () {
//     test.assert(AfficherTableauReduction(), "╔═══════════╦═════════════╗\n║  Montant  ║ % Reduction ║\n╠═══════════╬═════════════╣\n║   1000    ║      3      ║\n║   5000    ║      5      ║\n║   7000    ║      7      ║\n║   10000   ║      10     ║\n║   50000   ║      15     ║\n╚═══════════╩═════════════╝")
// }

module.exports = {AfficherTableauReduction};