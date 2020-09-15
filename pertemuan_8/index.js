 // Exercise 2

const mhs = {
     nama: 'rein',
    expenses : [],
} 
 const addExpenses = function(desc,amo){
    mhs.expenses.push({description: desc, amount: amo});  
 };

const getAccountSummary = function(){
    let totalExpenses = 0;
    mhs.expenses.forEach(function (el){
        totalExpenses = totalExpenses + el.amount
});
return "Total Pengeluaran " + mhs.nama + " adalah Rp. " + totalExpenses;
};

addExpenses('Beli Makan', 15000);
addExpenses('Ongkos', 30000);
console.log(getAccountSummary());
