import { useContext } from "react";
import { AppContext } from "../../context";
import { Coin, Heartbeat } from "phosphor-react";
import { Container } from "./style";

export default function ScoreArea() {
  const { app } = useContext(AppContext);
  return (
    <Container>
      <p title="Chances">
        <Heartbeat size={35} color="#0d0d0d" weight="duotone" /> {app.mistakes}
      </p>
      <p>
        {app.score}
        <Coin size={35} color="#050505" weight="duotone" />
      </p>
    </Container>
  );
}
