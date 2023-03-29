import { Button, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Actions, Country, Image, Population } from "./styles";

const getColor = (population) => {
  if (population < 5) {
    return "darkgreen";
  }

  if (population < 10) {
    return "darkgoldenrod";
  }

  return "darkred";
};

const TableCoutry = (props) => {
  const columns = [
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "15%",
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
      key: "country",
      width: "15%",
      render: (_, item) => {
        return (
          <Country>
            <Image src={item.countryFlag} />
            <div>
              <h6> {item.country}</h6>
              <div>{item.countryCode}</div>
            </div>
          </Country>
        );
      },
    },

    {
      title: "Dân số",
      dataIndex: "population",
      key: "population",
      align: "center", // thuộc tính của antd ko phải css
      width: "15%",
      render: (_, item) => {
        const color = getColor(item.population);
        return (
          <Population color={color}>
            {item.population} <UserOutlined />
          </Population>
        );
      },
    },

    {
      title: "",
      dataIndex: "actions",
      width: "20%",
      render: (text, item) => {
        console.log(item);
        return (
          <Actions>
            <Button
              onClick={() => {
                props.onGetWeather(item.name);
              }}
            >
              Weather
            </Button>
            <Button
              disabled={props.itemLoading}
              onClick={() => {
                props.onEdit(item.id);
              }}
            >
              Edit
            </Button>
            <Button
              disabled={props.itemLoading}
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              Delete
            </Button>
          </Actions>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        loading={props.loading}
        dataSource={props.dataSource}
        columns={columns}
      />
      ;
    </div>
  );
};

export default TableCoutry;
