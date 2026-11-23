function anasayfa(){
    window.location.href = "kullanici.html";
}

function onayGoster() {
    let kullaniciAdi = document.getElementById("kullanici").value;
    let sifre = document.getElementById("sifre").value;

    if (kullaniciAdi === "" || sifre === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    let kayitliSifre = localStorage.getItem(kullaniciAdi);

    if (!kayitliSifre) {
        alert("Böyle bir hesap bulunamadı!");
        return;
    }

    if (kullaniciAdi === "admin") {
        alert("Admin hesabı silinemez!");
        return;
    }

    if (sifre !== kayitliSifre) {
        alert("Şifre yanlış!");
        return;
    }

    // Her şey doğruysa modal aç
    document.getElementById("modal").style.display = "flex";
}

function hesapSil() {
    let kullaniciAdi = document.getElementById("kullanici").value;
    localStorage.removeItem(kullaniciAdi);
    alert("Hesap başarıyla silindi!");
    document.getElementById("modal").style.display = "none";
    window.location.href = "index.html";
}

function modalKapat() {
    document.getElementById("modal").style.display = "none";
}

function don(){
    window.location.href = "kullanici.html";
}