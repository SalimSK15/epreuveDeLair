const args = process.argv;
var string_a_couper = args[2];
var tabValeursSeparer = [];
const string_separateur = " ";

//************************************ FONCTIONS

//recuperer les donnees saisie
/*
function recupererDonneeSaisi(){
    tabValeurs = args[2];

    for(let i = 2; i < args.length; i++){

    }
}
*/
function ma_fonction(string_a_couper, string_separateur){
    let element = "";
    let j = 0;
    
    for(let i = 0; i <= string_a_couper.length; i++){
        if(string_a_couper[i] === string_separateur || i == string_a_couper.length){
            tabValeursSeparer[j] = element;
            j += 1;
            element = "";

        }else{
            element += string_a_couper[i];

        }
    }
    if(tabValeursSeparer[0] == "" ){
        tabValeursSeparer.shift();
    }
    if(tabValeursSeparer[tabValeursSeparer.length-1] == ""){
        tabValeursSeparer.pop();
    }
}
//*********************************** gestion d'erreurs
function gestionErr(){
    if(args.length < 3){
        console.log("peut darguments !");
        return false;    
    }else{
        if(args.length > 3){
            console.log("trop dargument !");
            return false;
        }else{
            return true;
        }
    }
}

//********************************** affchage;
function affichageRes(tabValeursSeparer){
    for(let i = 0; i < tabValeursSeparer.length; i++)
        console.log(tabValeursSeparer[i]);
        
}

//resolution
if(gestionErr()){
    ma_fonction(string_a_couper,string_separateur);
    affichageRes(tabValeursSeparer);
}