var Bank = function(){
  this.accounts = [];
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },
  deleteAccount:function(account){
    var index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
  },
  payInterest:function(){
    this.accounts.forEach(function(account){
      var interest = Math.floor(account.amount * 0.1 * 100)/100;
      account.amount += interest;
    })
  },
  findAccountByOwnerName:function(ownerName){
    var foundAccount = null;
    for (var account of this.accounts) {
      if(account.owner === ownerName){
        foundAccount = account;
      }
    }
    return foundAccount;
  },
  filteredAccounts: function(type){
    if(!type) return this.accounts
    var filteredAccounts = [];
    for (var account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },
  totalCash:function(type){
    var total = 0;
    for (var account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    return Math.floor(total *100)/100;
  },
  accountAverage:function(){
    return this.totalCash()/this.accounts.length;
  }
}


module.exports = Bank;
