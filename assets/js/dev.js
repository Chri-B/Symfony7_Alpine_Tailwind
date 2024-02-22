import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.data("buttonClick", () => ({
    toggleLike() {
      Alpine.store("liked").toggle();
    },
  }));
  Alpine.data("button2", () => ({
    toggleLike() {
      alert('aaaaaaa')
    },
  }));

  Alpine.data("test", () => ({
    remove() {
      this.$refs.text.remove()
    },
  }));

});
