import Step from "./Step";

export default function Progress({ progress }) {
  return (
    <ul
      style={{ backgroundPositionY: "85%" }}
      className="flex items-center justify-center gap-6 bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat p-12 pb-24 text-white md:min-h-[568px] md:flex-col md:justify-start md:gap-10 md:rounded-lg md:bg-bottom md:p-12 md:pr-20"
    >
      <li className="md:w-full">
        <Step number={1} title="your info" active={progress == 1} />
      </li>
      <li className="md:w-full">
        <Step number={2} title="select plan" active={progress == 2} />
      </li>
      <li className="md:w-full">
        <Step number={3} title="add-ons" active={progress == 3} />
      </li>
      <li className="md:w-full">
        <Step number={4} title="summary" active={progress > 3} />
      </li>
    </ul>
  );
}
