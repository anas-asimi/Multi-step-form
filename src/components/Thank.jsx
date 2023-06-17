export default function Thank() {
  return (
    <>
      <div className="flex gap-4 h-full w-full flex-col items-center justify-center">
        <img
          src="images/icon-thank-you.svg"
          alt="thank you"
          height="80"
          width="80"
        />
        <h1 className="mt-4 font-UbuntuBold text-3xl text-blue-700">
          Thank you
        </h1>
        <p className="mb-8 text-gray-500 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        {/* put the html here */}
      </div>
    </>
  );
}
