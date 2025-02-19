import { DESIGNS } from "../constants";

export default function formatClasses(
  componentClass: string,
  classes: string | undefined,
  design: "primary" | "secondary" | "outline" | "text" | undefined
) {
  return `${componentClass}${classes || design ? " " : ""}${classes || ""}${
    classes && design ? " " : ""
  }${design ? DESIGNS[design] : ""}`;
}
