import { createContext } from "react";
import useGame from "../hooks/useGame";
import { AppContextType } from "../context/types";
import usePoints from "../hooks/usePoints";
import { theme } from "../constants/Theme";
import useUserControl from "../hooks/useUserControl";

export const AppContext = createContext<AppContextType>({
  app: getDefaultAppData(),
  theme: theme,
});

function getDefaultAppData() {
  return {
    secretWord: "",
    description: [],
    letter: "",
    correctLetters: [],
    wrongLetters: [],
    isWinner: false,
    isLoser: false,
    count: 0,
    score: 100,
    mistakes: 6,
    users: [],

    textRef: null,

    handleDeleteUser: () => {},
    handleStartGameButton: () => {},

    handleMouseClick: () => {},
    handleTipsButtonClick: () => {},
    handleScore: () => {},
    handleLoserScore: () => {},
    handlePayToUseTips: () => {},
    handleIsGameOn: () => {},
  };
}

export default function AppProvider({ children }: { children: JSX.Element }) {
  const {
    secretWord,
    description,
    letter,
    correctLetters,
    wrongLetters,
    isWinner,
    isLoser,
    count,
    handleMouseClick,
    handleTipsButtonClick,
    handleIsGameOn,
  } = useGame();

  const { score, mistakes, handleScore, handleLoserScore, handlePayToUseTips } =
    usePoints(wrongLetters);

  const {
    users,
    textRef,

    handleDeleteUser,
    handleStartGameButton,
  } = useUserControl(secretWord, isWinner, isLoser, score);

  const appData = {
    secretWord,
    description,
    letter,
    correctLetters,
    wrongLetters,
    isWinner,
    isLoser,
    count,
    score,
    mistakes,
    textRef,
    users,
    handleMouseClick,
    handleTipsButtonClick,
    handleScore,
    handleLoserScore,
    handlePayToUseTips,

    handleDeleteUser,
    handleStartGameButton,
    handleIsGameOn,
  };

  return (
    <AppContext.Provider value={{ app: appData, theme: theme }}>
      {children}
    </AppContext.Provider>
  );
}
