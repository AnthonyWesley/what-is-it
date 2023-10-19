import * as S from "../../Global";

import { AppContext } from "../../context";
import { useContext } from "react";

import GameInfoDisplay from "../../components/GameInfoDisplay";
import CardUser from "../../components/CardUser";

export default function Home() {
  const { app } = useContext(AppContext);

  return (
    <S.Box
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {(app.users[0] && <CardUser />) || <GameInfoDisplay />}
    </S.Box>
  );
}
