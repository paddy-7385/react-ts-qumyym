import React from "react";

import HelloWorld2 from "./Components/HelloWorld2";
import PureComponentExample from "./Components/PureComponentExample";

export default function App() {

   function LogMessage(e) {
     return(
      alert(e)
     );
  }
  
  return (
    <div>
        
      <HelloWorld2 />
      <PureComponentExample/>
    </div>
  );

 
}


