import { useCallback, useEffect, useRef, useState } from "react";
import { UserType } from "../context/types";
import useLocalStorage from "./useLocalStorage";

export default function useUserControl(
  secretWord: string,
  isWinner = false,
  isLoser = false,
  score = 0
) {
  const [users, setUsers] = useState<UserType[]>([]);
  const textRef = useRef<HTMLInputElement>(null);

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

  const handleStartGameButton = () => {
    const newUser = [...users];
    if (textRef.current && textRef.current.value.length > 2) {
      newUser.push({
        player: textRef.current.value,
        victories: 0,
        defeats: 0,
        totalScore: 0,
        percentagePointsPerWin: 0,
        percentageWinsPerMatch: 0,
        playerLevel: 0,
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

    const [newUser] = users;
    const { totalScore = 0, victories = 0, defeats = 0 } = newUser;

    const pointsPerWin = totalScore / victories;
    const totalMatch = victories + defeats;
    const winsPerMatch = (victories / totalMatch) * 100;

    const level = (pointsPerWin + winsPerMatch) / 2;

    newUser.percentagePointsPerWin = Math.floor(pointsPerWin);
    newUser.percentageWinsPerMatch = Math.floor(winsPerMatch);
    newUser.playerLevel = Math.floor(level);

    setUsers([...users]);
    setLocalStorage([...users]);
  };

  const PushWordGuessed = useCallback(() => {
    if (isWinner) {
      const [firstUser] = users;

      firstUser.wordGuessed?.push(secretWord);
      setUsers([...users]);
      setLocalStorage([...users]);
    }
  }, [isWinner, secretWord, users, setUsers, setLocalStorage]);

  return {
    users,
    textRef,

    handleStartGameButton,
    handleDeleteUser,
  };
}
