import { AppContext } from "../../context";
import { useContext, useEffect } from "react";
import { Container } from "./style";
import { User, Coins, Trophy, MaskSad } from "phosphor-react";
import { useLocation } from "react-router-dom";

export default function UserInfoArea({ children }: { children?: JSX.Element }) {
  const { app } = useContext(AppContext);
  const location = useLocation();
  const {
    player = "player",
    totalScore = 0,
    victories = 0,
    defeats = 0,
  } = app.users[0];

  const userStats = [
    {
      title: "Jogador",
      icon: <User weight="duotone" />,
      value: player,
    },
    {
      title: "Total de pontos",
      icon: <Coins weight="duotone" />,
      value: totalScore,
    },
    {
      title: "Total de vitórias",
      icon: <Trophy weight="duotone" />,
      value: victories,
    },
    {
      title: "Total de derrotas",
      icon: <MaskSad weight="duotone" />,
      value: defeats,
    },
  ];

  useEffect(() => {
    if (location.pathname === "/game") {
      app.handleIsGameOn(true);
    }
  }, [location.pathname]);

  return (
    <Container>
      {userStats.map((item, index) => (
        <p key={index} title={item.title}>
          {item.icon} {item.value}
        </p>
      ))}

      {children && <div onClick={app.handleDeleteUser}>{children}</div>}
    </Container>
  );
}
