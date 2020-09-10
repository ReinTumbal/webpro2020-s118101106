// Object
//const mahasiswa1 = ['John', 'doe', 31, true];

//mendeklarasikan object
//1. object Literals
const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: 'Jln. Arnold Mononutu',
        kecamatan: "airmadidi",
        kabupaten: "Minahasa Utara",
    },
    Ipsmester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function () {
     console.log(this.Ipsmester);
     let total = 0;
     this.Ipsmester.forEach(function(el){
         total = total + el;
     });
     this.IPKumulatif = total / 4;
    },
};
// delete mhs1.namaBelakang;
console.log(mhs1);

//2. Kata Kunci New
// const mhs2 = new Object();
// mhs2.namaDepan = "jane";
// mhs2.namaBelakang = "Smith";

//Mengakses properti object
//1. Dot notation
// console.log(mhs1.umur);
//2. Bracket notaion
// console.log(mhs1['namaBelakang']);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.Ipsmester[2]);
// mhs1.hitungIPK();
// console.log(mhs1);

