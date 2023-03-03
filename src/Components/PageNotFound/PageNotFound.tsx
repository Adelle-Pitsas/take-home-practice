import { Link } from "react-router-dom";
import "../PageNotFound/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page404">
      <h1>404</h1>
      <h3>Page not found</h3>
      <p>
        Oops! The page you requested could not be found. Check the address or go back
        to the homepage.
      </p>
      <Link className="home-btn" to="/" id='back-button'>
        Go home
      </Link>
    </div>
  );
};

export default PageNotFound