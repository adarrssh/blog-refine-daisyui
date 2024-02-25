import { faCaretUp, faPen, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyStats = () => {
  return (
    <div className="flex-1 flex flex-col p-4 rounded-xl hover:bg-statsHoverbgColor ">
      <div className="flex flex-row justify-between h-1/3">
        <div className="">
          <p>Other online stores</p>
          <div className="border-b border-dashed border-dashedLineColor"></div>
        </div>
        <div className="cursor-pointer dropdown dropdown-end">
          <FontAwesomeIcon
            icon={faPen}
            color="#787878"
            className="ml-auto pr-3"
            tabIndex={0}
          />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-72"
          >
            <li>
              <a> <span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span> Average Order Value</a>
            </li>
            <li>
              <a> <span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span>Conversion rate</a>
            </li>
            <li>
              <a><span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span>Gross Sales</a>
            </li>
            <li>
              <a><span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span>Net return value</a>
            </li>
            <li>
              <a><span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span>Store search conversion</a>
            </li>
            <li>
              <a><span className="pr-1"><FontAwesomeIcon icon={faChartLine}/></span>Return rate</a>
            </li>

          </ul>
        </div>
      </div>
      <div className="flex flex-row items-end pb-1 h-2/3">
        <p className="text-statsNumericTextColor font-semibold text-2xl">
          255,885
        </p>
        <p className="pl-2 pb-1 text-xs  text-statsNumericPercentColor font-light">
          {<FontAwesomeIcon icon={faCaretUp} />} 9%
        </p>
      </div>
    </div>
  );
};

export default MyStats;
