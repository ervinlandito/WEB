function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama != "" && email != "" && alamat != "") {
    alert("Anda Berhasil Mengisi" + nama + email + alamat);
    return true;
  } else {
    alert("Anda harus mengisi data dengan lengkap !");
    return false;
  }
}

document.getElementById("Formreg").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validasi()) {
    alert("Pendaftaran Berhasil");
  }
});
