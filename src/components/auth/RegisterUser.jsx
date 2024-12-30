import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterUser = () => {
  const INITIAL_REGISTER_OBJ = {
    name: "",
    emailId: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerObj.name.trim() === "")
      return setErrorMessage("Name is required!");
    if (registerObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required!");
    if (registerObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      // Save user details or call an API
      console.log("User registered:", registerObj);
      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
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
          Register
        </h2>
        <form onSubmit={(e) => submitForm(e)}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={registerObj.name}
              onChange={(e) =>
                updateFormValue({ updateType: "name", value: e.target.value })
              }
              className="w-full p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Name"
              autoComplete="name"
            />
            <input
              type="email"
              id="email"
              name="emailId"
              value={registerObj.emailId}
              onChange={(e) =>
                updateFormValue({ updateType: "emailId", value: e.target.value })
              }
              className="w-full mt-4 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={registerObj.password}
              onChange={(e) =>
                updateFormValue({ updateType: "password", value: e.target.value })
              }
              className="w-full mt-4 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 input input-bordered"
              placeholder="Password"
              autoComplete="new-password"
            />
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
            Register
          </button>

          <div className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer transition duration-200">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterUser;
