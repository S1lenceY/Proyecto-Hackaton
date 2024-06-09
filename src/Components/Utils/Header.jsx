import React, { useEffect, useState, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LogoUTP from "../../Assets/LogoCollaborateW.png";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineDollar } from "react-icons/ai";
import Dropdown from "./Dropdown";
import SearchContext from "../../Auth/SearchContext";
import axios from "axios";
import { AMIGOS } from "../../Path/Paths";

const Header = ({ handleMenuClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResults } = useContext(SearchContext); // Usa el contexto para establecer los resultados de búsqueda
  const selectedLink = localStorage.getItem("selectedLink");

  const handleSearchChange = async (e) => {
    const id = localStorage.getItem("userID");
    const value = e.target.value;
    setSearchTerm(value); // Actualizar el término de búsqueda en el estado local

    // Realizar la búsqueda solo si el término de búsqueda tiene al menos 3 caracteres
    if (value.trim().length >= 3) {
      try {
        const response = await axios.get(
          `https://apicollaboration-production.up.railway.app/api/v1/amigos/buscar?query=${value}&idUsuario=${id}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
      }
    } else {
      setSearchResults([]); // Si el término de búsqueda no tiene al menos 3 caracteres, restablecer los resultados de búsqueda a un estado vacío
    }
  };

  return (
    <>
      <div className="fixed flex md:absolute md:h-20 h-14 w-screen bg-backgroundheader items-center justify-between z-10">
        <div
          className="absolute cursor-pointer top-0 left-0 bg-backgroundsidebar w-14 h-14 flex items-center justify-center text-white text-2xl"
          onClick={handleMenuClick}
        >
          <IoIosMenu />
        </div>
        <div className="flex items-center">
          <div className=" hidden sm:flex ml-20 md:ml-36 items-center">
            <img src={LogoUTP} alt="" className="h-6 md:h-7" />
          </div>
          <div className={`flex bg-bgheaderlabel items-center p-2 rounded-xl gap-2 text-lg ml-20 sm:ml-4 md:ml-8 ${selectedLink === AMIGOS ? 'flex' : 'hidden'}`}>
            <input
              type="search"
              placeholder="Buscar"
              className=" bg-transparent outline-none text-sm p2 sm:border-r sm:border-r-[#959ca8] w-16 sm:w-40  lg:w-64 text-headertext"
              value={searchTerm}
              onChange={handleSearchChange} // Llamar a la función de búsqueda a medida que se escribe
            />
            <AiOutlineSearch className="text-[#959ca8]" />
          </div>
        </div>

        <div className="flex items-center">
      
          <div className="hidden lg:block ">
            <div className=" pl-5 gap-4 items-center flex border-l-headerline border-l">
              <div className="flex flex-col text-headertext">
                <span className="text-sm">
                  Hola, <b>{localStorage.getItem("nombreApellido")}</b>
                </span>
                <span className="text-xs self-end">Estudiante</span>
              </div>
              <img src={localStorage.getItem("imagen")} className="rounded-full h-10 w-10" />
            </div>
          </div>

          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
