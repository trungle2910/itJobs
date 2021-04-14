import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    console.log(isAuthenticated);
    history.push("/");
  };

  return (
    <>
      <div className="login">
        <Form>
          <h1 style={{ color: "olivedrab" }}>SIGN TO SEE MORE DETAIL</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              // onChange={inputUser}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              // onChange={inputPwd}
            />
          </Form.Group>
        </Form>
        <Button class="btn btn-success" onClick={handleSubmit}>
          Login Now
        </Button>
      </div>
    </>
  );
};

export default Login;
