import React from "react";

const Mapping = ({ students }) => {
  console.log(students);
  return (
    <div>
      <h1>Mapping</h1>
      {students.map((name) => (
        <h1>{name}</h1>
      ))}
    </div>
  );
};

export default Mapping;
