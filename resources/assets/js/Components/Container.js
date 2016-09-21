import React, {Component} from 'react';

import Title from './Title';
import ButtonPanel from './Panels/ButtonPanel';


/**
 * 住显示区的容器，由标题和面板组成，面板是可变的，有三种面板
 * 按钮面板：有获取和分享两个按钮
 * 获取面板：有一个提取码的输入框
 * 分享面板：还没有具体设计
 */
class Container extends Component {


    render() {
        //标题和面板的容器，样式主要是进行了定位
        let container = {
            position: 'absolute',
            top: '10%',
            left: '2%'
        };

        return (
            <div style={container}>
                <Title />
                <ButtonPanel/>
            </div>
        );
    }
}

export default Container;
