import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    school: "",
    phone: "",
    password: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submit userData:", userData);
      // TODO: authService.register(userData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-primary mb-2">
                  Create your account
                </h1>
                <p className="text-base-content/70"></p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* School */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">School</span>
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={userData.school}
                    onChange={handleChange}
                    placeholder="Enter your school"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Type */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Account Type</span>
                  </label>
                  <select
                    name="type"
                    value={userData.type}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select type</option>
                    <option value="teacher">teacher</option>
                    <option value="student">student</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Create Account
                  </button>
                </div>
              </form>

              <div className="divider">OR</div>
              <div className="text-center">
                <p className="text-base-content/70">
                  Already have an account?{" "}
                  <button className="link link-primary font-semibold">
                    Sign in here
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

export default Register;
