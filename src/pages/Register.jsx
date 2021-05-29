import { navigate } from "@reach/router";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { apiRegister } from "../api/login";
import Button from "../components/core/Button";
import CreateSuccessModal from "../components/core/CreateSuccessModal";
import Input from "../components/core/Input";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [other, setOther] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    if (password === c_password) {
      const data = {
        username: username,
        password: password,
        student_id: username,
        f_name: fname,
        l_name: lname,
        faculty: faculty,
        department: department,
        mobile_no: mobileNo,
        email: email,
        other_contact: other,
      };
      console.log(data);
      try {
        const result = await apiRegister(data);
        if (result.status === 200) {
          setSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <CreateSuccessModal open={success} />
      <Helmet>
        <title>MODBIKE</title>
      </Helmet>
      <div className="flex flex-1 overflow-auto align-middle min-h-screen px-5">
        <div
          className="w-0 lg:w-2/3"
          style={{
            backgroundImage: `url('/image/LoginWallpaper.png')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full lg:w-1/3 my-auto py-5">
          <h5 className="text-center mod-bike-home">CREATE AN ACCOUNT</h5>
          <div className="my-2">
            <Input
              type="text"
              className="form-control"
              placeholder="Username"
              label="Student ID"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="password"
              className="form-control"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              className="form-control"
              label="Confirm Password"
              onChange={(e) => setC_password(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="First name"
              onChange={(e) => setFname(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="Faculty"
              onChange={(e) => setFaculty(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="Department"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="Telephone No."
              onChange={(e) => setMobileNo(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              className="form-control"
              label="Other contact"
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
          <Button text="Create Account" onClick={() => handleRegister()} />
        </div>
      </div>
    </div>
  );
}
