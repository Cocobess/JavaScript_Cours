//1

const myArray = [1,2, 3,4,5,6,7,8,9,10]

for (let i = 0; i< myArray.length; i++  ) {
    console.log(myArray[i]);

}

console.log(myArray) 

//2

const myArray2 = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
console.log(myArray2[0])

//3

const myArray3 = [2, 4, 6, 8, 10]
let somme = 0

for (let i = 0; i< myArray3.length; i++  ) {
    somme += myArray3[i]
    


}
console.log(somme) 


//4

const myArray4 = ['Pomme', 'Poire', 'Abricot', 'Peche', 'Bannane']
myArray4.push('Prune')
console.log(myArray4) 

//5

const myArray5 = [7, 14, 6, 18, 10]
moyenne = 0

for (let i = 0; i< myArray5.length; i++  ) {
    moyenne += myArray5[i]
}
moyenne = moyenne / myArray5.length
console.log(moyenne) 

//6 

const myArray6 = ['Pie', 'Pigeon', 'Aigle', 'feaisan', 'Rapace', 'Mouette']

let trouver = 'trouver'
let oiseau = 'Pie'

for (let i = 0; i< myArray6.length; i++  ) {
    if (oiseau === myArray6[i]){
        console.log(trouver)
    } 
    
}

//7 
const myArray7 = ['France', 'Allemagne', 'Zambie', 'Belgique', 'Suisse', 'Angleterre']
myArray7.sort()
console.log(myArray7) 

//8

const myArray8 = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin']
console.log(myArray8[2])

//9
// randomly generated N = 40 length array 0 <= A[N] <= 39
const myArray9 = []

for (let i = 0; i <10; i++){
    nbr = Math.round(Math.random() * 100) 
    myArray9.push(nbr)
}
console.log(myArray9)
console.log(Math.min(...myArray9));
console.log(Math.max(...myArray9));


//10

const myArray10 =[
    "Oh Wow.",
    "Je suis beau.",
    "J'aime !",
    "Maxence petite Gourmande !",
    "Non !"
]
let phc = "";
myArray10.forEach(elt=>{
    if (elt.length>phc.length){
        phc = elt;
    }
})
console.log(phc);

