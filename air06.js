const args = process.argv;
var tabChainesSaisi = [];
var sousChaine;

//************************************ FONCTIONS
function siAlphabetique(val){
    
    return /[A-Za-z]/.test(val);
}

function recuperationDonneeSaisiOk(){
    
    if(siAlphabetique(args[args.length-1])){
        sousChaine = args[args.length-1];
    }else{
        console.log("Erreur l'argument ("+args[args.length-1]+") invalide !");
        return false;
    }

    for(let i = 2; i < args.length-1; i++){
        if(siAlphabetique(args[i])){
            sousChaine1Alphabetique = true;
            tabChainesSaisi.push(args[i]);
        }
        else{
            console.log("Erreur la chaines : ("+arges[i]+") est invalide !");
            return false;
        }
    }
    
    return true;
}
function chercheIndex(pos,lettre,chaine){
    let i = pos;
    while (lettre != chaine[i] && i < chaine.length) {
        i++;
    }
    return i;
}
function rechercheSousChaine(chaine,sousChaine){
    let indexSousChaine = 0;
    let pos = 0;
    let indexChaine = 0;
    
    while(pos < chaine.length){
        indexChaine = chercheIndex(pos,sousChaine[0],chaine);
        
        if(chaine.length-indexChaine < sousChaine.length){            
            return false;
        }
        while(chaine[indexChaine] === sousChaine[indexSousChaine] && indexSousChaine < sousChaine.length){    
            indexChaine++;
            indexSousChaine++;
        }
        if(indexSousChaine == sousChaine.length)
            return true;
        else{
            indexSousChaine = 0;            
            pos += 1;
        }
    }
}
function maFonction(tabChaine, chaine){
    let newChaine = "";

    for(let i = 0; i < tabChaine.length; i++){
        if(newChaine =="" && !rechercheSousChaine(tabChaine[i],chaine)){
            newChaine += tabChaine[i];
        }else
           if(!rechercheSousChaine(tabChaine[i],chaine)){
                newChaine += ", "+tabChaine[i];
            }
        }

    return newChaine;
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
        console.log(maFonction(tabChainesSaisi,sousChaine));
    }
}