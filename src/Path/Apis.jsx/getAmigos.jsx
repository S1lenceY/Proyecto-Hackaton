import axios from "axios";
export default async function getAmigos() {
  const id = localStorage.getItem("userID");
  try {
    const response = await axios.get(
      `https://apicollaboration-production.up.railway.app/api/v1/amigos/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener amigos:", error);
    throw error;
  }
}
