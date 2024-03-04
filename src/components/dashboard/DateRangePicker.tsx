import { useEffect, useState } from "react";
import { originalDashboardData } from "../../Data/DashboardData";
import { dates } from "../../Data/AvailableDates";
import { DateRangePickerProps } from "../../interfaces";
import SingleDateRangePicker from "./SingleDateRangePicker";

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  currDashboardData,
  setCurrDashboardData,
}) => {
  const [dateForLineUv, setDateForLineUv] = useState({
    start: dates[0],
    end: dates[dates.length - 1],
  });

  const [dateForLinePv, setDateForLinePv] = useState({
    start: dates[0],
    end: dates[dates.length - 1],
  });
  
  const updateStartdateForLineUv = (date: string) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLineUv.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLineUv({ ...dateForLineUv, start: date, end: dates[dates.length-1] });
    } else {
      setDateForLineUv({ ...dateForLineUv, start: date });
    }
  };

  const updateStartdateForLinePv = (date: string) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLinePv.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLinePv({ ...dateForLinePv, start: date, end: dates[dates.length-1] });
    } else {
      setDateForLinePv({ ...dateForLinePv, start: date });
    }
  };

  const updateEnddateForLineUv = (date: string) => {
    let indexOfStartDate = dates.indexOf(dateForLineUv.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLineUv({ ...dateForLineUv, end: date });
    }
  };

  const updateEnddateForLinePv = (date: string) => {
    let indexOfStartDate = dates.indexOf(dateForLinePv.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLinePv({ ...dateForLinePv, end: date });
    }
  };

  const updateDashBoardDataForLinePv = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { uv:  number | null }, index: number) => {
      entry.uv = currDashboardData[index].uv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLinePv.start) break;
      updatedDate[i].pv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLinePv.end) break;
      updatedDate[i].pv = null;
    }

    setCurrDashboardData([...updatedDate]);
  };

  const updateDashBoardDataForLineUv = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { pv: number | null }, index: number) => {
      entry.pv = currDashboardData[index].pv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLineUv.start) break;
      updatedDate[i].uv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLineUv.end) break;
      updatedDate[i].uv = null;
    }

    setCurrDashboardData([...updatedDate]);
  };

  useEffect(() => {
    updateDashBoardDataForLineUv();
  }, [dateForLineUv]);

  useEffect(() => {
    updateDashBoardDataForLinePv();
  }, [dateForLinePv]);

  return (
    <div className="flex flex-row justify-end gap-4 pr-5 w-full h-12  p-1 mt-5 mb-5 mr-5">
      
    <SingleDateRangePicker colorCode={"pv"} dateObj={dateForLinePv} updateStartdateFunc={updateStartdateForLinePv} updateEndDateFunc={updateEnddateForLinePv} />
    <SingleDateRangePicker colorCode={"uv"} dateObj={dateForLineUv} updateStartdateFunc={updateStartdateForLineUv} updateEndDateFunc={updateEnddateForLineUv}/>
     
    </div>
  );
};

export default DateRangePicker;
