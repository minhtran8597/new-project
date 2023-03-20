const FormUser = (props) => {
  // const FormUser = ({setFormData,formData,onClick})

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    props.setFormData({
      ...props.formData,
      [name]: value,
    });
  };

  return (
    <div>
      <input name="name" value={props.formData.name} onChange={onChange} />
      <input name="email" value={props.formData.email} onChange={onChange} />
      <button onClick={props.onClick}>
        {props.formData.id ? "Edit" : "Create"}
      </button>
    </div>
  );
};

export default FormUser;
