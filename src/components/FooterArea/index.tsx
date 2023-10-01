import { SignOut } from "phosphor-react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import { useContext } from "react";
export default function FooterArea() {
  const { app } = useContext(AppContext);

  const keyboardOff = () => {
    app.handleIsGameOn(false);
  };
  return (
    <Container>
      <p></p>
      <p> Create by Anthony W.</p>
      <p>
        {" "}
        <Link to={"/"} title="Voltar para a página principal">
          {" "}
          <SignOut onClick={keyboardOff} color="orange" weight="duotone" />
        </Link>
      </p>
    </Container>
  );
}
