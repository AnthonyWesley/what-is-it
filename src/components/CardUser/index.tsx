import { useContext } from "react";
import {
  ArrowFatLineRight,
  Coins,
  MaskSad,
  Trash,
  Trophy,
  User,
} from "phosphor-react";
import {
  Container,
  StatsContainer,
  ScoreContainer,
  StatsAction,
} from "./style";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function CardUser() {
  const { app } = useContext(AppContext);

  const user = app.users[0] || {
    player: "Player",
    victories: 0,
    defeats: 0,
    totalScore: 0,
  };

  const navigate = useNavigate();

  const GotoGame = () => {
    navigate("/game");
    app.handleIsGameOn(true);
  };

  const mediaColor =
    (Number(user.percentagePointsPerWin) > 79 && "green") ||
    (Number(user.percentagePointsPerWin) > 50 && "orange") ||
    "red";

  return (
    <Container>
      <h1>
        <User weight="duotone" />
        {user.player}
      </h1>

      <StatsContainer>
        <span title="Total de vitórias">
          <p>VITÓRIAS</p> <h1>{user.victories}</h1>
          <h2>
            <Trophy weight="duotone" />
          </h2>
        </span>
        <span>
          <hr />
        </span>
        <span title="Total de derrotas">
          <h2>
            <MaskSad weight="duotone" />
          </h2>
          <h1>{user.defeats}</h1> <p>DERROTAS</p>
        </span>
      </StatsContainer>
      <ScoreContainer>
        <div title="Total de pontos">
          <p>TOTAL DE PONTOS</p>
          <h1>
            {user.totalScore} <Coins weight="duotone" />
          </h1>
        </div>
        <div title="Pontos por partida">
          <p>MÉDIA DE PONTOS POR PARTIDA</p>
          <h2 style={{ color: mediaColor }}>{user.percentagePointsPerWin}</h2>
        </div>

        <StatsAction>
          <p onClick={app.handleDeleteUser}>
            <Trash />
          </p>

          <p title="Continuar jogando" onClick={GotoGame}>
            <ArrowFatLineRight />
          </p>
        </StatsAction>
      </ScoreContainer>
    </Container>
  );
}
