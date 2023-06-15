import { useState } from "react";
import Progress from "./components/Progress";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Add_ons from "./components/Add_ons";
import Summary from "./components/Summary";
import Thank from "./components/thank";

export default function App() {
  /*
  we are representing pregess by number 
  while first page is 1
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
    <>
      <main className="w-100 flex h-full gap-8 rounded-md p-8">
        <Progress progress={progress} />
        {progress == 1 ? (
          <Info
            className="flex flex-grow items-center justify-center"
            next={next}
            back={back}
          />
        ) : null}
        {progress == 2 ? (
          <Plan
            className="flex flex-grow items-center justify-center"
            next={next}
            back={back}
          />
        ) : null}
        {progress == 3 ? (
          <Add_ons
            className="flex flex-grow items-center justify-center"
            next={next}
            back={back}
          />
        ) : null}
        {progress == 4 ? (
          <Summary
            className="flex flex-grow items-center justify-center"
            next={next}
            back={back}
          />
        ) : null}
        {progress == 5 ? (
          <Thank
            className="flex flex-grow items-center justify-center"
            next={next}
            back={back}
          />
        ) : null}
      </main>
    </>
  );
}
