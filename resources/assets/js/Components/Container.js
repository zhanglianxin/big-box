var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


import Panels from './Panels/Constants';
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
        return {panel: Panels.MAIN};
    },

    changePanel: function (num) {
        this.setState({panel:Panels.NONE});
        setTimeout(()=>this.setState({panel: num}),500 );
    },

    render: function () {
        //标题和面板的容器，样式主要是进行了定位
        var container = {
            position: 'absolute',
            top: '35%',
            left: '50px'
        };

        var p;
        if (this.state.panel == Panels.NONE)
            p = (<div key={0} style={{display:'none'}}/>);
        else if (this.state.panel == Panels.MAIN)
            p = (<ButtonPanel key={Panels.MAIN} callbackChangePanel={this.changePanel}/>);
        else if (this.state.panel == Panels.FETCH)
            p = (<FetchPanel key={Panels.FETCH} callbackChangePanel={this.changePanel}/>);
        else
            p = (<SharePanel key={Panels.SHARE} callbackChangePanel={this.changePanel}/>);

        return (
            <div style={container}>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={500}
                                         transitionAppear={true}
                                         transitionAppearTimeout={500}>
                    {p}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = Container;
