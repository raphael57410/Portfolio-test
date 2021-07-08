import './notfound.scss';
import NotFoundLogo from '../img/notfound.svg';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound--container">
        <img src={NotFoundLogo} alt="img"/>
        <Link to="/" className="header--link">Accueil</Link>
    </div>
  );
}

export default NotFound;