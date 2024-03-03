import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { DashboardData } from "../../interfaces";

const ResponsiveChart: React.FC<{ dashboardData: DashboardData[] }> = ({ dashboardData }) => {

  return (
    <>
      <ResponsiveContainer height={"100%"}>
        <LineChart
          width={500}
          height={300}
          data={dashboardData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis
          axisLine={false}
          ticks={[0, 20000, 40000]} 
          tickFormatter={(tick) => (tick >= 1000 ? `${tick / 1000}k` : tick)} 
        />          
          <CartesianGrid horizontal={true} vertical={false} stroke="#dcdcdc"  />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#67baec" dot={false} strokeWidth={"5"} />
          <Line type="monotone" dataKey="uv" stroke="#abd7f3" dot={false} strokeDasharray={"5 5"} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ResponsiveChart;
