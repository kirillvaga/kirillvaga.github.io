import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterSection = () => {
    return (
        <Footer style={{ textAlign: 'center', background: '#333333', color: '#979797' }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
    );
}

export default FooterSection;