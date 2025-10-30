import "./App.css";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import employeeData from "./assets/employeeData.json";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PersonCard
          name="Maria"
          title="CEO"
          salary="5000€"
          phone="040 123 4567"
          email="maria@example.com"
          animal="Cat"
        />
        <PersonCard
          name="Kati"
          title="Developer"
          salary="4200€"
          phone="040 765 4321"
          email="kati@example.com"
          animal="Dog"
        />
        <PersonCard
          name="Karin"
          title="Designer"
          salary="3900€"
          phone="050 987 6543"
          email="karin@example.com"
          animal="Rabbit"
        />
        <PersonCard
          name="Brad"
          title="Designe manger"
          salary="7900€"
          phone="050 111 6543"
          email="brad@example.com"
          animal="cat"
        />
        <PersonList employees={employeeData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
