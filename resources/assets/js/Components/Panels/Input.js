var React = require('react');


var Input = React.createClass({


    onFocus: function(evt){
        evt.target.select();
    },

    onClick: function(evt){
        evt.stopPropagation();
        this.props.callbackChangeCurrent(this.props.index);
    },

    render: function () {

        var styleInput = {
            height: '36px',
            width: '28px',
            lineHeight: '20px',
            fontSize: '20px',
            marginRight: '3px',
            borderRadius: '3px',
            border: '1px solid',
            borderColor: 'orange',
            textAlign: 'center',
            verticalAlign: 'middle'
        };

        var temp;
        if (this.props.focus) {
            console.log('aaa');
            temp = <input type="text" style={styleInput}
                          maxLength="1" value={this.props.number}
                          autoFocus="false" onFocus={this.onFocus}
                        onClick={this.onClick}/>;
        }
        else {
            temp = <input type="text" style={styleInput}
                          maxLength="1" value={this.props.number}
                          onFocus={this.onFocus} onClick={this.onClick}/>;
        }

        return (
            <span>
                {temp}
            </span>
        );
    }
});

module.exports = Input;