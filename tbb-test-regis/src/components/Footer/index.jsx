import { Container } from "./styles";
import ulabsLogo from "../../assets/images/logo-ulabs.png";
import { InstagramIcon } from "../../assets/icons/instagram-logo";

function Footer() {
  return (
    <>
      <Container>
        <div>
          <ul className="footerNavBar">
            <li>contact us</li> <li>faq</li> <li>site map</li>
            <li>privacy policy</li> <li>cookies policy</li>
            <li>legal notice</li>
          </ul>
        </div>
        <div className="footerIcons">
          <img className="footerLogo" src={ulabsLogo} alt="" />
          <InstagramIcon />
        </div>
      </Container>
    </>
  );
}

export default Footer;
