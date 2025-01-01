import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
StrictMode;
import HelloWorld from "./HelloWorld";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
    </Container>
  </StrictMode>
);
