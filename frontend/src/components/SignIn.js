import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        navigateToMatch();
    };
    

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    const navigateToMatch = () => {
        navigate('/profile')
    };

    return (
        <div className="welcome-back">
            <div className="welcome-back-container">
                <div className="welcome-back-title">Welcome Back to MingleMakan!</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        className="form-item"
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                        className="form-item"
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item className="form-item">
                        <Button type="primary" htmlType="submit" className="form-button">
                            Login
                        </Button>
                    </Form.Item>
                    <div className="signup-segment">
                        Don't have an account? <span onClick={navigateToSignUp} className="signup-link">Sign Up</span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
