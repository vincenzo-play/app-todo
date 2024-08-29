import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  // const { toggle, setToggle, windowSize } = rest;

  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container-fluid">
        <div className="d-flex text-white p-3">
          <FontAwesomeIcon icon="fa-solid fa-spell-check" />
          <p className="m-0 fw-bold mx-1">ToDo</p>
        </div>
        {/* {windowSize.width < 768 && (
          <button className="navbar-toggler" onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon
              icon="fa-solid fa-ellipsis"
              className="text-white"
            />
          </button>
        )} */}
      </div>
    </nav>
  );
};

export default NavBar;
