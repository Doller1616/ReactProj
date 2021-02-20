import * as React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './resources/login.css'

export class LoginPage extends React.Component {

    onPressLoginBtn = (e) => {
        e.preventDefault();
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="loginContainer">
                <CardBody>
                    <CardTitle tag="h5" className="loginTitle">Login to your account</CardTitle>
                    {/* Login Form */}
                    <div>
                        <Form className="loginForm" onSubmit={this.onPressLoginBtn}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="emailId"
                                    required={true}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pwd">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    required={true}
                                    id="pwdId"
                                />
                            </FormGroup>
                            <FormGroup className="reme4getPwd">
                            <div><input type="radio" name="radio1"/>&nbsp;
                            <span>Remember me</span></div>
                            <div className="forgetPwd">forgot password?</div>
                            </FormGroup>
                            <Button type="submit" className="loginBtn"> Login </Button>
                        </Form>
                    </div>
                </CardBody>
            </div>
        )
    }
}
