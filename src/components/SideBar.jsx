import { useState } from "react";
import User from "./User";

const SideBar = ({ user, list, windowSize, setTodo }) => {
  const [done, setDone] = useState(Array(list.length).fill(false));

  const handleChangeClick = (el) => {
    const newDone = Array(list.length).fill(false);
    newDone[el.id] = true;
    setDone(newDone);
    setTodo(el);
  };

  return (
    <div
      className={`${
        windowSize.width < 768 ? "border-bottom" : "vh-100 border-end"
      } col-12 col-md-3 bg-light shadow pe-0  overflow-scroll`}
      style={{ height: "300px" }}
    >
      <User user={user} />

      <div className="p-4">
        <div className="list-group">
          {list.map((el) => (
            <button
              key={el.id}
              type="button"
              className={`list-group-item list-group-item-action ${
                done[el.id] ? "active" : " "
              }`}
              onClick={() => handleChangeClick(el)}
            >
              {el.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
