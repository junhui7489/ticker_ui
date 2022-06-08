import React, {createContext, useEffect, useState } from "react";

export const Source3Context = createContext();

export default function Source3Provider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/getSrc3Data");
      const data = await res.json();
      return data;
    }
    function fetch_data(){
    fetchAPI().then((fetch_data)=>{
      let parsed_data = fetch_data['updated_src3'];
      setData(parsed_data);
    })
  }

    fetch_data();

    const interval = setInterval(() => 
    fetch_data(), 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);
  return(
   <Source3Context.Provider value={[data,setData]}>
    {props.children}
  </Source3Context.Provider>
  );
};