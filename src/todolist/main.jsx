import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "../hello-world/HelloWorld";
import Container from "../hello-world/Container";
import TodoList from "./TodoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
    </Container>
  </StrictMode>
);
