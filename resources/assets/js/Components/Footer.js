import React, {Component} from 'react';

/**
 * 页脚信息
 */
class Footer extends Component {

    render() {

        let footer = {
            position: "absolute",
            bottom: "1%",
            left: "2%",
            color: "grey"
        };

        return (
            <div style={footer}>
                © 2016 | 济南第二监狱 | 文件分享系统
            </div>
        );
    }
}

export default Footer;