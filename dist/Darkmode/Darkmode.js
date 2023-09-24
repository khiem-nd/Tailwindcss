toggleMode = (e) => {
  e.name === "moon"
    ? ((e.name = "sunny"),
      (document.getElementById("toggleDarkmode").className = "dark"))
    : ((e.name = "moon"),
      (document.getElementById("toggleDarkmode").className = "moon"));
};
