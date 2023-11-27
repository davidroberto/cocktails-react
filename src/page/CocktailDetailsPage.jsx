import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetailsPage() {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailApiResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
      const cocktailApi = await cocktailApiResponse.json();

      setCocktail(cocktailApi.drinks[0]);
    })();
  }, []);

  return (
    <main>
      {cocktail ? (
        <article>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>Categorie : {cocktail.strCategory}</p>
          <p>Instructions : {cocktail.strInstructions}</p>
        </article>
      ) : (
        <p>Pas de cocktail</p>
      )}
    </main>
  );
}

export default CocktailDetailsPage;
