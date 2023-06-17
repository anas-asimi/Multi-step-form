export default function Info({ next, back }) {
  return (
    <>
      <div className="h-full w-full">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Personnel info
        </h1>
        <p className="mb-8 mt-2 text-gray-500">
          Please provide your name, email address, and phone number.
        </p>
        <div className="input-wrapper mb-4">
          <div className="input flex flex-col gap-1">
            <label htmlFor="name" className="text-blue-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-12 rounded-md border-2 border-gray-300 px-2"
              placeholder="eg. Stephen King"
            />
          </div>
        </div>
        <div className="input-wrapper mb-4">
          <div className="input flex flex-col gap-1">
            <label htmlFor="email" className="text-blue-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-12 rounded-md border-2 border-gray-300 px-2"
              placeholder="eg. stephenking@lorem.com"
            />
          </div>
        </div>
        <div className="input-wrapper mb-4">
          <div className="input flex flex-col gap-1">
            <label htmlFor="phone" className="text-blue-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="h-12 rounded-md border-2 border-gray-300 px-2"
              placeholder="eg. +1 234 567 890"
            />
          </div>
        </div>
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
