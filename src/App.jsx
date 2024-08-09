import "./App.css";
import { useState, useEffect, useRef } from "react";
import Start from "./components/start/start";
import AudioButton from "./components/misc/Audio";

function App() {
  const [gameState, setGameState] = useState(0); // state variable for the state of the game.
  const [audioOn, setAudioOn] = useState(false);

  const audioRef = useRef(null); // Create a ref to control the audio element

  useEffect(() => {
    if (audioRef.current) {
      if (audioOn) {
        audioRef.current.play(); // Play the audio when audioOn is true
      } else {
        audioRef.current.pause(); // Pause the audio when audioOn is false
      }
    }
  }, [audioOn]);

  function turnOnAudio() {
    setAudioOn((prevState) => !prevState); // Toggle audioOn state
  }

  function handleStart() {
    setGameState(1);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex justify-center items-center  flex-grow ">
        {gameState === 0 && <Start></Start>}
      </main>
      <footer className="self-end w-full h-16 border border-black flex justify-between p-2">
        <AudioButton audioOn={audioOn} onClick={turnOnAudio}></AudioButton>
        {audioOn && (
          <audio ref={audioRef} src="/src/assets/audio/ThemeSong.mp3" loop />
        )}
      </footer>
    </div>
  );
}

export default App;
