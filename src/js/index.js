window.addEventListener("DOMContentLoaded", () => {
  const clientWidth = document.body.clientWidth;

  const servicesAccordion = document.querySelector(".services__accordion");
  const brandsWrapper = document.querySelector(".brands-slider__wrapper");

  if (clientWidth < 768) {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      width: 240,
      spaceBetween: 20,
    });
  } else {
    brandsWrapper.classList.add("brands-grid__wrapper");
  }

  servicesAccordion.addEventListener("click", (e) => {
    const { target } = e;
    const parentElement = target.closest(".accordion");
    const text = parentElement.querySelector(".accordion__text");

    brandsWrapper.classList.toggle("opened");
    servicesAccordion.classList.toggle("opened");
    text.textContent = servicesAccordion.classList.contains("opened")
      ? "Скрыть"
      : "Показать все";
  });
});
