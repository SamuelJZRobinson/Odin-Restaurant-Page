import { createHomePage } from "./restaurant";
import { createTabs } from "./tabs";

export function initialLoad(){
  createTabs();
  createHomePage();
}