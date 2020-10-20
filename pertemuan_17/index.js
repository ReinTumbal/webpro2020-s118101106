//setTimeout(()=>{
// Do something here
// }, 5000)

// conts num=[1, 2, 3];
// setTimeout(numbers=>{
//     console.log(numbers)
// }, 2000, numbers)

// conts second = () => {
//     console.log('second')
// }

// conts first = () => {
//     console.log('first');
//     second();
//     console.log('the end')
// }

// first();

// conts second = () => {
//     setTimeout(() => {
//         console.log('second Async')
//     }, 3000)
// }

// conts second = () => {
//     setTimeout(() => {
//         console.log('Async 1')
//         conts numbers = [1, 2, 3];
//         setTimeout(id => {
//             console.log('Async 2')
//             console.log(id)
//             setTimeout(() => {
//                 console.log('Async 3')
//             }, 2000)
//         }, 2000, numbers[1])
//     }, 2000)
// }

// getId
//     .then(numbers => {
//         console.log(numbers)
//     })
//     .catch(error => {
//         console.log(error);
//     })

// conts getId = new Promise ((resolve , reject) => {
//     conts number = [1, 2, 3];
//     setTimeout(() => {
//         resolve(number[2])
//     }, 2000)
// });

// conts getNameById = id => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             conts name = 'John Doe'
//             resolve('${id}: ${name}');
//         }, 2000, id)
//     })
// }

// getId
//     .then(id => {
//         console.log(id)
//        return getNameById(id);
//     })
//     .then(name => {
//         console.log(name)
//     })
//     .catch(error => {
//         console.log(error);
//     })

// async function getNameByIdAW(){
//     const id = await getId;
//     const name = await getNameById(id);
//     console.log(name);
// }

async function getNameByIdAW() {
    const id = await getId;
    const name = await getNameById(id);
    return name;
}

getNameByIdAW().then(name => { console.log(name)})
console.log('End');