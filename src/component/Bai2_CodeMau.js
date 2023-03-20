import { useState } from "react";

const Bai2 = () => {
  const [student, setStudent] = useState({ id: "", score: '' });
  const [studentList, setStudentList] = useState([
    { id: "123", score: 10 },
    { id: "456", score: 10 },
  ]);

  const onClick = () => {
    setStudentList([
      ...studentList,
      student
    ]);

    setStudent({ id: "", score: '' })
  };

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setStudent({
      ...student,
      [name]: value
    })
  };

  return (
    <div>
      <div>
        <input name='id' value={student.id} onChange={onChange} />
        <input name='score' value={student.id} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </div>

      {studentList.map((item) => {
        return (
          <div>
            <div>Mã số học sinh: {item.id}</div>
            <div>Điểm số: {item.score}</div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Bai2;
