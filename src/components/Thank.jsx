export default function Thank() {
  return (
    <>
      <div className="relative bottom-16 mx-6 flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-8">
        <img
          src="images/icon-thank-you.svg"
          alt="thank you"
          height="80"
          width="80"
        />
        <h1 className="mt-4 font-UbuntuBold text-3xl text-blue-700">
          Thank you
        </h1>
        <p className="mb-8 text-center text-gray-400">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        {/* put the html here */}
      </div>
    </>
  );
}
