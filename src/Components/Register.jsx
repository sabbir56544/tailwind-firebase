import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { auth } from "../firbase";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const changeUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  let history = useHistory();
  const onSubmit = async (e) => {
      e.preventDefault();

      if (user.name === "" || user.email === "" || user.password === "" || user.confirmPassword === "") {
        alert("Please fill all the fields");
      } else if (user.password !== user.confirmPassword) {
        alert("Password does not match");
      }else{
        try{
            // user create using firebase
            const result = await auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
            alert("Signup Successful");
            history.push("/login");
        }catch(error){
            alert("Signup Failed");
        }

        setUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
      }
  }
  return (
    <div>
      <div className="container py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">create an acocunt</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Register here if you don't have account
          </p>
          <form action="" method="post">
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input-box"
                  placeholder="John Doe"
                  value={user.name}
                  onChange={changeUser}
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input-box"
                  placeholder="example@mail.com"
                  value={user.email}
                  onChange={changeUser}
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Password <span className="text-primary">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-box"
                  placeholder="type password"
                  value={user.password}
                  onChange={changeUser}
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Confirm Password
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input-box"
                  placeholder="confirm your password"
                  value={user.confirmPassword}
                  onChange={changeUser}
                  required
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                required
              />
              <label for="agreement" className="text-gray-600 ml-3 cursor-pointer">
                I have read and agree to the
                <a href="#" className="text-primary" >
                  terms & conditions
                </a>
              </label>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                onClick={onSubmit}
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                create account
              </button>
            </div>
          </form>

          <div className="mt-6 flex justify-center relative">
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            <div className="text-gray-600 uppercase px-3 bg-white relative z-10">
              OR SINGUP IN WITH
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href="#"
              className="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
