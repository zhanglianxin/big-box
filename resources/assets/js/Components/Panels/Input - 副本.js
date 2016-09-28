var React = require('react');


var Input = React.createClass({

    //事件触发顺序如下：mouseDown->focus->mouseUp->click
    //如果 click 事件正常触发，则会取消选中效果
    //可以在 mouseDown 或者 mouseUp 中阻止默认行为
    //这样，click 事件仍然会正常触发，但是不会取消选中效果
    //注意：如果在 mouseDown 中阻止默认行为，则要手动触发 focus 事件
    onMouseDown: function(evt){
        
        console.log('mouseDown');
        evt.target.focus();
        evt.preventDefault();
    },

    onFocus: function(evt){
        evt.target.select();
        console.log('focus');
    },


    // onMouseUp: function(evt){
    //     console.log('mouseUp');
    // },

    onClick: function(evt){
        console.log('click'); 
        this.props.callbackChangeCurrent(this.props.index);
    },
    
    onChange: function(evt){

        console.log('change'); 
        this.props.callbackSetValue(evt.target.value);
    },

    componentDidMount: function(nextProps) {
        var dom = this.getDOMNode();
        if(this.props.isCurrent)
            dom.focus();
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
            temp = <input type="text" 
                        style={styleInput}
                          maxLength="1" 
                          value={this.props.number}
                          autoFocus 
                          onMouseDown={this.onMouseDown}
                          onFocus={this.onFocus} 
                          onClick={this.onClick}
                          onChange={this.onChange}
                       />;
        }
        else {
            temp = <input type="text" 
                        style={styleInput}
                          maxLength="1" 
                          value={this.props.number} 
                          onMouseDown={this.onMouseDown}
                          onFocus={this.onFocus} 
                          onClick={this.onClick}
                          onChange={this.onChange}/>;
        }

        return (
            <span>
                {temp}
            </span>
        );
    }
});

module.exports = Input;