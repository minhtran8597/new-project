import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "antd";

const ModalWeather = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (name !== "") {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=355b9b6e81644379b15114916232403&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
        });
    }
  }, [name]);

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} footer={null} onCancel={onCancel}>
      {data.location && data.current && (
        <div>
          <div>Thành phố: {data.location.name}</div>
          <div>
            lon: {data.location.lon}, lat: {data.location.lat}
          </div>
          <div>Nhiệt độ: {data.current.temp_c}</div>
          <div>Thời tiết: {data.current.condition.text}</div>
        </div>
      )}
    </Modal>
  );
};

export default ModalWeather;
