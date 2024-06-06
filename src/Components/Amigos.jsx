import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import UserImage from "../Assets/User.png";
import Mascota from "../Assets/mascota1.jpg";

const Amigos = () => {
  return (
    <>
      <div className="bg-bgpurplebutton w-full p-2 absolute  top-14 md:top-20 left-0 hidden sm:block text-white">
        <span className="text-sm md:ml-32 sm:text-base">
          Descubre nuevos compañeros de estudio y crea proyectos increibles
          juntos.
        </span>
      </div>

      <div className="bg-bgtitle w-fit p-2 text-lg md:p-3 lg:pr-80 md:text-2xl text-bgtexttitle gap-1 md:gap-2 flex sm:mt-10">
        <span>|</span>
        <p>Personas que comparten tus mismos cursos</p>
      </div>

      <div className="flex w-full mt-5 gap-10 justify-center">
        <div className="flex flex-col gap-8 w-full max-w-80 md:max-w-fit">

          <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-0 lg:flex-row bg-bgcard p-4 rounded-3xl">
            <img src={UserImage} alt="" className="w-32 md:w-16" />
            <div className="flex flex-col md:pl-3 gap-1 items-center text-textcard">
              <span className="text-2xl text-textcard">Gabriel Paiva</span>
              <div className="flex gap-2 text-xs text-white items-center">
                <span className="p-0.5 px-4 bg-[#b01f5f]">Anime</span>
                <span className="p-0.5 px-4 bg-[#bd500b]">Fútbol</span>
              </div>
              <div className="flex flex-col md:hidden px-2">
                <img
                  src={Mascota}
                  alt=""
                  className="w-10 rounded-full self-center my-2"
                />
                <span className="text-center mb-3 ">
                  Esta es una descripción específica que cada persona podrá
                  colocar
                </span>

                <button className=" text-sm p-2 rounded-lg text-white bg-bgpurplebutton ">
                  Seguir
                </button>
              </div>
            </div>
          </div>

          
        </div>

        <div className=" flex-col bg-bgcard text-textcard p-5 w-full hidden md:flex rounded-3xl max-w-[525px] h-fit">
          <div className="flex">
            <img src={UserImage} alt="" className="w-32 h-32" />
            <div className="flex flex-col ml-5 w-full">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">Gabriel Paiva</span>
                <button className=" text-sm p-1 px-3 lg:px-5 ml-1 lg:mr-4  rounded-lg text-white bg-bgpurplebutton">
                  Seguir
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <p>
                  Esta es una descripción específica que cada persona podrá
                  colocar
                </p>
                <div className="flex gap-2 text-xs text-white items-center">
                  <span className="p-0.5 px-4 bg-[#b01f5f]">Anime</span>
                  <span className="p-0.5 px-4 bg-[#bd500b]">Fútbol</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="flex flex-col w-full max-w-60 lg:max-w-72">
              <div className="p-1 bg-bginsigniaamigos rounded-full px-10  mb-3 font-bold">
                <span>Ciclo Perfecto</span>
              </div>

              <div className="p-1 bg-bginsigniaamigos rounded-full px-10  mb-3 font-bold">
                <span>Ciclo Perfecto</span>
              </div>
            </div>

            <div className="flex  items-center relative ml-10 lg:mr-4">
              <span className="text-2xl absolute -translate-x-14 -rotate-90 font-bold">
                UT<span className="text-[#fca9bc]">PET</span>
              </span>
              <img
                src={Mascota}
                alt=""
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amigos;
