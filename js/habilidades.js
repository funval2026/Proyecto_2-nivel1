
const habilidades = [
  { nombre: "HTML", nivel: "80%", URLImg: "../images/3.html.webp"},
  { nombre: "CSS", nivel: "60%", URLImg: "../images/3_css.png" },
  { nombre: "JavaScript", nivel: "50%", URLImg: "../images/3_js.png" },
  { nombre: "React", nivel: "40%", URLImg: "../images/3_React.png" },
  { nombre: "Git", nivel: "50%", URLImg: "../images/1_git.png" },
  { nombre: "NodeJS",nivel: "600%", URLImg: "../images/3_nodejs.avif" },
  { nombre: "Tailwind", nivel: "70%", URLImg: "../images/3_tailwind-css.png" },
  { nombre: "Angular",  nivel: "60%", URLImg: "../images/1_angularjs.jpg" },
];

let contenedorp = document.querySelector("#contenedorhabilidades");

for (let i = 0; i < habilidades.length; i++) {

  contenedorp.innerHTML += `

  <div class=" bg-slate-800 text-amber-50 rounded-xl hover:scale-95 transition p-5 border-amber-50 border-solid border-2">
        
    <img src="${habilidades[i].URLImg}" class="w-20 h-30 p-2 object-contain mx-auto mb-5>
    <p class="text-center font-semibold ">${habilidades[i].nombre}</p>
    <p class="text-center">${habilidades[i].nivel}</p>
    </div> `

}



