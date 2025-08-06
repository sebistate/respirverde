<script>
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Adaugă efectul de fade-in la încărcarea paginii
    document.body.classList.add("fade-in");


    // === COOKIES ===
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    // Verifică dacă utilizatorul a acceptat cookie-urile
    if (!localStorage.getItem("cookiesAccepted")) {
      banner.classList.add("show"); // Afișează banner-ul dacă nu au fost acceptate cookie-urile
    }

    // Când utilizatorul apasă butonul de acceptare a cookie-urilor
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true"); // Salvează acceptul
      banner.classList.remove("show"); // Ascunde banner-ul
    });

    // Elimină "js-loading" pentru a începe efectul de fade-in
    document.body.classList.remove("js-loading");
  });
</script>
