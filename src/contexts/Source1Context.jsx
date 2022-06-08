import React, {createContext, useEffect, useState } from "react";

export const Source1Context = createContext();

export default function Source1Provider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/getSrc1Data");
      const data = await res.json();
      return data;
    }
    
    function fetch_data(){
    fetchAPI().then((fetch_data)=>{
      let parsed_data = fetch_data['updated_src1'];
      setData(parsed_data);
    })}

    fetch_data();

    const interval = setInterval(() => 
    fetch_data(), 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);
  return(
   <Source1Context.Provider value={[data,setData]}>
    {props.children}
  </Source1Context.Provider>
  );
};