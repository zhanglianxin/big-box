var React = require('react');


/**
 * 按钮面板
 */
var SharePanel = React.createClass({

	getInitialState: function () {
        return {
            percent:0
        };
    },

    componentDidMount: function() {

    	var dom = this.refs.domSpan;

    	//创建请求对象
        var oReq = new XMLHttpRequest();
        oReq.open("POST", "upload", true);

        //验证 CSRF 
        var metas = document.getElementsByTagName('meta'); 

        for (var i=0; i<metas.length; i++) { 
            if (metas[i].getAttribute("name") == "csrf-token") { 
                console.log(metas[i].getAttribute("content")); 
                oReq.setRequestHeader("X-CSRF-Token", 
                    metas[i].getAttribute("content"));
            } 
        }

        //上传后的回调函数
        var that=this;

        oReq.onload = function(oEvent) {
            
            if (oReq.status == 200) {
                var obj = JSON.parse(oReq.responseText);
                console.log(obj);

                var dom = that.refs.linkDownload;

                dom.setAttribute('href','/fetchcode/' + obj.fetchcode);
                dom.setAttribute('download','提取码：' + obj.fetchcode+"("+obj.filename+").txt");
                
                dom.click();
                that.props.callbackChangePanel(1);
            } 
            else {
                console.log("Error " );
            }
        };

        //上传进程
        oReq.upload.onprogress = function(pe) {
            if(pe.lengthComputable) {
                that.setState({
                	percent: Math.round(pe.loaded/pe.total*1000)/10});
            }
            else {
                that.setState({percent: 'Oops'}); 
            }
        };

        //开始上传
        oReq.send(this.props.formdata);
    },

    render:function() {

    	var styleSpan = {
            fontFamily: "幼圆",
            lineHeight: '240px',
            fontSize: '180px',
            marginLeft: '60px',
            color: "#4EAB4E"
        };

        return (
        	<div>
        		<a style={{display: 'none'}}
        			ref='linkDownload'
        		 	href="" 
        		 	download="" />

	            <span style={styleSpan} ref="domSpan">
	            	{this.state.percent}%
	            </span>
            </div>
        );
    }
});

module.exports = SharePanel;