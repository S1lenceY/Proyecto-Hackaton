import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const id = localStorage.getItem("userID");
  const [data, setData] = useState({});
  const [publicacion, setPublicacion] = useState([]);
  const [invitacion, setInvitacion] = useState([]);
  const [text, setText] = useState("");
  const idUsuario = localStorage.getItem("userID") || 1;

  useEffect(() => {
    const fetchInicio = async () => {
      try {
        const response = await axios.get(`https://apicollaboration-production.up.railway.app/api/v1/feed/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchInicio();
  }, [id]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const publicaciones = data.publicaciones || [];
      const invitaciones = data.invitaciones || [];

      // Transformar las publicaciones
      const publicacionesIniciales = publicaciones.map(publicacion => ({
        text: publicacion.texto,
        imgLink: publicacion.linkImagen || "",
        nombre: publicacion.nombrePublicador,
        Tiempo: "Hace poco..."
      }));

      // Transformar las invitaciones
      const invitacionesIniciales = invitaciones.map(invitacion => ({
        idGrupo: invitacion.idInvitacion,
        text: invitacion.texto,
        label: invitacion.nombreCurso
      }));
      setPublicacion(publicacionesIniciales);
      setInvitacion(invitacionesIniciales);
    }
  }, [data]);

  const handlePost = async () => {
    const now = new Date();
    const formattedDate = now.toISOString().split(".")[0]; // Formatea la fecha sin milisegundos ni 'Z'
    const nombre = localStorage.getItem("nombre") || "Usuario";

    const postData = {
      idUsuario: idUsuario,
      text: text,
      imgLink: null,
      Tiempo: formattedDate,
    };

    // Actualizar la lista de publicaciones
    setPublicacion([
      { ...postData, nombre, Tiempo: "Hace 0 minutos" },
      ...publicacion,
    ]);

    setText("");

    const postDataFeed = {
      idUsuario: idUsuario,
      texto: text
    };

    try {
      const response = await axios.post(
        `https://apicollaboration-production.up.railway.app/api/v1/feed`,
        postDataFeed
      );

      console.log("Publicación enviada:", response.data);
    } catch (error) {
      console.error("Error al enviar la publicación:", error);
    }
  };

  const handleInvitationResponse = async (idInvitacion, status, texto, nombreCurso) => {
    const postData = {
      status: status,
      idUsuario: idUsuario,
      idGrupo: idInvitacion,
    };

    if(status){
      var estadoMiembro = "ACEPTADO"
    }else{
      var estadoMiembro = "RECHAZADO"
    }

    const postDataInvitacion = {
      idInvitacion: idInvitacion,
      texto: texto,
      nombreCurso: nombreCurso,
      estado_miembro: estadoMiembro
    };

    try {
      const response = await axios.post("https://apicollaboration-production.up.railway.app/api/v1/feed/invitacion", postDataInvitacion);
      console.log("Respuesta de la invitación enviada:", response.data);

      // Actualizar la lista de invitaciones, eliminando la invitación respondida
      setInvitacion(invitacion.filter((invitacion) => invitacion.idGrupo !== idInvitacion));
    } catch (error) {
      console.error("Error al enviar la respuesta de la invitación:", error);
    }
  };

  return (
    <>
      <div className="bg-bgpurplebutton w-full p-2 absolute top-14 md:top-20 left-0 text-white">
        <span className="text-sm md:ml-32 sm:text-base">
          Recuerda que la base del conocimiento es compartir
        </span>
      </div>

      <div className="flex mt-5 w-full h-full">
        <div className="flex flex-col text-titlecolor w-full lg:w-[600px] sm:max-w-[600px] md:mr-10 md:max-h-[480px] md:overflow-y-auto scrollbar-none">
          <div className="flex flex-col bg-bgcard p-3 rounded-xl text-lg mt-4">
            <div className="flex items-center">
              <textarea
                placeholder="Tu feed está vacío, sube una publicación aquí"
                className="bg-transparent outline-none text-sm p-2 pb-0 w-full text-headertext resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div
                className="p-2 bg-bgpurplebutton rounded-full text-white cursor-pointer"
                onClick={handlePost}
              >
                <BsFillSendFill />
              </div>
            </div>
            <div className="flex text-lg gap-5 pl-2 mt-3 lg:mt-0">
              <AiOutlinePicture />
              <AiOutlineBold />
              <BsTypeItalic />
            </div>
          </div>

          {publicacion.map((publicacion, index) => (
            <div className="flex flex-col gap-5 my-5" key={index}>
              <div className="flex items-center relative text-white">
                <img src={UserImage} alt="" className="w-14 absolute" />
                <div className="flex flex-col bg-[#bf500b] p-1 px-10 pl-16 rounded-full">
                  <span className="font-bold">{publicacion.nombre}</span>
                  <span className="text-[10px]">{publicacion.Tiempo}</span>
                </div>
              </div>

              <div className="bg-bgcard rounded-lg h-fit">
                <div className="flex justify-between p-4 items-center">
                  <p>{publicacion.text}</p>
                  <div className="text-lg flex gap-3 ml-3">
                    <BsHeart />
                    <BsSend />
                  </div>
                </div>
                {publicacion.imgLink && (
                  <img
                    src={publicacion.imgLink}
                    alt=""
                    className="h-52 w-full rounded-lg object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 md:w-full max-w-72 text-textcard fixed bottom-4 md:static right-4">
          <img
            src={Amigos}
            alt=""
            className="object-cover h-60 w-full hidden md:block"
          />

          <div className="shadow-md flex flex-col mt-10 p-4 bg-bgcard md:h-[160px] md:rounded-md overflow-hidden md:w-full h-10 rounded-full w-10 hover:w-72 md:hover:w-full hover:h-[180px] hover:rounded-md">
            <span className="text-2xl font-bold text-center">Invitaciones</span>
            <div className="mt-4 flex flex-col max-h-full overflow-y-auto scrollbar-none">
              {invitacion.map((invitacion, index) => (
                <div className="flex flex-col mb-5" key={index}>
                  <div className="flex items-center justify-around">
                    <span className="font-bold">{invitacion.text}</span>
                    <span className="text-sm p-1 bg-[#b01f5f] text-white text-nowrap max-w-28 overflow-x-auto scrollbar-thin">
                      {invitacion.label}
                    </span>
                    <button
                      className="text-xl cursor-pointer"
                      onClick={() => handleInvitationResponse(invitacion.idGrupo, false, invitacion.text, invitacion.label)}
                    >
                      x
                    </button>
                  </div>
                  <button
                    className="self-end text-sm p-1 mt-2 px-4 rounded-lg text-white bg-bgpurplebutton"
                    onClick={() => handleInvitationResponse(invitacion.idGrupo, false, invitacion.text, invitacion.label)}
                  >
                    Aceptar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
