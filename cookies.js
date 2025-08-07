document.addEventListener("DOMContentLoaded", function () {
  // === FADE-IN ===
  document.body.classList.add("fade-in");
  document.body.classList.remove("js-loading");

  // === COOKIE BANNER ===
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (banner && acceptBtn && !localStorage.getItem("cookiesAccepted")) {
    banner.classList.add("show");
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      banner.classList.remove("show");
    });
  }

  // === BARA DE CĂUTARE ===
  const form = document.querySelector(".search-toggle-form");

  if (form) {
    const iconBtn = form.querySelector(".search-icon");
    const input = form.querySelector(".search-input");

    if (iconBtn && input) {
      iconBtn.addEventListener("click", function () {
        form.classList.toggle("open");
        if (form.classList.contains("open")) {
          input.focus();
        }
      });

      input.addEventListener("blur", function () {
        setTimeout(() => form.classList.remove("open"), 200);
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchQuery = input.value.toLowerCase();
        const content = document.getElementById("content");

        // Șterge rezultate vechi, dacă există
        const existingResults = document.getElementById("search-results");
        if (existingResults) {
          existingResults.remove();
        }

        const searchResults = document.createElement("div");
        searchResults.id = "search-results";
        searchResults.style.marginTop = "20px";
        searchResults.style.padding = "10px";
        searchResults.style.background = "#fff8e1";
        searchResults.style.border = "1px solid #f0c36d";
        searchResults.style.borderRadius = "6px";

        if (content) {
          const paragraphs = content.getElementsByTagName("p");
          let found = false;

          Array.from(paragraphs).forEach((paragraph) => {
            if (paragraph.textContent.toLowerCase().includes(searchQuery)) {
              found = true;
              const result = document.createElement("div");
              result.textContent = "Rezultat: " + paragraph.textContent;
              searchResults.appendChild(result);
            }
          });

          if (!found) {
            searchResults.textContent = "Nu s-au găsit rezultate.";
          }

          content.appendChild(searchResults); // afișează în content, nu în body
        } else {
          // fallback dacă nu există <div id="content">
          searchResults.textContent = "Funcția de căutare nu este disponibilă pe această pagină.";
          document.body.appendChild(searchResults);
        }
      });
    }
  }
});
