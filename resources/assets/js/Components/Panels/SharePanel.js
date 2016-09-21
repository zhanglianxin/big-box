var React = require('react');


/**
 * 按钮面板
 */
var SharePanel = React.createClass({

    handleClick:function(evt) {
        this.props.callbackChangePanel(evt.target.value);
    },

    render:function() {
        return (
            <div>Share Panel!!!
            </div>
        );
    }
});

module.exports = SharePanel;