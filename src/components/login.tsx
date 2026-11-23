
import React from "react";
import AuthLayout from "./AuthLayout";

type LoginProps = {
  onRegister: () => void;
  onLogin: (email: string, password: string) => void;
};

function Login({ onRegister, onLogin }: LoginProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-500">
          Login to your To-Do Manager account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Log In
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">
          Don't have an account?{" "}
          <button
            onClick={onRegister}
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Login;
