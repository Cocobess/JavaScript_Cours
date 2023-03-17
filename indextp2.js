function sum(i, j) {
    return i + j;
    
}

console.log(sum(74, 4))

function max(tab) {
    result = Math.max(...tab)
    return result

    
}

console.log(max([58,56, 100, 1, 5]))

function voyelle(chaine){

    voye = ['a', 'e', 'i', 'o', 'u', 'y']
    for (const index in chaine) {
        for (const index2 in voye) {
            if (chaine[index] === voye[index2]){
                    chaine.splice(index, i)            }
        }

        
    }

}

function voyelle2(chaine){

    const regex = /[aeiouy]/g;

    result = chaine.replace(regex,'')
    return result
}
console.log(voyelle2('fbheifaiej'))

function tabtri(tab){
    result = tab.sort();
    return result

   
}
console.log(tabtri['d', 't', 'j', 'f', 'q', 'm'])

//5

function nombrelettre(nbr){
    chiffre = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf']
    dizaine = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante','soixante-dix', 'quattre-vingt', 'quatrevingtdix']
    centaine = [], 'soixante-dix'

}

//6
//function  removevowels(str) {
    //return str.replace(/[aeiouy])/gi ,'');
//}/

const test = /[a]/;

const result = removevowels('Bonjour animal');
console.log(result);

//5 bis

function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['']
}


const someObject = {
    firstname : 'Maxence',
    lastname : 'Kovacevic', 
    age : 21 ,
    hasDriverLicence : true,
    placeOfBirth : 'Vienne'
}

const objectArray = [
    {firstname : 'Maxence',},
    {firstname : 'Maxence',},
]

const getPropertyValues = (objectArray , str) =>
{
    return objectArray.map((obj) => obj[str])
}

const testArray = [1, 548, 285, 525]
 testArray.map((element) => {
    console.log(element)
 })