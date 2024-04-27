import "./App.css";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import DateForm from "./components/DateForm";
import { useState } from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type, color) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //     color: color,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // showAlert("Dark Mode is Enabled","success","warning");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Dark Mode is Disabled","success","success");
    }
  };
  return (
    <>
      <div className="container">
        <Router>
          <Navbar title="Time Checker" mode={mode} toggleMode={toggleMode} />
          {/* <Alert alertMsg={alert} /> */}
          <Routes>
            <Route
              exact
              path="/hours"
              element={
                <TestForm
                  paddingVal="my-3"
                  mode={mode}
                  title="Enter The text to Analyze below"
                  title2="Calculate Hours"
                />
              }
            />
            <Route
              exact
              path="/date"
              element={
                <DateForm
                  paddingVal="my-3"
                  mode={mode}
                  title="Enter The text to Analyze below"
                  title2="Calculate Hours"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
