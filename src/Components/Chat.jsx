import React from "react";
import { Link, useLoaderData, Outlet } from "react-router-dom";
import { LOGOUT } from "../Path/Paths";
import { SearchProvider } from "../Auth/SearchContext";
import Sidebar from "./Utils/Sidebar";

const Chat = () => {
  window.localStorage.setItem("coins", 200);

  return (
    <>
      <SearchProvider>
        <div className=" h-full flex flex-col">
          <Sidebar /> {/*Sidebar and Header are together XD*/}
          <div className="flex flex-col pt-20 px-5 md:pt-28 md:pl-32 md:pr-10 pb-5 max-w-7xl mx-auto ">
            {" "}
            {/* A puro padding he colocado el contenido en medio XDXDXD */}
            <Outlet />
          </div>
        </div>
      </SearchProvider>
    </>
  );
};

export default Chat;
