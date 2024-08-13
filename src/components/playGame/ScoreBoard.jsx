export default function ScoreBoard({ score }) {
  return (
    <div className="flex justify-center m-2">
      <div className="text-2xl w-32 p-4 font-bold bg-amber-400 rounded-lg text-center">
        {score[0] + " / " + score[1]}
      </div>
    </div>
  );
}
