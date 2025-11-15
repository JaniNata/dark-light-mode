const themeSwitch = document.querySelector("#theme-switch");
const body = document.body;

// nastaví motiv podle stringu "light" / "dark"
function setTheme(theme) {
  body.setAttribute("data-theme", theme);
// checkbox podle motivu
  themeSwitch.checked = theme === "dark";
// uložení do localStorage
  localStorage.setItem("theme", theme);
}

// změna checkboxu přehodí motiv
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});

// při načtení stránky načíst uložený motiv
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  setTheme(savedTheme);
} else {
// žádný uložený motiv → zůstává light
  setTheme("light");
}
