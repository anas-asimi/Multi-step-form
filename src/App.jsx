import { useState } from "react";
import Progress from "./components/Progress";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Add_ons from "./components/Add_ons";
import Summary from "./components/Summary";
import Thank from "./components/Thank";

export default function App() {
  /*
  we are representing progress by number while :
  first page is 1
  and last one (thanks page) is 5
   */
  let [progress, setProgress] = useState(1);
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    monthly: true,
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
  });
  function next(x) {
    if (typeof x == "number") return setProgress(x);
    if (progress == 5) return;
    setProgress((progress) => progress + 1);
  }
  function back(x) {
    if (typeof x == "number") return setProgress(x);
    if (progress == 1) return;
    setProgress((progress) => progress - 1);
  }
  // update user data based on inputs change
  function changeHandler(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  }
  return (
    <main className="flex h-full w-full max-w-[1000px] flex-col md:bg-white pr-0 md:m-4 md:h-auto md:flex-row md:rounded-md md:p-4">
      <Progress progress={progress} />
      <div className="flex w-full h-full md:h-auto flex-col justify-between md:px-24 md:py-4">
        {progress == 1 ? (
          <Info
            changeHandler={changeHandler}
            back={back}
            next={next}
            {...data}
          />
        ) : null}
        {progress == 2 ? (
          <Plan
            changeHandler={changeHandler}
            back={back}
            next={next}
            {...data}
          />
        ) : null}
        {progress == 3 ? (
          <Add_ons
            changeHandler={changeHandler}
            back={back}
            next={next}
            {...data}
          />
        ) : null}
        {progress == 4 ? (
          <Summary
            changeHandler={changeHandler}
            back={back}
            next={next}
            {...data}
          />
        ) : null}
        {progress == 5 ? <Thank /> : null}
      </div>
    </main>
  );
}
