import * as React from 'react';
// import { Form } from 'semantic-ui-react';
import * as styled from 'styled-components';
import { Input, Form, Icon, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import 'App.css';
const Bind = styled.default.div`
width: 100%;
height: 100%;
display: flex;
flex: 1 1 0%;
align-items: center;
justify-content: center;
font-size: 1.5em;
color: purple;
background: linear-gradient(154deg,#008fe2,#00b29c);
background-color: transparent !important;
  
`;
const FormPage = styled.default.div`
    width: 400px;
    position: absolute;
    top: 100px;
  
`;
const LoginFormButton = styled.default.div`
    width: 100px;
   
  
`;

export default class TypeDemoUsingStyled extends React.Component {
    state = {
        error: '',
        userName: '',
        password: '',
        form: {

        }
    };
    usernameChange = (e: string) => {
        let userName = e;
        this.setState({
            userName: userName
        });

    }
    passwordCahnge = (e: string) => {
        let password = e;
        this.setState({
            password: password
        });

    }
    onLogin = () => {
        let val = '';
        console.log('username  ' + this.state.userName + '   password  ' + this.state.password);
    }
    render() {

        return (
            <Bind>
                <FormPage>
                    <Form>
                        <FormItem>
                            <Input
                                placeholder="Enter Username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    usernameChange(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    passwordCahnge(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <LoginFormButton>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: '400px' }}
                                    onClick={this.onLogin}
                                >

                                    Log in
                                </Button>
                            </LoginFormButton>
                        </FormItem>
                    </Form>
                </FormPage>
            </Bind>
        );
    }
}
