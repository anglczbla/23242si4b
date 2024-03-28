let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let hasil = document.getElementById("Hasil");

function hitung(operator){
    if (operator == "tambah"){
        hasil.innerHTML = Number(angka1.value) + Number(angka2.value);
    } else if (operator == "kurang"){
        hasil.innerHTML = Number(angka1.value) - Number(angka2.value);
    } else if (operator == "kali"){
        hasil.innerHTML = Number(angka1.value) * Number(angka2.value);
    } else if (operator == "bagi"){
        hasil.innerHTML = Number(angka1.value) / Number(angka2.value);
    }

}