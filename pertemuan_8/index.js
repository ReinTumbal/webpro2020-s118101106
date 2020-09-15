 // Exercise 2

const mhs = {
     nama: 'rein',
    expenses : [],
};
 conts addExpenses = function(desc,amo){
    mhs.expenses.push({description: desc, amount: amo});  
 };

conts getAccountSummary = function(){
    let totalExpenses = 0;
    account.expenses.forEach(function (el){
        totalExpenses = totalExpenses + el.amount
});
return "Total Pengeluaran " + account.name + "adalah Rp. " + totalExpenses;
};

addExpenses('Beli Makan', 15000);
addExpenses('Ongkos', 30000);
console.log(getAccountSummary());
