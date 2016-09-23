var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

/**
 * 按钮面板
 */
var ButtonPanel = React.createClass({

    getInitialState: function () {
        return {show:true};
    },

    handleClick: function (evt) {
        this.setState({show:false});
        var that=this;
        var val = evt.target.value
        window.setTimeout(function(){
            that.props.callbackChangePanel(val);
        },500);
    },

    render: function () {

        var btn = {
            fontFamily: "幼圆",
            lineHeight: '24px',
            fontSize: '24px',
            marginTop: '30px',
            marginLeft: '60px'
        };

        var temp;
        if(this.state.show)
            temp = (<div key={1}>
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
            </div>);
        else
            temp=(<div key={2}></div>);

        return (
            <ReactCSSTransitionGroup transitionName="example"
                                     transitionEnterTimeout={5000}
                                     transitionLeaveTimeout={5000}
                                     transitionAppear={true}
                                     transitionAppearTimeout={1000}>
                {temp}
            </ReactCSSTransitionGroup>
        );
    }
});

module.exports = ButtonPanel;