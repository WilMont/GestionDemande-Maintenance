const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

tabCodesPays = ["FR", "EN", "DE", "US"];
tabPourcentagesTVA = [20,]

console.log(
    "╔═══════════╦═══════╗\n" +
    "║ Code Pays ║ % TVA ║\n" +
    "╠═══════════╬═══════╣\n"
);
for (i = 0; i < tabCodesPays.length+1; i++) {
    console.log(
        "║     " + tabCodesPays[i] + "    ║  " + tabPourcentagesTVA[i] + "%  ║ \n"
    );
}
console.log("╚═══════════╩═══════╝");

readline.question('Entrez votre code pays: ', codePays => {
    readline.close();
    console.log(
        "╔═══════════╦═══════╗\n" +
        "║ Code Pays ║ % TVA ║\n" +
        "╠═══════════╬═══════╣\n" +
        "║     " + codePays + "    ║  " + pourcentageTVA + "%  ║ \n" +
        "╚═══════════╩═══════╝");
});




