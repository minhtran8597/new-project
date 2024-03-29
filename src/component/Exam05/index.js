// Book: title, author, description, type, page.

import { useState, useEffect, useMemo } from "react";
import ModalFormBooks from "./ModalFormBook";
import TableBooks from "./TableBook";
import { ButtonCreate, SearchContainer, SearchBox } from "./styles";
import axios from "axios";

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
  const [tableLoading, setTableLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  // GET: lấy thông tin dữ liệu
  // axiout.get(url)
  // POST: use khi muốn tạo mới thông tin dữ liệu
  // axious.post(url, formData) // dữ liệu vừa được tạo trên server
  // PUT / PATCH: sử dụng khi muốn update dữ liệu
  // axious.put(url, formData)  // dữ liệu vừa được cập nhật trên server
  // DELETE: sử dụng khi muốn xóa dữ liệu đó
  // axious.delete(url) // true hoặc false

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(async () => {
  //   const res = await axios.get(
  //     "https://64146a189172235b86942d58.mockapi.io/api/vi/book"
  //   );
  //   setDataSource(res.data);
  // }, []);   --> không chạy

  const searchDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.title.includes(keyword) || item.author.includes(keyword);
      });
    }
    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);

    axios
      .get("https://64146a189172235b86942d58.mockapi.io/api/vi/book")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };
  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onCreate = () => {
    setFormData(DEFAULT_BOOK);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true);

    axios
      .get(`https://64146a189172235b86942d58.mockapi.io/api/vi/book/${id}`)
      .then((res) => {
        setFormData(res.data);
        setOpen(true);
        setItemLoading(false);
      });
  };

  const onDelete = (id) => {
    setItemLoading(true);
    axios
      .delete(`https://64146a189172235b86942d58.mockapi.io/api/vi/book/${id}`)
      .then((res) => {
        setItemLoading(false);
        fetchData();
      });
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
    setSubmitLoading(true); //báo hiệu đang gởi dữ liệu
    // const onSubmit = ({data, id})
    if (id) {
      axios
        .put(
          `https://64146a189172235b86942d58.mockapi.io/api/vi/book/${id}`,
          data
        )
        .then((res) => {
          setSubmitLoading(false); //báo hiệu dữ liệu xử lý xong
          setFormData(DEFAULT_BOOK);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post("https://64146a189172235b86942d58.mockapi.io/api/vi/book", data)
        .then((res) => {
          setSubmitLoading(false); //báo hiệu dữ liệu xử lý xong
          setFormData(DEFAULT_BOOK);
          setOpen(false);
          fetchData();
        });
    }

    // setDataSource([
    //   ...dataSource,
    //   {
    //     id: Math.random(),
    //     ...data,
    //   },
    // ]);
  };

  return (
    <div>
      <ModalFormBooks
        open={open}
        loading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />
      <SearchContainer>
        <SearchBox onChange={onSearch} value={keyword} />
        <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>
      </SearchContainer>

      <TableBooks
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={searchDataSource}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      {/* ; // kiểm tra có input, output không */}
    </div>
  );
};

export default Exam05;

// SearchBox : component hay class
// handleClick : function (động từ)
