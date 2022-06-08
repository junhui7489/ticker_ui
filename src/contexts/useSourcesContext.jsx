import React, {createContext, useEffect, useState } from "react";

export const useSourcesContext = createContext();

export default function useSourcesProvider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/getSources");
      const data = await res.json();
      return data;
    }
    fetchAPI().then((fetch_data)=>{
      let parsed_data = fetch_data['list'];
      setData(parsed_data);
    })
  }, []);
  return(
   <useSourcesContext.Provider value={[data]}>
    {props.children}
  </useSourcesContext.Provider>
  );
};