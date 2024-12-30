import { useState } from "react";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (email.trim() === "") {
      return setErrorMessage("Email is required!");
    }

    // // Mock API call or logic for forgot password
    // setTimeout(() => {
    //   setSuccessMessage("A password reset link has been sent to your email.");
    // }, 1000);
  };

  return (
    <motion.div
      className="min-h-screen w-screen bg-gray-100 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">
          Forgot Password
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Email"
              autoComplete="email"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="text-green-500 text-sm mt-2 text-center">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            className="btn mt-4 w-full p-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgetPassword;
