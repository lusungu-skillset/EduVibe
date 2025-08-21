import React from 'react';
import CountUp from 'react-countup';
import { FaUserGraduate, FaChalkboardTeacher, FaInfinity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import courseImage from '../assets/course-image.png';
import Header from './Header';

export default function Homepage() {
  return (
  <div>
    <div>
    <Header/>
    </div>
    <div className="min-h-screen bg-[#D2E6E4] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Left Side */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "Never sttop learning" subtitle */}
            <motion.div
              className="relative inline-flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Circular container */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm">
                <p className="text-lg md:text-xl text-gray-600">
                  Never stop learning
                </p>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#0B7077] mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Grow up your skills by online courses with EduVibe
            </motion.h1>

            {/* EXPLORE PATH button */}
            <motion.button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md text-lg mb-12 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              EXPLORE PATH
            </motion.button>

            {/* Stats Container - Now with three items in a row */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Assisted Students */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center">
                  <FaUserGraduate className="text-[#0B7077] text-2xl mr-2" />
                  <CountUp
                    end={250}
                    suffix="K"
                    duration={2.5}
                    className="text-4xl font-bold text-gray-900"
                  />
                </div>
                <span className="text-gray-600 mt-2">Assisted Student</span>
              </div>

              {/* Expert Instructors */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-[#0B7077] text-2xl mr-2" />
                  <CountUp
                    end={100}
                    suffix="+"
                    duration={2.5}
                    className="text-4xl font-bold text-gray-900"
                  />
                </div>
                <span className="text-gray-600 mt-2">Expert Instructors</span>
              </div>

              {/* Lifetime Access */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center">
                  <FaInfinity className="text-[#0B7077] text-2xl mr-2" />
                  <span className="text-4xl font-bold text-gray-900">Lifetime</span>
                </div>
                <span className="text-gray-600 mt-2">Access</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={courseImage}
              alt="Students learning with EduVibe"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              style={{ maxHeight: "600px" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
}