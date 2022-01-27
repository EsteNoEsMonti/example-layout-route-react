import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import styles from "./styles.module.css";
import UserActionButton from "components/UserActionsButton/UserActionButton";
import logoHeader from 'assets/images/logo-header.png';
import LandingFooter from "components/Landing/LandingFooter/LandingFooter";

export const PrivateLayoutPage = ({ history, children, user }) => {
    const { Header, Sider, Content, Footer } = Layout;

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout
                className={styles.siteLayout}
            >
                <Header
                    style={{height:'100%'}}
                >
                    <a onClick={()=>history.push('/')} className={styles.logo}>
                        <img src={logoHeader} alt="logo-catamarca" width="100%" height="100%" />    
                    </a>
                    <UserActionButton
                        history={history}
                    ></UserActionButton>     
                </Header>
                <Content
                    className={styles.siteLayoutBackground}
                    style={{
                        minHeight: "auto",
                    }}
                >
                    {children}
                </Content>
                <LandingFooter />
            </Layout>
        </Layout>
    );
};
