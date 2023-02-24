import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    work: "",
  });

  let name, value;
  const userHandle = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword, work } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("Please Enter Valid Details");
    } else {
      alert("Registration Successfull!");
      navigate("/login");
    }
  };

  return (
    <form className="container w-75" onSubmit={postData}>
      <h2 className="text-center my-3">Register</h2>
      <div className="card p-3">
        <div className="mb-2">
          <label forhtml="name" className="form-label">
            Name{" "}
          </label>
          <input
          required={true}
            type="text"
            value={user.name}
            onChange={userHandle}
            name="name"
            className="form-control"
            id="text"
          />
        </div>
        <div className="mb-2">
          <label forhtml="exampleInputEmail1" className="form-label">
            Phone No
          </label>
          <input
          required={true}
            type="text"
            value={user.phone}
            onChange={userHandle}
            name="phone"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label forhtml="exampleInputEmail1" className="form-label">
            Email Adress
          </label>
          <input
          required={true}
            type="email"
            value={user.email}
            onChange={userHandle}
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label forhtml="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          required={true}
            type="password"
            value={user.password}
            onChange={userHandle}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-2">
          <label forhtml="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
          required={true}
            type="password"
            value={user.cpassword}
            onChange={userHandle}
            name="cpassword"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-2">
          <label forhtml="exampleInputPassword1" className="form-label">
            Designation
          </label>
          <input
          required={true}
            type="text"
            value={user.work}
            onChange={userHandle}
            name="work"
            className="form-control"
            id="text"
          />
        </div>

        <button type="submit" name="signup" className="btn btn-primary w-100">
          Submit
        </button>
        <Link
          to="/login"
          className="text-center mt-2"
          style={{ textDecoration: "none" }}
        >
          <span>already have an account?</span>
        </Link>
      </div>
    </form>
  );
}

export default Signup;
