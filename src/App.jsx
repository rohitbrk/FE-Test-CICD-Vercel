import { useState } from "react";
import { add } from "./utils/add";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div>Hey there part 2 !</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(add(num1, num2));
          setNum1(0);
          setNum2(0);
        }}
      >
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <button type="submit">Get Result</button>
      </form>
      <div>Result: {result}</div>
    </>
  );
}

export default App;
