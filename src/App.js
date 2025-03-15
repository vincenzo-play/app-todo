import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuid } from "uuid";

import ListName from "./components/List/ListName";
import TodoList from "./components/Todo/TodoList";
import NavBar from "./components/NavBar";

import NewActivity from "./components/Todo/NewActivity";
// import { deleteData, getData, patchData, postData } from "./utils";
import ReactModal from "react-modal";
import CoreModal from "./components/core/CoreModal";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  const [listAll, setListAll] = useState([]);
  const [todoAll, setTodoAll] = useState([]);
  const [list, setList] = useState()
  const [todo, setTodo] = useState();
  const [error, setError] = useState();

  const user = {
    id: 1,
    name: "Vincenzo Nunziata",
    image: "https://picsum.photos/200",
  };

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


  const handleCreateTodo = (text) => {
    const newTodo = {
      idList: list.id,
      id: uuid(),
      name: text,
      done: false
    }
    const updatedTodoAll = [...todoAll, newTodo]
    setTodoAll(updatedTodoAll)

    if (list) {
      const updatedTodoList = updatedTodoAll.filter((item) => item.idList === list.id);
      setTodo(updatedTodoList);
    }

    setListAll([...listAll], list.count++)
  }

  const handleUpdateTodo = (updatedTodo, newValue) => {
    const updatedTodoAll = todoAll.map((item) =>
      item.idList === updatedTodo.idList && item.id === updatedTodo.id
        ? { ...item, ...newValue }
        : item
    );

    const updatedListAll = listAll.map((list) => {
      if (list.id === updatedTodo.idList) {
        return {
          ...list,
          count: updatedTodo.done
            ? list.count + 1
            : list.count - 1
        };
      }
      return list;
    });

    setTodoAll(updatedTodoAll);
    setListAll(updatedListAll);

    if (list) {
      const updatedTodoList = updatedTodoAll.filter((item) => item.idList === list.id);
      setTodo(updatedTodoList);
    }

  };

  const handleCreateList = () => {
    const newList = {
      id: uuid(),
      name: "Nuova lista",
      count: 0
    }
    const newListUpdated = [...listAll, newList]
    setListAll(newListUpdated)
  }

  const handleChangeListName = (id, text) => {
    const filtered = listAll.findIndex((el) => el.id === id)
    const newListUpdated = [...listAll]
    newListUpdated[filtered].name = text
    setListAll(newListUpdated)
  }

  const handleDeleteList = (id) => {
    const filtered = listAll.filter((el) => el.id !== id)
    setListAll(filtered)
    setList(null)
    setTodo(null)
  }


  const handleDeleteTodo = (todo) => {
    const updatedTodoAll = todoAll.filter(
      (el) => !(el.idList === todo.idList && el.id === todo.id)
    );
    setTodoAll(updatedTodoAll);
    if (list) {
      const updatedTodoList = updatedTodoAll.filter((el) => el.idList === list.id);
      setTodo(updatedTodoList);
    }
    const updatedListAll = listAll.map((item) =>
      item.id === list.id ? { ...item, count: item.count - 1 } : item
    );
    setListAll(updatedListAll);
  };

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
              onChangeTodo={handleUpdateTodo}
              onChangeListName={handleChangeListName}
              onDelete={handleDeleteTodo}
              onDeleteList={handleDeleteList}
            />
            <NewActivity onCreate={handleCreateTodo} list={list} />
          </div>
        </div>
      </div>
      <ReactModal isOpen={Boolean(error)}>
        <CoreModal
          title={`Errore`}
          onClose={() => setError(false)}
          text={`Si è verificato un errore: "${error}"`}
          error={Boolean(error)}
        />
      </ReactModal>
    </div>
  );
};

export default App;
