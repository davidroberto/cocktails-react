import { Link } from "react-router-dom";

function CocktailCard({ cocktailToDisplay }) {
  return (
    <article>
      <h2>{cocktailToDisplay.strDrink}</h2>
      <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir le détail du cocktail</Link>
    </article>
  );
}

export default CocktailCard;
