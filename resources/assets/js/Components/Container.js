var React = require('react');




var ButtonPanel = require('./Panels/ButtonPanel');
var FetchPanel = require('./Panels/FetchPanel');
var SharePanel = require('./Panels/SharePanel');


/**
 * 住显示区的容器，由标题和面板组成，面板是可变的，有三种面板
 * 按钮面板：有获取和分享两个按钮
 * 获取面板：有一个提取码的输入框
 * 分享面板：还没有具体设计
 */

var Container = React.createClass({

    getInitialState: function () {
        return {panel: 0};
    },

    changePanel: function (num) {
        this.setState({panel: num});
    },

    render: function () {
        //标题和面板的容器，样式主要是进行了定位
        var container = {
            position: 'absolute',
            top: '30%',
            left: '50px'
        };

        var p;
        if (this.state.panel == 0)
            p = (<ButtonPanel key={0}
                callbackChangePanel={this.changePanel}/>);
        else if (this.state.panel == 1)
            p = (<FetchPanel key={1}
                callbackChangePanel={this.changePanel}/>);
        else
            p = (<SharePanel key={2}
                callbackChangePanel={this.changePanel}/>);

        return (
            <div style={container}>

                    {p}

            </div>
        );
    }
});

module.exports = Container;
