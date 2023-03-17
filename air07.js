const args = process.argv;
var tabValeursSaisi = [];
var newEelement;

//************************************ FONCTIONS
function siNumerique(val){
    
    return /^-?\d+$/.test(val);
}
function recuperationDonneeSaisiOk(){

    if(siNumerique(args[args.length-1])){
        newEelement = parseInt(args[args.length-1]);
    }else{
        console.log("Erreur l'argument ("+args[args.length-1]+") invalide !");
        return false;
    }

    for(let i = 2; i < args.length-1; i++){
        if(siNumerique(args[i]))
        tabValeursSaisi.push(parseInt(args[i]));
        else{
            console.log("Erreur l'argument ("+args[i]+") invalide !");
            return false;
        }
    }

    return true;
}
function decalageTab(tab,pos){
    
    for(let i = tab.length; i >= pos; i--){
        tab[i] = tab[i-1];  
    }
}
function sortedInsert(tabValeursSaisi,newEelement){
    let tailleTab = tabValeursSaisi.length;

    for(let i = 0; i < tailleTab; i++){
        if(newEelement < tabValeursSaisi[i]){
            decalageTab(tabValeursSaisi,i);
            tabValeursSaisi[i] = newEelement;
            return tabValeursSaisi;
        }else{
            if(i == tailleTab-1)
            tabValeursSaisi.push(newEelement);
        }
    }
    
    return tabValeursSaisi;
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
//************************************** function d'affichage
function affiche(tabValeursSaisi){
    let newTab = "";
    
    for(let i = 0; i < tabValeursSaisi.length; i++){
        if(i == 0){
            newTab += tabValeursSaisi[i];
        }else
            newTab += " "+tabValeursSaisi[i];
    }

    console.log("Liste apres le trie -> "+newTab);
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
    if(recuperationDonneeSaisiOk()){
        if(verifTabTrie(tabValeursSaisi)){
            sortedInsert(tabValeursSaisi,newEelement);
            affiche(tabValeursSaisi);
        }else{
            console.log(" *** je trie la liste *** ");
            affiche(my_bubble_sort(tabValeursSaisi));
        }
    }
}