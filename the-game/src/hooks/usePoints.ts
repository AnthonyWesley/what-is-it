import { useEffect, useState } from "react";

export default function usePoints(wrongLetters: string[]) {
  const [score, setScore] = useState(100);
  const [mistakes, setMistakes] = useState(6);
  useEffect(() => {
    handleScore();
    handleLoserScore();
    handleMistake();
  }, [wrongLetters]);

  const handleScore = () => {
    if (wrongLetters.length) setScore(score - 10);
  };

  const handleLoserScore = () => {
    if (wrongLetters.length === 6) setScore(0);
  };

  const handleMistake = () => {
    if (wrongLetters.length) setMistakes(mistakes - 1);
  };

  const handlePayToUseTips = () => {
    setScore(score - 20);
  };

  return {
    score,
    mistakes,

    handleScore,
    handleLoserScore,
    handlePayToUseTips,
  };
}
