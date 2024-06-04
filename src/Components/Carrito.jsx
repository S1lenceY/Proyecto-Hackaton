import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import AxiosHeader from "../Auth/AxiosHeader";
import VISA from "../Assets/VISA.jpg";
import PayPal from "../Assets/PayPal.png";
import Caja from "../Assets/Caja.jpg";
import Logo from "../Assets/Logo.webp";
import imagenes from "../Path/Imagenes";
import PayModal from "./Utils/PayModal";
import { useCoins } from "../Auth/CoinsContext";

const Carrito = () => {

  return (
    <>
    <div>
      Carrito
    </div>
    </>
  );
};

export default Carrito;
