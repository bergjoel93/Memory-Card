import { RiVolumeUpLine, RiVolumeMuteLine } from "@remixicon/react";
import { useState } from "react";

export default function AudioButton() {
  const [audioOn, setAudioOn] = useState(false);
  function turnOnAudio() {
    setAudioOn((prevState) => !prevState); // Toggle audioOn state
  }
  return (
    <>
      <button className="ml-4" onClick={turnOnAudio}>
        {audioOn ? (
          <RiVolumeUpLine size={42}></RiVolumeUpLine>
        ) : (
          <RiVolumeMuteLine size={42}></RiVolumeMuteLine>
        )}
      </button>
      {audioOn && <audio src="./audio/ThemeSong.mp3" loop autoPlay />}
    </>
  );
}
