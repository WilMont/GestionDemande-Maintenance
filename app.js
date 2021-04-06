const TableauPaysTVA = require('./TableauPaysTVA');
const Saisie_TTC_TVA = require('./Saisie_TTC_TVA')
const TableauReduction = require('./8_Tableau_Static_Reduction.js');

console.log(TableauPaysTVA.afficherTableauPaysTVA());
TableauReduction.AfficherTableauReduction();
Saisie_TTC_TVA.Saisie_TCC_TVA();