import { MouseEventHandler, useEffect, useState } from "react";
import { words } from "../constants/WordsToGame";
import { useLocation } from "react-router-dom";

export default function useGame() {
  const [description, setDescription] = useState<string[]>([]);
  const generateSecretWord = () => {
    const number = Math.floor(Math.random() * words.length);
    setDescription(words[number].tips);

    return words[number].word.toUpperCase().trim();
  };

  const secretWord = useState<string>(() => generateSecretWord())[0];
  const [count, setCount] = useState<number>(0);
  const [letter, setLetter] = useState<string>("");
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [isGameOn, setIsGameOn] = useState<boolean>(false);

  const isWinner = secretWord
    .split("")
    .every((letter) => correctLetters.includes(letter));

  const isLoser = wrongLetters.length == 6;

  const handleMouseClick: MouseEventHandler = (e) => {
    const keyValue = (e.target as HTMLInputElement).innerText;
    setLetter(keyValue);
  };

  const generateUnsolvedLettersList = () => {
    const unsolvedLetters = secretWord
      .split("")
      .filter(
        (letter) =>
          !correctLetters.includes(letter) && !wrongLetters.includes(letter)
      );
    return unsolvedLetters;
  };

  const handleTipsButtonClick: MouseEventHandler = () => {
    setCount((prev) => prev + 1);
    const unsolvedLetters = generateUnsolvedLettersList();
    if (unsolvedLetters.length > 0 && count < 2) {
      const randomIndex = Math.floor(Math.random() * unsolvedLetters.length);
      const randomLetter = unsolvedLetters[randomIndex];
      setLetter(randomLetter);
    }
  };

  const handleKeyboardPress = (e: KeyboardEvent) => {
    if (isPressedLetter(e.keyCode)) {
      let keyPress = e.key.toUpperCase();
      setLetter(keyPress);
    }
  };

  const isPressedLetter = (press: number) => {
    if (press >= 65 && press <= 90) return true;
    // if (press == 13) handleConfirmPay();
  };

  const isCorrectLetters = () => {
    const newList = [...correctLetters];
    const secretWordArray = [...secretWord];

    for (const [index, char] of secretWordArray.entries()) {
      const normalizeChar = char
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (normalizeChar === letter) {
        newList[index] = char;
        setCorrectLetters(newList);
      }

      if (correctLetters[index] == undefined) {
        newList[index] = "";
        setCorrectLetters(newList);
      }
    }
  };

  const isWrongLetters = () => {
    const includes = !secretWord.includes(letter);
    const breaksSameLetters = !wrongLetters.includes(letter);

    if (includes && breaksSameLetters) {
      const newList = [...wrongLetters];
      newList.push(letter);
      setWrongLetters(newList);
    }
  };

  const whoPage = () => {
    const location = useLocation();
    if (location.pathname == "/game") {
      setIsGameOn(true);
    }
  };

  console.log(location.pathname);

  useEffect(() => {
    if (!isWinner && !isLoser) {
      isCorrectLetters();
      isWrongLetters();
    }
  }, [letter]);

  useEffect(() => {
    console.log(secretWord);
    while (isGameOn) {
      document.addEventListener("keydown", handleKeyboardPress);
      return () => {
        document.removeEventListener("keydown", handleKeyboardPress);
      };
    }
  }, [isGameOn]);
  console.log(isGameOn);
  return {
    secretWord,
    description,
    letter,
    correctLetters,
    wrongLetters,
    isWinner,
    isLoser,
    count,

    whoPage,
    handleMouseClick,
    handleTipsButtonClick,
  };
}
