import React from 'react';
import {Layout} from 'antd';
import LandingFooter from 'components/Landing/LandingFooter/LandingFooter';
import LandingHeader from 'components/Landing/LandingHeader/LandingHeader';

const { Content } = Layout;

const PublicLayoutPage = ({ children }) => {
    return (
        <Layout>
            <LandingHeader />
                <Content>
                    { children }
                </Content>
            <LandingFooter />
        </Layout>
    )
}

export default PublicLayoutPage
