import React, { useReducer, useEffect } from "react";
function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Counter step={step} />
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    </>
  );
}
  
export default Counter
