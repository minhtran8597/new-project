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
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      <div>
        <input name='id' value={student.id} onChange={onChange} />
        <input name='score' value={student.score} onChange={onChange} />
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