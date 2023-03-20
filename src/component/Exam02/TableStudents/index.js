import { Table, Button } from "antd";

const TableStudents = (props) => {
  const columns = [
    {
      title: "Tên học sinh",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
    },
    { title: "Lớp", dataIndex: "className", key: "className" },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        console.log(item);
        return (
          <div>
            <Button
              onClick={() => {
                props.onEdit(item);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.onDelete(item);
              }}
            >
              Delete
            </Button>
          </div>
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

export default TableStudents;
