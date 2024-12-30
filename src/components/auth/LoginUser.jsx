import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginUser = () => {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      localStorage.setItem("token", "DumyTokenHere");
      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <motion.div
      className="min-h-screen w-screen bg-gray-100 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Login
        </h2>
        <form onSubmit={(e) => submitForm(e)}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="emailId"
              value={loginObj.emailId}
              onChange={(e) =>
                updateFormValue({ updateType: "emailId", value: e.target.value })
              }
              className="w-full p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={loginObj.password}
              onChange={(e) =>
                updateFormValue({ updateType: "password", value: e.target.value })
              }
              className="w-full mt-4 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          <div className="text-right text-indigo-600">
            <Link to="/forgot-password">
              <span className="text-sm inline-block hover:underline transition duration-200">
                Forgot Password?
              </span>
            </Link>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className={`btn mt-4 w-full p-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              loading ? "loading" : ""
            }`}
          >
            Login
          </button>

          <div className="text-center mt-6 text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/register">
              <span className="text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer transition duration-200">
                Register
              </span>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginUser;
