var React = require('react');
var sampleAccounts = require('../sample.json');
var AccountsBox = require('./AccountsBox.jsx');
var AccountDisplay = require('./AccountDisplay.jsx');
var Bank = require('../bank/bank.js');

var bank = new Bank();
    for(var account of sampleAccounts){
      bank.addAccount(account);
    };

var BankBox = React.createClass({
  getInitialState:function(){
    return {accounts: bank.accounts, currentAccount: null}
  },
  updateCurrentAccount: function(account){
    this.setState( { currentAccount: account } );
  },
  deleteAccount: function(account){
    if (account === this.state.currentAccount){
        this.setState({currentAccount: null})
    }
    bank.deleteAccount(account);
    this.setState({accounts: bank.accounts});
  },

  render:function(){
    return(
        <div>
          <h1> React Bank Box </h1>
          <h2> Total: £{ bank.totalCash() } </h2>
          <AccountsBox accounts={bank.filteredAccounts('personal')} total={bank.totalCash('personal')} type='personal' onShowAccount={this.updateCurrentAccount} onDeleteAccount={this.deleteAccount}></AccountsBox>
          <AccountsBox accounts={bank.filteredAccounts('business')} total={bank.totalCash('business')} type='business' onShowAccount={this.updateCurrentAccount} onDeleteAccount={this.deleteAccount}></AccountsBox>
          <AccountDisplay account={this.state.currentAccount}></AccountDisplay>
        </div>
    )
  }
})

module.exports = BankBox;