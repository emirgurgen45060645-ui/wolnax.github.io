let giris = localStorage.getItem("giris");

// Giriş yoksa veya admin ise kullanıcı sayfasına erişim yok, giriş sayfasına dön
if (!giris || giris === "admin") {
    window.location.href = "index.html";
}

function dersprogrami(){
    localStorage.removeItem("dersprogrami");
    window.location.href = "dersprogrami.html";
}

function cikisYap() {
    localStorage.removeItem("giris");
    window.location.href = "index.html";
}