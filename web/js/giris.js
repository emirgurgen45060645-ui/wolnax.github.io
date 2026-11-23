function girisYap() {
    let kullaniciAdi = document.getElementById("kullanici").value;
    let sifre = document.getElementById("sifre").value;

    if (kullaniciAdi === "" || sifre === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    if (kullaniciAdi === "admin" && sifre === "1234") {
        localStorage.setItem("giris", "admin");
        window.location.href = "admin.html";
        return;
    }

    let kayitliSifre = localStorage.getItem(kullaniciAdi);
    if (kayitliSifre) {
        if (sifre === kayitliSifre) {
            localStorage.setItem("giris", kullaniciAdi);
            window.location.href = "kullanici.html";
        } else {
            alert("Şifre yanlış!");
        }
    } else {
        alert("Hesabınız yok, kayıt olun!");
        window.location.href = "kayit.html";
    }
}