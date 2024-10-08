import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuid } from "uuid";

import ListName from "./components/ListName";
import TodoList from "./components/TodoList";
// import NavBar from "./components/NavBar";

import { user, todoData, listData } from "./data";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  const [listAll, setListAll] = useState(listData);
  const [editList, setEditList] = useState(false)
  const [todoAll, setTodoAll] = useState(todoData);
  const [list, setList] = useState()
  const [todo, setTodo] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleChangeList = (lista) => {
    setList(lista)
    const todoLista = todoAll.filter(el => el.idList === lista.id)
    return setTodo(todoLista)
  }

  const handleCreateTodo = (testo) => {

    setTodoAll([...todoAll, {
      idList: list.id,
      id: uuid(),
      name: testo,
      done: false
    }])
  }

  const handleCreateList = () => {

  }

  return (
    <div className="container-fluid ">
      {/* <NavBar /> */}
      <div className="row">
        <ListName
          user={user}
          listAll={listAll}
          windowSize={windowSize}
          onChangeList={handleChangeList}

        />
        <TodoList
          todo={todo}
          list={list}
          onCreate={handleCreateTodo}
          editList={editList}
          setEditList={setEditList}
        />
      </div>
    </div>
  );
};

export default App;
