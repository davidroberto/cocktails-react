import Header from "../component/Header";

function CreateCocktailPage() {
  const handleSubmit = async (event) => {
    // on récupère les données du formulaire
    // champs title, description et ingredients
    const title = event.target.title.value;
    const description = event.target.description.value;
    const ingredients = event.target.ingredients.value;

    // on les stocke dans un objet, transformé en JSON
    const jsonToSend = JSON.stringify({
      title: title,
      description: description,
      ingredients: ingredients,
    });

    // on fait une requête fetch, de méthode POST
    // avec en body les données JSON
    const cocktailCreateResponse = await fetch("https://www.thecocktaildb.com/api/fake-url-for-create", {
      method: "POST",
      body: jsonToSend,
    });

    // on vérifie si cocktailCreateResponse contient une réponse OK
    // sinon on affiche un message d'erreur
  };

  return (
    <>
      <Header />

      {/* au submit, on appelle la fonction handleSubmit */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Titre
            <input type="text" name="title" />
          </label>
        </div>

        <div>
          <label>
            Description
            <input type="text" name="description" />
          </label>
        </div>

        <div>
          <label>
            Ingrédients
            <select name="ingredients" multiple>
              <option value="1">Ingredient 1</option>
              <option value="2">Ingredient 2</option>
              <option value="3">Ingredient 3</option>
            </select>
          </label>
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default CreateCocktailPage;
