import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, CardBody, Form, Spinner } from "reactstrap";
import { Input, Select } from "semantic-ui-react";
import { Button, Divider } from "antd";
import { 
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Logo from "../../assets/logo.png";
import "./Registration.css";
import { AppleFilled } from "@ant-design/icons";
import { registration } from "../../store/actions/actions_authentication";
import countryTelData from 'country-telephone-data';
import { useEffect } from "react";
import Auth from "../../helper/Auth";

const Registration = () => {
  const account = useSelector(state =>  state.authentication);
  const dispatch = useDispatch();
  const [ fullName, setFullname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ errors, setErrors ] = useState([]);
  const [ code, setCode ] = useState("");
  const [ countryCode, setCountryCode ] = useState([]);
  const [ country, setCountry ] = useState("");

  const handleSubmit = () => {
    const data = {
      country,
      email,
      fullName,
      phone: {
        code,
        number: phone
      },
      password
    }
    
    dispatch(registration(data));
  }

  useEffect(() => {
    document.title = "Registration";
    setCountryCode(countryTelData.allCountries)
  }, []);

  const options = countryCode && countryCode.map((code, i) => ({ key: i, text: `+${code.dialCode}`, value: `+${code.dialCode}` }))
  
  const handleCode = (e) => {
    setErrors("")
    setCode(e.target.innerText);
  }

  useEffect(() => {
    if (code && code.length) {
      countryCode.forEach(elem => {
        if (elem.dialCode === code.slice(1)) {
          setCountry(elem.name);
        }
      });
    }
  }, [ code, countryCode ]);

  useEffect(() => {
    if (account.error && Array.isArray(account.error)) {
      
      setErrors(account.error);
    }
  }, [ account ]);

  const handleEmail = (e) => {
    setErrors("");
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setErrors("");
    setPassword(e.target.value);
  }

  const handlePhone = (e) => {
    setErrors("");
    setPhone(e.target.value);
  }

  const handleName = (e) => {
    setErrors("");
    setFullname(e.target.value);
  }

  useEffect(() => {
    if (account.success) {
      if (Auth.isUserAuthenticated()) {
        window.location.href="/plans";
      }
    }
  }, [ account ]);
  
  console.log(countryCode, " the country code");
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
              <Form onSubmit={() => handleSubmit()}>
                <Row className="mt-4">
                  <Col xs="12" xl="12">
                    <label htmlFor="name">Full Name</label>
                    <Input type='text' placeholder="Full Name" value={fullName} onChange={(e) => handleName(e)} id="name">
                      <input />
                    </Input>
                    {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "fullName" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px", marginLeft: "20px" }}>{error.message}</span> <br /></>) : null): null}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" xl="12">
                    <label htmlFor="phone">Phone Number</label>
                    <Input id="country-code" type='text' placeholder='Phone Number'>
                      <Select onChange={(e) => handleCode(e)} compact options={options} defaultValue="+254" />
                      <input value={phone} onChange={(e) => handlePhone(e)} />
                    </Input>
                    {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "phone" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px", marginLeft: "20px" }}>{error.message}</span> <br /></>) : null): null}
                    {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "code" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px", marginLeft: "20px" }}>{error.message}</span> <br /></>) : null): null}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" xl="12">
                    <label htmlFor="email">Email Address</label>
                    <Input placeholder="example@mail.com" value={email} onChange={(e) => handleEmail(e)} id="email" type="email">
                      <input />
                    </Input>
                    {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "email" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px", marginLeft: "20px" }}>{error.message}</span> <br /></>) : null): null}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" xl="12">
                    <label htmlFor="password">Password</label>
                    <Input value={password} onChange={(e) => handlePassword(e)} id="password" type="password" placeholder="********">
                      <input />
                    </Input>
                    {Array.isArray(errors) && errors.length > 0 ? errors.map((error, i) => error.key === "password" ? 
                    (<><span key={i} style={{ color: "#ff0000", fontSize: "12px", marginLeft: "20px" }}>{error.message}</span> <br /></>) : null): null}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs="12" xl="12">
                    {account.loading ? (
                      <Button className="signup-button">Please wait... <Spinner /></Button>
                    ) : <Button className="signup-button" onClick={handleSubmit}>sign up</Button>}
                    
                  </Col>
                </Row>
              </Form>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button onClick={() => window.location.href="/login"} className="signin-button">sign in</Button>
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

export default Registration;