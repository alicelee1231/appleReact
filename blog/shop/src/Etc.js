import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(100).fill(0);

function Etc() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  //늦게 처리되는 state일 때 아래와 같이 쓰기
  let state = useDeferredValue(name);

  return (
    <div className="Etc">
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "loading"
        : a.map(() => {
            return <div>{state}</div>;
          })}
    </div>
  );
}

export default Etc;
