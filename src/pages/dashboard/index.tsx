import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faAngleUp,
  faPen,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveAreaChart
          kpi="Daily revenue"
          data={memoizedRevenueData}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 2,
      label: "Daily Orders",
      content: (
        <ResponsiveBarChart
          kpi="Daily orders"
          data={memoizedOrdersData}
          colors={{
            stroke: "rgb(255, 159, 64)",
            fill: "rgba(255, 159, 64, 0.7)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "New Customers",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data={memoizedNewCustomersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-white rounded-md h-50vh  p-1 flex">
        {/* stats ÷\ */}
        <div className="flex flex-col rounded-md w-screen  p-1 sm:flex-col md:flex-col lg:flex-row">
          <div className="flex-1 bg-statsHoverbgColor rounded-xl m-1 p-2 flex flex-col">
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
          </div>
          <div className="flex-1 bg-statsHoverbgColor rounded-xl m-1 p-2 flex flex-col">
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
          </div>
          <div className="flex-1 bg-statsHoverbgColor rounded-xl m-1 p-2 flex flex-col">
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
          </div>
          <div className="flex-1 bg-statsHoverbgColor rounded-xl m-1 p-2 flex flex-col">
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
          </div>
          <div className="relative flex  items-center pl-1 pr-1">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        {/* dashboard  */}
        <div></div>
      </div>
    </>
  );
};
