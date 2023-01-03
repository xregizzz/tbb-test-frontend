import { Container } from "./styles";
import { DownArrowIcon } from "../../assets/icons/down-arrow";

function NavBar() {
  return (
    <>
      <Container>
        <ul>
          <li>
            about us <DownArrowIcon />
          </li>
          <li>
            our products <DownArrowIcon />
          </li>
          <li>
            intimate health <DownArrowIcon />
          </li>
          <li>contact us</li>
        </ul>
      </Container>
    </>
  );
}

export default NavBar;
