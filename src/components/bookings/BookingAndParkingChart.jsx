import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const bookingAndParkingData = [
  { name: "Hotel Bookings", value: 500 },
  { name: "Short-Term Parking", value: 300 },
  { name: "Long-Term Parking", value: 200 },
  { name: "VIP Parking", value: 150 },
  { name: "Other Services", value: 100 },
];

const COLORS = ["#4CAF50", "#FF9800", "#03A9F4", "#9C27B0", "#FFC107"];

const BookingAndParkingChart = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
       Booking Distribution
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={bookingAndParkingData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {bookingAndParkingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#D1D5DB",
              }}
              itemStyle={{ color: "#1F2937" }}
            />
            <Legend wrapperStyle={{ color: "#1F2937" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default BookingAndParkingChart;
