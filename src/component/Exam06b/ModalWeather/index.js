import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import { Item, Condition } from "./styles";

const ModalWeather = ({ open, setOpen, name }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (open) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=a1d16077bc3e46c3bd3132659232403%20&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
        });
    }
  }, [open]);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} footer={null} onCancel={onCancel}>
      {data.location && data.current && (
        <div>
          <Item>Thành phố: {data.location.name}</Item>
          <Item>
            lon: {data.location.lon}, lat: {data.location.lat}
          </Item>
          <div>
            <img src="/images/giotnuoc.png" width={16} />
            Nhiệt độ (C): {data.current.temp_c}
            <sup>&#9900;</sup>
          </div>
          <Item>
            Thời tiết:
            <Condition>
              {data.current.condition.text}
              <img src={data.current.condition.icon} />
            </Condition>
          </Item>
        </div>
      )}
    </Modal>
  );
};

export default ModalWeather;
