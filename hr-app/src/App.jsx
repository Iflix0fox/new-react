import "./App.css";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import employeeData from "./assets/employeeData.json";
import AddEmployee from "./components/Addemployee";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    age: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
  });

  const handleClick = () => {
    setEmployees([
      ...employees, // make a copy of the existing array
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        age: formData.age,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        isFavourite: false,
      },
    ]);
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <PersonList employees={employeeData} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
