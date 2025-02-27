// Components
import Button from "../../../lib/components/button";

const ButtonPage = function () {
  return (
    <>
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
};

export default ButtonPage;
