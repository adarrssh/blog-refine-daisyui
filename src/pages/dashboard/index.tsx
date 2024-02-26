import React, { useEffect, useState } from "react";

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
import { dashboardData } from "../../components/dashboard/DashboardData";





export const Dashboard: React.FC = () => {

  const [showDashBoard, setShowDashBoard] = useState(true)
  const [data,setData] = useState(dashboardData)

  


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
            <DateRangePicker data={data} setData={setData}/>
          </section>
          : 
          <></>
          }

      </main>
    </>
  );
};


