import "react";
import Button from "../lib/components/button";

import "./App.css";

function App() {
  return (
    <>
      <h1>Taylor UI</h1>
      <Button label="button" onClick={() => console.log("click")} />
    </>
  );
}

export default App;
