// Admin değilse giriş sayfasına yönlendir
if (localStorage.getItem("giris") !== "admin") {
    window.location.href = "index.html";
}

function cikisYap() {
    localStorage.removeItem("giris");
    window.location.href = "index.html";
}