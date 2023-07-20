"use strict";
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
