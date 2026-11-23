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

let sayi = localStorage.getItem("sayi");

if(sayi === null){
    sayi = 0;
} else {
    sayi = Number(sayi);
}

document.getElementById("sayi").innerText = sayi;

function arttir(){
    sayi++;
    document.getElementById("sayi").innerText = sayi;
    localStorage.setItem("sayi", sayi);
}

function resetle(){
    sayi = 0;
    document.getElementById("sayi").innerText = sayi;
    localStorage.setItem("sayi", sayi);
}