import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null);

  if (!cocktails) {
    // fonction anonyme asynchrone (elle pas de nom)
    // qui s'autoinvoque
    // cela permet d'effectuer des opérations asynchrones (fetch etc)
    // sans devoir créer une vraie fonction asynchrone
    // (qu'on devrait appeler avec un await)
    (async () => {
      const coktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const cocktailsInJs = await coktailsResponse.json();
      setCocktails(cocktailsInJs.drinks);
    })();
  }

  return (
    <>
      <Header />
      <main>
        {cocktails ? (
          <>
            {cocktails.map((cocktail) => {
              return <CocktailCard cocktailToDisplay={cocktail} />;
            })}
          </>
        ) : (
          <img src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="spinner" />
        )}
      </main>
    </>
  );
}

export default CocktailsPage;
