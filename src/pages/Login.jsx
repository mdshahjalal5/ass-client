import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      await login(email, password);
      setTimeout(() => {
        toast.success("Logged in successfully!");
        navigate(from, {
          replace: true,
        }),
          1500;
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      setError("Google login failed.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-base-200">
      <Helmet>
        <title>Forgot Password || Subscription Box</title>
      </Helmet>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login
        </h2>

        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-accent w-full mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-accent w-full mt-2"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Log In
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-4"
        >
          Sign in with Google
        </button>

        <div className="mt-4 flex justify-between text-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary">
              Sign Up
            </Link>
          </p>
          <Link to="/auth/forgot-password" className="text-primary">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
