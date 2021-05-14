import Vue from "vue";

Vue.directive("focus", {
  inserted: function (el) {
    el.focus();
  },
});

Vue.directive("diablo", {
  bind(el, binding) {
    const color = {
      bone: "#E8DCC2",
      white: "#FFFFFF",
    };

    el.style.fontFamily = "DiabloHeavy, sans-serif";

    const arg = binding.arg === "bone" ? "bone" : "white";

    if (arg === "bone") {
      el.style.color = color.bone;
    } else {
      el.style.color = color.white;
    }

    if (Object.keys(binding.modifiers).length > 0) {
      const value = binding.value || 1;
      const borderExp = `${value}px solid ${color[arg]}`;

      if (binding.modifiers.bottom) {
        {
          el.style.borderBottom = borderExp;
          el.style.paddingBottom = "10px";
        }
      }

      if (binding.modifiers.top) {
        {
          el.style.borderTop = borderExp;
          el.style.paddingTop = "10px";
        }
      }
    }
  },
});
