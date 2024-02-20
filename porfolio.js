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

// Ejecuta la animación de las skills cada 3 Segundos
setInterval(animateSkillHighlight, 3000);

function animateSkillHighlight() {
  const currentIndex = Array.from(skillsItems).findIndex((skill) =>
    skill.classList.contains("highlighted")
  );

  if (currentIndex >= 0) {
    skillsItems[currentIndex].classList.remove("highlighted");

    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % skillsItems.length;

      skillsItems[nextIndex].classList.add("highlighted");
    }, 100);
  }
}

const webGitItems = document.querySelectorAll(".liWebGit");

function verificarEnlace(event) {
  event.preventDefault();

  const enlace = event.currentTarget.querySelector("a");

  if (!enlace.getAttribute("href")) {
    alert("Este proyecto aún no ha sido desplegado (deployed)");
  } else {
    window.location.href = enlace.getAttribute("href");
  }
}

webGitItems.forEach((webGitItem) => {
  webGitItem.addEventListener("click", verificarEnlace);
});

("use strict");

// Función para obtener y actualizar el contador de visitas
function updateViewCounter() {
  let views = localStorage.getItem("views");
  views = views ? parseInt(views) + 1 : 1;
  localStorage.setItem("views", views);
  document.getElementById("view-counter").textContent = views;
}

// Incrementa el contador de visitas cada vez que la página se carga
window.addEventListener("load", function () {
  updateViewCounter();
});
