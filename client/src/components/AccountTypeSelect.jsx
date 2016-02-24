var React = require('react');

var AccountTypeSelect = React.createClass({

    filterTypes:function(accounts){
        var types = accounts.reduce(function(types, account){
            if (!types.includes(account.type)){
                types.push(account.type);
            }
            return types;
        }, ['All'])
        return types;
    },

    render:function(){

        var createOption = function(type){
            return<option key={type} value={type}>{type}</option>
        }

        return(
            <select>
                {this.filterTypes(this.props.accounts).map(createOption)}
            </select>
        )
    }
})

module.exports = AccountTypeSelect;