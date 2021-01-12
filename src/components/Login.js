import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";
// import { Link } from "react-router-dom";
import { Space, Input, Form, Button } from "antd";

export default function Login() {
  const location = useLocation();
  const [state, setState] = useState({
    userName: "",
    password: "",
    userEmail: "",
    birthday: "",
    address: {
      country: "",
      city: "",
      street: "",
      apartment: 0,
      zipCode: 0,
    },
  });

  const page = location.pathname.split("/")[2];
  // const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
  const [checkUser, saveUser] = useContext(UserContext);

  const onFinish = (values) => {
    console.log(page)
    if (page === "login") {
      setState({ userName: values.userName, password: values.password, userEmail: values.userEmail });
      checkUser(state);
      // isLoggedIn = true;
    }
    if (page === "register") {
      setState({
        userName: values.userName,
        password: values.password,
        userEmail: values.userEmail,
        birthday: values.birthday,
        address: {
          country: values.country,
          city: values.city,
          street: values.street,
          apartment: values.apartment,
          zipCode: values.zipCode,
        },
      });
      saveUser(state)
      // isLoggedIn = true;
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Form onFinish={onFinish}>
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="userEmail"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter your email",
              },
            ]}
          >
            <Input placeholder="E-Mail" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {page === "login" ? "Submit" : "Register"}
            </Button>
          </Form.Item>
        </Form>
      </Space>

      {/* <Paper elevation={0} square={true} style={{ width: "100vw", height: "100vh" }}>
          <Grid container justify="center" alignItems="center" direction="column">
            <Grid item>
              <Typography variant="h4" style={{ marginTop: 30, paddingTop: 100 }}>
                {page === "login" ? "LOGIN" : "SIGN UP"}
              </Typography>
            </Grid>
            <form className={classes.rootLanding} noValidate autoComplete="off">
              <Grid item>
                <TextField
                  className={classes.inputLanding}
                  id="standard-basic"
                  label="User Name"
                  color="secondary"
                  name="userName"
                  onChange={handleInput}
                  helperText={userMessage}
                  error={userMessage.length > 0}
                />
                <TextField
                  className={classes.inputLanding}
                  id="standard-password-input"
                  label="Password"
                  name="password"
                  type="password"
                  color="secondary"
                  onChange={handleInput}
                  helperText={passwordMessage}
                  error={passwordMessage.length > 0}
                />
                {page === "register" && (
                  <TextField
                    className={classes.inputLanding}
                    id="standard-basic"
                    name="email"
                    color="secondary"
                    label="Email"
                    type="email"
                    onChange={handleInput}
                    helperText={emailMessage}
                    error={emailMessage.length > 0}
                  />
                )}
              </Grid>
              <Grid item width={200}>
                <Button className={classes.buttonLanding} variant="contained" onClick={enterClicked} color="primary">
                  Enter
                </Button>
              </Grid>
              <Grid item>
                {page === "login" ? <LandingButton text={"SIGN UP"} to={"/auth/register"} /> : <LandingButton text={"LOGIN"} to={"/auth/login"} />}
              </Grid>
              <Grid item>
                <Typography color="secondary">
                  <Link to="/dashboard" style={{ textDecoration: "none", color: "#9f66b7" }}>
                    Skip
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" color="error">
                  {serverMessage}
                </Typography>
              </Grid>
            </form>
          </Grid>
        </Paper> */}
    </div>
  );
}
