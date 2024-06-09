import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { LuUserCircle2, LuFiles } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { GoHome, GoPeople} from "react-icons/go";
import ThemeButton from "../Utils/ThemeButton";
import Header from "./Header";
import { Link } from "react-router-dom";
import { INICIO, AMIGOS, GRUPOS, PERFIL, RECURSOS } from "../../Path/Paths";

const Sidebar = () => {
  // Estado para controlar la visibilidad del sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Función para manejar el clic en el icono de menú
  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Función para manejar el clic en el icono de flecha izquierda
  const handleBackClick = () => {
    setSidebarVisible(false);
  };

  //Variable y Estado 
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    localStorage.setItem("selectedLink", link);
  };

  useEffect(() => {
    const storedLink = localStorage.getItem("selectedLink");
    if (storedLink) {
      setSelectedLink(storedLink); // Establecer el estado desde localStorage al cargar la página
    }
  }, []);

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <div className="bg-backgroundsidebar hidden md:block h-screen transition-transform z-10 fixed">
        <div
          className="text-white bg-backgroundsidebar flex items-center justify-center h-20 w-[88px] text-3xl cursor-pointer"
          onClick={handleMenuClick}
        >
          <IoIosMenu />
        </div>

        <Link
          id={INICIO}
          to={INICIO}
          className={` flex flex-col justify-center border-l-4 h-20 gap-2 ${
            selectedLink === INICIO
              ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
              : "text-white border-l-backgroundsidebar"
          }`}
          onClick={() => handleLinkClick(INICIO)}
        >
          <div className="flex flex-col gap-2 w-20 items-center ">
            <GoHome className="text-2xl" />
            <span className="text-xs">Inicio</span>
          </div>
        </Link>
        <Link
          id={AMIGOS}
          to={AMIGOS}
          className={` flex flex-col justify-center border-l-4 h-20 gap-2 ${
            selectedLink === AMIGOS
              ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
              : "text-white border-l-backgroundsidebar"
          }`}
          onClick={() => handleLinkClick(AMIGOS)}
        >
          <div className="flex flex-col gap-2 w-20 items-center">
            <GoPeople className="text-2xl" />
            <span className=" text-xs">Amigos</span>
          </div>
        </Link>
        <Link
          id={GRUPOS}
          to={GRUPOS}
          className={` flex flex-col justify-center border-l-4 h-20 gap-2 ${
            selectedLink === GRUPOS
              ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
              : "text-white border-l-backgroundsidebar"
          }`}
          onClick={() => handleLinkClick(GRUPOS)}
        >
          <div className="flex flex-col gap-2 w-20 items-center">
            <GrGroup className="text-2xl" />
            <span className=" text-xs">Grupos</span>
          </div>
        </Link>
        <Link
          id={PERFIL}
          to={PERFIL}
          className={` flex flex-col justify-center border-l-4 h-20 gap-2 ${
            selectedLink === PERFIL
              ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
              : "text-white border-l-backgroundsidebar"
          }`}
          onClick={() => handleLinkClick(PERFIL)}
        >
          <div className="flex flex-col gap-2 w-20 items-center">
            <LuUserCircle2  className="text-2xl" />
            <span className=" text-xs">Perfil</span>
          </div>
        </Link>
        <Link
          id={RECURSOS}
          to={RECURSOS}
          className={` flex flex-col justify-center border-l-4 h-20 gap-2 ${
            selectedLink === RECURSOS
              ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
              : "text-white border-l-backgroundsidebar"
          }`}
          onClick={() => handleLinkClick(RECURSOS)}
        >
          <div className="flex flex-col gap-2 w-20 items-center">
            <LuFiles  className="text-2xl" />
            <span className=" text-xs">Recursos</span>
          </div>
        </Link>
      </div>

      {/* Div adicional que cubre el contenido de la página */}
      {sidebarVisible && (
        <div
          className="fixed top-0 left-0 z-10 w-screen h-screen bg-backgroundsidebar opacity-20"
          onClick={handleMenuClick}
        />
      )}

      <div
        className={`w-64 text-white h-screen fixed bg-backgroundsidebar z-20 ${
          sidebarVisible ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300`}
      >
        <div
          className="flex items-center justify-end text-3xl h-14 cursor-pointer"
          onClick={handleBackClick}
        >
          <FiArrowLeft className="m-4" />
        </div>
        <div className="flex items-center gap-3 pb-4 pl-6 border-b border-b-divisorsidebar">
          <img src={localStorage.getItem("imagen")} className="rounded-full h-10 w-10" />
          <div className="flex flex-col py-4">
            <span className="text-sm font-semibold">
              ¡Hola {localStorage.getItem("nombreApellido")}!
            </span>
            <span className="text-xs">
              {localStorage.getItem("codigo")}@utp.edu.pe
            </span>
          </div>
        </div>

        <div className="pt-7">
          <Link
            to={INICIO}
            className={` flex items-center py-4 px-5 border-l-4 gap-10 mb-6 ${
              selectedLink === INICIO
                ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
                : "text-white border-l-backgroundsidebar "
            }`}
            onClick={() => {
              handleLinkClick(INICIO);
              handleBackClick();
            }}
          >
            <GoHome className="text-2xl" />
            <span className="text-sm">Inicio</span>
          </Link>
          <Link
            to={AMIGOS}
            className={` flex items-center py-4 px-5 border-l-4 gap-10 mb-6 ${
              selectedLink === AMIGOS
                ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
                : "text-white border-l-backgroundsidebar"
            }`}
            onClick={() => {
              handleLinkClick(AMIGOS);
              handleBackClick();
            }}
          >
            <GoPeople className="text-2xl" />
            <span className="text-sm">Amigos</span>
          </Link>
          <Link
            to={GRUPOS}
            className={` flex items-center py-4 px-5 border-l-4 gap-10 mb-6 ${
              selectedLink === GRUPOS
                ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
                : "text-white border-l-backgroundsidebar"
            }`}
            onClick={() => {
              handleLinkClick(GRUPOS);
              handleBackClick();
            }}
          >
            <GrGroup className="text-2xl" />
            <span className="text-sm">Grupos</span>
          </Link>
          <Link
            to={PERFIL}
            className={` flex items-center py-4 px-5 border-l-4 gap-10 mb-6 ${
              selectedLink === PERFIL
                ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
                : "text-white border-l-backgroundsidebar"
            }`}
            onClick={() => {
              handleLinkClick(PERFIL);
              handleBackClick();
            }}
          >
            <LuUserCircle2  className="text-2xl" />
            <span className="text-sm">Perfil</span>
          </Link>
          <Link
            to={RECURSOS}
            className={` flex items-center py-4 px-5 border-l-4 gap-10 mb-7 ${
              selectedLink === RECURSOS
                ? "bg-background text-textsidebar border-l-4 border-l-sidebarlinecolor"
                : "text-white border-l-backgroundsidebar"
            }`}
            onClick={() => {
              handleLinkClick(RECURSOS);
              handleBackClick();
            }}
          >
            <LuFiles  className="text-2xl" />
            <span className="text-sm">Recursos</span>
          </Link>

          <div className="flex justify-center items-center">
            <ThemeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
