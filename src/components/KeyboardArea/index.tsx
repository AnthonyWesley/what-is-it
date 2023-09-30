import { Container, KeyButton, TipsButton } from "./style";
import { keyboard } from "../../constants/keyboard";
import { useContext } from "react";
import { AppContext } from "../../context";

import Modal from "../Modal";
import { WarningCircle } from "phosphor-react";

export default function KeyboardArea() {
  const { app, theme } = useContext(AppContext);
  const twice = app.count == 2 && "null";

  return (
    <Container>
      {keyboard.map((item, index) => {
        const isCorrectWord = app.correctLetters.includes(item);
        const isWrongWord = app.wrongLetters.includes(item);

        return (
          <KeyButton
            key={index}
            title={item}
            mark={
              (isCorrectWord && theme?.fnColor.primary) ||
              (isWrongWord && theme?.fnColor.secondary) ||
              ""
            }
            active={((app.isWinner || app.isLoser) && "0.3") || ""}
            disabled={isCorrectWord || isWrongWord}
            onClick={app.handleMouseClick}
          >
            {item}
          </KeyButton>
        );
      })}
      <TipsButton title="Letra aleatória" active={twice || ""}>
        <Modal
          btnText="A/z"
          title="Ajuda!"
          icon={<WarningCircle weight="duotone" />}
          text="Deseja pagar 20 de seus pontos para revelar 1 letra aleatória"
          buttonActionText="Sim"
          buttonCancelText="Não"
          funcActions={{
            funcOne: app.handlePayToUseTips,
            funcTwo: () => app.handleTipsButtonClick, // Envolver a função aqui
          }}
          isDisabled={twice && true}
        />
      </TipsButton>
    </Container>
  );
}
