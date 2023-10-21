import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { words } from "../constants/WordsToGame";

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

  const handleMouseClick: MouseEventHandler = useCallback(
    (e) => {
      const keyValue = (e.target as HTMLInputElement).innerText;
      setLetter(keyValue);
    },
    [setLetter]
  );

  const generateUnsolvedLettersList = useCallback(() => {
    const unsolvedLetters = secretWord
      .split("")
      .filter(
        (letter) =>
          !correctLetters.includes(letter) && !wrongLetters.includes(letter)
      );
    return unsolvedLetters;
  }, [secretWord, correctLetters, wrongLetters]);

  const handleTipsButtonClick = useCallback(() => {
    setCount((prev) => prev + 1);
    const unsolvedLetters = generateUnsolvedLettersList();
    if (unsolvedLetters.length > 0 && count < 2) {
      const randomIndex = Math.floor(Math.random() * unsolvedLetters.length);
      const randomLetter = unsolvedLetters[randomIndex];
      setLetter(randomLetter);
    }
  }, [count, generateUnsolvedLettersList]);

  const handleKeyboardPress = useCallback((e: KeyboardEvent) => {
    if (isPressedLetter(e.keyCode)) {
      let keyPress = e.key.toUpperCase();
      setLetter(keyPress);
    }
  }, []);

  const isPressedLetter = (press: number) => {
    if (press >= 65 && press <= 90) return true;
    // if (press == 13) handleConfirmPay();
  };

  const isCorrectLetters = () => {
    const newCorrectLetters = [...correctLetters];
    const newSecretWord = [...secretWord];

    for (const [index, char] of newSecretWord.entries()) {
      const normalizeChar = char
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (normalizeChar === letter) {
        newCorrectLetters[index] = char;
        setCorrectLetters(newCorrectLetters);
      }

      if (correctLetters[index] == undefined) {
        newCorrectLetters[index] = "";
        setCorrectLetters(newCorrectLetters);
      }
    }
  };

  const isWrongLetters = () => {
    const normalize = secretWord
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const includes = !normalize.includes(letter);
    const breaksSameLetters = !correctLetters.includes(letter);

    if (includes && breaksSameLetters) {
      const newList = [...wrongLetters];
      newList.push(letter);
      setWrongLetters(newList);
    }
  };

  const handleIsGameOn = (isOn: boolean) => {
    setIsGameOn(isOn);
  };

  useEffect(() => {
    if (!isWinner && !isLoser) {
      isCorrectLetters();
      isWrongLetters();
    }
  }, [letter]);

  useEffect(() => {
    console.log(secretWord);
    if (isGameOn) {
      document.addEventListener("keydown", handleKeyboardPress);
      return () => {
        document.removeEventListener("keydown", handleKeyboardPress);
      };
    }
  }, [isGameOn]);

  return {
    secretWord,
    description,
    letter,
    correctLetters,
    wrongLetters,
    isWinner,
    isLoser,
    count,
    handleIsGameOn,
    handleMouseClick,
    handleTipsButtonClick,
  };
}
