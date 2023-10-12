import * as S from "../../Global";
import { Container } from "../../components/GameInfoDisplay/style";
import { AppContext } from "../../context";
import { useContext } from "react";

import GameInfoDisplay from "../../components/GameInfoDisplay";
import CardUser from "../../components/CardUser";

export default function Home() {
  const { app } = useContext(AppContext);

  return (
    <S.Box>
      <Container>
        {(app.users[0] && <CardUser />) || <GameInfoDisplay />}
      </Container>
    </S.Box>
  );
}
