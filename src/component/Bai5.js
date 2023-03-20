import { useState, useMemo } from "react";  // useEffect giống như forEach, useMomo giống map
import FormUser from "./FormUser";
import TableUserList from "./TableUserList";

const DEFAULT_USER = { name: "", email: "" };

const Bai5 = () => {
  const [userList, setUserList] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [keyword, setKeyword] = useState("");
  // const [searchUserList, setSearchUserList] = useState([]);

  const searchUserList = useMemo(() => {  //useMemo update 1 dữ liêu, useEffect update nhiều dữ liệu
    if (keyword !== "") {
      const newUserList = userList.filter((user) => {
        return user.name.includes(keyword) || user.email.includes(keyword) ;
      });
      return newUserList
    } else {
      return userList
    }
  }, [keyword, userList]);  

  const onClick = () => {
    if (formData.id) {
      const newUserList = userList.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }
        return item;
      });
      setUserList(newUserList);
    } else {
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setFormData(DEFAULT_USER); // clear data
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  const onDelete = (item) => {
    // có giá trị, true, lớn hơn 0, string khác ''
    // không có giá trị, null, undefined, === 0, string ''
    const newUserList = userList.filter((user) => {
      return user.id !== item.id;
    });

    setUserList(newUserList);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <FormUser
        formData={formData}
        setFormData={setFormData}
        onClick={onClick}
      />
      <input value={keyword} onChange={onSearch} />
      {/* // <TableUserList userList={userList} onEdit={onEdit} onDelete={onDelete}/> */}

      <TableUserList
        searchUserList={searchUserList}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Bai5;
