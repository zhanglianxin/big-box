var React = require('react');


/**
 * 按钮面板
 */
var Footer = React.createClass({

    render:function() {
        let footer = {
            position: "absolute",
            bottom: "1%",
            left: "2%",
            color: "grey"
        };

        return (
            <div style={footer}>
                © 2016 | 济南第二监狱 | 文件分享系统
            </div>
        );
    }
});

module.exports = Footer;