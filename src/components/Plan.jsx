export default function Plan({ next, back, changeHandler, plan, monthly }) {
  return (
    <>
      <div className="relative bottom-16 mx-6 h-full rounded-lg bg-white p-8">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Select your plan
        </h1>
        <p className="mb-8 mt-2 text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
        <fieldset className="input-wrapper flex flex-col gap-4">
          {/* ===================== */}
          <div className="w-full md:h-[180px]">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="arcade"
              value="arcade"
              onChange={changeHandler}
              checked={plan == "arcade" ? true : false}
            />
            <label
              className="flex w-full gap-4 rounded-md border-2 border-gray-300 p-4 hover:border-indigo-400 peer-checked:border-indigo-500 peer-checked:bg-gray-100 md:flex-col"
              htmlFor="arcade"
            >
              <img
                src="images/icon-arcade.svg"
                alt="arcade"
                height="48px"
                width="48px"
              />
              <div>
                <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                  Arcade
                </p>
                <p className="text-gray-400">{monthly ? "$9/mo" : "$90/yr"}</p>
              </div>
            </label>
          </div>
          {/* ===================== */}
          <div className="w-full md:h-[180px]">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="advanced"
              value="advanced"
              onChange={changeHandler}
              checked={plan == "advanced" ? true : false}
            />
            <label
              className="flex w-full gap-4 rounded-md border-2 border-gray-300 p-4 hover:border-indigo-400 peer-checked:border-indigo-500 peer-checked:bg-gray-100 md:flex-col"
              htmlFor="advanced"
            >
              <img
                src="images/icon-advanced.svg"
                alt="advanced"
                height="48px"
                width="48px"
              />
              <div>
                <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                  Advanced
                </p>
                <p className="text-gray-400">
                  {monthly ? "$12/mo" : "$120/yr"}
                </p>
              </div>
            </label>{" "}
          </div>
          {/* ===================== */}
          <div className="w-full md:h-[180px]">
            <input
              className="peer hidden"
              type="radio"
              name="plan"
              id="pro"
              value="pro"
              onChange={changeHandler}
              checked={plan == "pro" ? true : false}
            />
            <label
              className="flex w-full gap-4 rounded-md border-2 border-gray-300 p-4 hover:border-indigo-400 peer-checked:border-indigo-500 peer-checked:bg-gray-100 md:flex-col"
              htmlFor="pro"
            >
              <img
                src="images/icon-pro.svg"
                alt="pro"
                height="48px"
                width="48px"
              />
              <div>
                <p className="mt-auto font-UbuntuBold text-lg text-blue-700">
                  Pro
                </p>
                <p className="text-gray-400">
                  {monthly ? "$15/mo" : "$150/yr"}
                </p>
              </div>{" "}
            </label>
          </div>
          {/* ===================== */}
        </fieldset>
        <div className="mt-6 flex items-center justify-center gap-4 rounded-md bg-gray-100 py-2 font-UbuntuMedium">
          <input
            type="checkbox"
            name="monthly"
            id="monthly"
            className="peer hidden"
            onChange={changeHandler}
            checked={monthly}
          />
          <p className="text-gray-400 peer-checked:text-blue-700">Monthly</p>
          <label
            htmlFor="monthly"
            className="h-6 w-10 rounded-3xl bg-blue-700 p-1"
          >
            <div className="relative float-right aspect-square h-4 rounded-full bg-white transition-all"></div>
          </label>
          <p className="text-blue-700 peer-checked:text-gray-400">Yearly</p>
        </div>
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
