export default function Plan({ progress, next, back }) {
  return (
    <>
      <div className="mt-8 h-full">
        <h1 className="mb-2 font-UbuntuBold text-3xl text-blue-700">
          Select your plan
        </h1>
        <p className="mb-8 text-gray-500">
          You have the option of monthly or yearly billing.
        </p>
        {/* put the form here */}
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
