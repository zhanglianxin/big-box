var React = require('react');


/**
 * 按钮面板
 */
var ButtonPanel = React.createClass({

    handleClick:function(evt) {
        this.props.callbackChangePanel(evt.target.value);
    },

    render:function() {
        var panel = {
            transition: 'opacity 0.5s'
        };

        var btn = {
            fontFamily: "幼圆",
            lineHeight: '24px',
            fontSize: '24px',
            marginTop: '30px',
            marginLeft: '60px'
        };

        return (
            <div id="btn-panel" style={panel}>
                <button type="button" style={btn} value={1}
                        className="btn btn-success btn-lg"
                        onClick={this.handleClick}>
                    获取
                </button>

                <button type="button" style={btn} value={2}
                        className="btn btn-warning btn-lg"
                        onClick={this.handleClick}>
                    分享
                </button>
            </div>
        );
    }
});

module.exports = ButtonPanel;