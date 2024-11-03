import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import ThemeBtn from "../ThemeBtn";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    // {
    //   name: "All Posts",
    //   slug: "/all-posts",
    //   active: authStatus,
    // },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="bg-gray-700 p-3 flex rounded-xl">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div>
            <ul className="flex ml-auto gap-3">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <NavLink
                      to={item.slug}
                      className={({ isActive }) =>
                        `inline-block px-6 py-2 duration-200 hover:bg-blue-500 text-white rounded-xl font-bold ${
                          isActive ? "bg-blue-600" : null
                        }
                        ${!isActive ? "bg-gray-900" : null}
                        `
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ) : null
              )}{" "}
              {authStatus && (
                <li
                  key="logout"
                  className="hover:bg-blue-500 px-6 py-2 rounded-xl bg-gray-900"
                >
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
          <ThemeBtn />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
