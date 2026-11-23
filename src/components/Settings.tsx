
import useLocalStorage from "../hooks/useLocalStorage";

type Preferences = {
  theme: "light" | "dark";
  fontSize: number;
};

function Settings() {
  const [preferences, setPreferences] =
    useLocalStorage<Preferences>("preferences", {
      theme: "light",
      fontSize: 16,
    });

  const toggleTheme = () => {
    setPreferences({
      ...preferences,
      theme: preferences.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <div
      style={{
        backgroundColor:
          preferences.theme === "light" ? "#ffffff" : "#1e293b",
        color:
          preferences.theme === "light" ? "#000000" : "#ffffff",
        fontSize: preferences.fontSize,
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h2>Settings</h2>

      <p>Current Theme: {preferences.theme}</p>

      <p>Font Size: {preferences.fontSize}px</p>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default Settings;
