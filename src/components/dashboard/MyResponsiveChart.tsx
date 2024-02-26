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



const MyResponsiveChart = ({data}:{data:any}) => {
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
          <XAxis dataKey="date" />
          <YAxis
          axisLine={false}
          ticks={[0, 20000, 40000]} 
          tickFormatter={(tick) => (tick >= 1000 ? `${tick / 1000}k` : tick)} 
        />          
          <CartesianGrid horizontal={true} vertical={false} stroke="#dcdcdc"  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#67baec" dot={false} strokeDasharray={"5 5"} />
          <Line type="monotone" dataKey="uv" stroke="#abd7f3" dot={false} strokeWidth={"5"} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MyResponsiveChart;
