import React from 'react';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
import styles from 'components/Landing/styles.module.css';
import logoHeader from 'assets/images/logo-header.png'
import UserActionButton from 'components/UserActionsButton/UserActionButton';

const LandingHeader = () => {
    const { Header } = Layout;
    const history = useHistory();

    return (
        <Header style={{height:'100%'}}>
            <Row justify="space-between">
                <Col xs={{offset:4}} sm={{offset:0}} md={{offset:0}} lg={{offset:0}} xl={{offset:0}} className={styles.logo}>
                    <a onClick={()=>history.push('/')} >
                        <img src={logoHeader} alt="logo-catamarca" width="100%" height="100%" />    
                    </a>
                </Col>
                <Col xs={{ span:24 }} sm={{ span:24 }} md={{ span:12 }} lg={{ span:12 }} xl={{ span:8 }} className={styles.action}>
                    <UserActionButton history={ history } theme='dark' empresaBtn={true}></UserActionButton>
                </Col>
            </Row>
            
        </Header>
    );
}

export default LandingHeader;