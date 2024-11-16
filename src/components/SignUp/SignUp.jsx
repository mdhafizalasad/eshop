import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import logo from "../../assets/logo2.png"; // Your logo image here
import signupImage from "../../assets/signup-image.png"; // Image for the left column

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signUpError, setSignUpError] = useState("");
  const { createUser, googleLogin, githubLogin, updateUserName, verifyEmail } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*?[A-Z])/.test(password)) {
      setSignUpError("Please provide one uppercase letter");
      return;
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setSignUpError("Please provide at least one special character (#?!@$%^&*-)");
      return;
    }

    if (password.length < 6) {
      setSignUpError("Please provide at least 6 characters");
      return;
    }

    setSignUpError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setSignUpError("");
        verifyEmail();
        updateUserName(name);
        navigate(from, { replace: true });
      })
      .catch((error) => setSignUpError(error.message));
  };

  const handleGoogleSignUp = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch(console.error);
  };

  const handleGithubSignUp = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-[70vh] flex items-center bg-base-200 p-4 md:p-12 ">
      
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
            <img src={logo} alt="Logo" className="w-26 h-16 mb-4" /> {/* Increased logo size */}
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
          </div>
          
          <form onSubmit={handleRegistration} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
                required
              />
              {signUpError && <p className="text-red-500">{signUpError}</p>}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? Please login
                </Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>
          </form>

          {/* Social Media Login */}
          <div className="flex flex-col space-y-2 mt-6">
            <button onClick={handleGoogleSignUp} className="btn btn-outline flex items-center justify-center">
              <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
              Sign Up with Google
            </button>
            <button onClick={handleGithubSignUp} className="btn btn-outline flex items-center justify-center mt-2">
              <img src={githubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
              Sign Up with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
