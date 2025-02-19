import "react";
import Button from "../lib/components/button";

import "./App.scss";

function App() {
  return (
    <>
      <h1>Taylor UI</h1>
      <Button
        design="primary"
        label="Primary"
        onClick={() => console.log("click")}
      />
      <Button
        design="secondary"
        label="Secondary"
        onClick={() => console.log("click")}
      />
      <Button
        design="outline"
        label="Outline"
        onClick={() => console.log("click")}
      />
      <Button design="text" label="Text" onClick={() => console.log("click")} />
    </>
  );
}

export default App;
