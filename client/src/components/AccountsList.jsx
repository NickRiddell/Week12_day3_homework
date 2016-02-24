var React = require('react');
var Account = require('./Account.jsx');

var AccountsList = React.createClass({

  render: function(){

    var createAccount = function(account, index){
      return(
        <Account key={index} account={account} onShowAccount={this.props.onShowAccount} onDeleteAccount={this.props.onDeleteAccount} ></Account>
      )
    }.bind(this);

    return(
        <div>
          <ul>
            {this.props.accounts.map(createAccount)}
          </ul>
        </div>
    )
  }
})
module.exports = AccountsList;