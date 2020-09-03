/* let a = 8;
let b = 3;
let c = 10;
let d = 5;

let luasA = a * a;
let luasB = b * b;
let luasC = c * c;
let luasD = d * d;

let total = luasA + luasB;


console.log(total);
*/
/*
1. Function
*/

function penjumblahanDuaBujurSangkar(a,b){
    let luasA = a * a;
    let luasB = b * b;
    
    let total = luasA + luasB;
    return total;
}

console.log(penjumblahanDuaBujurSangkar(8,3));
console.log(penjumblahanDuaBujurSangkar(10,5));
/*
Pelajaran Function 
Matematika






*/

function penjumblahanDuaBujurSangkar(a,b){

    return a * a + b * b;;           //Refactoring
}

console.log(penjumblahanDuaBujurSangkar(8,3));
console.log(penjumblahanDuaBujurSangkar(10,5));


function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a * b;                                   
}
console.log(tambah(kali(5,2), kali (10,2)));            //Refactoring

// Hoisting

function penjumblahanDuaBujurSangkar(a,b){

    return a * a + b * b;;           //Refactoring
}

console.log(penjumblahanDuaBujurSangkar(8,3));
console.log(penjumblahanDuaBujurSangkar(10,5));
console.log(tambah(kali(5,2), kali (10,2)));            //Refactoring

function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a * b;                                   
}

// const olaraga = 'basketball';

// function namaAtlet(){
//     let atlet = 'Lionel Messi';
//     const noMessi = 10;
//     console.log(olaraga); //Output: basketball
//     if (olaraga === 'basketball'){
//         atlet = 'Kobe Bryant';
//         conts noKobe = 24;
//         console.log(olaraga)
        
//     }
//     return atlet;
// }

// console.log(namaAtlet());
// console.log(olaraga());