var React = require('react');
var sampleAccounts = require('../sample.json');
var AccountsBox = require('./AccountsBox.jsx');
var AccountDisplay = require('./AccountDisplay.jsx');
var Bank = require('../bank/bank.js');
var AccountTypeSelect = require('./AccountTypeSelect.jsx')

var bank = new Bank();
    for(var account of sampleAccounts){
      bank.addAccount(account);
    };

var BankBox = React.createClass({
  getInitialState:function(){
    return {accounts: bank.accounts, currentAccount: null, currentType: null}
  },
  setCurrentAccount: function(account){
    this.setState( { currentAccount: account } );
  },
  deleteAccount: function(account){
    if (account === this.state.currentAccount){
        this.setState({currentAccount: null})
    }
    bank.deleteAccount(account);
    this.setState({accounts: bank.accounts});
  },
  handleInterestPayment:function(){
    bank.payInterest();
    this.setState({accounts: bank.accounts});
  },

  setCurrentType:function(type){
    if (type === 'All') type = null;
    this.setState({currentType: type});
  },

  render:function(){

    var totalDisplay;
    if (this.state.currentType !== null) {
        totalDisplay = <h2> Total: £{ bank.totalCash() } </h2>
    }
    return(
        <div>
          <h1> React Bank Box </h1>

          {totalDisplay}

          <button onClick={this.handleInterestPayment}>Pay Interest</button>
          <AccountTypeSelect accounts={this.state.accounts} onTypeSelect={this.setCurrentType}/>
          <AccountsBox accounts={bank.filteredAccounts(this.state.currentType)} total={bank.totalCash(this.state.currentType)} type={this.state.currentType} onShowAccount={this.setCurrentAccount} onDeleteAccount={this.deleteAccount}></AccountsBox>
          <AccountDisplay account={this.state.currentAccount}></AccountDisplay>
        </div>
    )
  }
})

module.exports = BankBox;