import { createHomePage } from "./restaurant";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

export const createTabs = () => {
const HEADER = document.querySelector("header");
  
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.setAttribute("id", "but-home");
div1.classList.add("tab");
div1.textContent = "Home";
div1.addEventListener("click", () => {
  clearContent();
  createHomePage();
});
HEADER.appendChild(div1);

div2.setAttribute("id", "but-menu");
div2.classList.add("tab");
div2.textContent = "Menu";
div2.addEventListener("click", () => {
  clearContent();
  createMenuPage();
});
HEADER.appendChild(div2);

div3.setAttribute("id", "but-contact");
div3.classList.add("tab");
div3.textContent = "Contact";
div3.addEventListener("click", () => {
  clearContent();
  createContactPage();
});
HEADER.appendChild(div3);
}

function clearContent() {
  const CONTENT = document.querySelector("#content");
  CONTENT.innerHTML = "";
}