import CharacterCards from "./CharacterCards";
import { useEffect, useState } from "react";
export default function PlayGame({ endGame }) {
  return (
    <>
      <div className="flex mt-6">
        <CharacterCards endGame={endGame}></CharacterCards>
      </div>
    </>
  );
}
