var React = require('react');
import SixInput from './SixInput';
import Panels from './Constants';

/**
 * 获取面板
 */
var FetchPanel = React.createClass({

    onBtnClick: function (evt) {
        this.props.callbackChangePanel(Panels.MAIN);
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
            marginTop: '60px',
            fontFamily: "幼圆",
            lineHeight: '20px',
            fontSize: '20x',
            marginLeft: '0px',
            verticalAlign: 'middle'
        };


        return (
            <div>
                <form >
                    <span style={styleSpan}>请输入提取码</span>

                    <SixInput
                        callbackChangePanel = {this.onBtnClick}/>

                    <button type="button" 
                            style={styleBtn} 
                            className="btn btn-warning btn-lg"
                            onClick={this.onBtnClick}>

                        返回
                    </button>
                </form>
            </div>
        );
    }
});

module.exports = FetchPanel;