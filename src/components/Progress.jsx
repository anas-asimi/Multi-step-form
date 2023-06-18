import Step from "./Step";

export default function Progress({ progress }) {
  return (
    <ul className="flex min-h-[568px] flex-col gap-10 rounded-lg bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat bg-bottom p-12 pr-20 text-white">
      <li>
        <Step number={1} title="your info" active={progress == 1} />
      </li>
      <li>
        <Step number={2} title="select plan" active={progress == 2} />
      </li>
      <li>
        <Step number={3} title="add-ons" active={progress == 3} />
      </li>
      <li>
        <Step number={4} title="summary" active={progress > 3} />
      </li>
    </ul>
  );
}
