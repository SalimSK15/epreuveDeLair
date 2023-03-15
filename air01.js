const args = process.argv;
const string_separateur = args[3];
var string_a_couper = args[2];
var tabValeursSeparer = [];

//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 4){
        console.log("peut darguments !");
        return false;    
    }else{
        if(args.length > 4){
            console.log("trop dargument !");
            return false;
        }else{
            return true;
        }
    }
}

//************************************ FONCTIONS

function ma_fonction(string_a_couper, string_separateur){
    let element = "";
    let j = 0;
    let separateur = " ";

    //,
    for(let i = 0; i <= string_a_couper.length; i++){
        if(string_a_couper[i] === separateur || i == string_a_couper.length){
            tabValeursSeparer[j] = element;
            j += 1;
            element = "";

        }else{
            element += string_a_couper[i];

        }
    }
    if(tabValeursSeparer[0] == separateur ){
        tabValeursSeparer.shift();
    }
    if(tabValeursSeparer[tabValeursSeparer.length-1] == separateur){
        tabValeursSeparer.pop();
    }
    //
    for(let i = 0; i < tabValeursSeparer.length; i++){
        if(tabValeursSeparer[i] == string_separateur){
            tabValeursSeparer[i] = "";
        }    
    }
}

//********************************** affchage;
function affichageRes(tabValeursSeparer){
    let chaine = "";
    let i;

    for(i = 0; i < tabValeursSeparer.length; i++)
        if(tabValeursSeparer[i] != ""){
            chaine += tabValeursSeparer[i] + " ";
        }else{
            console.log(chaine);
            chaine = "";
        }
      
    if(i == tabValeursSeparer.length){
        console.log(chaine);
    }
    
}

//resolution
if(gestionErrOk()){
    ma_fonction(string_a_couper,string_separateur);    
    affichageRes(tabValeursSeparer);
}