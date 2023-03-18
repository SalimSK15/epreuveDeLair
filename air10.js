var fs = require('fs');
const args = process.argv;
var nomFichier = args[2];


//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 3){
        console.log("peut d'arguments !");
        return false;    
    }else{
        if(args.length > 3){
            console.log("trop d'arguments !");
            return false;
        }
        return true;
        }
}    

//************************************* resolution
if(gestionErrOk()){
    let contenu = fs.readFile(nomFichier, (erreur,data) =>{
        if(erreur) console.log("Erreur: le ficher n'existe pas !");
        else{
            let contenu = ""+data+"";
            console.log(contenu);
        }
    })
}
