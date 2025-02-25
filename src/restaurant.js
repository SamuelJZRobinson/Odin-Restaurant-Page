import restaurantImage from "./assets/restaurant.jpg";

export const createRestaurantHomePage = () => {
  const CONTENT = document.querySelector("#content");

  const IMAGE = document.createElement("img");
  IMAGE.src = restaurantImage;
  IMAGE.height = "400";
  CONTENT.appendChild(IMAGE);
  
  const HEADER = document.createElement("h1");
  HEADER.textContent = "Welcome to the restaurant!";
  CONTENT.appendChild(HEADER);

  const BLURB = document.createElement("p");
  BLURB.textContent = "Try authentic gourmet food made locally"
  CONTENT.appendChild(BLURB);
}