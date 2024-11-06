import logoTodo from "../assets/todoLogoRid.svg"

const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-md bg-color-primary ">
      <div className="container-fluid">
        <div className="d-flex text-white p-2">
        <img src={logoTodo} alt="logo"    
        style={{
          width: "40px",
          height: "40px"
        }}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
