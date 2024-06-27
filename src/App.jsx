import { useState } from "react";
import { add } from "./utils/add";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div>Hey there !</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(add(num1, num2));
        }}
      >
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button type="submit">Get Result</button>
      </form>
      <div>Result: {result}</div>
    </>
  );
}

export default App;
