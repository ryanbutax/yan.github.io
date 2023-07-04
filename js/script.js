// ini menampilkan data

function submitForm() {
  var form = document.getElementById("formulir");
  var data = new FormData(form);

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = xhr.responseText;
          displayResult(response);
      }
  };

  xhr.open("POST", "submit.php", true);
  xhr.send(data);
}

function displayResult(response) {
  var resultDiv = document.getElementById("hasil");
  resultDiv.innerHTML = response;
}


// ini menyimpan data
function saveData() {
  var nama = document.getElementById("nama").value;
  var alamat = document.getElementById("alamat").value;
  var email = document.getElementById("email").value;
  var perusahaan = document.getElementById("perusahaan").value;
  var layanan = document.getElementById("layanan").value;

  var data = {
    nama: nama,
    alamat: alamat,
    email: email,
    perusahaan: perusahaan,
    layanan: layanan
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "submit.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      alert("Data berhasil disimpan!");

      // Setelah menerima respons dari server dan melakukan alert, baru reset formulir
      document.getElementById("formulir").reset();

      // Tampilkan respons pada elemen dengan ID "hasil"
      displayResult(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(data));
}

// login
function validateLogin(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // contoh validasi sederhana
  if (username === "00002" && password === "udinus polke") {
    alert("Login berhasil!");
    window.location.href = "home.html"; // Ganti "index.html" dengan path halaman index yang sesuai
    // tambahkan kode lainnya, seperti pengalihan ke halaman selanjutnya
  } else {
    alert("Username atau password salah!");
  }
}
