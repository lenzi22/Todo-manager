
import { useState } from "react";
import Login from "./components/login";
import Register from "./components/Register";
import Settings from "./components/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "login" | "register"
  >("login");

  const handleLogin = (email: string, password: string) => {
    void password;
    alert(`Login submitted for: ${email}`);
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

  return (
    <>
      {currentPage === "login" ? (
        <Login
          onRegister={() => setCurrentPage("register")}
          onLogin={handleLogin}
        />
      ) : (
        <Register
          onLogin={() => setCurrentPage("login")}
          onRegister={handleRegister}
        />
      )}

      <Settings />
    </>
  );
}

export default App;
