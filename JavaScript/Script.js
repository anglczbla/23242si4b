document.getElementById("welcome").innerHTML = "Selamat Datang";
document.getElementById("nama").innerHTML = "<b>Angel</b>";
document.getElementById("email").innerHTML = "Angel@test.com";

console.log("Hanya Bisa dilihat di console");

// variabel
let nama = "";
let email = "";
let data = []; //aray / lstik
// function
function tampil(){
    console.log("Button ditekan");
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama);
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("email").innerHTML = email;
    // simpan ke dalam array data
    data.push(nama);
    console.log(data);
}
