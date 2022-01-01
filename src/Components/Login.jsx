import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firbase";
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        
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
    
          if (user.email === "" || user.password === "") {
            alert("Please fill all the fields");
          }else{
            try{
                // check if user is registered
                const result = await auth.signInWithEmailAndPassword(user.email, user.password);
                console.log(result);
                alert("Login Successful");
                history.push("/");
            }catch(error){
                alert("Login Failed");
            }
    
            setUser({
                email: "",
                password: "",
        
            })
          }
      }
    return (
        <div>
             <div className="container py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">
                LOGIN
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
                Login if you are a returing customer
            </p>
            <form action="">
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-600 mb-2 block">
                            Email Address <span className="text-primary">*</span>
                        </label>
                        <input type="email" value={user.email} name="email" id="email" onChange={changeUser} required className="input-box" placeholder="example@mail.com" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                        <input type="password" value={user.password} name="password" onChange={changeUser} required id="password"className="input-box" placeholder="type password" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" id="agreement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                        <label for="agreement" className="text-gray-600 ml-3 cursor-pointer">
                            Remember Me
                        </label>
                    </div>
                    <a href="#" className="text-primary">Forgot Password?</a>
                </div>
                <div className="mt-4">
                    <button type="submit"
                    onClick={onSubmit}
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Login
                    </button>
                </div>
            </form>

           
            <div className="mt-6 flex justify-center relative">
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                <div className="text-gray-600 uppercase px-3 bg-white relative z-10">
                    OR LOGIN IN WITH
                </div>
            </div>
            <div className="mt-4 flex gap-4">
                <a href="#"
                    className="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm">
                    Facebook
                </a>
                <a href="#"
                    className="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm">
                    Google
                </a>
            </div>
            

            <p className="mt-4 text-gray-600 text-center">
                Don't have an account? <Link to="/register"  className="text-primary">Register Now
                </Link>
            </p>
        </div>
    </div>
        </div>
    )
}

export default Login
