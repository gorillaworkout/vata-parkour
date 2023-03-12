import React, { useState, useEffect } from "react";
import "../Style/Telkom.scss";
import telkom from "../Asset/telkom.png";
import logoTelkom from "../Asset/logo-telkom.png";
import Axios from "axios";
const Telkom = () => {
  const [dataFetching, setDataFetching] = useState([]);
  const fetchData = () => {
    Axios.get(`https://queserasera.my.id/motio-interview-3426635/json/2.json`)
      .then((res) => {
        setDataFetching(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(dataFetching);
  }, [dataFetching]);

  useEffect(() => {
    fetchData();
  }, []);
  const [dataCust, setDataCust] = useState({
    name: "",
    password: "",
  });

  const onChangeUsername = (value) => {
    console.log(value);
    setDataCust({ ...dataCust, name: value });
  };
  const onChangePassword = (value) => {
    setDataCust({ ...dataCust, password: value });
  };
  const onLogin = () => {
    console.log("on login");
    console.log(dataCust);
  };
  return (
    <div className="container-telkom">
      <div
        className="container-left"
        style={{ background: `${dataFetching?.background_primary}` }}
      >
        <div className="container-card">
          <img src={dataFetching?.logo_image} alt="" />
          <p id="welcome">{dataFetching?.title_text}</p>
          <p>Please login using Single Sign On</p>
          <div className="form-input">
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </div>
          <div className="form-input">
            <p>Password</p>
            <input
              type="text"
              onChange={(e) => onChangePassword(e.target.value)}
            />
          </div>
          <div className="container-btn">
            <div className="btn-signin" onClick={onLogin}>
              <p>Sign In</p>
            </div>
            <div className="forgot-create">
              <p>Forgot Password?</p>
              <p>
                New Here? <span>Create an Account</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <p>Terms</p>
          <p>Location</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="container-right">
        <img src={dataFetching?.main_image} alt="" />
      </div>
    </div>
  );
};

export default Telkom;
