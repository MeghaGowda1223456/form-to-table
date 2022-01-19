import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Login(props) {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setemailError] = useState(false);
  const [emailErrorEmpty, setemailErrorEmpty] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false);

  const login = (event) => {
    event.preventDefault();
    if (userDetails.password === "") {
      setPasswordErrorEmpty(true);
    }
    if (userDetails.email === "") {
      setemailErrorEmpty(true);
    }
    let mail = event.target.value;
    let pass = event.target.value;

    const filter =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

    var validPassReg =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

    if (
      userDetails.email &&
      userDetails.password &&
      !passwordError &&
      !emailError
    ) {
      //programatically navigate
      console.log("props", props);
      props.history.push("/home");
    } else {
      console.log("not valis");
    }
  };
  //method one

  //   const handleEmailChange = (event) => {
  //     console.log(event);
  //     console.log("name", event.target.name);
  //     console.log("value", event.target.value);
  //     //take a copy of the state
  //     const userDetailsCopy = { ...userDetails };
  //     userDetailsCopy.email = event.target.value;
  //     setuserDetails(userDetailsCopy);
  //   };
  //   const handlePasswordChange = (event) => {
  //     //take a copy of the state
  //     const userDetailsCopy = { ...userDetails };
  //     userDetailsCopy.password = event.target.value;
  //     setuserDetails(userDetailsCopy);
  //   };

  //method two

  const handleChange = (event) => {
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };
    console.log(userDetailsCopy, "userDetailsCopy");

    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };

  return (
    <div className="container">
    

      <form style={{marginLeft:"260px"}} className="box-2" onSubmit={login}>
        <div 
          className="login-form-container"
          style={{ padding:"px 20px 30px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Login Form</h1>
          <div
            style={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <input
              className="input-field"
              style={{}}
              value={userDetails.email}
              type="type"
              name="email"
              onChange={(event) => {
                handleChange(event);
                let mail = event.target.value;
                if (mail) {
                  setemailErrorEmpty(false);
                }

                const filter =
                  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

                if (filter.test(mail)) {
                  setemailError(false);
                } else {
                  setemailError(true);
                }
              }}
              placeholder="Enter mail"
            />{" "}
            {emailError && userDetails.email ? (
              <p
                style={{
                  color: "red",
                  fontSize: 12,
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                  marginLeft: 5,
                }}
              >
                mail is incorrect
              </p>
            ) : (
              emailErrorEmpty && (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,
                    textAlign: "left",
                    marginLeft: 5,
                  }}
                >
                  mail can't be empty
                </p>
              )
            )}
          </div>
          <div
            style={{
              width: 250,
              display: "flex",
              marginBottom: 30,
              flexDirection: "column", 
            }}
          >
            <input
              className="input-field"
              value={userDetails.password}
              name="password"
              type="password"
              onChange={(event) => {
                let pass = event.target.value;
                handleChange(event);
                if (pass) {
                  setPasswordErrorEmpty(false);
                }
                var validPassReg =
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

                if (!validPassReg.test(pass)) {
                  setPasswordError(true);
                } else {
                  setPasswordError(false);
                }
              }}
              placeholder="password"
            />
            {passwordError && userDetails.password ? (
              <p
                style={{
                  color: "red",
                  fontSize: 12,
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                  marginLeft: 5,
                }}
              >
                password is incorrect
              </p>
            ) : (
              passwordErrorEmpty && (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,
                    textAlign: "left",
                    marginLeft: 5,
                  }}
                >
                  password can't be empty
                </p>
              )
            )}{" "}
          </div>

          <div>
            <button type="submit" className="login-button">
              Login
            </button>
            <Link to="/register">Dont have an account Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
