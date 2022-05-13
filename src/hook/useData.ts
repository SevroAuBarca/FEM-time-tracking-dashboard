import { useEffect, useState } from "react";
import { time, tf, funcion } from "../TypeScript/types.modules";
import { dataJson } from "../server/data";
export const useData = () => {
  const [data, setData] = useState([...dataJson]);
  const [time, setTime] = useState<time>("Week");
  const [timeframe, setTimeframe] = useState<tf>("weekly");
  /*  useEffect(() => {
    fetch("../data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []); */

  const handleClick: funcion = (event, time) => {
    const { textContent } = (event.target! as HTMLElement) || "";
    const txt = textContent?.toLowerCase() as tf;
    setTimeframe(txt);
    setTime(time);
    console.log(data);
  };

  return { data, time, timeframe, handleClick };
};
