import { AppContext } from "../../context";
import { useContext } from "react";
import { Container } from "./style";
import { User, Coins, Trophy, MaskSad } from "phosphor-react";
import { useLocation } from "react-router-dom";

export default function UserInfoArea({ children }: { children?: JSX.Element }) {
  const { app } = useContext(AppContext);
  const location = useLocation();

  if (location.pathname === "/game") app.handleIsGameOn(true);

  return (
    <Container>
      <p title="Jogador">
        <User weight="duotone" /> {app.users[0]?.player || "Player"}
      </p>
      <p title="Total de pontos">
        <Coins weight="duotone" /> {app.users[0]?.totalScore || 0}
      </p>
      <p title="Total de vitórias">
        <Trophy weight="duotone" /> {app.users[0]?.victories || 0}
      </p>
      <p title="Total de derrotas">
        <MaskSad weight="duotone" />
        {app.users[0]?.defeats || 0}
      </p>
      {children && <div onClick={app.handleDeleteUser}>{children}</div>}
    </Container>
  );
}
