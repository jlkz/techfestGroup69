import React from 'react';
import SignIn from '../components/SignIn';
import { Layout } from 'antd';

const { Content } = Layout;

const SignInPage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center' }}>Sign In</h2>
                    <SignIn />
                </div>
            </Content>
        </Layout>
    );
};

export default SignInPage;
