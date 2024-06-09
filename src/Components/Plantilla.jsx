import React from 'react'

const Recursos = () => {
  return(
    <div>
    <div className="bg-bgpurplebutton w-full p-2 absolute top-14 md:top-20 left-0 text-white">
        <span className="text-sm md:ml-32 sm:text-base">
          Recuerda que la base del conocimiento es compartir
        </span>
      </div>

<br />
<br />
<br />
<br />
<div class="text-xl font-semibold">
Plantillas
</div>
<div >
<div class="container mx-auto">
        <div class="flex justify-center items-center space-x-4">
            
            <div class="w-1/3">
                <img src="src/Assets/mascota1.jpg" alt="Imagen" class="w-full h-auto"/>
            </div>
            <a href="">
            <div class="w-2/3">
               
                <div class="rounded-lg bg-white p-4">
                    <h2 class="text-xl font-bold mb-4">Diapositivas</h2>
                    <p class="text-gray-700">
                    Utiliza estas plantillas para poder realizar tus exposiciones de una manera format y siguiendo las recomendaciones de tus profesores.
                    </p>
                </div>
            </div>
            </a>
        </div>
        <br />
        <div class="flex justify-center items-center space-x-4">
            
            <div class="w-1/3">
                <img src="tu-imagen.jpg" alt="Imagen" class="w-full h-auto"/>
            </div>
            <a href="">
            <div class="w-2/3">
               
                <div class="rounded-lg bg-white p-4">
                    <h2 class="text-xl font-bold mb-4">Artículos, Tesis y TA.</h2>
                    <p class="text-gray-700">Utiliza estas plantillas para poder realizar tus exposiciones de una manera format y siguiendo las recomendaciones de tus profesores.</p>
                </div>
            </div>
            </a>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Recursos
