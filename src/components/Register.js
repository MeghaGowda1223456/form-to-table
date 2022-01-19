import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableData from "./TableData";

function Register() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const [gender, setGender] = useState("");
  const [date, setdate] = useState("");
  const [validdate, setvaliddate] = useState(false);

  const [nameerror, setnameerror] = useState(false);
  const [lnameerror, setlnameerror] = useState(false);

  const [genderError, setGenderError] = useState(false);
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setemailError] = useState(false);
  const [emailErrorEmpty, setemailErrorEmpty] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false);
  const [confirmPass, setconfirmPass] = useState("");
  const [number, setnumber] = useState("");
  const [numerror, setnumerror] = useState(false);
  const [tableData, setTableData] = useState([]);

  const onClick = (event) => {
    event.preventDefault();

    if (fname && lname && userDetails.email && date && gender) {
      setTableData([
        ...tableData,
        { fname: fname, lname: lname, gender: gender, mail: userDetails.email },
      ]);

      setfname("");
      setlname("");
      setdate("");
      setGender("");
      setuserDetails({
        password: "",
        email: "",
      });

      setconfirmPass("");
    }

    // if(date===""){
    //   setvaliddate(true)
    // }

    if (fname === "") {
      setnameerror(true);
    }
    if (number === "") {
      setnumerror(true);
    }

    if (date === "") {
      setvaliddate(true);
    } else setvaliddate(false);

    if (lname === "") {
      setlnameerror(true);
    }

    if (gender === "") {
      setGenderError(true);
    } else setGenderError(false);
    if (userDetails.password === "") {
      setPasswordErrorEmpty(true);
    }
    if (userDetails.email === "") {
      setemailErrorEmpty(true);
    }
  };

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };
    console.log(userDetailsCopy, "userDetailsCopy");

    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };

  // const confirmPassword = (event) => {
  //   console.log(event);
  //   console.log(event.target.name);

  //   const confirmPassCopy = { ...confirmPass };
  //   console.log(confirmPassCopy);
  //   confirmPassCopy[event.target.name] = event.target.value;
  //   setconfirmPass(confirmPassCopy);
  //   console.log(setconfirmPass);
  // };

  //const handleEmailChange = (event) => {
  //     console.log(event);
  //     console.log("name", event.target.name);
  //     console.log("value", event.target.value);
  //     //take a copy of the state
  //     const userDetailsCopy = { ...userDetails };
  //     userDetailsCopy.email = event.target.value;
  //     setuserDetails(userDetailsCopy);
  //   };

  return (
    <div
      style={{
        display: "flex",
        paddingRight: "200px",
        paddingLeft: "100px",
      }}
    >
      <div className="register_body">
        <div className="container1">
          <div className="title">Registration Form</div>
          <div className="content">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>

                <input
                  value={fname}
                  placeholder="Firtsname"
                  type="text"
                  onChange={(event) => {
                    // confirmPassword();
                    setfname(event.target.value);
                    const expr = /^[a-zA-Z_]{3,15}$/;
                    if (!expr.test(fname)) {
                      setnameerror(true);
                    } else {
                      setnameerror(false);
                    }
                  }}
                />
                {nameerror ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Firstname is not valid
                  </p>
                ) : null}
              </div>
              <div className="input-box">
                <span className="details">Lastname</span>

                <input
                  value={lname}
                  placeholder="Lastsname"
                  type="text"
                  onChange={(event) => {
                    // confirmPassword();
                    setlname(event.target.value);
                    const expr = /^[a-zA-Z_]{3,15}$/;
                    if (!expr.test(lname)) {
                      setlnameerror(true);
                    } else {
                      setlnameerror(false);
                    }
                  }}
                />
                {lnameerror ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      margin: 0,
                      textAlign: "left",
                    }}
                  >
                    Lastame is not valid
                  </p>
                ) : null}
              </div>

              <div className="input-box">
                <span className="details">DOB</span>

                <input
                  value={date}
                  type="date"
                  onChange={(event) => {
                    setdate(event.target.value);
                    setvaliddate(false);
                  }}
                />
                {validdate ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      margin: 0,

                      textAlign: "left",
                    }}
                  >
                    Enter DOB
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* <div>
        <input
          type="text"
          onChange={(event) => {
            setnumber(event.target.value);
            var pattern = new RegExp("([^\d])\d{10}([^\d])");
            if (!pattern.test(number)) {
              setnumerror(true);
            } else {
              setnumerror(false);
            }
          }}
        />
        {numerror ? (
          <p style={{ color: "red", fontSize: 12, padding: 0, margin: 0 }}>
           cannot be empty and should contain 10 digits
          </p>
        ) : (
          ""
        )}
      </div> */}

              <div className="input-box">
                <span className="details">Email</span>
                <input
                  value={userDetails.email}
                  type="text"
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
                    }}
                  >
                    mail is incorrect
                  </p>
                ) : emailErrorEmpty ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      margin: 0,

                      textAlign: "left",
                    }}
                  >
                    Mail can't be empty
                  </p>
                ) : null}
              </div>
              <div className="input-box" style={{}}>
                <span className="details">Password</span>

                <input
                  value={userDetails.password}
                  name="password"
                  type="password"
                  onChange={(event) => {
                    let pass = event.target.value;
                    handleChange(event);
                    let validPassReg =
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,16}/;

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
                    }}
                  >
                    Password is incorrect
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
                      }}
                    >
                      Password can't be empty
                    </p>
                  )
                )}
              </div>
              <div className="input-box">
                {/* <input
          value={userDetails.password}
          name="password"
          type="password"
          onChange={(event) => {
            let pass = event.target.value;
            handleChange(event);
             validPassReg =
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

            if (!validPassReg.test(pass)) {
              setPasswordError(true);
            } else {
              setPasswordError(false);
            }
          }}
          placeholder="password"
          style={{
            marginTop: 20,
            minWidth: 300,
            maxWidth: 450,
            height: 30,
            borderRadius: 4,
            outline: "none",
            border: "0.5px solid grey",
            paddingLeft: 10,
          }}
        /> */}
                <span className="details">Confirm Password</span>

                <input
                  value={confirmPass}
                  placeholder="confirm password"
                  name="confpass"
                  type="password"
                  onChange={(event) => {
                    // confirmPassword();
                    setconfirmPass(event.target.value);
                  }}
                />

                {confirmPass && confirmPass !== userDetails.password ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      margin: 0,

                      textAlign: "left",
                    }}
                  >
                    Password is not matching
                  </p>
                ) : null}
              </div>
            </div>

            <div className="gender-details">
              <input
                value={gender}
                // style="outline: 1px solid #ab1a23"
                className="form-check-input"
                type="radio"
                value="male"
                id="dot-1"
                name="inlineRadioOptions"
                onChange={(event) => {
                  setGender(event.target.value);
                  setGenderError(false);
                }}
              />

              <input
                value={gender}
                // style="outline: 1px solid #ab1a23"
                className="form-check-input"
                type="radio"
                value="Female"
                id="dot-2"
                name="inlineRadioOptions"
                onChange={(event) => {
                  setGender(event.target.value);
                  setGenderError(false);
                }}
              />

              <input
                value={gender}
                // style="outline: 1px solid #ab1a23"
                className="form-check-input"
                type="radio"
                id="dot-3"
                name="inlineRadioOptions"
                value="Other"
                onChange={(event) => {
                  setGender(event.target.value);
                  setGenderError(false);
                }}
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontWeight: "500",
                  marginBottom: "5px",

                  textAlign: "left",
                }}
                className="gender-title"
              >
                Gender
              </span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Other</span>
                </label>
              </div>
            </div>

            {genderError ? (
              <p
                style={{
                  textAlign: "left",

                  color: "red",
                  fontSize: 12,
                  padding: 0,
                  margin: 0,
                }}
              >
                please select gender
              </p>
            ) : (
              ""
            )}

            <button
              className="Register_button"
              style={{
                marginTop: 20,
              }}
              onClick={onClick}
            >
              Submit
            </button>
          </div>{" "}
          Already have an account ?
          <Link style={{ textDecoration: "none" }} to="/login">
            Login here!
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        {tableData.length > 0 ? <TableData data={tableData} /> : ""}
      </div>
    </div>
  );
}

export default Register;
