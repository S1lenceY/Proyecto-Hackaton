import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UserImage from "../Assets/User.png";
import GrupoImagen from "../Assets/grupoestrecho.jpg";
import Logo from "../Assets/Logo.webp";
import Calendario from "./Utils/Calendario";

const Grupos = () => {
  const grupo = [
    {
      idGrupo: 1,
      nombre: "Grupo de Proyecto",
      descripcion:
        "Este grupo está trabajando en un proyecto de desarrollo de software",
      nombreTarea: "TAREA 02",
      curso: "CAF I",
    },
    {
      idGrupo: 2,
      nombre: "Grupo de Hackaton",
      descripcion: "Este grupo está trabajando en un proyecto de Hackaton",
      nombreTarea: "Desarrollo de colaboratte",
      curso: "Hackaton",
    },
  ];

  const [showGroup, setShowGroup] = useState(false);

  const handleOpenClick = () => {
    setShowGroup(true);
  };

  const handleBackClick = () => {
    setShowGroup(false);
  };

  return (
    <>
      <div className="flex flex-col">
        {showGroup ? (
          <div className="flex flex-col">
            <div className="flex w-full items-center gap-2 mb-3">
              <button
                onClick={handleBackClick}
                className=" text-bgpurplebutton font-bold rounded-sm focus:outline-none"
              >
                ← Volver a Grupos
              </button>
              <span className="text-textcard font-bold pl-2 border-l border-l-textcard">
                Desarrollo de Colaboratte - Tarea 02
              </span>
            </div>
            <div className="flex flex-col lg:flex-row md:gap-10">
              <div className="w-full max-w-64 flex flex-col gap-5">
                <div className="flex flex-row max-w-64 overflow-x-auto scroll gap-5">
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
                  </div>
                </div>

                <div className="bg-bgcard p-5 rounded-2xl w-full max-w-64 text-textcard overflow-y-auto h-fit max-h-52">
                  <span className="font-bold text-xl">Horario</span>

                  <div className="flex flex-col gap-3 mt-1">
                    <div className=" flex flex-col">
                      <span className="text-md font-semibold">Innovacion y transformacion digital</span>

                      <span className="text-xs">
                        Lunes y Jueves de 8:00 a 5:00
                      </span>
                    </div>
                  </div>

                 
                  
                </div>
              </div>

              <div className="mt-5 md:mt-3 flex flex-col gap-4 w-full md:w-[400px]">
                <img
                  src={GrupoImagen}
                  alt=""
                  className="w-full h-20 object-cover rounded-xl"
                />

                <div className="bg-bgcard p-7 rounded-2xl  text-textcard flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-xl">Grupo 5</span>

                    <span>Esta es una descripción específica del grupo</span>
                  </div>

                  <button className="text-sm p-2 font-bold text-white bg-[#327c6e] rounded-md">
                    Generar grupo de WhatsApp
                  </button>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                  <button className="w-full group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                    Recursos
                  </button>
                  <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button className="bg-[#fa708c] w-full max-w-36 text-white text-sm px-7 font-bold py-1.5 rounded-sm transition duration-200 ease-in-out focus:outline-none">
              Nuevo Grupo
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10">
              {grupo.map((group, index) => (
                <div className="flex flex-col mt-3" key={index}>
                  <div className="flex flex-col w-full max-w-[450px] mt-3 bg-bgcard rounded-b-lg">
                    <img
                      src={Logo}
                      alt=""
                      className="h-24 object-cover rounded-t-lg"
                    />
                    <div className="flex items-center justify-between p-4 pb-0">
                      <span className="font-bold text-2xl text-textcard">
                        {group.nombre}
                      </span>
                      <span className="text-slate-400 ml-2 text-end">
                        {group.nombreTarea}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-center text-center text-textcard p-4 pt-0">
                      <div className="flex flex-col items-start gap-2 md:gap-1">
                        <div className="flex flex-col md:flex-col-reverse items-start gap-2 md:gap-3">
                          <span className="text-white text-sm px-4 bg-[#b01f5f] mt-2 md:mt-0">
                            {group.curso}
                          </span>

                          <p className="text-sm text-start mt-1">
                            {group.descripcion}
                          </p>
                        </div>
                      </div>

                      <div
                        className="bg-loginbutton cursor-pointer w-full md:w-fit self-center mt-3 md:self-end text-white font-bold py-1 px-2 md:px-5 md:ml-6 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none text-sm"
                        onClick={handleOpenClick}
                      >
                        Abrir
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Grupos;
