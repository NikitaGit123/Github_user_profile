import axios from "axios";
import React, {useState } from "react";
import "./App.css";
import Userdata from "./Components/Userdata";
import SearchBar from "./Components/SearchBar";
import NextPrevbutton from "./Components/NextPrevbutton";

function App() {
  const [imgs, setimgs] = useState("");
  const [data, setdata] = useState([]);
  const [page,setpage]=useState(1)
  const [pagesize]=useState(6)
  
  
  const getImage = () => {
    axios.get(`https://api.github.com/users/${imgs}/repos?&per_page=${pagesize}`).then((response) => {
        setdata(response.data);
    }).catch(err => {
      // Handle Error Here
      alert("Oops ! Data Not Found!!");
      setdata([])
  });
  };

  const handleNextClick=()=>{
    if(page+1>Math.ceil(40/10))
    {
      
    }
    else{
   axios.get(`https://api.github.com/users/${imgs}/repos?page=${page+1}&per_page=${pagesize}`).then((response) => {
        setdata(response.data);
    }).catch(err => {
      // Handle Error Here
      alert("Oops ! Data Not Found!!");
    });
    setpage(page+1);
  }
 }
 const handlePrevClick=()=>{
  // console.log(page)
  axios.get(`https://api.github.com/users/${imgs}/repos?page=${page-1}&per_page=${pagesize}`).then((response) => {
       setdata(response.data);
   }).catch(err => {
     // Handle Error Here
     alert("Oops ! Data Not Found!!");
   });
   setpage(page-1);
 }

  return (
    <>
    
      <SearchBar imgs={imgs} onimgChange={setimgs} getImage={getImage} data={data} onDataChange={setdata}/>
      <Userdata imgs={imgs} data={data}/> 
      <NextPrevbutton handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} page={page}/>
    </>
  );
}

export default App;
