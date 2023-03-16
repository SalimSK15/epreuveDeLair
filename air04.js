const args = process.argv;
var tabValeursSaisi = args[2];
var tabValeursSeparer = [];

//************************************ FONCTIONS
function supprimerLettreIdentique(chaine){
    let newChaine = "";

    for(let i = 0; i < chaine.length; i++){
        if(chaine[i] != chaine[i+1]){
            newChaine += chaine[i];
        }
    }

    return newChaine;
}

//*********************************** gestion d'erreurs
function gestionErrOk(){
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

//*************************************resolution + affichage 
if(gestionErrOk()){

    console.log(supprimerLettreIdentique(tabValeursSaisi));
}
