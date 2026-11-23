
import { useState } from "react";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "login" | "register" | "dashboard"
  >("login");

  const handleLogin = (email: string, password: string) => {
    void password;
    alert(`Login submitted for: ${email}`);
    setCurrentPage("dashboard");
  };

  const handleRegister = (
    name: string,
    email: string,
    password: string
  ) => {
    void email;
    void password;

    alert(`Account registration submitted for: ${name}`);
    setCurrentPage("login");
  };

  const handleLogout = () => {
    setCurrentPage("login");
  };

  return (
    <>
      {currentPage === "login" ? (
        <Login
          onRegister={() => setCurrentPage("register")}
          onLogin={handleLogin}
        />
      ) : currentPage === "register" ? (
        <Register
          onLogin={() => setCurrentPage("login")}
          onRegister={handleRegister}
        />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}

      <Settings />
    </>
  );
}

export default App;
