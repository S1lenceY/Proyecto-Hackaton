import React, {useEffect, useState} from "react";
import {
  BsFillSendFill,
  BsTypeItalic,
  BsSend,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { AiOutlinePicture, AiOutlineBold } from "react-icons/ai";
import UserImage from "../Assets/User.png";
import Amigos from "../Assets/amigos.png";
import Logo from "../Assets/Logo.webp";

const Inicio = () => {
  const [showWidth, setShowWidth] = useState(false);

  const handleWidth = () => {
    setShowWidth(!showWidth);
  };

  return (
    <>
      <div className="bg-bgpurplebutton w-full p-2 absolute  top-14 md:top-20 left-0  text-white">
        <span className="text-sm md:ml-32 sm:text-base">
          Recuerda que la base del conocimiento es compartir
        </span>
      </div>

      <div className="flex mt-5 w-full h-full justify-evenly">
        <div className="flex flex-col text-titlecolor w-full sm:max-w-[600px] md:mr-10 md:max-h-[480px] md:overflow-y-auto scrollbar-none">
          <div className="flex flex-col bg-bgcard p-3 rounded-xl text-lg mt-4 ">
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

          <div className="flex flex-col gap-5 my-5">
            <div className="flex items-center relative text-white">
              <img src={UserImage} alt="" className="w-14 absolute" />
              <div className="flex flex-col bg-[#bf500b] p-1 px-10 pl-16 rounded-full">
                <span className=" font-bold">Gabriel Paiva</span>
                <span className=" text-[10px]">Hace 5 minutos</span>
              </div>
            </div>

            <div className="bg-bgcard rounded-lg h-fit">
              <div className="flex justify-between p-4 items-center">
                <p>
                  Un gran presente que quiero mandar a mis mejores amigos, las
                  mejores vacaciones vividas, los quiero mucho
                </p>
                <div className="text-lg flex gap-3 ml-3">
                  <BsHeart />
                  <BsSend />
                </div>
              </div>
              <img
                src={Logo}
                alt=""
                className="h-52 w-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 my-5">
            <div className="flex items-center relative text-white">
              <img src={UserImage} alt="" className="w-14 absolute" />
              <div className="flex flex-col bg-[#bf500b] p-1 px-10 pl-16 rounded-full">
                <span className=" font-bold">Gabriel Paiva</span>
                <span className=" text-[10px]">Hace 5 minutos</span>
              </div>
            </div>

            <div className="bg-bgcard rounded-lg h-fit">
              <div className="flex justify-between p-4 items-center">
                <p>No Me gusta la hackaton, con todo respeto</p>
                <div className="text-lg flex gap-3 ml-3">
                  <BsHeart />
                  <BsSend />
                </div>
              </div>
              <img
                src={Logo}
                alt=""
                className="h-52 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" mt-5 md:w-full max-w-72 text-textcard fixed bottom-4 md:static right-4">
          <img src={Amigos} alt="" className="object-cover h-60 w-full hidden md:block" />

          <div className="shadow-md flex flex-col mt-10 p-4 bg-bgcard md:h-[180px]  md:rounded-md overflow-hidden md:w-full h-10 rounded-full w-10 hover:w-72 md:hover:w-full hover:h-[180px] hover:rounded-md">
            <span className="text-2xl font-bold text-center">Invitaciones</span>
            <div className="mt-4 flex flex-col max-h-full overflow-y-auto scrollbar-none">

              <div className="flex flex-col mb-5">
                <div className="flex items-center justify-around">
                  <span className="font-bold">UTPILOT</span>
                  <span className="text-sm p-1 bg-[#b01f5f] text-white">
                    Programación
                  </span>
                  <span className="text-xl cursor-pointer">x</span>
                </div>
                <button className="self-end text-sm p-1 mt-2 px-4 rounded-lg text-white bg-bgpurplebutton">Aceptar</button>
              </div>

              
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Inicio;
