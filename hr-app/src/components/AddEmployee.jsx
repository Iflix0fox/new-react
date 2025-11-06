const AddEmployee = ({ formData, setFormData, handleClick }) => {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDeafalut();
    handleClick();
    setFormData({});
  };

  return (
    <>
      <section className="Container">
        <h2>Add new person</h2>
        <form className="form" onSubmit={handleClick}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            id="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />

          <button type="submit"> Add Employee</button>
        </form>
        <p>Your name is: {formData.name}</p>
      </section>
    </>
  );
};

export default AddEmployee;
