import React, { useState } from "react";

import Stats from "../../components/dashboard/Stats";
import DashboardSection from "../../components/dashboard/DashboardSection";
import { originalDashboardData } from "../../Data/DashboardData";
import { DashboardData } from "../../interfaces";


export const Dashboard: React.FC = () => {

  const [showDashBoard, setShowDashBoard] = useState<boolean>(true);
  const [data, setData] = useState<DashboardData[]>(originalDashboardData);

  return (
    <>
      <main className="rounded-md pt-5 p-1 flex flex-col items-center  w-98vw  bg-white">
        <Stats showDashBoard={showDashBoard} setShowDashBoard={setShowDashBoard}/>
        <DashboardSection data={data} setData={setData} showDashBoard={showDashBoard} />
      </main>
    </>
  );
};
