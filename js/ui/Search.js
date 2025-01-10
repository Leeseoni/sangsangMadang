export const Search = (url) => {
  const openEl = document.querySelector(".header .btn-search");
  const closeEl = document.querySelector(".search .btn-close");
  const dialog = document.querySelector(".search");
  const input = dialog.querySelector("input");
  const searchButton = dialog.querySelector(".btn-search");

  openEl.addEventListener("click", () => {
    dialog.show();
  });
  closeEl.addEventListener("click", () => {
    dialog.close();
  });
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!input.value) {
      alert("검색어를 입력해주세요");
      input.focus();
      return;
    }

    const isValue = input.value;
    location.href = `/${url}?searchKeyWord=${isValue}`;
    // location.href = `/searchResult.html?searchKeyWord=${isValue}`;
  });
};
