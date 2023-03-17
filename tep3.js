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


 console.log(getPropertyValues(objectArray, 'firstname'))

 //7

function innerstsort(numbers){
    return numbers.sort((a,b) => b - a )
}

const numbersArr = [1 , 47, 4, 421568 , 44548, 464, 8, 543]

const result = innerstsort(numbersArr)

console.log(result)

//8

function voyellemaj(chaine){

    const regex = /[aeiouy]/g; 
    const result = chaine.match(regex , function(voyellemaj){
        
    return voyellemaj.toUpperCase();

    })

    return result
}

const chainvoy = ('Bonjour')

const result2 = voyellemaj(chainvoy)

console.log(result2)

// 8
const capitalizeVowels = (str) => {
    return str.replace(/[aeiouy]/i, (vowel) => vowel.toUpperCase());

}

// 9

const countVowels = (str) => {
    return str.replace(/[aeiouy]/gi || [], ).lenght;

}

//10

const capitalizeCons = (str) => {
    return str.replace(/[^aeiouy]/i, cons => cons.toUpperCase());

}
