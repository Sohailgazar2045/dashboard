import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

// Sample data for hotel booking customers
const hotelBookingData = [
	{ name: "18-24", value: 15 },
	{ name: "25-34", value: 35 },
	{ name: "35-44", value: 30 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 5 },
];

// Sample data for airport parking customers
const airportParkingData = [
	{ name: "18-24", value: 10 },
	{ name: "25-34", value: 25 },
	{ name: "35-44", value: 35 },
	{ name: "45-54", value: 20 },
	{ name: "55+", value: 10 },
];

const CustomerDemographicsChart = () => {
	return (
		<motion.div
			className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			{/* Hotel Booking Demographics */}
			<div className="w-full">
				<h2 className="text-xl font-semibold text-gray-900 mb-4">
					Hotel Booking Demographics
				</h2>
				<div style={{ width: "100%", height: 400 }}>
					<ResponsiveContainer>
						<PieChart>
							<Pie
								data={hotelBookingData}
								cx="50%"
								cy="50%"
								outerRadius={120}
								fill="#8884d8"
								dataKey="value"
								label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
							>
								{hotelBookingData.map((entry, index) => (
									<Cell key={`cell-hotel-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Tooltip
								contentStyle={{
									backgroundColor: "rgba(255, 255, 255, 0.9)",
									borderColor: "#D1D5DB",
								}}
								itemStyle={{ color: "#1F2937" }}
							/>
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>

			{/* Airport Parking Demographics */}
			<div className="w-full">
				<h2 className="text-xl font-semibold text-gray-900 mb-4">
					Airport Parking Demographics
				</h2>
				<div style={{ width: "100%", height: 400 }}>
					<ResponsiveContainer>
						<PieChart>
							<Pie
								data={airportParkingData}
								cx="50%"
								cy="50%"
								outerRadius={120}
								fill="#82ca9d"
								dataKey="value"
								label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
							>
								{airportParkingData.map((entry, index) => (
									<Cell key={`cell-parking-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Tooltip
								contentStyle={{
									backgroundColor: "rgba(255, 255, 255, 0.9)",
									borderColor: "#D1D5DB",
								}}
								itemStyle={{ color: "#1F2937" }}
							/>
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</motion.div>
	);
};

export default CustomerDemographicsChart;
