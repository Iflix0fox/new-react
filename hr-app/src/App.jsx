import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import AddEmployee from "./components/Addemployee";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
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

  const handleClick = () => {
    axios
      .post("http://localhost:3001/employees", {
        ...formData,
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

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
