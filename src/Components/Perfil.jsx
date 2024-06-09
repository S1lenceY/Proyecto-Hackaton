import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosHeader from "../Auth/AxiosHeader";
import UserImage from "../Assets/User.png";
import Insignia from "../Assets/insignia.jpg";
import { BsFillSendFill, BsTypeItalic } from "react-icons/bs";
import { AiOutlinePicture, AiOutlineBold } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Assets/Logo.webp";
import { useLoaderData } from "react-router-dom";

const Perfil = () => {

  const id = localStorage.getItem("userID");

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get(`https://apicollaboration-production.up.railway.app/api/v1/perfil/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    fetchPerfil();
  }, []);

  const nombreInsignias = data.nombreInsignias;
  const publicaciones = data.publicaciones;
  
  var insigniasArray = []
  
  // Verificar si nombreInsignias existe y no es null
  if (nombreInsignias && typeof nombreInsignias === 'object') {
    // Convertir el objeto en un array
    insigniasArray = Object.values(nombreInsignias);
  } else {
    console.log('nombreInsignias no está definido o es null');
  }
  
  // Verificar si publicaciones existe y no es null
  if (publicaciones && publicaciones.length > 0) {
    // Acceder a la primera publicación
    var primeraPublicacion = publicaciones[0];
    // Acceder a las propiedades de la primera publicación
    var linkImagen = primeraPublicacion.linkImagen;
    var nombrePublicador = primeraPublicacion.nombrePublicador;
    var nroInteracciones = primeraPublicacion.nroInteracciones;
    var texto = primeraPublicacion.texto;
    
    console.log(linkImagen, nombrePublicador, nroInteracciones, texto);
  } else {
    console.log('No hay publicaciones disponibles');
  }
  
  const perfil = [
    {
      nombreCompleto: data.nombreApellido,
      codigoAlumno: data.codigoUniversitario,
      numeroPublicaciones: data.nroPublicaciones,
      numeroSeguidores: data.nroSeguidores,
      numeroSeguidos: data.nroSeguidos,
      numeroMVP: data.nroMvp,
      insignias: insigniasArray,
      logros: [],
      descripcion: data.descripcion,
      linkImagen: data.linkImagen,
      ultimaPublicacion: {
        text: texto || "No hay publicaciones",
        imgLink: linkImagen || "No hay imagen",
        nombre: nombrePublicador || "Sin nombre",
        Tiempo: "Hace poco...",
      },
    },
  ];
  
  // Acceder al primer objeto en el array de perfil para que aparezcan datos
  const userProfile = perfil[0];
  const idUsuario = localStorage.getItem("userID") || 1;

  //Mostrar y ocultar insignias
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  // Modales

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // Editar Perfil
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tags: "",
    insignias: "",
    utpet: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    const data = {
      idUsuario: idUsuario, // Asume que este valor es estático o lo obtienes de otra parte
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      etiquetas: formData.tags.split(",").map((tag) => tag.trim()),
      insignias: formData.insignias
        .split(",")
        .map((insignia) => insignia.trim()),
      utpet: formData.utpet,
    };

    try {
      await axios.post("http://localhost:3000/Users", data);

      // Actualiza las variables de estado correspondientes
      setNombreCompleto(formData.nombre);
      setInsignias(data.insignias);

      setShowEditModal(false);
      console.log("Datos Guardados con éxito");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  //Actualizar valores
  // Extraer y manejar nombreCompleto e insignias como estados individuales
  //const [nombreCompleto, setNombreCompleto] = useState(perfil[0].nombreCompleto);

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-bgtitle text-bgtexttitle flex flex-col sm:flex-row h-fit lg:h-40 items-center">
          <img
            src={UserImage}
            alt=""
            className="w-full max-w-44 sm:max-w-60 m-5 ml-5 lg:translate-y-20"
          />
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col items-center lg:items-start text-3xl px-10 sm:pl-5 sm:pr-10 lg:px-10 lg:pl-5">
              <span>{perfil[0].nombreCompleto}</span>
              <span className="text-lg font-bold">
                {userProfile.codigoAlumno}
              </span>
            </div>
            <div className="flex flex-col text-sm my-5 text-bgpurplebutton">
              <span>
                <b>{userProfile.numeroPublicaciones}</b> publicaciones
              </span>
              <span>
                <b>{userProfile.numeroSeguidores}</b> seguidores
              </span>
              <span>
                <b>{userProfile.numeroSeguidos}</b> seguidos
              </span>
              <span>
                <b>{userProfile.numeroMVP}</b> MVP
              </span>
            </div>
            <button
              className="bg-loginbutton mb-7 md:mb-0 md:mt-2 mx-10 text-white px-10 font-bold py-1.5 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none"
              onClick={handleEditModal}
            >
              Editar
            </button>
          </div>
        </div>

        <div className="flex items-center sm:items-start flex-col lg:pl-72 text-bgtexttitle py-5 sm:py-3 ml-3 relative">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Insignias Destacadas</span>
            {perfil[0].insignias.length > 3 && !showAll && (
              <button onClick={handleToggle} className="text-bgtexttitle">
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

          {/* Añadir el .map de las insignias */}
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-3 gap-5">
            {perfil[0].insignias
              .slice(0, showAll ? perfil[0].insignias.length : 3)
              .map((insignia, index) => (
                <div
                  key={index}
                  className="flex w-fit gap-3 items-center bg-bginsignia px-5 py-2 rounded-xl"
                >
                  <img src={Insignia} alt="" className="rounded-full w-11" />
                  <div className="flex flex-col text-sm font-bold">
                    <span>{insignia}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-5 sm:mt-10 text-textcard items-center sm:items-start">
          <div className="bg-bgcard p-4 text-center rounded-md h-[144px] w-full max-w-48 overflow-y-auto">
            <span className="font-bold">Logros Pendientes</span>
            {userProfile.logros.map((logro, index) => (
              <div key={index} className="text-start p-2 flex flex-col gap-3">
                <span className="text-xs">{logro}</span>
                <div className="w-full rounded-full bg-slate-200 h-1 ">
                  <div className="w-[20%] bg-bgpurplebutton h-1 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 sm:mt-0 sm:ml-14 sm:pl-14 sm:border-l-2 border-bgperfilline w-full">
            <span className="text-lg font-bold">Última publicación</span>
            <div className="flex flex-col bg-bgcard p-3 rounded-xl text-lg mt-4">
              {Object.keys(userProfile.ultimaPublicacion).length === 0 ? (
                <>
                  <div className="flex items-center">
                    <textarea
                      placeholder="Tu feed está vacío, sube una publicación Inicio"
                      disabled
                      className="bg-transparent outline-none text-sm p-2 pb-0 w-full text-headertext resize-none scrollbar-none"
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
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span>{userProfile.ultimaPublicacion.text}</span>
                    <div className="flex flex-col text-xs ml-3 gap-1">
                      <span className="self-end">
                        {userProfile.ultimaPublicacion.nombre}
                      </span>
                      <span>{userProfile.ultimaPublicacion.Tiempo}</span>
                    </div>
                  </div>
                  <img
                    src={userProfile.ultimaPublicacion.imgLink}
                    alt=""
                    className="rounded-md mt-2 h-fit object-cover"
                  />
                </>
              )}
            </div>
          </div>
        </div>
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
                    Mi Perfil
                  </span>
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Apodo o nombre</span>
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="bg-transparent max-w-14 outline-none text-end"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Descripción</span>
                      <input
                        type="text"
                        placeholder="Descripción"
                        className="bg-transparent w-20 text-end outline-none"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Tags a mostrar</span>
                      <input
                        type="text"
                        placeholder="Anime"
                        className="bg-transparent max-w-14 outline-none text-end"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Insignias a mostrar</span>
                      <input
                        type="text"
                        placeholder="Insignia"
                        className="bg-transparent max-w-14 outline-none text-end"
                        name="insignias"
                        value={formData.insignias}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between bg-inputbackground border border-bordercolor rounded p-px px-2 items-center text-sm h-9">
                      <span className="font-bold">Mostrar UTPET</span>
                      <input
                        type="checkbox"
                        className="bg-transparent max-w-14 outline-none"
                        name="utpet"
                        checked={formData.utpet}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="bg-loginbutton cursor-pointer self-end px-4 w-fit mt-3  text-white font-bold text-sm py-1.5 rounded transition duration-200 ease-in-out hover:bg-loginbuttonhover focus:outline-none" onClick={handleSave}>
                    Guardar
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

export default Perfil;
