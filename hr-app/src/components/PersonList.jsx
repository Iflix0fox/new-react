import PersonCard from "./PersonCard.jsx";
import styles from "./Personlist.module.css";

function PersonList({ employees, handleDeleteEmployee }) {
  return (
    <>
      <div>
        <h1>hi </h1>
      </div>
      <div className={styles.content}>
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            {...employee}
            handleDeleteEmployee={handleDeleteEmployee}
          />
        ))}
      </div>
    </>
  );
}

export default PersonList;
