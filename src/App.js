import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuid } from "uuid";

import ListName from "./components/ListName";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";

import { user, todoData, listData } from "./data";
import NewActivity from "./components/NewActivity";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  const [listAll, setListAll] = useState(listData);
  const [editList, setEditList] = useState(false)
  const [newList, setNewList] = useState(false)
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
    setEditList(false)
    setNewList(false)
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
    setListAll([...listAll], list.count++)
  }

  const handleCreateList = () => {
    setTodo()
    setList()
    setNewList(true)
  }

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="d-flex flex-column h-100">
        <NavBar />
        <div className="row h-100">
          <div className="col-12 col-md-3 bg-light pe-0 overflow-auto">
            <ListName
              user={user}
              listAll={listAll}
              windowSize={windowSize}
              onChangeList={handleChangeList}
              onCreate={handleCreateList}
            />
          </div>
          <div className="col-12 col-md-9 p-0 custom-vh-height overflow-hidden d-flex flex-column justify-content-between">
            <TodoList
              todo={todo}
              list={list}
              newList={newList}
              setNewList={setNewList}
              editList={editList}
              setEditList={setEditList}
            />
            {todo && <NewActivity onCreate={handleCreateTodo} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
