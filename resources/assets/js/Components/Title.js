var React = require('react');


/**
 * 按钮面板
 */
var Title = React.createClass({

    render:function() {
        //标题和面板的容器，样式主要是进行了定位
        var title = {
            color: '#f0f0f0',
            fontFamily: "幼圆",
            fontWeight: 900,
            letterSpacing: '6px',
            lineHeight: '120px',
            fontSize: '120px'
        };

        return (
            <div style={title}>
                BLACK BOX
            </div>
        );
    }
});

module.exports = Title;