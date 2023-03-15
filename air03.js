const args = process.argv;
var tabValeursSaisi = [];

//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 3){
        console.log("peut darguments !");
        return false;    
    }else{
        return true;
        }
}

//************************************ FONCTIONS
function recuperationDonneeSaisi(){

    for(let i = 2; i < args.length; i++){
        tabValeursSaisi.push(args[i]);
    }
}

function occurancetrouver(val,tabValeursSaisi){
    let cmp = 0;

    for(let i = 0; i < tabValeursSaisi.length; i++)
        if(tabValeursSaisi[i] === val)
            cmp++;
        
    return cmp;
}
function valeurNonPaire(tabValeursSaisi){

    let tabValNonPaire = [];

    for(let i = 0; i < tabValeursSaisi.length; i++){
        if(occurancetrouver(tabValeursSaisi[i],tabValeursSaisi) == 1)
            tabValNonPaire.push(tabValeursSaisi[i]);
    }

    return tabValNonPaire;
}

//*************************************** affichage
function affichageRes(tabValNonPaire){

    let tabVal = "";

    for(let i = 0; i < tabValNonPaire.length; i++)
        tabVal += tabValNonPaire[i] + " ";
    
    if(tabVal != "")
        console.log(tabVal);
    else
        console.log("Toutes les valeurs sont paire !");
        
}
//resolution + 
if(gestionErrOk()){
    recuperationDonneeSaisi();
    affichageRes(valeurNonPaire(tabValeursSaisi));
    
}