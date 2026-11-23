
import { useState, type FormEvent } from "react";
import AuthLayout from "./AuthLayout";

type RegisterProps = {
  onLogin: () => void;
  onRegister: (name: string, email: string, password: string) => void;
};

function Register({ onLogin, onRegister }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(name, email, password);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Create Account
        </h1>

        <p className="mb-8 text-center text-slate-500">
          Join our To-Do Manager today
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

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
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Register Now
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account?{" "}
          <button
            onClick={onLogin}
            className="font-semibold text-blue-600 hover:underline"
          >
            Log In
          </button>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Register;
