import User from "./User";

const SideBar = ({ user, list, ...rest }) => {
  const { windowSize } = rest;

  return (
    <div
      className={`${
        windowSize.width < 768 ? " " : "vh-100 border-end"
      } col-12 col-md-3 bg-light border-buttom shadow pe-0`}
    >
      <User user={user} />

      <div className="p-4">
        <div className="list-group">
          {list.map((el) => (
            <button
              type="button"
              className={`list-group-item list-group-item-action ${
                el.active ? "active" : " "
              }`}
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
