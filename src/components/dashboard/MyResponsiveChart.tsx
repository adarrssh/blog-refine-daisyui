import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    namex: "Oct 2022",
    uv: 15000,
    pv: 5000,
    amt: 2400,
  },
  {
    namex: "Dec 2022",
    uv: 17000,
    pv: 7000,
    amt: 2210,
  },
  {
    namex: "Feb 2023",
    uv: 20000,
    pv: 10000,
    amt: 2290,
  },
  {
    namex: "Apr 2023",
    uv: 11080,
    pv: 5080,
    amt: 2000,
  },
  {
    namex: "June 2023",
    uv: 20590,
    pv: 19590,
    amt: 2181,
  },
  {
    namex: "Aug 2023",
    uv: 23090,
    pv: 13090,
    amt: 2500,
  },
  {
    namex: "Oct 2023",
    uv: 13090,
    pv: 10090,
    amt: 2100,
  },
];

// Formatter function to convert large numbers to abbreviated format
const formatYAxis = (tick:any) => {
  return tick >= 1000 ? `${(tick / 1000).toFixed(0)}k` : tick;
};

const MyResponsiveChart = () => {
  return (
    <>
      <ResponsiveContainer height={"100%"}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="namex" />
          <YAxis
          ticks={[0, 20000, 40000]} 
          tickFormatter={(tick) => (tick >= 1000 ? `${tick / 1000}k` : tick)} 
        />          
          <CartesianGrid horizontal={true} vertical={false} stroke="#dcdcdc"  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MyResponsiveChart;
