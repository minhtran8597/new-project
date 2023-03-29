import { useState, useEffect, useMemo } from "react";
import ModalFormCountry from "./ModalFormCountry";
import TableCountry from "./TableCountry";
import { SearchBox, SearchContainer } from "./styles";
import axios from "axios";
import { Button } from "antd";
import ModalWeather from "./ModalWeather";
import ButtonImport from "./ButtonImport";

const DEFAULT_COUNTRY = {
  city: "",
  country: "",
  countryCode: "",
  population: "",
  countryFlag: "",
};

const Exam06 = (props) => {
  const [formData, setFormData] = useState(DEFAULT_COUNTRY);
  const [dataSource, setDataSource] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [cityName, setCityName] = useState("");

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
        return item.city.includes(keyword) || item.country.includes(keyword);
      });
    }
    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);

    axios
      .get("https://64146a189172235b86942d58.mockapi.io/api/vi/cities")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };
  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onCreate = () => {
    setFormData(DEFAULT_COUNTRY);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true);

    axios
      .get(`https://64146a189172235b86942d58.mockapi.io/api/vi/cities/${id}`)
      .then((res) => {
        setFormData(res.data);
        setOpen(true);
        setItemLoading(false);
      });
  };

  const onDelete = (id) => {
    setItemLoading(true);
    axios
      .delete(`https://64146a189172235b86942d58.mockapi.io/api/vi/cities/${id}`)
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
          `https://64146a189172235b86942d58.mockapi.io/api/vi/cities/${id}`,
          data
        )
        .then((res) => {
          setSubmitLoading(false); //báo hiệu dữ liệu xử lý xong
          setFormData(DEFAULT_COUNTRY);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post("https://64146a189172235b86942d58.mockapi.io/api/vi/cities", data)
        .then((res) => {
          setSubmitLoading(false); //báo hiệu dữ liệu xử lý xong
          setFormData(DEFAULT_COUNTRY);
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

  const onGetWeather = (name) => {
    setCityName(name);
  };

  const onImport = async (items) => {
    setTableLoading(true);
    for (let i = 0; i < items.length; i++) {
      await axios.post(
        "https://64146a189172235b86942d58.mockapi.io/api/vi/cities",
        items[i]
      );
    }

    fetchData();
  }; // cái này của back-end không dùng ở đây.

  // const onImport = (items) => {
  //   const promise = [];
  //   for (let i = 0; i < items.length; i++) {
  //     axios.post(
  //       ("https://64146a189172235b86942d58.mockapi.io/api/vi/cities", items[i])
  //     );
  //   }

  //   Promise.all(promise).then(() => {
  //     fetchData();
  //   });
  // };

  return (
    <div>
      <ModalFormCountry
        open={open}
        loading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />

      <ModalWeather name={cityName} />
      <SearchContainer>
        <SearchBox onChange={onSearch} value={keyword} />
        <div>
          <ButtonImport onImport={onImport} />
          <Button onClick={onCreate}>New Country</Button>
        </div>
      </SearchContainer>

      <TableCountry
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={searchDataSource}
        onDelete={onDelete}
        onEdit={onEdit}
        onGetWeather={onGetWeather}
      />
      {/* ; // kiểm tra có input, output không */}
    </div>
  );
};

export default Exam06;

// SearchBox : component hay class
// handleClick : function (động từ)
