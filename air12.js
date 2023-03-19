// recupeation d'arguments
const args = process.argv;
var tabValeurEntree = [];

//fonctions 
function recupeValeursSaisie(args){
    for(let i = 2; i < args.length; i++){
        if(siNumerique(args[i]))
            tabValeurEntree.push(parseInt(args[i]));
        else {
            console.log("Erreur veuillez saisir une liste de nombre !");
            return false;
        }
    }
    return true;
}
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function echange(val1, val2){
    let tabVal = [];
    let val;

    val = val1;
    val1 = val2;
    val2 = val;
    tabVal.push(val1);
    tabVal.push(val2);

    return tabVal;
}

//fonction qui cherche l'indice min d'un caractere dans un tableau
function chercheIndexMinCaractere(pos,tab){
    let minIndece = pos;
        
    for(let i = pos+1; i < tab.length; i++){
        if(tab[minIndece] > tab[i]){
            minIndece = i;
        }
    }
    return minIndece;
}
function permuter(val1, val2){
    let tabVal = [];
    let val;

    val = val1;
    val1 = val2;
    val2 = val;
    tabVal.push(val1);
    tabVal.push(val2);

    return tabVal;
}
function partitionner(array,D,F){
    let new_array = [];
    let c = D;

    for(let i = D+1; i < F; i++){
        if(array[i] < array[D]){
            c++;
            new_array = permuter(array[i],array[c]);
            array[i] = new_array[0];
            array[c] = new_array[1];
        }
    }
    new_array = permuter(array[c],array[D]);
    array[c] = new_array[0];
    array[D] = new_array[1];

    return c;
}
function myQuickSort(array,D,F){        
    let pivot;

    if(D < F){
        pivot = partitionner(array,D,F);
        myQuickSort(array,D,pivot);        
        myQuickSort(array,pivot+1,F);
    }
   
    return array;
}
function afficheResultat (tabVal){
    let tabNewVal = "";

    for(let i = 0; i < tabVal.length; i++){
        tabNewVal += tabVal[i]+" ";     
    }
    return tabNewVal;
}
//gestion d'erreurs
function gestionErreur(args){
    if(args.length < 4){
        console.log("peut d'argumets ");
        console.log("Veuillez saisir une liste de nombres !");
        return false;    
    }
    return true;
}

//resolution + affichage
if(gestionErreur(args)){
    if(recupeValeursSaisie(args)){
        console.log(afficheResultat(myQuickSort(tabValeurEntree,0,tabValeurEntree.length)));
    }
}
    