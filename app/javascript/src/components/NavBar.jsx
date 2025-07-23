import React from "react";

import classnames from "classnames";
import Profile from "components/Profile";
import { NavLink } from "react-router-dom";

import routes from "../route";

const NavBar = ({ onToggleSidebar, isFocused }) => (
  <div className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between overflow-visible border-r bg-white shadow-sm">
    <div className="mt-4 flex flex-col items-center space-y-4">
      <i className="ri-book-fill text-3xl" />
      <NavLink
        exact
        activeClassName="bg-blue-100 rounded-md p-1"
        to={routes.blogs}
      >
        <i className="ri-layout-row-line text-2xl" />
      </NavLink>
      <NavLink
        exact
        activeClassName="bg-blue-100 rounded-md p-1"
        to={routes.createBlog}
      >
        <i className={classnames("ri-edit-line text-2xl")} />
      </NavLink>
      <NavLink
        exact
        activeClassName="bg-blue-100 rounded-md p-1"
        to={routes.myBlogs}
      >
        <i className={classnames("ri-folder-3-line text-2xl")} />
      </NavLink>
      <i
        className={classnames("ri-menu-fold-line cursor-pointer text-2xl", {
          "rounded-md bg-blue-100 p-1": isFocused,
        })}
        onClick={onToggleSidebar}
      />
    </div>
    <Profile />
  </div>
);

export default NavBar;
