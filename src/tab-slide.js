const tabSlideCont = document.querySelector(".tab-list-slide");
const tabSlide = document.querySelectorAll(".tab-slide");

tabSlide.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    changeActiveTab(tab);
    updateSlide(index);
  });
});

function changeActiveTab(tab) {
  const currentab = tabSlideCont.querySelector('[aria-selected = "true"]');
  const targetTab = tab;
  currentab.setAttribute("aria-selected", false);
  targetTab.setAttribute("aria-selected", true);

  const offsetWidth = tab.offsetWidth;
  const offsetLeft = tab.offsetLeft;

  tabSlideCont.style.setProperty("--indicator-width", `${offsetWidth}px`);
  tabSlideCont.style.setProperty("--indicator-offset", `${offsetLeft}px`);
}
changeActiveTab(tabSlide[0]);
