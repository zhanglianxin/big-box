var React = require('react');
import Input from './Input'

/**
 * 获取面板
 */
var SixInput = React.createClass({

    getInitialState: function () {
        return {
            numbers: [0, 1, 2, 3, "", ""],
            current:2
        };
    },

    changeCurrent: function(curr){
      this.setState({
          numbers: this.state.numbers,
          current:curr
      });

    },



    render: function () {

        var temp = this.state.numbers.map((value, index, array) =>
            (<Input key={index}
                    number={value}
                    index={index}
                    focus={index==this.state.current}
                    callbackChangeCurrent={this.changeCurrent}

            />)
        );

        return (
            <span>
                {temp}
            </span>

        );
    }
});

module.exports = SixInput;