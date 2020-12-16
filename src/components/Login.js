import React, { useState } from "react";
// import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd'

export default function Login() {
  // const location = useLocation();
  const [state, setState] = useState({
    userName: "",
    password: "",
    userEmail: "",
    birthday: "",
    address: "",
  });
  const [messageState, setMessageState] = useState({
    userMessage: "user name needs to be more then 3 letters", 
    passwordMessage: "password needs to be more then 3 letters", 
    emailMessage: "email needs to be more then 6 letters",

  })
  return (<div>
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


