export default function Plan({ next, back, changeHandler }) {
  return (
    <>
      <div className="h-full w-full">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Select your plan
        </h1>
        <p className="mb-8 mt-2 text-gray-500">
          You have the option of monthly or yearly billing.
        </p>
        {/* put the form here */}
        <fieldset className="input-wrapper flex gap-4">
          <div className="h-[180px] w-full">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="arcade"
              value="arcade"
              onChange={changeHandler}
              defaultChecked
            />
            <label
              className="flex h-full w-full flex-col rounded-md border-2 border-gray-300 p-4 hover:border-indigo-500 peer-checked:border-indigo-500 peer-checked:bg-gray-100"
              htmlFor="arcade"
            >
              <img
                src="images/icon-arcade.svg"
                alt="arcade"
                height="48px"
                width="48px"
              />
              <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                Arcade
              </p>
              <p className="text-gray-500">$9/mo</p>
            </label>
          </div>

          <div className="h-[180px] w-full">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="advanced"
              value="advanced"
              onChange={changeHandler}
            />
            <label
              className="flex h-full w-full flex-col rounded-md border-2 border-gray-300 p-4 hover:border-indigo-500 peer-checked:border-indigo-500 peer-checked:bg-gray-100"
              htmlFor="advanced"
            >
              <img
                src="images/icon-advanced.svg"
                alt="advanced"
                height="48px"
                width="48px"
              />
              <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                Advanced
              </p>
              <p className="text-gray-500">$9/mo</p>
            </label>{" "}
          </div>

          <div className="h-[180px] w-full">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="pro"
              value="pro"
              onChange={changeHandler}
            />
            <label
              className="flex h-full w-full flex-col rounded-md border-2 border-gray-300 p-4 hover:border-indigo-500 peer-checked:border-indigo-500 peer-checked:bg-gray-100"
              htmlFor="pro"
            >
              <img
                src="images/icon-pro.svg"
                alt="pro"
                height="48px"
                width="48px"
              />
              <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                Pro
              </p>
              <p className="text-gray-500">$9/mo</p>
            </label>{" "}
          </div>
        </fieldset>
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
