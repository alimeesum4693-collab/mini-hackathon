const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.addEventListener("click", () => {

    items.forEach(el => {
      el.classList.remove("active");
      el.querySelector(".icon").textContent = "+";
    });

    item.classList.add("active");
    item.querySelector(".icon").textContent = "−";

  });
});