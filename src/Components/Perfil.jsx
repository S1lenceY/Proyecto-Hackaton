import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import AxiosHeader from "../Auth/AxiosHeader";
import UserImage from "../Assets/User.png";
import Insignia from "../Assets/insignia.jpg";
import { BsFillSendFill, BsTypeItalic } from "react-icons/bs";
import { AiOutlinePicture, AiOutlineBold } from "react-icons/ai";

const Perfil = () => {
  //Mostrar y ocultar insignias

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const insignias = [
    { id: 1, text: "Ciclo Perfecto" },
    { id: 2, text: "Ciclo Perfecto" },
    { id: 3, text: "Ciclo Perfecto" },
    { id: 4, text: "Ciclo Perfecto" },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-bgtitle text-bgtexttitle flex flex-col sm:flex-row h-fit lg:h-40  items-center">
          <img
            src={UserImage}
            alt=""
            className=" w-full max-w-44 sm:max-w-60 m-5 ml-5 lg:translate-y-20"
          />
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col items-center lg:items-start text-3xl px-10 sm:pl-5 sm:pr-10 lg:px-10 lg:pl-5">
              <span>Gabriel Paiva</span>
              <span className="text-lg font-bold">U21216338</span>
            </div>
            <div className="flex flex-col text-sm my-5 text-bgpurplebutton">
              <span>
                <b>0</b> publicaciones
              </span>
              <span>
                <b>2</b> seguidores
              </span>
              <span>
                <b>3</b> seguidos
              </span>
            </div>
            <button className="bg-loginbutton mb-7 md:mb-0 md:mt-2 mx-10 text-white px-10 font-bold py-1.5 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none">
              Editar
            </button>
          </div>
        </div>

        <div className="flex items-center sm:items-start flex-col lg:pl-72 text-bgtexttitle py-5 sm:py-3 ml-3 relative">
          <div className="flex items-center gap-2">
            <span className=" text-lg font-bold">Insignias Destacadas</span>
            {insignias.length > 3 && !showAll && (
              <button onClick={handleToggle} className=" text-bgtexttitle">
                <span className="text-lg">&#9660;</span>
                {/* Flecha hacia abajo */}
              </button>
            )}
            {showAll && (
              <button onClick={handleToggle} className="text-bgtexttitle">
                <span className="text-lg">&#9650;</span>{" "}
                {/* Flecha hacia arriba */}
              </button>
            )}
          </div>

          {/*Añadir el .map de las insignias*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-3 gap-5">
            {insignias
              .slice(0, showAll ? insignias.length : 3)
              .map((insignia, index) => (
                <div
                  key={index}
                  className="flex w-fit gap-3 items-center bg-bginsignia px-5 py-2 rounded-xl"
                >
                  <img src={Insignia} alt="" className="rounded-full w-11" />
                  <div className="flex flex-col text-sm font-bold">
                    <span>{insignia.text.split(" ")[0]}</span>
                    <span>{insignia.text.split(" ")[1]}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-5 sm:mt-10 text-textcard items-center sm:items-start">
          <div className="bg-bgcard p-4 rounded-md h-36 w-full max-w-48">
            <span className="font-bold">Misiones Pendientes</span>
          </div>
          <div className="mt-7 sm:mt-0 sm:ml-14 sm:pl-14 sm:border-l-2 border-bgperfilline w-full">
            <span className="text-lg font-bold">Ultima publicación</span>
            <div className="flex flex-col bg-bgcard p-3 rounded-xl text-lg mt-4">
              <div className="flex items-center">
                <textarea
                  placeholder="Tu feed está vacío, sube una publicación aquí"
                  className="bg-transparent outline-none text-sm p-2 pb-0 w-full text-headertext resize-none"
                />
                <div className="p-2 bg-bgpurplebutton rounded-full text-white">
                  <BsFillSendFill />
                </div>
              </div>
              <div className="flex text-lg gap-5 pl-2 mt-3 lg:mt-0">
                <AiOutlinePicture />
                <AiOutlineBold />
                <BsTypeItalic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
