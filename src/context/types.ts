import { ChangeEvent, MouseEventHandler } from "react";

export type UserType = {
  player?: string;
  totalScore?: number | undefined;
  victories?: number | undefined;
  defeats?: number | undefined;
  percentagePointsPerWin?: string | undefined;
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
  text: string;

  handleTextValue: (event: ChangeEvent<HTMLInputElement>) => void;
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
