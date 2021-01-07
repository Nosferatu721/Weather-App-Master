const d = document,
  btnSearchCall = d.getElementById("btn-search-call"),
  sectionSearch = d.getElementById("section-search"),
  btnCloseSearch = d.getElementById("btn-close-search");

d.addEventListener("DOMContentLoaded", () => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btnSearchCall.id}`)) {
      sectionSearch.classList.add("isActive");
    }
    if (e.target.matches(`#${btnCloseSearch.id}`)) {
      sectionSearch.classList.remove("isActive");
    }
  });
});
