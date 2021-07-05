import './projets.scss';
import PremierProjets from  '../img/premierProjet.png';
import EnConstruction from '../img/enconstruction.png';



const Projets = () => {
  return (
    <div className="projets--container">
        <h1 className="projets--title">Mes projets</h1>
        <div className="projets--content">
          <div className="projets--card">
            <h2>O'ne RM</h2>
            <a href="http://awsonerm.s3-website-us-east-1.amazonaws.com/"> <img src={PremierProjets} alt="img"/> </a>
          </div>
          <div className="projets--card--construction">
            <h2>En construction</h2>
            <a href="/"> <img src={EnConstruction} alt="img"/> </a>
          </div>
        </div>
        
    </div>
  );
}

export default Projets;