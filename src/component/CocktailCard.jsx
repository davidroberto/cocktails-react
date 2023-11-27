import { Link } from "react-router-dom";

function CocktailCard({ cocktailToDisplay }) {
  // je déclare ma fonction appelée par l'event listener
  // qui reçoit en parametre l'event (obligatoirement envoyé par le navigateur)
  // et en second parametre l'id du cocktail cliqué
  const handleDeleteCocktail = async (event, id) => {
    // je fais un appel fetch de type delete
    // sur l'url de l'api
    // en lui passant l'id du cocktail à supprimer
    // il faut bien sûr que cette url existe sur l'api, ce qui
    // n'est pas le cas ici
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=" + id, {
      method: "DELETE",
    });
  };

  return (
    <article className="cocktail-card">
      <h2>{cocktailToDisplay.strDrink}</h2>
      <img className="cocktail-card-img" src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir le détail du cocktail</Link>

      {/* 
        Button avec event listener
        les event listeners reçoivent automatiquement un parametre event
        donc si je veux lui passer un autre parametre (ici l'id du cocktail cliqué)
        je dois utiliser une fonction flêchée qui appelle ma fonction
       */}
      <button
        onClick={(event) => {
          handleDeleteCocktail(event, cocktailToDisplay.idDrink);
        }}
      >
        Supprimer le cocktail
      </button>
    </article>
  );
}

export default CocktailCard;
