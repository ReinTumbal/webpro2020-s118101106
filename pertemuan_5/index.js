// let angka =[1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["mangga","apel","jeruk"];
// console.log(buah);
//  let arr= ['text', 1, true];
//  console.log(arr);

//  let myFunc = function() {      //Method
//      return "hello Array";
//  }

//  let arr2 = ['text', 1, true, myFunc(), [1,2,3,4,5]];
//  //mengakses element dalam array
//  console.log(arr2[2]);
//  console.log(arr2[3]);
//  console.log(arr2[4][2]);

//  console.log(arr2.length);      //menghitung element yang ada di array

//  //deklarasi array menggunakan kata kunci new
//  let buah2 = new Array("Salak", "Jambu", "Melon");
//  console.log(buah2);


//Manipulasi Array
//1. Menambah isi Array

// let mhs = [];
// mhs[0] = "John";
// mhs[1] = 'bob';
// mhs[2] = 'Jane';
// mhs[3] = 'Peter';

// console.log(mhs);

// // 2.Mengubah isi Array
// mhs[1] = "Donny";
// console.log(mhs);

// //3. Menghapus isi Array
// mhs[2] = undefined;
// console.log(mhs);

//4. Menampilkan isi Array 
// let mhs = ["John", "Bob", "Jane", "Peter"];
// for(let i=0;i<mhs.length;i++){
//     console.log("Mahasiswa ke-" + i + " adalah "+mhs[i]);  //cara mengisi array menggunakan for
// }

//Method dalam Array
//1. Lenght
//2. toString
//let mhs = ["John", "Bob", "Jane", "Peter"];
// console.log(mhs.toString());
//3. Join
// console.log(mhs.join(" - "));

// //4. Push, Pop, Unshift, Shift
// mhs.push("Mayyara");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

// mhs.unshift("Stenly");
// mhs.unshift("Myrra");
// console.log(mhs.join(" - "));
// mhs.shift();
// mhs.shift();
// console.log(mhs.join(" - "));

// //5. Comcat
// let buah =["Mangga", "Appel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];

// let makanan = buah.concat(sayur);
// console.log(makanan);

//6. Splice and Slice
//a. splice

// let buah = ["pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join(" - "));

// //b. slice
// let buah2 = buah.slice(0,3);
// console.log(buah2.join(" - "));

//7. forEach dan Map
//a. forEach
//for(let i=0;i<mhs.length;i++){
//     console.log("Mahasiswa ke-" + i + " adalah "+mhs[i]);  //cara mengisi array menggunakan for
// }

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];

// let tampilAngka = function (el){
//     return el;
// };

// console.log(angka.forEach(tampilAngka));

// //b. Map
// let angka2 = angka.map(function(el){
//     return el;
// });

// console.log(angka2);


// //8. Sort
// let angka = [1,100,2,20,3,4,5,6,7,8];
// let mhs =["John", "Bob", "Erick"];
// angka.sort(function(a,b){
//     return b - a;
// })
// console.log(angka);
// mhs.sort();
// console.log(mhs);

//Filter
let angka = [1,100,2,20,3,4,5,6,7,8];

let angka2 = angka.filter(function(el){
    return el > 5;
})

console.log(angka2);