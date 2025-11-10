import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useState } from "react";
import employeeData from "./assets/employeeData.json";
import AddEmployee from "./components/Addemployee";

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleClick = (employeeData) => {
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        ...employeeData,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      },
    ]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/add-employee"
              element={
                <AddEmployee
                  formData={formData}
                  setFormData={setFormData}
                  handleClick={handleClick}
                />
              }
            />

            <Route path="/" element={<PersonList employees={employees} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
