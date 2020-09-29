/*
    Arrow function
*/

// function ucapkanSalam(){
//    return "Selamat siang";
//};

// fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//    const hasil =  bilangan1 + bilangan2;
//    return hasil;
//  };
  
//  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
//  const namaJenisAnjing = () => {
//    const anjing = ["Pug", "Bulldog", "Poodle"];
//    return anjing[Math.floor(Math.random()*(anjing.length))];
//  }
  
//  console.log(namaJenisAnjing()); // Output:(hasil random)


// Implicit return value
//function panggilan(nama) {
//    return `Hay ${nama}`;
// }
 
// console.log(panggilan('Bang Jaxx')); // Output: Hay Bang Jaxx

 //cara singkat
 const panggilan = (nama) => `Hay ${nama}`;

console.log(panggilan('Bang Jaxx')); // Output: Hay Bang Jaxx