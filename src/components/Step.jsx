/* eslint-disable react/prop-types */
export default function Step(props) {
  return (
    <div className="flex w-max items-center gap-4 uppercase">
      <div
        className={
          "flex aspect-square h-12 items-center justify-center rounded-full border-2 border-blue-300 font-UbuntuMedium text-xl " +
          (props.active ? "bg-blue-300 text-black" : "")
        }
      >
        {props.number}
      </div>
      <div>
        <p className="text-gray-300">step {props.number}</p>
        <p className="font-UbuntuMedium">{props.title}</p>
      </div>
    </div>
  );
}
