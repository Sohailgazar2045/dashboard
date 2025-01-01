import { motion } from "framer-motion";
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

const dailyHotelBookingsData = [
  { date: "07/01", bookings: 15 },
  { date: "07/02", bookings: 20 },
  { date: "07/03", bookings: 18 },
  { date: "07/04", bookings: 22 },
  { date: "07/05", bookings: 25 },
  { date: "07/06", bookings: 19 },
  { date: "07/07", bookings: 30 },
];

const DailyHotelBookings = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Hotel Bookings</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={dailyHotelBookingsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="date" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#E5E7EB",
              }}
              itemStyle={{ color: "#1F2937" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#6366F1"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailyHotelBookings;
