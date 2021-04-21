import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Input, Spinner } from "reactstrap";
import { Button, Divider } from "antd";
import { 
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Logo from "../../assets/logo.png";
import { AppleFilled } from "@ant-design/icons";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/actions_authentication";

const Login = () => {
  const dispatch = useDispatch();
  const account = useSelector(state => state.authentication);
  const [ values, setValues ] = useState({ email: "", password: "" });
  const [ errors, setErrors ] = useState([]);
  
  const { email, password } = values;

  useEffect(() => {
    document.title = "Login";
  }, [])

  useEffect(() => {
    if (account.error && Array.isArray(account.error)) {
      setErrors(account.error);
    }
  }, [ account ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors("");
    setValues({ ...values, [name]: value });
  }

  const handleLogin = () => {
    setErrors("");
    const data = { username: email, password };
    dispatch(login(data));
  }

  useEffect(() => {
    if (account.login_success) {
      window.location.href="/dashboard";
    }
  }, [ account ]);

  return (
    <div className="reg-container">
      <Row className="justify-content-center">
        <Col xs="11" xl="3">
          <div className="text-center mb-4">
            <img src={Logo} alt="site-logo" />
          </div>
          <Card>
            <CardBody>
              <GoogleLoginButton className="google-button" onClick={() => alert("Hello")} />
              <FacebookLoginButton className="facebook-button" onClick={() => alert("Hello")} />
              <Button className="apple-button"><AppleFilled className="icon" /> Continue with Apple</Button>
              <Divider>Or</Divider>
              
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="email">Email Address</label>
                  <Input value={email} autoFocus onChange={(e) => handleChange(e)} id="email" name="email" type="email" className="form-control" placeholder="example@mail.com" />
                  {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "username" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px" }}>{error.message}</span> <br /></>) : null): null}
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="password">Password</label> <span className="forgot-password">Forgot password?</span>
                  <Input value={password} onChange={(e) => handleChange(e)} name="password" id="password" type="password" className="form-control" placeholder="********" />
                  {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "password" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px" }}>{error.message}</span> <br /></>) : null): null}
                </Col>
              </Row>
              <Row>
                <Col xs="12" xl="12">
                {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.message && error.message.includes("Error") ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px" }}>{error.message}</span> <br /></>) : null): null}
                
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button onClick={handleLogin} className="signup-button">
                    {account.login_loading === true ? <span>Please wait... <Spinner style={{ color: "#F05366"}} /></span>: "Sign in"}
                  </Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button onClick={() => window.location.href="/"} className="signin-button">sign up</Button>
                </Col>
              </Row>
              <p className="mt-4 mb-4">By signin up, you agree to our <span className="terms">Terms of use</span> & <span className="terms">Privacy Policy</span></p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;