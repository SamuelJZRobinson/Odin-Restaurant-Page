import { createRestaurantHomePage } from "./restaurant";
import { createTabs } from "./tabs";

export function initialLoad(){
  createTabs();
  createRestaurantHomePage();
}