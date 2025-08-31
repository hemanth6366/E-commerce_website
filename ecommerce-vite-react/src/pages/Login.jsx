import React from "react";

const Login = ({ goToPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // here you could check login credentials before redirect
    goToPage("profile"); // ✅ redirect to profile
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 pt-12 bg-[url('/background1.jpg')] bg-cover bg-center">
      <div className="text-center max-w-sm mx-auto p-8 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome Back!</h1>
        <p className="text-gray-600 mb-8">Sign in to access your account.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          />
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            <div className="text-right mt-2">
              <a
                href="#"
                onClick={() => goToPage("forgot-password")}
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* New account line */}
        <p className="mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a
            href="#"
            onClick={() => goToPage("signup")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
