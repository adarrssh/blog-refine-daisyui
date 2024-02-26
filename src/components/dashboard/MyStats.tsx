
import StatsCard from "./StatsCard";
import { useState } from "react";

import {data} from './StatsData'

const MyStats = () => {
  const [activeStat, setActiveStat] = useState<String>(data[0].heading); 

  return (
    <>
    {
      data.map((d,key)=> 
      <StatsCard key={key} activeStat={activeStat} setActiveStat={setActiveStat} heading={d.heading} numStat = {d.numStat} surge={d.surge}  />
      )
    }
    </>
  );
};

export default MyStats;
