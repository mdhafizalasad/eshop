import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import logo from "../../assets/logo2.png"; 
import signupImage from "../../assets/signup-image.png"; 

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInUser, googleLogin, githubLogin, passwordReset } =
    useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          alert("User Login sucessfully done");
        }
        form.reset();
        navigate(from, { replace: true });
       
       
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // password reset
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    //console.log(email);
    setUserEmail(email);
  };

  const handleForgetPassword = () => {
    //console.log(userEmail);
    if (!userEmail) {
      alert("Please enter an email");
      return;
    }
    passwordReset(userEmail)
      .then(() => {
        alert("Please check your email and reset password by click the link");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          alert("User Login Successfully");
        }
        console.log(user);
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        alert("Login Successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-[70vh] flex items-center bg-base-200 p-4 md:p-12">
     <div className="container mx-auto flex flex-col md:flex-row items-stretch shadow-lg rounded-lg overflow-hidden">
      {/* Left Column with Image */}
      <div className="md:w-2/3 w-full min-h-[70vh] p-6 md:p-12 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
          <img
            src={signupImage}
            alt="Sign Up Animation"
            className="w-full h-auto rounded-lg animate-pulse"
          />
        </div>

        {/* Right Column with Sign-Up Form */}
        <div className="md:w-1/3 w-full h-full p-6 md:p-6 bg-white flex flex-col justify-center">
        <div className="flex flex-col items-center mb-4">
        <img src={logo} alt="Logo" className="w-26 h-16 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onBlur={handleEmailBlur}
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label text-center">
                  <a
                    onClick={handleForgetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forget Password?
                  </a>
                </label>
                <label className="label text-center">
                  <Link
                    to="/sign-up"
                    className="label-text-alt link link-hover"
                  >
                    New to Website ? Create an account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-outline"
                />
              </div>
            </form>
            <div className="form-control mt-0 m-8">
              <button onClick={handleGoogleLogin} className="btn btn-outline">
                
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="w-5 h-5 mr-2"
                />
                Login with Google
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-outline mt-2">
              <img src={githubLogo} alt="GitHub logo" className="w-5 h-5 mr-2" /> Login with GitHub
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
