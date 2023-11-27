import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import CocktailCard from "../component/CocktailCard";

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
    <>
      <Header />
      <main>
        {coktailRandom !== null ? <CocktailCard cocktailToDisplay={coktailRandom} /> : <p>Cocktail en chargement</p>}
      </main>
    </>
  );
}

export default CocktailRandomPage;
