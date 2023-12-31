export default function Add_ons({
  next,
  back,
  changeHandler,
  online_service,
  larger_storage,
  customizable_profile,
  monthly,
}) {
  return (
    <>
      <div className="relative bottom-16 mx-6 h-full rounded-lg bg-white p-8">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Pick add-ons
        </h1>
        <p className="mb-8 mt-2 text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>
        {/* ===================== */}
        <label
          htmlFor="online_service"
          className="mb-4 flex w-full items-center gap-6 rounded-md border-2 border-gray-200 px-6 py-4 [&:has(:checked)]:border-blue-700 [&:has(:checked)]:bg-gray-100"
        >
          <input
            type="checkbox"
            name="online_service"
            id="online_service"
            className="scale-150"
            onChange={changeHandler}
            checked={online_service}
          />
          <div>
            <p className="font-UbuntuMedium text-blue-700">Online services</p>
            <p className="text-gray-400">Access to multiplayer games</p>
          </div>
          <span className="ml-auto text-blue-700">
            {monthly ? "+$1/mo" : "+$10/yr"}
          </span>
        </label>
        {/* ===================== */}
        <label
          htmlFor="larger_storage"
          className="mb-4 flex w-full items-center gap-6 rounded-md border-2 border-gray-200 px-6 py-4 [&:has(:checked)]:border-blue-700 [&:has(:checked)]:bg-gray-100"
        >
          <input
            type="checkbox"
            name="larger_storage"
            id="larger_storage"
            className="scale-150"
            onChange={changeHandler}
            checked={larger_storage}
          />
          <div>
            <p className="font-UbuntuMedium text-blue-700">Larger storage</p>
            <p className="text-gray-400">Access to multiplayer games</p>
          </div>
          <span className="ml-auto text-blue-700">
            {monthly ? "+$2/mo" : "+$20/yr"}
          </span>
        </label>
        {/* ===================== */}
        <label
          htmlFor="customizable_profile"
          className="mb-4 flex w-full items-center gap-6 rounded-md border-2 border-gray-200 px-6 py-4 [&:has(:checked)]:border-blue-700 [&:has(:checked)]:bg-gray-100"
        >
          <input
            type="checkbox"
            name="customizable_profile"
            id="customizable_profile"
            className="scale-150"
            onChange={changeHandler}
            checked={customizable_profile}
          />
          <div>
            <p className="font-UbuntuMedium text-blue-700">
              Customizable profile
            </p>
            <p className="text-gray-400">Access to multiplayer games</p>
          </div>
          <span className="ml-auto text-blue-700">
            {monthly ? "+$2/mo" : "+$20/yr"}
          </span>
        </label>
      </div>
      <div className="controll flex w-full bg-white p-4 md:p-0">
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
