import React from "react";
import { dates } from "../../Data/AvailableDates";
import { SingleDateRangePickerProps } from "../../interfaces";

const SingleDateRangePicker: React.FC<SingleDateRangePickerProps> = ({
  colorCode,
  dateObj,
  updateStartdateFunc,
  updateEndDateFunc,
}) => {

/**
 * Handles the click event for selecting a date.
 * @param updateDateFunc A function to update the selected date.
 * @param date The date to be updated.
 */

  const handleClick = (updateDateFunc: (date: string) => void, date: string) => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
    updateDateFunc(date);
  };

  return (
    <>
      <div className="flex items-center justify-center h-min w-72 bg-dashboardDatePicker pl-10 pr-10 pt-2 pb-2">
        <div
          className={` ${colorCode === "pv" ? "bg-linePvColor" : "bg-lineUvColor"} h-1 w-4 mr-2`}
        ></div>
        <div className="dropdown dropdown-top">
          <p
            className="font-extralight cursor-pointer  text-xs sm:text-sm"
            tabIndex={0}
          >
            {dateObj.start}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li
                key={key}
                onClick={() => handleClick(updateStartdateFunc, date)}
              >
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
            {dateObj.end}
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow  rounded-box w-52  bg-dashboardDatePicker"
          >
            {dates.map((date, key) => (
              <li
                key={key}
                onClick={() => handleClick(updateEndDateFunc, date)}
              >
                <a>{date}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleDateRangePicker;
