import React from "react";
import Game from "./components/game";
import { ResetCSS } from "./global/resetCSS";
import "./index.css";

const App = () => {
  return (
    <React.Fragment>
      <Game />;
      <ResetCSS />
    </React.Fragment>
  );
};

export default App;
