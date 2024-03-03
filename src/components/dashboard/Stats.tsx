import StatsCard from "./StatsCard";
import React, { useState } from "react";

import { data } from "./StatsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { StatsProps } from "../../interfaces";


const Stats : React.FC<StatsProps> = ({showDashBoard,setShowDashBoard}) => {
  const [activeStat, setActiveStat] = useState<string>(data[0].heading);

  return (
    <>
      <section className="flex flex-col sm:flex-col lg:flex-row  gap-2  w-11/12  rounded-md  p-1 ">
        <div className="flex-1 flex flex-col sm:flex-col lg:flex-row gap-1 ">
          {data.map((d, key) => (
            <StatsCard
              key={key}
              activeStat={activeStat}
              setActiveStat={setActiveStat}
              heading={d.heading}
              numStat={d.numStat}
              surge={d.surge}
            />
          ))}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer  pt-4 lg:pt-0 "
          onClick={() => setShowDashBoard(!showDashBoard)}
        >
          {showDashBoard && (
            <FontAwesomeIcon icon={faChevronDown} color="grey" />
          )}
          {!showDashBoard && <FontAwesomeIcon icon={faAngleUp} color="grey" />}
        </div>
      </section>
    </>
  );
};

export default Stats;
