var React = require('react');
var AccountsList = require('./AccountsList.jsx')

var AccountsBox = React.createClass({
  render: function(){
    return(
        <div>
          <h4>Total {this.props.type}: £{this.props.total}</h4>
          <AccountsList accounts={this.props.accounts} onShowAccount={this.props.onShowAccount} onDeleteAccount={this.props.onDeleteAccount}></AccountsList>
        </div>
    )
  }
})

module.exports = AccountsBox;