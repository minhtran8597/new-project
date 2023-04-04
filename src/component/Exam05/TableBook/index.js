import { Button, Table } from "antd";
import { Actions } from "./styles";

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
    </div>
  );
};

export default TableBooks;
