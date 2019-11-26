import React from "react";

import HelloWorld from "./Components/HelloWorld";
import HelloWorld2 from "./Components/HelloWorld2";

export default function App() {
  return (
    <div>
      <HelloWorld name="John"/>
      <HelloWorld2 firstName="John" lastName ="Smith" salary="5000" />
    </div>
  );
}
