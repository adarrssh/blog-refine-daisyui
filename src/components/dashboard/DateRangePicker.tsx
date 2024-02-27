import  { useEffect, useState } from "react";
import { originalDashboardData } from "./DashboardData";
import { dates } from "./AvailableDates";
import { DashboardData } from "../../interfaces";


const DateRangePicker: React.FC<{ dashboardData: DashboardData[]; setData: (data: DashboardData[]) => void }> = ({ dashboardData, setData }) => {
  
  const [dateForLine1, setDateForLine1] = useState({
    start: dates[0],
    end: dates[dates.length -1] ,
  });

  const [dateForLine2, setDateForLine2] = useState({
    start: dates[0],
    end: dates[dates.length-1],
  });

  const selectStartDateForLine1 = (date: any) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLine1.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLine1({ ...dateForLine1, start: date, end: dates[6] });
    } else {
      setDateForLine1({ ...dateForLine1, start: date });
    }
  };

  const selectStartDateForLine2 = (date: any) => {
    let indexOfStartDate = dates.indexOf(date);
    let indexOfEndtDate = dates.indexOf(dateForLine2.end);

    if (indexOfStartDate > indexOfEndtDate) {
      setDateForLine2({ ...dateForLine2, start: date, end: dates[6] });
    } else {
      setDateForLine2({ ...dateForLine2, start: date });
    }
  };

  const selectEndDateForLine1 = (date: any) => {
    let indexOfStartDate = dates.indexOf(dateForLine1.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLine1({ ...dateForLine1, end: date });
    }
  };

  const selectEndDateForLine2 = (date: any) => {
    let indexOfStartDate = dates.indexOf(dateForLine2.start);
    let indexOfEndtDate = dates.indexOf(date);

    if (indexOfEndtDate >= indexOfStartDate) {
      setDateForLine2({ ...dateForLine2, end: date });
    }
  };

  const updateDashBoardDataForLine1 = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { uv: any }, index:  number) => {
      entry.uv = dashboardData[index].uv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLine1.start) break;
      updatedDate[i].pv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLine1.end) break;
      updatedDate[i].pv = null;
    }


    setData([...updatedDate]);
  };

  const updateDashBoardDataForLine2 = () => {
    let updatedDate = JSON.parse(JSON.stringify(originalDashboardData));
    updatedDate.forEach((entry: { pv: any }, index: number) => {
      entry.pv = dashboardData[index].pv;
    });

    for (let i = 0; i < updatedDate.length; i++) {
      if (updatedDate[i].date === dateForLine2.start) break;
      updatedDate[i].uv = null;
    }

    for (let i = updatedDate.length - 1; i >= 0; i--) {
      if (updatedDate[i].date === dateForLine2.end) break;
      updatedDate[i].uv = null;
    }

    setData([...updatedDate]);
  };

  useEffect(() => {
    updateDashBoardDataForLine1();
  }, [dateForLine1]);

  useEffect(() => {
    updateDashBoardDataForLine2();
  }, [dateForLine2]);

  return (
    <div className="flex flex-row justify-end gap-4 pr-5 w-full h-12  p-1 mt-5 mb-5 mr-5">
      <div className="flex items-center justify-center h-min w-72 bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="bg-line1Color h-1 w-4 mr-2"></div>
        <div className="dropdown dropdown-top ">
          <p
            className="font-extralight cursor-pointer text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLine2.start}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li key={key} onClick={() => selectStartDateForLine2(date)}>
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-5 sm:pr-1 ">-</p>
        </div>
        <div className="dropdown dropdown-top ">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLine2.end}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li key={key} onClick={() => selectEndDateForLine2(date)}>
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-min w-72 bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="bg-line2Color h-1 w-4 mr-2"></div>
        <div className="dropdown dropdown-top">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLine1.start}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li key={key} onClick={() => selectStartDateForLine1(date)}>
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-5 sm:pr-1 ">-</p>
        </div>
        <div className="dropdown dropdown-top">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLine1.end}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li key={key} onClick={() => selectEndDateForLine1(date)}>
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
