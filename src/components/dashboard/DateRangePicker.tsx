import { useEffect, useState } from "react";
import { originalDashboardData } from "../../Data/DashboardData";
import { dates } from "../../Data/AvailableDates";
import { DateRangePickerProps } from "../../interfaces";
import SingleDateRangePicker from "./SingleDateRangePicker";

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dashboardData,
  setData,
}) => {
  const [dateForLineUv, setDateForLineUv] = useState({
    start: dates[0],
    end: dates[dates.length - 1],
  });

  const [dateForLinePv, setDateForLinePv] = useState({
    start: dates[0],
    end: dates[dates.length - 1],
  });

  const selectStartdateForLineUv = (date: any) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLineUv.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLineUv({ ...dateForLineUv, start: date, end: dates[6] });
    } else {
      setDateForLineUv({ ...dateForLineUv, start: date });
    }
  };

  const selectStartdateForLinePv = (date: any) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLinePv.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLinePv({ ...dateForLinePv, start: date, end: dates[6] });
    } else {
      setDateForLinePv({ ...dateForLinePv, start: date });
    }
  };

  const selectEnddateForLineUv = (date: any) => {
    let indexOfStartDate = dates.indexOf(dateForLineUv.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLineUv({ ...dateForLineUv, end: date });
    }
  };

  const selectEnddateForLinePv = (date: any) => {
    let indexOfStartDate = dates.indexOf(dateForLinePv.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLinePv({ ...dateForLinePv, end: date });
    }
  };

  const updateDashBoardDataForLinePv = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { uv: any }, index: number) => {
      entry.uv = dashboardData[index].uv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLinePv.start) break;
      updatedDate[i].pv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLinePv.end) break;
      updatedDate[i].pv = null;
    }

    setData([...updatedDate]);
  };

  const updateDashBoardDataForLineUv = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { pv: any }, index: number) => {
      entry.pv = dashboardData[index].pv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLineUv.start) break;
      updatedDate[i].uv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLineUv.end) break;
      updatedDate[i].uv = null;
    }

    setData([...updatedDate]);
  };

  useEffect(() => {
    updateDashBoardDataForLineUv();
  }, [dateForLineUv]);

  useEffect(() => {
    updateDashBoardDataForLinePv();
  }, [dateForLinePv]);

  return (
    <div className="flex flex-row justify-end gap-4 pr-5 w-full h-12  p-1 mt-5 mb-5 mr-5">
      
    <SingleDateRangePicker colorCode={"pv"} dateForLine={dateForLinePv} selectStartdateForLine={selectStartdateForLinePv} selectEndDateForLine={selectEnddateForLinePv} />
    <SingleDateRangePicker colorCode={"uv"} dateForLine={dateForLineUv} selectStartdateForLine={selectStartdateForLineUv} selectEndDateForLine={selectEnddateForLineUv}/>
     
    </div>
  );
};

export default DateRangePicker;
