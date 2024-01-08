import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Component/NavBar";
import Firstrow from "./Component/Firstrow";
import Secondrow from "./Component/Secondrow";






const App = () => {
  return (
    <>
      <div className="App">
          <NavBar/>

          <Firstrow/>

          <Secondrow/>
      </div>
    </>
  );
}


export default App;