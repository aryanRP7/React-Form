import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error("Name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter valid email address", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("DOB field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length should be greater five", {
        position: "top-center",
      });
    } else {
      console.log("Data added succesfully");
      history("/login");
      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{backgroundColor:"#F8F6E3", height:"100vh"}}>

      <div className="container p-3" >
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100vh",backgroundColor:"#71C9CE",boxShadow: "1px 1px 5px 19px rgba(0, 0, 0, 0.2)" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-9 d-flex" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
                <p style={{fontWeight:"lighter"}}>(DOB)</p>
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-8"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          {/* <Side /> */}
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
