// Book: title, author, description, type, page.

import { useState } from "react";
import ModalFormBooks from "./ModalFormBook";
import TableBooks from "./TableBook";
import { ButtonCreate } from "./styles";

const DEFAULT_BOOK = {
  title: "",
  author: "",
  description: "",
  type: "",
  page: "",
};

const Exam05 = (props) => {
  const [formData, setFormData] = useState(DEFAULT_BOOK);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = () => {
    setFormData(DEFAULT_BOOK);
    setOpen(true);
  };

  const onEdit = (book) => {
    setFormData(book);
    setOpen(true);
  };

  const onDelete = (item) => {
    const newBook = dataSource.filter((book) => {
      return book.id !== item.id;
    });

    setDataSource(newBook);
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

    setFormData(DEFAULT_BOOK);
    setOpen(false);
  };

  return (
    <div>
      <ModalFormBooks
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />
      <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>

      <TableBooks dataSource={dataSource} onDelete={onDelete} onEdit={onEdit} />
      {/* ; // kiểm tra có input, output không */}
    </div>
  );
};

export default Exam05;

// SearchBox : component hay class
// handleClick : function (động từ)
