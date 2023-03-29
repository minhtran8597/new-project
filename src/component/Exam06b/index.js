import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import TableCities from "./TableCities";
import ModalFormCity from "./ModalFormCity";
import ModalWeather from "./ModalWeather";
import ButtonImport from "./ButtonImport";
import { SearchContainer, SearchBox, ButtonCreate } from "./styles";

const DEFAULT_CITY = {
  name: "",
  country: "",
  countryCode: "",
  countryFlag: "",
  population: 0,
};

const Exam06 = () => {
  const [keyword, setKeyword] = useState("");
  const [formData, setFormData] = useState(DEFAULT_CITY);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [openWeather, setOpenWeather] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const searchedDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.name.includes(keyword) || item.country.includes(keyword);
      });
    }

    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);

    axios
      .get("https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onCreate = () => {
    setFormData(DEFAULT_CITY);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true);

    axios
      .get(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities/${id}`)
      .then((res) => {
        setFormData(res.data);
        setItemLoading(false);
        setOpen(true);
      });
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        setItemLoading(true);

        axios
          .delete(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities/${id}`)
          .then((res) => {
            setItemLoading(false);
            fetchData();
          });
      },
    });
  };

  const onSubmit = (id, data) => {
    setSubmitLoading(true);

    if (id) {
      axios
        .put(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities/${id}`, data)
        .then((res) => {
          setSubmitLoading(false);
          setFormData(DEFAULT_CITY);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post("https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities", data)
        .then((res) => {
          setSubmitLoading(false);
          setFormData(DEFAULT_CITY);
          setOpen(false);
          fetchData();
        });
    }
  };

  const onGetWeather = (name) => {
    setCityName(name);
    setOpenWeather(true);
  };

  const onImport = async (items) => {
    setTableLoading(true);

    for (let i = 0; i < items.length; i++) {
      await axios.post(
        "https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities",
        items[i]
      );
    }

    fetchData();
  };

  // const onImport = (items) => {
  //   const promises = []

  //   for(let i = 0; i < items.length; i++) {
  //     promises.push(axios.post("https://6401dc8a0a2a1afebef3bf4b.mockapi.io/cities", items[i]))
  //   }

  //   Promise.all(promises).then(() => {
  //     fetchData();
  //   })
  // }

  return (
    <div>
      <ModalFormCity
        open={open}
        loading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />

      <ModalWeather
        open={openWeather}
        setOpen={setOpenWeather}
        name={cityName}
      />

      <SearchContainer>
        <SearchBox onChange={onSearch} />

        <div>
          <ButtonImport onImport={onImport} />
          <ButtonCreate onClick={onCreate}>New City</ButtonCreate>
        </div>
      </SearchContainer>

      <TableCities
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={searchedDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
        onGetWeather={onGetWeather}
      />
    </div>
  );
};

export default Exam06;
