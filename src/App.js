import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl,filterData } from "./data";

const App = () => {





  return (
    <div>
      <Navbar></Navbar>

      <Filter filterData = {filterData}></Filter>

      <Cards></Cards>
    </div>
  );
};

export default App;
