import React, { useState } from "react";
import styled from "styled-components";

const Todos = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  return (
    
      <Container>
          <input type="text" onChange={handleChange} />
          <button></button>
      </Container>
    
  );
};

export default Todos;

const Container = styled.div``;
