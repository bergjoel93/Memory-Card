import FetchCharacters from "./FetchCharacters";
import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";

export default function CharacterCards({ endGame }) {
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState([]);

  useEffect(() => {
    let scoreCount = characters.filter((character) => {
      return character.clicked;
    }).length;
    // update the score coutn
    setScore([scoreCount, characters.length]);
  }, [characters]);

  const fetchData = async () => {
    const fetchedCharacters = await FetchCharacters();
    const newCharacterList = fetchedCharacters.map((character, i) => ({
      id: i,
      name: character.name,
      image: character.image,
      clicked: false,
    }));
    setCharacters(newCharacterList);
  };
  // We got the character list state. we could shuffle the character list state and then generate cards based off that. But the caveot is, we need at least 1 card that hasn't been clicked to be in the first 12 of the list.
  const shuffleCards = () => {
    // we want at least 1 of the character cards that hasn't been selected to show up.
    // iterate through list until you find one element that hasn't been clicked.
    const index = characters.findIndex((character) => !character.clicked); // find the index of the first unclicked character.
    const removedCharacter = characters[index];
    // create a new list without the first unclicked character.
    let newList = [
      ...characters.slice(0, index),
      ...characters.slice(index + 1),
    ];
    newList = [...newList].sort(() => 0.5 - Math.random()); // randomly shuffles.
    //console.log("shuffled list without unclicked", newList);
    // generate a random index value between 0 and 11.
    const randomIndex = Math.floor(Math.random() * 12);
    // insert the removedCharacter into the list at randonly generated spot.
    newList.splice(randomIndex, 0, removedCharacter);
    //iterate through list and check to see if at least 1 of the 12 have not been clicked.
    setCharacters(newList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(id) {
    const newCharacters = characters.map((character) => {
      // if clicked, score increases if
      if (character.id === id) {
        // check if character has already been clicked.
        if (character.clicked === true) {
          // game ends.
          endGame(false);
        }
        character.clicked = true; // when you find the character, update to true.
      }
      return character;
    });

    setCharacters(newCharacters); // updates the characters state.
    setScore([[score[0] + 1], characters.length]); // updates the score state
    if (checkWin()) {
      endGame(true);
    }
    checkWin();
    // shuffle the cards
    shuffleCards();
    // This block checks to see if we should reshuffle again because there isn't a character shown on the gameboard.
  }

  function checkWin() {
    return characters.every((character) => {
      return character.clicked;
    });
  }

  const generateCards = () => {
    // only display first 12 in list.
    return characters.slice(0, 12).map((character, i) => (
      <div
        key={i}
        id={character.id}
        className="flex justify-center items-center bg-black p-3 cursor-pointer overflow-hidden"
        onClick={() => handleClick(character.id)}
      >
        <div className="w-40 h-40 overflow-hidden ">
          <img
            src={character.image}
            className="object-contain "
            alt={character.name + "'s image"}
          />
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{generateCards()}</div>
      <ScoreBoard score={score}></ScoreBoard>
    </div>
  );
}
