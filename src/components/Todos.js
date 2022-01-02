import React, { useState } from "react";
import styled from "styled-components";

const Todos = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <Container>
      <input type="text" onChange={handleChange} value={todo} />
      <button>Add</button>
    </Container>
  );
};

export default Todos;

const Container = styled.div``;
