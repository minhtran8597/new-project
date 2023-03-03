import { useState } from "react";

const DEFAULT_USER = { name: "", email: "" };

const Bai3 = () => {
  const [userList, setUserList] = useState([
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

  const onClick = () => {
    if (formData.id) {
      const newUserList = userList.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }
        return item;
      });
      setUserList(newUserList);
    } else {
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setFormData[DEFAULT_USER]; // clear data
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  return (
    <div>
      <div>
        <input name="name" value={formData.name} onChange={onChange} />
        <input name="email" value={formData.name} onChange={onChange} />
        <button onClick={onClick}>{formData.id ? "Edit" : "Create"}</button>
      </div>

      {userList.map((item) => {
        return (
          <div>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <button
              onClick={(e) => {
                onEdit(item);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Bai3;
