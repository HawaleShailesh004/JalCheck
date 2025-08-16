import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleIcon } from "../../../assets/data/icons/GoogleIcon";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[480px] max-w-md mx-auto p-8 rounded-2xl shadow-xl bg-white mt-20 mb-12 border border-gray-200">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8 gap-6">
        <button
          onClick={() => setIsSignup(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition cursor-pointer ${
            isSignup
              ? "bg-gradient-to-r from-primary-dark to-primary-mid text-white shadow-lg"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsSignup(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition cursor-pointer ${
            !isSignup
              ? "bg-gradient-to-r from-primary-dark to-primary-mid text-white shadow-lg"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Log In
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isSignup ? (
          <motion.form
            key="signup"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-5"
          >
            <input type="text" name="name" placeholder="Full Name" className="input-field" />
            <input type="email" name="email" placeholder="Email" className="input-field" />
            <input type="password" name="password" placeholder="Password" className="input-field" />

            <button
              type="submit"
              className="bg-gradient-to-r from-primary-dark to-primary-mid text-white py-2.5 rounded-lg font-semibold hover:brightness-110 transition cursor-pointer shadow-md"
            >
              Create Account
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="login"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-5"
          >
            <input type="email" name="email" placeholder="Email" className="input-field" />
            <input type="password" name="password" placeholder="Password" className="input-field" />

            <button
              type="submit"
              className="bg-gradient-to-r from-primary-dark to-primary-mid text-white py-2.5 rounded-lg font-semibold hover:brightness-110 transition cursor-pointer shadow-md"
            >
              Log In
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* OR separator */}
      <div className="flex items-center my-6 gap-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-400 font-semibold">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Sign In Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-3 w-full py-2.5 rounded-lg bg-white border border-gray-300 hover:shadow-lg transition cursor-pointer"
      >
        <GoogleIcon />
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>

      {/* Tailwind input styles */}
      <style>{`
        .input-field {
          padding: 0.65rem 1rem;
          border: 1.5px solid #CBD5E1; /* slate-300 */
          border-radius: 0.6rem;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input-field:focus {
          border-color: #2563eb; /* blue-600 (same as primary-mid) */
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Signup;
