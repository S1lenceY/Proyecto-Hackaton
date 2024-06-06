import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Grupos = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < 2) {
      // Cambia este valor según la cantidad de tabs que tengas
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="relative flex items-center">
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          className="w-full"
        >
          <div className="flex items-center mb-5">
            <button
              onClick={handlePrev}
              className="sm:text-[#3e4559] text-textcard text-sm sm:text-base -translate-x-2 sm:p-2 bg-transparent rounded-full sm:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <TabList className="flex  cursor-pointer w-full h-8 text-sm md:h-10 md:text-base gap-3 overflow-hidden max-w-72 overflow-x-auto md:max-w-full">
              <Tab
                className={`px-4 py-2 rounded-full ${
                  selectedIndex === 0
                    ? "bg-bgpurplebutton text-white"
                    : "bg-gray-200"
                }`}
              >
                IVU
              </Tab>
              <Tab
                className={`px-4 py-2 rounded-full ${
                  selectedIndex === 1
                    ? "bg-bgpurplebutton text-white"
                    : "bg-gray-200"
                }`}
              >
                Comprensión y Redacción de textos
              </Tab>
              <Tab
                className={`px-4 py-2 rounded-full  ${
                  selectedIndex === 2
                    ? "bg-bgpurplebutton text-white"
                    : "bg-gray-200"
                }`}
              >
                Cálculo Aplicado a la Física I
              </Tab>

            </TabList>
            <button
              onClick={handleNext}
              className="sm:text-[#3e4559] text-sm sm:text-base  text-textcard translate-x-2 sm:p-2 bg-transparent rounded-full sm:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>

          <TabPanel>
            <div>Hola Mundo</div>
          </TabPanel>
          <TabPanel>
            <div>Calendario</div>
          </TabPanel>
          <TabPanel>
            <div>Fregado</div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Grupos;
