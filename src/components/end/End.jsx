export default function End({ win, onRestart }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-6 border-8 border-bobRed bg-bobBrown outline shadow font-cartoon text-3xl">
      {win ? <h2>You won!</h2> : <h2>You Lost!</h2>}
      <button
        className="font-cartoon text-3xl bg-bobYellow p-3 border-8 rounded hover:scale-110 transition-transform border-bobRed"
        onClick={onRestart}
      >
        Play Again?
      </button>
    </div>
  );
}
