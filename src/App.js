import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import ListName from "./components/List/ListName";
import TodoList from "./components/Todo/TodoList";
import NavBar from "./components/NavBar";

import NewActivity from "./components/Todo/NewActivity";
import { deleteData, getData, patchData, postData } from "./utils";
import ReactModal from "react-modal";
import CoreModal from "./components/core/CoreModal";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  const [lists, setLists] = useState();
  const [todos, setTodos] = useState();
  const [list, setList] = useState()
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

  useEffect(() => {
    getData("/api/lists").then((data) => {
      setLists(data);
    }).catch(() => setError("Errore nella lettura dei dati"))
  }, [todos, list])

  const handleChangeList = (lista) => {
    setList(lista);
    getData(`api/todos?listId=${lista.id}`).then((data) => {
      setTodos(data);
    }).catch(() => setError("Errore nella lettura dei dati"))
  }

  const handleCreateTodo = (text) => {
    postData("/api/todos", { name: text, listId: list.id, done: false }).then((newTodo) => {
      setTodos([...todos, newTodo]);
    }).catch(() => setError("Errore nella creazione dell'attività"))
    setLists([...lists], list.count++)
  }

  const handleUpdateTodo = (updatedTodo, newValue) => {
    patchData(`api/todos/${updatedTodo.id}`, newValue).then((patchedTodo) => {
      const todoIdx = todos.findIndex((t) => t.id === updatedTodo.id);
      const tmpTodos = [...todos];
      tmpTodos[todoIdx] = patchedTodo;
      setTodos(tmpTodos);
    }).catch(() => setError("Errore nell'aggiornamento dei dati"))

    const updatedListAll = lists.map((list) =>
      list.id === updatedTodo.idList
        ? { ...list, count: newValue.done ? list.count + 1 : list.count - 1 }
        : list
    );
    setLists(updatedListAll);
  };

  const handleCreateList = () => {
    postData("/api/lists", { name: "Nuova lista" }).then((newList) => {
      setLists([...lists, newList]);
    }).catch(() => setError("Errore nella creazione della lista"))
  };
  const handleChangeListName = (id, text) => {
    patchData(`/api/lists/${id}`, { name: text }).then((patchedList) => {
      const listIdx = lists.findIndex((l) => l.id === id);
      const tmpLists = [...lists];
      tmpLists[listIdx] = patchedList;
      setLists(tmpLists);
    }).catch(() => setError("Errore nel cambio del nome della lista"))
  }

  const handleDeleteList = (id) => {
    deleteData(`/api/lists/${id}`).then(() => {
      setLists(lists.filter((el) => el.id !== id));
      setList(undefined);
    }).catch(() => setError("Errore nella cancellazione della lista"))

  }
  const handleDeleteTodo = (todo) => {
    deleteData(`/api/todos/${todo.id}`).then(() => {
      setTodos(todos.filter((el) => el.id !== todo.id));
      setLists(lists.map((list) => {
        if (list.id === todo.idList) {
          return {
            ...list,
            count: list.count - 1
          }
        }
        return list;
      }))
    }).catch(() => setError("Errore nella cancellazione dell'attività"))
  }

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="d-flex flex-column h-100">
        <NavBar />
        <div className="row h-100">
          <div className="col-12 col-md-3 bg-light pe-0 overflow-auto">
            <ListName
              user={user}
              listAll={lists}
              windowSize={windowSize}
              onChangeList={handleChangeList}
              onCreate={handleCreateList}
            />
          </div>
          <div className="col-12 col-md-9 p-0 custom-vh-height overflow-hidden d-flex flex-column justify-content-between">
            <TodoList
              todo={todos}
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
