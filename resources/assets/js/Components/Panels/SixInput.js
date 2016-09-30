var React = require('react');
import Input from './Input'

/**
 * 获取面板
 */
var SixInput = React.createClass({

    getInitialState: function () {
        return {
            numbers: ["", "", "", "", "", ""],
            current:0
        };
    },

    refresh: function(){
        this.setState({
                numbers: this.state.numbers,
                current:this.state.current
            });
    },

    setCurrentValue: function(value){
        var curr = this.state.current;
        var curr_value = this.state.numbers[curr]

        //当前值为空才能进格
        //否则是最后一个值，不做任何处理
        if(curr_value == ''){
            this.state.numbers[curr] = value;

            curr=curr+1;

            var bEnd=false;

            if(curr>5){
                curr=5;
                bEnd=true;
            }

            this.setState({
                numbers: this.state.numbers,
                current:curr
            });

            if(bEnd){
                var fetchcode = this.state.numbers.join("");
                console.log(fetchcode);

                var oReq = new XMLHttpRequest();
                oReq.open("GET", "/fileinfo/" + fetchcode, true);


                //上传后的回调函数
                var that=this;

                oReq.onload = function(oEvent) {

                    if (oReq.status == 200) {
                        var dom = that.refs.linkDownload;
                        dom.setAttribute('href','/fetchfile/' + fetchcode);
                        dom.click();
                        that.props.callbackChangePanel(1);
                    }
                    else {
                        console.log("Error " );
                    }
                };

                oReq.send();
            }
        }
    },

    backspace: function(){

        var curr = this.state.current;
        var value = this.state.numbers[curr]

        //当前值为空才能退格
        //否则可能是最后一个值，只删除值，不退格
        if(value == ''){
            curr=curr-1;
            if(curr<0)
                curr=0;
        }

        this.state.numbers[curr] = '';

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
                    isCurrent={this.state.current==index}
                    callbackBackspace={this.backspace}
                    callbackSetCurrentValue = {this.setCurrentValue}
                    callbackRefresh = {this.refresh}
            />)
        );

        return (
            <div style={{marginTop:"30px"}}>
                <a style={{display: 'none'}}
                   ref='linkDownload'
                   href="" />

                {temp}
            </div>
        );
    }
});

module.exports = SixInput;