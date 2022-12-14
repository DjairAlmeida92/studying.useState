/*TRABALHANDO COM OPERADORES TERNÁRIOS*/

import styles from "./App.css";

function TernaryO() {
  const age = 20;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>OverAge</h1> : <h1> Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}> this has color </h1>

      {isGreen && <button> this is a button</button>}
    </div>
  );
}

export default TernaryO;
