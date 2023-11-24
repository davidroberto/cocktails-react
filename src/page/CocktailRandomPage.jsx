import { useEffect, useState } from "react";

function CocktailRandomPage() {
  const [coktailRandom, setCocktailRandom] = useState(null);

  // useEffect est une fonction que react me fournit
  // et qui permet d'exécuter du code uniquement à certains
  // chargements du composant (soit le premier, soit à chaque fois etc)
  // Ici, vu qu'on place un tableau vide en deuxième parametre
  // de use effect
  // ça signifie qu'on veut executer la fonction une seule fois
  // au premier chargement du composant
  useEffect(() => {
    (async () => {
      const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      const cocktailJs = await cocktailRandomResponse.json();

      setCocktailRandom(cocktailJs.drinks[0]);
    })();
  }, []);

  return (
    <main>
      {coktailRandom !== null ? (
        <article>
          <h1>{coktailRandom.strDrink}</h1>
          <img src={coktailRandom.strDrinkThumb} alt={coktailRandom.strDrink} />
        </article>
      ) : (
        <p>Cocktail en chargement</p>
      )}
    </main>
  );
}

export default CocktailRandomPage;
