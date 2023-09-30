import * as S from "../../Global";
import { Link } from "react-router-dom";
import { Container, HomeButton, HomeDiv, HomeInput } from "./style";
import { AppContext } from "../../context";
import { useContext } from "react";
import UserInfoArea from "../../components/UserInfoArea";
import { Trash } from "phosphor-react";

export default function Home() {
  const { app } = useContext(AppContext);

  return (
    <S.Box>
      <Container>
        <h1>What's it?</h1>
        <p>
          Teste suas habilidades de adivinhação enquanto tenta desvendar uma
          palavra misteriosa a cada rodada. <br></br>
          <br></br>
          Seu objetivo é adivinhar a palavra correta, uma letra de cada vez,
          antes de esgotar suas 6 tentativas.<br></br>
          <br></br>
          Ao iniciar cada jogo, você começa com 100 pontos. A cada letra
          incorreta que você sugerir, perderá 10 pontos. No entanto, tenha
          cuidado! Se você não conseguir adivinhar a palavra dentro das 6
          tentativas, todos os seus pontos serão zerados.<br></br>
          <br></br>
          Mas não se preocupe! Se estiver com dificuldades, você pode revelar
          uma letra aleatória por 20 pontos. Lembre-se de que você só pode usar
          no máximo duas dicas por jogo, então use-as com sabedoria para obter
          pistas valiosas que o ajudarão a decifrar a palavra oculta.
          <br></br>
          <br></br>
          Divirta-se no desafiante 'What's it?' e mostre suas habilidades de
          adivinhação. Será que você consegue obter a pontuação máxima?",
        </p>

        {(app.users[0]?.player && (
          <HomeDiv>
            <UserInfoArea>
              <Trash />
            </UserInfoArea>
          </HomeDiv>
        )) || (
          <HomeInput
            type="text"
            placeholder="Nome... *Deve ter acima de 2 caracteres."
            onChange={app.handleTextValue}
          />
        )}

        <Link
          style={{ width: "100%", textDecoration: "none" }}
          to={"/game"}
          onClick={app.handleStartGameButton}
        >
          <HomeButton>Jogar</HomeButton>
        </Link>
      </Container>
    </S.Box>
  );
}
