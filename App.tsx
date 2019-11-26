import React from "react";

import HelloWorld from "./Components/HelloWorld";
import HelloWorld2 from "./Components/HelloWorld2";

export default function App() {

   function LogMessage(e) {
     return(
      alert(e)
     );
  }
  
  return (
    <div>
     
      <HelloWorld
        name="John"
        myButtonClickHandler={LogMessage}
      />
      
      <HelloWorld2 firstName="John" lastName="Smith" salary="5000" />
    </div>
  );

 
}


