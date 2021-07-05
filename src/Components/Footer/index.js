import './footer.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


const Footer = () => {
  return (
    <div className="footer--container">
        <a href="https://github.com/raphael57410" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: 60 }}/></a>
        <a href="https://www.facebook.com/raph.demmerle/" target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: 60 }}/></a>
        <a href="https://www.linkedin.com/in/rapha%C3%ABl-demmerle-9b62391b4/" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: 60 }} /></a>
        <a href="/contact"><MailIcon style={{ fontSize: 60 }} /></a>
    </div>
  );
}

export default Footer;