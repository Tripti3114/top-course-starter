import React, { useState, useEffect } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";




const App = () => {
 const [courses, setCourses] = useState(null);
 const [Loading, setLoading] = useState(true);
 const [category, setCategory] = useState(filterData[0].title);
 const fetchData=async () => {
  setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourses(data.data);
    }
    catch(error){
      toast.error("Error in fetching data");
    }
    setLoading(false);
  }
  useEffect(() => {
  
  fetchData();
},[]);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
      <Navbar />
        </div>
        <div className="min-h-screen">
        <div>
      <Filter filterData={filterData}  category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center 
        items-center min-h-[50vh]
        
        ">
     {
      Loading ? (<Spinner/>) : (<Cards courses={courses}  category={category}/>)
     }
      </div>
      </div>
    </div>);
};

export default App;
