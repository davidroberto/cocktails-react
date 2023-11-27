import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/random">Random Cocktail</Link>
          </li>
          <li>
            <Link to="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link to="/categories">Catégories</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingrédients</Link>
          </li>
          <li>
            <Link to="/cocktails/create">Créer un cocktail</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
