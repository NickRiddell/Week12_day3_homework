var React = require('react');

var AccountDisplay = React.createClass({

  render: function(){

    if (this.props.account) {
        return(
            <div>
              <h2> Account Details </h2>
              <h4>Account Owner:{this.props.account.owner}</h4>
              <h4>Account Amount:{ this.props.account.amount }</h4>
              <h4>Account Type:{ this.props.account.type }</h4>
            </div>
            )
          }else{
            return(
            <div></div>
            )
          }
    }
});

module.exports = AccountDisplay;