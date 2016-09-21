var React = require('react');


/**
 * 按钮面板
 */
var FetchPanel = React.createClass({

    handleClick:function(evt) {
        this.props.callbackChangePanel(evt.target.value);
    },

    render:function() {

        var stylePanel = {
            marginTop:'30px',
            transition:'opacity 5s'
        };

        var styleSpan = {
            color:'white',
            lineHeight: '24px',
            fontSize: '24px'
        };

        var styleInput = {
            height: '36px',
            width: '90px',
            lineHeight: '20px',
            fontSize: '20px',
            marginLeft: '30px',
            borderRadius:'3px',
            border:'1px solid',
            borderColor: 'white',
            boxShadow: '1px 1px 5px #888888'
        };

        var styleBtn = {
            fontFamily: "幼圆",
            lineHeight: '20px',
            fontSize: '20px',
            marginLeft: '30px'
        };


        return (
            <div style={stylePanel}>
                <form >
                    <span style={styleSpan}>请输入提取码</span>
                    <input style={styleInput}  placeholder="提取码" />

                    <button type="button" style={styleBtn} 
                        className="btn btn-warning btn-lg">
                        获取
                    </button>
                </form>
            </div>
        );
    }
});

module.exports = FetchPanel;