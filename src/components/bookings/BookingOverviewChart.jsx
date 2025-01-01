import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const monthlyBookingData = [
  { month: "Jan", parking: 3000, bookings: 4000 },
  { month: "Feb", parking: 2500, bookings: 3500 },
  { month: "Mar", parking: 4000, bookings: 5000 },
  { month: "Apr", parking: 3500, bookings: 4500 },
  { month: "May", parking: 4500, bookings: 6000 },
  { month: "Jun", parking: 4200, bookings: 5500 },
  { month: "Jul", parking: 5000, bookings: 7000 },
];

const BookingOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Booking Overview</h2>

        <select
          className="bg-gray-200 text-gray-900 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={monthlyBookingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#D1D5DB",
              }}
              itemStyle={{ color: "#1F2937" }}
            />
            <Area
              type="monotone"
              dataKey="parking"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
              name="Airport Parking"
            />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
              name="Hotel Bookings"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default BookingOverviewChart;
