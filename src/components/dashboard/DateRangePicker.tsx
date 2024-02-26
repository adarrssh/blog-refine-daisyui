import React, { useState } from "react";

const dates = [
  "Oct 1, 2022",
  "Dec 1, 2022",
  "Feb 1, 2023",
  "Apr 1, 2023",
  "June 1, 2023",
  "Aug 1, 2023",
  "Oct 1, 2023",
];

const DateRangePicker = () => {

  const [dateForLine1, setDateForLine1] = useState({
    start: "Oct 1, 2022",
    end: "Feb 1, 2024",
  });

  const [dateForLine2, setDateForLine2] = useState({
    start: "Oct 1, 2022",
    end: "Feb 1, 2024",
  });

  const selectStartDateForLine1 = (date:any) => {
    
    let indexOfStartDate = dates.indexOf(date)
    let indexOfEndtDate = dates.indexOf(dateForLine1.end)
    
    if(indexOfStartDate > indexOfEndtDate){
        setDateForLine1({ ...dateForLine1, start: date, end: dates[6] })
    }else{
        setDateForLine1({ ...dateForLine1, start: date })
    }

}

  const selectEndDateForLine1 = (date:any) => {

    let indexOfStartDate = dates.indexOf(dateForLine1.start)
    let indexOfEndtDate = dates.indexOf(date)

    if(indexOfEndtDate >= indexOfStartDate){
        setDateForLine1({ ...dateForLine1, end: date })
    }

  }

  return (
    <div className="flex flex-row justify-end gap-4 pr-5 w-full h-12 p-1">
      <div className="flex items-center justify-center h-min bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="dropdown dropdown-top">
          <p className="text-sm font-extralight cursor-pointer" tabIndex={0}>
            {dateForLine1.start}
            <ul
                tabIndex={0}
                className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
                {dates.map((date, key) => (
                    <li
                        key={key}
                        onClick={() => selectStartDateForLine1(date)}
                    >
                        <a>{date}</a>
                    </li>
                ))}
            </ul>
          </p>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-1">-</p>
        </div>
        <div className="dropdown dropdown-top">
          <p className="text-sm font-extralight cursor-pointer" tabIndex={0}>
            {dateForLine1.end}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li
                  key={key}
                  onClick={() =>
                    selectEndDateForLine1(date)
                  }
                >
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center h-min bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div className="dropdown dropdown-top">
          <p className="text-sm font-extralight cursor-pointer" tabIndex={0}>
            {dateForLine2.start}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li
                  key={key}
                  onClick={() =>
                    setDateForLine2({ ...dateForLine2, start: date })
                  }
                >
                  <a>{date}</a>
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div>
          <p className="text-sm font-extralight pl-1 pr-1">-</p>
        </div>
        <div className="dropdown dropdown-top">
          <p className="text-sm font-extralight cursor-pointer" tabIndex={0}>
            {dateForLine2.end}
            <ul
              tabIndex={0}
              className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
            >
              {dates.map((date, key) => (
                <li
                  key={key}
                  onClick={() =>
                    setDateForLine2({ ...dateForLine2, end: date })
                  }
                >
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
