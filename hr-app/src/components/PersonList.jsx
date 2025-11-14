import PersonCard from "./PersonCard.jsx";

function PersonList({ employees }) {
  return employees.map((employee) => (
    <PersonCard key={employee.id} {...employee} />
  ));
}
export default PersonList;
