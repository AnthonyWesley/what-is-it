import * as S from "../../Global";
import { useContext } from "react";
import { AppContext } from "../../context";

import UserInfoArea from "../../components/UserInfoArea";
import ImageArea from "../../components/ImageArea";
import TipsArea from "../../components/TipsArea";
import WordsViewerArea from "../../components/WordsViewerArea";
import ScoreArea from "../../components/ScoreArea";
import KeyboardArea from "../../components/KeyboardArea";
import Modal from "../../components/Modal";

import { Trophy, MaskSad } from "phosphor-react";

import FooterArea from "../../components/FooterArea";

const finalStatus = {
  winner: {
    title: "Você Ganhou!",
    message: "Parabéns você acertou a palavra secreta",
    icon: <Trophy weight="duotone" />,
  },
  loser: {
    title: "Você Perdeu!",
    message: "Infelizmente não foi dessa vez. Tente novamente!",
    icon: <MaskSad weight="duotone" />,
  },
};

export default function Game() {
  const { app } = useContext(AppContext);

  const modalData = app.isWinner
    ? finalStatus.winner
    : app.isLoser
    ? finalStatus.loser
    : null;

  return (
    <>
      <ImageArea></ImageArea>
      <S.Box>
        <UserInfoArea />
        <S.BoxTitle>What's it?</S.BoxTitle>
        <TipsArea />
        <WordsViewerArea />
        <ScoreArea />
        <KeyboardArea />
        <FooterArea />
      </S.Box>
      {modalData && (
        <Modal
          activeModal={true}
          title={modalData.title}
          text={modalData.message}
          icon={modalData.icon}
          buttonActionText="Jogar Novamente!"
          funcActions={{ funcOne: () => location.reload() }}
        />
      )}
    </>
  );
}
