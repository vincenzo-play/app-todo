import ReactModal from "react-modal";
import CoreModal from "../core/CoreModal";
import TodoListItem from "./TodoListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";

const TodoList = ({
  todo,
  list,
  onChangeTodo,
  onDelete,
  onChangeListName,
  onDeleteList,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [editableText, setEditableText] = useState();
  const [currentList, setCurrentList] = useState();
  const completed = todo?.filter((t) => t.done);
  const notCompleted = todo?.filter((t) => !t.done);

  useEffect(() => {
    if (list) {
      setCurrentList(list);
      setEditableText(list.name);
    }
    if (list?.name === "") setEditableText("Inserisci un nome");
  }, [list]);

  return (
    <div className="h-100">
      <div className={`${todo && "border-bottom"}`}>
        <div className="d-flex align-items-center" style={{ height: "89px" }}>
          {currentList && (
            <div className="p-4 w-100 d-flex justify-content-center align-items-center ">
              <div className="w-100">
                <input
                  id={currentList.id}
                  className={`h3 w-100 px-3 border-0 mx-1 my-0  ${
                    currentList.name === "" && "text-danger"
                  }`}
                  type="text"
                  value={editableText}
                  onChange={(e) => setEditableText(e.target.value)}
                  onBlur={() => onChangeListName(currentList.id, editableText)}
                />
              </div>

              <div className="d-flex">
                <button
                  className="btn btn-outline-danger btn-sm mx-2"
                  onClick={() => setOpenModal(true)}
                >
                  <FontAwesomeIcon
                    icon="fa-regular fa-trash-can "
                    className="opacity-50"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {todo ? (
        <div className="p-3 h-100 overflow-scroll">
          <ul className="list-group list-group-flush">
            <TodoListItem
              todo={notCompleted}
              onChangeTodo={onChangeTodo}
              onDelete={onDelete}
            />
          </ul>
          {completed.length > 0 && (
            <div>
              <p className="fw-bold m-0">Completati</p>
              <ul className="list-group list-group-flush">
                <TodoListItem
                  todo={completed}
                  onChangeTodo={onChangeTodo}
                  onDelete={onDelete}
                />
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className=" h-100 d-flex justify-content-center align-items-center">
          <p className=" fs-3 text-secondary text-opacity-25 m-0">
            Nessuna lista selezionata
          </p>
        </div>
      )}
      <ReactModal isOpen={openModal}>
        <CoreModal
          title={`Elimina ${list?.name}`}
          onClose={() => setOpenModal(false)}
          text={`Sei sicuro di eliminare ${list?.name} con ${todo?.length} elementi?`}
          onClick={() => {
            onDeleteList(list.id);
            setOpenModal(false);
            setEditableText("");
            setCurrentList();
          }}
        />
      </ReactModal>
    </div>
  );
};

export default TodoList;
