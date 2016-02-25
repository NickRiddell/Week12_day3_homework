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

    handleSelect:function(e){
        var type = e.target.value;
        this.props.onTypeSelect(type);
    },

    render:function(){

        var createOption = function(type){
            return<option key={type} value={type}>{type}</option>
        }

        return(
            <div>
                <h4> Select Account Type</h4>
                    <select onChange={this.handleSelect}>
                        {this.filterTypes(this.props.accounts).map(createOption)}
                    </select>
            </div>
        )
    }
})

module.exports = AccountTypeSelect;