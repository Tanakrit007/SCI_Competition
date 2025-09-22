import React, { useState, useEffect } from "react";
import authService from "../service/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { login, user } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...logInData, [name]: value });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]); // ✅ ใส่ dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await authService.login(
        logInData.username,
        logInData.password
      );
      if (currentUser.status === 200) {
        Swal.fire({
          title: "User Login",
          text: currentUser?.data?.message,
          icon: "success",
        }).then(() => {
          login(currentUser.data);
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-primary mb-2">
                  Welcome Back!
                </h1>
                <p className="text-base-content/70">Login to your account</p>
              </div>

              {/* ✅ ใส่ onSubmit */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={logInData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
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
                    value={logInData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Sign In
                  </button>
                </div>
              </form>

              <div className="divider">OR</div>

              <div className="text-center">
                <p className="text-base-content/70">
                  Don't have an account?{" "}
                  <button
                    onClick={() => navigate("/register")} // ✅ ไปหน้า Register
                    className="link link-primary font-semibold"
                  >
                    Create one here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
