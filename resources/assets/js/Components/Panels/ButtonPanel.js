var React = require('react');
import Panels from './Constants';

/**
 * 按钮面板
 */
var ButtonPanel = React.createClass({

    onFetchBtnClick: function (evt) {
        this.props.callbackChangePanel(Panels.FETCH);
    },

    onShareBtnClick: function (evt) {
        this.props.callbackChangePanel(Panels.SHARE);
    },

    render: function () {

        var btn = {
            fontFamily: "幼圆",
            lineHeight: '24px',
            fontSize: '24px',
            marginLeft: '60px'
        };

        return (
            <div>
                <button type="button" style={btn}
                        className="btn btn-success btn-lg" onClick={this.onFetchBtnClick}>
                    获取
                </button>

                <button type="button" style={btn}
                        className="btn btn-warning btn-lg" onClick={this.onShareBtnClick}>
                    分享
                </button>
            </div>
        );
    }
});

module.exports = ButtonPanel;