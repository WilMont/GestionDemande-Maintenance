const { Console } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var tabMontant = [];
var tabReduction = [];

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

    console.log(tabMontant)
    console.log(tabReduction)
}

function AfficherTableau () {
    console.log("╔═══════════╦═════════════╗\n" +
                "║  Montant  ║ % Reduction ║\n" +
                "╠═══════════╬═════════════╣");
    
    for(i = 0; i<tabMontant.length; i++){
        if(tabMontant[i].length == 5){
            console.log("║   " + tabMontant[i] + "   ║      " + tabReduction[i] + "     ║" )
        }
        else if(tabMontant[i].length == 4)
        {
            console.log("║   " + tabMontant[i] + "    ║      " + tabReduction[i] + "      ║" )

        }
    }

    console.log("╚═══════════╩═════════════╝")

}

InitialiserTableau();
AfficherTableau();