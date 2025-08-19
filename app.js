 const btn = document.getElementById("toggle");
    const root = document.documentElement;

    if (localStorage.getItem("theme") === "dark") {
      root.setAttribute("data-theme", "dark");
      btn.textContent = "☀️ Light";
    }

    btn.addEventListener("click", () => {
      if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙 Dark";
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️ Light";
      }
    });
