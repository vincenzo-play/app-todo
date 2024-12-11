import TodoListItem from "./TodoListItem";

const TodoList = ({ todo, list, onChangeTodo, onDelete }) => {
  const completed = todo?.filter((t) => t.done);
  const notCompleted = todo?.filter((t) => !t.done);

  return (
    <div className="p-3 h-100">
      <div className={`${todo && "border-bottom"}`}>
        <div className="d-flex justify-content-between align-items-center p-3">
          <h3 className="fw-bold">{list ? list.name : ""}</h3>
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
    </div>
  );
};

export default TodoList;
