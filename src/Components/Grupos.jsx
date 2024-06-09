import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UserImage from "../Assets/User.png";
import GrupoImagen from "../Assets/grupoestrecho.jpg";
import Logo from "../Assets/Logo.webp";
import Calendario from "./Utils/Calendario";
import axios from "axios";

const Grupos = () => {
  const availableUser = [
    { idUser: 1, nombre: "Marí García", codigo: "U21209576" },
    { idUser: 2, nombre: "Juan Perez", codigo: "U21209577" },
    { idUser: 3, nombre: "Carlos Ramírez", codigo: "U21209578" },
    { idUser: 4, nombre: "Ana López", codigo: "U21209579" },
  ];

  const availableCourses = [
    { idCurso: 1, nombreCurso: "Seguridad Informática", horario: "Martes: 18:30 - 21:30" },
    { idCurso: 2, nombreCurso: "Diseño y Arquitectura de software", horario: "Lunes: 20:15 - 21:45" },
    { idCurso: 3, nombreCurso: "Introducción a la Programación", horario: "Lunes: 10:00 - 12:00" },
    { idCurso: 4, nombreCurso: "Aprendizaje Automático", horario: "Jueves: 14:00 - 16:00" },
  ];

  const id = localStorage.getItem("userID");
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await axios.get(`https://apicollaboration-production.up.railway.app/api/v1/Grupos/${id}`);
        setGrupos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchGrupos();
  }, [id]);

  const [showGroup, setShowGroup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newGroup, setNewGroup] = useState({
    nombreGrupo: "",
    descripcion: "",
    nombreCurso: "",
    nombreTarea: "",
    usuarios: "",
  });

  const handleOpenClick = (group) => {
    setSelectedGroup(group);
    setShowGroup(true);
  };

  const handleBackClick = () => {
    setShowGroup(false);
    setSelectedGroup(null);
  };

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleSave = async () => {
    const { nombreGrupo, descripcion, nombreCurso, nombreTarea, usuarios } = newGroup;
  
    const userIds = usuarios.split(",").map((user) => {
      const foundUser = availableUser.find(
        (u) => u.nombre === user.trim() || u.codigo === user.trim()
      );
      return foundUser ? foundUser.idUser : "vacío";
    });
  
    const foundCourse = availableCourses.find(
      (course) => course.nombreCurso === nombreCurso.trim()
    );
    const idCurso = foundCourse ? foundCourse.idCurso : "vacío";
    const horario = foundCourse ? foundCourse.horario : "vacío";
  
    const newGroupData = {
      nombre: nombreGrupo, // Transformar nombreGrupo a nombre
      nombreTarea,
      idCurso, // Transformar nombreCurso a idCurso
      descripcion,
      idsUsuarios: userIds,
    };
  
    try {
      const response = await axios.post("http://localhost:3000/Grupo", newGroupData);
      const addedGroup = {
        idgrupo: response.data.id, // Suponiendo que la respuesta contiene el id del grupo creado
        nombreGrupo, // Mantener nombreGrupo en el estado del componente
        nombreTarea,
        nombreCurso: foundCourse ? foundCourse.nombreCurso : "vacío", // Mantener nombreCurso en el estado del componente
        descripcion,
        horario, // Añadir horario al estado del componente
        usuarioList: userIds.map((id) => ({
          nombre: id === "vacío" ? "vacío" : availableUser.find((u) => u.idUser === id).nombre,
          rol: "Miembro",
        })),
      };
      setGrupos([...grupos, addedGroup]);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error al guardar el grupo:", error);
    }
  };
  
  const [showMVP, setShowMVP] = useState(false);

  const handleButtonMVP = () => {
    setShowMVP(true);
  };

  const handleButtonCloseMVP = () => {
    setShowMVP(false);
  };

  const handleMVPClick = () => {
    if (selectedGroup) {
      const updatedGrupos = grupos.filter(
        (group) => group.idgrupo !== selectedGroup.idgrupo
      );
      setGrupos(updatedGrupos);
      setShowGroup(false);
      setShowMVP(false);
    }
  }

  return (
    <>
      <div className="flex flex-col">
        {showGroup && selectedGroup ? (
          // Div Condicional
          <div className="flex flex-col">
            <div className="flex w-full items-center gap-2 mb-3">
              <button
                onClick={handleBackClick}
                className="text-bgpurplebutton font-bold rounded-sm focus:outline-none"
              >
                ← Volver a Grupos
              </button>
              <span className="text-textcard font-bold pl-2 border-l border-l-textcard">
                {selectedGroup.nombreGrupo} - {selectedGroup.nombreTarea}
              </span>
            </div>
            <div className="flex flex-col lg:flex-row md:gap-10">
              <div className="w-full max-w-64 flex flex-col gap-5">
                <div className="flex flex-row max-w-64 overflow-x-auto scroll gap-5">
                  {/* Renderizar usuarioList */}
                  {selectedGroup.usuarioList.map((usuario, index) => (
                    <div key={index} className="flex flex-row w-fit gap-5">
                      <div className="p-4 mt-3 rounded-3xl bg-bgcard w-64 items-center flex gap-3 text-textcard text-center">
                        <img src={UserImage} alt="" className="w-16" />
                        <div className="flex flex-col gap-1 items-start ">
                          <span className="text-2xl text-nowrap">
                            {usuario.nombre}
                          </span>
                          <span className="p-0.5 px-3 bg-[#b01f5f] text-xs text-white">
                            {usuario.rol}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-bgcard p-5 rounded-2xl w-full max-w-64 text-textcard overflow-y-auto h-fit max-h-52">
                  <span className="font-bold text-xl">Horario</span>
                  <div className="flex flex-col gap-3 mt-1">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold">
                        {selectedGroup.nombreCurso}
                      </span>
                      <span className="text-xs">{selectedGroup.horario}</span>
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

                <div className="bg-bgcard p-7 rounded-2xl text-textcard flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-xl">
                      {selectedGroup.nombreGrupo}
                    </span>
                    <span>{selectedGroup.descripcion}</span>
                  </div>

                  <button className="text-sm p-2 font-bold text-white bg-[#327c6e] rounded-md">
                    Generar grupo de WhatsApp
                  </button>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                  <button className="w-full group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300 duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                    Recursos
                  </button>
                  <button 
                  className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                  onClick={handleButtonMVP}
                  >
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              className="bg-[#fa708c] w-full mb-6 max-w-36 text-white text-sm px-7 font-bold py-1.5 rounded-sm transition duration-200 ease-in-out focus:outline-none"
              onClick={handleEditModal}
            >
              Nuevo Grupo
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:gap-10">
              {/* Renderizar Grupos */}
              {grupos.map((group, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex flex-col w-full  bg-bgcard rounded-b-lg">
                    <img
                      src={Logo}
                      alt=""
                      className="h-24 w-80 object-cover rounded-t-lg"
                    />
                    <div className="flex items-center justify-between p-4 pb-0">
                      <span className="font-bold text-2xl text-textcard">
                        {group.nombreGrupo}
                      </span>
                      <span className="text-slate-400 ml-2 text-end">
                        {group.nombreTarea}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between  text-center text-textcard p-4 pt-0">
                      <div className="flex flex-col items-start gap-2 md:gap-1">
                        <div className="flex flex-col md:flex-col-reverse items-start gap-2 md:gap-3">
                          <span className="text-white text-sm px-4 bg-[#b01f5f] mt-2 md:mt-0">
                            {group.nombreCurso}
                          </span>
                          <p className="text-sm text-start mt-1">
                            {group.descripcion}
                          </p>
                        </div>
                      </div>
                      <div
                        className="bg-loginbutton cursor-pointer w-full md:w-fit self-center mt-3 md:self-end text-white font-bold py-1 px-2 md:px-5 md:ml-6 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none text-sm"
                        onClick={() => handleOpenClick(group)}
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
      <AnimatePresence>
        {showEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            onClick={handleCloseEditModal}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col md:flex-row w-full max-w-72 md:max-w-fit h-fit bg-bgcard text-textcard mt-20 md:ml-20 md:mt-0"
            >
              <div className="relative">
                <img
                  src={Logo}
                  alt=""
                  className=" w-72 md:w-96 h-40 md:h-full object-cover"
                />
                <input
                  className="outline-none border text-textcard text-center bg-bgcard w-32 rounded-md p-1 px-2 absolute bottom-3 left-1/4 md:left-[25%] focus:ring-2 ring-slate-500"
                  placeholder="Insertar URL"
                />
              </div>
              <div className="bg-bgbordermodal p-4 w-full max-w-96">
                <div className="bg-bgcard p-3 flex flex-col">
                  <span className="font-bold border-l border-l-textcard pl-2 text-lg">
                    Mi Grupo
                  </span>
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Nombre del Grupo</span>
                      <input
                        type="text"
                        name="nombreGrupo"
                        placeholder="Nombre"
                        value={newGroup.nombreGrupo}
                        onChange={handleInputChange}
                        className="bg-transparent max-w-14 outline-none text-end"
                      />
                    </div>

                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Descripción</span>
                      <input
                        type="text"
                        name="descripcion"
                        placeholder="Descripción"
                        value={newGroup.descripcion}
                        onChange={handleInputChange}
                        className="bg-transparent w-20 text-end outline-none"
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Curso</span>
                      <input
                        type="text"
                        name="nombreCurso"
                        placeholder="Curso"
                        value={newGroup.nombreCurso}
                        onChange={handleInputChange}
                        className="bg-transparent max-w-14 outline-none text-end"
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Nombre Tarea</span>
                      <input
                        type="text"
                        name="nombreTarea"
                        placeholder="Tarea"
                        value={newGroup.nombreTarea}
                        onChange={handleInputChange}
                        className="bg-transparent max-w-14 outline-none text-end"
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Usuarios</span>
                      <input
                        type="text"
                        name="usuarios"
                        placeholder="Usuario"
                        value={newGroup.usuarios}
                        onChange={handleInputChange}
                        className="bg-transparent max-w-14 outline-none text-end"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSave}
                    className="bg-loginbutton cursor-pointer self-end px-4 w-fit mt-3 text-white font-bold text-sm py-1.5 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMVP && (
          <motion.div
            initial={{ opacity: 0 }}
            onClick={handleButtonCloseMVP}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center overflow-y-auto z-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col md:flex-row w-full max-w-72 md:max-w-fit h-fit bg-bgcard text-textcard mt-20 md:ml-20 md:mt-0 "
            >
              <div className="bg-bgbordermodal p-5 w-full ">
                <div className="bg-bgcard p-4 flex flex-col items-center gap-5">
                  <span className="font-bold text-2xl text-center">
                    Felicidades por presentar el trabajo
                  </span>

                  <div className="flex flex-wrap gap-5 justify-center max-h-72 max-w-[600px] overflow-auto">
                    {selectedGroup.usuarioList.map((usuario, index) => (
                      <div
                        className="bg-bgcardlabel flex flex-col items-center p-4 px-6 rounded-lg gap-1 cursor-pointer hover:opacity-80"
                        key={index}
                        onClick={handleMVPClick}
                      >
                        <img src={UserImage} alt="" className="w-16" />
                        <span>{usuario.nombre}</span>
                        <span className="p-0.5 px-3 bg-[#b01f5f] text-xs text-white">
                          {usuario.rol}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <p className="font-bold text-lg">
                      ¡Vota por el MVP del equipo!
                    </p>
                    <p>
                      Reconoce el compañero que se aseguró que todo saliera
                      perfecto.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Grupos;
