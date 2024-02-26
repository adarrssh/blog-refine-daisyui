import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StatsDropDown = () => {
  return (
    <>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-72 "
      >
        <li>
          <a>
            {" "}
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>{" "}
            Average Order Value
          </a>
        </li>
        <li>
          <a>
            {" "}
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            Conversion rate
          </a>
        </li>
        <li>
          <a>
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            Gross Sales
          </a>
        </li>
        <li>
          <a>
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            Net return value
          </a>
        </li>
        <li>
          <a>
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            Store search conversion
          </a>
        </li>
        <li>
          <a>
            <span className="pr-1">
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            Return rate
          </a>
        </li>
      </ul>
    </>
  );
};

export default StatsDropDown;
