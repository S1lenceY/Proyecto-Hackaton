import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import UserImage from "../Assets/User.png";
import Mascota from "../Assets/mascota1.jpg";
import axios from "axios";

const Amigos = () => {

  const id = localStorage.getItem("userID");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAmigos = async () => {
      try {
        const response = await axios.get(`https://apicollaboration-production.up.railway.app/api/v1/amigos/${id}`);
        // Mapear los datos recibidos de la API al formato deseado
        const amigosFromAPI = response.data;

        const availableUser = [
          { idUser: 1, nombre: "Marí García", descripcion: "Estudiante de Ingeniería de Sistemas e Informática con pasión por la informática." },
          { idUser: 2, nombre: "Juan Perez", descripcion: "Estudiante apasionado por la inteligencia artificial." },
          { idUser: 3, nombre: "Carlos Ramírez", descripcion: "Estudiante de la carrera de Psicología" },
          { idUser: 4, nombre: "Ana López", descripcion: "Estudiante con interés en el desarrollo de software - backend." },
        ];
  
        const recomended = amigosFromAPI.map(amigo => {
          // Buscar el usuario correspondiente en availableUser
          const user = availableUser.find(u => u.nombre === amigo.nombre);
          
          // Construir el objeto recomendado con la información correspondiente
          return {
            name: amigo.nombre,
            label: amigo.nombreEtiquetas || [],
            linkImagen: amigo.linkImagen,
            idUsuario: user ? user.idUser : null,
            insignia: amigo.nombreInsignias || [],
            descripcion: user ? user.descripcion : "",
            numeroMVP: amigo.nroMvp || 0,
          };
        });
  
        setData(recomended);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    fetchAmigos();
  });

  const recomendado = data;
  const [selectedUser, setSelectedUser] = useState(recomendado[0]);

  return (
    <>
      <div className="bg-bgpurplebutton w-full p-2 absolute top-14 md:top-20 left-0 hidden sm:block text-white">
        <span className="text-sm md:ml-32 sm:text-base">
          Descubre nuevos compañeros de estudio y crea proyectos increíbles juntos.
        </span>
      </div>

      <div className="bg-bgtitle w-fit p-2 text-lg md:p-3 lg:pr-80 md:text-2xl text-bgtexttitle gap-1 md:gap-2 flex sm:mt-10">
        <span>|</span>
        <p>Personas que comparten tus mismos cursos</p>
      </div>

      <div className="flex w-full mt-5 gap-10 justify-center">
        <div className="flex flex-col gap-8 w-full max-w-80 md:max-w-fit md:max-h-96 md:overflow-y-auto scrollbar-none">
          {/* Div Primera sección */}
          {recomendado.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 lg:items-start lg:gap-0 lg:flex-row bg-bgcard p-4 rounded-3xl cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <img src={UserImage} alt="" className="w-32 md:w-16" />
              <div className="flex flex-col md:pl-3 gap-1 items-center lg:items-start text-textcard">
                <span className="text-2xl text-textcard">{user.name}</span>
                <div className="flex gap-2 text-xs text-white items-center">
                  {user.label.map((label, labelIndex) => (
                    <span key={labelIndex} className="p-0.5 px-4 bg-[#b01f5f]">{label}</span>
                  ))}
                </div>
                <div className="flex flex-col md:hidden px-2">
                  <img
                    src={Mascota}
                    alt=""
                    className="w-10 rounded-full self-center my-2"
                  />
                  <span className="text-center mb-3 ">
                    {user.descripcion}
                  </span>
                  <button className="text-sm p-2 rounded-lg text-white bg-bgpurplebutton">
                    Seguir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Div Segunda sección */}
        <div className="flex-col bg-bgcard text-textcard p-5 w-full hidden md:flex rounded-3xl max-w-[525px] h-fit">
          <div className="flex">
            <img src={UserImage} alt="" className="w-32 h-32" />
            <div className="flex flex-col ml-5 w-full">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{selectedUser && selectedUser.name}</span>
                <button className="text-sm p-1 px-3 lg:px-5 ml-1 lg:mr-4 rounded-lg text-white bg-bgpurplebutton">
                  Seguir
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <p className="lg:pr-4">{selectedUser && selectedUser.descripcion}</p>
                <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-2 text-xs text-white items-center">
                  {selectedUser && selectedUser.label && selectedUser.label.map((label, labelIndex) => (
                    <span key={labelIndex} className="p-0.5 px-4 bg-[#b01f5f]">{label}</span>
                    ))}
                </div>

                  <span className="text-bgpurplebutton text-sm lg:mx-4 self-end mt-2 lg:mt-0">
                    <b>{selectedUser && selectedUser.numeroMVP}</b> MVP
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="flex flex-col w-full max-w-60 ">
              {selectedUser && selectedUser.insignia && selectedUser.insignia.map((badge, badgeIndex) => (
                <div key={badgeIndex} className="p-1 bg-bginsigniaamigos rounded-full px-10 mb-3 font-bold">
                  <span>{badge}</span>
                  </div>
                ))}
            </div>

            <div className="flex items-center relative ml-10 lg:mr-4">
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
