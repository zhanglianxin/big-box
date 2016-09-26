var React = require('react');


var Input = React.createClass({


    onFocus: function(evt){
        evt.target.select();
    },


    onClick: function(evt){
        evt.proventDefault();
        //this.props.callbackChangeCurrent(this.props.index);
    },

    onMouseUp: function(evt){
        evt.proventDefault();
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
                          autoFocus onFocus={this.onFocus} onMouseUp={this.onMouseUp} onMouseDown={this.onClick}
                       />;
        }
        else {
            temp = <input type="text" style={styleInput}
                          maxLength="1" value={this.props.number} onMouseDown={this.onClick}
                          onFocus={this.onFocus} onMouseUp={this.onMouseUp}/>;
        }

        return (
            <span>
                {temp}
            </span>
        );
    }
});

module.exports = Input;