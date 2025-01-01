import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Edit, Trash2 } from "lucide-react";

const bookingData = [
  {
    id: "BOOK001",
    guest: "John Doe",
    roomType: "Deluxe Suite",
    total: 500.0,
    status: "Confirmed",
    checkIn: "2023-08-01",
    checkOut: "2023-08-05",
  },
  {
    id: "BOOK002",
    guest: "Jane Smith",
    roomType: "Standard Room",
    total: 300.0,
    status: "Pending",
    checkIn: "2023-08-10",
    checkOut: "2023-08-12",
  },
  {
    id: "BOOK003",
    guest: "Alice Brown",
    roomType: "Luxury Suite",
    total: 1000.0,
    status: "Cancelled",
    checkIn: "2023-09-01",
    checkOut: "2023-09-07",
  },
  {
    id: "BOOK004",
    guest: "Mark Wilson",
    roomType: "Single Room",
    total: 150.0,
    status: "Confirmed",
    checkIn: "2023-09-15",
    checkOut: "2023-09-16",
  },
  {
    id: "BOOK005",
    guest: "Emily Davis",
    roomType: "Family Suite",
    total: 800.0,
    status: "Pending",
    checkIn: "2023-10-05",
    checkOut: "2023-10-10",
  },
  {
    id: "BOOK006",
    guest: "Michael Brown",
    roomType: "Deluxe Suite",
    total: 600.0,
    status: "Cancelled",
    checkIn: "2023-10-12",
    checkOut: "2023-10-15",
  },
  {
    id: "BOOK007",
    guest: "Sarah Johnson",
    roomType: "Standard Room",
    total: 250.0,
    status: "Confirmed",
    checkIn: "2023-11-01",
    checkOut: "2023-11-03",
  },
  {
    id: "BOOK008",
    guest: "James Anderson",
    roomType: "Luxury Suite",
    total: 1200.0,
    status: "Pending",
    checkIn: "2023-11-20",
    checkOut: "2023-11-25",
  },
  {
    id: "BOOK009",
    guest: "Patricia Miller",
    roomType: "Family Suite",
    total: 750.0,
    status: "Confirmed",
    checkIn: "2023-12-01",
    checkOut: "2023-12-05",
  },
  {
    id: "BOOK010",
    guest: "Robert Wilson",
    roomType: "Single Room",
    total: 180.0,
    status: "Cancelled",
    checkIn: "2023-12-10",
    checkOut: "2023-12-11",
  },
];


const BookingsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState(bookingData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = bookingData.filter(
      (booking) =>
        booking.id.toLowerCase().includes(term) ||
        booking.guest.toLowerCase().includes(term) ||
        booking.roomType.toLowerCase().includes(term)
    );
    setFilteredBookings(filtered);
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Hotel Bookings</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search bookings..."
            className="bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Guest Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Room Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Booking Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Check-in Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.guest}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.roomType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${booking.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {booking.checkIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                  <button
                    className="text-indigo-500 hover:text-indigo-400"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    className="text-green-500 hover:text-green-400"
                    title="Edit"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-400"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default BookingsTable;
