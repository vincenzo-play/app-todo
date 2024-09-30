import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import ListName from "./components/ListName";
import TodoList from "./components/TodoList";
// import NavBar from "./components/NavBar";

import { user, data } from "./data";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

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

  return (
    <div className="container-fluid ">
      {/* <NavBar /> */}
      <div className="row">
        <ListName
          user={user}
          data={data}
          windowSize={windowSize}
          setTodo={setTodo}
        />
        <TodoList todo={todo} />
      </div>
    </div>
  );
};

export default App;
