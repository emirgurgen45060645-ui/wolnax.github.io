let giris = localStorage.getItem("giris");

// Giriş yoksa veya admin ise kullanıcı sayfasına erişim yok, giriş sayfasına dön
if (!giris || giris === "admin") {
    window.location.href = "index.html";
}

function cikisYap() {
    localStorage.removeItem("giris");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bgMusic");

    // Kayıtlı ses durumunu al
    const soundState = localStorage.getItem("musicMuted");

    if (soundState === "true") {
        music.muted = true;
    } else {
        music.muted = false;
    }
});