import { RiVolumeUpLine, RiVolumeMuteLine } from "@remixicon/react";
export default function AudioButton({ audioOn, onClick }) {
  return (
    <>
      <button className="ml-4" onClick={onClick}>
        {audioOn ? (
          <RiVolumeUpLine size={42}></RiVolumeUpLine>
        ) : (
          <RiVolumeMuteLine size={42}></RiVolumeMuteLine>
        )}
      </button>
    </>
  );
}
