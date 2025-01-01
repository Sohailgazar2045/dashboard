import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailyBookingAndParkingData = [
  { name: "Mon", bookings: 800, parking: 600 },
  { name: "Tue", bookings: 950, parking: 700 },
  { name: "Wed", bookings: 750, parking: 550 },
  { name: "Thu", bookings: 850, parking: 600 },
  { name: "Fri", bookings: 1100, parking: 800 },
  { name: "Sat", bookings: 1300, parking: 900 },
  { name: "Sun", bookings: 1200, parking: 750 },
];

const DailyBookingAndParkingTrend = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Daily Trend
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailyBookingAndParkingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#D1D5DB",
              }}
              itemStyle={{ color: "#1F2937" }}
            />
            <Bar dataKey="bookings" fill="#3B82F6" name="Hotel Bookings" />
            <Bar dataKey="parking" fill="#10B981" name="Airport Parking" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailyBookingAndParkingTrend;
