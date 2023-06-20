export default function Summary({
  next,
  back,
  plan,
  monthly,
  online_service,
  larger_storage,
  customizable_profile,
}) {
  function getTotal() {
    let total = 0;
    if (monthly) {
      if (plan == "arcade") total += 9;
      if (plan == "advanced") total += 12;
      if (plan == "pro") total += 15;
      if (online_service) total += 1;
      if (larger_storage) total += 2;
      if (customizable_profile) total += 2;
    } else {
      if (plan == "arcade") total += 90;
      if (plan == "advanced") total += 120;
      if (plan == "pro") total += 150;
      if (online_service) total += 10;
      if (larger_storage) total += 20;
      if (customizable_profile) total += 20;
    }
    return total;
  }
  return (
    <>
      <div className="relative bottom-16 mx-6 h-full rounded-lg bg-white p-8">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Finishing up
        </h1>
        <p className="mb-8 mt-2 text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
        {/* put the form here */}
        <div className="flex flex-col gap-2 rounded-md bg-gray-100 p-6">
          <div className="flex items-center">
            <div>
              <p className="text w-full font-UbuntuBold capitalize text-blue-700">
                {plan} ({monthly ? "monthly" : "Yearly"})
              </p>
              <a
                className="cursor-pointer text-gray-400 underline"
                onClick={() => next(2)}
              >
                Change
              </a>
            </div>
            <span className="ml-auto font-UbuntuBold text-blue-700">
              {plan == "arcade" && (monthly ? "$9/mo" : "$90/yr")}
              {plan == "advanced" && (monthly ? "$12/mo" : "$120/yr")}
              {plan == "pro" && (monthly ? "$15/mo" : "$150/yr")}
            </span>
          </div>
          {online_service || larger_storage || customizable_profile ? (
            <p className="my-3 h-[1px] w-full bg-gray-300"></p>
          ) : (
            ""
          )}
          {online_service && (
            <p className="text-gray-400">
              Online service
              <span className="float-right text-blue-700">
                {monthly ? "+$1/mo" : "+$10/yr"}
              </span>
            </p>
          )}
          {larger_storage && (
            <p className="text-gray-400">
              Larger storage
              <span className="float-right text-blue-700">
                {monthly ? "+$2/mo" : "+$20/yr"}
              </span>
            </p>
          )}
          {customizable_profile && (
            <p className="text-gray-400">
              Customizable profile
              <span className="float-right text-blue-700">
                {monthly ? "+$2/mo" : "+$20/yr"}
              </span>
            </p>
          )}
        </div>
        <p className="m-6 text-gray-400">
          Total (per {monthly ? "month" : "year"})
          <span className="float-right font-UbuntuBold text-blue-700 text-lg">
            {monthly ? `+${getTotal()}/mo` : `+${getTotal()}/yr`}
          </span>
        </p>
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
