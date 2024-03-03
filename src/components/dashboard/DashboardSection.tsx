import React from "react";
import ResponsiveChart from "./ResponsiveChart";
import DateRangePicker from "./DateRangePicker";
import { DashboardData } from "../../interfaces";

interface DashboardSectionProps {
  data: DashboardData[];
  setData: React.Dispatch<React.SetStateAction<DashboardData[]>>;
  showDashBoard: boolean;
}


const DashboardSection : React.FC<DashboardSectionProps> = ({data,setData,showDashBoard}) => {
  return (
    <>
      {showDashBoard && (
        <section className=" mt-10 w-11/12  h-full ">
          <div className={"mt-0 h-96 w-full"}>
            <ResponsiveChart dashboardData={data} />
          </div>
          <DateRangePicker dashboardData={data} setData={setData} />
        </section>
      )}
    </>
  );
};

export default DashboardSection;
