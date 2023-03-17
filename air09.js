const args = process.argv;
var tabValeursSaisi = [];

//************************************ FONCTIONS
function recuperationDonneeSaisiOk(){

    for(let i = 2; i < args.length; i++){
        tabValeursSaisi.push(args[i]);
    }
}

function maRotation(tabValeursSaisi){
    let newTab = tabValeursSaisi;
    let val = newTab[0];

    for(let i = 0; i <newTab.length-1; i++){
        newTab[i] = newTab[i+1];
    }
    newTab[newTab.length-1] = val;
    
    return newTab;
}
//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 4){
        console.log("peut darguments !");
        return false;    
    }else{
        return true;
        }
}

//*************************************resolution + affichage 
if(gestionErrOk()){
    recuperationDonneeSaisiOk();
    console.log("Contenue avant rotation ");
    console.log("-> "+tabValeursSaisi);
    console.log("");
    console.log("Contenue apres rotation ");
    console.log("-> "+maRotation(tabValeursSaisi));
}