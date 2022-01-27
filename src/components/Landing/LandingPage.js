import React from 'react'
import { Layout } from 'antd';
import Portada from 'components/Portada/Portada';
import LandingHeader from 'components/Landing/LandingHeader/LandingHeader';
import LandingFooter from 'components/Landing/LandingFooter/LandingFooter';

const LandingPage = () => {
    return (
        <>
            <Layout>
                <LandingHeader />
                <Portada />
                <LandingFooter />
            </Layout>
        </>
    );
};

export default LandingPage;

