
//******************************************************* Les fonction utilisees
//******************************* onction qui execute un fichier air00.js ..... air12.js et retourne le resultat 
function executionExo(nomFichier,argument,tabResltat){
    
    let R = execSync(`node ${nomFichier} ${argument}`);
    tabResltat.push(R.toString('utf-8'));
    //console.log(tabResltat);
}
function affichageResultats(nomFichier,tabResltat){
    
    log(chalk.bgCyan("****************************  "+chalk.bgCyanBright.bold(nomFichier)+"  ******************************"));
    console.log(chalk.bgWhite());

    switch (nomFichier) {
        case "air00.js":        
            if(tabResltat[0] == "Tizi\nCanada\n"){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == "trop dargument !\n"){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == "salim\n"){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air01.js":
            if(tabResltat[0] == 'Crevette magique dans \nmer des etoiles \n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'lepreuve \nlair \n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'quitter le programme \ncas de problemes \n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air02.js":
            if(tabResltat[0] == 'je teste des trucs trucs\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'je*test*des*truc\n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'peut darguments !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air03.js":
            if(tabResltat[0] == '5 \n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'monsieur \n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'peut darguments !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air04.js":
            if(tabResltat[0] == 'Helo milady, bien ou quoi ?\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'je test ca marche !\n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'peut darguments !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air05.js":
            if(tabResltat[0] == '3 4 5 6 7 \n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == '5 6 7 15 \n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'Erreur manque la valeur (+XX)\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air06.js":
            if(tabResltat[0] == 'michel\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'michel, therese, benoit\n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'air\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air07.js":
            if(tabResltat[0] == 'list De depart -> 1,3,4\nListe apres le trie -> 1 2 3 4\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'list De depart -> 10,20,30,40,50,60,70,90\n' + 'Liste apres le trie -> 10 20 30 33 40 50 60 70 90\n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'peut darguments !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air08.js":
            if(tabResltat[0] == 'list De depart -> 10,20,30\n' +
            'list De depart -> 15,25,35\n' +
            'Liste apres le trie -> 10 15 20 25 30\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == "Erreur vous devez saisir 2 tableaux d'entiers tries !\n"){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'list De depart -> 1,5,7,9\n' +
            'list De depart -> 2,4,6,10\n' +
            'Liste apres le trie -> 1 2 4 5 6 7 9\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air09.js":
            if(tabResltat[0] == 'Contenue avant rotation \n' +
            '-> Michel,Albert,Therese,Benoit\n' +
            '\n' +
            'Contenue apres rotation \n' +
            '-> Albert,Therese,Benoit,Michel\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == 'Contenue avant rotation \n' +
            '-> Algerie,Canada,France,USA\n' +
            '\n' +
            'Contenue apres rotation \n' +
            '-> Canada,France,USA,Algerie\n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'peut darguments !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break
        case "air10.js":
            if(tabResltat[0] == 'Je danse le mia\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == "peut d'arguments !\n"){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == "Erreur: le ficher n'existe pas !\n"){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air11.js":
            if(tabResltat[0] == '     O\n    OOO\n   OOOOO\n  OOOOOOO\n OOOOOOOOO\n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == "peut d'arguments !\n"){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == 'Erreur : (S) -> argument non valide !\n'){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
        case "air12.js":
            if(tabResltat[0] == '1 2 3 4 5 6 \n'){
                log(chalk.bgGray.bold(nomFichier+" (1/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (1/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[1] == '1 3 5 5 7 9 \n'){
                log(chalk.bgGray.bold(nomFichier+" (2/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (2/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }

            if(tabResltat[2] == "peut d'argumets \nVeuillez saisir une liste de nombres !\n"){
                log(chalk.bgGray.bold(nomFichier+" (3/3)")+" : "+chalk.green.italic.bold("SUCCESS"));
                resltSuccess++;
            }else {
                log(chalk.bgGrey.bold(nomFichier+" (3/3)")+" : "+chalk.redBright.italic.bold("FAILURE"));
                resltFailure++;
            }
            break;
    
        default:
            break;
    }
}
function resultatFinal(resltSuccess,resltFailure){

    console.log("");
    log(chalk.bgWhite.black.bold("**********************  Total Success : ("+resltSuccess+"/39) ("+Math.trunc((resltSuccess*100)/39)+" %) *****************"));
    log(chalk.bgWhite.black.bold("**********************  "+chalk.red("Total Failure")+" : ("+resltFailure+"/39)       *****************"));
}

const {execSync} = require('child_process');
const chalk = require('chalk');
const log = console.log;

var node = "/home/salim/.nvm/versions/node/v18.14.2/bin/node";
let resltSuccess = 0;
let resltFailure = 0;
var nomFichier = ["air00.js","air01.js","air02.js","air03.js","air04.js","air05.js","air06.js","air07.js","air08.js","air09.js","air10.js","air11.js","air12.js"];
var resultatAir00 = [], resultatAir01 = [], resultatAir02 = [], resultatAir03 = [], resultatAir04 = [], resultatAir05 = [], resultatAir06 = [];
var resultatAir07 = [], resultatAir08 = [], resultatAir09 = [], resultatAir10 = [], resultatAir11 = [], resultatAir12 = [];


// *************************************** test air00


var argumentAir00_1 = '"Tizi Canada"';
var argumentAir00_2 = "algerie Canada";
var argumentAir00_3 = "salim";
executionExo(nomFichier[0],argumentAir00_1,resultatAir00);
executionExo(nomFichier[0],argumentAir00_2,resultatAir00);
executionExo(nomFichier[0],argumentAir00_3,resultatAir00);
affichageResultats(nomFichier[0],resultatAir00);

// ************************************ test air01
var argumentAir01_1 = '"Crevette magique dans la mer des etoiles" "la"';
var argumentAir01_2 = '"lepreuve de lair" "de"';
var argumentAir01_3 = '"quitter le programme en cas de problemes" "en"';
executionExo(nomFichier[1],argumentAir01_1,resultatAir01);
executionExo(nomFichier[1],argumentAir01_2,resultatAir01);
executionExo(nomFichier[1],argumentAir01_3,resultatAir01);
affichageResultats(nomFichier[1],resultatAir01);

// ************************************ test air02
var argumentAir02_1 = '"je" "teste" "des" "trucs" " "';
var argumentAir02_2 = 'je test des truc "*"';
var argumentAir02_3 = "";
executionExo(nomFichier[2],argumentAir02_1,resultatAir02);
executionExo(nomFichier[2],argumentAir02_2,resultatAir02);
executionExo(nomFichier[2],argumentAir02_3,resultatAir02);
affichageResultats(nomFichier[2],resultatAir02);

// ************************************ test air03
var argumentAir03_1 = '1 2 3 4 5 4 3 2 1';
var argumentAir03_2 = 'bonjour monsieur bonjour';
var argumentAir03_3 = '';
executionExo(nomFichier[3],argumentAir03_1,resultatAir03);
executionExo(nomFichier[3],argumentAir03_2,resultatAir03);
executionExo(nomFichier[3],argumentAir03_3,resultatAir03);
affichageResultats(nomFichier[3],resultatAir03);

// ************************************ test air04
var argumentAir04_1 = '"Hello milady,  bien ou quoi ??"';
var argumentAir04_2 = '"je tesst    caa marche !!"';
var argumentAir04_3 = ' ';
executionExo(nomFichier[4],argumentAir04_1,resultatAir04);
executionExo(nomFichier[4],argumentAir04_2,resultatAir04);
executionExo(nomFichier[4],argumentAir04_3,resultatAir04);
affichageResultats(nomFichier[4],resultatAir04);

// ************************************ test air05
var argumentAir05_1 = '1 2 3 4 5 "+2"';
var argumentAir05_2 = '10 11 12 20 "-5"'
var argumentAir05_3 = '10 "+"';
executionExo(nomFichier[5],argumentAir05_1,resultatAir05);
executionExo(nomFichier[5],argumentAir05_2,resultatAir05);
executionExo(nomFichier[5],argumentAir05_3,resultatAir05);
affichageResultats(nomFichier[5],resultatAir05);

// ************************************ test air06
var argumentAir06_1 = '"michel" "albert" "therese" "benoit" "t"';
var argumentAir06_2 = '"michel" "albert" "therese" "benoit" "a"';
var argumentAir06_3 = '"air00" "air01" "air02" "air03" "air04" "air"';
executionExo(nomFichier[6],argumentAir06_1,resultatAir06);
executionExo(nomFichier[6],argumentAir06_2,resultatAir06);
executionExo(nomFichier[6],argumentAir06_3,resultatAir06);
affichageResultats(nomFichier[6],resultatAir06);

// ************************************ test air07
var argumentAir07_1 = '1 3 4 2';
var argumentAir07_2 = '10 20 30 40 50 60 70 90 33';
var argumentAir07_3 = '10';
executionExo(nomFichier[7],argumentAir07_1,resultatAir07);
executionExo(nomFichier[7],argumentAir07_2,resultatAir07);
executionExo(nomFichier[7],argumentAir07_3,resultatAir07);
affichageResultats(nomFichier[7],resultatAir07);

// ************************************ test air08
var argumentAir08_1 = '10 20 30 fusion 15 25 35';
var argumentAir08_2 = '10 20 30 15 25 35';
var argumentAir08_3 = '1 5 7 9 fusion 2 4 6 10';
executionExo(nomFichier[8],argumentAir08_1,resultatAir08);
executionExo(nomFichier[8],argumentAir08_2,resultatAir08);
executionExo(nomFichier[8],argumentAir08_3,resultatAir08);
affichageResultats(nomFichier[8],resultatAir08);

// ************************************ test air09
var argumentAir09_1 = 'Michel Albert Therese Benoit';
var argumentAir09_2 = 'Algerie Canada France USA';
var argumentAir09_3 = 'javascript';
executionExo(nomFichier[9],argumentAir09_1,resultatAir09);
executionExo(nomFichier[9],argumentAir09_2,resultatAir09);
executionExo(nomFichier[9],argumentAir09_3,resultatAir09);
affichageResultats(nomFichier[9],resultatAir09);

// ************************************ test air10
var argumentAir10_1 = 'test.js';
var argumentAir10_2 = '';
var argumentAir10_3 = 'tst.txt';
executionExo(nomFichier[10],argumentAir10_1,resultatAir10);
executionExo(nomFichier[10],argumentAir10_2,resultatAir10);
executionExo(nomFichier[10],argumentAir10_3,resultatAir10);
affichageResultats(nomFichier[10],resultatAir10);

// ************************************ test air11
var argumentAir11_1 = 'O 5';
var argumentAir11_2 = 'O'
var argumentAir11_3 = 'S S';
executionExo(nomFichier[11],argumentAir11_1,resultatAir11);
executionExo(nomFichier[11],argumentAir11_2,resultatAir11);
executionExo(nomFichier[11],argumentAir11_3,resultatAir11);
affichageResultats(nomFichier[11],resultatAir11);

// ************************************ test air12
var argumentAir12_1 = '6 5 4 3 2 1';
var argumentAir12_2 = '1 5 9 7 5 3';
var argumentAir12_3 = '3';
executionExo(nomFichier[12],argumentAir12_1,resultatAir12);
executionExo(nomFichier[12],argumentAir12_2,resultatAir12);
executionExo(nomFichier[12],argumentAir12_3,resultatAir12);
affichageResultats(nomFichier[12],resultatAir12);

//************************************************** affichage du resoltat final */
resultatFinal(resltSuccess,resltFailure);