import {
  faCaretUp,
  faChartLine,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StatsDropDown from "./StatsDropDown";

interface StatsCardProps {
  activeStat: String;
  setActiveStat: (heading: String) => void;
  heading: String;
  numStat: String;
  surge: String;
}

const StatsCard: React.FC<StatsCardProps> = ({
  activeStat,
  setActiveStat,
  heading,
  numStat,
}) => {
  return (
    <>
      <div
        className={`flex-1 flex flex-col p-4 rounded-xl hover:bg-statsHoverbgColor ${
          activeStat === `${heading}` ? "bg-statsHoverbgColor" : ""
        }`}
        onClick={() => setActiveStat(heading)}
      >
        <div className="flex flex-row justify-between h-1/3">
          <div>
            <p className="">{heading}</p>
            <div className="border-b border-dashed border-dashedLineColor"></div>
          </div>
          <div
            className={` cursor-pointer dropdown  ${
              heading === "Conversion rate" ? "dropdown-end" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faPen}
              color="#787878"
              className="ml-auto pr-3"
              tabIndex={0}
            />
            <StatsDropDown />
          </div>
        </div>
        <div className="flex flex-row items-end pt-4 pb-1 h-2/3">
          <p className="text-statsNumericTextColor font-medium text-2xl">
            {numStat}
          </p>
          <p className="pl-2 pb-1 text-xs  text-statsNumericPercentColor font-light">
            {<FontAwesomeIcon icon={faCaretUp} />} {numStat}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
