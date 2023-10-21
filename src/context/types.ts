import { MouseEventHandler } from "react";

export type UserType = {
  player?: string;
  totalScore?: number | undefined;
  victories?: number | undefined;
  defeats?: number | undefined;
  percentagePointsPerWin?: number | undefined;
  percentageWinsPerMatch?: number | undefined;
  playerLevel?: number | undefined;
  wordGuessed: string[];
};

export type Game = {
  secretWord: string;
  description: string[];
  letter: string;
  correctLetters: string[];
  wrongLetters: string[];
  isWinner: boolean;
  isLoser: boolean;

  count: number;
  score: number;
  mistakes: number;

  users: UserType[];
  textRef: React.LegacyRef<HTMLInputElement> | null;

  handleDeleteUser: () => void;
  handleStartGameButton: () => void;

  handleMouseClick: MouseEventHandler;
  handleTipsButtonClick: () => void;
  handleScore: () => void;
  handleLoserScore: () => void;
  handlePayToUseTips: () => void;
  handleIsGameOn: (isOn: boolean) => void;
};

type Theme = {
  fnColor: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  mdQuery: {
    mobile: string;
    tablet: string;
  };
};

export type AppContextType = {
  app: Game;
  theme?: Theme;
};
