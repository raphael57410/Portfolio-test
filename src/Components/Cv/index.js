import './cv.scss';
import PictureCv from  '../img/pictureCv.png';


const Cv = () => {
  return (
    <div className="cv--container">
      <div className="cv--content">
        <img className="cv--picture" src={PictureCv} alt="img"/>
      </div>
    </div>
  );
}

export default Cv;