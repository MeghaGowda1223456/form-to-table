import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "orange",
            
          }}
        >
          <div>
            <p
              style={{
               
              }}
            >
              <i style={{fontSize:"40px" , color:"white"  ,marginLeft:"50px", marginTop:"10px"}} class="fab fa-pied-piper-pp"></i>
            </p>
          </div>
          <nav
            style={{ 

              width: "30%",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link style={{ color: "white", textDecoration: "none", marginRight:"100px" }} to="/home">
              Home
            </Link>
            <Link style={{ color: "white", textDecoration: "none" ,marginRight:"100px"  }} to="/login">
              Login
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none" ,marginRight:"90px" }}
              to="/register"
            >
              Register
            </Link>
          </nav>
        </div>


        <div>
          <Route
            path="/home"
            render={(props) => {
              return <Home userName="sachin" />;
            }}
          />
          
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    </Router>
  );
}

export default App;
