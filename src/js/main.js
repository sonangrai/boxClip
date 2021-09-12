"use strict";

(function () {
  console.log("Have a good day 🎈");

  /**
   * For label like of the matareial
   */
  let mInputs = document.querySelectorAll(".minput");
  mInputs.forEach((i) => {
    i.addEventListener("change", () => {
      if (i.value.length !== 0) {
        i.classList.add("mshow");
      } else {
        i.classList.remove("mshow");
      }
    });
  });
})();
