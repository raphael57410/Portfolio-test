
import './header.scss';
import { Link } from "react-router-dom";




const Header = () => {

  const pathHome =     window.location.href === 'http://localhost:3000/' ? true : false;
  const pathCV =       window.location.href === 'http://localhost:3000/cv' ? true : false;
  const pathProjects = window.location.href === 'http://localhost:3000/projets' ? true : false;
  const pathContact =  window.location.href === 'http://localhost:3000/contact' ? true : false;

  
  return (
    <div className="header--container">
       <ul className="header--ul">
          {!pathHome && <li className="header--li"><Link to="/" className="header--link">Accueil</Link></li>}
          {!pathCV && <li className="header--li"><Link to="/cv" className="header--link">mon cv</Link></li>}
          {!pathProjects && <li className="header--li"><Link to="/projets" className="header--link">Mes projets</Link></li>}
          {!pathContact && <li className="header--li"><Link to="/contact" className="header--link">Contact</Link></li>}
       </ul>
    </div>
  );
}

export default Header;
