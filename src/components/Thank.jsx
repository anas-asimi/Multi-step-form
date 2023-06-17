export default function Thank({ progress, next, back }) {
  return (
    <>
      <div className="mt-8 h-full">
        {/* put the html here */}
      </div>
      <div className="controll flex w-full">
        <button
          className={
            "mr-auto select-none rounded-md px-8 py-2 capitalize " +
            (progress == 1
              ? "cursor-not-allowed bg-transparent text-gray-600"
              : "bg-blue-600 text-white")
          }
          onClick={back}
        >
          go back
        </button>
        <button
          className={
            "ml-auto select-none rounded-md px-8 py-2 capitalize " +
            (progress == 5
              ? "cursor-not-allowed bg-transparent text-gray-600"
              : "bg-blue-600 text-white")
          }
          onClick={next}
        >
          next step
        </button>
      </div>
    </>
  );
}
