import React, { useEffect, useState } from "react";
import Footer from './Footer';
import Errror from "./Errror";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// importing images/png
import Brazil from "./Assets/Brazil.png"
import Russia from "./Assets/Russia.png"
import India from "./Assets/India.png"
import China from "./Assets/China.svg.webp"
import SouthAfrica from "./Assets/SouthAfrica.png"
import Egypt from "./Assets/Egypt.png"
import Ethiopia from "./Assets/Ethiopia.png"
import Iran from "./Assets/Iran.svg"
import UAE from "./Assets/UAE.png"
// importing finished
const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const navigate = useNavigate();
  const loginData = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    navigate("/");
  };

  useEffect(() => {
    loginData();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        <Errror />
      ) : (
        <>
          <div className={"bg-dark text-white p-3 mb-4 d-flex justify-content-between"}><h5>Welcome {logindata[0].name}</h5><Button onClick={userlogout}>LogOut</Button></div>
          <h3 className=" fw-lighter">BRICS : Member states</h3>
          {/* Table details Start */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Country</th>
                <th>Capital</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={Brazil}
                    alt="Iran"
                  ></img>
                </td>
                <td>Brazil</td>
                <td>Brasília</td>
                <td>Brazilian real (R$) (BRL)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={Russia}
                    alt="Russia"
                  ></img>
                </td>
                <td>Russia</td>
                <td>Moscow</td>
                <td>Russian rouble (₽) (RUB)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={India}
                    alt="India"
                  ></img>
                </td>
                <td>India</td>
                <td>New Delhi</td>
                <td>Indian rupee (₹) (INR)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={China}
                    alt="China"
                  ></img>
                </td>
                <td>China</td>
                <td>Beijing</td>
                <td>Renminbi (Chinese yuan, ¥) (CNY)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={SouthAfrica}
                    alt="SouthAfrica"
                  ></img>
                </td>
                <td>South Africa</td>
                <td>Pretoria</td>
                <td>South African rand (R) (ZAR)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={Egypt}
                    alt="Egypt"
                  ></img>
                </td>
                <td>Egypt</td>
                <td>Cairo</td>
                <td>Egyptian pound (LE) (EGP)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={Ethiopia}
                    alt="Ethiopia"
                  ></img>
                </td>
                <td>Ethiopia</td>
                <td>Addis Ababa</td>
                <td>Ethiopian birr (BR) (ETB)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={Iran}
                    alt="Iran"
                  ></img>
                </td>
                <td>Iran</td>
                <td>Tehran</td>
                <td>Iranian rial (Rl) (IRR)</td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "55px", height: "30px" }}
                    src={UAE}
                    alt="United Arab Emirates"
                  ></img>
                </td>
                <td>United Arab Emirates</td>
                <td>Abu Dhabi</td>
                <td>UAE dirham (AED)</td>
              </tr>
            </tbody>
          </Table>
          {/* Table details Start End */}
        </>
      )}
      <Footer/>
    </>
    
  );
};

export default Details;
