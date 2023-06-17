export default function Add_ons({ next, back }) {
  return (
    <>
      <div className="h-full w-full">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Pick add-ons
        </h1>
        <p className="mb-8 mt-2 text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>
        {/* put the form here */}
      </div>
      <div className="controll flex w-full">
        <button
          className="mr-auto select-none rounded-md bg-transparent px-8 py-2 capitalize text-gray-600"
          onClick={back}
        >
          go back
        </button>
        <button
          className="ml-auto select-none rounded-md bg-blue-600 px-8 py-2 capitalize text-white"
          onClick={next}
        >
          next step
        </button>
      </div>
    </>
  );
}
