import React, {Component} from 'react';

import $ from 'jquery';

/**
 * 按钮面板
 */
class ButtonPanel extends Component {

    showDownloadPanel() {
        $(".btn").attr("onclick","javascript:void(0)");
        console.log('Hello');
        $("#btn-panel").css("opacity", "0");

        setTimeout(function () {
            $("#btn-panel").css("display", "none");
        }, 600);
    }

    render() {
        let panel = {
            transition: 'opacity 0.5s'
        };

        let btn = {
            fontFamily: "幼圆",
            lineHeight: '24px',
            fontSize: '24px',
            marginTop: '30px',
            marginLeft: '60px'
        };

        return (
            <div id="btn-panel" style={panel}>
                <button type="button" id="btn-download" style={btn}
                        className="btn btn-success btn-lg"
                        onClick={this.showDownloadPanel.bind(this)}>
                    获取
                </button>

                <button type="button" style={btn}
                        className="btn btn-warning btn-lg"
                        onClick={this.showDownloadPanel.bind(this)}>
                    分享
                </button>
            </div>
        );
    }
}

export default ButtonPanel;