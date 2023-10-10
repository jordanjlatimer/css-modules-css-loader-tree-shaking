import { FunctionA } from "./SomethingElse";
import { classA } from "./styles.module.scss";

export function ComponentA() {
  FunctionA();
  return console.log(classA);
}
