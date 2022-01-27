import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const LandingFooter = () => {

    const { Footer } = Layout;

    return (
        <Footer
            style={{ textAlign: 'center',  backgroundColor: '#fcfcfc'  }}
        >
            <div className="foot">
                <p style={{ fontSize: 15}}>
                     <b>Ministerio de Planificación y Modernización</b> | 
                     Secretaría de Modernización del Estado | 
                     <i> Dirección Provincial de Sistemas y Simplificación Administrativa</i>
                </p>
            </div>
        </Footer>
    );
};

export default LandingFooter;