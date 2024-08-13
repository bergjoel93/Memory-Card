import "./App.css";
import { useState, useEffect, useRef } from "react";
import Start from "./components/start/start";
import AudioButton from "./components/misc/Audio";
import PlayGame from "./components/playGame/PlayGame";
import End from "./components/end/End";

function App() {
  const [gameState, setGameState] = useState(1); // state variable for the state of the game.
  const [win, setWin] = useState(false);

  function handleStart() {
    console.log("Game started");
    setGameState(1);
  }

  function onGameOver(win) {
    if (win) {
      setWin(true);
    }
    setGameState(2);
  }

  function onRestart() {
    setGameState(1);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex justify-center items-center  flex-grow ">
        {gameState === 0 && <Start onStart={handleStart}></Start>}
        {gameState === 1 && <PlayGame endGame={onGameOver}></PlayGame>}
        {gameState === 2 && <End win={win} onRestart={onRestart}></End>}
      </main>
      <footer className="self-end w-full h-16 border border-black flex justify-between p-2">
        <AudioButton></AudioButton>
      </footer>
    </div>
  );
}

export default App;
