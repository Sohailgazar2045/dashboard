import {
	BarChart2,
	Car,
	Calendar,
	Settings,
	Users,
	MapPin,
	DollarSign,
	Home,
	Menu,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{
		name: "Parking Management",
		icon: Car,
		color: "#10B981",
		href: "/parking-management",
	},
	{
		name: "Hotel Management",
		icon: Home,
		color: "#F59E0B",
		href: "/hotel-management",
	},
	{
		name: "Bookings",
		icon: Calendar,
		color: "#8B5CF6",
		href: "/bookings",
	},
	{
		name: "Customers",
		icon: Users,
		color: "#EC4899",
		href: "/customers",
	},
	{
		name: "Revenue Analytics",
		icon: DollarSign,
		color: "#3B82F6",
		href: "/revenue-analytics",
	},
	{
		name: "Location Overview",
		icon: MapPin,
		color: "#6EE7B7",
		href: "/location-overview",
	},
	{
		name: "Settings",
		icon: Settings,
		color: "#A78BFA",
		href: "/settings",
	},
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-200 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className="h-full bg-white p-4 flex flex-col border-r border-gray-300 shadow-md">
				<div className="flex items-center space-x-8 ml-2">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className="p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit"
					>
						<Menu size={24} />
					</motion.button>

					{/* Animated "Dashboard" Heading */}
					<AnimatePresence>
						{isSidebarOpen && (
							<motion.span
								className="text-xl font-bold text-gray-900"
								initial={{ opacity: 0, width: 0 }}
								animate={{ opacity: 1, width: "auto" }}
								exit={{ opacity: 0, width: 0 }}
								transition={{ duration: 0.2, delay: 0.2 }}
							>
								Admin Panel
							</motion.span>
						)}
					</AnimatePresence>
				</div>

				<nav className="mt-8 flex-grow">
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2">
								<item.icon
									size={20}
									style={{ color: item.color, minWidth: "20px" }}
								/>
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className="ml-4 whitespace-nowrap text-gray-900"
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
