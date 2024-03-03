import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Stats from "../../components/dashboard/Stats";
import ResponsiveChart from "../../components/dashboard/ResponsiveChart";
import DateRangePicker from "../../components/dashboard/DateRangePicker";
import { originalDashboardData } from "../../Data/DashboardData";
import { DashboardData } from "../../interfaces";


export const Dashboard: React.FC = () => {

  const [showDashBoard, setShowDashBoard] = useState<boolean>(true);
  const [data, setData] = useState<DashboardData[]>(originalDashboardData);

  return (
    <>
      <main className="rounded-md pt-5 p-1 flex flex-col items-center  w-98vw  bg-white">
        <section className="flex flex-col sm:flex-col lg:flex-row  gap-2  w-11/12  rounded-md  p-1 ">
          <div className="flex-1 flex flex-col sm:flex-col lg:flex-row gap-1 ">
            <Stats />
          </div>
          <div
            className="flex justify-center items-center cursor-pointer  pt-4 lg:pt-0 "
            onClick={() => setShowDashBoard(!showDashBoard)}
          >
            {showDashBoard && (
              <FontAwesomeIcon icon={faChevronDown} color="grey" />
            )}
            {!showDashBoard && (
              <FontAwesomeIcon icon={faAngleUp} color="grey" />
            )}
          </div>
        </section>

        {showDashBoard ? (
          <section className=" mt-10 w-11/12  h-full ">
            <div className={"mt-0 h-96 w-full"}>
              <ResponsiveChart dashboardData={data} />
            </div>
            <DateRangePicker dashboardData={data} setData={setData} />
          </section>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};
