import * as S from "./Global";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import { useContext } from "react";
import { AppContext } from "./context";

export default function App() {
  const { app } = useContext(AppContext);
  const hasUser = app.users.length > 0;

  return (
    <HashRouter>
      <S.Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route
            path="/game"
            element={hasUser ? <Game /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </S.Container>
    </HashRouter>

    //
  );
}
