import PersonCard from "./PersonCard";
import styles from "./Card.module.css";

const PersonList = ({ employees }) => {
  console.log("person list is working", employees);

  return (
    <>
      <section>
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills}
          />
        ))}
      </section>
    </>
  );
};

export default PersonList;
