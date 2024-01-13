import React, { useState } from "react";
const StateHook = () => {
  // to maintain a stae in the function compoenent there are tow hooks: 1. useState() 2. useEffect()

  // const arr = useState(initialValue)
  // arr[0] //state
  // ara[1]//dispatch

  // const [var1, var2, varN]=arr
  // const[state, dispatch]=arr
  // const[state, dispatch]=useState(initialValue)

  // useState returns an array of state and dispatch function
  // state- the value Will be maintained during the rerendering
  // dispatch- it is a function used to change the state

  const [count, setCount] = useState();
  const increment = () => {
    //   use below when you want to perform an operation on the new state everytime.
    //   setCount(count + 5)
    //   setCount(count + 5)
    //   setCount(count + 5)
    //   setCount(count + 5)
    //   setCount(count + 5)
    //   setCount(count + 5)

    // use it when you want to perform an operation on the current value
    setCount((count) => count + 5);
    setCount((count) => count + 5);
    setCount((count) => count + 5);
    setCount((count) => count + 5);
    setCount((count) => count + 5);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  //   array in the state
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const addCity = () => {
    //   cities.push(city)
    setCities([...cities, city]);
    console.log("cities:-", cities);
  };

  return (
    <>
      <h2>State Hook- {count}</h2>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
      <hr />
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={addCity}>Add City</button>
      <hr />
      <ul>
        {Array.isArray(cities) &&
          cities.map((city) => <li key={city}>{city}</li>)}
      </ul>
    </>
  );
};

export default StateHook;
