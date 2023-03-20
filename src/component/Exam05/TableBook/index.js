import { Table } from "antd";
import { Actions, ButtonAction } from "./styles";

const TableBooks = (props) => {
  const columns = [
    {
      title: "Tên Sách",
      dataIndex: "title",
      key: "title",
      width: "15%",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      width: "15%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Thể loại",
      dataIndex: "type",
      key: "type",
      width: "10%",
    },
    {
      title: "Số trang",
      dataIndex: "page",
      key: "page",
      width: "10%",
    },
    {
      title: "",
      dataIndex: "actions",
      width: "20%",
      render: (text, item) => {
        console.log(item);
        return (
          <Actions>
            <ButtonAction
              onClick={() => {
                props.onEdit(item);
              }}
            >
              Edit
            </ButtonAction>
            <ButtonAction
              onClick={() => {
                props.onDelete(item);
              }}
            >
              Delete
            </ButtonAction>
          </Actions>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={props.dataSource} columns={columns} />;
    </div>
  );
};

export default TableBooks;
