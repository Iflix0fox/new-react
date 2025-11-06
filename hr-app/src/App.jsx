import "./App.css";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import employeeData from "./assets/employeeData.json";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <PersonList employees={employeeData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
