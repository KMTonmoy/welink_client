"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  Facebook,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regDob, setRegDob] = useState("");

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const formVariants = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const floatingOrbs = [
    {
      top: "10%",
      left: "5%",
      delay: 0,
      duration: 20,
      color: "from-purple-400/20",
    },
    {
      top: "70%",
      right: "8%",
      delay: 2,
      duration: 25,
      color: "from-blue-400/20",
    },
    {
      bottom: "15%",
      left: "10%",
      delay: 1,
      duration: 22,
      color: "from-pink-400/20",
    },
    {
      top: "40%",
      right: "15%",
      delay: 3,
      duration: 18,
      color: "from-indigo-400/20",
    },
  ];

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Animated Background Orbs */}
      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br ${orb.color} to-transparent rounded-full blur-3xl opacity-30`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 p-8 lg:p-12 text-white flex flex-col justify-between"
          >
            <div>
              <motion.div
                className="flex items-center space-x-2 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <span className="text-purple-600 font-bold text-2xl">W</span>
                </motion.div>
                <h1 className="text-2xl font-bold">WeLink</h1>
              </motion.div>

              <motion.h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isLogin ? "Welcome Back! 👋" : "Join WeLink Today! 🚀"}
              </motion.h2>

              <motion.p
                className="text-purple-100 mb-8 text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {isLogin
                  ? "Connect with friends, share moments, and discover communities that matter to you."
                  : "Create your account and start connecting with millions of people around the world."}
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  "Connect with friends and family",
                  "Share photos, videos, and updates",
                  "Join communities and groups",
                  "Secure and private messaging",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>


          </motion.div>

          {/* Right Side - Forms */}
          <motion.div
            className="lg:w-1/2 p-8 lg:p-12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-8">
              <motion.button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-full font-medium transition-all ${
                  isLogin
                    ? "bg-white shadow-md text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
              <motion.button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-full font-medium transition-all ${
                  !isLogin
                    ? "bg-white shadow-md text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register
              </motion.button>
            </div>

            {/* Animated Forms */}
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-5"
                >
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <motion.button
                      className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                      whileHover={{ x: 2 }}
                    >
                      Forgot password?
                    </motion.button>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
                  >
                    <span>Login to WeLink</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={regDob}
                        onChange={(e) => setRegDob(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={regConfirmPassword}
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => setAgreeTerms(!agreeTerms)}
                      className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
                        agreeTerms
                          ? "bg-purple-600 border-purple-600"
                          : "border-gray-300 hover:border-purple-600"
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      {agreeTerms && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </motion.button>
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <button className="text-purple-600 hover:text-purple-700 font-medium">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button className="text-purple-600 hover:text-purple-700 font-medium">
                        Privacy Policy
                      </button>
                    </span>
                  </div>

                  {/* Register Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group mt-4"
                  >
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <motion.div
              className="mt-6 text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <motion.button
                    onClick={toggleMode}
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign up for free
                  </motion.button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <motion.button
                    onClick={toggleMode}
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login here
                  </motion.button>
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;
