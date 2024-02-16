/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import "./styles/app.css";

import Alpine from "alpinejs";
import dropdown from "./js/dropdown.js";

window.Alpine = Alpine;

Alpine.data("dropdown", dropdown);

Alpine.data("ciao", () => ({
    label: "ciaone",
  farecose: {
    ["@click"]() {
      console.log("xxxxxxxxx");
    },
  },
}));

Alpine.start();
