// eslint-disable-next-line
import { useState, useTransition, useDeferredValue, useEffect } from "react";

let a = new Array(100).fill(0);

function Etc() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let [age, setAge] = useState(20);
  let [count, setCount] = useState(0);
  //늦게 처리되는 state일 때 아래와 같이 쓰기
  let state = useDeferredValue(name);

  useEffect(() => {
    if (count != 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);

  return (
    <>
      {" "}
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
      <div>
        <div>hi {age}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼 누르면 한살 먹음
        </button>
      </div>
    </>
  );
}

export default Etc;
