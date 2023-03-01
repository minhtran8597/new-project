import React from "react";

const DEFAULT_USER = { name: "", email: "" };

const TablerUsers = () => {
  const [users, setUserList] = useState([
    {
      name: "A",
      email: "a@gmail.com",
    },
    {
      name: "B",
      email: "b@gmail.com",
    },
  ]);
  const [formData, setFormData] = useState(DEFAULT_USER);

  const onChange = (e) => {
    const name = e.target.name;
    const email = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  const onClick = () => {
    setUsers([...users, formData]);

    setFormData[DEFAULT_USER];
  };

  return (
    <div>
      <div>
        <input name="name" value={formData.name} onChange={onChange} />
        <input name="email" value={formData.name} onChange={onChange} />
        <input phone="phone" value={formData.phone} onChange={onChange} />
        <button onClick={onClick}>Add</button>
        <button onEdit = {onEdit}>Edit</button>
      </div>

      {users.map((user) => {
        return (
          <div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Bai3;
