import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CustomersTable from "../components/customers/CustomersTable";
import CustomerDemographicsChart from "../components/customers/CustomerDemographicsChart";

const customerStats = {
	totalCustomers: 12845,
	newCustomersToday: 243,
	activeCustomers: 9520,
	churnRate: "2.4%",
};

const CustomerPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Customers' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Customers'
						icon={UsersIcon}
						value={customerStats.totalCustomers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Customers Today' icon={UserPlus} value={customerStats.newCustomersToday} color='#10B981' />
					<StatCard
						name='Active Customers'
						icon={UserCheck}
						value={customerStats.activeCustomers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={customerStats.churnRate} color='#EF4444' />
				</motion.div>

				<CustomersTable />

				{/* CUSTOMER CHARTS */}
				<div className='mt-8'>
					<CustomerDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default CustomerPage;