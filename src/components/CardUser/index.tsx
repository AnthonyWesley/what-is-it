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
import Modal from "../Modal";

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

  const userPointer =
    user.percentagePointsPerWin || user.percentageWinsPerMatch;

  const colorStatus =
    (Number(userPointer) > 79 && "green") ||
    (Number(userPointer) > 50 && "orange") ||
    "red";

  const Level =
    (Number(user.playerLevel) > 79 && "SÁBIO") ||
    (Number(user.playerLevel) > 50 && "INTERMEDIÁRIO") ||
    "INICIANTE";
  // const colorWinsPerMatch =
  //   user.percentageWinsPerMatch > 79 && "green" ||
  //   user.percentageWinsPerMatch > 50 && "orange" ||
  //   "red";

  // const colorPerLevel =
  //   user.playerLevel > 79 && "green" ||
  //   user.playerLevel > 50 && "orange" ||
  //   "red";

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
        <span>{/* <hr /> */}</span>
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
          <p style={{ color: "gold" }}>
            {user.totalScore} <Coins weight="duotone" />
          </p>
        </div>
        <div title="Pontos por partida">
          <p>MÉDIA DE PONTOS POR PARTIDA</p>
          <p style={{ color: colorStatus }}>
            {user.percentagePointsPerWin} ptos
          </p>
        </div>

        <div title="Vitórias por partida">
          <p>PORCENTAGEM DE VIÓRIAS POR PARTIDA</p>
          <p style={{ color: colorStatus }}>{user.percentageWinsPerMatch} %</p>
        </div>

        <div title="Nível do jogador">
          <p>NÍVEL DO JOGADOR</p>
          <p style={{ color: colorStatus }}>{Level}</p>
        </div>
      </ScoreContainer>
      <StatsAction>
        <span>
          <Modal
            modalName={<Trash />}
            headerTitle="Deletar progresso"
            description="Tem certeza que deseja deletar seu progresso?"
            icon={<Trash />}
            buttonActionText="Sim"
            buttonCancelText="Não"
            funcActions={{ funcOne: app.handleDeleteUser }}
          ></Modal>
        </span>

        <span title="Continuar jogando" onClick={GotoGame}>
          <ArrowFatLineRight />
        </span>
      </StatsAction>
    </Container>
  );
}
