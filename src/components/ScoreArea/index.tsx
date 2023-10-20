import { useContext } from "react";
import { AppContext } from "../../context";
import { Coin, Heartbeat } from "phosphor-react";
import { Container } from "./style";

export default function ScoreArea() {
  const { app } = useContext(AppContext);
  return (
    <Container>
      <p title="Chances">
        <Heartbeat weight="duotone" /> {app.mistakes}
      </p>

      <p>
        {app.score}
        <Coin weight="duotone" />
      </p>
    </Container>
  );
}
