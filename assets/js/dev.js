import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.data("chunk_add_like", () => ({
    addLike() {
      console.log("chunk_add_like");
      Alpine.store("liked").toggle();
    },
  }));
});
