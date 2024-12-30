import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<SettingSection icon={Lock} title={"Security"}>
			<div className='bg-white shadow-lg rounded-xl p-6 border border-gray-300'>
				<ToggleSwitch
					label={"Two-Factor Authentication"}
					isOn={twoFactor}
					onToggle={() => setTwoFactor(!twoFactor)}
				/>
				<div className='mt-4'>
					<button
						className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200'
					>
						Change Password
					</button>
				</div>
			</div>
		</SettingSection>
	);
};
export default Security;
