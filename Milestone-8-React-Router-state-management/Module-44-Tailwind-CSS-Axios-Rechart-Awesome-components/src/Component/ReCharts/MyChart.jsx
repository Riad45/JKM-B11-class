import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const gpaData = [
  { semester: "Spring2022", gpa: 3.45 },
  { semester: "Fall2022", gpa: 3.60 },
  { semester: "Spring2023", gpa: 3.68 },
  { semester: "Fall2023", gpa: 3.74 },
  { semester: "Spring2024", gpa: 3.79 },
  { semester: "Fall2024", gpa: 3.80 },
  { semester: "Spring2025", gpa: 3.82 },
  { semester: "Fall2025", gpa: 3.88 },
];

const MyChart = () => {
  return (
   <div>
     <div className="p-8 bg-white shadow rounded-2xl w-[50%] h-auto my-20 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-slate-900">GPA Progress</h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={gpaData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis  />
          <Tooltip wrapperStyle={{ color: "red", fontWeight: "600" }} />

          <Legend />
          <Bar dataKey="gpa" fill="#020617" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
   </div>
  );
};

export default MyChart;
