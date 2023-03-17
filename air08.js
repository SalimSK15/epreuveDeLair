const args = process.argv;
var tabValeursSaisi1 = [];
var tabValeursSaisi2 = [];
var fusion = "FUSION";

//************************************ FONCTIONS
function siNumerique(val){
    
    return /^-?\d+$/.test(val);
}
function recuperationDonneeSaisiOk(){

    let separateur = false;

    for(let i = 2; i < args.length; i++){
        if(siNumerique(args[i]) && !separateur){
            tabValeursSaisi1.push(parseInt(args[i]));
        }else{
            if(args[i].toUpperCase() === fusion){
                separateur = true;
            }else{
                if(siNumerique(args[i])){
                    tabValeursSaisi2.push(parseInt(args[i]));
                }
            }
        }
    }
}
function verifTabTrie(tabValeursSaisi){
    console.log("list De depart -> "+tabValeursSaisi);
    
    for(let i = 0; i < tabValeursSaisi.length-1; i++){
        if(tabValeursSaisi[i] > tabValeursSaisi[i+1]){
            console.log("la liste de deppart n'est pas trie !");
            return false;
        }
    }
    return true;
}
// ******************** je utilise la trie par bull si la liste de depart n'est pas trie
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
function my_bubble_sort(array){    
    let new_array = [];
    let passage = 0;
    let permut;

    do {
        permut = false;
        for(let i = 0; i < array.length-1-passage; i++){
            if(array[i] > array[i+1]){
                new_array = echange(array[i],array[i+1]);
                array[i] = new_array[0];
                array[i+1] = new_array[1];
                permut = true;
            }
        }
        passage++;
    } while (permut);

    return array;
}

// foction qui trie 2 tableaux entier deja trie
function trie2Tab(array1, array2){    
    let new_array = [];
    let i=0,j=0;
    do {

        while (array1[i] < array2[j]) {
            new_array.push(array1[i]);
            i++;
        }
        while (array2[j] < array1[i]) {
            new_array.push(array2[j]);
            j++;
        }
        
    } while (i < array1.length && j < array2.length);

    return new_array;
}
//************************************** function d'affichage
function affiche(tab){
    let newTab = "";
    
    for(let i = 0; i < tab.length; i++){
        if(i == 0){
            newTab += tab[i];
        }else
            newTab += " "+tab[i];
    }

    console.log("Liste apres le trie -> "+newTab);
}
//*********************************** gestion d'erreurs
function gestionErrOk(){
    if(args.length < 3){
        console.log("peut darguments !");
        return false;    
    }else{
        if(tabValeursSaisi1.length == 0 || tabValeursSaisi2.length == 0){
            console.log("Erreur vous devez saisir 2 tableaux d'entiers tries !");
        }else
            return true;
        }
}


//*************************************resolution + affichage 
recuperationDonneeSaisiOk()
if(gestionErrOk()){
    if(verifTabTrie(tabValeursSaisi1) && verifTabTrie(tabValeursSaisi2)){
        affiche(trie2Tab(tabValeursSaisi1,tabValeursSaisi2));
    }else{
        console.log(" *** je trie les tableau *** ");
        affiche(my_bubble_sort(tabValeursSaisi1));
        affiche(my_bubble_sort(tabValeursSaisi2));
        affiche(trie2Tab(tabValeursSaisi1,tabValeursSaisi2));
    }    
}
