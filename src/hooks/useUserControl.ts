import { ChangeEvent, useEffect, useState } from "react";
import { UserType } from "../context/types";
import useLocalStorage from "./useLocalStorage";

export default function useUserControl(
  secretWord: string,
  isWinner = false,
  isLoser = false,
  score = 0
) {
  const [text, setText] = useState("");
  const [users, setUsers] = useState<UserType[]>([]);

  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  useEffect(() => {
    handleFinalScore();
    handleFinalStatus();
    calculatePercentagePointsPerWin();
    PushWordGuessed();
  }, [isWinner, isLoser]);

  useEffect(() => {
    const newList = getLocalStorage();
    setUsers(newList);
  }, []);

  const handleTextValue = (event: ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;
    setText(textValue);
  };

  const handleStartGameButton = () => {
    const newUser = [...users];
    if (users.length < 1 && text.length > 2) {
      newUser.push({
        player: text,
        victories: 0,
        defeats: 0,
        totalScore: 0,
        percentagePointsPerWin: "",
        wordGuessed: [],
      });
      setUsers(newUser);
      setLocalStorage(newUser);
    }
  };

  const handleFinalScore = () => {
    const newUser = [...users];
    if (newUser.length > 0 && isWinner) {
      newUser[0].totalScore = (newUser[0].totalScore ?? 0) + score;
      setUsers(newUser);
      setLocalStorage(newUser);
    }
  };

  const handleFinalStatus = () => {
    const newUser = [...users];
    if (isWinner) {
      newUser[0].victories = (newUser[0].victories ?? 0) + 1;
      setUsers(newUser);
      setLocalStorage(newUser);
    }
    if (isLoser) {
      newUser[0].defeats = (newUser[0].defeats ?? 0) + 1;
      setUsers(newUser);
      setLocalStorage(newUser);
    }
  };

  const handleDeleteUser = () => {
    const newUser = [...users];
    newUser.splice(0, 1);
    setUsers(newUser);
    setLocalStorage(newUser);
    location.reload();
  };

  const calculatePercentagePointsPerWin = () => {
    if (users.length < 1 || !users[0].victories || !users[0].totalScore) {
      return; // Não há usuários, vitórias ou totalScore definido, não há nada a calcular.
    }

    const [firstUser] = users;
    const { totalScore, victories } = firstUser;

    const percentage = (totalScore ?? 0) / (victories ?? 0);

    firstUser.percentagePointsPerWin = percentage.toFixed(2);

    setUsers([...users]);
    setLocalStorage([...users]);
  };

  const PushWordGuessed = () => {
    if (isWinner) {
      const [firstUser] = users;

      firstUser.wordGuessed?.push(secretWord);
      setUsers([...users]);
      setLocalStorage([...users]);
    }
  };

  return {
    users,
    text,
    handleTextValue,
    handleStartGameButton,
    handleDeleteUser,
  };
}
