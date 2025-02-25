export const createTabs = () => {
const HEADER = document.querySelector("header");
  
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.setAttribute("id", "but-home");
div1.classList.add("tab");
div1.textContent = "Home";
HEADER.appendChild(div1);

div2.setAttribute("id", "but-menu");
div2.classList.add("tab");
div2.textContent = "Menu";
HEADER.appendChild(div2);

div3.setAttribute("id", "but-contact");
div3.classList.add("tab");
div3.textContent = "Contact";
HEADER.appendChild(div3);
}