var React = require('react');

var Account = React.createClass({

  handleShowClick: function(){
    this.props.onShowAccount(this.props.account);
  },

  handleDeleteClick: function(){
    this.props.onDeleteAccount(this.props.account);
  },

  render: function(){
    return(
          <li key={this.props.key}> {this.props.account.owner} £{this.props.account.amount}
          <button onClick={this.handleShowClick}>Show</button>
          <button onClick={this.handleDeleteClick}>Delete</button>
          </li>

    );
  }
});

module.exports = Account;