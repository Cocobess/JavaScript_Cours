			alert("MAxence gourmande")

			const doc = document;
			const slect_bal = document.getElementById("a");

			const myElement = document.getElementById("zoulou");

			myElement.textContent = "New text";
			myElement.innerHTML = "<h1 class = 'containeur' > New paragrapde </h1>";
			myElement.style.color = "red";
			
			const mybutton = document.getElementById("boutton1");
			const monpara = document.getElementById("paragraphe");


			mybutton.addEventListener('click', function () {
				monpara.innerHTML = "bonjour les petits cowboy";
			})
			

			console.log(myElement)

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



		//const myFind => (index, liste) {
           // for (index < liste.length; index++) {
               // console.log()
                
            //}
        //}
        

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

        function fetchSomePokemon() {
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response => response.json())
                .then(data => data.results);
        }
        
        fetchSomePokemon().then(pokemonList => {
            const tableau = document.getElementById('tableau');
        
            // Boucler sur les données pour créer les lignes du tableau
            pokemonList.forEach(pokemon => {
                // Créer une nouvelle ligne pour le tableau
                const ligne = document.createElement('tr');
        
                // Ajouter les cellules pour chaque propriété de l'élément
                const cellule1 = document.createElement('td');
                cellule1.textContent = pokemon.name;
                ligne.appendChild(cellule1);
        
                const cellule2 = document.createElement('td');
                cellule2.textContent = pokemon.url;
                ligne.appendChild(cellule2);
        
                // Ajouter la ligne au tableau
                tableau.appendChild(ligne);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données: ', error);
        });
        
		console.log
