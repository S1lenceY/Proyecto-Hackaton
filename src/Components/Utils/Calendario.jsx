import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';

const Calendario = () => {
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (date.getDay() === 0) {
        return 'text-red-500 p-2 hover:bg-background rounded-md'; // Sundays
      } else if (date.toDateString() === new Date().toDateString()) {
        return 'text-purple-500  hover:bg-background rounded-md'; // Today
      } else {
        return 'text-blue-500  hover:bg-background rounded-md'; // Other days
      }
    }
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 bg-bgcard text-textcard rounded-lg w-full lg:max-w-80 "
    >
      <Calendar
        tileClassName={tileClassName}
      />
    </motion.div>
  );
};

export default Calendario;
