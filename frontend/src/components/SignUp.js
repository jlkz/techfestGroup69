import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                navigateToSignIn();
            }
        } catch (error) {
            console.log(error)
        }
    };
    

    
    const navigateToSignIn = () => {
        navigate('/signin'); 
    };

    


    return (
        <div className="welcome-back">
            <div className="welcome-back-container">
                <div className="welcome-back-title">Create an account</div>
                <Form
                    name="register"
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
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        className="form-item"
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                        className="form-item"
                    >
                        <Input.Password placeholder="Confirm your password" />
                    </Form.Item>
                    <Form.Item className="form-item">
                        <Button type="primary" htmlType="submit" className="form-button">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
                <div className="signup-segment">
                    Already have an account? <span onClick={navigateToSignIn} className="signup-link">Sign In</span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
