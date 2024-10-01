import { useState } from "react";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListName = ({ user, data, windowSize, setTodo }) => {
  const [done, setDone] = useState(Array(data.length).fill(false));

  const handleChangeClick = (el) => {
    const newDone = Array(data.length).fill(false);
    newDone[el.id] = true;
    setDone(newDone);
    setTodo(el);
  };

  const handleDoneHover = (value) =>{
    return done[value.id] && "active-cm text-white"
  }

  return (
    <div
      className={`${
        windowSize.width < 768 ? "border-bottom" : "vh-100 border-end"
      } col-12 col-md-3 bg-light pe-0  overflow-scroll `}
      style={{ height: "300px" }}
    >
      <User user={user} />

      <div className="p-4">
        <ul className="nav nav-pills flex-column mb-auto">
          {data.map((el) => (
            <li
              key={el.id}
              className={`nav-link d-flex align-items-center text-black ${handleDoneHover(el)}`}
              onClick={() => handleChangeClick(el)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-list"
                className={`colorPrimary ${handleDoneHover(el)}`}
                size="xs"
              />
              <span className="ms-2">{el.list}</span>
              <div className="fw-lighter ms-auto">{el.todo.length}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-center py-4">
        <button className="btn btn-cm-primary rounded-5 ">
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default ListName;
