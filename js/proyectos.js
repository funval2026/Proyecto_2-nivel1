const proyectos = [
  {
    titulo: "Plumbing Company",
    descripcion: "Sitio web moderno para empresa de servicios de plomería.",
    URLImg: "../images/5_varon.jpg"
  },
  {
    titulo: "Inka Project",
    descripcion: "Proyecto creativo con diseño atractivo y responsive.",
    URLImg: "../images/5_inka.webp"
  },
  {
    titulo: "Edificio Corporativo",
    descripcion: "Landing page empresarial con animaciones modernas.",
    URLImg: "../images/5_edi.png"
  }
];

const contenedor = document.getElementById("contenedor-proyectos");

function mostrarProyectos() {

  proyectos.forEach(proyecto => {

    const tarjeta = document.createElement("div");
    tarjeta.className = "bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition";

    tarjeta.innerHTML = `

      <div class="p-4 text-center ">
      <img src="${proyecto.URLImg}" class="w-60 h-70 object-cover mb-4 gap-2">
      <h2 class="text-xl font-bold text-yellow-300 mb-2">${proyecto.titulo}</h2>
       <p class="text-gray-300">${proyecto.descripcion} </p>
      </div>
    `;
    contenedor.appendChild(tarjeta);

  });

}

mostrarProyectos();

