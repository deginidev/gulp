export function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message);
    }
  }, 0);
}

export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebp(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

export function headerFixed() {
  const header = document.querySelector(".header");
  const firstScreen = document.querySelector("[data-observ]");

  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("sticky", !entry.isIntersecting);
  });

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen);
  }
}
