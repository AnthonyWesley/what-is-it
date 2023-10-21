import { SignOut } from "phosphor-react";
import { Container } from "./style";
import { Link } from "react-router-dom";

export default function FooterArea() {
  return (
    <Container>
      <p></p>
      <p> Create by Anthony W.</p>
      <p>
        <Link to={"/"} title="Voltar para a página principal">
          <SignOut color="orange" weight="duotone" />
        </Link>
      </p>
    </Container>
  );
}
