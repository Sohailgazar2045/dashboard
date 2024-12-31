import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PARKING_DATA = [
  { id: 1, spot: "A-01", location: "Main Street", status: "Available", rate: 5.0, revenue: 120.0 },
  { id: 2, spot: "B-12", location: "Downtown", status: "Occupied", rate: 8.0, revenue: 200.0 },
  { id: 3, spot: "C-05", location: "Mall Parking", status: "Available", rate: 3.0, revenue: 90.0 },
  { id: 4, spot: "D-07", location: "Airport", status: "Occupied", rate: 10.0, revenue: 300.0 },
  { id: 5, spot: "E-03", location: "University", status: "Available", rate: 2.5, revenue: 75.0 },
];

const ParkingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredParking, setFilteredParking] = useState(PARKING_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PARKING_DATA.filter(
      (parking) =>
        parking.spot.toLowerCase().includes(term) ||
        parking.location.toLowerCase().includes(term) ||
        parking.status.toLowerCase().includes(term)
    );
    setFilteredParking(filtered);
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Parking Management</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search parking spots..."
            className="bg-gray-200 text-gray-800 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spot
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rate (per hour)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredParking.map((parking) => (
              <motion.tr
                key={parking.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {parking.spot}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {parking.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {parking.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ${parking.rate.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ${parking.revenue.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
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

export default ParkingTable;
