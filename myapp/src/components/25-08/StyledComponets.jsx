import React from "react";
import styled from "styled-components";

const StyledComponets = () => {
  const Title = styled.h1`
    font-size: 20px;
    color: red;
  `;

  const styles = {
    color: "blue",
  };
  return (
    <div className="" style={styles}>
      StyledComponets
    </div>
  );
};

export default StyledComponets;
