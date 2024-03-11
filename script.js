const anaKutu = document.getElementById('ana-kutu');
const kaydolBtn = document.getElementById('kaydol');
const girisBtn = document.getElementById('giris');

kaydolBtn.addEventListener('click', () => {
    anaKutu.classList.add("aktif");
});

girisBtn.addEventListener('click', () => {
    anaKutu.classList.remove("aktif");
});


document.getElementById("sifreUnuttumLink").addEventListener("click", function (event) {
    event.preventDefault(); // Bağlantının varsayılan davranışını engelle

    var sendboxMessage = "Şifreniz e-mail ya da telefon numaranıza mesaj olarak gönderilmiştir...";
    alert(sendboxMessage);
});