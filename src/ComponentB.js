import { FunctionA } from "./SomethingElse";
import { classA } from "./styles.module.scss";

export function ComponentB() {
  FunctionA();
  console.log(classA);
}
