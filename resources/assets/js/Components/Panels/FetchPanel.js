var React = require('react');
import SixInput from './SixInput'

/**
 * 获取面板
 */
var FetchPanel = React.createClass({

    handleClick: function (evt) {
        this.props.callbackChangePanel(evt.target.value);
    },

    render: function () {

        var styleSpan = {
            color: 'white',
            height: '30px',
            lineHeight: '30px',
            fontSize: '24px',
            marginRight: '20px',
            display: 'inline-block',
            verticalAlign: 'middle'
        };


        var styleBtn = {
            fontFamily: "幼圆",
            lineHeight: '20px',
            fontSize: '20px',
            marginLeft: '20px',
            verticalAlign: 'middle'
        };


        return (
            <div>
                <form >
                    <span style={styleSpan}>请输入提取码</span>

                    <SixInput />

                    <button type="button" style={styleBtn} className="btn btn-warning btn-lg">
                        获取
                    </button>
                </form>
            </div>
        );
    }
});

module.exports = FetchPanel;