import React, { useState } from "react";
import { GRUPOS } from "../Path/Paths";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.webp";
import D1 from "../Assets/Diapositiva1.jpg";
import D2 from "../Assets/Diapositiva2.jpg";
import T1 from "../Assets/TareaAcademica.jpg";
import T2 from "../Assets/TareaAcademica2.jpg";
import { MdDownloadForOffline } from "react-icons/md";

const Recursos = () => {
  const [currentView, setCurrentView] = useState("Recursos");
  const [breadcrumb, setBreadcrumb] = useState(["Recursos"]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    setBreadcrumb((prev) => [...prev, view]);
  };

  const handleBackClick = () => {
    setBreadcrumb((prev) => {
      const newBreadcrumb = [...prev];
      newBreadcrumb.pop();
      return newBreadcrumb;
    });
    setCurrentView(breadcrumb[breadcrumb.length - 2] || "Recursos");
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center gap-2 mb-4">
        {currentView === "Recursos" ? (
          <Link
            to={GRUPOS}
            className="text-bgpurplebutton font-bold rounded-sm focus:outline-none"
          >
            ← Volver a Grupos
          </Link>
        ) : (
          <button
            onClick={handleBackClick}
            className="text-bgpurplebutton font-bold rounded-sm focus:outline-none"
          >
            ← Volver a{" "}
            {currentView === "Plantillas"
              ? "Recursos"
              : breadcrumb[breadcrumb.length - 2]}
          </button>
        )}
        <span className="text-textcard font-bold pl-2 border-l border-l-textcard">
          {breadcrumb[breadcrumb.length - 1]}
        </span>
      </div>
      <div>
        {currentView === "Recursos" && (
          <div className="flex flex-col gap-7">
            <div
              onClick={() => handleViewChange("Plantillas")}
              className="bg-bgcard text-textcard flex flex-col sm:flex-row w-full max-w-72 sm:max-w-[570px] rounded-b-md sm:rounded-r-md cursor-pointer"
            >
              <img
                src={"https://static.canva.com/static/images/canva_templates_array.jpg"}
                alt=""
                className="w-full sm:max-w-56 h-40 object-cover rounded-md"
              />
              <div className="flex flex-col p-5 gap-2">
                <span className="text-2xl font-bold">Plantillas</span>
                <p className="text-sm">
                  Uiliza estas plantillas para poder realizar tus exposiciones
                  de una manera format y siguiendo las recomendaciones de tus
                  profesores.
                </p>
              </div>
            </div>

            <div className="bg-bgcard text-textcard flex flex-col sm:flex-row w-full max-w-72 sm:max-w-[570px] rounded-b-md sm:rounded-r-md cursor-pointer">
              <img
                src={"https://windowsapps.com/wp-content/uploads/2018/05/OneDrive-Official-1@2x.png"}
                alt=""
                className="w-full sm:max-w-56 h-40 object-cover rounded-md"
              />
              <div className="flex flex-col p-5 gap-2">
                <span className="text-2xl font-bold">
                  Almacenamiento Onedrive
                </span>
                <p className="text-sm">
                  Aprovecha los 5 Terabytes que te brinda la universidad para
                  estructurar todos tus archivos a utilizar en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        )}
        {currentView === "Plantillas" && (
          <div className="flex flex-col gap-7">
            <div
              onClick={() => handleViewChange("Diapositivas")}
              className="bg-bgcard text-textcard flex flex-col sm:flex-row w-full max-w-72 sm:max-w-[570px] rounded-b-md sm:rounded-r-md cursor-pointer"
            >
              <img
                src={"https://static-cse.canva.com/blob/652402/presentations_header_bg.jpg"}
                alt=""
                className="w-full sm:max-w-56 h-40 object-cover rounded-md"
              />
              <div className="flex flex-col p-5 gap-2">
                <span className="text-2xl font-bold">Diapositivas</span>
                <p className="text-sm">
                  Utiliza estas plantillas para poder realizar tus exposiciones
                  de una manera format y siguiendo las recomendaciones de tus
                  profesores.
                </p>
              </div>
            </div>

            <div
              className="bg-bgcard text-textcard flex flex-col sm:flex-row w-full max-w-72 sm:max-w-[570px] rounded-b-md sm:rounded-r-md cursor-pointer"
              onClick={() => handleViewChange("Artículos IA")}
            >
              <img
                src={"https://cdn.euroinnova.edu.es/img/subidasEditor/photo-of-man-holding-a-book-927022-1595499749.jpg"}
                alt=""
                className="w-full sm:max-w-56 h-40 object-cover rounded-md"
              />
              <div className="flex flex-col p-5 gap-2">
                <span className="text-2xl font-bold">
                  Artículos, Tesis y TA.
                </span>
                <p className="text-sm">
                  Utiliza estas plantillas para poder realizar tus exposiciones
                  de una manera format y siguiendo las recomendaciones de tus
                  profesores.
                </p>
              </div>
            </div>
          </div>
        )}
        {currentView === "Diapositivas" && (
          <div className="bg-bgcard p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <div className="relative">
                <img
                  src={D1}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={D2}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={D1}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={D2}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={D1}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={D2}
                  alt=""
                  className="w-60 h-40 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
            </div>
          </div>
        )}
        {currentView === "Artículos IA" && (
          <div className="bg-bgcard p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-10">
              <div className="relative">
                <img
                  src={T1}
                  alt=""
                  className="w-full sm:w-32 h-44 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={T2}
                  alt=""
                  className="w-full sm:w-32 h-44 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={T1}
                  alt=""
                  className="w-full sm:w-32 h-44 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
              <div className="relative">
                <img
                  src={T2}
                  alt=""
                  className="w-full sm:w-32 h-44 object-cover rounded-md"
                />
                <MdDownloadForOffline className="absolute bottom-2 right-2 text-4xl cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recursos;