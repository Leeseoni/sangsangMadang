export const Search = () => {
  const openEl = document.querySelector(".header .btn-search");
  const closeEl = document.querySelector(".search .btn-close");
  const dialog = document.querySelector(".search");
  const searchButton = dialog.querySelector(".btn-search");

  openEl.addEventListener("click", () => {
    dialog.show();
  });
  closeEl.addEventListener("click", () => {
    dialog.close();
  });
};
