import React from 'react';
import SignUp from '../components/SignUp';
import { Layout } from 'antd';

const { Content } = Layout;

const SignUpPage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                    <SignUp />
                </div>
            </Content>
        </Layout>
    );
};

export default SignUpPage;
