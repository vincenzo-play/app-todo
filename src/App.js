import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import SideBar from "./components/SideBar";
import Activity from "./components/Activity";
import NavBar from "./components/NavBar";

import { user, list } from "./data";

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
    <div className="container-fluid p-0 overflow-hidden">
      <NavBar />
      <div className="row">
        <SideBar
          user={user}
          list={list}
          windowSize={windowSize}
          setTodo={setTodo}
        />
        <Activity todo={todo} />
      </div>
    </div>
  );
};

export default App;
