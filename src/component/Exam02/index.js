import { Button } from "antd";
import { useState } from "react";
import TableStudents from "./TableStudents";
import ModalFormStudent from "./ModalFormStudent";

const DEFAULT_STUDENT = { name: "", studentId: "", score: "", className: "" };

const Exam02 = (props) => {
  const [formData, setFormData] = useState(DEFAULT_STUDENT);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = () => {
    setFormData(DEFAULT_STUDENT);
    setOpen(true);
  };

  const onEdit = (student) => {
    setFormData(student);
    setOpen(true);
  };

  const onDelete = (item) => {
    const newStudents = dataSource.filter((student) => {
      return student.id !== item.id;
    });

    setDataSource(newStudents);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (id, data) => {
    // const onSubmit = ({data, id})
    if (id) {
      const newDataSoure = dataSource.map((item) => {
        return item.id === id ? { id: id, ...data } : item;
      });

      setDataSource(newDataSoure);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...data,
        },
      ]);
    }

    setFormData(DEFAULT_STUDENT);
    setOpen(false);
  };

  return (
    <div>
      <ModalFormStudent
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />
      <Button onClick={onCreate}>New Student</Button>

      <TableStudents
        dataSource={dataSource}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      {/* ; // kiểm tra có input, output không */}
    </div>
  );
};

export default Exam02;

// SearchBox : component hay class
// handleClick : function (động từ)
