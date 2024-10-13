import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [Category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong.");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <Navbar></Navbar>
      <div className="bg-bgDark2">

        <div><Filter filterData={filterData} Category = {Category} setCategory = {setCategory}></Filter></div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} Category = {Category}></Cards>}
        </div>
      </div>
    </div>
  );
};

export default App;
