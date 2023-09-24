menu = (e) => {
  let selectMenu = document.querySelector("#mobile-menu");
  e.name === "menu"
    ? ((e.name = "close"), (selectMenu.style.opacity = 100))
    : ((e.name = "menu"), (selectMenu.style.opacity = 0));
};

toHome = (e) => {
  document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
};
toTestimonials = (e) => {
  document.getElementById("Testimonials").scrollIntoView({ behavior: "smooth" });
};
toPrice = (e) => {
  document.getElementById("Price").scrollIntoView({ behavior: "smooth" });
};
toProjects = (e) => {
  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
};
