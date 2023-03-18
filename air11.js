const args = process.argv;
var tabValeursSaisi1;
var tabValeursSaisi2;


//************************************ FONCTIONS
function siNumerique(val){
    
    return /^-?\d+$/.test(val);
}
function recuperationDonneeSaisiOk(){

    tabValeursSaisi1 = args[2];

    if(siNumerique(args[3]))
        tabValeursSaisi2 = parseInt(args[3]);
    else{
        console.log("Erreur : ("+args[3]+") -> "+"argument non valide !");
        return false;
    }
    return true;
}
function ajouterEspace(inc){
    let espace = "";

    for(let i = 0; i <= inc; i++){
        espace += " ";
    }
    return espace;
}
function pyramide(){
    let chaine = "";
    let cmp = 1;
    let indc = tabValeursSaisi2;

    for(let i = 0; i < tabValeursSaisi2; i++){
        j = 0;
        while (j < cmp) {
            chaine += tabValeursSaisi1;
            j++;
        }
        indc--;
        console.log(ajouterEspace(indc)+chaine);
        chaine = "";
        cmp += 2;
    }    
}
//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 4){
        console.log("peut d'arguments !");
        return false;    
    }else{
        if(args.length > 4){
            console.log("trop d'arguments !");
            return false;
        }
        return true;
        }
}

//************************************* resolution
if(gestionErrOk()){
    if(recuperationDonneeSaisiOk())
        pyramide();
}


