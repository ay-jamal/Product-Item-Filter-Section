const allFilterItems = document.querySelectorAll(".filter-item");
const allFilterBtns = document.querySelectorAll(".filter-btn");

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
    show(btn);
  });
});

function show(btn) {
  allFilterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      restActiveBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function restActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}
