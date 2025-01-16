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

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  const [lists, setLists] = useState();
  const [todos, setTodos] = useState();
  const [list, setList] = useState()

  const [user, setUser] = useState({
    id: 1,
    name: "Vincenzo Nunziata",
    image: "https://github.com/lifeisfoo.png",
  });

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
    })
  }, [todos, list])

  const handleChangeList = (lista) => {
    setList(lista);
    getData(`api/todos?listId=${lista.id}`).then((data) => {
      setTodos(data);
    })

  }

  const handleCreateTodo = (text) => {
    postData("/api/todos", { name: text, listId: list.id, done: false }).then((newTodo) => {
      setTodos([...todos, newTodo]);
    });
    setLists([...lists], list.count++)
  }

  const handleUpdateTodo = (updatedTodo, newValue) => {

    patchData(`api/todos/${updatedTodo.id}`, newValue).then((patchedTodo) => {
      const todoIdx = todos.findIndex((t) => t.id === updatedTodo.id);
      const tmpTodos = [...todos];
      tmpTodos[todoIdx] = patchedTodo;
      setTodos(tmpTodos);
    })

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
    });
  };
  const handleChangeListName = (id, text) => { //Da completare
    patchData(`/api/lists/${id}`, { name: text }).then((patchedList) => {
      const listIdx = lists.findIndex((l) => l.id === id);
      const tmpLists = [...lists];
      tmpLists[listIdx] = patchedList;
      setLists(tmpLists);
    });
  }

  const handleDeleteList = (id) => {
    deleteData(`/api/lists/${id}`).then(() => {
      setLists(lists.filter((el) => el.id !== id));
      setList(undefined);
    })

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
    })
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
    </div>
  );
};

export default App;
