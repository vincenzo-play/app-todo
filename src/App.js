import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import SideBar from "./components/SideBar";
import Activity from "./components/Activity";
import NavBar from "./components/NavBar";

import { user, list, activity } from "./data";

library.add(far, fas, fab);

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    // Aggiungi l'evento di ascolto
    window.addEventListener("resize", handleResize);

    // Rimuovi l'evento di ascolto al momento dello smontaggio del componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      <NavBar />
      <div className="row">
        <SideBar user={user} list={list} windowSize={windowSize} />
        <Activity activity={activity} />
      </div>
    </div>
  );
};

export default App;
