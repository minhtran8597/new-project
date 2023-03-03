const TableUserList = (props) => {
  return (
    <table border>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
      {props.userList.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td></td>
            <button
              onClick={(e) => {
                props.onEdit(item);
              }}
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                props.onDelete(item);
              }}
            >
              Delete
            </button>
          </tr>
        );
      })}
      ;
    </table>
  );
};

export default TableUserList;
