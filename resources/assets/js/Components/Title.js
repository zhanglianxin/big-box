import React, {Component} from 'react';

/**
 * 主标题
 */
class Title extends Component {

    render() {

        //标题和面板的容器，样式主要是进行了定位
        let title = {
            color: '#f0f0f0',
            fontFamily: "幼圆",
            fontWeight: 900,
            letterSpacing: '6px',
            lineHeight: '120px',
            fontSize: '120px'
        };

        return (
            <div style={title}>
                BLACK BOX
            </div>
        );
    }
}

export default Title;