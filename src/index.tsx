import React from "react";
import { createRoot } from "react-dom/client";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

new EventSource("/esbuild").addEventListener("change", () => location.reload());

const div = document.getElementById("app");
if (div) {
  const root = createRoot(div);
  root.render(<App />);
}
