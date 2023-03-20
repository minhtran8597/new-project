import { useState } from "react";

const Exam01 = () => {
  const [numbers, setNumbers] = useState([1, 1, 4, 6, 8, 3, 5, 5, 9, 17, 15]);

  const onClick = () => {
    // lọc ra những số chẵn
    const newNumber = numbers.filter((item) => {
      return item % 2 === 0;
    });
    setNumbers(newNumber);

    // lọc ra những số chia hết chia hết cho 3

    const newNumber2 = numbers.filter((item) => {
      return numbers % 3 === 0;
    });
    setNumbers(newNumber2);

    // lọc ra những số duy nhất (get unique array)

    const data = {};
    numbers.forEach((item) => {
      data[item] = true; // data[]

      // data = {1: true, 4: true, 6: true...}
    });

    const newNumber3 = Object.keys(data);

    setNumbers(newNumber3);
    return (
      <div>
        <button onClick={onClick}>Click me</button>

        {numbers.map((item) => {
          return item;
        })}
      </div>
    );
  };
};
export default Exam01;
