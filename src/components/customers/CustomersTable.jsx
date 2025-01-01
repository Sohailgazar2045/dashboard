import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const customerData = [
	{
		id: 1,
		name: "John Doe",
		email: "john@example.com",
		bookingType: "Hotel Booking",
		status: "Confirmed",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "jane@example.com",
		bookingType: "Airport Parking",
		status: "Pending",
	},
	{
		id: 3,
		name: "Bob Johnson",
		email: "bob@example.com",
		bookingType: "Hotel Booking",
		status: "Cancelled",
	},
	{
		id: 4,
		name: "Alice Brown",
		email: "alice@example.com",
		bookingType: "Airport Parking",
		status: "Confirmed",
	},
	{
		id: 5,
		name: "Charlie Wilson",
		email: "charlie@example.com",
		bookingType: "Hotel Booking",
		status: "Pending",
	},
];

const CustomersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredCustomers, setFilteredCustomers] = useState(customerData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = customerData.filter(
			(customer) =>
				customer.name.toLowerCase().includes(term) ||
				customer.email.toLowerCase().includes(term) ||
				customer.bookingType.toLowerCase().includes(term)
		);
		setFilteredCustomers(filtered);
	};

	return (
		<motion.div
			className='bg-white shadow-lg rounded-xl p-6 border border-gray-200'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-900'>Customers</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search customers...'
						className='bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Booking Type
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-200'>
						{filteredCustomers.map((customer) => (
							<motion.tr
								key={customer.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{customer.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-900'>{customer.name}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-700'>{customer.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{customer.bookingType}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											customer.status === "Confirmed"
												? "bg-green-800 text-green-100"
												: customer.status === "Pending"
												? "bg-yellow-800 text-yellow-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{customer.status}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
									<button className='text-indigo-500 hover:text-indigo-400 mr-2'>View</button>
									<button className='text-red-500 hover:text-red-400'>Delete</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default CustomersTable;
