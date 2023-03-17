# JavaScript


### _Notion :_
- Editeur = Visual studio code
- Node.js
- Github
- Manipuler les donnés


### _Déclarer une variable_ :

- un element fondamentale stocker des valeurs
 
 Different type de variable :
- Char
- Booleen 
- Let variable locale d’un bloc
- la différence entre let et var et const  
- utiliser que let !!!
- const = empeche de reasigner la variable
- utilise let et const


### _Opérateur_ :

- egaliter === (comparaison stricte)
- ternaire :
```js
String msg = num > 10 ? "le nombre est plus grand que 10"
  : (num > 5 ?  : );
```



### _Les boucles_ :

- while (tant que)
- for (jusqu'a que) exemple :
```js
const myArray9 = []

for (let i = 0; i <10; i++){
    nbr = Math.round(Math.random() * 100) 
    myArray9.push(nbr)
}
```

- do while
- for in : 
```js
for (const index2 in voye) {
            if (chaine[index] === voye[index2]){
                    chaine.splice(index, i)            }
        }
```

- for of 

### _Les Structures Conditionnel_ :

- if
```js
if (elt.length>phc.length){
        phc = elt;
    }
```

- elif
- else


### _Notion importante_ :

- git
- linux bash
- http / dns / api

### _Fonctions_ :

```js
For nom_de_la_fonction (parametre1, parametre2, ...){
    // instructions
    return resultat;
}
```

```js
let multiplication = function(a,b) {
    return a+b
};
```

```js
const sum = (a, b) => a + b
```

```js
setTimeout(
    function(){
        console.log('Hello, World!');
    }
, 1000);
```

- Handler



### _Syntaxe des objets_ :

```js
let myObject = {
    firstname : 'Garou',
    lastname : 'Dupuit',
    age : '20',
    mailVerified : true,
    password : 'hgzfvfervfefuyeyfvf'
}
```
////Savoir spread pour un objet ce qu'il fait


### _Spread Opérateur_ :

Le spread operateur permet d'éclater les élément d'un tableau ou d'un objet :

```js
function max(tab) {
    result = Math.max(...tab)
    return result

    
}

console.log(max([58,56, 100, 1, 5]))

``` 


Regex
MDN (develloper mozilla)

## _Regex_ :

```js
function  removevowels(str) {
    return str.replace(/[aeiouy])/gi ,'');
}

const test = /[a]/;

const result = removevowels('Bonjour animal');
console.log(result);
```

## _Expression regulières_ :

- .sort()
- .push()
- Math.round()
- Math.random()
- Math.min()
- Math.max()
- .map()
- .replace()
- .splice()

## _Commandes Git_ :

```git
git init (ajoute un repertoire de sauvegarde git)
```
```git
git status (regarde l'etat de la sauvegarde git )
```
```git
git add. (ajoute tout les fichier non sauvegarder dans le git)
```
```git
git commit -m "... commit" (fait une sauvegarde git )
```
## _Promise_ :

- utilisé pour réaliser des traitements de façon asynchrone. 
 ```js
 const promise = new Promise((resolve, reject) =>{
    			setTimeout(() => {
        		const randomNumber = Math.floor(Math.random() * 10)
        			if (randomNumber % 2 === 0) {
            			resolve(randomNumber)
           			} else {
           				 reject(new Error('Le nombre est impair.'))
        			}
        		 }, 1000)
    
})
promise 
    .then(result => console.log(`le nombre est ${result}.`))
    .catch(error => console.error(error.message))

```
## _API Fetch_ :

- une interface pour la récupération de ressources

```js
function fetchSomePokemon() {
			return fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
		}

		const pokemons = fetchSomePokemon()
		.then((httpReponse) => {
			console.log('httpReponse: ', httpReponse)
			return httpReponse.json()
		})
		.then((pokemonlist) => { 
			console.log(pokemonlist)
		})
```
