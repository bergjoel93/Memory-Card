const url =
  "https://bobsburgers-api.herokuapp.com/characters/[%2018,%2048,%2051,%2063,%20155,%20166,%20167,%20204,%20227,%20228,%20230,%20275,%20280,%20289,%20307,%20317,%20410,%20420,%20456,%20457,%20467%20]";

const FetchCharacters = async () => {
  let response = await fetch(url, { mode: "cors" });
  const data = await response.json();

  const objArray = data.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));

  return objArray;
};

export default FetchCharacters;
