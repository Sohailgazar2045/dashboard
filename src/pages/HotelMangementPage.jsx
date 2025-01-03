import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyHotelBookings from "../components/hotels/DailyHotelBookings";
import BookingStatusDistribution from "../components/hotels/BookingStatusDistribution";
import BookingsTable from "../components/hotels/BookingsTable";

const HotelBookingStats = {
	totalBookings: "1,234",
	pendingBookings: "56",
	completedBookings: "1,178",
	totalRevenue: "$98,765",
};

const HotelMangementPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Hotel Management"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Booking' icon={ShoppingBag} value={HotelBookingStats.totalBookings} color='#6366F1' />
					<StatCard name='Pending Booking' icon={Clock} value={HotelBookingStats.pendingBookings} color='#F59E0B' />
					<StatCard
						name='Completed Booking'
						icon={CheckCircle}
						value={HotelBookingStats.completedBookings}
						color='#10B981'
					/>
					<StatCard name='Total Revenue' icon={DollarSign} value={HotelBookingStats.totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyHotelBookings />
					<BookingStatusDistribution />
				</div>

				<BookingsTable />
			</main>
		</div>
	);
};
export default HotelMangementPage;
