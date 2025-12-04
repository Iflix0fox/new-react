import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import AddEmployee from "./components/AddEmployee";
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
      .post("https://hr-app-sws8.onrender.com/employees", {
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hr-app-sws8.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
