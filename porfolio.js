"use strict";

// JS para ocultar header responsive

let menuVisible = false;

const mostrarMenu = () => {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
};

const seleccionar = () => {
  document.getElementById("nav").classList = "";
  menuVisible = false;
};

// JS para enlazar todos los elementos dentro del li de cada proyecto y que enlacen la misma dirección.

const liWebGitItems = document.querySelectorAll(".liWebGit");

liWebGitItems.forEach((liWebGitItem) => {
  // Obtener el enlace <a> dentro del elemento
  const enlace = liWebGitItem.querySelector("a");

  const target = enlace.getAttribute("target");

  liWebGitItem.addEventListener("click", () => {
    if (target === "_blank") {
      window.open(enlace.getAttribute("href"));
    } else {
      window.location.href = enlace.getAttribute("href");
    }
  });
});

// JS para los enlaces de los proyectos que no tengan DEPLOY indicarlo en un alert

// const WebGitItems = document.querySelectorAll(".liWebGit");

// // Recorrer cada elemento con clase "liWebGit" para verificar el atributo href
// WebGitItems.forEach((WebGitItem) => {
//   // Obtener el enlace <a> dentro del elemento
//   const enlace = WebGitItem.querySelector("a");

//   // Verificar si el enlace tiene el atributo href vacío
//   if (!enlace.getAttribute("href")) {
//     // Mostrar el alert cuando el atributo href está vacío
//     alert("Este proyecto no pudo ser desplegado (deployed)");
//   }
// });

const skillsItems = document.querySelectorAll(".contenedor-skills .skills");

function animateSkillHighlight() {
  const currentIndex = Array.from(skillsItems).findIndex((skill) =>
    skill.classList.contains("highlighted")
  );

  if (currentIndex >= 0) {
    skillsItems[currentIndex].classList.remove("highlighted");
  }

  const nextIndex = (currentIndex + 1) % skillsItems.length;

  skillsItems[nextIndex].classList.add("highlighted");
}

skillsItems[0].classList.add("highlighted");

// Llamar a la función de animación cada 3 segundos
setInterval(animateSkillHighlight, 3000);

function animateSkillHighlight() {
  // Obtener el índice de la skill actualmente iluminada
  const currentIndex = Array.from(skillsItems).findIndex((skill) =>
    skill.classList.contains("highlighted")
  );

  // Remover la clase "highlighted" de la skill actualmente iluminada
  if (currentIndex >= 0) {
    skillsItems[currentIndex].classList.remove("highlighted");

    // Esperar un breve momento antes de agregar la clase "highlighted" a la próxima skill
    setTimeout(() => {
      // Calcular el índice de la próxima skill a iluminar
      const nextIndex = (currentIndex + 1) % skillsItems.length;

      // Agregar la clase "highlighted" a la próxima skill a iluminar
      skillsItems[nextIndex].classList.add("highlighted");
    }, 100); // Ajusta el tiempo según tu preferencia para el efecto de disminución antes de aumentar
  }
}
