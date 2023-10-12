import { useContext } from "react";
import { Container, Letter, Underline, WordArea } from "./style";
import { AppContext } from "../../context";

export default function WordsViewerArea() {
  const { app } = useContext(AppContext);

  return (
    <Container>
      <WordArea>
        {!app.isLoser &&
          app.correctLetters.map((item, index) => (
            <div key={index}>
              {item == "" ? (
                <Underline>{item}</Underline>
              ) : (
                <Letter key={index}>{item}</Letter>
              )}
            </div>
          ))}

        {app.isLoser &&
          [...app.secretWord].map((letter, index) => (
            <Letter colors={!app.correctLetters.includes(letter)} key={index}>
              {letter}
            </Letter>
          ))}
      </WordArea>
    </Container>
  );
}
