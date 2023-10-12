function jumlahkan() {
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);
  var hasil = bilangan1 + bilangan2;

  if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
    alert("Hasil penjumlahan: " + hasil);
  } else {
    alert("Masukkan bilangan yang valid.");
  }
}

function ulang() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
}
