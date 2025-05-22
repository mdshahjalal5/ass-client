export const themeSwither = () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  console.log(currentTheme, "ThemeSwitcher.jsx", 2);
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "lofi");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
