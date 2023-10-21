import { useCallback, useEffect, useState } from "react";

export default function usePoints(wrongLetters: string[]) {
  const [score, setScore] = useState(100);
  const [mistakes, setMistakes] = useState(6);
  useEffect(() => {
    handleScore();
    handleLoserScore();
    handleMistake();
  }, [wrongLetters]);

  const handleScore = useCallback(() => {
    if (wrongLetters.length) setScore(score - 10);
  }, [score, wrongLetters, setScore]);

  const handleLoserScore = useCallback(() => {
    if (wrongLetters.length === 6) setScore(0);
  }, [wrongLetters, setScore]);

  const handleMistake = useCallback(() => {
    if (wrongLetters.length) setMistakes(mistakes - 1);
  }, [mistakes, wrongLetters, setMistakes]);

  const handlePayToUseTips = useCallback(() => {
    setScore(score - 20);
  }, [score, setScore]);

  return {
    score,
    mistakes,

    handleScore,
    handleLoserScore,
    handlePayToUseTips,
  };
}
