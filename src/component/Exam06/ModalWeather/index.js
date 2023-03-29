import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Image } from "antd";
import { Weather } from "./styles";

const ModalWeather = ({ name }) => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (name !== "") {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=a1d16077bc3e46c3bd3132659232403%20&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
          console.log(res.data);
        });
    }
  }, [name]);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={onCancel} footer={null}>
      {data.location && data.current && (
        <Weather>
          <div>Thành phố: {data.location.name}</div>
          <div>lon: {data.location.lon}</div>
          <div>lat: {data.location.lat}</div>
          <div>Thời gian: {data.location.localtime}</div>
          <div>Nhiệt độ : {data.current.temp_c}</div>
          <div>Thời tiết : {data.current.condition.text}</div>

          <div>
            Icon: <Image src={data.current.condition.icon} />
          </div>
          <div>Cloud: {data.current.cloud}</div>
        </Weather>
      )}
    </Modal>
  );
};

export default ModalWeather;
