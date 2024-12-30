import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

const UserRetention = () => {
	return (
		<motion.div
			className='bg-white shadow-lg rounded-xl p-6 border border-gray-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-900 mb-4'>User Retention</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={userRetentionData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#E5E7EB' />
						<XAxis dataKey='name' stroke='#6B7280' />
						<YAxis stroke='#6B7280' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(255, 255, 255, 0.8)",
								borderColor: "#D1D5DB",
							}}
							itemStyle={{ color: "#4B5563" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='retention' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserRetention;
