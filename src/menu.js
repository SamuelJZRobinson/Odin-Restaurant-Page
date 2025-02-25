export const createMenuPage = () => {
  const CONTENT = document.querySelector("#content");

  const TEXT = document.createElement("h1");
  TEXT.textContent = "Menu";

  CONTENT.appendChild(TEXT);
}