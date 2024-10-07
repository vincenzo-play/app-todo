import { useState } from "react";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListName = ({ user, listAll, windowSize, onChangeList }) => {
  const [done, setDone] = useState(Array(listAll.length).fill(false));

  const handleChangeClick = (el) => {
    onChangeList(el)
    const newDone = Array(listAll.length).fill(false);
    newDone[el.id] = true;
    setDone(newDone);
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
     <div className="d-flex justify-content-between align-items-center border-bottom mx-2">
        <User user={user} />
        <div>
          <button className="btn btn-cm-primary rounded-3">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
        </div>
        
     </div>

      <div className="p-4">
        <ul className="nav nav-pills flex-column mb-auto">
          {listAll.map((el) => (
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
              <span className="ms-2">{el.name}</span>
              <div className="fw-lighter ms-auto">{el.count}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListName;
