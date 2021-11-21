import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar({ categories }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Chunky Funky
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            {categories.map((c) => {
              return (
                <li className="nav-item" key={c.id}>
                  <NavLink className="nav-link" to={`/category/${c.id}`}>
                    {c.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => alert("Click en Login")}
            >
              Login
            </button>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
