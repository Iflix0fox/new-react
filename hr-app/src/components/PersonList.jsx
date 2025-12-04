import { useEffect, useState } from "react";
import PersonCard from "./PersonCard.jsx";
import axios from "axios";

function PersonList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://hr-app-sws8.onrender.com/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return employees.map((employee) => (
    <PersonCard key={employee.id} {...employee} />
  ));
}

export default PersonList;
