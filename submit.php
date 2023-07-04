<?php
  $nama = $_POST['nama'];
  $alamat = $_POST['alamat'];
  $email = $_POST['email'];
  $perusahaan = $_POST['perusahaan'];
  $layanan = $_POST['layanan'];
 

  // Lakukan operasi atau simpan data ke database

  // Kirim respons ke client
  $response = "
  <table>
      <tr>
          <td>Nama</td>
          <td>:</td>
          <td>$nama</td>
      </tr>
      <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>$alamat</td>
      </tr>
      <tr>
          <td>Email</td>
          <td>:</td>
          <td>$email</td>
      </tr>
      <tr>
          <td>Nama Perusahaan</td>
          <td>:</td>
          <td>$perusahaan</td>
      </tr>
      <tr>
          <td>Layanan</td>
          <td>:</td>
          <td>$layanan</td>
      </tr>
  </table>
  ";
  
  echo $response;


//   ini simpan data
$data = json_decode(file_get_contents('php://input'), true);

$file = 'data.json';

if (!file_exists($file)) {
    file_put_contents($file, '[]');
}

$current_data = json_decode(file_get_contents($file), true);
if ($data === null) {
    $data = array();
}

$current_data[] = $data;
file_put_contents($file, json_encode($current_data));

// hak akses
chmod($file, 0644);

$response2 = "Data berhasil disimpan ke file JSON.";
echo $response2;
  
?>


