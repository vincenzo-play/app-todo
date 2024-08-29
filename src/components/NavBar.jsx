import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container-fluid">
        <div className="d-flex text-white p-2">
          <FontAwesomeIcon icon="fa-solid fa-spell-check" size="lg" />
          <p className="m-0 fw-bold mx-1">ToDo</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
