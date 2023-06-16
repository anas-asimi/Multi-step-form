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
      <div className="flex w-[800px] flex-col justify-between px-24 py-4">
        {progress == 1 ? (
          <Info progress={progress} back={back} next={next} />
        ) : null}
        {progress == 2 ? (
          <Plan progress={progress} back={back} next={next} />
        ) : null}
        {progress == 3 ? (
          <Add_ons progress={progress} back={back} next={next} />
        ) : null}
        {progress == 4 ? (
          <Summary progress={progress} back={back} next={next} />
        ) : null}
        {progress == 5 ? (
          <Thank progress={progress} back={back} next={next} />
        ) : null}
      </div>
    </main>
  );
}
