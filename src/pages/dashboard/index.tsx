import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faAngleUp,
  faPen,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import MyStats from "../../components/dashboard/MyStats";
import MyResponsiveChart from "../../components/dashboard/MyResponsiveChart";
import Stats from "../../components/dashboard/Stats";
import DateRangePicker from "../../components/dashboard/DateRangePicker";

const data = [
  {
    namex: "Oct 2022",
    uv: 15000,
    pv: 5000,
    amt: 2400,
  },
  {
    namex: "Dec 2022",
    uv: 17000,
    pv: 7000,
    amt: 2210,
  },
  {
    namex: "Feb 2023",
    uv: 20000,
    pv: 10000,
    amt: 2290,
  },
  {
    namex: "Apr 2023",
    uv: 11080,
    pv: 5080,
    amt: 2000,
  },
  {
    namex: "June 2023",
    uv: 20590,
    pv: 19590,
    amt: 2181,
  },
  {
    namex: "Aug 2023",
    uv: 23090,
    pv: 13090,
    amt: 2500,
  },
  {
    namex: "Oct 2023",
    uv: 13090,
    pv: 10090,
    amt: 2100,
  },
];


export const Dashboard: React.FC = () => {

  const [showDashBoard, setShowDashBoard] = useState(true)

  return (
    <>
      <main className="rounded-md pt-5 p-1 flex flex-col items-center  w-98vw overflow-hidden bg-white">
        <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2  w-11/12  rounded-md  p-1 ">
          <div className="flex-1 flex flex-row gap-1">
          <Stats/>
          </div>
          <div className="flex items-center cursor-pointer" onClick={()=> setShowDashBoard(!showDashBoard)}>
           { showDashBoard && <FontAwesomeIcon icon={faChevronDown} color="grey" />}
           { !showDashBoard && <FontAwesomeIcon icon={faAngleUp} color="grey" />}
          </div>
        </section>

          {
            showDashBoard ? 
            <section className=" mt-10 w-11/12  h-full ">
            <div className={"mt-0 h-96 w-full"}>
              <MyResponsiveChart data={data}/>
            </div>
            <DateRangePicker/>
          </section>
          : 
          <></>
          }

      </main>
    </>
  );
};

{
  /* <div className="relative flex  items-center pl-1 pr-1 bg-slate-400">
<FontAwesomeIcon icon={faChevronDown} />
</div> */
}

{
  /* <div className=" basis-1/5 bg-statsHoverbgColor rounded-xl m-1 p-2 flex flex-col">
<div className="flex items-center">
  <div className="flex-1 flex flex-row text-statsNumericTextColor">
    <div className="flex-1">
      <p>Other online stores</p>
      <div className="border-b border-dashed border-dashedLineColor"></div>
    </div>
    <div>
      <FontAwesomeIcon
        icon={faPen}
        color="#787878"
        className="ml-auto pr-3"
      />
    </div>
  </div>
</div>

<div className="flex-1 flex flex-row  pt-4">
  <p className="text-statsNumericTextColor font-bold text-lg">
    255,885
  </p>
  <p className="pl-2 text-xs pt-1.5 text-statsNumericPercentColor font-light">
    {<FontAwesomeIcon icon={faCaretUp} />} 9%
  </p>
</div>
</div> */
}
