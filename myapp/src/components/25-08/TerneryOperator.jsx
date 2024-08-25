import React, { useContext, useState } from "react";

const TerneryOperator = () => {
  const [data, setData] = useState(false);
  const [students, setStudents] = useState(["virat", "rohit", "rahul"]);

  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome!</h1>
          <h2>User Profile</h2>
        </div>
      ) : (
        <h1>Login </h1>
      )}

      {data && <h1>Condition true</h1>}

      {students.map((studentName, i) => (
        <h1 key={i}>{studentName}</h1>
      ))}
    </div>
  );
};

export default TerneryOperator;
