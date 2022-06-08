import React, {createContext, useEffect, useState } from "react";

export const useTickerContext = createContext();

export default function useTickerProvider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/getTickers");
      const data = await res.json();
      return data;
    }
    fetchAPI().then((fetch_data)=>{
      let parsed_data = fetch_data['list'];
      setData(parsed_data);
    })
  }, []);
  return(
   <useTickerContext.Provider value={[data]}>
    {props.children}
  </useTickerContext.Provider>
  );
};