import React from "react";
import ResponsiveChart from "./ResponsiveChart";
import DateRangePicker from "./DateRangePicker";
import { DashboardSectionProps } from "../../interfaces";

const DashboardSection : React.FC<DashboardSectionProps> = ({currDashboardData,setCurrDashboardData,showDashBoard}) => {
  return (
    <>
      {showDashBoard && (
        <section className=" mt-10 w-11/12  h-full ">
          <div className={"mt-0 h-96 w-full"}>
            <ResponsiveChart currDashboardData={currDashboardData} />
          </div>
          <DateRangePicker currDashboardData={currDashboardData} setCurrDashboardData={setCurrDashboardData} />
        </section>
      )}
    </>
  );
};

export default DashboardSection;
