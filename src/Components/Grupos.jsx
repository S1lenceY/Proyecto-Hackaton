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

  const handleGrupoClick = () => {
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
                <div className="w-full flex flex-col ">
                  <div className="flex flex-row max-w-64 overflow-x-auto scroll">
                    <div className="flex flex-row w-fit  gap-5">

                      <div className="p-4 mt-3 rounded-3xl bg-bgcard w-64 items-center flex gap-3 text-textcard text-center">
                        <img src={UserImage} alt="" className="w-16" />
                        <div className="flex flex-col gap-1 items-start ">
                          <span className="text-2xl text-nowrap">
                            Gabriel Paiva
                          </span>
                          <span className="p-0.5 px-3 bg-[#b01f5f] text-xs text-white">
                            Lider
                          </span>
                        </div>
                      </div>

                      <div className="p-4 mt-3 rounded-3xl bg-bgcard w-64 items-center flex gap-3 text-textcard text-center">
                        <img src={UserImage} alt="" className="w-16" />
                        <div className="flex flex-col gap-1 items-start ">
                          <span className="text-2xl text-nowrap">
                            Gabriel Paiva
                          </span>
                          <span className="p-0.5 px-3 bg-[#b01f5f] text-xs text-white">
                            Lider
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                <Tabs>
                  <TabList className="flex gap-3 text-sm sm:gap-5">
                    <Tab className="p-1 px-4 text-white bg-[#fa708c] cursor-pointer focus:bg-[#ff395c]">
                      Nuevo Grupo
                    </Tab>

                    <Tab className="p-1 px-4 text-white bg-[#fa708c] cursor-pointer focus:bg-[#ff395c]">
                      Grupos existentes
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="flex mt-2 gap-5 lg:gap-10">
                      <div className="flex flex-col">
                        <div className="p-2 sm:p-4 mt-3 rounded-xl sm:rounded-3xl bg-bgcard items-center w-full max-w-32 flex flex-col gap-3 text-textcard text-center sm:flex-row  sm:max-w-full">
                          <img
                            src={UserImage}
                            alt=""
                            className="w-full max-w-12 sm:max-w-16"
                          />

                          <div className="flex flex-col gap-1 items-center sm:items-start">
                            <span className="sm:text-2xl">Gabriel Paiva</span>

                            <span className="p-0.5 px-3 sm:mt-0 bg-[#b01f5f] text-xs text-white">
                              Lider
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center text-textcard bg-bgcard justify-center sm:justify-between p-2 w-full max-w-32 sm:max-w-full text-sm font-bold rounded-xl mt-5">
                          <span className="hidden sm:block">
                            Añade a un nuevo miembro
                          </span>

                          <span>+</span>
                        </div>

                        <div className="bg-loginbutton px-4 w-fit mt-3  text-white font-bold text-sm py-1 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none hidden md:block">
                          Guardar
                        </div>
                      </div>

                      <div className="flex flex-col  mt-3 lg:w-[525px]">
                        <input
                          type="text"
                          placeholder="Seleccionar Tarea"
                          className="p-2 px-3 text-sm rounded-full outline-none bg-bgcard text-textcard md:p-4 md:px-5"
                        />

                        <div className="flex flex-col w-full mt-3 bg-bgcard rounded-b-lg">
                          <img
                            src={Logo}
                            alt=""
                            className="h-14 md:h-20 object-cover rounded-t-lg"
                          />

                          <div className="flex flex-col md:flex-row md:justify-between items-center text-center text-textcard p-2 md:p-4">
                            <div className="flex flex-col items-center md:items-start">
                              <span className="font-bold text-lg md:text-2xl">
                                Grupo 5
                              </span>

                              <p className="text-sm md:text-start">
                                Esta es una descripción específica del grupo
                              </p>
                            </div>

                            <div className="flex gap-2 mt-3">
                              <div className="bg-loginbutton text-white font-bold py-1 px-2 md:py-2 md:px-4 md:ml-6 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none text-sm">
                                Editar
                              </div>

                              <div className="bg-loginbutton px-2 text-white font-bold text-sm py-1 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none md:hidden">
                                Guardar
                              </div>
                            </div>
                          </div>

                          <div className="justify-around hidden lg:flex mb-3">
                            <button className="bg-loginbutton px-4 text-white font-bold text-sm py-1 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none ">
                              Recomendar miembros del grupo
                            </button>

                            <button className="bg-loginbutton px-4 text-white font-bold text-sm py-1 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none ">
                              Generar roles recomendados
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10">
                      <div className="flex flex-col mt-3 ">
                        <div className="flex flex-col w-full max-w-[450px] mt-3 bg-bgcard rounded-b-lg">
                          <img
                            src={Logo}
                            alt=""
                            className="h-24 object-cover rounded-t-lg"
                          />

                          <div className="flex flex-col md:flex-row md:justify-between items-center text-center text-textcard p-4">
                            <div className="flex flex-col items-center md:items-start gap-2 md:gap-1">
                              <span className="font-bold text-lg md:text-2xl">
                                Grupo 5
                              </span>

                              <div className="flex flex-col md:flex-col-reverse items-center md:items-start gap-2 md:gap-3">
                                <div className="flex gap-2 text-xs text-white items-center">
                                  <span className="p-0.5 px-4 bg-[#b01f5f]">
                                    Anime
                                  </span>

                                  <span className="p-0.5 px-4 bg-[#bd500b]">
                                    Fútbol
                                  </span>
                                </div>

                                <p className="text-sm md:text-start ">
                                  Esta es una descripción específica del grupo
                                </p>
                              </div>
                            </div>

                            <div
                              className="bg-loginbutton cursor-pointer w-full md:w-fit self-center mt-3 md:self-end text-white font-bold py-1 px-2 md:py-2 md:px-4 md:ml-6 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none text-sm"
                              onClick={handleGrupoClick}
                            >
                              Abrir
                            </div>
                          </div>
                        </div>
                      </div>
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
