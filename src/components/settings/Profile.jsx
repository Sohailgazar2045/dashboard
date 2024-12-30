import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='bg-white shadow-lg rounded-xl p-6 border border-gray-300'>
				<div className='flex flex-col sm:flex-row items-center mb-6'>
					<img
						src='https://randomuser.me/api/portraits/men/3.jpg'
						alt='Profile'
						className='rounded-full w-20 h-20 object-cover mr-4'
					/>

					<div>
						<h3 className='text-lg font-semibold text-gray-800'>John Doe</h3>
						<p className='text-gray-600'>john.doe@example.com</p>
					</div>
				</div>

				<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
					Edit Profile
				</button>
			</div>
		</SettingSection>
	);
};
export default Profile;
