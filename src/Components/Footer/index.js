import './footer.scss';
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


const Footer = () => {
  return (
    <div className="footer--container">
        <Link href="https://github.com/raphael57410" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: 60 }}/></Link>
        <Link href="https://www.facebook.com/raph.demmerle/" target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: 60 }}/></Link>
        <Link href="https://www.linkedin.com/in/rapha%C3%ABl-demmerle-9b62391b4/" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: 60 }} /></Link>
        <Link href="/contact"><MailIcon style={{ fontSize: 60 }} /></Link>
    </div>
  );
}

export default Footer;