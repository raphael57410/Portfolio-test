import './main.scss';
import { useEffect, useRef, useState } from 'react';
import { init } from 'ityped'

const Main = () => {

  const textRef = useRef();
  const [pictureClassname, setPictureClassename] = useState('picture--container');

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false,
      typeSpeed:  200,
      strings: ['Developpeur Web'] });
      setPictureClassename('picture--container-active');
  },[]);


  return (
    <div className="main--content">
      <div className={pictureClassname}></div>
      <div className='title--content'>
        <h1 className="title">Bienvenue sur mon portfolio</h1>
        <h2>Demmerle Raphael <span ref={textRef}></span></h2>
      </div>
      <p className="text--content">
      Depuis mon plus jeune âge j'ai grandi avec la passion de
      l'informatique, j'ai toujours aimé tout ce qui touche au monde
      de l'informatique et de la programmation.
      Un métier qui est en continuelle évolution où chaque jour
      apporte son lot de nouveautés.
      C'est ce qui m'a donné la motivation et le courage pour entamer
      une réorientation de carrière.
      </p>
    </div>
  );
}

export default Main;