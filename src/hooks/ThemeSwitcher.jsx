export const themeSwither = () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "lofi");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
