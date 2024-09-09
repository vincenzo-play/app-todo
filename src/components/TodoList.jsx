import { useState } from "react";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ user, list, windowSize, setTodo }) => {
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
      } col-12 col-md-3 bg-light pe-0  overflow-scroll `}
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
              <div className="d-flex justify-content-between p-1">
                <div>{el.label}</div>
                <div>{el.activity.length}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center py-4">
        <button className="btn btn-primary rounded-5 ">
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
