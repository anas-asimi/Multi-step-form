import { useRef } from "react";

export default function Info({
  next,
  back,
  changeHandler,
  name,
  email,
  phone,
}) {
  const nameElement = useRef(null);
  const emailElement = useRef(null);
  const phoneElement = useRef(null);

  function submit() {
    // check name value
    if (nameElement.current.validity.valid) {
      nameElement.current.classList.remove("is-not-valid");
    } else {
      nameElement.current.classList.add("is-not-valid");
      return;
    }
    // check email value
    if (emailElement.current.validity.valid) {
      emailElement.current.classList.remove("is-not-valid");
    } else {
      emailElement.current.classList.add("is-not-valid");
      return;
    }
    // check phone value
    if (phoneElement.current.validity.valid) {
      phoneElement.current.classList.remove("is-not-valid");
    } else {
      phoneElement.current.classList.add("is-not-valid");
      return;
    }
    // if all inputs are valid
    next();
  }
  return (
    <>
      <div className="relative bottom-16 mx-6 h-full rounded-lg bg-white p-8 md:static">
        <h1 className="mt-8 font-UbuntuBold text-3xl text-blue-700">
          Personal info
        </h1>
        <p className="mb-8 mt-2 text-gray-400">
          Please provide your name, email address, and phone number.
        </p>
        {/* ===================== */}
        <div className="input relative mb-3 flex flex-col gap-1">
          <label htmlFor="name" className="text-blue-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="peer h-12 rounded-md border-2 border-gray-300 px-2"
            placeholder="eg. Stephen King"
            required
            onChange={changeHandler}
            ref={nameElement}
            value={name}
          />
          <span className="invisible absolute right-0 text-red-500 peer-[.is-not-valid]:visible">
            This field is required
          </span>
        </div>
        {/* ===================== */}
        <div className="input relative mb-3 flex flex-col gap-1">
          <label htmlFor="email" className="text-blue-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="peer h-12 rounded-md border-2 border-gray-300 px-2"
            placeholder="eg. stephenking@lorem.com"
            required
            onChange={changeHandler}
            ref={emailElement}
            value={email}
          />
          <span className="invisible absolute right-0 text-red-500 peer-[.is-not-valid]:visible">
            This field is required
          </span>
        </div>
        {/* ===================== */}
        <div className="input relative mb-3 flex flex-col gap-1">
          <label htmlFor="phone" className="text-blue-700">
            Phone Number
          </label>
          <input
            type="text"
            min={6}
            max={12}
            name="phone"
            id="phone"
            className="peer h-12 rounded-md border-2 border-gray-300 px-2"
            placeholder="eg. +1 234 567 890"
            required
            onChange={changeHandler}
            ref={phoneElement}
            value={phone}
          />
          <span className="invisible absolute right-0 text-red-500 peer-[.is-not-valid]:visible">
            This field is required
          </span>
        </div>
        {/* ===================== */}
      </div>
      <div className="controll flex w-full bg-white p-4 md:p-0">
        <button
          className="invisible mr-auto select-none rounded-md bg-transparent px-8 py-2 capitalize text-gray-600"
          onClick={back}
        >
          go back
        </button>
        <button
          className="ml-auto select-none rounded-md bg-blue-600 px-8 py-2 capitalize text-white"
          onClick={submit}
        >
          next step
        </button>
      </div>
    </>
  );
}
