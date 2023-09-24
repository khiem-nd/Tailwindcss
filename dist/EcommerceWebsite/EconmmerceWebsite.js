openMenu = () => {
  document.getElementById("md-menu").classList.add("md:block");
};
closeMenu = () => {
  document.getElementById("md-menu").classList.remove("md:block");
};
openSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.remove("hidden");
};
closeSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.add("hidden");
};
openSmMenu = () => {
  document.getElementById("mobile-menu").classList.remove("hidden");
};
closeSmMenu = () => {
  document.getElementById("mobile-menu").classList.add("hidden");
};

modalHandlerLogin = () => {
  let modaLogin = document.querySelector("#modalLogin");
  modaLogin.classList.remove("hidden");
};

modalHandlerCart = () => {
  let modaCart = document.querySelector("#modalCart");
  modaCart.classList.remove("hidden");
};

checkoutBack = () => {
  let modaCart = document.querySelector("#modalCart");
  modaCart.classList.add("hidden");
};

closeLogin = () => {
    let modaLogin = document.querySelector("#modalLogin");
    modaLogin.classList.add("hidden");
};
