const args = process.argv;
var string_separateur;
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

    string_separateur = args[args.length-1];

    for(let i = 2; i < args.length-1; i++){
        tabValeursSaisi.push(args[i]);
    }
}

function ma_fonction(tabValeursSaisi, string_separateur){
    
    let tabDeChaine = "";

    for(let i = 0; i < tabValeursSaisi.length; i++){
        tabDeChaine += tabValeursSaisi[i]+string_separateur;
        if(i+1 == tabValeursSaisi.length)
            tabDeChaine += "";

    }
    
    return tabDeChaine;
}

//resolution + affichage
if(gestionErrOk()){
    recuperationDonneeSaisi();
    console.log(ma_fonction(tabValeursSaisi,string_separateur));
    
}