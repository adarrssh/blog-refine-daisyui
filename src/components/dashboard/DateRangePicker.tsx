import { useEffect, useState } from "react";
import { originalDashboardData } from "../../Data/DashboardData";
import { dates } from "../../Data/AvailableDates";
import { DateRangePickerProps } from "../../interfaces";

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
      
      <div className="flex items-center justify-center h-min w-72 bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="bg-line1Color h-1 w-4 mr-2"></div>
        <div className="dropdown dropdown-top">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLinePv.start}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li key={key} onClick={() => selectStartdateForLinePv(date)}>
                <a>{date}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-5 sm:pr-1 ">-</p>
        </div>
        <div className="dropdown dropdown-top">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLinePv.end}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li key={key} onClick={() => selectEnddateForLinePv(date)}>
                <a>{date}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center h-min w-72 bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="bg-line2Color h-1 w-4 mr-2"></div>
        <div className="dropdown dropdown-top ">
          <p
            className="font-extralight cursor-pointer text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLineUv.start}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li key={key} onClick={() => selectStartdateForLineUv(date)}>
                <a>{date}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-5 sm:pr-1 ">-</p>
        </div>
        <div className="dropdown dropdown-top ">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateForLineUv.end}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li key={key} onClick={() => selectEnddateForLineUv(date)}>
                <a>{date}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
