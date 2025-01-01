import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, Calendar, TrendingUp } from "lucide-react";
import BookingOverviewChart from "../components/bookings/BookingOverviewChart";
import BookingAndParkingChart from "../components/bookings/BookingAndParkingChart";
import DailyBookingAndParkingTrend from "../components/bookings/DailyBookingAndParkingTrend";

const bookingsStats = {
	totalRevenue: "$1,234,567",
	averageBookingValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const BookingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Bookings' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Revenue' icon={DollarSign} value={bookingsStats.totalRevenue} color='#6366F1' />
					<StatCard
						name='Avg. Booking Value'
						icon={Calendar}
						value={bookingsStats.averageBookingValue}
						color='#10B981'
					/>
					<StatCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={bookingsStats.conversionRate}
						color='#F59E0B'
					/>
					<StatCard name='Sales Growth' icon={CreditCard} value={bookingsStats.salesGrowth} color='#EF4444' />
				</motion.div>

				<BookingOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<BookingAndParkingChart />
					<DailyBookingAndParkingTrend />
				</div>
			</main>
		</div>
	);
};
export default BookingsPage;
