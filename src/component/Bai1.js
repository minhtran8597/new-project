import { useState, useMemo } from "react";

const Bai1 = () => {
  // const [user, setUser] = useState({
  //   name: "Minh",
  //   email: "tranthienminh@gmail.com",
  // });
  // const [arr, setArr] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  // ]);
  const [count, setCount] = useState(0); //useState trả về biến và 1 function để gán cho biến đó
  // const [doubleCount, setDoubleCount] = useState([]); --> khi dùng useEffect
  // const [users, setUsers] = useState([
  //   { name: "a", email: "a@gmail.com" },
  //   { name: "b", email: "b@gmail.com" },
  //   { name: "c", email: "c@gmail.com" },
  // ]);
  
  //  useEffect(() => {
  //   console.log(count)
  //   setDoubleCount(count * 2)
  //  }, [count])  // useEffect chỉ bắt sự kiện khi count thay đổi nên khi count = 0 chưa xảy ra sự kiện

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const onClick = () => {
    setCount(count + 1);

    // e.g : double = count * 2 -> count lúc này vẫn bằng 0;
  };

  //   const newUser = {
  //     ...user,
  //     email: `${user.name}${count}@gmail.com`,
  //   };
  //   setUser(newUser);
  // };

  // const onClick2 = () => {
  //   const newArr = arr.map((item) => {
  //     return item*2
  //   })
  //   setArr(newArr)
  // }

  //const onClick2 = () => {
  // const newArr = arr.filter((item) => {
  // if (item % 3 === 0){
  //   return item
  // }   --> không viết theo kiểu này (hạn chế)
  //return item % 3 === 0;

  // if (item !=nul && item != undefined) = if(item)
  //});
  //setArr(newArr);

  // const newUsers = users.map((item) => {
  //   if (item.name === "a") {
  //     return { name: "d", email: "d@gmail.com " };
  //   }
  //   return item;
  // });
  // setUsers(newUsers);

  // setUsers([
  //   ...users, // lấy hết tất cả các phần tử của array đó ghi đè nó lại
  //   {
  //     name: 'd', email: 'd@gmail.com'
  //   }
  // ])

  //   setUsers([
  //     {
  //       name: "d",
  //       email: "d@gmail.com",
  //     },
  //     ...users,
  //   ]);
  // };

  // return (
  //   <div>
  //     {/* {arr.map((item) => {
  //       return <div>{item}</div>;
  //     })} */}
  //     {/* <div>Tên là: {user.name}</div>
  //     <div>Email là: {user.email}</div> */}
  //     <div>Count là: {count}</div>
  //     <button onClick={onClick}>Click me</button>

  //     {/* {users.map((item) => {
  //       return (
  //         <div>
  //           <div>Tên là: {item.name} </div>
  //           <div>Email là: {item.email} </div>
  //         </div>
  //       );
  //     })} */}
  //   </div>
  // );
  return (
    <div>
      <div>Count là: {count}</div>
      <div>Double Count là : {doubleCount}</div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Bai1;
