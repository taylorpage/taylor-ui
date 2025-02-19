import { DESIGNS } from "../constants";

export default function formatClasses(
  classes: string | undefined,
  design: "primary" | "secondary" | "text" | undefined
) {
  return `${classes || ""}${classes && design ? " " : ""}${
    design ? DESIGNS[design] : ""
  }`;
}
