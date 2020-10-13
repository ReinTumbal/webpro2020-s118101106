/* 
    Destrukturisasi
    */


//destrukturisasi Array
// let hewan = ["tusa", "macang", "ular"];

// let hewan1 = hewan[0];
// let hewan2 = hewan[1];
// let hewan3 = hewan[2];

// console.log(hewan1); 
// console.log(hewan2); 
// console.log(hewan3); 


//ES6
// let hewan =["macang", "tusa", "ular"];
// //gunakan destrukturisasi array
// let [hewan1, hewan2, hewan3] = hewan;
// console.log(hewan1); 
// console.log(hewan2); 
// console.log(hewan3); 

//memilih element mana yang tidak akan di simpan
// menggunakan "koma kosong" untuk melewati
// let [namaDepan, , namaBelakang, ,alamat] =['Reinhard','jackson','Tumbal','20 tahun','manado'];
// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(alamat);

//menukar nilai 2 variable atua lebih
// let a =20;
// let b = 30;
// [a,b]=[a,b];


//Destrukturisasi Objek
//ES5
// let orang = {
//     nama: "Rein",
//     umur: 20,
//     singel: true
//   };
  
//   let nama = orang.nama;
//   let umur = orang.umur;
//   let sudahMenikah = orang.singel;
  
//   console.log(nama);
//   console.log(umur);
//   console.log(singel);

//ES6
// let biodata = {
//     nama: "rein",
//     umur: 20,
//     singel: true
//   };
  
//   // Destrukturisasi Objek
//   let { nama, umur, status } = biodata;
  
//   console.log(nama); 
//   console.log(umur);
//   console.log(status);


//   let {
//     namaProperti1: namaVariabelBaru1,
//     namaProperti2: namaVariabelBaru2
//   } = namaObjek;
//   let orang = {
//     name: "rein",
//     age: 20,
//   };
  
//   // buat variabel nama berisi nilai dari properti name pada orang
//   // buat variabel age berisi nilai dari properti umur pada orang
//   let { name: nama, age: umur } = orang;
  
//   console.log(nama); 
//   console.log(umur); 
  
//Destrukturisasi objek bertingkat
let murid = {
    kelas: "12",
    nama: ["Reinhard", "jaxx", "Messi"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);