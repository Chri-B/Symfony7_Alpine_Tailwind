/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import "./styles/app.css";

import Alpine from "alpinejs";
import mask from "@alpinejs/mask";
import "flowbite";

Alpine.plugin(mask);

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  console.log("🚀🚀🚀🚀🚀 ~ file: dev.js:3 ~ document.addEventListener ~ Alpine:", Alpine);

  // es gestione del like in pagina
  Alpine.store("liked", {
    init() {
      // qui posso inizializzare il valore del like in base a parametri in pagina o qualche valore?
      // this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
    },

    on: false,

    toggle() {
      this.on = !this.on;
    },
  });

  // è possibile definire delle custom directive
  // https://alpinejs.dev/advanced/extending#simple-example

  // Uppercase text
  Alpine.directive("uppercase", (el) => {
    el.textContent = el.textContent.toUpperCase();
  });

  // Log function
  Alpine.directive("log", (el, { expression }, { evaluateLater, effect }) => {
    let getThingToLog = evaluateLater(expression);

    effect(() => {
      getThingToLog((thingToLog) => {
        console.log(thingToLog);
      });
    });
  });
});

document.addEventListener("alpine:initialized", () => {
  //
  console.log("alpine has been initialized");
});

Alpine.start(); // come gestire?????????????
