import { useContext } from "react";
import {
  ArrowFatLineRight,
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
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal";

export default function CardUser() {
  const { app } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") app.handleIsGameOn(false);

  const user = app.users[0] || {
    player: "Player",
    victories: 0,
    defeats: 0,
    totalScore: 0,
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

  const userStats = [
    {
      title: "Total de pontos",
      label: "TOTAL DE PONTOS",
      value: user.totalScore,
      color: "gold",
    },
    {
      title: "Pontos por partida",
      label: "MÉDIA DE PONTOS POR PARTIDA",
      value: user.percentagePointsPerWin,
      color: colorStatus,
    },
    {
      title: "Vitórias por partida",
      label: "PORCENTAGEM DE VIÓRIAS POR PARTIDA",
      value: user.percentageWinsPerMatch + " %",
      color: colorStatus,
    },
    {
      title: "Nível do jogador",
      label: "NÍVEL DO JOGADOR",
      value: Level,
      color: colorStatus,
    },
  ];

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
        {userStats.map((item, index) => (
          <div key={index} title={item.title}>
            <p>{item.label}</p>
            <p style={{ color: item.color }}>{item.value}</p>
          </div>
        ))}
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

        <span title="Continuar jogando" onClick={() => navigate("/game")}>
          <ArrowFatLineRight />
        </span>
      </StatsAction>
    </Container>
  );
}
