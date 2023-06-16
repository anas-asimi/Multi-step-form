import { useState } from "react";
import Progress from "./components/Progress";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Add_ons from "./components/Add_ons";
import Summary from "./components/Summary";
import Thank from "./components/thank";

export default function App() {
  /*
  we are representing progress by number while :
  first page is 1
  and last one (thanks page) is 5
   */
  let [progress, setProgress] = useState(1);
  function next() {
    if (progress == 5) return;
    setProgress((progress) => progress + 1);
  }
  function back() {
    if (progress == 1) return;
    setProgress((progress) => progress - 1);
  }
  return (
    <main className="flex bg-white p-4">
      <Progress progress={progress} />
      <div className="flex w-[600px] flex-col justify-between px-16 py-4">
        {progress == 1 ? <Info /> : null}
        {progress == 2 ? <Plan /> : null}
        {progress == 3 ? <Add_ons /> : null}
        {progress == 4 ? <Summary /> : null}
        {progress == 5 ? <Thank /> : null}
        <div className="controll flex w-full justify-between">
          <button
            className={
              "select-none rounded-md px-8 py-2 capitalize " +
              (progress == 1
                ? "cursor-not-allowed bg-transparent text-gray-600"
                : "bg-blue-600 text-white")
            }
            onClick={back}
          >
            go back
          </button>
          <button
            className={
              "select-none rounded-md px-8 py-2 capitalize " +
              (progress == 5
                ? "cursor-not-allowed bg-transparent text-gray-600"
                : "bg-blue-600 text-white")
            }
            onClick={next}
          >
            next step
          </button>
        </div>
      </div>
    </main>
  );
}
