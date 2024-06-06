import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UserImage from "../Assets/User.png";
import Logo from "../Assets/Logo.webp";

const Grupos = () => {
  const tabs = [
    {
      id: 1,
      nombre: "IVU",
    },
    {
      id: 2,
      nombre: "Calculo aplicado",
    },
    {
      id: 3,
      nombre: "Matemática",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showNewContent, setShowNewContent] = useState(false);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setShowNewContent(false); // Reset the new content state when switching tabs
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setShowNewContent(false); // Reset the new content state when switching tabs
    }
  };

  const handleNext = () => {
    if (selectedIndex < tabs.length - 1) {
      // Cambia este valor según la cantidad de tabs que tengas
      setSelectedIndex(selectedIndex + 1);
      setShowNewContent(false); // Reset the new content state when switching tabs
    }
  };

  const handleButtonClick = () => {
    setShowNewContent(true);
  };

  return (
    <>
      <div className="relative flex items-center">
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          className="w-full flex flex-col"
        >
          <div className="flex items-center mb-5 w-fit self-center">
            <button
              onClick={handlePrev}
              className="sm:text-[#3e4559] text-textcard text-sm sm:text-base -translate-x-2 sm:p-2 sm:mr-2 bg-transparent rounded-full sm:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <TabList className="flex cursor-pointer w-full h-8 text-sm md:h-10 md:text-base gap-2 sm:gap-3 md:gap-5 overflow-hidden max-w-72 sm:max-w-96 overflow-x-auto scrollbar-none md:max-w-full">
              {tabs.map((t, index) => (
                <Tab
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    selectedIndex === index
                      ? "bg-bgpurplebutton text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {t.nombre}
                </Tab>
              ))}
            </TabList>
            <button
              onClick={handleNext}
              className="sm:text-[#3e4559] text-sm sm:text-base  text-textcard translate-x-2 sm:p-2 sm:ml-2  bg-transparent rounded-full sm:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>

          {tabs.map((_, index) => (
            <TabPanel key={index}>
              {showNewContent ? (
                <div>Hola Mundo</div>
              ) : (
                <Tabs>
                  <TabList>
                    <Tab>Tab1</Tab>
                    <Tab>Tab2</Tab>
                  </TabList>
                  <TabPanel>Contenido 1</TabPanel>
                  <TabPanel>
                    <div>
                      Botón para abrir un componente que reemplace a todo el
                      TabPanel
                      <button onClick={handleButtonClick}>Abrir</button>
                    </div>
                  </TabPanel>
                </Tabs>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Grupos;
