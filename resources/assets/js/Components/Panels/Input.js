var React = require('react');



var Input = React.createClass({

    //事件触发顺序如下：mouseDown->focus->mouseUp->click
    //如果 click 事件正常触发，则会取消选中效果
    //可以在 mouseDown 或者 mouseUp 中阻止默认行为
    //这样，click 事件仍然会正常触发，但是不会取消选中效果
    //注意：如果在 mouseDown 中阻止默认行为，则要手动触发 focus 事件
    onMouseDown: function(evt){
        evt.preventDefault();
    },

    onFocus: function(evt){
        evt.target.select();
        console.log('focus');
    },


    onClick: function(evt){
        this.props.callbackRefresh();
        evt.preventDefault();
    },
    
    onKeyDown: function(evt){
        var key = evt.keyCode;
        console.log(key);
        if(key==8){
            this.props.callbackBackspace();
        }
        else if(key>=48 && key <= 57 ){
            this.props.callbackSetCurrentValue(key-48);
        }
        else if((key>=96 && key<=105)){
            this.props.callbackSetCurrentValue(key-96);
        }
            
        evt.preventDefault();
    },

    componentDidMount: function() {
        if(this.props.isCurrent){
            this.refs.domInput.focus();
        }
    },

    componentDidUpdate: function() { 
        if(this.props.isCurrent){
            this.refs.domInput.focus();
        }
    },

    render: function () {

        var styleInput = {
            height: '72px',
            width: '48px',
            lineHeight: '40px',
            fontSize: '40px',
            marginRight: '5px',
            borderRadius: '5px',
            border: '2px solid',
            borderColor: 'orange',
            textAlign: 'center',
            verticalAlign: 'middle'
        };

        return (
            <span>
                <input type="text" ref="domInput"
                    style={styleInput}
                    maxLength="1" 
                    value={this.props.number} 
                    onMouseDown={this.onMouseDown} 
                    onClick={this.onClick}
                    onKeyDown={this.onKeyDown}/>
            </span>
        );
    }
});

module.exports = Input;