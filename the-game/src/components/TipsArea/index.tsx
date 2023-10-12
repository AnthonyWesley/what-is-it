import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { AppContext } from "../../context";

import { Sparkle } from "phosphor-react";

export default function TipsArea() {
  const { app } = useContext(AppContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount == 2) return 0;
        else return prevCount + 1;
      });
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container title="Dicas">
      <p>{app.description[count]}</p>
      <Sparkle size={25} color="#000000" weight="duotone" />
    </Container>
  );
}
