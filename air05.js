const args = process.argv;
var tabValeursSaisi = [];
var operation;
var valOperation;

//************************************ FONCTIONS

function siNumerique(val){
    
    return /^-?\d+$/.test(val);
}

function recuperationDonneeSaisiOk(){

    operation = args[args.length-1];

    for(let i = 2; i < args.length-1; i++){
        if(siNumerique(args[i]))
            tabValeursSaisi.push(parseInt(args[i]));
        else{
            console.log("Erreur Veuillez entrer des chiffre numerique !");
            return false;
        }
    }
    return true;
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

//************************************** parsing
function traitementOperationOk(){
    let val = "";

    if(operation[0] != "+" && operation[0] != "-"){
        console.log("operation inconnu ("+operation[0]+")");
        return false;
    }else{
        if(operation.length < 2){
            console.log("Erreur manque la valeur ("+operation[0]+"XX)");
            return false;
        }else{
            for(let i = 1; i < operation.length; i++){
                val += operation[i];
            }
            valOperation = parseInt(val);
            if(!siNumerique(valOperation)){
                console.log("Erreur veuillez saisir un nombre svp -> ("+val+")!");
                return false;
            }else
                return true;
        }
    }
}

function calcule(){
    let tabValeursCalcule = "";

    for(let i = 0; i < tabValeursSaisi.length; i++){
        tabValeursCalcule += tabValeursSaisi[i]+Math.trunc(operation)+" ";
    }

    return  tabValeursCalcule;
}

//*************************************resolution + affichage 
if(gestionErrOk()){
    if(recuperationDonneeSaisiOk()){
        if(traitementOperationOk()){
            console.log(calcule());
        }
    }
}