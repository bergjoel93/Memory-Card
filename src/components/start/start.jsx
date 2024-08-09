export default function Start() {
  return (
    <div className="  flex flex-col gap-4 justify-center items-center p-6 border-8 border-bobRed bg-bobBrown outline shadow">
      <div id="bobsBurgersLogo"></div>
      <h1 className="font-cartoon text-7xl">Memory Card Game</h1>
      <h2 className="font-lucky">Developed by Joel Scott</h2>
      <button className="font-cartoon text-3xl bg-bobYellow p-3 border-8 rounded hover:scale-110 transition-transform border-bobRed">
        Start Game!
      </button>
      <div className="flex ">
        <img
          className="w-50"
          src="./src/assets/images/tina.gif"
          alt="tina gif"
        />
        <img className="w-[200px]" src="./src/assets/images/linda.gif"></img>
      </div>
    </div>
  );
}
