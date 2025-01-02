import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
StrictMode;
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text={"Klik Saya"} message={"Selamat Belajar React 19"} />
      <MyButton
        text={"Smash Saya"}
        onClicked={() => alert("Selamat Belajar React 19")}
      />
      <MyButton
        text={"Smash Saya"}
        onClicked={() => alert("Selamat Belajar React 19")}
      />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("You Clicked Toolbar");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>
);
