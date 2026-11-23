function kayitOl(){
    let kullaniciAdi = document.getElementById("kullanici").value;
    let sifre = document.getElementById("sifre").value;

    if(kullaniciAdi === "" || sifre === ""){
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    // Eğer kullanıcı adı daha önce varsa
    if(localStorage.getItem(kullaniciAdi)){
        alert("Bu kullanıcı adı zaten kayıtlı!");
        return;
    }

    // Kaydet
    localStorage.setItem(kullaniciAdi, sifre);
    alert("Kayıt başarılı! Giriş ekranına yönlendiriliyorsunuz...");
    window.location.href = "index.html";
}