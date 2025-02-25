export const createContactPage = () =>{
  const CONTENT = document.querySelector("#content");

  const TEXT = document.createElement("h1");
  TEXT.textContent = "Contact";

  CONTENT.appendChild(TEXT);
}